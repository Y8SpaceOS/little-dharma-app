import fs from 'fs';
import path from 'path';

const root = process.cwd();
const checks = [];
const pass = (msg) => checks.push(`PASS: ${msg}`);
const warn = (msg) => checks.push(`WARN: ${msg}`);
const fail = (msg) => checks.push(`FAIL: ${msg}`);

const servicePath = path.join(root, 'src/services/journeyParentTrustCopyService.ts');
const docsPath = path.join(root, 'docs/parent/JOURNEY_DETAIL_PARENT_TRUST_COPY_V1.md');
const worldPath = path.join(root, 'app/world/[slug].tsx');
const packagePath = path.join(root, 'package.json');

const read = (file) => (fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '');
const service = read(servicePath);
const docs = read(docsPath);
const world = read(worldPath);
const pkg = read(packagePath);

fs.existsSync(servicePath) ? pass('Service file exists.') : fail('Missing src/services/journeyParentTrustCopyService.ts');
fs.existsSync(docsPath) ? pass('Docs file exists.') : fail('Missing docs/parent/JOURNEY_DETAIL_PARENT_TRUST_COPY_V1.md');

const requiredExports = [
  'journeyParentTrustCopyModelVersion',
  'buildJourneyParentTrustCopy',
  'getJourneyTrustSummary',
  'getJourneyAgeAppropriatenessCopy',
  'getJourneyValuesCopy',
  'getJourneySacredRespectCopy',
  'getJourneyProgressPrivacyCopy',
  'getJourneyAvailabilityCopy',
  'getJourneyParentGuidanceBullets',
];

for (const name of requiredExports) {
  service.includes(name) && service.includes('export') ? pass(`Export present: ${name}`) : fail(`Missing export: ${name}`);
}

!service.includes('AsyncStorage.setItem') ? pass('No AsyncStorage writes in service.') : fail('Service writes AsyncStorage.');
for (const banned of ['markStoryComplete', 'markJourneyStoryCompleted', 'setJourneyProgress', 'pruneStoryCompletions']) {
  !service.includes(`${banned}(`) ? pass(`No forbidden mutation call: ${banned}`) : fail(`Forbidden mutation call found: ${banned}`);
}

for (const banned of ['fetch(', 'axios', 'supabase', 'AsyncStorage.setItem(', 'markStoryComplete(', 'markJourneyStoryCompleted(', 'setJourneyProgress(', 'pruneStoryCompletions(']) {
  !service.includes(banned) ? pass(`No banned implementation token: ${banned}`) : fail(`Banned implementation token found: ${banned}`);
}

service.toLowerCase().includes('runtime_ready') && service.toLowerCase().includes('qa_ready') && service.toLowerCase().includes('coming soon')
  ? pass('Availability copy differentiates runtime-ready, staged/qa_ready, and coming soon.')
  : fail('Availability copy does not clearly differentiate runtime-ready, staged/qa_ready, and coming soon.');

const playableRiskTokens = ['href', '/story/', 'play', 'unlock'];
for (const token of playableRiskTokens) {
  !service.toLowerCase().includes(token.toLowerCase()) ? pass(`No playable exposure token in service: ${token}`) : fail(`Playable exposure token found in service: ${token}`);
}

service.toLowerCase().includes('progress stays on this device')
  ? pass('Service includes local-first/privacy trust copy.')
  : fail('Missing local-first/privacy trust copy.');
service.toLowerCase().includes('sacred content is handled with care')
  ? pass('Service includes sacred respect copy.')
  : fail('Missing sacred respect copy.');
service.toLowerCase().includes('why this journey is gentle')
  ? pass('Service includes age-appropriateness copy.')
  : fail('Missing age-appropriateness copy.');

const requiredSections = [
  'PR title and purpose', 'Roadmap alignment', 'Why Journey Detail Parent Trust Copy follows Parent Weekly Summary',
  'Parent trust copy goal', 'What this trust copy is', 'What this trust copy is not', 'Data sources',
  'Age appropriateness copy rules', 'Values copy rules', 'Sacred respect copy rules',
  'Progress privacy copy rules', 'Availability copy rules', 'Parent guidance bullet rules', 'UI integration status',
  'Privacy/no-backend assumptions', 'No hard gamification rules', 'Relationship to Journey Data Model v1',
  'Relationship to Parent Journey Progress Dashboard v1', 'Relationship to Parent Weekly Summary v1',
  'Relationship to Runtime Story Resolver v2', 'What this PR changes', 'What this PR does not do',
  'Follow-up recommendations for PR #137 and PR #138', 'Final PR #136 readiness statement'
];
for (const section of requiredSections) {
  docs.includes(section) ? pass(`Docs section present: ${section}`) : fail(`Missing docs section: ${section}`);
}

docs.includes('No hard gamification rules') ? pass('Docs include no-hard-gamification rules.') : fail('Docs missing no-hard-gamification rules.');
docs.includes('Privacy/no-backend assumptions') ? pass('Docs include privacy/no-backend assumptions.') : fail('Docs missing privacy/no-backend assumptions.');

docs.includes('PR #137: Parent Sharing Copy v1') && docs.includes('PR #138: Parent Controls Copy Hardening v1')
  ? pass('Follow-ups are roadmap-aligned.')
  : fail('Follow-up roadmap naming mismatch.');

if (world.includes('For parents') || world.includes('Progress stays on this device')) pass('UI route includes minimal parent trust binding.');
else warn('UI binding appears deferred (allowed).');

const noChildRouteChanges = !fs.existsSync(path.join(root, 'app/(child)/journey-parent-trust-copy.tsx'));
noChildRouteChanges ? pass('No new child route file detected for this feature.') : fail('Potential new child route detected.');

!world.includes('Story Library') ? pass('No Story Library regression found in world route.') : fail('Story Library regression found.');

for (const term of ['xp', 'coins', 'streak', 'leaderboard', 'rank', 'score', 'performance', 'report card']) {
  const raw = service.toLowerCase();
  const escaped = term.replace(/[-/\^$*+?.()|[\]{}]/g, '\\$&');
  const termRegex = new RegExp(`\\b${escaped}\\b`, 'i');
  const hasTerm = termRegex.test(raw);
  const hasDisallowed = hasTerm && !raw.includes(`no ${term}`) && !raw.includes(`without ${term}`);
  !hasDisallowed ? pass(`No hard gamification implementation in service: ${term}`) : fail(`Hard gamification implementation found in service: ${term}`);
}

!service.toLowerCase().includes('exact age') ? pass('No exact child age collection language.') : fail('Exact age collection language found.');

for (const seed of ['src/data/seed/seed.ts']) {
  fs.existsSync(path.join(root, seed)) ? pass(`Seed file remains present: ${seed}`) : fail(`Seed file missing: ${seed}`);
}

pkg.includes('validate:journey-detail-parent-trust-copy-v1') ? pass('Package script registered.') : fail('Missing package script for validator.');

const failed = checks.filter((line) => line.startsWith('FAIL')).length;
for (const line of checks) console.log(line);
if (failed > 0) {
  console.error(`\nValidation failed with ${failed} FAIL check(s).`);
  process.exit(1);
}
console.log('\nValidation passed with no FAIL checks.');
