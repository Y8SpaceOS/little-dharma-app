import fs from 'fs';
import path from 'path';

const root = process.cwd();
const checks = [];
const pass = (msg) => checks.push(`PASS: ${msg}`);
const fail = (msg) => checks.push(`FAIL: ${msg}`);

const paths = {
  service: path.join(root, 'src/services/parentControlsJourneySettingsCopyService.ts'),
  docs: path.join(root, 'docs/parent/PARENT_CONTROLS_JOURNEY_SETTINGS_COPY_V1.md'),
  controls: path.join(root, 'app/(parent)/controls.tsx'),
  pkg: path.join(root, 'package.json'),
};

const read = (file) => (fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '');
const service = read(paths.service);
const docs = read(paths.docs);
const controls = read(paths.controls);
const pkg = read(paths.pkg);

fs.existsSync(paths.service) ? pass('Service exists.') : fail('Missing service file.');
fs.existsSync(paths.docs) ? pass('Docs exists.') : fail('Missing docs file.');
fs.existsSync(paths.controls) ? pass('Controls screen exists.') : fail('Missing controls screen.');

const requiredExports = [
  'parentControlsJourneySettingsCopyModelVersion',
  'buildParentControlsJourneySettingsCopy',
  'getParentControlsJourneyGentleChoiceCopy',
  'getParentControlsJourneyOneStoryAtATimeCopy',
  'getParentControlsJourneyPauseReturnCopy',
  'getParentControlsJourneyLocalProgressCopy',
  'getParentControlsJourneyNoPressureCopy',
  'getParentControlsJourneyBroadAgeBandCopy',
  'getParentControlsJourneySacredCareCopy',
  'getParentControlsJourneyFutureSettingsCopy',
  'getParentControlsJourneySettingsCopySummary',
];
for (const name of requiredExports) {
  service.includes(`export const ${name}`) || service.includes(`export function ${name}`)
    ? pass(`Export present: ${name}`)
    : fail(`Missing export: ${name}`);
}

const requiredModelFields = [
  'modelVersion', 'gentleChoiceCopy', 'oneStoryAtATimeCopy', 'pauseReturnCopy', 'localProgressCopy',
  'noPressureCopy', 'broadAgeBandCopy', 'sacredCareCopy', 'futureSettingsCopy', 'microcopyBullets',
  'accessibilityLabel', 'accessibilityHint',
];
for (const field of requiredModelFields) {
  service.includes(field) ? pass(`Model field present: ${field}`) : fail(`Model field missing: ${field}`);
}

const requiredDocsSections = [
  'PR title and purpose', 'Roadmap alignment',
  'Why Parent Controls Journey Settings Copy follows Parent Weekly Summary Copy Polish',
  'Parent controls journey settings copy goal', 'What this copy is', 'What this copy is not',
  'Parent-facing journey setting principles', 'Gentle journey choice copy rules',
  'One-story-at-a-time copy rules', 'Pause/return-later copy rules', 'Local progress copy rules',
  'No-streak/no-ranking/no-pressure copy rules', 'Broad age-band copy rules',
  'Sacred journey care copy rules', 'Future settings copy rules', 'UI integration status',
  'No backend/no tracking assumptions', 'No notifications/no sharing assumptions',
  'No AI personalization assumptions', 'No fake controls/toggles assumptions',
  'No hard gamification rules', 'Journey progress behavior preservation rules',
  'Story completion behavior preservation rules', 'Story runtime/audio preservation rules',
  'Relationship to Parent Controls Copy Hardening v1',
  'Relationship to Journey Detail Parent Trust Copy v1',
  'Relationship to Parent Weekly Summary Copy Polish v1', 'What this PR changes',
  'What this PR does not do', 'Follow-up recommendations for PR #149 and PR #150',
  'Final PR #148 readiness statement',
];
for (const section of requiredDocsSections) {
  docs.includes(section) ? pass(`Docs section present: ${section}`) : fail(`Missing docs section: ${section}`);
}

const requiredLines = [
  'Journey choices stay gentle.',
  'Your child can go one story at a time.',
  'You can pause and return later.',
  'Progress stays on this device.',
  'No streaks, rankings, or pressure.',
  'Broad age bands guide story readiness.',
  'Sacred journeys are handled with care.',
  'More parent choices can be added later.',
];
for (const line of requiredLines) {
  service.includes(line) ? pass(`Service includes: ${line}`) : fail(`Service missing: ${line}`);
  docs.includes(line) ? pass(`Docs includes: ${line}`) : fail(`Docs missing: ${line}`);
}

controls.includes('Journey choices stay gentle.') ? pass('Parent-visible title phrase is parent-facing.') : fail('Parent-facing title phrase missing.');
!controls.includes('Journey settings copy') ? pass('Old internal title removed.') : fail('Old internal title still present.');

const bannedTokens = [
  'fetch(', 'axios', 'supabase', 'posthog', 'analytics.track(', 'telemetry.',
  'expo-notifications', 'MailComposer.composeAsync(', 'SMS.sendSMSAsync(', 'whatsapp://', 'Share.share(',
  'Linking.openURL(', 'referral', 'personalization', 'generate',
  'setJourneyProgress(', 'markJourneyStoryCompleted(', 'markStoryComplete(', 'audio playback',
  'setItem(', 'exact age',
];
for (const token of bannedTokens) {
  !service.toLowerCase().includes(token.toLowerCase()) ? pass(`No banned service token: ${token}`) : fail(`Banned service token found: ${token}`);
}

const routeFiles = [
  'app/(parent)/journey-settings-copy.tsx',
  'app/(child)/journey-settings-copy.tsx',
  'app/(parent)/parent-controls-journey-settings-copy.tsx',
  'app/(child)/parent-controls-journey-settings-copy.tsx',
];
for (const file of routeFiles) {
  !fs.existsSync(path.join(root, file)) ? pass(`No new route: ${file}`) : fail(`Unexpected new route found: ${file}`);
}

const fakeControlHints = ['fake control', 'placeholder toggle', 'dummy switch', 'mock button'];
for (const token of fakeControlHints) {
  !controls.toLowerCase().includes(token) ? pass(`No fake-control hint in controls: ${token}`) : fail(`Fake-control hint found: ${token}`);
}

pkg.includes('validate:parent-controls-journey-settings-copy-v1')
  ? pass('Package script registered.')
  : fail('Missing package script registration.');

const requiredFollowUps = [
  'PR #149: My Treasures Trust Copy v1',
  'PR #150: Story World Empty/Coming Soon Trust Copy v1',
];
for (const followUp of requiredFollowUps) {
  docs.includes(followUp)
    ? pass(`Roadmap follow-up present: ${followUp}`)
    : fail(`Roadmap follow-up missing/mismatch: ${followUp}`);
}

for (const line of checks) console.log(line);
const failed = checks.filter((line) => line.startsWith('FAIL')).length;
if (failed) {
  console.error(`\nValidation failed with ${failed} FAIL check(s).`);
  process.exit(1);
}
console.log('\nValidation passed with no FAIL checks.');
