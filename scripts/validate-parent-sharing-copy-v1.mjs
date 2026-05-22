import fs from 'fs';
import path from 'path';

const root = process.cwd();
const checks = [];
const pass = (msg) => checks.push(`PASS: ${msg}`);
const warn = (msg) => checks.push(`WARN: ${msg}`);
const fail = (msg) => checks.push(`FAIL: ${msg}`);

const paths = {
  service: path.join(root, 'src/services/parentSharingCopyService.ts'),
  docs: path.join(root, 'docs/parent/PARENT_SHARING_COPY_V1.md'),
  pkg: path.join(root, 'package.json'),
  childWorlds: path.join(root, 'app/(child)/worlds.tsx'),
  storyRoute: path.join(root, 'app/story/[slug].tsx'),
};

const read = (file) => (fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '');
const service = read(paths.service);
const docs = read(paths.docs);
const pkg = read(paths.pkg);

fs.existsSync(paths.service) ? pass('Service file exists.') : fail('Missing src/services/parentSharingCopyService.ts');
fs.existsSync(paths.docs) ? pass('Docs file exists.') : fail('Missing docs/parent/PARENT_SHARING_COPY_V1.md');

const requiredExports = [
  'parentSharingCopyModelVersion',
  'buildParentSharingCopy',
  'getParentSharingConsentCopy',
  'getParentSharingPrivacyCopy',
  'getParentSharingSafetyCopy',
  'getParentSharingBlessingCopy',
  'getParentSharingValueReflectionCopy',
  'getParentSharingDoNotShareRules',
  'getParentSharingAllowedUseCases',
  'getParentSharingCopySummary',
];
for (const name of requiredExports) {
  service.includes(`export const ${name}`) || service.includes(`export function ${name}`)
    ? pass(`Export present: ${name}`)
    : fail(`Missing export: ${name}`);
}

const bannedMutations = ['AsyncStorage.setItem(', 'markStoryComplete(', 'markJourneyStoryCompleted(', 'setJourneyProgress(', 'pruneStoryCompletions('];
for (const token of bannedMutations) {
  !service.includes(token) ? pass(`No forbidden state mutation token: ${token}`) : fail(`Forbidden state mutation token found: ${token}`);
}

const bannedImplTokens = [
  'fetch(', 'axios', 'supabase', 'posthog', 'analytics.track(', 'telemetry.',
  'MailComposer.composeAsync(', 'SMS.sendSMSAsync(', 'whatsapp://', 'expo-notifications',
  'Share.share(', 'Linking.openURL(', 'Clipboard.setString(', 'FileSystem.writeAsStringAsync(', 'MediaLibrary.saveToLibraryAsync(', 'IntentLauncher.startActivityAsync(', 'navigator.share(',
];
for (const token of bannedImplTokens) {
  !service.toLowerCase().includes(token.toLowerCase()) ? pass(`No banned implementation token: ${token}`) : fail(`Banned implementation token found: ${token}`);
}

const bannedImports = ['from \'expo-sharing\'', 'from \'react-native-share\'', 'from \'expo-mail-composer\'', 'from \'expo-sms\''];
for (const token of bannedImports) {
  !service.includes(token) ? pass(`No native sharing import: ${token}`) : fail(`Native sharing import found: ${token}`);
}

const requiredCopySnippets = [
  'when you choose',
  'private on this device',
  'child-safe',
  'care and respect',
  'No child profile, score, or streak is shared.',
];
for (const snippet of requiredCopySnippets) {
  service.toLowerCase().includes(snippet.toLowerCase()) ? pass(`Service includes required copy theme: ${snippet}`) : fail(`Missing required copy theme: ${snippet}`);
}

service.includes('allowedUseCases') ? pass('Service includes allowed use cases.') : fail('Service missing allowed use cases.');
service.includes('doNotShareRules') ? pass('Service includes do-not-share rules.') : fail('Service missing do-not-share rules.');

const requiredSections = [
  'PR title and purpose', 'Roadmap alignment', 'Why Parent Sharing Copy follows Journey Detail Parent Trust Copy',
  'Parent sharing copy goal', 'What this copy is', 'What this copy is not', 'Consent-first sharing principles',
  'Privacy copy rules', 'Child-safety copy rules', 'Sacred respect sharing rules', 'Allowed sharing use cases',
  'Do-not-share rules', 'Blessing copy rules', 'Value reflection copy rules', 'Parent trust bullet rules',
  'UI integration status', 'Privacy/no-backend assumptions', 'No hard gamification rules',
  'Relationship to Parent Weekly Summary v1', 'Relationship to Journey Detail Parent Trust Copy v1',
  'Relationship to Story Completion Moment v1', 'What this PR changes', 'What this PR does not do',
  'Follow-up recommendations for PR #138 and PR #139', 'Final PR #137 readiness statement'
];
for (const section of requiredSections) {
  docs.includes(section) ? pass(`Docs section present: ${section}`) : fail(`Missing docs section: ${section}`);
}

docs.includes('No hard gamification rules') ? pass('Docs include no-hard-gamification rules.') : fail('Docs missing no-hard-gamification rules.');
docs.includes('Privacy/no-backend assumptions') ? pass('Docs include privacy/no-backend assumptions.') : fail('Docs missing privacy/no-backend assumptions.');
/(does not implement sharing|not a sharing feature)/i.test(docs) ? pass('Docs include no implementation statement.') : fail('Docs missing explicit no-implementation statement.');

if (docs.includes('PR #138: Parent Controls Copy Hardening v1') && docs.includes('PR #139: Privacy Center Copy Hardening v1')) {
  pass('Follow-ups are roadmap-aligned.');
} else {
  fail('Follow-up roadmap naming mismatch.');
}

if (/deferred/i.test(docs) && /UI integration status/i.test(docs)) warn('UI binding deferred (allowed).');

const appChildRoute = path.join(root, 'app/(child)/parent-sharing-copy.tsx');
!fs.existsSync(appChildRoute) ? pass('No new child route for parent sharing copy.') : fail('New child route detected for parent sharing copy.');

const hardTerms = ['xp', 'coins', 'leaderboard', 'achievement unlocked', 'referral', 'viral'];
const safeContext = /(no\s+xp|no\s+coins|no\s+leaderboard|no\s+referral|non-viral|not\s+viral|viral\s+bait)/i;
for (const term of hardTerms) {
  const escaped = term.replace(/[-/\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(`\b${escaped}\b`, 'i');
  const inService = regex.test(service);
  const inDocs = regex.test(docs);

  if (inService && !safeContext.test(service)) fail(`Prohibited hard-gamification token found in service: ${term}`);
  else if (inService) pass(`Token appears in service guardrail context only: ${term}`);
  else if (inDocs) pass(`Token appears only in docs guardrail context: ${term}`);
  else pass(`No prohibited hard-gamification token: ${term}`);
}

!service.toLowerCase().includes('exact child age collection') ? pass('No exact child age collection implementation.') : fail('Exact child age collection implementation found.');

fs.existsSync(path.join(root, 'src/data/seed/seed.ts')) ? pass('Existing seed file remains present.') : fail('Seed file missing.');
pkg.includes('validate:parent-sharing-copy-v1') ? pass('Package script registered.') : fail('Missing package script registration.');

for (const line of checks) console.log(line);
const failed = checks.filter((line) => line.startsWith('FAIL')).length;
if (failed > 0) {
  console.error(`\nValidation failed with ${failed} FAIL check(s).`);
  process.exit(1);
}
console.log('\nValidation passed with no FAIL checks.');
