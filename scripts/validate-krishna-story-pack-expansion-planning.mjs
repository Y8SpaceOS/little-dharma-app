#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const fail = (m) => { console.error(`❌ ${m}`); process.exit(1); };
const ok = (m) => console.log(`✅ ${m}`);

const reqFiles = [
  'docs/KRISHNA_STORY_PACK_EXPANSION_PLAN.md',
  'docs/KRISHNA_STORY_PACK_EXPANSION_PLANNING_QA.md',
  'docs/content/krishna-story-pack-expansion-plan.csv',
  'docs/content/krishna-story-pack-expansion-planning-qa.csv',
  'docs/MASTER_SPRINT_QUEUE.md',
  'docs/TASK_LOG.md',
  'docs/content/post-foundation-product-build-roadmap.csv',
  'package.json'
];
for (const f of reqFiles) if (!fs.existsSync(path.resolve(f))) fail(`Missing ${f}`);
ok('Required files exist');

const plan = fs.readFileSync('docs/KRISHNA_STORY_PACK_EXPANSION_PLAN.md', 'utf8');
for (const phrase of ['Krishna Story Pack','Krishna Childhood Journey','child-safe retellings','parent-trusted','source-tradition','age bands','editorial guardrails','no graphic violence','no fear-based religion','no sectarian superiority','no caste-coded messaging','no guilt-based devotion','no deity trivialisation']) {
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
const csvRaw = fs.readFileSync('docs/content/krishna-story-pack-expansion-plan.csv', 'utf8').trim().split(/\r?\n/);
const header = parseCsvLine(csvRaw[0]);
const requiredCols = ['storyId','title','childFacingTitle','proposedOrder','contentSurface','ageBands','primaryValue','secondaryValues','characters','sourceTradition','sensitivityLevel','editorialNotes','status'];
for (const c of requiredCols) if (!header.includes(c)) fail(`CSV missing column ${c}`);
const idx = Object.fromEntries(header.map((h, i) => [h, i]));
const rows = csvRaw.slice(1).map((l) => parseCsvLine(l));
if (rows.length < 20) fail('Krishna CSV must include at least 20 story rows');
const allowed = new Set(['planned', 'needs_review', 'ready_for_draft_later']);
for (const r of rows) if (!allowed.has((r[idx.status] || '').trim())) fail(`Invalid status: ${r[idx.status]}`);
const blob = rows.flat().join(' ').toLowerCase();
for (const token of ["krishna's birth", 'butter', 'yashoda', 'universe', 'govardhan', 'kaliya', 'flute', 'sudama', 'mathura']) {
  if (!blob.includes(token)) fail(`CSV missing token: ${token}`);
}
ok('CSV checks passed');

const queue = fs.readFileSync('docs/MASTER_SPRINT_QUEUE.md', 'utf8');
if (!/### Sprint 73[\s\S]*?- \*\*Status:\*\* done/.test(queue)) fail('MASTER_SPRINT_QUEUE must show Sprint 73 done');
if (!/### Sprint 74[\s\S]*?- \*\*Status:\*\* done/.test(queue)) fail('MASTER_SPRINT_QUEUE must show Sprint 74 done');
if (queue.includes('not_started')) fail('MASTER_SPRINT_QUEUE must use `not started` wording');
if (!queue.includes('Sprint 14 — Test Harness Reliability and Coverage Targets') || !queue.includes('not completed; deferred intentionally')) fail('Sprint 14 deferred marker missing');
if (!queue.includes('Sprint 15 — Developer Environment Bootstrap Guide') || !queue.includes('not completed; deferred intentionally')) fail('Sprint 15 deferred marker missing');
if (!queue.includes('conditional no-go pending manual iPhone QA evidence')) fail('Sprint 60 conditional no-go phrase missing');
ok('Queue governance checks passed');

const roadmap = fs.readFileSync('docs/content/post-foundation-product-build-roadmap.csv', 'utf8').trim().split(/\r?\n/).map((l) => l.split(','));
const h = Object.fromEntries(roadmap[0].map((v, i) => [v, i]));
const rr = roadmap.slice(1).map((r) => ({ n: Number(r[h.sprintNumber]), status: r[h.status] }));
for (let n = 61; n <= 150; n += 1) if (!rr.find((r) => r.n === n)) fail(`Missing Sprint ${n} in roadmap csv`);
for (let n = 61; n <= 73; n += 1) if (rr.find((r) => r.n === n)?.status !== 'done') fail(`Sprint ${n} should be done`);
for (let n = 75; n <= 150; n += 1) if (rr.find((r) => r.n === n)?.status !== 'not_started') fail(`Sprint ${n} should be not_started`);
ok('Roadmap CSV governance checks passed');

const tasklog = fs.readFileSync('docs/TASK_LOG.md', 'utf8');
if (!tasklog.includes('Sprint 73')) fail('TASK_LOG missing Sprint 73 entry');

const pkg = fs.readFileSync('package.json', 'utf8');
if (pkg.includes('validate-krishna-story-pack-expansion-planning')) fail('package.json should not include validator script');

const scoped = [plan, fs.readFileSync('docs/KRISHNA_STORY_PACK_EXPANSION_PLANNING_QA.md','utf8'), fs.readFileSync('docs/content/krishna-story-pack-expansion-plan.csv','utf8')].join('\n').toLowerCase();
if (/\bmoru\b/i.test(scoped)) fail('Forbidden term found: moru');
for (const bad of ['xp','coins','streak','leaderboard']) if (new RegExp(`\\b${bad}\\b`, 'i').test(scoped)) fail(`Forbidden term found: ${bad}`);
for (const bad of ['backend','auth','cloud sync','cms','analytics','telemetry']) if (scoped.includes(`added ${bad}`)) fail(`Forbidden scope appears introduced: ${bad}`);
if (scoped.includes('microphone permission') && !scoped.includes('no audio playback, microphone, or recording')) fail('Microphone wording must be exclusionary');
if (/\bpaid beta has started\b|\bexternal private beta has started\b|\bapp store submission has started\b/i.test(scoped)) fail('Forbidden launch language found');
ok('Safety/scope checks passed');

console.log('🎉 validate-krishna-story-pack-expansion-planning passed');
