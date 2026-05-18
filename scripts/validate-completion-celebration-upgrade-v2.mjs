import fs from 'node:fs';

const req = [
  'docs/COMPLETION_CELEBRATION_UPGRADE_V2_QA.md',
  'docs/content/completion-celebration-upgrade-v2-qa.csv',
  'docs/MASTER_SPRINT_QUEUE.md',
  'docs/TASK_LOG.md',
  'docs/content/post-foundation-product-build-roadmap.csv',
  'app/story/[slug].tsx'
];
for (const f of req) if (!fs.existsSync(f)) throw new Error(`Missing required file: ${f}`);

const completion = fs.readFileSync('app/story/[slug].tsx', 'utf8').toLowerCase();
for (const token of ['diya', 'flower', 'blessing', 'story memory', 'gratitude', 'courage', 'kindness']) {
  if (!completion.includes(token)) throw new Error(`Completion copy missing token: ${token}`);
}
for (const token of ['says:', 'talk together']) {
  if (!completion.includes(token)) throw new Error(`Completion missing guidance token: ${token}`);
}
if (/\b(xp|coins|streak|leaderboard)\b/.test(completion)) throw new Error('Forbidden gamification language found in completion source');
for (const bad of ['microphone permission', 'recording permission']) {
  if (completion.includes(bad)) throw new Error(`Forbidden language found in completion source: ${bad}`);
}

const csv = fs.readFileSync('docs/content/post-foundation-product-build-roadmap.csv', 'utf8').trim().split('\n').slice(1);
const rows = new Map(csv.map((line) => {
  const parts = line.split(',');
  return [Number(parts[0]), parts[6]];
}));
for (let n = 61; n <= 150; n++) if (!rows.has(n)) throw new Error(`Missing roadmap row: Sprint ${n}`);
for (const n of [61, 62, 63, 64, 65, 66, 67]) if (rows.get(n) !== 'done') throw new Error(`Sprint ${n} must be done in roadmap csv`);
if (rows.get(69) !== 'done') throw new Error('Sprint 69 must be done');
for (let n = 70; n <= 150; n++) if (rows.get(n) !== 'not_started') throw new Error(`Sprint ${n} must be not_started`);

const queue = fs.readFileSync('docs/MASTER_SPRINT_QUEUE.md', 'utf8');
const extractSprintSection = (queueText, sprintNumber) => {
  const heading = `### Sprint ${sprintNumber} — `;
  const startIndex = queueText.indexOf(heading);
  if (startIndex === -1) return null;
  const remaining = queueText.slice(startIndex + heading.length);
  const nextHeadingOffset = remaining.search(/\n### Sprint \d+ — /);
  const endIndex = nextHeadingOffset === -1 ? queueText.length : startIndex + heading.length + nextHeadingOffset;
  return queueText.slice(startIndex, endIndex);
};
if (!/Sprint 14[^]*?deferred/i.test(queue) || !/Sprint 15[^]*?deferred/i.test(queue)) throw new Error('Sprint 14/15 deferred state missing');
const sprint67Section = extractSprintSection(queue, 67);
if (!sprint67Section) throw new Error('Sprint 67 section missing in MASTER_SPRINT_QUEUE');
if (!sprint67Section.includes('- **Status:** done')) throw new Error('Sprint 67 section must contain status done in MASTER_SPRINT_QUEUE');
const sprint68Section = extractSprintSection(queue, 68);
if (!sprint68Section) throw new Error('Sprint 68 section missing in MASTER_SPRINT_QUEUE');
if (!sprint68Section.includes('- **Status:** done')) throw new Error('Sprint 68 section must contain status done in MASTER_SPRINT_QUEUE');
const sprint69Section = extractSprintSection(queue, 69);
if (!sprint69Section || !sprint69Section.includes('- **Status:** done')) throw new Error('Sprint 69 section must contain status done in MASTER_SPRINT_QUEUE');
for (let sprint = 70; sprint <= 150; sprint += 1) {
  const section = extractSprintSection(queue, sprint);
  if (section && !section.includes('- **Status:** not started')) throw new Error(`Sprint ${sprint} must remain not started in MASTER_SPRINT_QUEUE where section exists`);
}
if (!/Sprint 60[^]*?conditional no-go pending manual iPhone QA evidence/i.test(queue)) throw new Error('Sprint 60 conditional no-go note missing');

const taskLog = fs.readFileSync('docs/TASK_LOG.md', 'utf8');
if (!/Sprint 67/i.test(taskLog)) throw new Error('TASK_LOG missing Sprint 67 entry');
const lowerLog = taskLog.toLowerCase();
for (const bad of ['paid beta started', 'external private beta started', 'app store submission started']) {
  if (lowerLog.includes(bad) && !lowerLog.includes(`no ${bad}`)) throw new Error(`Forbidden launch language in TASK_LOG: ${bad}`);
}

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
if (pkg.scripts && Object.keys(pkg.scripts).some((k) => k.includes('validate-completion-celebration-upgrade-v2'))) {
  throw new Error('Do not add validate-completion-celebration-upgrade-v2 to package.json scripts');
}

console.log('validate-completion-celebration-upgrade-v2 passed');
