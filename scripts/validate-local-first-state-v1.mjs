import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const auditPath = path.join(root, 'docs/qa/LOCAL_FIRST_STATE_AUDIT.md');

const pass = (m) => console.log(`PASS: ${m}`);
const fail = (m) => { console.error(`FAIL: ${m}`); failures += 1; };
const warn = (m) => console.warn(`WARN: ${m}`);
let failures = 0;

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

if (!fs.existsSync(auditPath)) {
  fail('Missing docs/qa/LOCAL_FIRST_STATE_AUDIT.md');
} else {
  pass('Audit file exists: docs/qa/LOCAL_FIRST_STATE_AUDIT.md');
}

const audit = fs.existsSync(auditPath) ? fs.readFileSync(auditPath, 'utf8') : '';

const requiredSections = [
  'Executive Summary',
  'Local-first State Inventory',
  'Storage Key Inventory',
  'Child Profile / Onboarding State Review',
  'Story Progress / Treasures State Review',
  'Parent Controls / Journey Settings State Review',
  'Auth / Privacy / Subscription Surface Review',
  'Backend / Cloud / Payment / Mic / Audio Scope Review',
  'Legacy Wording Debt',
  'Data Safety Risks Found',
  'Fixes Made',
  'Follow-up Recommendations',
  'Final PR #109 Readiness Statement'
];

for (const section of requiredSections) {
  audit.includes(section) ? pass(`Audit section present: ${section}`) : fail(`Missing audit section: ${section}`);
}

for (const rel of ['app/onboarding.tsx', 'app/(child)/today.tsx', 'app/story/[slug].tsx', 'app/(parent)/privacy.tsx']) {
  const full = path.join(root, rel);
  fs.existsSync(full) ? pass(`Required local-first file exists: ${rel}`) : fail(`Required local-first file missing: ${rel}`);
}

const scanRoots = ['app', 'src'].map((p) => path.join(root, p)).filter(fs.existsSync);
const files = scanRoots.flatMap(walk).filter((f) => /\.(ts|tsx|js|jsx|mjs|cjs)$/.test(f));

const asyncUsageFiles = new Set();
const discoveredKeys = new Set();

const keyRegexes = [
  /const\s+STORAGE_KEY\s*=\s*['"]([^'"]+)['"]/g,
  /AsyncStorage\.(?:getItem|setItem|removeItem)\(\s*['"]([^'"]+)['"]/g
];

for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('AsyncStorage')) asyncUsageFiles.add(path.relative(root, f));
  for (const re of keyRegexes) {
    let m;
    while ((m = re.exec(content)) !== null) discoveredKeys.add(m[1]);
  }
}

for (const file of asyncUsageFiles) {
  audit.includes(file) ? pass(`AsyncStorage file documented in audit: ${file}`) : fail(`AsyncStorage usage not documented in audit: ${file}`);
}

for (const key of discoveredKeys) {
  audit.includes(key) ? pass(`Storage key documented in audit: ${key}`) : fail(`Storage key missing from audit: ${key}`);
}

const forbiddenImplPatterns = ['backend', 'cloud', 'auth', 'payment', 'checkout', 'microphone', 'recording'];
const allowedPlaceholderPaths = new Set([
  'app/auth/sign-in.tsx',
  'app/auth/sign-up.tsx',
  'app/(parent)/subscription.tsx',
  'src/services/subscriptions.ts',
  'src/lib/supabase.ts'
]);
for (const f of files) {
  const rel = path.relative(root, f);
  const low = rel.toLowerCase();
  if (forbiddenImplPatterns.some((p) => low.includes(`/${p}`) || low.includes(`${p}.`))) {
    if (!allowedPlaceholderPaths.has(rel)) {
      fail(`Potential forbidden implementation file path in app/src: ${rel}`);
    }
  }
}
pass('No unexpected forbidden implementation file paths detected in app/src.');

const fakePhonePatterns = [/dynamic\s*island/i, /iphone\s*frame/i, /status\s*bar\s*mock/i, /notch\s*overlay/i, /fake\s*phone/i, /phone\s*chrome/i];
for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  for (const re of fakePhonePatterns) {
    if (re.test(content)) fail(`Fake phone chrome string found in ${path.relative(root, f)} via ${re}`);
  }
}
pass('No fake phone chrome strings detected in app/src.');

const prototypeLeak = files.some((f) => /screens?[-_ ]?(42[4-9]|4[3-8][0-9]|48[0-7])/i.test(path.relative(root, f)));
if (prototypeLeak) fail('Prototype-only runtime filename leakage for Screens 424–487 detected in app/src.');
else pass('No Screens 424–487 runtime files detected in app/src.');

const mustStatePhrases = [
  'placeholder',
  'subscription',
  'audio',
  'microphone',
  'recording',
  'auth routes'
];
for (const phrase of mustStatePhrases) {
  audit.toLowerCase().includes(phrase) ? pass(`Audit explicitly addresses: ${phrase}`) : fail(`Audit missing explicit statement for: ${phrase}`);
}

const legacyTerms = ['cloud sync', 'microphone', 'recording', 'leaderboard', 'score', 'payment', 'subscription', 'auth'];
for (const term of legacyTerms) {
  const existsInCode = files.some((f) => fs.readFileSync(f, 'utf8').toLowerCase().includes(term));
  if (existsInCode) {
    if (audit.toLowerCase().includes(term)) pass(`Legacy term documented in audit: ${term}`);
    else warn(`Legacy term appears in code but not explicitly listed in audit: ${term}`);
  }
}

if (failures > 0) {
  console.error(`\nLocal-first state validator failed with ${failures} issue(s).`);
  process.exit(1);
}

console.log('\nLocal-first state validator passed.');
