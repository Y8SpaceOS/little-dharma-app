#!/usr/bin/env node
import fs from 'node:fs';
import { execSync } from 'node:child_process';

const onboarding = fs.readFileSync('app/onboarding.tsx', 'utf8');

const requiredCopy = [
  'Pick your child’s age band',
  'Set your family rhythm',
  'Choose your values focus',
  'Pick your listening style',
  'Parent promise and privacy',
  'Your Little Dharma world is ready',
  'Choose age band',
  'Set rhythm',
  'Choose values',
  'Pick listening style',
  'Review promise',
  'Enter Little Dharma'
];
for (const copy of requiredCopy) if (!onboarding.includes(copy)) throw new Error(`Missing required onboarding batch copy: ${copy}`);

execSync('node scripts/validate-screen-01-prototype-reconstruction-v1.mjs', { stdio: 'pipe' });
execSync('node scripts/validate-screen-02-prototype-reconstruction-v1.mjs', { stdio: 'pipe' });

if (/9:41|●●●|\.phone|\.notch|\.status|fake status|wifi|battery|signal|phone chrome/i.test(onboarding)) throw new Error('Fake phone chrome detected in onboarding app file');

if (/Screen 09|Screen 10|09\+|onboarding batch 09|screen09/i.test(onboarding)) throw new Error('Screens 09+ implementation markers detected');

const forbiddenTerms = /\bxp\b|coin|coins|streak|leaderboard|ranking|rankings|microphone|recording|auth|backend|payment/i;
if (forbiddenTerms.test(onboarding)) throw new Error('Forbidden scope/gamification terms detected in onboarding implementation');

const routePattern = /(app\/.*(42[4-9]|4[3-7][0-9]|48[0-7]).*\.(tsx?|jsx?))/;
const appFiles = execSync('rg --files app src').toString().trim().split('\n');
for (const file of appFiles) {
  if (!file) continue;
  const content = fs.readFileSync(file, 'utf8');
  if (routePattern.test(file) || /(route|href|push|replace).*?(42[4-9]|4[3-7][0-9]|48[0-7])/.test(content)) {
    throw new Error(`Governance-only screens 424-487 leaked into app routes: ${file}`);
  }
}

console.log('validate-screens-03-08-onboarding-batch-v1: PASS');
