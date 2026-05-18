import fs from 'node:fs';

const mustExist = [
  'docs/STORY_DETAIL_UPGRADE_V1_QA.md',
  'docs/content/story-detail-upgrade-v1-qa.csv',
  'docs/MASTER_SPRINT_QUEUE.md',
  'docs/TASK_LOG.md',
  'docs/content/post-foundation-product-build-roadmap.csv',
  'app/story/[slug].tsx'
];

for (const file of mustExist) {
  if (!fs.existsSync(file)) throw new Error(`Missing required file: ${file}`);
}

const storyDetail = fs.readFileSync('app/story/[slug].tsx', 'utf8');
const mustContainAny = [
  ['story.title', 'title'],
  ['primaryValue', 'value'],
  ['durationMinutes', 'Duration:'],
  ['ageBands', 'Age band:'],
  ['audioAvailable', 'Audio coming soon'],
  ['For Parents', 'Talk together', 'reflection'],
  ['Story World', 'sourceTradition', 'Journey step']
];

for (const group of mustContainAny) {
  if (!group.some((token) => storyDetail.includes(token))) {
    throw new Error(`Story detail source missing required signal: ${group.join(' | ')}`);
  }
}
if (!storyDetail.includes("href='/(child)/worlds'")) throw new Error('Fallback must link Return to Story World to /(child)/worlds');
if (!storyDetail.includes("href='/(child)/today'")) throw new Error('Fallback must include Go back to Child Home link to /(child)/today');

const queue = fs.readFileSync('docs/MASTER_SPRINT_QUEUE.md', 'utf8');
if (!queue.includes('### Sprint 65 — Story Detail Upgrade v1\n- **Status:** done')) throw new Error('Sprint 65 must be done in MASTER_SPRINT_QUEUE');
if (!queue.includes('### Sprint 66 — Ritual Flow Polish v3\n- **Status:** done')) throw new Error('Sprint 66 must be done');
if (!queue.includes('Sprint 14') || !queue.includes('deferred intentionally')) throw new Error('Sprint 14 deferred state missing');
if (!queue.includes('Sprint 15') || !queue.includes('deferred intentionally')) throw new Error('Sprint 15 deferred state missing');

const csv = fs.readFileSync('docs/content/post-foundation-product-build-roadmap.csv', 'utf8').trim().split('\n');
const rows = csv.slice(1).map((line) => line.split(','));
const bySprint = new Map(rows.map((r) => [Number(r[0]), r]));
for (let i = 61; i <= 150; i += 1) {
  if (!bySprint.has(i)) throw new Error(`Missing roadmap row for sprint ${i}`);
}
for (const s of [61, 62, 63, 64, 65]) {
  if (bySprint.get(s)[6] !== 'done') throw new Error(`Sprint ${s} must be done in roadmap csv`);
}
if (bySprint.get(66)[6] !== 'done') throw new Error('Sprint 66 must be done');
for (let i = 67; i <= 150; i += 1) {
  if (bySprint.get(i)[6] !== 'not_started') throw new Error(`Sprint ${i} must be not_started`);
}

const taskLog = fs.readFileSync('docs/TASK_LOG.md', 'utf8');
if (!taskLog.includes('Sprint 65 Story Detail Upgrade v1')) throw new Error('TASK_LOG missing Sprint 65 entry');

const pkg = fs.readFileSync('package.json', 'utf8');
if (pkg.includes('validate-story-detail-upgrade-v1')) throw new Error('Do not add validator to package.json scripts');

const forbidden = [
  'paid beta has started',
  'external private beta has started',
  'App Store submission has started'
];
for (const text of forbidden) {
  if (queue.includes(text) || taskLog.includes(text)) throw new Error(`Forbidden launch text found: ${text}`);
}

console.log('validate-story-detail-upgrade-v1: PASS');
