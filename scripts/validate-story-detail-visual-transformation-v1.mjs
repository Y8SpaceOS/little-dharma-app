#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const fail = (message) => {
  console.error(`❌ ${message}`);
  process.exit(1);
};
const pass = (message) => console.log(`✅ ${message}`);

const runtimeRoute = 'app/story/[slug].tsx';
if (!fs.existsSync(runtimeRoute)) fail('Missing required route file: app/story/[slug].tsx');
pass('Story detail route file exists: app/story/[slug].tsx');

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
const allowedChanged = new Set([runtimeRoute, 'scripts/validate-story-detail-visual-transformation-v1.mjs']);
for (const file of changedFiles) {
  if (!allowedChanged.has(file)) fail(`Changed file outside story-detail scope: ${file}`);
}
pass('Only allowed runtime route file changed (plus validator script)');

const code = fs.readFileSync(runtimeRoute, 'utf8');
if (!code.includes('useLocalSearchParams') || !code.includes('getStoryJourneyBySlug')) fail('Existing /story/[slug] slug-based behavior appears missing');
if (!code.includes("href='/(child)/worlds'") || !code.includes("href='/(child)/today'")) fail('Required return links appear missing');
pass('Existing /story/[slug] route path, slug behavior, and return links remain intact');

const detailMarkers = ['Story doorway', 'Today’s value', 'Parent note', 'Begin Story', 'Listen with Luvlu — Coming soon'];
for (const marker of detailMarkers) {
  if (!code.includes(marker)) fail(`Detail stage marker missing: ${marker}`);
}
pass('Detail stage includes Story Detail structure markers');

const readerMarkers = ['Reading together', 'Section {panelIndex + 1} of {story.panels.length}', 'progressTrack', 'readerCard'];
for (const marker of readerMarkers) {
  if (!code.includes(marker)) fail(`Reader stage marker missing: ${marker}`);
}
pass('Reader stage includes progress/page marker and reader block');

if (/\bScreen\s*\d+/i.test(code) || code.includes('Screen 22') || code.includes('Screen 23') || code.includes('Screen 24') || code.includes('Screen ')) fail('Internal prototype screen labels must not appear in live UI strings');
pass('No internal prototype screen labels appear in live UI strings');

if (!code.includes('Luvlu reflection:')) fail('Luvlu reflection prompt missing from reader experience');
if (/logo|deity|achievement|reward|teddy|tree|plant/i.test(code)) fail('Luvlu governance violation: restricted framing detected');
if (/[🌲🌳🌴🌵🌱🌿☘️🍀🪴🎋🎍🧸]/u.test(code)) fail('Tree/plant/teddy emoji detected');
pass('Luvlu prompt exists and governance markers respected');

const behaviorMarkers = ['setStage(\'reader\')', 'Back', 'Next', 'Complete Story', 'setStage(\'complete\')'];
for (const marker of behaviorMarkers) {
  if (!code.includes(marker)) fail(`Behavior marker missing: ${marker}`);
}
pass('Begin Story / Back / Next / Complete actions exist');

if (!code.includes('Back to Story World') || !code.includes('Back to Child Home')) fail('Completion links missing');
pass('Completion includes Back to Story World and Back to Child Home');

if (!code.includes('disabled accessibilityState={{ disabled: true }}')) fail('Listen with Luvlu control is not explicitly disabled/future');
if (/listen|audio/i.test(code) && /microphone|recording/i.test(code)) fail('Audio control appears to include microphone/recording scope');
pass('Listen with Luvlu remains disabled/future (no active audio/mic scope)');

if (/9:41|●●●|notch|battery|signal|wifi|status row|phone chrome|device frame/i.test(code)) fail('Fake phone chrome detected');
pass('No fake phone chrome');

if (/\bcoins?\b|\bxp\b|streaks?|rankings?|leaderboards?/i.test(code)) fail('Hard gamification terms detected');
pass('No hard gamification terms added');

if (/\bbackend\b|\bauth\b|payment|stripe|microphone|recording/i.test(code)) fail('Out-of-scope backend/auth/payment/microphone/recording terms detected');
pass('No backend/auth/payment/microphone/recording scope added');

console.log(`ℹ️ Checked routes: ${discoveredRoutes.sort().join(', ')}`);
console.log('validate-story-detail-visual-transformation-v1: PASS');
