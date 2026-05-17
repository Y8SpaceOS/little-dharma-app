#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const fail = (m) => { console.error(`❌ ${m}`); process.exit(1); };
const ok = (m) => console.log(`✅ ${m}`);

const roadmapMd = path.resolve('docs/POST_FOUNDATION_PRODUCT_BUILD_ROADMAP.md');
const roadmapCsv = path.resolve('docs/content/post-foundation-product-build-roadmap.csv');
const queueMd = path.resolve('docs/MASTER_SPRINT_QUEUE.md');

if (!fs.existsSync(roadmapMd)) fail('Missing docs/POST_FOUNDATION_PRODUCT_BUILD_ROADMAP.md');
if (!fs.existsSync(roadmapCsv)) fail('Missing docs/content/post-foundation-product-build-roadmap.csv');
ok('Roadmap doc and CSV exist');

const csv = fs.readFileSync(roadmapCsv, 'utf8').trim().split(/\r?\n/).map(l=>l.split(','));
const required = ['sprintNumber','sprintTitle','phase','primaryGoal','sprintType','primaryQualityDimension','status','notes'];
const header = csv[0];
for (const col of required) if (!header.includes(col)) fail(`Missing required CSV column: ${col}`);
ok('Required CSV columns present');

const h = Object.fromEntries(header.map((c,i)=>[c,i]));
const rows = csv.slice(1).map(r=>({n:Number(r[h.sprintNumber]),status:r[h.status]}));
for (let n=61;n<=150;n++) if (!rows.find(r=>r.n===n)) fail(`Missing sprint row ${n}`);
ok('Rows exist for Sprint 61 through Sprint 150');

const s61=rows.find(r=>r.n===61); const s62=rows.find(r=>r.n===62);
if (s61?.status!=='done') fail('Sprint 61 status must be done');
if (s62?.status!=='done') fail('Sprint 62 status must be done');
const s63=rows.find(r=>r.n===63);
if (s63?.status!=='done') fail('Sprint 63 status must be done');
const s64=rows.find(r=>r.n===64);
if (s64?.status!=='done') fail('Sprint 64 status must be done');
const s65=rows.find(r=>r.n===65);
if (s65?.status!=='done') fail('Sprint 65 status must be done');
for (let n = 66; n <= 150; n += 1) {
  const row = rows.find((r) => r.n === n);
  if (row?.status !== 'not_started') fail(`Sprint ${n} must remain not_started`);
}
ok('Status constraints valid');

const queue = fs.readFileSync(queueMd,'utf8');
for (const phrase of ['### Sprint 60','- **Status:** done','### Sprint 61','### Sprint 62','### Sprint 63','- **Status:** done','Foundation Phase complete','Product Build Phase 2','not proceeding to paid beta','not proceeding to external private beta','Sprint 14 — Test Harness Reliability and Coverage Targets','Sprint 15 — Developer Environment Bootstrap Guide','not completed; deferred intentionally']) {
  if (!queue.includes(phrase)) fail(`MASTER_SPRINT_QUEUE missing required phrase: ${phrase}`);
}

if (!/### Sprint 62[\s\S]*?- \*\*Status:\*\* done/.test(queue)) fail('Sprint 62 must be done inside Sprint 62 section.');
if (!/### Sprint 63[\s\S]*?- \*\*Status:\*\* done/.test(queue)) fail('Sprint 63 must be done inside Sprint 63 section after completion.');
if (!/### Sprint 64[\s\S]*?- \*\*Status:\*\* done/.test(queue)) fail('Sprint 64 must be done inside Sprint 64 section after completion.');
if (!/### Sprint 65[\s\S]*?- \*\*Status:\*\* done/.test(queue)) fail('Sprint 65 must be done inside Sprint 65 section after completion.');
if (!/### Sprint 66[\s\S]*?- \*\*Status:\*\* not started/.test(queue)) fail('Sprint 66 must remain not started.');
ok('MASTER_SPRINT_QUEUE required phrases present');

const doc = fs.readFileSync(roadmapMd,'utf8');
for (const phrase of ['Foundation Phase complete','Product Build Phase 2','conditional no-go','manual iPhone QA','not paid beta','not external private beta','continue building the app']) {
  if (!doc.includes(phrase)) fail(`POST_FOUNDATION_PRODUCT_BUILD_ROADMAP missing phrase: ${phrase}`);
}
ok('Post-foundation roadmap required phrases present');

console.log('🎉 validate-post-foundation-roadmap passed');
