#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const root = process.cwd();
const pass = [];
const fail = [];
const warn = [];

const exists = (p) => fs.existsSync(path.join(root, p));
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const has = (text, patterns) => patterns.some((r) => r.test(text));

function check(cond, msg) { (cond ? pass : fail).push(msg); }

const docPath = 'docs/qa/PARENT_SURFACE_FUNCTIONAL_READINESS.md';
check(exists(docPath), 'Parent readiness doc exists');

const requiredRoutes = [
  'app/(parent)/dashboard.tsx','app/(parent)/controls.tsx','app/(parent)/journey-settings.tsx','app/(parent)/privacy.tsx',
  'app/(parent)/feedback.tsx','app/(parent)/profiles.tsx','app/(parent)/gate.tsx','app/(parent)/subscription.tsx'
];
requiredRoutes.forEach((r) => check(exists(r), `Required parent route exists: ${r}`));

['docs/qa/LOCAL_FIRST_STATE_AUDIT.md','docs/qa/LOCAL_STATE_RUNTIME_HARDENING.md','scripts/validate-route-integrity-v1.mjs','scripts/validate-local-first-state-v1.mjs','scripts/validate-local-state-runtime-hardening-v1.mjs'].forEach((p)=>check(exists(p),`Required existing audit/validator exists: ${p}`));

if (exists(docPath)) {
  const doc = read(docPath).toLowerCase();
  [
    'pr title and purpose','parent route inventory','parent cta audit','parent dashboard readiness','parent controls readiness',
    'parent journey settings readiness','parent privacy readiness','parent feedback readiness','parent gate/profile readiness',
    'auth/subscription placeholder review','local-first state usage','copy/trust corrections made','tests added/updated',
    'scope guardrail confirmation','follow-up recommendations for pr #112 and pr #113','final pr #111 readiness statement'
  ].forEach((section) => check(doc.includes(section), `Doc section present: ${section}`));
}

const appFiles = fs.readdirSync(path.join(root, 'app'), { recursive: true }).map(String);
check(!appFiles.some((f)=>/screen[-_ ]?(42[4-9]|4[3-8][0-9])\b/i.test(f)), 'No Screen 424-487 runtime files');

const scanDirs = ['app','src'];
const fakeChromeTerms = [/status bar/i,/battery\s*%/i,/carrier/i,/wifi|4g|5g/i,/notch/i];
for (const d of scanDirs) {
  const files = fs.readdirSync(path.join(root, d), { recursive: true }).map(String).filter((f)=>/\.(ts|tsx|js|jsx)$/.test(f));
  for (const f of files) {
    const txt = read(path.join(d, f));
    if (has(txt, fakeChromeTerms)) fail.push(`Fake phone chrome-like string found: ${path.join(d,f)}`);
  }
}

const privacy = read('app/(parent)/privacy.tsx').toLowerCase();
check(/local/.test(privacy) && /no account|no\s+account/.test(privacy) && /no backend cloud sync|no cloud sync/.test(privacy), 'Privacy copy includes local-first/no-account/no-cloud-sync language');

const feedback = read('app/(parent)/feedback.tsx').toLowerCase();
check(!/submit( feedback)?( to us)?/.test(feedback), 'Parent feedback does not imply active backend submission');

const sub = read('app/(parent)/subscription.tsx').toLowerCase();
check(/placeholder|coming soon|not active|unavailable/.test(sub), 'Subscription is clearly placeholder/unavailable');

const auth = `${read('app/auth/sign-in.tsx')}\n${read('app/auth/sign-up.tsx')}`.toLowerCase();
check(/placeholder|not enabled|not active|coming soon|unavailable/.test(auth), 'Auth routes are clearly placeholders/unavailable');

const implLeakFiles = ['src/services/subscriptions.ts'];
implLeakFiles.forEach((p)=>{ if (exists(p)) warn.push(`Review existing legacy implementation file in repo: ${p}`); });

console.log('\nParent Surface Readiness Validator v1\n');
pass.forEach((m)=>console.log(`PASS: ${m}`));
warn.forEach((m)=>console.log(`WARN: ${m}`));
fail.forEach((m)=>console.log(`FAIL: ${m}`));

if (fail.length) {
  console.log(`\nResult: FAIL (${fail.length} checks failed)`);
  process.exit(1);
}
console.log(`\nResult: PASS (${pass.length} checks passed, ${warn.length} warnings)`);
