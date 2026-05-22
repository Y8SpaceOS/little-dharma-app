import fs from 'fs';
import path from 'path';

const root = process.cwd();
const checks = [];
const pass = (msg) => checks.push(`PASS: ${msg}`);
const warn = (msg) => checks.push(`WARN: ${msg}`);
const fail = (msg) => checks.push(`FAIL: ${msg}`);

const paths = {
  service: path.join(root, 'src/services/parentOnboardingTrustCopyService.ts'),
  docs: path.join(root, 'docs/parent/PARENT_ONBOARDING_TRUST_COPY_V1.md'),
  packageJson: path.join(root, 'package.json'),
  parentOnboardingRoute: path.join(root, 'app/(parent)/onboarding.tsx'),
  parentSetupCandidate: path.join(root, 'app/(parent)/gate.tsx'),
  childWorlds: path.join(root, 'app/(child)/worlds.tsx'),
  childToday: path.join(root, 'app/(child)/today.tsx'),
  newChildOnboardingRoute: path.join(root, 'app/(child)/onboarding.tsx'),
  seed: path.join(root, 'src/data/seed/seed.ts'),
};

const read = (file) => (fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '');
const service = read(paths.service);
const docs = read(paths.docs);
const pkg = read(paths.packageJson);
const childWorlds = read(paths.childWorlds);
const childToday = read(paths.childToday);
const parentOnboardingRoute = read(paths.parentOnboardingRoute);
const parentSetupCandidate = read(paths.parentSetupCandidate);

fs.existsSync(paths.service) ? pass('Service file exists.') : fail('Missing src/services/parentOnboardingTrustCopyService.ts');
fs.existsSync(paths.docs) ? pass('Docs file exists.') : fail('Missing docs/parent/PARENT_ONBOARDING_TRUST_COPY_V1.md');

const requiredExports = [
  'parentOnboardingTrustCopyModelVersion',
  'buildParentOnboardingTrustCopy',
  'getParentOnboardingWelcomeCopy',
  'getParentOnboardingLocalFirstCopy',
  'getParentOnboardingChildProfileCopy',
  'getParentOnboardingAgePrivacyCopy',
  'getParentOnboardingNoTrackingCopy',
  'getParentOnboardingNoSharingCopy',
  'getParentOnboardingNoMicRecordingCopy',
  'getParentOnboardingSacredRespectCopy',
  'getParentOnboardingParentControlCopy',
  'getParentOnboardingCopySummary',
];
for (const name of requiredExports) {
  service.includes(`export const ${name}`) || service.includes(`export function ${name}`)
    ? pass(`Export present: ${name}`)
    : fail(`Missing export: ${name}`);
}

for (const token of ['AsyncStorage.setItem(', 'markStoryComplete(', 'markJourneyStoryCompleted(', 'setJourneyProgress(', 'pruneStoryCompletions(']) {
  !service.includes(token)
    ? pass(`No forbidden state mutation token: ${token}`)
    : fail(`Forbidden state mutation token found: ${token}`);
}

for (const token of [
  'fetch(',
  'axios',
  'supabase',
  'posthog',
  'analytics.track(',
  'telemetry.',
  'MailComposer.composeAsync(',
  'SMS.sendSMSAsync(',
  'whatsapp://',
  'expo-notifications',
  'Share.share(',
  'Linking.openURL(',
  'navigator.share(',
  'invite',
  'referral',
]) {
  !service.toLowerCase().includes(token.toLowerCase())
    ? pass(`No banned implementation token: ${token}`)
    : fail(`Banned implementation token found: ${token}`);
}

for (const token of [
  "from 'expo-sharing'",
  "from 'react-native-share'",
  "from 'expo-mail-composer'",
  "from 'expo-sms'",
  "from 'expo-linking'",
  "from 'expo-notifications'",
  "from '@segment/analytics-react-native'",
  "from 'expo-file-system'",
  "from 'expo-av'",
  "from 'expo-media-library'",
]) {
  !service.includes(token) ? pass(`No banned import token: ${token}`) : fail(`Banned import token found: ${token}`);
}

for (const snippet of [
  'calm story world for your family',
  'progress stays on this device',
  'no public child profile',
  'exact age is not required',
  'no analytics or telemetry tracking',
  'no automatic sharing',
  'no microphone or recording',
  'sacred content is handled respectfully',
  'parents stay in control',
]) {
  service.toLowerCase().includes(snippet)
    ? pass(`Service includes required copy concept: ${snippet}`)
    : fail(`Missing required copy concept: ${snippet}`);
}

const requiredSections = [
  'PR title and purpose',
  'Roadmap alignment',
  'Why Parent Onboarding Trust Copy follows Privacy Center Copy Hardening',
  'Parent onboarding trust copy goal',
  'What this copy is',
  'What this copy is not',
  'Onboarding trust copy principles',
  'Welcome copy rules',
  'Local-first copy rules',
  'Child profile copy rules',
  'Age privacy copy rules',
  'No tracking copy rules',
  'No sharing copy rules',
  'No microphone/recording copy rules',
  'Sacred respect copy rules',
  'Parent control copy rules',
  'UI integration status',
  'Privacy/no-backend assumptions',
  'No hard gamification rules',
  'Relationship to Privacy Center Copy Hardening v1',
  'Relationship to Parent Controls Copy Hardening v1',
  'Relationship to Parent Sharing Copy v1',
  'What this PR changes',
  'What this PR does not do',
  'Follow-up recommendations for PR #141 and PR #142',
  'Final PR #140 readiness statement',
];
for (const section of requiredSections) {
  docs.includes(section) ? pass(`Docs section present: ${section}`) : fail(`Missing docs section: ${section}`);
}

/no new onboarding functionality/i.test(docs)
  ? pass('Docs include no new onboarding functionality statement.')
  : fail('Docs missing no new onboarding functionality statement.');

if (docs.includes('PR #141: Child Home Trust Microcopy v1') && docs.includes('PR #142: Story World Trust Microcopy v1')) {
  pass('Follow-ups are roadmap-aligned.');
} else {
  fail('Follow-up roadmap naming mismatch.');
}

const uiBound = /buildParentOnboardingTrustCopy|getParentOnboarding/.test(parentOnboardingRoute) ||
  /buildParentOnboardingTrustCopy|getParentOnboarding/.test(parentSetupCandidate);
if (uiBound) pass('UI binding found on an existing parent onboarding/setup route.');
else warn('UI binding deferred (allowed): no explicit existing parent onboarding route was modified.');

!fs.existsSync(paths.newChildOnboardingRoute)
  ? pass('No new child onboarding route added.')
  : fail('Unexpected new child onboarding route added.');

childWorlds.includes('Story Library') || childToday.includes('Story Library')
  ? fail('Story Library regression found in child-facing routes.')
  : pass('No Story Library regression detected in checked child-facing routes.');

const bannedTerms = ['xp', 'coins', 'streak', 'leaderboard', 'rank', 'score', 'performance', 'achievement unlocked', 'referral', 'viral'];
const safeContext = /(no\s+xp|no\s+coins|no\s+streak|no\s+leaderboard|no\s+rank|no\s+score|no\s+performance|no\s+referral|non-viral|not\s+viral|viral\s+mechanics|viral\s+bait)/i;
for (const term of bannedTerms) {
  const regex = new RegExp(`\\b${term.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'i');
  if (regex.test(service) && !safeContext.test(service)) fail(`Hard gamification term in service without negation context: ${term}`);
  else pass(`Hard-gamification guardrail ok for term: ${term}`);
}

!service.includes('childAge:') ? pass('No exact child age collection fields added.') : fail('Possible exact child age collection field found.');
fs.existsSync(paths.seed) ? pass('Existing seed file remains present.') : fail('Seed file missing.');
pkg.includes('validate:parent-onboarding-trust-copy-v1') ? pass('Package script registered.') : fail('Missing package script registration.');

for (const line of checks) console.log(line);
const failed = checks.filter((line) => line.startsWith('FAIL')).length;
if (failed > 0) {
  console.error(`\nValidation failed with ${failed} FAIL check(s).`);
  process.exit(1);
}
console.log('\nValidation passed with no FAIL checks.');
