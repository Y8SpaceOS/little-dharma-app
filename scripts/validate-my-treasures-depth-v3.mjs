#!/usr/bin/env node
import fs from 'node:fs';

const fail = (m) => { console.error(`❌ ${m}`); process.exit(1); };

const requiredFiles = [
  'docs/MY_TREASURES_DEPTH_V3_QA.md',
  'docs/content/my-treasures-depth-v3-qa.csv',
  'docs/MASTER_SPRINT_QUEUE.md',
  'docs/TASK_LOG.md',
  'docs/content/post-foundation-product-build-roadmap.csv',
  'app/(child)/treasures.tsx'
];
for (const file of requiredFiles) if (!fs.existsSync(file)) fail(`Missing ${file}`);

const treasuresText = fs.readFileSync('app/(child)/treasures.tsx', 'utf8').toLowerCase();
for (const token of ['my treasures', 'story memories', 'blessing', 'diya', 'flower', 'value', 'luvlu']) {
  if (!treasuresText.includes(token)) fail(`Treasures missing token: ${token}`);
}
if (!(treasuresText.includes('your treasure chest is waiting') || treasuresText.includes('complete a story'))) {
  fail('Missing empty state fallback language in My Treasures');
}
const forbiddenPatterns = [/\bxp\b/, /\bcoins\b/, /\bstreak\b/, /\bleaderboard\b/, /microphone/, /recording permission/];
for (const pattern of forbiddenPatterns) {
  if (pattern.test(treasuresText)) fail(`Forbidden language in treasures: ${pattern}`);
}

const rows = fs.readFileSync('docs/content/post-foundation-product-build-roadmap.csv', 'utf8').trim().split(/\r?\n/).slice(1);
const roadmapStatus = new Map(rows.map((line) => {
  const cols = line.split(',');
  return [Number(cols[0]), cols[6]];
}));

for (let sprint = 61; sprint <= 150; sprint += 1) if (!roadmapStatus.has(sprint)) fail(`Missing sprint row ${sprint}`);
for (let sprint = 61; sprint <= 69; sprint += 1) if (roadmapStatus.get(sprint) !== 'done') fail(`Sprint ${sprint} must be done`);
if (roadmapStatus.get(71) !== 'done') fail('Sprint 71 must be done');
if (roadmapStatus.get(72) !== 'done') fail('Sprint 72 must be done');
for (let sprint = 75; sprint <= 150; sprint += 1) if (roadmapStatus.get(sprint) !== 'not_started') fail(`Sprint ${sprint} must be not_started`);

const queueText = fs.readFileSync('docs/MASTER_SPRINT_QUEUE.md', 'utf8');
const extractSprintSection = (queue, sprint) => {
  const heading = `### Sprint ${sprint} — `;
  const start = queue.indexOf(heading);
  if (start === -1) return null;
  const remaining = queue.slice(start + heading.length);
  const nextOffset = remaining.search(/\n### Sprint \d+ — /);
  const end = nextOffset === -1 ? queue.length : start + heading.length + nextOffset;
  return queue.slice(start, end);
};
const sprint68Section = extractSprintSection(queueText, 68);
if (!sprint68Section || !sprint68Section.includes('- **Status:** done')) fail('Sprint 68 done missing in queue section');
const sprint69Section = extractSprintSection(queueText, 69);
if (!sprint69Section || !sprint69Section.includes('- **Status:** done')) fail('Sprint 69 done missing in queue section');
const sprint70Section = extractSprintSection(queueText, 70);
if (!sprint70Section || !sprint70Section.includes('- **Status:** done')) fail('Sprint 70 done missing in queue section');
if (!queueText.includes('Sprint 14 — Test Harness Reliability and Coverage Targets') || !queueText.includes('Sprint 15 — Developer Environment Bootstrap Guide') || !queueText.includes('not completed; deferred intentionally')) {
  fail('Sprint 14/15 deferred state missing');
}

const taskLogText = fs.readFileSync('docs/TASK_LOG.md', 'utf8');
if (!taskLogText.includes('Sprint 68')) fail('TASK_LOG missing Sprint 68 entry');

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
if (pkg.scripts?.['validate-my-treasures-depth-v3']) fail('package.json must not include validate-my-treasures-depth-v3 script');

const corpus = `${queueText}\n${taskLogText}`.toLowerCase();
for (const forbiddenClaim of ['paid beta has started', 'external private beta has started', 'app store submission has started']) {
  if (corpus.includes(forbiddenClaim)) fail(`Forbidden launch claim found: ${forbiddenClaim}`);
}

console.log('✅ validate-my-treasures-depth-v3 passed');
