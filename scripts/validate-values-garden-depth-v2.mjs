import fs from 'node:fs';
import path from 'node:path';

const mustExist = [
  'docs/VALUES_GARDEN_DEPTH_V2_QA.md',
  'docs/content/values-garden-depth-v2-qa.csv',
  'docs/MASTER_SPRINT_QUEUE.md',
  'docs/TASK_LOG.md',
  'docs/content/post-foundation-product-build-roadmap.csv',
  'app/(child)/treasures.tsx'
];

const forbidden = [/\bxp\b/i, /\bcoins?\b/i, /\bstreaks?\b/i, /\bleaderboard\b/i, /\bmicrophone\b/i, /recording permission/i];
const launchForbidden = ['paid beta has started', 'external private beta has started', 'app store submission has started'];

const fail = (m) => { console.error(`❌ ${m}`); process.exit(1); };
const read = (p) => fs.readFileSync(path.resolve(p), 'utf8');

mustExist.forEach((p) => { if (!fs.existsSync(path.resolve(p))) fail(`Missing required file: ${p}`); });

const source = read('app/(child)/treasures.tsx').toLowerCase();
['values garden', 'garden', 'value', 'flower', 'seed', 'leaf', 'lotus', 'diya', 'luvlu', 'parent-child prompt'].forEach((t) => {
  if (!source.includes(t)) fail(`Values Garden source missing token: ${t}`);
});
if (!source.includes('your garden is ready to grow')) fail('Missing warm empty-state fallback token');
if (!source.includes('reflection') && !source.includes('ask your child')) fail('Missing parent-child reflection language');

forbidden.forEach((pattern) => { if (pattern.test(source)) fail(`Forbidden token in values source: ${pattern}`); });

const qaDoc = read('docs/VALUES_GARDEN_DEPTH_V2_QA.md').toLowerCase();
if (!qaDoc.includes('local') || !qaDoc.includes('privacy')) fail('QA doc should include local/privacy-safe framing');

const queue = read('docs/MASTER_SPRINT_QUEUE.md');
const extractSprintSection = (queueText, sprintNumber) => {
  const heading = `### Sprint ${sprintNumber} — `;
  const start = queueText.indexOf(heading);
  if (start === -1) return null;
  const remaining = queueText.slice(start + heading.length);
  const nextOffset = remaining.search(/\n### Sprint \d+ — /);
  const end = nextOffset === -1 ? queueText.length : start + heading.length + nextOffset;
  return queueText.slice(start, end);
};

const sprint69Section = extractSprintSection(queue, 69);
if (!sprint69Section) fail('MASTER_SPRINT_QUEUE missing Sprint 69 section');
if (!sprint69Section.includes('- **Status:** done')) fail('Sprint 69 section must contain status done');

const sprint70Section = extractSprintSection(queue, 70);
if (!sprint70Section) fail('MASTER_SPRINT_QUEUE missing Sprint 70 section');
if (!sprint70Section.includes('- **Status:** done')) fail('Sprint 70 section must contain status done');

for (let sprint = 71; sprint <= 150; sprint += 1) {
  const section = extractSprintSection(queue, sprint);
  if (section && section.includes('- **Status:** done')) fail(`Sprint ${sprint} must not be done in MASTER_SPRINT_QUEUE`);
}

if (!/Sprint 14[\s\S]*deferred intentionally/i.test(queue) || !/Sprint 15[\s\S]*deferred intentionally/i.test(queue)) fail('Sprint 14/15 must remain deferred');

const roadmap = read('docs/content/post-foundation-product-build-roadmap.csv').trim().split(/\r?\n/);
const header = roadmap[0].split(',');
const statusIdx = header.indexOf('status');
if (statusIdx < 0) fail('Roadmap CSV missing status column');
const rows = roadmap.slice(1).map((r) => r.split(','));
const bySprint = new Map(rows.map((r) => [Number(r[0]), r]));
for (let s = 61; s <= 150; s++) if (!bySprint.has(s)) fail(`Roadmap CSV missing sprint ${s}`);
for (let s = 61; s <= 69; s++) if ((bySprint.get(s)?.[statusIdx] ?? '').trim() !== 'done') fail(`Sprint ${s} must be done`);
if ((bySprint.get(71)?.[statusIdx] ?? '').trim() !== 'done') fail('Sprint 71 must be done');
for (let s = 72; s <= 150; s++) if ((bySprint.get(s)?.[statusIdx] ?? '').trim() !== 'not_started') fail(`Sprint ${s} must be not_started`);

const taskLog = read('docs/TASK_LOG.md');
if (!/Sprint 69/i.test(taskLog)) fail('TASK_LOG missing Sprint 69 entry');

const pkg = read('package.json');
if (pkg.includes('validate-values-garden-depth-v2')) fail('Do not add validator to package.json scripts');

const combined = `${qaDoc}\n${queue.toLowerCase()}\n${taskLog.toLowerCase()}`;
launchForbidden.forEach((p) => { if (combined.includes(p)) fail(`Forbidden launch claim found: ${p}`); });

console.log('✅ Values Garden Depth v2 validation passed');
