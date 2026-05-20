#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const onboarding = fs.readFileSync('app/onboarding.tsx', 'utf8');

const requiredScreen02 = [
  'A gentle spiritual world for children',
  'Stories, rituals, shlokas, values and parent-child moments, created with warmth and care.',
  'Warm, not preachy',
  'Private by design',
  'Low-screen friendly'
];
for (const copy of requiredScreen02) if (!onboarding.includes(copy)) throw new Error(`Screen 02 copy missing: ${copy}`);

for (const copy of ['Pick your child’s age band', 'Meet your gentle guide', 'Choose your family rhythm', 'Choose values to begin', 'Parent promise and privacy', 'Your Little Dharma world is ready']) {
  if (!onboarding.includes(copy)) throw new Error(`Screens 03–08 copy missing: ${copy}`);
}

if (!onboarding.includes("const SCREEN_FLOW: ScreenId[] = ['02', '03', '04', '05', '06', '07', '08']")) throw new Error('Screen 02 is not preserved in onboarding flow order');
if (!onboarding.includes('selectedAgeBand') || !onboarding.includes('onSelectAgeBand') || !onboarding.includes('selectedAgeBand === band.key')) throw new Error('Selectable age-band state markers missing');
if (/listItem|bullet|\<ul\>|\<li\>/i.test(onboarding)) throw new Error('Generic bullet/list substitution detected');
if (/9:41|●●●|\.phone|\.notch|\.status|wifi|battery|signal|phone chrome/i.test(onboarding)) throw new Error('Fake phone chrome detected');
if (/Screen 09|Screen 10|screen09|09\+/i.test(onboarding)) throw new Error('Screens 09+ marker detected');
if (/\bxp\b|coin|coins|streak|ranking|rankings|leaderboard|microphone|recording|auth|backend|payment|analytics/i.test(onboarding)) throw new Error('Forbidden scope terms detected');
if (/progressPill|progressBar|progressTrack/i.test(onboarding)) throw new Error('Unexpected progress bar marker detected');

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir)) {
    const next = path.join(dir, entry);
    const stat = fs.statSync(next);
    if (stat.isDirectory()) walk(next, files);
    else files.push(next);
  }
  return files;
}

const routePattern = /(42[4-9]|4[3-7][0-9]|48[0-7])/;
for (const root of ['app', 'src']) {
  if (!fs.existsSync(root)) continue;
  for (const file of walk(root)) {
    if (!/\.(tsx?|jsx?|md|json)$/.test(file)) continue;
    const content = fs.readFileSync(file, 'utf8');
    if (routePattern.test(file) || /(push|replace|href|route).*(42[4-9]|4[3-7][0-9]|48[0-7])/.test(content)) {
      throw new Error(`Governance-only screens 424–487 leaked into app route surface: ${file}`);
    }
  }
}

execSync('node scripts/validate-screen-01-prototype-reconstruction-v1.mjs', { stdio: 'pipe' });
execSync('node scripts/validate-screen-02-prototype-reconstruction-v1.mjs', { stdio: 'pipe' });

console.log('validate-screens-03-08-onboarding-batch-v1: PASS');
