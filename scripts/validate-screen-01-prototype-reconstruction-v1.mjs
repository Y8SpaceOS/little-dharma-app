#!/usr/bin/env node
import fs from 'node:fs';

const files = ['app/index.tsx', 'src/components/prototypePrimitives.tsx', 'docs/LITTLE_DHARMA_PROTOTYPE_VISUAL_PARITY_AUDIT.md'];
for (const file of files) if (!fs.existsSync(file)) throw new Error(`Missing required file: ${file}`);

const index = fs.readFileSync('app/index.tsx', 'utf8');
const primitives = fs.readFileSync('src/components/prototypePrimitives.tsx', 'utf8');
const audit = fs.readFileSync('docs/LITTLE_DHARMA_PROTOTYPE_VISUAL_PARITY_AUDIT.md', 'utf8');
const combined = index + primitives;

for (const component of ['PrototypeLandingScreen', 'PrototypeStatusBar', 'PrototypeSky', 'PrototypeBrandIcon', 'PrototypeLandscape', 'PrototypeBottomCTA']) {
  if (!primitives.includes(`function ${component}`)) throw new Error(`Missing primitive: ${component}`);
  if (!index.includes(component)) throw new Error(`Screen 01 must use primitive: ${component}`);
}

if (/PrototypeHeroCard|PrototypeMotifRow|PrototypeLuvluBubble|styles\.card|heroCard|luvlu|mascot|helper bubble|Continue to Child World|Reset Onboarding|secondary CTA/i.test(index)) throw new Error('Screen 01 contains forbidden previous composition elements');
if (/🪔|🌸|☀️|🦚|✨|✺|✧|◌/.test(combined)) throw new Error('Emoji/symbol motifs detected');
if (!index.includes('Begin the journey')) throw new Error('Missing required CTA text: Begin the journey');
if (!combined.includes('9:41')) throw new Error('Missing status time 9:41');
if (!combined.includes('●●●')) throw new Error('Missing status dots ●●●');
if (!index.includes('Little Dharma')) throw new Error('Missing title Little Dharma');
if (!index.includes('Stories, values and wonder for little hearts.')) throw new Error('Missing exact subtitle sentence');
if (!/sun|cloud|sunBaseOval|leftCloud/i.test(combined)) throw new Error('Sky/sun/cloud markers missing');
if (!/landscape|hill|ground|greenHill|yellowGround/i.test(combined)) throw new Error('Landscape/hill/ground markers missing');
if (!/iconDiyaGlow/.test(primitives) || !/iconLotus/.test(primitives) || !/iconStem/.test(primitives)) {
  throw new Error('Brand icon composition markers missing (diya/lotus/stem)');
}

const forbidden = /\bbackend\b|cloud sync|\bcms\b|voice command|microphone|recording|leaderboard|streak|coins|\bxp\b|ranking/i;
if (forbidden.test(combined)) throw new Error('Forbidden scope keywords detected');

if (!/manual review until screenshot approval/i.test(audit)) throw new Error('Audit must keep App Entry under manual screenshot review');
if (!/do not auto-upgrade App Entry to 4\/5 or 5\/5/i.test(audit)) throw new Error('Audit must block auto-upgrade');
if (!/Screen 01 rebuilt from little_dharma_screen_01_splash_visual_spec.md and little_dharma_screen_01_splash_contract.json. Manual screenshot approval required before score upgrade\./i.test(audit)) throw new Error('Audit missing required screenshot note');

console.log('validate-screen-01-prototype-reconstruction-v1: PASS');
