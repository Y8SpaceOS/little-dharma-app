import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const PASS = 'PASS';
const WARN = 'WARN';
const FAIL = 'FAIL';

const checks = [];

const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const exists = (file) => fs.existsSync(path.join(root, file));
const add = (status, message) => checks.push({ status, message });

const servicePath = 'src/services/parentJourneyProgressService.ts';
const docsPath = 'docs/parent/PARENT_JOURNEY_PROGRESS_DASHBOARD_V1.md';

add(exists(servicePath) ? PASS : FAIL, `${servicePath} exists`);
add(exists(docsPath) ? PASS : FAIL, `${docsPath} exists`);

const serviceFile = exists(servicePath) ? read(servicePath) : '';
const docsFile = exists(docsPath) ? read(docsPath) : '';

add(serviceFile.includes("@/services/dharmaJourneyService") && serviceFile.includes('getDharmaJourneys') ? PASS : FAIL, 'Service imports and uses Journey Data Model v1 service');

const forbiddenMutationTokens = ['markStoryComplete', 'setJourneyProgress', 'markJourneyStoryCompleted', 'AsyncStorage.setItem'];
add(forbiddenMutationTokens.every((token) => !serviceFile.includes(token)) ? PASS : FAIL, 'Service does not mutate story/journey progress state');

add(/getAllStoryCompletions/.test(serviceFile) && /getAllJourneyProgress/.test(serviceFile) ? PASS : FAIL, 'Service performs read-only local progress reads');

add(/available/.test(serviceFile) && /staged/.test(serviceFile) && /coming_soon/.test(serviceFile) ? PASS : FAIL, 'Service distinguishes runtime-available, staged/qa_ready, and coming-soon journeys');

add(!/href\s*:|\/world\//.test(serviceFile) ? PASS : FAIL, 'Service does not expose staged/qa_ready content as playable runtime routes');

[
  'parentJourneyProgressModelVersion',
  'getParentJourneyProgressDashboard',
  'getParentJourneyProgressCards',
  'getParentJourneyProgressByJourneyId',
  'getNextRecommendedJourneyStory',
  'mapJourneyToParentProgressCard',
  'summarizeJourneyValues',
  'calculateJourneyCompletionPercent'
].forEach((name) => {
  add(serviceFile.includes(`export function ${name}`) || serviceFile.includes(`export async function ${name}`) || serviceFile.includes(`export const ${name}`) ? PASS : FAIL, `Required service export present: ${name}`);
});

const requiredDocSections = [
  'PR title and purpose',
  'Roadmap alignment',
  'Why Parent Journey Progress Dashboard follows content-pack foundation',
  'Parent trust goal',
  'Local-first progress assumptions',
  'Data sources',
  'Journey progress card model',
  'Runtime-available vs qa_ready vs coming-soon handling',
  'Completion percentage rules',
  'Next story recommendation rules',
  'Values summary rules',
  'Privacy and no-backend assumptions',
  'No hard gamification rules',
  'UI integration status',
  'What this PR changes',
  'What this PR does not do',
  'Follow-up recommendations for PR #129 and PR #130',
  'Final PR #128 readiness statement'
];
requiredDocSections.forEach((section) => add(docsFile.includes(section) ? PASS : FAIL, `Docs section present: ${section}`));

add(/No XP, coins, streaks, ranks, leaderboards/i.test(docsFile) ? PASS : FAIL, 'Docs include no-hard-gamification rules');
add(docsFile.includes('PR #129: Story Completion Moment v1') ? PASS : FAIL, 'Docs roadmap follow-up includes PR #129 alignment');
add(docsFile.includes('PR #130: Story Audio Foundation v1') ? PASS : FAIL, 'Docs roadmap follow-up includes PR #130 alignment');

const scopedFiles = [servicePath].filter(exists).map(read).join('\n');

const disallowed = /supabase|firebase|axios|amplitude|segment|mixpanel|telemetry|analytics|checkout|stripe|razorpay|microphone|recording|api key|auth token/i;
add(!disallowed.test(scopedFiles) ? PASS : FAIL, 'No backend/auth/payment/analytics/telemetry/network/mic/recording implementation added in scoped files');

add(read('app/(child)/worlds.tsx').includes('Krishna Stories') ? PASS : FAIL, 'No child route redesign or Story World doorway order disruption (spot check)');
add(!/Story Library/.test([read('app/(child)/worlds.tsx'), read('app/(child)/treasures.tsx')].join('\n')) ? PASS : FAIL, 'No Story Library regression in child-facing active routes');
const routeFiles = ['app/(parent)/dashboard.tsx','app/(child)/worlds.tsx','app/(child)/treasures.tsx'].filter(exists).map(read).join('\n');
add(!/\b(xp|coins|streaks|leaderboards|rankings)\b/i.test(routeFiles) ? PASS : WARN, 'No hard gamification terms in parent/child routes (warns for legacy text outside PR #128 scope)');
add(!/exact age|date of birth|dob|birthdate/i.test(`${scopedFiles}
${routeFiles}`) ? PASS : FAIL, 'No exact child age collection introduced');

['src/data/seed/vrindavan.ts', 'src/data/seed/ramayanaPack1.ts', 'src/data/seed/krishnaChildhoodPack1.ts', 'src/data/seed/ganeshaWisdomPack1.ts'].forEach((seedPath) => {
  add(exists(seedPath) ? PASS : FAIL, `Seed path remains present: ${seedPath}`);
});

['scripts/validate-ramayana-journey-pack-1.mjs', 'scripts/validate-krishna-childhood-pack-1.mjs', 'scripts/validate-ganesha-wisdom-pack-1.mjs'].forEach((validatorPath) => {
  add(exists(validatorPath) ? PASS : FAIL, `Existing content-pack validator remains intact: ${validatorPath}`);
});

add(WARN, 'UI binding may be intentionally deferred for PR #128 if parent route integration is kept minimal/read-only.');

for (const check of checks) console.log(`${check.status}: ${check.message}`);

if (checks.some((check) => check.status === FAIL)) {
  console.log('Parent Journey Progress Dashboard v1 validation failed.');
  process.exit(1);
}

console.log('Parent Journey Progress Dashboard v1 validation passed.');
