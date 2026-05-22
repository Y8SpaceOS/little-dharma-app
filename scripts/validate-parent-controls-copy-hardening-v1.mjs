import fs from 'fs';
import path from 'path';

const root = process.cwd();
const checks = [];
const pass = (msg) => checks.push(`PASS: ${msg}`);
const warn = (msg) => checks.push(`WARN: ${msg}`);
const fail = (msg) => checks.push(`FAIL: ${msg}`);

const paths = {
  service: path.join(root, 'src/services/parentControlsCopyService.ts'),
  docs: path.join(root, 'docs/parent/PARENT_CONTROLS_COPY_HARDENING_V1.md'),
  controlsRoute: path.join(root, 'app/(parent)/controls.tsx'),
  privacyRoute: path.join(root, 'app/(parent)/privacy.tsx'),
  childWorlds: path.join(root, 'app/(child)/worlds.tsx'),
  pkg: path.join(root, 'package.json'),
  seed: path.join(root, 'src/data/seed/seed.ts'),
};

const read = (file) => (fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '');
const service = read(paths.service);
const docs = read(paths.docs);
const controlsRoute = read(paths.controlsRoute);
const privacyRoute = read(paths.privacyRoute);
const pkg = read(paths.pkg);

fs.existsSync(paths.service) ? pass('Service file exists.') : fail('Missing src/services/parentControlsCopyService.ts');
fs.existsSync(paths.docs) ? pass('Docs file exists.') : fail('Missing docs/parent/PARENT_CONTROLS_COPY_HARDENING_V1.md');

const requiredExports = [
  'parentControlsCopyModelVersion',
  'buildParentControlsCopy',
  'getParentControlsTrustSummary',
  'getParentControlsPrivacyCopy',
  'getParentControlsLocalFirstCopy',
  'getParentControlsContentReadinessCopy',
  'getParentControlsSacredRespectCopy',
  'getParentControlsNoPressureCopy',
  'getParentControlsCurrentLimitsCopy',
  'getParentControlsCopySummary',
];
for (const name of requiredExports) {
  service.includes(`export const ${name}`) || service.includes(`export function ${name}`)
    ? pass(`Export present: ${name}`)
    : fail(`Missing export: ${name}`);
}

for (const token of ['AsyncStorage.setItem(', 'markStoryComplete(', 'markJourneyStoryCompleted(', 'setJourneyProgress(', 'pruneStoryCompletions(']) {
  !service.includes(token) ? pass(`No forbidden state mutation token: ${token}`) : fail(`Forbidden state mutation token found: ${token}`);
}

for (const token of [
  'fetch(', 'axios', 'supabase', 'posthog', 'analytics.track(', 'telemetry.',
  'MailComposer.composeAsync(', 'SMS.sendSMSAsync(', 'whatsapp://', 'expo-notifications',
  'Share.share(', 'Linking.openURL(', 'navigator.share(', 'invite', 'referral',
]) {
  !service.toLowerCase().includes(token.toLowerCase()) ? pass(`No banned implementation token: ${token}`) : fail(`Banned implementation token found: ${token}`);
}

for (const token of [
  "from 'expo-sharing'", "from 'react-native-share'", "from 'expo-mail-composer'", "from 'expo-sms'",
  "from 'expo-linking'", "from 'expo-notifications'", "from '@segment/analytics-react-native'",
]) {
  !service.includes(token) ? pass(`No banned import token: ${token}`) : fail(`Banned import token found: ${token}`);
}

for (const snippet of [
  'progress stays on this device',
  'no public child profile',
  'no ads, no rankings, no pressure loops',
  'stories are prepared with care',
  'sacred content is handled respectfully',
  'exact age is not required',
]) {
  service.toLowerCase().includes(snippet) ? pass(`Service includes required copy concept: ${snippet}`) : fail(`Missing required copy concept: ${snippet}`);
}

const requiredSections = [
  'PR title and purpose', 'Roadmap alignment', 'Why Parent Controls Copy Hardening follows Parent Sharing Copy',
  'Parent controls copy goal', 'What this copy is', 'What this copy is not', 'Control-surface copy principles',
  'Privacy copy rules', 'Local-first copy rules', 'Content readiness copy rules', 'Sacred respect copy rules',
  'No-pressure/no-gamification copy rules', 'Current limits copy rules', 'UI integration status',
  'Privacy/no-backend assumptions', 'No hard gamification rules', 'Relationship to Parent Weekly Summary v1',
  'Relationship to Journey Detail Parent Trust Copy v1', 'Relationship to Parent Sharing Copy v1',
  'What this PR changes', 'What this PR does not do', 'Follow-up recommendations for PR #139 and PR #140',
  'Final PR #138 readiness statement'
];
for (const section of requiredSections) {
  docs.includes(section) ? pass(`Docs section present: ${section}`) : fail(`Missing docs section: ${section}`);
}

/does not add new parent controls\/functionality|no new controls\/functionality/i.test(docs)
  ? pass('Docs include no new controls/functionality statement.')
  : fail('Docs missing no new controls/functionality statement.');

if (docs.includes('PR #139: Privacy Center Copy Hardening v1') && docs.includes('PR #140: Parent Onboarding Trust Copy v1')) {
  pass('Follow-ups are roadmap-aligned.');
} else {
  fail('Follow-up roadmap naming mismatch.');
}

const uiBound = controlsRoute.includes('getParentControlsTrustSummary') || privacyRoute.includes('getParentControlsTrustSummary');
if (uiBound) pass('UI binding found in existing parent route.');
else warn('UI binding deferred (allowed).');

!fs.existsSync(path.join(root, 'app/(child)/parent-controls.tsx')) ? pass('No new child routes added for parent controls.') : fail('Unexpected child route added.');

const worlds = read(paths.childWorlds);
worlds.includes('Story Library') ? fail('Story Library regression found in child worlds copy.') : pass('No Story Library regression in child worlds route.');

const bannedTerms = ['xp', 'coins', 'streak', 'leaderboard', 'rank', 'score', 'performance', 'achievement unlocked', 'referral', 'viral'];
const safeContext = /(no\s+xp|no\s+coins|no\s+streak|no\s+leaderboard|no\s+rank|no\s+score|no\s+performance|no\s+referral|non-viral|not\s+viral|viral\s+mechanics|viral\s+bait)/i;
for (const term of bannedTerms) {
  const regex = new RegExp(`\\b${term.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'i');
  if (regex.test(service) && !safeContext.test(service)) fail(`Hard gamification term in service without negation context: ${term}`);
  else pass(`Hard-gamification guardrail ok for term: ${term}`);
}

!service.includes('childAge:') ? pass('No exact child age collection fields added.') : fail('Possible exact child age collection field found.');

fs.existsSync(paths.seed) ? pass('Existing seed file remains present.') : fail('Seed file missing.');
pkg.includes('validate:parent-controls-copy-hardening-v1') ? pass('Package script registered.') : fail('Missing package script registration.');

for (const line of checks) console.log(line);
const failed = checks.filter((line) => line.startsWith('FAIL')).length;
if (failed > 0) {
  console.error(`\nValidation failed with ${failed} FAIL check(s).`);
  process.exit(1);
}
console.log('\nValidation passed with no FAIL checks.');
