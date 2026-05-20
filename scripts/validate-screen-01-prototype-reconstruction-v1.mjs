#!/usr/bin/env node
import fs from 'node:fs';

const files = ['app/index.tsx', 'src/components/prototypePrimitives.tsx', 'docs/LITTLE_DHARMA_PROTOTYPE_VISUAL_PARITY_AUDIT.md'];
for (const file of files) if (!fs.existsSync(file)) throw new Error(`Missing required file: ${file}`);

const index = fs.readFileSync('app/index.tsx', 'utf8');
const primitives = fs.readFileSync('src/components/prototypePrimitives.tsx', 'utf8');
const audit = fs.readFileSync('docs/LITTLE_DHARMA_PROTOTYPE_VISUAL_PARITY_AUDIT.md', 'utf8');

if (!index.includes('export default function Home')) throw new Error('Screen 01 route missing in app/index.tsx');

for (const component of ['PrototypeLandingScreen', 'PrototypeStatusBar', 'PrototypeSky', 'PrototypeBrandIcon', 'PrototypeLandscape', 'PrototypeBottomCTA']) {
  if (!primitives.includes(`function ${component}`)) throw new Error(`Missing primitive: ${component}`);
  if (!index.includes(component)) throw new Error(`Screen 01 must use primitive: ${component}`);
}

if (/PrototypeHeroCard|heroCard|<View style={styles\.card}/.test(index)) throw new Error('Large hero card container should not be used on Screen 01');
if (!/sun|cloud|PrototypeSky/i.test(index + primitives)) throw new Error('Sky/sun/cloud markers missing');
if (!/hill|ground|landscape|PrototypeLandscape/i.test(index + primitives)) throw new Error('Landscape/hill/ground markers missing');
if (!index.includes('Begin the journey')) throw new Error('Missing required CTA copy: Begin the journey');
if (index.includes('Continue to Child World')) throw new Error('Continue to Child World must not be visible in Screen 01 primary composition');
if (/Luvlu|PrototypeLuvluBubble/.test(index)) throw new Error('Luvlu helper bubble must not appear in Screen 01 primary composition');
if (/🪔|🌸|☀️|🦚|✺|✧|◌/.test(index + primitives)) throw new Error('Emoji/symbol motif treatment still present for Screen 01');
if (!/dev reset/.test(index) || !/fontSize:\s*8/.test(index)) throw new Error('QA reset must remain non-dominant/dev-only');

const forbidden = /\bbackend\b|cloud sync|\bcms\b|voice command|microphone|recording|leaderboard|streak|coins|\bxp\b|ranking/i;
if (forbidden.test(index) || forbidden.test(primitives)) throw new Error('Forbidden scope keywords detected');

if (!/manual review until screenshot approval/i.test(audit)) throw new Error('Audit must keep App Entry under manual screenshot review');
if (!/do not auto-upgrade App Entry to 4\/5 or 5\/5/i.test(audit)) throw new Error('Audit must block auto-upgrade');
if (!/Screen 01 rebuilt against supplied screenshot; manual screenshot approval required before score upgrade\./i.test(audit)) {
  throw new Error('Audit missing required screenshot-approval note');
}

console.log('validate-screen-01-prototype-reconstruction-v1: PASS');
