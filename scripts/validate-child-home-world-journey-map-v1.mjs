import fs from 'node:fs';

const required = [
  'docs/CHILD_HOME_WORLD_JOURNEY_MAP_V1_QA.md',
  'docs/content/child-home-world-journey-map-v1-qa.csv',
  'docs/MASTER_SPRINT_QUEUE.md',
  'docs/TASK_LOG.md',
  'docs/content/post-foundation-product-build-roadmap.csv',
  'app/(child)/today.tsx'
];

for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`Missing required file: ${file}`);
}

const today = fs.readFileSync('app/(child)/today.tsx', 'utf8');
['Namaste', 'Story World', 'Dharma Journeys', "Today's Story", 'Chant & Sing'].forEach((token) => {
  if (!today.includes(token)) throw new Error(`Child Home missing required token: ${token}`);
});
if (!/nickname|childNameOrNickname/i.test(today)) throw new Error('Child Home must reference nickname/profile safely.');
if (!today.includes('/(child)/worlds')) throw new Error('Story World route reference missing from Child Home.');
if (!today.includes('/(child)/chant')) throw new Error('Chant & Sing route reference missing from Child Home.');

const roadmap = fs.readFileSync('docs/content/post-foundation-product-build-roadmap.csv', 'utf8').trim().split('\n');
const header = roadmap.shift().split(',');
const idxSprint = header.indexOf('sprintNumber');
const idxStatus = header.indexOf('status');
if (idxSprint < 0 || idxStatus < 0) throw new Error('Roadmap CSV headers missing sprintNumber/status.');
const map = new Map(roadmap.map((line) => { const cols = line.split(','); return [Number(cols[idxSprint]), cols[idxStatus]]; }));
for (let sprint = 61; sprint <= 150; sprint += 1) if (!map.has(sprint)) throw new Error(`Missing Sprint ${sprint} row in roadmap CSV.`);
[61, 62, 63, 64].forEach((s) => { if (map.get(s) !== 'done') throw new Error(`Sprint ${s} must be done.`); });
if (map.get(65) !== 'done') throw new Error('Sprint 65 must be done.');
if (map.get(66) !== 'done') throw new Error('Sprint 66 must be done.');
if (map.get(67) !== 'done') throw new Error('Sprint 67 must be done.');
for (let sprint = 69; sprint <= 150; sprint += 1) if (map.get(sprint) !== 'not_started') throw new Error(`Sprint ${sprint} must be not_started.`);

const queue = fs.readFileSync('docs/MASTER_SPRINT_QUEUE.md', 'utf8');
if (!/Sprint 64[\s\S]*?\*\*Status:\*\* done/.test(queue)) throw new Error('MASTER_SPRINT_QUEUE must mark Sprint 64 done.');
if (!/Sprint 65[\s\S]*?\*\*Status:\*\* done/.test(queue)) throw new Error('MASTER_SPRINT_QUEUE must mark Sprint 65 done.');
if (!/Sprint 66[\s\S]*?\*\*Status:\*\* done/.test(queue)) throw new Error('MASTER_SPRINT_QUEUE must mark Sprint 66 done.');
if (!/Sprint 67[\s\S]*?\*\*Status:\*\* done/.test(queue)) throw new Error('MASTER_SPRINT_QUEUE must mark Sprint 67 done.');
if (!/Sprint 68[\s\S]*?\*\*Status:\*\* not started/.test(queue)) throw new Error('MASTER_SPRINT_QUEUE must keep Sprint 68 not started.');
if (!/Sprint 14[\s\S]*deferred intentionally/.test(queue) || !/Sprint 15[\s\S]*deferred intentionally/.test(queue)) throw new Error('Sprint 14/15 deferred state missing.');

const taskLog = fs.readFileSync('docs/TASK_LOG.md', 'utf8');
if (!/Sprint 65/i.test(taskLog)) throw new Error('TASK_LOG must include Sprint 65 entry.');

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
if (pkg.scripts && Object.keys(pkg.scripts).some((k) => k.includes('validate-child-home-world-journey-map-v1'))) throw new Error('Do not add Sprint 64 validator to package.json scripts.');

const combinedText = `${queue}\n${taskLog}`.toLowerCase();
if (/\bpaid beta started\b/.test(combinedText) && !combinedText.includes('no paid beta started')) throw new Error('Found forbidden beta-start text.');
if (/\bexternal private beta started\b/.test(combinedText) && !combinedText.includes('no external private beta started')) throw new Error('Found forbidden beta-start text.');
if (/\bapp store submission started\b/.test(combinedText) && !combinedText.includes('no app store submission')) throw new Error('Found forbidden app store submission start text.');

console.log('validate-child-home-world-journey-map-v1: ok');
