#!/usr/bin/env node
import fs from 'node:fs';

const fail=(m)=>{console.error(`❌ ${m}`);process.exit(1)};
const ok=(m)=>console.log(`✅ ${m}`);
const must=[
'docs/PARENT_JOURNEY_SETTINGS_DHARMA_JOURNEY_MODEL_V1_QA.md',
'docs/content/parent-journey-settings-dharma-journey-model-v1-qa.csv',
'docs/MASTER_SPRINT_QUEUE.md','docs/TASK_LOG.md','docs/content/post-foundation-product-build-roadmap.csv',
'src/lib/dharmaJourneys.ts','app/(parent)/journey-settings.tsx'
];
for(const f of must) if(!fs.existsSync(f)) fail(`Missing ${f}`); ok('Required files exist');
const model=fs.readFileSync('src/lib/dharmaJourneys.ts','utf8');
for(const k of ['id','title','childFacingTitle','description','sourceTradition','recommendedAgeBands','totalStories','estimatedCompletionWeeks','status','journeyId','completedStoryIds','currentStoryId','lastOpenedStoryId','updatedAtLocal']) if(!model.includes(k)) fail(`Missing model field token: ${k}`);
ok('Model field tokens found');
for(const j of ['Ramayana Journey','Krishna Childhood Journey','Ganesha Wisdom Journey','Festival Journey','Hanuman Journey','Mahabharata Journey','Bhagavad Gita for Children']) if(!model.includes(j)) fail(`Missing seeded journey ${j}`);
ok('Seeded journey names present');
const parent = fs.readFileSync('app/(parent)/journey-settings.tsx','utf8');
for(const phrase of ['Dharma Journeys','story paths','Progress stays on this device','No public child profile','Ramayana Journey and Krishna Childhood Journey are recommended first']) if(!parent.includes(phrase)) fail(`Missing parent copy phrase: ${phrase}`);
ok('Parent copy includes trust and sequencing language');
const activeMoruScope = [
  'app/(parent)/journey-settings.tsx',
  'app/(parent)/controls.tsx',
  'app/(parent)/dashboard.tsx',
  'app/(child)/today.tsx',
  'app/(child)/worlds.tsx',
  'src/data/storyWorld.ts',
  'src/lib/dharmaJourneys.ts',
  'docs/PARENT_JOURNEY_SETTINGS_DHARMA_JOURNEY_MODEL_V1_QA.md',
  'docs/content/parent-journey-settings-dharma-journey-model-v1-qa.csv'
];
const text = activeMoruScope.map(f=>fs.readFileSync(f,'utf8')).join('\n');
if(/\bMoru\b/.test(text)) fail('Found Moru in active runtime/current Sprint 71 sources/docs');
for(const [label, pattern] of [['XP',/\bxp\b/i],['coins',/\bcoins?\b/i],['streak',/\bstreaks?\b/i],['leaderboard',/\bleaderboard\b/i]]) if(pattern.test(text)) fail(`Found banned term: ${label}`);
if(/microphone permission/i.test(text) && !/no[^\n.]{0,80}microphone permission/i.test(text)) fail('Found microphone permission scope outside explicit exclusion language');
if(/\brecording\b/i.test(text) && !/no[^\n.]{0,80}recording/i.test(text)) fail('Found recording scope outside explicit exclusion language');
for(const banned of ['backend','cloud sync','analytics','telemetry','CMS']) if(new RegExp(`No ${banned}|no ${banned}`,'i').test(text)===false) {} // informational only
ok('No banned gamification/audio terms found');
const csv=fs.readFileSync('docs/content/post-foundation-product-build-roadmap.csv','utf8').trim().split(/\r?\n/).slice(1).map(l=>l.split(','));
const byN=Object.fromEntries(csv.map(r=>[Number(r[0]),r[6]]));
for(let n=61;n<=150;n++) if(!(n in byN)) fail(`Missing sprint row ${n}`);
for(let n=61;n<=71;n++) if(byN[n]!=='done') fail(`Sprint ${n} must be done`);
if(byN[72]!=='done') fail('Sprint 72 must be done');
for(let n=73;n<=150;n++) if(byN[n]!=='not_started') fail(`Sprint ${n} must be not_started`);
ok('Roadmap CSV statuses valid');
const queue=fs.readFileSync('docs/MASTER_SPRINT_QUEUE.md','utf8');
if(!/### Sprint 71[\s\S]*?- \*\*Status:\*\* done/.test(queue)) fail('Sprint 71 must be done in MASTER_SPRINT_QUEUE');
if(!/### Sprint 72[\s\S]*?- \*\*Status:\*\* done/.test(queue)) fail('Sprint 72 must be done in MASTER_SPRINT_QUEUE');
if(queue.includes('not_started')) fail('MASTER_SPRINT_QUEUE must not use not_started token');
for(const phrase of ['Sprint 14 — Test Harness Reliability and Coverage Targets','not completed; deferred intentionally','Sprint 15 — Developer Environment Bootstrap Guide','conditional no-go pending manual iPhone QA evidence']) if(!queue.includes(phrase)) fail(`Queue missing ${phrase}`);
ok('MASTER_SPRINT_QUEUE governance checks passed');
if(!/Sprint 71/i.test(fs.readFileSync('docs/TASK_LOG.md','utf8'))) fail('TASK_LOG missing Sprint 71 entry');
if(fs.readFileSync('package.json','utf8').includes('validate-parent-journey-settings-dharma-journey-model-v1')) fail('Do not add validator to package scripts');
ok('TASK_LOG/package.json checks passed');
console.log('🎉 validate-parent-journey-settings-dharma-journey-model-v1 passed');
