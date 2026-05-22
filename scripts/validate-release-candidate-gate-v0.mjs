#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const root = process.cwd();
const pass = [];
const warn = [];
const fail = [];

const exists = (p) => fs.existsSync(path.join(root, p));
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const push = (ok, msg) => (ok ? pass : fail).push(msg);

const walk = (dir, out = []) => {
  const abs = path.join(root, dir);
  if (!fs.existsSync(abs)) return out;
  for (const ent of fs.readdirSync(abs, { withFileTypes: true })) {
    const rel = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(rel, out);
    else out.push(rel);
  }
  return out;
};

const rcDoc = 'docs/qa/RELEASE_CANDIDATE_QA_GATE_V0.md';
push(exists(rcDoc), 'Release candidate QA gate doc exists');

const requiredSections = [
  'pr title and purpose','release candidate scope','what is ready for internal qa','what is intentionally placeholder',
  'what is not included in this release candidate','route readiness summary','child flow readiness summary','story runtime readiness summary',
  'parent flow readiness summary','local-first/offline readiness summary','accessibility/touch target readiness summary','content readiness summary',
  'sacred/cultural respect guardrail summary','luvlu usage guardrail summary','privacy/no-account/no-cloud summary',
  'known warnings and non-blocking issues','release blockers','manual qa checklist','device qa checklist','regression command checklist',
  'scope guardrail confirmation','follow-up recommendations for pr #116 and pr #117','final pr #115 release-candidate readiness statement'
];
if (exists(rcDoc)) {
  const doc = read(rcDoc).toLowerCase();
  requiredSections.forEach((s) => push(doc.includes(s), `RC doc section present: ${s}`));
}

[
  'docs/qa/ROUTE_INTEGRITY_AUDIT.md','docs/qa/LOCAL_FIRST_STATE_AUDIT.md','docs/qa/LOCAL_STATE_RUNTIME_HARDENING.md',
  'docs/qa/PARENT_SURFACE_FUNCTIONAL_READINESS.md','docs/qa/STORY_RUNTIME_HARDENING.md','docs/qa/ACCESSIBILITY_TOUCH_TARGET_AUDIT.md',
  'docs/qa/OFFLINE_NO_NETWORK_NO_ACCOUNT_QA.md'
].forEach((p) => push(exists(p), `Prior QA doc exists: ${p}`));

[
  'scripts/validate-route-integrity-v1.mjs','scripts/validate-local-first-state-v1.mjs','scripts/validate-local-state-runtime-hardening-v1.mjs',
  'scripts/validate-parent-surface-readiness-v1.mjs','scripts/validate-story-runtime-hardening-v1.mjs','scripts/validate-accessibility-touch-target-v1.mjs',
  'scripts/validate-offline-no-account-v1.mjs'
].forEach((p) => push(exists(p), `Prior validator exists: ${p}`));

const requiredRoutes = [
  'app/index.tsx','app/onboarding.tsx','app/_layout.tsx','app/(child)/today.tsx','app/(child)/worlds.tsx','app/(child)/treasures.tsx',
  'app/(child)/bedtime.tsx','app/(child)/chant.tsx','app/world/[slug].tsx','app/story/[slug].tsx','app/(parent)/dashboard.tsx',
  'app/(parent)/controls.tsx','app/(parent)/journey-settings.tsx','app/(parent)/privacy.tsx','app/(parent)/feedback.tsx',
  'app/(parent)/gate.tsx','app/(parent)/profiles.tsx','app/(parent)/subscription.tsx','app/auth/sign-in.tsx','app/auth/sign-up.tsx'
];
requiredRoutes.forEach((p) => push(exists(p), `Required app route exists: ${p}`));

const appFiles = walk('app');
const srcFiles = walk('src');
const appSrcFiles = [...appFiles, ...srcFiles].filter((p) => /\.(ts|tsx|js|jsx|md|json)$/.test(p));
const codeFiles = appSrcFiles.filter((p) => /\.(ts|tsx|js|jsx)$/.test(p));

push(!appFiles.some((f) => /prototype|screen[-_ ]?(42[4-9]|4[3-8][0-9])/i.test(f)), 'No new prototype-only app routes detected');
push(!appSrcFiles.some((f) => /screen[-_ ]?(42[4-9]|4[3-8][0-9])\b/i.test(f)), 'No runtime files for Screens 424-487 in app/src');
push(!appSrcFiles.some((f) => /\b(screen\s*(424|42[5-9]|4[3-8][0-9]))\b/i.test(read(f))), 'No in-file references to runtime Screens 424-487 in app/src');

const fakeChromePatterns = [/status\s*bar/i,/battery\s*%/i,/\bcarrier\b/i,/\bwifi\b|\b4g\b|\b5g\b/i,/dynamic\s*island/i,/\bnotch\b/i,/signal\s*bars/i];
for (const f of codeFiles) {
  const txt = read(f);
  if (fakeChromePatterns.some((r) => r.test(txt))) fail.push(`Fake phone chrome string found: ${f}`);
}

const networkPatterns = [/fetch\s*\(/,/\baxios\b/,/XMLHttpRequest/,/\bWebSocket\b/];
for (const f of codeFiles) {
  const txt = read(f);
  if (networkPatterns.some((r) => r.test(txt))) fail.push(`Active network call/dependency pattern found: ${f}`);
}

const paymentPattern = /\b(checkout|stripe|revenuecat|purchase\(|subscribe\(|billing\s*portal|payment\s*intent)\b/i;
const micPattern = /\b(microphone|recording|record\s*audio|expo-av|expo-audio|getusermedia|audio\s*input)\b/i;
for (const f of codeFiles) {
  const txt = read(f);
  const lower = txt.toLowerCase();
  if (paymentPattern.test(txt) && !/(placeholder|not active|not enabled|coming soon|no checkout|no payment)/i.test(lower)) fail.push(`Possible active payment/checkout implementation found: ${f}`);
  if (micPattern.test(txt) && !/(placeholder|not active|not enabled|not implemented|no microphone|no recording|no audio)/i.test(lower)) fail.push(`Possible active microphone/recording implementation found: ${f}`);
}

const childFiles = [
  'app/(child)/today.tsx','app/(child)/worlds.tsx','app/(child)/treasures.tsx','app/world/[slug].tsx','app/story/[slug].tsx'
].filter(exists);
push(childFiles.every((f) => !/story\s+library/i.test(read(f))), 'Child-facing active routes avoid "Story Library"');
push(childFiles.some((f) => /story\s+world/i.test(read(f))), 'Child-facing active routes include "Story World" language');

const gamificationPattern = /\b(xp|coins?|leaderboard|ranking|streaks?)\b/i;
for (const f of childFiles) {
  if (gamificationPattern.test(read(f))) fail.push(`Hard gamification term found in active child runtime file: ${f}`);
}

if (exists('app/(parent)/feedback.tsx')) {
  const feedback = read('app/(parent)/feedback.tsx').toLowerCase();
  push(/local/.test(feedback) && /draft/.test(feedback) && /no backend submission/.test(feedback), 'Parent feedback route says local draft / no backend submission');
}
if (exists('app/(parent)/privacy.tsx')) {
  const privacy = read('app/(parent)/privacy.tsx').toLowerCase();
  push(/local/.test(privacy) && /no account/.test(privacy) && /(no cloud sync|no backend cloud sync)/.test(privacy), 'Privacy route says local / no-account / no-cloud-sync');
}
if (exists('app/auth/sign-in.tsx') && exists('app/auth/sign-up.tsx')) {
  const authCopy = `${read('app/auth/sign-in.tsx')}\n${read('app/auth/sign-up.tsx')}`.toLowerCase();
  push(/placeholder|not active|not enabled|no account/.test(authCopy), 'Auth placeholders clearly marked inactive');
}
if (exists('app/(parent)/subscription.tsx')) {
  const sub = read('app/(parent)/subscription.tsx').toLowerCase();
  push(/placeholder|not active|no checkout|paid plans/.test(sub), 'Subscription placeholder/no checkout remains clearly marked');
}
if (exists('app/story/[slug].tsx')) {
  const story = read('app/story/[slug].tsx').toLowerCase();
  push(/return to story world/.test(story) && /(go back to child home|back to child home)/.test(story), 'Story completion includes links to Story World and Child Home');
}

['src/lib/supabase.ts','src/services/subscriptions.ts'].forEach((p) => {
  if (!exists(p)) return;
  const txt = read(p).toLowerCase();
  if (/placeholder|scaffold/.test(txt)) warn.push(`Placeholder/scaffold file documented: ${p}`);
  else warn.push(`Potential scaffold file should remain documented as inactive: ${p}`);
});

console.log('\nRelease Candidate QA Gate Validator v0\n');
pass.forEach((m) => console.log(`PASS: ${m}`));
warn.forEach((m) => console.log(`WARN: ${m}`));
fail.forEach((m) => console.log(`FAIL: ${m}`));

if (fail.length) {
  console.log(`\nResult: FAIL (${fail.length} checks failed)`);
  process.exit(1);
}

console.log(`\nResult: PASS (${pass.length} checks passed, ${warn.length} warnings)`);
