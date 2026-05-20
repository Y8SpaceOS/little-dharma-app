#!/usr/bin/env node
import fs from 'node:fs';

const requiredFiles = [
  'app/index.tsx',
  'src/components/prototypePrimitives.tsx',
  'docs/LITTLE_DHARMA_PROTOTYPE_VISUAL_PARITY_AUDIT.md'
];
for (const file of requiredFiles) {
  if (!fs.existsSync(file)) throw new Error(`Missing required file: ${file}`);
}

const index = fs.readFileSync('app/index.tsx', 'utf8');
const primitives = fs.readFileSync('src/components/prototypePrimitives.tsx', 'utf8');
const audit = fs.readFileSync('docs/LITTLE_DHARMA_PROTOTYPE_VISUAL_PARITY_AUDIT.md', 'utf8');
const prototypeSource = audit;

if (!index.includes('export default function Home')) throw new Error('Screen 01 route implementation missing in app/index.tsx');

for (const component of [
  'PrototypeScreen',
  'PrototypeHeroCard',
  'PrototypeBrandMark',
  'PrototypeMotifRow',
  'PrototypeButton',
  'PrototypeSecondaryButton',
  'PrototypeLuvluBubble',
  'PrototypeSurfaceCard'
]) {
  if (!primitives.includes(`function ${component}`)) throw new Error(`Missing primitive: ${component}`);
  if (!index.includes(component)) throw new Error(`app/index.tsx not using primitive: ${component}`);
}

if (/🪔|🌸|☀️|🦚/.test(index)) throw new Error('Screen 01 still relies on emoji-heavy motif treatment in app/index.tsx');
if (!/Luvlu guide|calm helper/i.test(index)) throw new Error('Luvlu helper declaration missing in Screen 01');
if (/logo/i.test(index) && /Luvlu/i.test(index)) throw new Error('Luvlu appears conflated with logo in Screen 01 copy');
if (!index.includes('Begin Little Dharma')) throw new Error('Begin Little Dharma CTA must be preserved');
if (!index.includes('Reset Onboarding (Local QA)')) throw new Error('QA reset secondary action must remain present');

const forbidden = /\bbackend\b|cloud sync|\bcms\b|voice command|microphone|recording|leaderboard|streak|coins|\bxp\b|ranking/i;
if (forbidden.test(index) || forbidden.test(primitives)) throw new Error('Forbidden scope keywords detected in Screen 01 implementation');

if (!/manual review until screenshot approval/i.test(audit)) throw new Error('Audit must state App Entry manual screenshot approval requirement');
if (!/manual screenshot confirmation/i.test(audit)) throw new Error('Audit must require manual screenshot confirmation for visual parity closure');
if (!/do not auto-upgrade App Entry to 4\/5 or 5\/5/i.test(audit)) throw new Error('Audit must block automatic 4/5 scoring without screenshot evidence');

if (!prototypeSource.includes('01–08, 146–155, 306–315, 424–443, 487')) {
  throw new Error('Prototype source reference IDs for Screen 01 not found in audit source');
}

console.log('validate-screen-01-prototype-reconstruction-v1: PASS');
