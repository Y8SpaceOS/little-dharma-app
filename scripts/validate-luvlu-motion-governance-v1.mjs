#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const fail = (m) => { console.error(`❌ ${m}`); process.exit(1); };
const ok = (m) => console.log(`✅ ${m}`);

const specPath = path.resolve('docs/design-governance/luvlu-motion-governance-spec.md');
const contractPath = path.resolve('docs/design-governance/luvlu-motion-governance-contract.json');

if (!fs.existsSync(specPath)) fail('Missing docs/design-governance/luvlu-motion-governance-spec.md');
if (!fs.existsSync(contractPath)) fail('Missing docs/design-governance/luvlu-motion-governance-contract.json');
ok('Governance spec and contract exist');

const spec = fs.readFileSync(specPath, 'utf8');
const contract = JSON.parse(fs.readFileSync(contractPath, 'utf8'));

if (!/Screens 424-487 are governance references only/i.test(spec)) fail('Spec must declare screens 424-487 governance references only.');
if (/implement(ed)? as routes|should be implemented as routes|must be implemented as routes/i.test(spec)) {
  fail('Spec must not require screens 424-487 as runtime routes.');
}
ok('Spec enforces governance-only (non-route) treatment');

if (!(contract.governanceOnly === true && contract.runtimeRoutesRequired === false && String(contract.screenRange) === '424-487')) {
  fail('Contract must state screens 424-487 are governance-only and not runtime routes.');
}
ok('Contract governance-only flags are valid');

const corruptedTokens = ['\\1Ook', '\\1Oses', '\\1Motions', '\\1Ules', '\\1Tyles', '\\1Ot', '\\1Se'];
for (const token of corruptedTokens) {
  if (spec.includes(token)) fail(`Corrupted heading token remains: ${token}`);
}
ok('No corrupted heading tokens remain');

const requiredSpecPhrases = [
  'Luvlu is not logo',
  'Luvlu is not deity',
  'no XP/coins/streaks/leaderboards',
  'no microphone/recording',
  'No future companions are allowed without explicit approval',
  'no sacred focal art overlay',
  'Reduced-motion fallback is required',
  'Parent boundary copy guardrails are required'
];
for (const phrase of requiredSpecPhrases) {
  if (!spec.toLowerCase().includes(phrase.toLowerCase())) fail(`Spec missing required governance clause: ${phrase}`);
}
ok('Spec contains required governance clauses');

console.log('🎉 validate-luvlu-motion-governance-v1: PASS');
