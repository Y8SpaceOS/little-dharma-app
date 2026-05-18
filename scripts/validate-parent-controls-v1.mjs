#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const fail = (m) => { console.error(`❌ ${m}`); process.exit(1); };
const ok = (m) => console.log(`✅ ${m}`);
const must = [
  'docs/PARENT_CONTROLS_V1_QA.md',
  'docs/content/parent-controls-v1-qa.csv',
  'docs/MASTER_SPRINT_QUEUE.md',
  'docs/TASK_LOG.md',
  'docs/content/post-foundation-product-build-roadmap.csv',
  'app/(parent)/controls.tsx',
  'app/(parent)/dashboard.tsx'
];
for (const f of must) if (!fs.existsSync(path.resolve(f))) fail(`Missing ${f}`);
ok('Required files exist');

const controls = fs.readFileSync(path.resolve('app/(parent)/controls.tsx'),'utf8');
const dashboard = fs.readFileSync(path.resolve('app/(parent)/dashboard.tsx'),'utf8');
const source = `${controls}\n${dashboard}`.toLowerCase();
for (const t of ['parent controls','child profile','age band','local','on-device','no public child profile','privacy','trust','luvlu']) {
  if (!source.includes(t)) fail(`Missing parent-controls token: ${t}`);
}
for (const bad of ['moru','coins','streak','leaderboard']) {
  if (source.includes(bad)) fail(`Forbidden token in parent controls surfaces: ${bad}`);
}
ok('Parent Controls language checks passed');

const csv = fs.readFileSync(path.resolve('docs/content/post-foundation-product-build-roadmap.csv'),'utf8').trim().split(/\r?\n/).map(l=>l.split(','));
const h = Object.fromEntries(csv[0].map((c,i)=>[c,i]));
const rows = csv.slice(1).map(r=>({n:Number(r[h.sprintNumber]),status:r[h.status]}));
for(let n=61;n<=150;n++) if(!rows.find(r=>r.n===n)) fail(`Missing sprint ${n} in roadmap CSV`);
for(let n=61;n<=70;n++) if(rows.find(r=>r.n===n)?.status!=='done') fail(`Sprint ${n} must be done in CSV`);
if(rows.find(r=>r.n===71)?.status!=='done') fail('Sprint 71 must be done in CSV');
if(rows.find(r=>r.n===72)?.status!=='done') fail('Sprint 72 must be done in CSV');
for(let n=74;n<=150;n++) if(rows.find(r=>r.n===n)?.status!=='not_started') fail(`Sprint ${n} must be not_started in CSV`);
ok('Roadmap CSV statuses valid');

const queue = fs.readFileSync(path.resolve('docs/MASTER_SPRINT_QUEUE.md'),'utf8');
if(!/### Sprint 70[\s\S]*?- \*\*Status:\*\* done/.test(queue)) fail('Sprint 70 must be done in MASTER_SPRINT_QUEUE');
if(!/### Sprint 71[\s\S]*?- \*\*Status:\*\* done/.test(queue)) fail('Sprint 71 must be done in MASTER_SPRINT_QUEUE');
if(!/### Sprint 72[\s\S]*?- \*\*Status:\*\* done/.test(queue)) fail('Sprint 72 must be done in MASTER_SPRINT_QUEUE');
if(queue.includes('Status:** not_started')) fail('MASTER_SPRINT_QUEUE must use not started, not not_started');
if(!queue.includes('Sprint 14 — Test Harness Reliability and Coverage Targets') || !queue.includes('Sprint 15 — Developer Environment Bootstrap Guide') || !queue.includes('not completed; deferred intentionally')) fail('Sprint 14/15 deferred guard missing');
if(!queue.toLowerCase().includes('conditional no-go') || !queue.toLowerCase().includes('manual iphone qa evidence')) fail('Sprint 60 conditional no-go language missing');
ok('MASTER_SPRINT_QUEUE governance checks passed');

const task = fs.readFileSync(path.resolve('docs/TASK_LOG.md'),'utf8');
if(!task.includes('Sprint 70')) fail('TASK_LOG missing Sprint 70 entry');
if(/started paid beta|started external private beta|submitted to app store/i.test(task)) fail('TASK_LOG suggests forbidden launch scope started');
ok('TASK_LOG checks passed');

const pkg = fs.readFileSync(path.resolve('package.json'),'utf8');
if (pkg.includes('validate-parent-controls-v1')) fail('Do not add validate-parent-controls-v1 to package scripts');
ok('package.json script guard passed');

console.log('🎉 validate-parent-controls-v1 passed');
