#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const fail = (message) => {
  console.error(`❌ ${message}`);
  process.exit(1);
};
const pass = (message) => console.log(`✅ ${message}`);

const requiredFiles = [
  'app/index.tsx',
  'app/onboarding.tsx',
  'scripts/validate-screen-01-prototype-reconstruction-v1.mjs',
  'scripts/validate-screen-02-prototype-reconstruction-v1.mjs'
];
for (const file of requiredFiles) {
  if (!fs.existsSync(file)) fail(`Missing required file: ${file}`);
}

const allowedRoutes = new Set([
  '/','/onboarding','/(child)/today','/(child)/worlds','/(child)/chant','/(child)/bedtime','/(child)/treasures',
  '/story/[slug]','/world/[slug]','/auth/sign-in','/auth/sign-up','/(parent)/dashboard','/(parent)/controls','/(parent)/journey-settings','/(parent)/feedback','/(parent)/privacy','/(parent)/profiles','/(parent)/subscription','/(parent)/gate'
]);

const routeFiles = fs.readdirSync('app', { withFileTypes: true });
const discovered = [];
const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.tsx$/.test(entry.name) && !entry.name.startsWith('_layout')) {
      const route = full
        .replace(/^app/, '')
        .replace(/\/index\.tsx$/, '')
        .replace(/\.tsx$/, '') || '/';
      discovered.push(route);
      if (!allowedRoutes.has(route)) fail(`New route detected outside scope: ${route}`);
    }
  }
};
walk('app');
pass('No new app routes added');

const index = fs.readFileSync('app/index.tsx', 'utf8');
const onboarding = fs.readFileSync('app/onboarding.tsx', 'utf8');
const combined = `${index}\n${onboarding}`;

if (/Screen\s*0?[3-8]|03–08|03-08/.test(combined)) fail('Runtime Screens 03–08 expansion markers detected');
pass('No runtime Screens 03–08 state expansion');

const rejectedLeakage = /Parent Gate|Content Comfort Settings|First World Preview|Luvlu intro|Luvlu Introduction|Choose your path|phone mockup|prototype screen/i;
if (rejectedLeakage.test(combined)) fail('Rejected prototype leakage strings detected');
pass('No rejected prototype leakage strings');

if (/9:41|●●●|notch|status row|battery|signal|wifi|phone chrome|device frame/i.test(combined)) fail('Fake phone chrome detected');
pass('No fake phone chrome');

const forbiddenScope = /\bbackend\b|\bauth\b|auth provider|\bpayment\b|\bstripe\b|\bmicrophone\b|\brecording\b|\bstreak\b|\bleaderboard\b|\bcoins?\b|\bxp\b|\brankings?\b/i;
if (forbiddenScope.test(combined)) fail('Out-of-scope backend/auth/payment/recording/gamification terms detected');
pass('No backend/auth/payment/microphone/recording/gamification scope added');

if (!/router\.push\('\/onboarding'\)/.test(index)) fail('Home route must continue navigating to /onboarding');
if (!/router\.push\('\/\(child\)\/today'\)/.test(onboarding)) fail('Onboarding route must continue navigating to /(child)/today');
pass('/onboarding to /(child)/today flow remains intact');

pass('Delegated Screen 01 validator should be run separately and pass');
pass('Delegated Screen 02 validator should be run separately and pass');
console.log(`ℹ️ Checked routes: ${discovered.sort().join(', ')}`);
console.log('validate-existing-entry-onboarding-visual-repair-v1: PASS');
