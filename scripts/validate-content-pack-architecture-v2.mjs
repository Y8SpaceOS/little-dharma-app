#!/usr/bin/env node
import fs from 'node:fs';

const fail = (m) => { console.error(`❌ ${m}`); process.exit(1); };
const ok = (m) => console.log(`✅ ${m}`);

const files = [
  'docs/CONTENT_PACK_ARCHITECTURE_V2_QA.md',
  'docs/content/content-pack-architecture-v2-qa.csv',
  'docs/MASTER_SPRINT_QUEUE.md',
  'docs/TASK_LOG.md',
  'docs/content/post-foundation-product-build-roadmap.csv',
  'src/lib/contentPacks.ts'
];
for (const f of files) if (!fs.existsSync(f)) fail(`Missing required file: ${f}`);
ok('Required files exist');

const source = fs.readFileSync('src/lib/contentPacks.ts', 'utf8');
const docs = fs.readFileSync('docs/CONTENT_PACK_ARCHITECTURE_V2.md', 'utf8') + '\n' + fs.readFileSync('docs/CONTENT_PACK_ARCHITECTURE_V2_QA.md', 'utf8');
const queue = fs.readFileSync('docs/MASTER_SPRINT_QUEUE.md', 'utf8');
const taskLog = fs.readFileSync('docs/TASK_LOG.md', 'utf8');
const roadmap = fs.readFileSync('docs/content/post-foundation-product-build-roadmap.csv', 'utf8').trim().split(/\r?\n/);
const pkg = fs.readFileSync('package.json', 'utf8');

for (const token of ['id','title','childFacingTitle','description','packType','sourceTradition','recommendedAgeBands','primaryValues','characters','storyIds','journeyIds','status','sortOrder','parentTrustNote']) {
  if (!source.includes(token)) fail(`ContentPack token missing: ${token}`);
}
ok('Required field tokens present');

for (const name of ['Krishna Stories','Ganesha Stories','Hanuman Stories','Festival Stories','Bedtime Stories','Values Stories','Ramayana Journey','Krishna Childhood','Mahabharata','Bhagavad Gita for Children']) {
  if (!source.includes(name)) fail(`Seeded pack content missing token: ${name}`);
}
ok('Seeded pack tokens present');

for (const fn of ['getAllContentPacks','getAvailableContentPacks','getContentPackById','getContentPacksByType','getRecommendedContentPacksByAgeBand','getContentPacksForStoryWorld','getContentPacksForDharmaJourneys','getParentFacingContentPackSummary']) {
  if (!source.includes(`function ${fn}`)) fail(`Missing helper: ${fn}`);
}
ok('Helper functions present');

if (!(source.includes('story_world') && source.includes('dharma_journey') && docs.includes('story_world') && docs.includes('dharma_journey'))) fail('Missing story_world and dharma_journey distinction');
if (!/(child-safe retellings|No graphic violence)/i.test(source + '\n' + docs)) fail('Editorial guardrail language missing');
ok('Architecture distinction and guardrails verified');

if (/\bMoru\b/.test(source + '\n' + docs)) fail('Found Moru in current Sprint 72 source/docs scope');
if (/\b(XP|coins|streak|leaderboard)\b/i.test(source + '\n' + docs)) fail('Found forbidden hard-gamification language');
if (/\b(microphone permission|audio recording)\b/i.test(source + '\n' + docs) && !/No microphone\/audio recording added/.test(fs.readFileSync('docs/CONTENT_PACK_ARCHITECTURE_V2_QA.md','utf8'))) fail('Microphone/recording language found without explicit exclusion framing');
if (/\b(backend|auth|cloud sync|CMS|analytics|telemetry)\b/i.test(source)) fail('Runtime source introduced forbidden platform scope');
ok('Forbidden language/scope checks passed');

const header = roadmap[0].split(',');
const idxN = header.indexOf('sprintNumber'); const idxS = header.indexOf('status');
const rows = roadmap.slice(1).map((line)=>line.split(','));
for (let n=61;n<=150;n++) if (!rows.find(r=>Number(r[idxN])===n)) fail(`Missing roadmap row sprint ${n}`);
for (let n=61;n<=72;n++) if (rows.find(r=>Number(r[idxN])===n)?.[idxS] !== 'done') fail(`Sprint ${n} must be done in CSV`);
for (let n=73;n<=150;n++) if (rows.find(r=>Number(r[idxN])===n)?.[idxS] !== 'not_started') fail(`Sprint ${n} must be not_started in CSV`);
ok('Roadmap CSV sprint status checks passed');

const section = (n) => {
  const marker = `### Sprint ${n}`;
  const start = queue.indexOf(marker); if (start < 0) return '';
  const next = queue.indexOf('### Sprint ', start + marker.length);
  return queue.slice(start, next > -1 ? next : queue.length);
};
if (!section(72).includes('- **Status:** done')) fail('MASTER_SPRINT_QUEUE Sprint 72 must be done');
if (!section(73).includes('- **Status:** not started')) fail('MASTER_SPRINT_QUEUE Sprint 73 must be not started');
if (queue.includes('not_started')) fail('MASTER_SPRINT_QUEUE must use "not started"');
if (!queue.includes('Sprint 14 — Test Harness Reliability and Coverage Targets') || !queue.includes('not completed; deferred intentionally')) fail('Sprint 14 defer state missing');
if (!queue.includes('Sprint 15 — Developer Environment Bootstrap Guide') || !queue.includes('not completed; deferred intentionally')) fail('Sprint 15 defer state missing');
if (!/Sprint 60[\s\S]*conditional no-go[\s\S]*manual iPhone QA evidence/.test(queue)) fail('Sprint 60 conditional no-go phrase missing');
ok('MASTER_SPRINT_QUEUE governance checks passed');

if (!taskLog.includes('Sprint 72')) fail('TASK_LOG missing Sprint 72 entry');
if (pkg.includes('validate-content-pack-architecture-v2')) fail('package.json must not include Sprint 72 validator script');
if (/paid beta has started|external private beta has started|App Store submission has started/i.test(source + '\n' + docs + '\n' + taskLog)) fail('Found forbidden started-release wording');
ok('TASK_LOG/package/release wording checks passed');

console.log('🎉 validate-content-pack-architecture-v2 passed');
