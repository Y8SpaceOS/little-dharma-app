#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const fail = (message) => {
  console.error(`❌ ${message}`);
  process.exit(1);
};
const pass = (message) => console.log(`✅ ${message}`);

const runtimeRoute = 'app/world/[slug].tsx';
if (!fs.existsSync(runtimeRoute)) fail('Missing required route file: app/world/[slug].tsx');
pass('World detail route file exists: app/world/[slug].tsx');

const expectedRoutes = new Set([
  '/', '/onboarding', '/(child)/today', '/(child)/worlds', '/(child)/chant', '/(child)/bedtime', '/(child)/treasures',
  '/story/[slug]', '/world/[slug]', '/auth/sign-in', '/auth/sign-up', '/(parent)/dashboard', '/(parent)/controls',
  '/(parent)/journey-settings', '/(parent)/feedback', '/(parent)/privacy', '/(parent)/profiles', '/(parent)/subscription', '/(parent)/gate'
]);

const discoveredRoutes = [];
const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.isFile() && entry.name.endsWith('.tsx') && !entry.name.startsWith('_layout')) {
      const route = full.replace(/^app/, '').replace(/\/index\.tsx$/, '').replace(/\.tsx$/, '') || '/';
      discoveredRoutes.push(route);
      if (!expectedRoutes.has(route)) fail(`New route detected outside allowed inventory: ${route}`);
    }
  }
};
walk('app');
pass('No new routes were added');

const changedFiles = String(execSync('git diff --name-only', { encoding: 'utf8' })).trim().split('\n').filter(Boolean);
const allowedChanged = new Set([runtimeRoute, 'scripts/validate-world-detail-visual-transformation-v1.mjs']);
for (const file of changedFiles) {
  if (!allowedChanged.has(file)) fail(`Changed file outside world-detail scope: ${file}`);
}
pass('Only allowed runtime route file changed (plus validator script)');

const code = fs.readFileSync(runtimeRoute, 'utf8');
if (!code.includes('useLocalSearchParams') || !code.includes('worldMap')) fail('Existing /world/[slug] slug-based behavior appears missing');
pass('Existing /world/[slug] route path and slug behavior remains intact');

if (!code.includes('href={`/story/${c.storySlug}` as never}') && !/href=\{['"]\/story\//.test(code)) fail('Existing navigation into stories is not preserved');
pass('Existing story navigation behavior is preserved');

if (/9:41|●●●|notch|battery|signal|wifi|status row|phone chrome|device frame/i.test(code)) fail('Fake phone chrome detected');
pass('No fake phone chrome');

if (/\bcoins?\b|\bxp\b|streaks?|rankings?|leaderboards?/i.test(code)) fail('Hard gamification terms detected');
pass('No hard gamification terms added');

if (/\bbackend\b|\bauth\b|payment|stripe|microphone|recording/i.test(code)) fail('Out-of-scope backend/auth/payment/microphone/recording terms detected');
pass('No backend/auth/payment/microphone/recording scope added');

if (/\/(screen|screens)\/(?:42[4-9]|4[3-7][0-9]|48[0-7])\b/.test(code)) fail('Screens 424–487 route markers detected');
if (/\b(?:Screen|Screens)\s*(?:42[4-9]|4[3-7][0-9]|48[0-7])\b/.test(code)) fail('Screens 424–487 identifiers detected');
pass('No Screens 424–487 routes added');

if (/prototype-only|screen\s*4[2-8][0-9]/i.test(code)) fail('Prototype-only screen references detected in world detail runtime route');
pass('No prototype-only screen IDs added as routes');

if (/\bLuvlu\b/i.test(code)) {
  if (/logo|deity|achievement|reward/i.test(code)) fail('Luvlu governance violation: logo/deity/achievement/reward framing detected');
  pass('Luvlu governance respected in world detail usage');
} else {
  pass('Luvlu not used in this route');
}

console.log(`ℹ️ Checked routes: ${discoveredRoutes.sort().join(', ')}`);
console.log('validate-world-detail-visual-transformation-v1: PASS');
