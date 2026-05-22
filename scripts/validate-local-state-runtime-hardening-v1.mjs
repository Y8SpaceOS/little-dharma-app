import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const root = process.cwd();
let failures = 0;
const pass = (m) => console.log(`PASS: ${m}`);
const fail = (m) => { console.error(`FAIL: ${m}`); failures += 1; };

const exists = (rel) => fs.existsSync(path.join(root, rel));
const read = (rel) => fs.readFileSync(path.join(root, rel), 'utf8');

const hardeningDoc = 'docs/qa/LOCAL_STATE_RUNTIME_HARDENING.md';
if (exists(hardeningDoc)) pass(`${hardeningDoc} exists`); else fail(`Missing ${hardeningDoc}`);

const doc = exists(hardeningDoc) ? read(hardeningDoc) : '';
for (const section of [
  'Summary of Hardening Changes',
  'State Areas Hardened',
  'Malformed Payload Behavior',
  'Storage Migration / Versioning Note',
  'Tests Added',
  'Scope Guardrail Confirmation',
  'Follow-up Recommendations for PR #111'
]) {
  doc.includes(section) ? pass(`Doc section present: ${section}`) : fail(`Doc section missing: ${section}`);
}

for (const rel of ['docs/qa/LOCAL_FIRST_STATE_AUDIT.md', 'scripts/validate-route-integrity-v1.mjs']) {
  exists(rel) ? pass(`Required existing artifact exists: ${rel}`) : fail(`Missing required artifact: ${rel}`);
}

for (const rel of ['src/lib/onboardingState.ts', 'src/lib/childProfile.ts', 'src/lib/storyProgress.ts', 'src/lib/journeyProgress.ts', 'src/lib/parentFeedback.ts']) {
  exists(rel) ? pass(`State file exists: ${rel}`) : fail(`Missing required state file: ${rel}`);
}

const testFile = 'src/lib/localStateRuntimeHardening.test.ts';
if (exists(testFile)) pass(`Hardening tests exist: ${testFile}`); else fail(`Missing hardening tests: ${testFile}`);

const trackedFiles = fs.existsSync(path.join(root, '.git'))
  ? execSync('git ls-files', { cwd: root, encoding: 'utf8' }).split('\n').filter(Boolean)
  : [];

const runtimePrototypeLeak = trackedFiles.some((f) => /^(app|src)\/.*(?:screen|screens|prototype)?[-_ ]?(42[4-9]|4[3-7][0-9]|48[0-7])(?:\D|$)/i.test(f));
runtimePrototypeLeak ? fail('Screens 424–487 runtime file leakage detected') : pass('No Screens 424–487 runtime files detected');

const appSrcFiles = trackedFiles.filter((f) => /^(app|src)\/.*\.(ts|tsx|js|jsx|mjs|cjs)$/.test(f));
for (const f of appSrcFiles) {
  const content = read(f);
  if (/fake\s*phone|phone\s*chrome|dynamic\s*island|iphone\s*frame|status\s*bar\s*mock|notch\s*overlay/i.test(content)) {
    fail(`Fake phone chrome string found: ${f}`);
  }
}
pass('No fake phone chrome strings detected in app/ or src/.');

const forbiddenAdded = trackedFiles.filter((f) => /backend|payment|checkout|microphone|recording/i.test(f));
for (const f of forbiddenAdded) {
  if (!/docs\//.test(f)) fail(`Potential forbidden implementation file path exists: ${f}`);
}
pass('No forbidden backend/payment/checkout/microphone/recording implementation files added by hardening validator checks.');

if (failures > 0) {
  console.error(`\nLocal state runtime hardening validator failed with ${failures} issue(s).`);
  process.exit(1);
}

console.log('\nLocal state runtime hardening validator passed.');
