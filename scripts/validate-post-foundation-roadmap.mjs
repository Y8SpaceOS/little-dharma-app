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
const s66=rows.find(r=>r.n===66);
if (s66?.status!=='done') fail('Sprint 66 status must be done');
const s67=rows.find(r=>r.n===67);
if (s67?.status!=='done') fail('Sprint 67 status must be done');
const s68=rows.find(r=>r.n===68);
if (s68?.status!=='done') fail('Sprint 68 status must be done');
const s69=rows.find(r=>r.n===69);
if (s69?.status!=='done') fail('Sprint 69 status must be done');
const s70=rows.find(r=>r.n===70);
if (s70?.status!=='done') fail('Sprint 70 status must be done');
const s71=rows.find(r=>r.n===71);
if (s71?.status!=='done') fail('Sprint 71 status must be done');
for (let n = 72; n <= 150; n += 1) {
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
if (!/### Sprint 66[\s\S]*?- \*\*Status:\*\* done/.test(queue)) fail('Sprint 66 must be done.');
if (!/### Sprint 67[\s\S]*?- \*\*Status:\*\* done/.test(queue)) fail('Sprint 67 must be done.');
if (!/### Sprint 68[\s\S]*?- \*\*Status:\*\* done/.test(queue)) fail('Sprint 68 must be done.');
if (!/### Sprint 69[\s\S]*?- \*\*Status:\*\* done/.test(queue)) fail('Sprint 69 must be done.');
if (!/### Sprint 70[\s\S]*?- \*\*Status:\*\* done/.test(queue)) fail('Sprint 70 must be done.');
if (!/### Sprint 71[\s\S]*?- \*\*Status:\*\* done/.test(queue)) fail('Sprint 71 must be done.');
if (!/### Sprint 72[\s\S]*?- \*\*Status:\*\* not started/.test(queue)) fail('Sprint 72 must be not started.');
ok('MASTER_SPRINT_QUEUE required phrases present');

const doc = fs.readFileSync(roadmapMd,'utf8');
for (const phrase of ['Foundation Phase complete','Product Build Phase 2','conditional no-go','manual iPhone QA','not paid beta','not external private beta','continue building the app']) {
  if (!doc.includes(phrase)) fail(`POST_FOUNDATION_PRODUCT_BUILD_ROADMAP missing phrase: ${phrase}`);
}
ok('Post-foundation roadmap required phrases present');

console.log('🎉 validate-post-foundation-roadmap passed');
