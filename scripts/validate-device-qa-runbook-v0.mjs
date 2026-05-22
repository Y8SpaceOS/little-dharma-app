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

const runbookPath = 'docs/qa/DEVICE_QA_RUNBOOK_V0.md';
const templatePath = 'docs/qa/DEVICE_QA_RESULT_TEMPLATE.md';
ok(exists(runbookPath), `Runbook exists: ${runbookPath}`);
ok(exists(templatePath), `Result template exists: ${templatePath}`);
ok(exists('docs/qa/RELEASE_CANDIDATE_QA_GATE_V0.md'), 'Prior RC gate doc exists');

[
  'docs/qa/OFFLINE_NO_NETWORK_NO_ACCOUNT_QA.md',
  'docs/qa/ACCESSIBILITY_TOUCH_TARGET_AUDIT.md',
  'docs/qa/STORY_RUNTIME_HARDENING.md',
  'docs/qa/PARENT_SURFACE_FUNCTIONAL_READINESS.md',
  'docs/qa/LOCAL_STATE_RUNTIME_HARDENING.md',
  'docs/qa/LOCAL_FIRST_STATE_AUDIT.md',
  'docs/qa/ROUTE_INTEGRITY_AUDIT.md'
].forEach((p) => ok(exists(p), `Prior readiness doc exists: ${p}`));

[
  'scripts/validate-route-integrity-v1.mjs',
  'scripts/validate-local-first-state-v1.mjs',
  'scripts/validate-local-state-runtime-hardening-v1.mjs',
  'scripts/validate-parent-surface-readiness-v1.mjs',
  'scripts/validate-story-runtime-hardening-v1.mjs',
  'scripts/validate-accessibility-touch-target-v1.mjs',
  'scripts/validate-offline-no-account-v1.mjs',
  'scripts/validate-release-candidate-gate-v0.mjs'
].forEach((p) => ok(exists(p), `Prior primary validator exists: ${p}`));

const requiredRunbookSections = [
  'pr title and purpose','qa objective','device matrix','build assumptions','pre-qa setup','reset/local storage setup',
  'iphone qa checklist','android qa checklist','offline/no-network checklist','no-account checklist','child flow checklist',
  'story world checklist','story detail/reader/completion checklist','treasures checklist','parent flow checklist',
  'parent feedback local draft checklist','privacy/trust copy checklist','auth/subscription placeholder checklist',
  'accessibility smoke checklist','cultural/sacred respect smoke checklist','luvlu usage smoke checklist',
  'regression command checklist','issue severity definitions','blocker criteria','warning criteria','qa result template',
  'screenshots/recording capture guidance','release decision rules','follow-up recommendations for pr #117 and pr #118',
  'final pr #116 readiness statement'
];

const requiredTemplateSections = [
  'qa run date','app build / commit sha','tester','device and os','network condition','fresh install or existing install',
  'storage reset status','regression command status','route smoke result','child flow result','story runtime result',
  'parent flow result','offline/no-account result','accessibility smoke result','cultural/trust copy result',
  'issues found table','final qa decision','sign-off notes'
];

if (exists(runbookPath)) {
  const runbook = read(runbookPath).toLowerCase();
  requiredRunbookSections.forEach((section) => ok(runbook.includes(section), `Runbook section present: ${section}`));
  ok(/iphone/.test(runbook) && /android/.test(runbook) && /offline\/no-network|no-network/.test(runbook) && /fresh install|cleared storage/.test(runbook), 'Device matrix includes iPhone, Android, offline/no-network, and fresh install/cleared storage coverage');
  ['p0 blocker', 'p1 blocker', 'p2 warning', 'p3 backlog'].forEach((s) => ok(runbook.includes(s), `Severity definition present: ${s}`));
  ok(/no p0\/p1|no p0 and p1|no p0\/p1 manual blockers/.test(runbook) && /testflight/.test(runbook), 'Release decision rules require no P0/P1 blockers before TestFlight/internal release');
}

if (exists(templatePath)) {
  const tpl = read(templatePath).toLowerCase();
  requiredTemplateSections.forEach((section) => ok(tpl.includes(section), `Template section present: ${section}`));
  ['severity', 'reproduction steps', 'expected result', 'actual result', 'owner', 'status', 'final qa decision'].forEach((f) => ok(tpl.includes(f), `Template field present: ${f}`));
}

const appSrcFiles = [...walk('app'), ...walk('src')];
const codeFiles = appSrcFiles.filter((f) => /\.(ts|tsx|js|jsx)$/.test(f));

ok(!appSrcFiles.some((f) => /screen[-_ ]?(42[4-9]|4[3-8][0-9])/i.test(f)), 'No Screens 424-487 runtime filenames found in app/src');

for (const f of codeFiles) {
  const txt = read(f);
  if (/screen\s*(42[4-9]|4[3-8][0-9])\b/i.test(txt)) fail.push(`Screens 424-487 runtime reference found: ${f}`);
}

const fakeChromePatterns = [/dynamic\s*island/i,/signal\s*bars/i,/battery\s*%/i,/\bcarrier\b/i,/\bnotch\b/i,/fake\s*phone\s*chrome/i];
for (const f of codeFiles) {
  const txt = read(f);
  if (fakeChromePatterns.some((r) => r.test(txt))) fail.push(`Fake phone chrome string found: ${f}`);
}

const networkPatterns = [/\bfetch\s*\(/,/\baxios\b/,/XMLHttpRequest/,/\bWebSocket\b/];
const activePaymentMicRecordingPatterns = [/import\s+.*from\s+['"]expo-av['"]/i,/Audio\.Recording/i,/getUserMedia\s*\(/i,/import\s+.*from\s+['"]@stripe\/stripe-react-native['"]/i,/RevenueCat|Purchases\./i,/paymentIntent|clientSecret/i];
for (const f of codeFiles) {
  const txt = read(f);
  if (networkPatterns.some((r) => r.test(txt))) fail.push(`Active network implementation pattern found: ${f}`);
  if (activePaymentMicRecordingPatterns.some((r) => r.test(txt))) {
    if (/src\/(services\/subscriptions|lib\/entitlements)\.ts$/.test(f)) warn.push(`Legacy/scaffold payment integration reference present (expected existing scope): ${f}`);
    else fail.push(`Possible active payment/mic/recording implementation found: ${f}`);
  }
}

['src/lib/supabase.ts','src/services/subscriptions.ts'].forEach((p) => {
  if (exists(p)) warn.push(`Placeholder/scaffold file present, verify remains inactive: ${p}`);
});

const statusOutput = fs.existsSync(path.join(root, '.git'))
  ? execSync('git status --porcelain', { cwd: root, encoding: 'utf8' })
  : '';
if (statusOutput) {
  const addedRoutes = statusOutput
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.slice(3))
    .filter((p) => /^app\/.*\.(tsx|ts|js|jsx)$/.test(p));
  ok(addedRoutes.length === 0, 'No new app route files added in working tree');
}

console.log('\nDevice QA Runbook Validator v0\n');
pass.forEach((m) => console.log(`PASS: ${m}`));
warn.forEach((m) => console.log(`WARN: ${m}`));
fail.forEach((m) => console.log(`FAIL: ${m}`));

if (fail.length) {
  console.log(`\nResult: FAIL (${fail.length} checks failed)`);
  process.exit(1);
}

console.log(`\nResult: PASS (${pass.length} checks passed, ${warn.length} warnings)`);
