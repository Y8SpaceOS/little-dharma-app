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
if (!/(luvlu|companion)/.test(ritualSource)) fail('Ritual source missing companion guidance text (Luvlu/companion).');
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
[61,62,63,64,65,66,67,68,69,70,71].forEach((s) => {
  const r = rows.find((x) => x.sprint === s);
  if (!r || r.status !== 'done') fail(`Sprint ${s} must be done in roadmap CSV.`);
});
for (let s = 72; s <= 150; s += 1) {
  const r = rows.find((x) => x.sprint === s);
  if (!r || r.status !== 'not_started') fail(`Sprint ${s} must remain not_started in roadmap CSV.`);
}

const queueRaw = read('docs/MASTER_SPRINT_QUEUE.md');
const queue = queueRaw.toLowerCase();
const extractSprintSection = (queueText, sprintNumber) => {
  const heading = `### Sprint ${sprintNumber} — `;
  const startIndex = queueText.indexOf(heading);
  if (startIndex === -1) return null;

  const remaining = queueText.slice(startIndex + heading.length);
  const nextHeadingOffset = remaining.search(/\n### Sprint \d+ — /);
  const endIndex = nextHeadingOffset === -1 ? queueText.length : startIndex + heading.length + nextHeadingOffset;

  return queueText.slice(startIndex, endIndex);
};

const sprint66Section = extractSprintSection(queueRaw, 66);
if (!sprint66Section) fail('MASTER_SPRINT_QUEUE is missing Sprint 66 section.');
if (!sprint66Section.includes('- **Status:** done')) fail('Sprint 66 section must contain status done.');

const sprint67Section = extractSprintSection(queueRaw, 67);
if (!sprint67Section) fail('MASTER_SPRINT_QUEUE is missing Sprint 67 section.');
if (!sprint67Section.includes('- **Status:** done')) fail('Sprint 67 section must contain status done.');

{ const r = rows.find((x) => x.sprint === 67); if (!r || r.status !== 'done') fail('Sprint 67 must be done in roadmap CSV.'); }
const sprint69Section = extractSprintSection(queueRaw, 69);
if (!sprint69Section || !sprint69Section.includes('- **Status:** done')) fail('Sprint 69 section must contain status done.');
const sprint70Section = extractSprintSection(queueRaw, 70);
if (!sprint70Section || !sprint70Section.includes('- **Status:** done')) fail('Sprint 70 section must contain status done.');
const s71 = extractSprintSection(queueRaw, 71);
if (s71 && !s71.includes('- **Status:** done')) fail('Sprint 71 section must be done in MASTER_SPRINT_QUEUE.');
for (let s = 72; s <= 150; s += 1) {
  const section = extractSprintSection(queueRaw, s);
  if (section && !section.includes('- **Status:** not started')) {
    fail(`Sprint ${s} section must remain not started in MASTER_SPRINT_QUEUE.`);
  }
}

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
