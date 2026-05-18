import { readFileSync, existsSync } from 'node:fs';

const requiredFiles = [
  'docs/STORY_WORLD_BROWSE_V1_QA.md',
  'docs/content/story-world-browse-v1-qa.csv',
  'docs/POST_FOUNDATION_PRODUCT_BUILD_ROADMAP.md',
  'docs/content/post-foundation-product-build-roadmap.csv',
  'docs/MASTER_SPRINT_QUEUE.md',
  'docs/TASK_LOG.md'
];

for (const file of requiredFiles) {
  if (!existsSync(file)) throw new Error(`Missing file: ${file}`);
}

const csv = readFileSync('docs/content/post-foundation-product-build-roadmap.csv', 'utf8').trim().split('\n');
const header = csv[0].split(',');
const requiredColumns = ['sprintNumber', 'sprintTitle', 'phase', 'primaryGoal', 'sprintType', 'primaryQualityDimension', 'status', 'notes'];
for (const col of requiredColumns) if (!header.includes(col)) throw new Error(`Missing column: ${col}`);

const rows = csv.slice(1).map((line) => {
  const parts = line.split(',');
  return { sprintNumber: Number(parts[0]), sprintTitle: parts[1], status: parts[6] };
});

for (let i = 61; i <= 150; i++) if (!rows.find((r) => r.sprintNumber === i)) throw new Error(`Missing sprint ${i}`);

const s61 = rows.find((r) => r.sprintNumber === 61);
const s62 = rows.find((r) => r.sprintNumber === 62);
const s63 = rows.find((r) => r.sprintNumber === 63);
if (s61?.status !== 'done') throw new Error('Sprint 61 must be done');
if (s62?.status !== 'done') throw new Error('Sprint 62 must be done');
if (!['done', 'not_started'].includes(s63?.status || '')) throw new Error('Sprint 63 status invalid');
if (rows.find((r) => r.sprintNumber === 64)?.status !== 'done') throw new Error('Sprint 64 must be done');
if (rows.find((r) => r.sprintNumber === 65)?.status !== 'done') throw new Error('Sprint 65 must be done');
if (rows.find((r) => r.sprintNumber === 66)?.status !== 'done') throw new Error('Sprint 66 must be done');
if (rows.find((r) => r.sprintNumber === 67)?.status !== 'done') throw new Error('Sprint 67 must be done');
if (rows.find((r) => r.sprintNumber === 69)?.status !== 'done') throw new Error('Sprint 69 must be done');
for (let i = 70; i <= 150; i++) if (rows.find((r) => r.sprintNumber === i)?.status !== 'not_started') throw new Error(`Sprint ${i} must be not_started`);

const roadmapText = readFileSync('docs/POST_FOUNDATION_PRODUCT_BUILD_ROADMAP.md', 'utf8');
for (const phrase of ['Story World Browse v1', 'Dharma Journey Data Model', 'Story Audio Foundation', 'Ramayana Journey', 'Bhagavad Gita for Children', 'Mahabharata']) {
  if (!roadmapText.includes(phrase)) throw new Error(`Roadmap missing phrase: ${phrase}`);
}

const master = readFileSync('docs/MASTER_SPRINT_QUEUE.md', 'utf8');
for (const phrase of ['Sprint 60', 'done', 'Sprint 61', 'Sprint 62', 'Sprint 63', 'Sprint 64', 'Foundation Phase complete', 'Product Build Phase 2', 'not proceeding to paid beta', 'not proceeding to external private beta', 'conditional no-go', 'manual iPhone QA']) {
  if (!master.includes(phrase)) throw new Error(`MASTER_SPRINT_QUEUE missing expected phrase: ${phrase}`);
}
if (!(master.includes('Sprint 14 — Test Harness Reliability and Coverage Targets') && master.includes('deferred intentionally'))) throw new Error('Sprint 14 deferred text missing');
if (!(master.includes('Sprint 15 — Developer Environment Bootstrap Guide') && master.includes('deferred intentionally'))) throw new Error('Sprint 15 deferred text missing');
const extractSprintSection = (queueText, sprintNumber) => {
  const heading = `### Sprint ${sprintNumber} — `;
  const startIndex = queueText.indexOf(heading);
  if (startIndex === -1) return null;

  const remaining = queueText.slice(startIndex + heading.length);
  const nextHeadingOffset = remaining.search(/\n### Sprint \d+ — /);
  const endIndex = nextHeadingOffset === -1 ? queueText.length : startIndex + heading.length + nextHeadingOffset;

  return queueText.slice(startIndex, endIndex);
};

const s66Section = extractSprintSection(master, 66);
if (s66Section && !s66Section.includes('- **Status:** done')) {
  throw new Error('Sprint 66 must be marked done in MASTER_SPRINT_QUEUE');
}
const s67Section = extractSprintSection(master, 67);
if (s67Section && !s67Section.includes('- **Status:** done')) throw new Error('Sprint 67 must be marked done in MASTER_SPRINT_QUEUE');
const s69Section = extractSprintSection(master, 69);
if (!s69Section || !s69Section.includes('- **Status:** done')) throw new Error('Sprint 69 must be marked done in MASTER_SPRINT_QUEUE');
for (let sprint = 70; sprint <= 150; sprint += 1) {
  const section = extractSprintSection(master, sprint);
  if (section && !section.includes('- **Status:** not started')) {
    throw new Error(`Sprint ${sprint} must be marked not started in MASTER_SPRINT_QUEUE`);
  }
}

const taskLog = readFileSync('docs/TASK_LOG.md', 'utf8');
if (!taskLog.includes('Sprint 63 (Story World Browse v1) completed')) throw new Error('TASK_LOG missing sprint 63 entry');

const worldsScreen = readFileSync('app/(child)/worlds.tsx', 'utf8');
if (!worldsScreen.includes('Story World')) throw new Error('Story World copy missing from child browse');
if (worldsScreen.includes('Story Library')) throw new Error('Story Library child-facing title still present');

const metadata = readFileSync('src/data/storyWorld.ts', 'utf8');
for (const phrase of ['durationMinutes', 'primaryValue', 'ageBands', 'status', 'audioAvailable']) {
  if (!metadata.includes(phrase)) throw new Error(`Metadata missing ${phrase}`);
}

const packageJson = readFileSync('package.json', 'utf8');
if (packageJson.includes('validate-story-world-browse-v1')) throw new Error('Do not add validator to package.json scripts');

if (/\bpaid beta is live\b|\bexternal private beta is live\b/i.test(`${roadmapText}\n${master}\n${taskLog}`)) {
  throw new Error('Found prohibited phrase indicating beta started');
}

console.log('validate-story-world-browse-v1: PASS');
