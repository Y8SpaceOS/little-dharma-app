#!/usr/bin/env node
import fs from 'node:fs';

const requiredFiles = ['app/onboarding.tsx', 'app/index.tsx', 'scripts/validate-screen-01-prototype-reconstruction-v1.mjs'];
for (const file of requiredFiles) if (!fs.existsSync(file)) throw new Error(`Missing required file: ${file}`);

const onboarding = fs.readFileSync('app/onboarding.tsx', 'utf8');

const requiredCopy = [
  'A gentle spiritual world for children',
  'Stories, rituals, shlokas, values and parent-child moments, created with warmth and care.',
  'Warm, not preachy',
  'Values through stories.',
  'Private by design',
  'Parent-controlled experience.',
  'Low-screen friendly',
  'Audio for bedtime and car time.',
  'Continue'
];
for (const copy of requiredCopy) if (!onboarding.includes(copy)) throw new Error(`Missing required Screen 02 copy: ${copy}`);

const continueCount = (onboarding.match(/Continue/g) || []).length;
if (continueCount !== 1) throw new Error(`Expected exactly one primary CTA label 'Continue', found ${continueCount}`);
if (!/PrototypeBottomCTA\s+label='Continue'/.test(onboarding)) throw new Error('Primary CTA must use label "Continue"');

if (/9:41|●●●|notch|fake status|status row|wifi|battery|signal|phone chrome|\.phone|\.status/i.test(onboarding)) throw new Error('Fake phone chrome/status detected in Screen 02 live app file');
if (/luvlu/i.test(onboarding)) throw new Error('Luvlu must not be added to Screen 02 unless explicit in source');

const forbiddenTerms = /\bxp\b|coin|coins|streak|leaderboard|ranking|rankings|microphone|recording|auth|backend|payment/i;
if (forbiddenTerms.test(onboarding)) throw new Error('Forbidden scope keywords detected in Screen 02 implementation');

const appFiles = fs.readdirSync('app', { withFileTypes: true });
const routePattern = /(\b|\/)(42[4-9]|4[3-7][0-9]|48[0-7])(\b|\/)/;
const scanPaths = ['app', 'src'];
for (const base of scanPaths) {
  const stack = [base];
  while (stack.length) {
    const dir = stack.pop();
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const next = `${dir}/${entry.name}`;
      if (entry.isDirectory()) stack.push(next);
      else if (/\.(tsx?|jsx?|md|json)$/.test(entry.name)) {
        const content = fs.readFileSync(next, 'utf8');
        if (routePattern.test(content)) throw new Error(`Forbidden Screens 424-487 reference found: ${next}`);
      }
    }
  }
}

console.log('validate-screen-02-prototype-reconstruction-v1: PASS');
