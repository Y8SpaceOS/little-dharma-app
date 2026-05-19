#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const fail = (m) => { console.error(`❌ ${m}`); process.exit(1); };
const ok = (m) => console.log(`✅ ${m}`);

const reqFiles = [
  'docs/GANESHA_WORLD_ARCHITECTURE_V1.md',
  'docs/GANESHA_WORLD_ARCHITECTURE_V1_QA.md',
  'docs/content/ganesha-world-architecture-v1.csv',
  'docs/content/ganesha-world-architecture-v1-qa.csv',
  'docs/MASTER_SPRINT_QUEUE.md',
  'docs/TASK_LOG.md',
  'docs/content/post-foundation-product-build-roadmap.csv',
  'package.json'
];
for (const f of reqFiles) if (!fs.existsSync(path.resolve(f))) fail(`Missing ${f}`);
ok('Required files exist');

const plan = fs.readFileSync('docs/GANESHA_WORLD_ARCHITECTURE_V1.md', 'utf8');
for (const phrase of ['Ganesha World','Story World','Ganesha Wisdom Journey','source-tradition','editorial guardrails','age-band','parent-trust','No fear-based religion','No graphic violence','No sectarian superiority','No caste-coded messaging','No guilt-based devotion','No deity trivialisation']) {
  if (!plan.toLowerCase().includes(phrase.toLowerCase())) fail(`Planning doc missing: ${phrase}`);
}
ok('Planning doc language checks passed');

const parseCsvLine = (line) => {
  const out = []; let cur = ''; let q = false;
  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];
    if (ch === '"') {
      if (q && line[i + 1] === '"') { cur += '"'; i += 1; } else { q = !q; }
    } else if (ch === ',' && !q) { out.push(cur); cur = ''; } else { cur += ch; }
  }
  out.push(cur);
  return out;
};
const csvRaw = fs.readFileSync('docs/content/ganesha-world-architecture-v1.csv', 'utf8').trim().split(/\r?\n/);
const header = parseCsvLine(csvRaw[0]);
const requiredCols = ['storyId','title','childFacingTitle','proposedOrder','contentSurface','ageBands','primaryValue','secondaryValues','characters','sourceTradition','sensitivityLevel','editorialNotes','status'];
for (const c of requiredCols) if (!header.includes(c)) fail(`CSV missing column ${c}`);
const idx = Object.fromEntries(header.map((h, i) => [h, i]));
const rows = csvRaw.slice(1).map((l) => parseCsvLine(l));
if (rows.length < 20) fail('Ganesha CSV must include at least 20 story rows');
const allowed = new Set(['planned', 'needs_review', 'ready_for_draft_later']);
for (const r of rows) if (!allowed.has((r[idx.status] || '').trim())) fail(`Invalid status: ${r[idx.status]}`);
const blob = rows.flat().join(' ').toLowerCase();
for (const token of ['beginnings', 'listening', 'focus', 'gratitude', 'wisdom', 'diyas', 'flowers', 'blessings']) {
  if (!blob.includes(token)) fail(`CSV missing token: ${token}`);
}
ok('CSV checks passed');

const queue = fs.readFileSync('docs/MASTER_SPRINT_QUEUE.md', 'utf8');
if (!/### Sprint 74[\s\S]*?- \*\*Status:\*\* done/.test(queue)) fail('MASTER_SPRINT_QUEUE must show Sprint 74 done');
if (!/### Sprint 75[\s\S]*?- \*\*Status:\*\* not started/.test(queue)) fail('MASTER_SPRINT_QUEUE must show Sprint 75 not started');
if (queue.includes('not_started')) fail('MASTER_SPRINT_QUEUE must use `not started` wording');
if (!queue.includes('Sprint 14 — Test Harness Reliability and Coverage Targets') || !queue.includes('not completed; deferred intentionally')) fail('Sprint 14 deferred marker missing');
if (!queue.includes('Sprint 15 — Developer Environment Bootstrap Guide') || !queue.includes('not completed; deferred intentionally')) fail('Sprint 15 deferred marker missing');
if (!queue.includes('conditional no-go pending manual iPhone QA evidence')) fail('Sprint 60 conditional no-go phrase missing');
ok('Queue governance checks passed');

const roadmap = fs.readFileSync('docs/content/post-foundation-product-build-roadmap.csv', 'utf8').trim().split(/\r?\n/).map((l) => l.split(','));
const h = Object.fromEntries(roadmap[0].map((v, i) => [v, i]));
const rr = roadmap.slice(1).map((r) => ({ n: Number(r[h.sprintNumber]), status: r[h.status] }));
for (let n = 61; n <= 150; n += 1) if (!rr.find((r) => r.n === n)) fail(`Missing Sprint ${n} in roadmap csv`);
for (let n = 61; n <= 74; n += 1) if (rr.find((r) => r.n === n)?.status !== 'done') fail(`Sprint ${n} should be done`);
for (let n = 75; n <= 150; n += 1) if (rr.find((r) => r.n === n)?.status !== 'not_started') fail(`Sprint ${n} should be not_started`);
ok('Roadmap CSV governance checks passed');

const tasklog = fs.readFileSync('docs/TASK_LOG.md', 'utf8');
if (!tasklog.includes('Sprint 74')) fail('TASK_LOG missing Sprint 74 entry');

const pkg = fs.readFileSync('package.json', 'utf8');
if (pkg.includes('validate-ganesha-world-architecture-v1')) fail('package.json should not include validator script');

const scoped = [plan, fs.readFileSync('docs/GANESHA_WORLD_ARCHITECTURE_V1_QA.md','utf8'), fs.readFileSync('docs/content/ganesha-world-architecture-v1.csv','utf8')].join('\n').toLowerCase();
if (/\bmoru\b/i.test(scoped)) fail('Forbidden term found: moru');
for (const bad of ['xp','coins','streak','leaderboard','rank']) if (new RegExp(`\\b${bad}\\b`, 'i').test(scoped)) fail(`Forbidden term found: ${bad}`);
if (/\bcourse\b|\bmodule\b|\bpremium\b|\bunlock\b/i.test(scoped)) fail('Forbidden child-facing language found');
if (/\bpaid beta has started\b|\bexternal beta has started\b|\bapp store submission has started\b/i.test(scoped)) fail('Forbidden launch language found');
ok('Safety/scope checks passed');

console.log('🎉 validate-ganesha-world-architecture-v1 passed');
