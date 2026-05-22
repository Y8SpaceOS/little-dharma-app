import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
let hasFail = false;
const pass = (m) => console.log(`PASS ${m}`);
const fail = (m) => { hasFail = true; console.error(`FAIL ${m}`); };
const warn = (m) => console.warn(`WARN ${m}`);
const exists = (p) => fs.existsSync(path.join(root, p));
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');

const doc = 'docs/qa/ACCESSIBILITY_TOUCH_TARGET_AUDIT.md';
exists(doc) ? pass(`${doc} exists`) : fail(`${doc} missing`);
const sections = ['PR title and purpose','Screens audited','Child-facing accessibility review','Parent-facing accessibility review','Touch target review','Labels/roles/hints corrections','Disabled state review','Fallback navigation accessibility','Tests added/updated','Scope guardrail confirmation','Known non-blocking issues','Follow-up recommendations for PR #114 and PR #115','Final PR #113 readiness statement'];
if (exists(doc)) {
  const t = read(doc).toLowerCase();
  for (const s of sections) t.includes(s.toLowerCase()) ? pass(`doc section: ${s}`) : fail(`doc section missing: ${s}`);
}

for (const f of ['docs/qa/ROUTE_INTEGRITY_AUDIT.md','docs/qa/LOCAL_FIRST_STATE_AUDIT.md','docs/qa/LOCAL_STATE_RUNTIME_HARDENING.md','docs/qa/PARENT_SURFACE_FUNCTIONAL_READINESS.md','docs/qa/STORY_RUNTIME_HARDENING.md']) exists(f) ? pass(`readiness doc exists: ${f}`) : fail(`missing readiness doc: ${f}`);
for (const f of ['scripts/validate-route-integrity-v1.mjs','scripts/validate-local-first-state-v1.mjs','scripts/validate-local-state-runtime-hardening-v1.mjs','scripts/validate-parent-surface-readiness-v1.mjs','scripts/validate-story-runtime-hardening-v1.mjs']) exists(f) ? pass(`validator exists: ${f}`) : fail(`missing validator: ${f}`);

const requiredScreens = ['app/index.tsx','app/onboarding.tsx','app/(child)/today.tsx','app/(child)/worlds.tsx','app/(child)/treasures.tsx','app/(child)/bedtime.tsx','app/(child)/chant.tsx','app/world/[slug].tsx','app/story/[slug].tsx','app/(parent)/dashboard.tsx','app/(parent)/controls.tsx','app/(parent)/journey-settings.tsx','app/(parent)/privacy.tsx','app/(parent)/feedback.tsx','app/(parent)/profiles.tsx','app/(parent)/gate.tsx','app/(parent)/subscription.tsx','app/auth/sign-in.tsx','app/auth/sign-up.tsx'];
for (const f of requiredScreens) exists(f) ? pass(`runtime screen exists: ${f}`) : fail(`runtime screen missing: ${f}`);

const walk = (d, out=[]) => { for (const e of fs.readdirSync(path.join(root,d),{withFileTypes:true})) { const rel = path.join(d,e.name); if (e.isDirectory()) walk(rel,out); else out.push(rel);} return out; };
const appSrcFiles = [...walk('app'), ...walk('src')].filter((f) => /\.(ts|tsx|js|jsx|mjs|md)$/i.test(f));
const corpus = appSrcFiles.map((f) => read(f).toLowerCase()).join('\n');
corpus.includes('fake phone chrome') ? fail('fake phone chrome string found') : pass('no fake phone chrome string found');
for (const k of ['backend','payment','checkout','microphone','recording']) corpus.includes(k) ? warn(`keyword present (manual review): ${k}`) : pass(`no suspicious keyword: ${k}`);

const hasRange = appSrcFiles.some((f) => (f.match(/\d+/g) || []).some((n) => { const v=Number(n); return v>=424 && v<=487; }));
hasRange ? fail('prototype screen range 424-487 detected in app/src paths') : pass('no prototype screen range 424-487 files detected');

const routeCount = walk('app').filter((f)=>f.endsWith('.tsx')).length;
routeCount > 80 ? warn('manual route growth review recommended') : pass('route count within expected bounds for runtime app');

for (const file of appSrcFiles.filter((f)=>f.endsWith('.tsx'))) {
  const t = read(file);
  const directTappableCount = (t.match(/<Text\s+onPress=/g) || []).length;
  if (!directTappableCount) continue;
  const roleCount = (t.match(/accessibilityRole=['"]button['"]/g) || []).length;
  if (roleCount < directTappableCount) fail(`${file} may have tappable Text without accessibilityRole='button'`);
}

const disabledRegex = /<(Pressable|TouchableOpacity|Text)[^>]*disabled=\{[^}]+\}[^>]*>/g;
for (const file of appSrcFiles.filter((f)=>f.endsWith('.tsx'))) {
  const t = read(file);
  const matches = t.match(disabledRegex) || [];
  matches.forEach((m, idx) => {
    if (!/accessibilityState=\{\{\s*disabled\s*:/.test(m)) fail(`${file} disabled control #${idx+1} missing accessibilityState.disabled`);
  });
}

const feedback = read('app/(parent)/feedback.tsx');
(feedback.match(/<TextInput/g) || []).length > 0 ? pass('parent feedback has TextInput fields') : fail('parent feedback missing TextInput fields');
for (const block of feedback.split('<TextInput').slice(1)) {
  if (!block.includes('accessibilityLabel=')) fail('parent feedback TextInput missing accessibilityLabel');
}

if (hasFail) process.exit(1);
console.log('PASS accessibility touch target validator complete');
