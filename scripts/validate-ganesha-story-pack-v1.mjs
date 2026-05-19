#!/usr/bin/env node
import fs from 'node:fs';

const fail=(m)=>{console.error(`❌ ${m}`);process.exit(1)};
const ok=(m)=>console.log(`✅ ${m}`);

const required=[
'docs/GANESHA_STORY_PACK_V1.md','docs/GANESHA_STORY_PACK_V1_QA.md','docs/content/ganesha-story-pack-v1.csv','docs/content/ganesha-story-pack-v1-parent-notes.csv','docs/content/ganesha-story-pack-v1-editorial-guardrails.csv','docs/content/ganesha-story-pack-v1-qa.csv','scripts/validate-ganesha-story-pack-v1.mjs','docs/MASTER_SPRINT_QUEUE.md','docs/TASK_LOG.md','docs/content/post-foundation-product-build-roadmap.csv'
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
if(!s75.includes('- **Status:** done')) fail('Sprint 75 must be done');
if(!s76.includes('- **Status:** not started')) fail('Sprint 76 must be not started');
ok('Queue checks passed');

const roadmap=fs.readFileSync('docs/content/post-foundation-product-build-roadmap.csv','utf8');
if(!roadmap.includes('75,Ganesha Story Pack v1')||!roadmap.includes('75,Ganesha Story Pack v1,Phase 2 Product Depth Expansion,Improve depth trust and repeat ritual quality,Product Experience,Execution clarity,done')) fail('Roadmap Sprint 75 row must be done');
if(!roadmap.includes('76,Hanuman World Architecture v1')||!roadmap.includes(',not_started,')) fail('Roadmap Sprint 76+ should remain not_started');
ok('Roadmap checks passed');

const scoped=[plan,fs.readFileSync('docs/content/ganesha-story-pack-v1.csv','utf8').toLowerCase(),fs.readFileSync('docs/content/ganesha-story-pack-v1-parent-notes.csv','utf8').toLowerCase()].join('\n');
if(/\bmoru\b/i.test(scoped)) fail('Forbidden term moru');
ok('Safety language checks passed');
console.log('🎉 validate-ganesha-story-pack-v1 passed');
