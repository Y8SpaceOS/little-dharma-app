#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const root = process.cwd();
const pass = [];
const warn = [];
const fail = [];

const rel = (p) => path.join(root, p);
const exists = (p) => fs.existsSync(rel(p));
const read = (p) => fs.readFileSync(rel(p), 'utf8');
const ok = (condition, message) => (condition ? pass : fail).push(message);

const walk = (dir, out = []) => {
  if (!exists(dir)) return out;
  for (const ent of fs.readdirSync(rel(dir), { withFileTypes: true })) {
    const child = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(child, out);
    else out.push(child);
  }
  return out;
};

const run = (cmd) => {
  try {
    return execSync(cmd, { cwd: root, encoding: 'utf8' });
  } catch (e) {
    return e.stdout || '';
  }
};

const executionLog = 'docs/qa/DEVICE_QA_EXECUTION_LOG_V0.md';
const issueLog = 'docs/qa/DEVICE_QA_ISSUE_LOG_V0.md';
const decisionLog = 'docs/qa/INTERNAL_TESTFLIGHT_READINESS_DECISION_V0.md';

[executionLog, issueLog, decisionLog].forEach((p) => ok(exists(p), `Required doc exists: ${p}`));
['docs/qa/DEVICE_QA_RUNBOOK_V0.md', 'docs/qa/DEVICE_QA_RESULT_TEMPLATE.md', 'docs/qa/RELEASE_CANDIDATE_QA_GATE_V0.md'].forEach((p) => ok(exists(p), `Prior doc exists: ${p}`));
['scripts/validate-route-integrity-v1.mjs','scripts/validate-local-first-state-v1.mjs','scripts/validate-local-state-runtime-hardening-v1.mjs','scripts/validate-parent-surface-readiness-v1.mjs','scripts/validate-story-runtime-hardening-v1.mjs','scripts/validate-accessibility-touch-target-v1.mjs','scripts/validate-offline-no-account-v1.mjs','scripts/validate-release-candidate-gate-v0.mjs','scripts/validate-device-qa-runbook-v0.mjs'].forEach((p) => ok(exists(p), `Prior validator exists: ${p}`));

const executionSections = ['pr title and purpose','qa execution status','build / commit under test','device matrix execution table','regression command execution table','manual qa execution checklist','iphone execution status','android execution status','offline/no-network execution status','fresh install / cleared storage execution status','no-account execution status','child flow execution status','story world execution status','story reader/completion execution status','treasures execution status','parent flow execution status','parent feedback local draft execution status','privacy/trust copy execution status','auth/subscription placeholder execution status','accessibility smoke execution status','cultural/sacred respect execution status','luvlu usage execution status','issues found summary','p0 blocker list','p1 blocker list','p2 warning list','p3 backlog list','evidence/artifact links','open questions','current readiness decision','release decision rationale','follow-up recommendations for pr #118 and pr #119','final pr #117 readiness statement'];
const issueSections = ['purpose','issue id format','severity scale','status values','owner field','device field','route/surface field','reproduction steps field','expected result field','actual result field','evidence link field','decision field','issue table','current p0/p1/p2/p3 summary','sign-off impact summary'];
const decisionSections = ['pr title and purpose','decision status','automated gate status','manual device qa status','p0/p1 blocker status','p2/p3 warning status','placeholder status','scope guardrail status','testflight/internal release decision','decision rationale','conditions to proceed','conditions that block release','required next actions','sign-off owner','final decision statement'];

if (exists(executionLog)) {
  const txt = read(executionLog).toLowerCase();
  executionSections.forEach((s) => ok(txt.includes(s), `Execution log section present: ${s}`));
  const hasPending = txt.includes('pending manual device execution');
  const hasEvidence = txt.includes('http://') || txt.includes('https://') || txt.includes('evidence link') || txt.includes('artifact');
  ok(hasPending || hasEvidence, 'Execution log includes pending-manual status or evidence artifacts');
}
if (exists(issueLog)) {
  const txt = read(issueLog).toLowerCase();
  issueSections.forEach((s) => ok(txt.includes(s), `Issue log section present: ${s}`));
  ['p0','p1','p2','p3'].forEach((s) => ok(txt.includes(s), `Issue log includes severity field: ${s}`));
}
if (exists(decisionLog)) {
  const txt = read(decisionLog).toLowerCase();
  decisionSections.forEach((s) => ok(txt.includes(s), `Decision log section present: ${s}`));
  const hasManualEvidence = /manual device qa status[\s\S]{0,300}(pass|passed|complete|completed)/i.test(txt) && /evidence/i.test(txt);
  ok(hasManualEvidence || txt.includes('hold'), 'Decision record includes HOLD unless manual QA pass evidence is documented');
}

const status = run('git status --porcelain');
const addedAppRoutes = status
  .split('\n')
  .map((l) => l.trim())
  .filter(Boolean)
  .filter((l) => /^A\s+app\//.test(l));
ok(addedAppRoutes.length === 0, 'No new app route files were added');

const appSrcFiles = [...walk('app'), ...walk('src')];
ok(!appSrcFiles.some((f) => /screen[-_ ]?(42[4-9]|4[3-8][0-9])\b/i.test(f)), 'No Screens 424-487 runtime files in app/src');

const codeFiles = appSrcFiles.filter((f) => /\.(ts|tsx|js|jsx)$/.test(f));
const fakeChromePatterns = [/dynamic\s*island/i,/signal\s*bars/i,/battery\s*%/i,/\bcarrier\b/i,/\bnotch\b/i,/fake\s*phone\s*chrome/i,/status\s*bar/i];
const networkPatterns = [/\bfetch\s*\(/,/\baxios\b/,/XMLHttpRequest/,/\bWebSocket\b/];
const activePatterns = [/import\s+.*from\s+['"]expo-av['"]/i,/Audio\.Recording/i,/getUserMedia\s*\(/i,/import\s+.*from\s+['"]@stripe\/stripe-react-native['"]/i,/RevenueCat|Purchases\./i,/paymentIntent|clientSecret/i];
const gamificationPattern = /\b(xp|coins?|leaderboard|ranking|streaks?)\b/i;

for (const f of codeFiles) {
  const txt = read(f);
  if (fakeChromePatterns.some((r) => r.test(txt))) fail.push(`Fake phone chrome string found: ${f}`);
  if (networkPatterns.some((r) => r.test(txt))) fail.push(`Active network implementation pattern found: ${f}`);
  if (activePatterns.some((r) => r.test(txt))) {
    if (/src\/(lib\/entitlements|services\/subscriptions)\.ts$/.test(f)) warn.push(`Legacy/scaffold integration reference present (expected existing scope): ${f}`);
    else fail.push(`Active payment/mic/recording implementation pattern found: ${f}`);
  }
}

const childFiles = ['app/(child)/today.tsx','app/(child)/worlds.tsx','app/(child)/treasures.tsx','app/world/[slug].tsx','app/story/[slug].tsx'].filter(exists);
for (const f of childFiles) {
  if (gamificationPattern.test(read(f))) fail.push(`Hard gamification term found in active child runtime file: ${f}`);
}

['src/lib/supabase.ts','src/services/subscriptions.ts'].forEach((p) => {
  if (exists(p)) warn.push(`Placeholder/scaffold file present, verify remains inactive: ${p}`);
});

console.log('\nDevice QA Execution Validator v0\n');
pass.forEach((m) => console.log(`PASS: ${m}`));
warn.forEach((m) => console.log(`WARN: ${m}`));
fail.forEach((m) => console.log(`FAIL: ${m}`));

if (fail.length) {
  console.log(`\nResult: FAIL (${fail.length} checks failed)`);
  process.exit(1);
}

console.log(`\nResult: PASS (${pass.length} checks passed, ${warn.length} warnings)`);
