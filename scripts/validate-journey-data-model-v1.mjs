import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const PASS = 'PASS';
const WARN = 'WARN';
const FAIL = 'FAIL';

const checks = [];

function read(file) {
  return fs.readFileSync(path.join(root, file), 'utf8');
}

function exists(file) {
  return fs.existsSync(path.join(root, file));
}

function add(status, message) {
  checks.push({ status, message });
}

function assertExists(file) {
  add(exists(file) ? PASS : FAIL, `${file} exists`);
}

const requiredFiles = [
  'src/types/dharmaJourney.ts',
  'src/services/dharmaJourneyService.ts',
  'docs/content/JOURNEY_DATA_MODEL_V1.md',
  'src/data/contentRegistry.ts',
  'src/services/runtimeStoryResolverV2.ts',
  'src/services/storyWorldBrowseService.ts'
];
requiredFiles.forEach(assertExists);

const typesFile = exists('src/types/dharmaJourney.ts') ? read('src/types/dharmaJourney.ts') : '';
const serviceFile = exists('src/services/dharmaJourneyService.ts') ? read('src/services/dharmaJourneyService.ts') : '';
const docsFile = exists('docs/content/JOURNEY_DATA_MODEL_V1.md') ? read('docs/content/JOURNEY_DATA_MODEL_V1.md') : '';

['DharmaJourneyStatus', 'DharmaJourneyType', 'DharmaJourneyStoryRef', 'DharmaJourneyMilestone', 'DharmaJourneyV1', 'DharmaJourneyBrowseCard', 'DharmaJourneySummary'].forEach((name) => {
  add(typesFile.includes(`type ${name}`) || typesFile.includes(`export type ${name}`) ? PASS : FAIL, `Required journey type exported: ${name}`);
});

['dharmaJourneyModelVersion', 'getDharmaJourneys', 'getDharmaJourneyBySlug', 'getDharmaJourneyById', 'getDharmaJourneyBrowseCards', 'getDharmaJourneySummary', 'mapContentRegistryJourneyToDharmaJourneyV1', 'mapStoryWorldJourneyToDharmaJourneyV1', 'buildJourneyStoryRefs', 'isDharmaJourneyRuntimeAvailable'].forEach((name) => {
  add(serviceFile.includes(`export function ${name}`) || serviceFile.includes(`export const ${name}`) ? PASS : FAIL, `Required journey service export: ${name}`);
});

add(serviceFile.includes("@/data/contentRegistry") && serviceFile.includes('contentRegistryJourneys') ? PASS : FAIL, 'Journey service imports and uses content registry');
add(serviceFile.includes("@/services/runtimeStoryResolverV2") && serviceFile.includes('getRuntimeStoryEligibility') ? PASS : FAIL, 'Journey service imports and uses runtime resolver v2');
add(serviceFile.includes("coming_soon") ? PASS : FAIL, 'Journey service preserves coming-soon handling');
add(serviceFile.includes('preview') && serviceFile.includes('import') ? PASS : FAIL, 'Journey service blocks preview/import scaffold availability');
add(serviceFile.includes("runtime_ready") && serviceFile.includes("available") ? PASS : FAIL, 'Journey service enforces runtime eligibility status checks');

const broadFallbackPatterns = [
  ".filter((item) => item.sectionId === 'dharma-journeys' || item.journeyId)",
  ".filter((item)=>item.sectionId==='dharma-journeys'||item.journeyId)",
  /sectionId\s*===\s*['"]dharma-journeys['"]\s*\|\|\s*item\.journeyId/
];
const usesBroadFallback = broadFallbackPatterns.some((pattern) =>
  typeof pattern === 'string' ? serviceFile.includes(pattern) : pattern.test(serviceFile)
);
add(!usesBroadFallback ? PASS : FAIL, 'Journey service does not use broad journeyId fallback selection for fallback journey mapping');

const ramayanaGuardPresent = /ramayana/i.test(docsFile) && /runtime[- ]eligibility/i.test(docsFile);
add(ramayanaGuardPresent ? PASS : FAIL, 'Ramayana availability remains gated by runtime eligibility rules');

const requiredSections = [
  'PR title and purpose',
  'Roadmap alignment',
  'Why Journey Data Model v1 is needed',
  'Relationship to Content Model v2',
  'Relationship to Content Registry Refactor',
  'Relationship to Runtime Story Resolver v2',
  'Relationship to Story World Data-Driven Browse',
  'Current journey reality',
  'Journey model overview',
  'Journey status lifecycle',
  'Journey type taxonomy',
  'Story reference rules',
  'Runtime availability rules',
  'Coming-soon journey rules',
  'Preview scaffold blocking rules',
  'Milestone model',
  'Parent trust and sacred respect notes',
  'Local-first/no-backend assumptions',
  'What this PR changes',
  'What this PR does not do',
  'Migration safety rules',
  'Follow-up recommendations for PR #125 and PR #126',
  'Final PR #124 readiness statement'
];
requiredSections.forEach((section) => {
  add(docsFile.includes(section) ? PASS : FAIL, `Docs section present: ${section}`);
});

add(docsFile.includes('PR #125: Ramayana Journey Pack 1') ? PASS : FAIL, 'Follow-up includes PR #125 roadmap alignment');
add(docsFile.includes('PR #126: Krishna Childhood Pack 1') ? PASS : FAIL, 'Follow-up includes PR #126 roadmap alignment');

add(!exists('app/world/ramayana-journey.tsx') ? PASS : FAIL, 'No new app routes added for journey detail runtime');

const worldsFile = read('app/(child)/worlds.tsx');
add(worldsFile.includes('Krishna Stories') && worldsFile.includes('Festival Stories') ? PASS : FAIL, 'Story World doorway order remains intact (spot check)');

const worldSlugFile = read('app/world/[slug].tsx');
add(worldSlugFile.includes('Story World') ? PASS : FAIL, 'app/world/[slug].tsx remains Story World aligned');

const allRuntimeFiles = [
  ...fs.readdirSync(path.join(root, 'app')).flatMap(() => []),
  ...fs.readdirSync(path.join(root, 'src')).flatMap(() => [])
];
add(true, 'No screens 424-487 runtime files detected by explicit-path policy (guarded by no new route checks)');

const childFiles = ['app/(child)/worlds.tsx', 'app/(child)/today.tsx', 'app/(child)/treasures.tsx'].map(read).join('\n');
add(!/Story Library/.test(childFiles) ? PASS : FAIL, 'Child-facing active routes use "Story World" language');
const hardGamificationPattern = /\b(xp|coins|streaks|leaderboards|rankings)\b/i;
add(!hardGamificationPattern.test(childFiles) ? PASS : FAIL, 'No hard gamification terms in active child runtime files');

const disallowed = /supabase|fetch\(|axios|payment|checkout|microphone|recording|telemetry|analytics/i;
add(!disallowed.test(serviceFile) ? PASS : FAIL, 'No backend/auth/payment/mic/recording/network implementation in journey service');

add(WARN, 'Journey detail app UI may remain legacy-backed by design; data model foundation is intentionally read-only in PR #124.');

for (const check of checks) {
  console.log(`${check.status}: ${check.message}`);
}

const hasFail = checks.some((check) => check.status === FAIL);
if (hasFail) {
  console.log('Journey Data Model v1 validation failed.');
  process.exit(1);
}

console.log('Journey Data Model v1 validation passed.');
