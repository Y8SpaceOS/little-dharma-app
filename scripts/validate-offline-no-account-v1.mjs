#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const root = process.cwd();
const pass = [];
const fail = [];
const warn = [];

const exists = (p) => fs.existsSync(path.join(root, p));
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const push = (ok, msg) => (ok ? pass : fail).push(msg);

const docPath = 'docs/qa/OFFLINE_NO_NETWORK_NO_ACCOUNT_QA.md';
push(exists(docPath), 'Offline/no-account QA doc exists');

const requiredSections = [
  'pr title and purpose','core offline/no-account flow audit','child flow no-network readiness',
  'story runtime no-network readiness','parent flow no-network readiness','auth/subscription placeholder review',
  'network/remote dependency scan','local-first state usage','copy/trust corrections made',
  'tests or validators added/updated','scope guardrail confirmation','known non-blocking issues',
  'follow-up recommendations for pr #115 and pr #116','final pr #114 readiness statement'
];

if (exists(docPath)) {
  const doc = read(docPath).toLowerCase();
  requiredSections.forEach((s) => push(doc.includes(s), `Doc section present: ${s}`));
}

[
  'docs/qa/ROUTE_INTEGRITY_AUDIT.md','docs/qa/LOCAL_FIRST_STATE_AUDIT.md','docs/qa/LOCAL_STATE_RUNTIME_HARDENING.md',
  'docs/qa/PARENT_SURFACE_FUNCTIONAL_READINESS.md','docs/qa/STORY_RUNTIME_HARDENING.md','docs/qa/ACCESSIBILITY_TOUCH_TARGET_AUDIT.md'
].forEach((p) => push(exists(p), `Required readiness doc exists: ${p}`));

[
  'scripts/validate-route-integrity-v1.mjs','scripts/validate-local-first-state-v1.mjs','scripts/validate-local-state-runtime-hardening-v1.mjs',
  'scripts/validate-parent-surface-readiness-v1.mjs','scripts/validate-story-runtime-hardening-v1.mjs','scripts/validate-accessibility-touch-target-v1.mjs'
].forEach((p) => push(exists(p), `Required validator exists: ${p}`));

const requiredRuntimeFiles = [
  'app/index.tsx','app/onboarding.tsx','app/(child)/today.tsx','app/(child)/worlds.tsx','app/(child)/treasures.tsx','app/(child)/bedtime.tsx','app/(child)/chant.tsx',
  'app/world/[slug].tsx','app/story/[slug].tsx','app/(parent)/dashboard.tsx','app/(parent)/controls.tsx','app/(parent)/journey-settings.tsx','app/(parent)/privacy.tsx',
  'app/(parent)/feedback.tsx','app/(parent)/profiles.tsx','app/(parent)/gate.tsx','app/(parent)/subscription.tsx','app/auth/sign-in.tsx','app/auth/sign-up.tsx'
];
requiredRuntimeFiles.forEach((p) => push(exists(p), `Required runtime file exists: ${p}`));

const walk = (dir, out = []) => {
  for (const ent of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
    const rel = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(rel, out);
    else out.push(rel);
  }
  return out;
};

const appSrcFiles = [...walk('app'), ...walk('src')];
const codeFiles = appSrcFiles.filter((f) => /\.(ts|tsx|js|jsx|json|md)$/.test(f));

push(!appSrcFiles.some((f) => /screen[-_ ]?(42[4-9]|4[3-8][0-9])\b/i.test(f)), 'No runtime files for prototype Screens 424-487 found');
push(!codeFiles.some((f) => /\b(screen\s*(424|42[5-9]|4[3-8][0-9]))\b/i.test(read(f))), 'No prototype Screen 424-487 references in app/src content');

const fakeChromePatterns = [/status\s*bar/i,/battery\s*%/i,/carrier/i,/\bwifi\b|\b4g\b|\b5g\b/i,/dynamic\s*island/i,/notch/i];
for (const f of codeFiles.filter((p) => /\.(ts|tsx|js|jsx)$/.test(p))) {
  const txt = read(f);
  if (fakeChromePatterns.some((r) => r.test(txt))) fail.push(`Fake phone chrome string found: ${f}`);
}

const networkPatterns = [/fetch\s*\(/,/\baxios\b/,/XMLHttpRequest/,/\bWebSocket\b/];
for (const f of codeFiles.filter((p) => /\.(ts|tsx|js|jsx)$/.test(p))) {
  const txt = read(f);
  if (networkPatterns.some((r) => r.test(txt))) fail.push(`Active network dependency pattern found in app/src: ${f}`);
}

const paymentPattern = /\b(checkout|stripe|revenuecat|purchase\(|subscribe\(|subscription\s*checkout|billing\s*portal)\b/i;
const micPattern = /\b(microphone|audio\s*recording|recording\s*permission|startrecording|expo-av|expo-audio)\b/i;
for (const f of codeFiles.filter((p) => /\.(ts|tsx|js|jsx)$/.test(p))) {
  const txt = read(f);
  const lower = txt.toLowerCase();
  if (paymentPattern.test(txt) && !/(placeholder|not active|not enabled|coming soon|no checkout|no payment)/i.test(lower)) fail.push(`Possible active payment/checkout implementation found: ${f}`);
  if (micPattern.test(txt) && !/\b(no\s+(audio|microphone|recording)|not\s+active|not\s+enabled|placeholder)\b/i.test(lower)) fail.push(`Possible active microphone/recording implementation found: ${f}`);
}

const authText = `${read('app/auth/sign-in.tsx')}\n${read('app/auth/sign-up.tsx')}`.toLowerCase();
push(/placeholder|not enabled|not active|no account|account authentication is not enabled|account creation is not active/.test(authText), 'Auth routes clearly communicate placeholder/no-account status');

const subText = read('app/(parent)/subscription.tsx').toLowerCase();
push(/placeholder|not active|no checkout|no payment|checkout are not active|paid plans/.test(subText), 'Subscription route clearly communicates placeholder/no-checkout status');

const privacyText = read('app/(parent)/privacy.tsx').toLowerCase();
push(/local/.test(privacyText) && /(no account|no account sign-in)/.test(privacyText) && /(no cloud sync|no backend cloud sync)/.test(privacyText), 'Privacy route includes local/no-account/no-cloud-sync language');

const feedbackText = read('app/(parent)/feedback.tsx').toLowerCase();
push(/local draft|kept on this device|saved on this device/.test(feedbackText) && /no backend submission/.test(feedbackText), 'Parent feedback route states local draft and no backend submission');

const scaffolds = ['src/lib/supabase.ts', 'src/services/subscriptions.ts'];
for (const p of scaffolds) {
  if (!exists(p)) continue;
  const txt = read(p).toLowerCase();
  if (/placeholder|scaffold/.test(txt)) warn.push(`Scaffold file present and labeled placeholder/scaffold: ${p}`);
  else warn.push(`Scaffold-like file present; ensure documented as placeholder and not required by core flow: ${p}`);
}

console.log('\nOffline / No Network / No Account Validator v1\n');
pass.forEach((m) => console.log(`PASS: ${m}`));
warn.forEach((m) => console.log(`WARN: ${m}`));
fail.forEach((m) => console.log(`FAIL: ${m}`));

if (fail.length) {
  console.log(`\nResult: FAIL (${fail.length} checks failed)`);
  process.exit(1);
}

console.log(`\nResult: PASS (${pass.length} checks passed, ${warn.length} warnings)`);
