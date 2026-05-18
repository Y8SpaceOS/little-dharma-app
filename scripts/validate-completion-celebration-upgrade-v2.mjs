import fs from 'node:fs';
import path from 'node:path';

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
for (let n = 68; n <= 150; n++) if (rows.get(n) !== 'not_started') throw new Error(`Sprint ${n} must be not_started`);

const queue = fs.readFileSync('docs/MASTER_SPRINT_QUEUE.md', 'utf8');
const re = (n) => new RegExp(`### Sprint ${n}[^]*?- \*\*Status:\*\* ([^\n]+)`);
if (!/Sprint 14[^]*?deferred/i.test(queue) || !/Sprint 15[^]*?deferred/i.test(queue)) throw new Error('Sprint 14/15 deferred state missing');
if (!/Sprint 67[^]*?\*\*Status:\*\* done/i.test(queue)) throw new Error('Sprint 67 must be done in MASTER_SPRINT_QUEUE');
if (!/Sprint 68[^]*?\*\*Status:\*\* not started/i.test(queue)) throw new Error('Sprint 68 must be not started in MASTER_SPRINT_QUEUE');
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
