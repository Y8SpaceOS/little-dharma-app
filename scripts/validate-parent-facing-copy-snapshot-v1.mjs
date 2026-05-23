import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const root = process.cwd();
const checks = [];
const pass = (msg) => checks.push(`PASS: ${msg}`);
const warn = (msg) => checks.push(`WARN: ${msg}`);
const fail = (msg) => checks.push(`FAIL: ${msg}`);

const read = (file) => (fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '');

const parentServiceFiles = [
  'src/services/parentControlsCopyService.ts',
  'src/services/privacyCenterCopyService.ts',
  'src/services/parentOnboardingTrustCopyService.ts',
  'src/services/parentSharingCopyService.ts',
  'src/services/parentWeeklySummaryService.ts',
  'src/services/parentWeeklySummaryCopyPolishService.ts',
  'src/services/parentReflectionPromptCopyService.ts',
  'src/services/journeyParentTrustCopyService.ts',
  'src/services/parentControlsJourneySettingsCopyService.ts',
];

const expectedSurfaceIds = [
  'parent-controls-copy-hardening',
  'privacy-center-copy-hardening',
  'parent-onboarding-trust-copy',
  'parent-sharing-copy',
  'parent-weekly-summary',
  'parent-weekly-summary-copy-polish',
  'parent-reflection-prompt-copy',
  'journey-detail-parent-trust-copy',
  'parent-controls-journey-settings-copy',
];

const canonicalPromises = [
  'Progress stays on this device.',
  'No public child profile.',
  'Exact age is not required.',
  'No automatic sharing.',
  'No analytics or telemetry tracking in current scope.',
  'No microphone or recording in this version.',
  'No ads, rankings, streaks, leaderboards, or pressure loops.',
  'Sacred content is handled respectfully.',
  'Parents stay in control.',
  'Family can continue gently when ready.',
];

const forbiddenTerms = [
  'engagement', 'retention', 'growth loop', 'habit loop', 'performance', 'leaderboard', 'rank', 'score', 'streak',
  'assessment', 'report card', 'viral', 'referral', 'push', 'notification', 'whatsapp', 'tracking', 'analytics',
  'telemetry', 'cloud sync', 'account required', 'exact age required', 'public profile',
];

const implementationTokens = [
  'AsyncStorage.setItem', 'markStoryComplete', 'markJourneyStoryCompleted', 'setJourneyProgress', 'pruneStoryCompletions',
  'fetch(', 'axios', 'supabase', 'firebase', 'posthog', 'analytics.track', 'telemetry.', 'Share.share', 'MailComposer',
  'SMS.', 'expo-notifications', 'whatsapp://', 'openai',
];

const bannedImportTokens = [
  "from 'expo-sharing'", "from 'react-native-share'", "from 'expo-notifications'", "from 'expo-mail-composer'",
  "from 'expo-sms'", "from 'expo-linking'", "from 'expo-file-system'", "from 'expo-av'", "from 'react-native-audio-recorder-player'",
  "from '@segment/analytics-react-native'", "from '@react-native-firebase/analytics'", "from 'axios'", "from '@supabase/supabase-js'",
];

function assertFileExists(relPath) {
  const full = path.join(root, relPath);
  fs.existsSync(full) ? pass(`File exists: ${relPath}`) : fail(`Missing file: ${relPath}`);
}

function assertContains(content, needle, label) {
  content.includes(needle) ? pass(`${label}: ${needle}`) : fail(`Missing ${label}: ${needle}`);
}

function assertDoesNotContainImplementationTokens(content, tokens, label) {
  for (const token of tokens) {
    !content.toLowerCase().includes(token.toLowerCase())
      ? pass(`${label} clear: ${token}`)
      : fail(`${label} found: ${token}`);
  }
}

function assertForbiddenTermsOnlyInNegativeContext(content, label) {
  const quotedStrings = Array.from(content.matchAll(/'([^'\\]*(?:\\.[^'\\]*)*)'|"([^"\\]*(?:\\.[^"\\]*)*)"/g)).map((m) => (m[1] ?? m[2] ?? '').toLowerCase());
  const lowered = quotedStrings.join('\n');
  const negatives = ['no ', 'not ', 'without ', 'never ', 'does not', 'is not', "isn't", 'avoid', 'disabled'];

  for (const term of forbiddenTerms) {
    let index = lowered.indexOf(term);
    while (index !== -1) {
      const lineStart = lowered.lastIndexOf('\n', index) + 1;
      const lineEndRaw = lowered.indexOf('\n', index);
      const lineEnd = lineEndRaw === -1 ? lowered.length : lineEndRaw;
      const context = lowered.slice(lineStart, lineEnd);
      const isNegative = negatives.some((neg) => context.includes(neg));
      const isAllowedTrackingPhrase = term === 'tracking' && /(no tracking|not tracking|no analytics or telemetry tracking|no analytics\/telemetry tracking)/.test(context);
      if (!isNegative && !isAllowedTrackingPhrase) fail(`${label} forbidden term lacks negative context: ${term}`);
      index = lowered.indexOf(term, index + term.length);
    }
  }
  pass(`${label} forbidden terms are either absent or framed negatively.`);
}

function assertNoRouteChangesByName() {
  const hasHeadParent = execSync('git rev-parse --verify --quiet HEAD~1 >/dev/null; echo $?', { cwd: root, encoding: 'utf8' }).trim() === '0';
  const diffRange = hasHeadParent ? 'HEAD~1..HEAD' : 'HEAD';
  const changed = execSync(`git diff --name-only ${diffRange}`, { cwd: root, encoding: 'utf8' })
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  const routeChanges = changed.filter((file) => /^app\//.test(file));
  routeChanges.length === 0
    ? pass(`No app route files changed in commit diff (${diffRange}).`)
    : fail(`Route files changed in commit diff (${diffRange}): ${routeChanges.join(', ')}`);

  const parentRouteChanges = changed.filter((file) => /^app\/\(parent\)\//.test(file));
  const childRouteChanges = changed.filter((file) => /^app\/\(child\)\//.test(file));

  parentRouteChanges.length === 0
    ? pass(`No parent route changes detected in commit diff (${diffRange}).`)
    : fail(`Parent route changes detected in commit diff (${diffRange}): ${parentRouteChanges.join(', ')}`);

  childRouteChanges.length === 0
    ? pass(`No child route changes detected in commit diff (${diffRange}).`)
    : fail(`Child route changes detected in commit diff (${diffRange}): ${childRouteChanges.join(', ')}`);
}

const inventoryPath = 'src/services/parentTrustCopyInventoryService.ts';
const inventory = read(path.join(root, inventoryPath));
assertFileExists(inventoryPath);

for (const name of [
  'parentTrustCopyInventoryModelVersion',
  'buildParentTrustCopyInventory',
  'getParentTrustCopyInventorySurfaces',
  'getParentTrustCopyCanonicalPromises',
  'getParentTrustCopyInventorySummary',
]) {
  inventory.includes(`export const ${name}`) || inventory.includes(`export function ${name}`)
    ? pass(`Inventory export present: ${name}`)
    : fail(`Missing inventory export: ${name}`);
}

for (const file of parentServiceFiles) {
  assertFileExists(file);
}

for (const surfaceId of expectedSurfaceIds) {
  assertContains(inventory, `id: '${surfaceId}'`, 'surface id');
}

for (const promise of canonicalPromises) {
  assertContains(inventory, promise, 'canonical promise');
}

const serviceContents = parentServiceFiles.map((file) => ({ file, content: read(path.join(root, file)) }));
const allCopy = serviceContents.map((x) => x.content).join('\n');

const themeMatchers = [
  { theme: 'local-first/on-device progress', patterns: [/on this device/i, /local/i] },
  { theme: 'no public child profile', patterns: [/no public child profile/i] },
  { theme: 'exact age not required', patterns: [/exact age is not required/i, /exact age.*not required/i] },
  { theme: 'no automatic sharing', patterns: [/no automatic sharing/i, /not shared automatically/i] },
  { theme: 'no analytics/telemetry', patterns: [/no analytics/i, /no telemetry/i] },
  { theme: 'no microphone/recording', patterns: [/no microphone/i, /no recording/i] },
  { theme: 'no score/ranking/streak/pressure', patterns: [/no ads, rankings, streaks, leaderboards, or pressure loops/i, /no (score|ranking|streak|pressure)/i] },
  { theme: 'sacred respect/care', patterns: [/sacred/i, /respect/i] },
  { theme: 'parents stay in control', patterns: [/parents? stay in control/i, /parent control/i] },
  { theme: 'optional/gentle family continuation', patterns: [/gently when ready/i, /continue gently/i] },
];

for (const { theme, patterns } of themeMatchers) {
  patterns.some((pattern) => pattern.test(allCopy)) ? pass(`Collective theme covered: ${theme}`) : fail(`Collective theme missing: ${theme}`);
}

for (const { file, content } of serviceContents) {
  const lowered = content.toLowerCase();
  const missingInService = canonicalPromises.filter((p) => !lowered.includes(p.toLowerCase()));
  if (missingInService.length > 0) {
    warn(`${file} does not contain all canonical promises (expected for scoped surfaces).`);
  } else {
    pass(`${file} contains all canonical promises.`);
  }

  assertForbiddenTermsOnlyInNegativeContext(content, file);
  assertDoesNotContainImplementationTokens(content, implementationTokens, `${file} implementation tokens`);
  assertDoesNotContainImplementationTokens(content, bannedImportTokens, `${file} banned imports`);
}

!allCopy.includes('Story Library') ? pass('No Story Library regression in parent-facing services.') : fail('Story Library regression found in parent-facing services.');

for (const phrase of [
  'backend is active',
  'cloud account is required',
  'account required',
  'tracks child performance',
  'child is ranked',
  'child is scored',
  'exact age is required',
  'sharing happens automatically',
  'notifications are active',
  'reminders are active',
]) {
  !allCopy.toLowerCase().includes(phrase) ? pass(`No prohibited implication: ${phrase}`) : fail(`Prohibited implication detected: ${phrase}`);
}

assertNoRouteChangesByName();
assertFileExists('src/data/seed/seed.ts');

const pkg = read(path.join(root, 'package.json'));
assertContains(pkg, 'validate:parent-facing-copy-snapshot-v1', 'package script');

const validatorDoc = read(path.join(root, 'docs/parent/PARENT_FACING_COPY_SNAPSHOT_VALIDATOR_V1.md'));
if (!validatorDoc.includes('PR #154: Child-Facing Copy Inventory v1') || !validatorDoc.includes('PR #155: Child-Facing Copy Snapshot Validator v1')) {
  fail('Roadmap follow-up mismatch: expected PR #154 and PR #155 in validator docs.');
} else {
  pass('Roadmap follow-up names found in validator docs.');
}

for (const line of checks) console.log(line);
const failed = checks.filter((line) => line.startsWith('FAIL')).length;
if (failed > 0) {
  console.error(`\nValidation failed with ${failed} FAIL check(s).`);
  process.exit(1);
}
console.log('\nValidation passed with no FAIL checks.');
