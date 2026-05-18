import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const fail = (m) => { console.error(`❌ ${m}`); process.exit(1); };
const ok = (m) => console.log(`✅ ${m}`);
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const exists = (p) => fs.existsSync(path.join(root, p));

const requiredFiles = [
  'docs/RITUAL_FLOW_POLISH_V3_QA.md',
  'docs/content/ritual-flow-polish-v3-qa.csv',
  'docs/MASTER_SPRINT_QUEUE.md',
  'docs/TASK_LOG.md',
  'docs/content/post-foundation-product-build-roadmap.csv',
  'app/story/[slug].tsx'
];
requiredFiles.forEach((f) => { if (!exists(f)) fail(`Missing required file: ${f}`); });

const ritualSource = read('app/story/[slug].tsx').toLowerCase();
['gentle','ritual','child','calm'].forEach((k) => { if (!ritualSource.includes(k)) fail(`Ritual source missing warm/child-facing copy keyword: ${k}`); });
if (!/(diya|flower|blessing|gratitude|breath)/.test(ritualSource)) fail('Ritual source missing diya/flower/blessing/gratitude/breath language.');
if (!ritualSource.includes('moru')) fail('Ritual source missing Moru guidance text.');
if (/\b(xp|coins|streak|leaderboard)\b/.test(ritualSource)) fail('Ritual source contains forbidden gamification language.');
if (/(microphone|recording permission|audio recording)/.test(ritualSource)) fail('Ritual source contains forbidden microphone/recording language.');

const csv = read('docs/content/post-foundation-product-build-roadmap.csv').trim().split(/\r?\n/).slice(1);
const rows = csv.map((line) => {
  const parts = line.split(',');
  return { sprint: Number(parts[0]), status: parts[6] };
});
for (let s = 61; s <= 150; s += 1) {
  if (!rows.find((r) => r.sprint === s)) fail(`Roadmap CSV missing sprint row ${s}.`);
}
[61,62,63,64,65,66].forEach((s) => {
  const r = rows.find((x) => x.sprint === s);
  if (!r || r.status !== 'done') fail(`Sprint ${s} must be done in roadmap CSV.`);
});
for (let s = 67; s <= 150; s += 1) {
  const r = rows.find((x) => x.sprint === s);
  if (!r || r.status !== 'not_started') fail(`Sprint ${s} must remain not_started in roadmap CSV.`);
}

const queue = read('docs/MASTER_SPRINT_QUEUE.md').toLowerCase();
if (!(queue.includes('sprint 66') && queue.includes('status:** done'))) fail('MASTER_SPRINT_QUEUE must show Sprint 66 done.');
if (!(queue.includes('sprint 67') && queue.includes('not started'))) fail('MASTER_SPRINT_QUEUE must show Sprint 67 not started.');
if (!(queue.includes('sprint 14') && queue.includes('deferred'))) fail('Sprint 14 must remain deferred/not completed.');
if (!(queue.includes('sprint 15') && queue.includes('deferred'))) fail('Sprint 15 must remain deferred/not completed.');

const taskLog = read('docs/TASK_LOG.md').toLowerCase();
if (!taskLog.includes('sprint 66')) fail('TASK_LOG missing Sprint 66 entry.');

const pkg = read('package.json');
if (pkg.includes('validate-ritual-flow-polish-v3')) fail('package.json must not add validate-ritual-flow-polish-v3 script.');

const bannedDocs = [queue, taskLog, read('docs/RITUAL_FLOW_POLISH_V3_QA.md').toLowerCase()].join('\n');
if (/external private beta has started|paid beta has started/.test(bannedDocs)) fail('Found text suggesting paid/external beta has started.');
if (/app store submission has started/.test(bannedDocs)) fail('Found text suggesting App Store submission has started.');

ok('Sprint 66 ritual flow polish v3 validation passed.');
