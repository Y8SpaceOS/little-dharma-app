#!/usr/bin/env node
import fs from 'node:fs';

const fail = (m) => { console.error(`❌ ${m}`); process.exit(1); };
const ok = (m) => console.log(`✅ ${m}`);

const queue = fs.readFileSync('docs/MASTER_SPRINT_QUEUE.md', 'utf8');
const roadmap = fs.readFileSync('docs/POST_FOUNDATION_PRODUCT_BUILD_ROADMAP.md', 'utf8');
const csvLines = fs.readFileSync('docs/content/post-foundation-product-build-roadmap.csv', 'utf8').trim().split(/\r?\n/);
const header = csvLines[0].split(',');
const rows = csvLines.slice(1).map((l) => l.split(','));
const idx = Object.fromEntries(header.map((h, i) => [h, i]));

const requiredTitles = new Map([
  [76, 'Little Dharma Visual System Upgrade v1'],
  [77, 'Onboarding + App Shell Prototype Reconstruction v1'],
  [78, 'Story Detail + Content Runtime Visual Integration v1'],
]);

for (const [n, title] of requiredTitles) {
  const sectionRe = new RegExp(`### Sprint ${n} — ${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`);
  if (!sectionRe.test(queue)) fail(`MASTER_SPRINT_QUEUE missing Sprint ${n} title: ${title}`);

  const row = rows.find((r) => Number(r[idx.sprintNumber]) === n);
  if (!row) fail(`Roadmap CSV missing Sprint ${n}`);
  if (row[idx.sprintTitle] !== title) fail(`Roadmap CSV Sprint ${n} title mismatch`);
  if (n === 76 && row[idx.status] !== 'done') fail('Roadmap CSV Sprint 76 must be done');
  if (n === 77 && row[idx.status] !== 'done') fail('Roadmap CSV Sprint 77 must be done');
  if (n > 77 && row[idx.status] !== 'not_started') fail(`Roadmap CSV Sprint ${n} must remain not_started`);
}

if (/Sprint 76 — Hanuman World Architecture v1/.test(queue)) fail('Queue must not recommend Sprint 76 Hanuman World Architecture v1');
if (/\n76,Hanuman World Architecture v1,/.test(fs.readFileSync('docs/content/post-foundation-product-build-roadmap.csv', 'utf8'))) fail('CSV must not keep Sprint 76 Hanuman title');

if (!/### Sprint 75[\s\S]*?- \*\*Status:\*\* done/.test(queue)) fail('Sprint 75 must remain done');
const sprint76Block = queue.match(new RegExp(`### Sprint 76 —[\\s\\S]*?(?=\\n### Sprint 77 —|\\n### Sprints 91–120 —)`))?.[0] ?? '';
if (!sprint76Block.includes('- **Status:** done')) fail('Sprint 76 must be done in queue');
for (let n = 78; n <= 79; n += 1) {
  const block = queue.match(new RegExp(`### Sprint ${n} —[\\s\\S]*?(?=\\n### Sprint ${n + 1} —|\\n### Sprints 91–120 —)`))?.[0] ?? '';
  if (!block.includes('- **Status:** not started')) fail(`Sprint ${n} must remain not started in queue`);
}

if (!queue.includes('Sprint 60 is a foundation-completion + release-candidate documentation gate, **not** a launch decision.') ||
    !queue.includes('conditional no-go pending manual iPhone QA evidence')) {
  fail('Sprint 60 conditional no-go language must remain');
}
if (!queue.includes('Sprint 14 — Test Harness Reliability and Coverage Targets:** not completed; deferred intentionally.') ||
    !queue.includes('Sprint 15 — Developer Environment Bootstrap Guide:** not completed; deferred intentionally.')) {
  fail('Sprint 14/15 deferred notes must remain');
}

for (const phrase of [
  'Permanent rule from Sprint 76 onward',
  'minimum child-facing visual quality bar',
  'little_dharma_45_screen_structured_prototype.html',
]) {
  if (!roadmap.includes(phrase) && !queue.includes(phrase)) fail(`Missing permanent visual transformation governance phrase: ${phrase}`);
}

ok('Visual transformation block governance checks passed');
