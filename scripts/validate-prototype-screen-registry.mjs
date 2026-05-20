import fs from 'node:fs';

const registryPath = 'docs/LITTLE_DHARMA_PROTOTYPE_SCREEN_REGISTRY.md';
const activeCsvPath = 'docs/content/prototype-screen-registry-active.csv';
const archivedCsvPath = 'docs/content/prototype-screen-registry-archived-unique-indicative-100.csv';
const taskLogPath = 'docs/TASK_LOG.md';
const roadmapPath = 'docs/POST_FOUNDATION_PRODUCT_BUILD_ROADMAP.md';
const masterQueuePath = 'docs/MASTER_SPRINT_QUEUE.md';

const fail = (m) => { console.error(`❌ ${m}`); process.exit(1); };
const ok = (m) => console.log(`✅ ${m}`);

for (const p of [registryPath, activeCsvPath, archivedCsvPath, taskLogPath, roadmapPath]) {
  if (!fs.existsSync(p)) fail(`Required file missing: ${p}`);
}
ok('Registry, CSV sources, TASK_LOG, and roadmap files exist.');

const registry = fs.readFileSync(registryPath, 'utf8');
const activeLines = fs.readFileSync(activeCsvPath, 'utf8').trim().split('\n');
const archived = fs.readFileSync(archivedCsvPath, 'utf8');
const taskLog = fs.readFileSync(taskLogPath, 'utf8');
const roadmap = fs.readFileSync(roadmapPath, 'utf8');
const masterQueue = fs.existsSync(masterQueuePath) ? fs.readFileSync(masterQueuePath, 'utf8') : '';

if (!activeLines[0].startsWith('screen_id,tier,usage,future_only')) fail('Active registry CSV header invalid.');
const rows = activeLines.slice(1).map((line) => {
  const [idStr, tier, usage, future] = line.split(',');
  return { id: Number(idStr), tier, usage, future };
});

if (rows.length !== 487) fail(`Expected 487 active rows, found ${rows.length}.`);
const ids = rows.map((r) => r.id);
const idSet = new Set(ids);
if (idSet.size !== 487) fail('Duplicate active screen IDs found.');
for (let i = 1; i <= 487; i++) {
  if (!idSet.has(i)) fail(`Missing active screen ID ${String(i).padStart(3, '0')}.`);
}
ok('Active registry contains all IDs 001–487 exactly once.');

const tierFor = (id) => rows.find((r) => r.id === id)?.tier;
for (let i = 1; i <= 45; i++) if (tierFor(i) !== 'Primary Prototype / Visual Soul') fail(`Tier mismatch for ${i}`);
for (let i = 46; i <= 145; i++) if (tierFor(i) !== 'Immediate Next 100 / Product Expansion') fail(`Tier mismatch for ${i}`);
for (let i = 146; i <= 295; i++) if (tierFor(i) !== 'Newly Shared Next 150 / Deep Product Flows') fail(`Tier mismatch for ${i}`);
for (let i = 296; i <= 423; i++) if (tierFor(i) !== 'Missing Screens Pack / Implementation Depth') fail(`Tier mismatch for ${i}`);
for (let i = 424; i <= 487; i++) if (tierFor(i) !== 'Luvlu + Motion + Micro-State Pack') fail(`Tier mismatch for ${i}`);
ok('Tier checks for 01–487 passed.');

const requiredRegistryPhrases = [
  'archived',
  'tertiary inspiration only',
  'not active implementation scope',
  'not used for active screen numbering',
  'superseded by the newly shared 146–295 and 296–487 reference system',
  'future/reference only',
  'Luvlu shown / not shown',
  '454–461',
  '462–469',
  '470–475',
  'No hard gamification product mechanics',
];
for (const phrase of requiredRegistryPhrases) {
  if (!registry.includes(phrase)) fail(`Registry governance phrase missing: ${phrase}`);
}
if (!archived.includes('archived') || !archived.includes('tertiary inspiration only')) {
  fail('Archived conflicting set metadata missing required markers.');
}
ok('Archived set, Luvlu, motion, sacred/cultural, parent-child, and gamification governance checks passed.');

for (const id of rows.filter((r) => r.future === 'true').map((r) => r.id)) {
  const inExpected = (id >= 406 && id <= 423) || (id >= 482 && id <= 487);
  if (!inExpected) fail(`Unexpected future_only=true ID: ${id}`);
}
ok('Future-only surface ranges are constrained to 406–423 and 482–487.');

if (!roadmap.includes('Post-Foundation Product Build Roadmap')) fail('Old roadmap content appears missing.');
if (!registry.includes('77A — Active Design Registry Rebase to 01–487')) fail('77A mapping missing.');
if (!registry.includes('78 — Child Home + Story World Reconstruction')) fail('Sprint 78 mapping missing.');
if (!/Sprint 78\s+not started/i.test(`${registry}\n${taskLog}\n${masterQueue}`)) fail('Sprint 78 not_started signal missing.');
ok('Roadmap preserved and sprint mapping checks passed.');

const bannedTerms = ['XP', 'coins', 'streaks', 'leaderboards', 'rankings'];
const lowered = `${registry}\n${taskLog}`.toLowerCase();
for (const term of bannedTerms) {
  if (lowered.includes(`add ${term.toLowerCase()}`) || lowered.includes(`introduce ${term.toLowerCase()}`)) {
    fail(`Hard gamification product mechanic introduced: ${term}`);
  }
}
ok('No hard gamification mechanics introduced.');

const taskEntrySignal = 'Sprint 77A — Active Design Registry Rebase to 01–487';
if (!taskLog.includes(taskEntrySignal)) fail('TASK_LOG Sprint 77A append entry missing.');
ok('TASK_LOG append entry present.');

console.log('✅ validate-prototype-screen-registry passed');
