#!/usr/bin/env node
import fs from 'node:fs';

const fail=(m)=>{console.error(`❌ ${m}`);process.exit(1)};
const ok=(m)=>console.log(`✅ ${m}`);

const required=[
'docs/GANESHA_STORY_PACK_V1.md','docs/GANESHA_STORY_PACK_V1_QA.md','app/(child)/worlds.tsx','src/data/storyWorld.ts','docs/content/ganesha-story-pack-v1.csv','docs/content/ganesha-story-pack-v1-parent-notes.csv','docs/content/ganesha-story-pack-v1-editorial-guardrails.csv','docs/content/ganesha-story-pack-v1-qa.csv','scripts/validate-ganesha-story-pack-v1.mjs','docs/MASTER_SPRINT_QUEUE.md','docs/TASK_LOG.md','docs/content/post-foundation-product-build-roadmap.csv'
];
for(const f of required){if(!fs.existsSync(f)) fail(`Missing ${f}`);} ok('Required files exist');

const plan=fs.readFileSync('docs/GANESHA_STORY_PACK_V1.md','utf8').toLowerCase();
for(const p of ['ganesha world','ganesha wisdom journey','child-safe','source-tradition','parent notes','editorial guardrails']) if(!plan.includes(p)) fail(`Plan missing ${p}`);
ok('Plan language checks passed');

const csv=fs.readFileSync('docs/content/ganesha-story-pack-v1.csv','utf8').trim().split(/\r?\n/);
const h=csv[0].split(',');
for(const c of ['storyId','title','childFacingTitle','worldSlug','journeySlug','proposedOrder','ageBands','primaryValue','sourceTradition','editorialGuardrail','parentNoteRequired','readinessStatus']) if(!h.includes(c)) fail(`Story CSV missing ${c}`);
if(csv.length<9) fail('Story CSV must include at least 8 stories');
const blob=csv.slice(1).join(' ').toLowerCase();
for(const t of ['beginnings','listening','focus','gratitude','friendship','patient']) if(!blob.includes(t)) fail(`Story CSV missing token ${t}`);
ok('Story CSV checks passed');

const queue=fs.readFileSync('docs/MASTER_SPRINT_QUEUE.md','utf8');
const s75=queue.match(/### Sprint 75 —[\s\S]*?(?=\n### Sprint 76 —)/)?.[0]||'';
const s76=queue.match(/### Sprint 76 —[\s\S]*?(?=\n### Sprint 77 —)/)?.[0]||'';

const sprint75StatusLines = s75.match(/- \*\*Status:\*\* .+/g) || [];
if (sprint75StatusLines.length !== 1) fail(`Sprint 75 must have exactly one status line (found ${sprint75StatusLines.length})`);
if (sprint75StatusLines[0].trim() !== '- **Status:** done') fail('Sprint 75 status line must be exactly done');
if(!s76.includes('- **Status:** not started')) fail('Sprint 76 must be not started');
ok('Queue checks passed');

const roadmapRows=fs.readFileSync('docs/content/post-foundation-product-build-roadmap.csv','utf8').trim().split(/\r?\n/);
const roadmapHeader=roadmapRows[0].split(',');
const idx=Object.fromEntries(roadmapHeader.map((v,i)=>[v,i]));
const parsed=roadmapRows.slice(1).map((line)=>line.split(','));
const sprint75Rows=parsed.filter((r)=>Number(r[idx.sprintNumber])===75);
if(sprint75Rows.length!==1) fail(`Sprint 75 must appear exactly once in roadmap CSV (found ${sprint75Rows.length})`);
if(sprint75Rows[0][idx.status] !== 'done') fail('Roadmap Sprint 75 status must be done');

const visualBlock = new Map([[76,'Little Dharma Visual System Upgrade v1'],[77,'Child Home + Story World Visual Polish v1'],[78,'Story Detail + Content Runtime Visual Integration v1']]);
for (const [n,title] of visualBlock.entries()) {
  const row = parsed.find((r)=>Number(r[idx.sprintNumber])===n);
  if(!row) fail(`Missing Sprint ${n} row`);
  if(row[idx.sprintTitle] !== title) fail(`Sprint ${n} title mismatch`);
}
for (let n=76;n<=150;n+=1){
  const row=parsed.find((r)=>Number(r[idx.sprintNumber])===n);
  if(!row) fail(`Missing Sprint ${n} row`);
  if(row[idx.status] !== 'not_started') fail(`Sprint ${n} must remain not_started`);
}
ok('Roadmap checks passed');

const worldData=fs.readFileSync('src/data/storyWorld.ts','utf8');
const worldsUi=fs.readFileSync('app/(child)/worlds.tsx','utf8');
if(!worldData.includes("sectionId: 'ganesha'")||!worldData.includes('ganesha-beginnings-lamp')||!worldData.includes('ganesha-listening-ears')) fail('Ganesha Story World foundation cards missing in runtime data');
if(!worldsUi.includes('Ganesha Wisdom Journey foundations are visible here')) fail('Child-facing Ganesha runtime microcopy missing in worlds UI');
ok('Runtime UI integration checks passed');

const scoped=[plan,fs.readFileSync('docs/content/ganesha-story-pack-v1.csv','utf8').toLowerCase(),fs.readFileSync('docs/content/ganesha-story-pack-v1-parent-notes.csv','utf8').toLowerCase()].join('\n');
if(/\bmoru\b/i.test(scoped)) fail('Forbidden term moru');
ok('Safety language checks passed');

const taskLog = fs.readFileSync('docs/TASK_LOG.md','utf8');
const nextLines = taskLog.match(/- Next sprint recommendation: .+/g) || [];
if (nextLines.length === 0) fail('TASK_LOG missing next sprint recommendation lines');
const latestNext = nextLines[nextLines.length - 1].trim();
if (latestNext !== '- Next sprint recommendation: Sprint 76 — Little Dharma Visual System Upgrade v1.') fail(`Latest next sprint recommendation mismatch: ${latestNext}`);
ok('Next sprint recommendation check passed');

console.log('🎉 validate-ganesha-story-pack-v1 passed');
