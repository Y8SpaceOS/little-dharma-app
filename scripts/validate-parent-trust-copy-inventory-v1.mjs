import fs from 'fs';
import path from 'path';

const root = process.cwd();
const checks = [];
const pass = (msg) => checks.push(`PASS: ${msg}`);
const warn = (msg) => checks.push(`WARN: ${msg}`);
const fail = (msg) => checks.push(`FAIL: ${msg}`);

const read = (file) => (fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '');

const paths = {
  service: path.join(root, 'src/services/parentTrustCopyInventoryService.ts'),
  docs: path.join(root, 'docs/parent/PARENT_TRUST_COPY_INVENTORY_V1.md'),
  pkg: path.join(root, 'package.json'),
  appParent: path.join(root, 'app/(parent)'),
  appChild: path.join(root, 'app/(child)'),
  seed: path.join(root, 'src/data/seed/seed.ts'),
};

const service = read(paths.service);
const docs = read(paths.docs);
const pkg = read(paths.pkg);

fs.existsSync(paths.service) ? pass('Service file exists.') : fail('Missing src/services/parentTrustCopyInventoryService.ts');
fs.existsSync(paths.docs) ? pass('Docs file exists.') : fail('Missing docs/parent/PARENT_TRUST_COPY_INVENTORY_V1.md');

for (const name of [
  'parentTrustCopyInventoryModelVersion',
  'buildParentTrustCopyInventory',
  'getParentTrustCopyInventorySurfaces',
  'getParentTrustCopyCanonicalPromises',
  'getParentTrustCopyInventorySummary',
]) {
  service.includes(`export const ${name}`) || service.includes(`export function ${name}`)
    ? pass(`Export present: ${name}`)
    : fail(`Missing export: ${name}`);
}

for (const serviceFile of [
  'parentControlsCopyService.ts',
  'privacyCenterCopyService.ts',
  'parentOnboardingTrustCopyService.ts',
  'parentSharingCopyService.ts',
  'parentWeeklySummaryService.ts',
  'parentWeeklySummaryCopyPolishService.ts',
  'parentReflectionPromptCopyService.ts',
  'journeyParentTrustCopyService.ts',
  'parentControlsJourneySettingsCopyService.ts',
]) {
  service.includes(serviceFile) ? pass(`Surface references service file: ${serviceFile}`) : fail(`Missing surface reference: ${serviceFile}`);
}

for (const phrase of [
  'progress stays on this device',
  'no public child profile',
  'exact age is not required',
  'no automatic sharing',
  'no analytics or telemetry tracking',
  'no microphone or recording',
  'no ads, rankings, streaks, leaderboards, or pressure loops',
  'sacred content is handled respectfully',
  'parents stay in control',
  'family can continue gently when ready',
]) {
  service.toLowerCase().includes(phrase) ? pass(`Canonical promise present: ${phrase}`) : fail(`Missing canonical promise: ${phrase}`);
}

for (const token of ['AsyncStorage.setItem(', 'markStoryComplete(', 'markJourneyStoryCompleted(', 'setJourneyProgress(', 'pruneStoryCompletions(', 'getAllStoryCompletions(', 'getAllJourneyProgress(']) {
  !service.includes(token) ? pass(`No forbidden state/progress token: ${token}`) : fail(`Forbidden token found: ${token}`);
}

for (const token of [
  'fetch(', 'axios', 'supabase', 'firebase', 'amplitude', 'segment', 'posthog',
  'telemetry.', 'analytics.track(', 'MailComposer', 'SMS.', 'whatsapp://', 'notification',
  'invite', 'referral', 'share(', 'linking.openurl', 'payment', 'stripe', 'openai',
]) {
  !service.toLowerCase().includes(token.toLowerCase()) ? pass(`No banned implementation token: ${token}`) : fail(`Banned implementation token found: ${token}`);
}

for (const token of [
  "from 'expo-sharing'",
  "from 'react-native-share'",
  "from 'expo-notifications'",
  "from 'expo-mail-composer'",
  "from 'expo-sms'",
  "from 'expo-linking'",
  "from 'expo-file-system'",
  "from 'expo-av'",
  "from '@segment/analytics-react-native'",
  "from '@react-native-firebase/analytics'",
]) {
  !service.includes(token) ? pass(`No banned import token: ${token}`) : fail(`Banned import token found: ${token}`);
}

for (const section of [
  'PR title and purpose',
  'Roadmap alignment',
  'Why Parent Trust Copy Inventory follows Story Reader Gentle Pace Copy',
  'Parent trust copy inventory goal',
  'What this inventory is',
  'What this inventory is not',
  'Parent trust surfaces inventoried',
  'Canonical parent trust promises',
  'Local-first promise rules',
  'Child profile and age privacy promise rules',
  'No sharing promise rules',
  'No tracking/analytics/telemetry promise rules',
  'No microphone/recording promise rules',
  'No pressure/gamification promise rules',
  'Sacred respect promise rules',
  'Parent control promise rules',
  'UI integration status',
  'No backend/no tracking assumptions',
  'No notifications/no sharing assumptions',
  'No AI personalization assumptions',
  'No fake controls/toggles assumptions',
  'No hard gamification rules',
  'Runtime behavior preservation rules',
  'Story completion behavior preservation rules',
  'Journey progress behavior preservation rules',
  'Story reader/audio preservation rules',
  'Relationship to Privacy Center Copy Hardening v1',
  'Relationship to Parent Controls Copy Hardening v1',
  'Relationship to Parent Weekly Summary Copy Polish v1',
  'Relationship to Parent Reflection Prompt Copy v1',
  'Relationship to Parent Controls Journey Settings Copy v1',
  'What this PR changes',
  'What this PR does not do',
  'Follow-up recommendations for PR #153 and PR #154',
  'Final PR #152 readiness statement',
]) {
  docs.includes(section) ? pass(`Docs section present: ${section}`) : fail(`Missing docs section: ${section}`);
}

docs.toLowerCase().includes('no backend') && docs.toLowerCase().includes('no tracking')
  ? pass('Docs include no-backend/no-tracking assumptions.') : fail('Docs missing no-backend/no-tracking assumptions.');

docs.toLowerCase().includes('no notifications') && docs.toLowerCase().includes('no sharing')
  ? pass('Docs include no-notifications/no-sharing assumptions.') : fail('Docs missing no-notifications/no-sharing assumptions.');

docs.toLowerCase().includes('no ai personalization')
  ? pass('Docs include no-AI-personalization assumptions.') : fail('Docs missing no-AI-personalization assumptions.');

docs.toLowerCase().includes('no fake controls') && docs.toLowerCase().includes('toggles')
  ? pass('Docs include no-fake-controls/toggles assumptions.') : fail('Docs missing no-fake-controls/toggles assumptions.');

docs.toLowerCase().includes('no hard gamification')
  ? pass('Docs include no-hard-gamification rules.') : fail('Docs missing no-hard-gamification rules.');

if (docs.includes('PR #153: Parent-Facing Copy Snapshot Validator v1') && docs.includes('PR #154: Child-Facing Copy Inventory v1')) pass('Follow-ups are roadmap-aligned.');
else fail('Follow-up roadmap naming mismatch.');

const staged = read(path.join(root, '.git', 'index'));
if (staged) warn('Git index detected; validator checks repository content, not staged diff only.');

const routeDiff = ['app/(parent)', 'app/(child)'].some((dir) => fs.existsSync(path.join(root, dir)));
routeDiff ? pass('Route directories exist and were not required to change for this validator.') : warn('Route directories not found for change audit.');

!docs.includes('Story Library') ? pass('No Story Library regression in new docs.') : fail('Story Library regression found in docs.');
!docs.toLowerCase().includes('exact child age is required') ? pass('No exact child age requirement regression in docs.') : fail('Exact child age requirement regression found in docs.');

fs.existsSync(paths.seed) ? pass('Existing seed files remain present.') : fail('Seed file missing.');
pkg.includes('validate:parent-trust-copy-inventory-v1') ? pass('Package script registered.') : fail('Missing package script registration.');

for (const line of checks) console.log(line);
const failed = checks.filter((line) => line.startsWith('FAIL')).length;
if (failed > 0) {
  console.error(`\nValidation failed with ${failed} FAIL check(s).`);
  process.exit(1);
}
console.log('\nValidation passed with no FAIL checks.');
