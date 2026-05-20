import fs from 'node:fs';

const mustRead = (path) => {
  if (!fs.existsSync(path)) throw new Error(`Missing required file: ${path}`);
  return fs.readFileSync(path, 'utf8');
};

const childHome = mustRead('app/(child)/today.tsx');
const storyWorld = mustRead('app/(child)/worlds.tsx');
const audit = mustRead('docs/LITTLE_DHARMA_IMPLEMENTED_ROUTE_VISUAL_AUDIT.md');
const taskLog = mustRead('docs/TASK_LOG.md');

if (!/Story World/.test(childHome) || !/Story World/.test(storyWorld)) throw new Error('Child-facing language must include “Story World” in child home and browse.');
if (!/(Luvlu|🦚).*(guide|helper)|((guide|helper).*(Luvlu|🦚))/i.test(childHome)) throw new Error('Child home must include Luvlu helper/guide presence.');
if (!/(Luvlu|🦚).*(guide|helper)|((guide|helper).*(Luvlu|🦚))/i.test(storyWorld) && !/Luvlu declaration/i.test(audit)) throw new Error('Story World must include Luvlu helper/guide or documented reason in docs.');

for (const token of ['Krishna', 'Ganesha', 'Ramayana', 'Hanuman', 'Bedtime', 'Values', 'Festival']) {
  if (!storyWorld.includes(token)) throw new Error(`Story World missing category token: ${token}`);
}

const forbiddenHardGame = /\bXP\b|coins?|streaks?|rankings?|leaderboards?|competition/i;
if (forbiddenHardGame.test(`${childHome}\n${storyWorld}`)) throw new Error('Hard gamification tokens found in child surfaces.');

if (/\b\d+\s*(day|week|month)\s*streak\b|\btotal points\b|\bcompletion rate\b|\bdashboard\s*score\b/i.test(`${childHome}\n${storyWorld}`)) {
  throw new Error('Detected fake hard dashboard metrics in child surfaces.');
}

if (/backend|auth|cloud sync|CMS|analytics|telemetry/i.test(`${childHome}\n${storyWorld}`)) {
  throw new Error('Child UI copy must not introduce backend/auth/cloud/CMS/analytics/telemetry scope.');
}

for (const refs of ['09–18', '46–75', '156–175', '316–335', '424–453', '454–461', '462–469', '487']) {
  if (!audit.includes(refs)) throw new Error(`Audit doc missing reference IDs: ${refs}`);
}
if (!/Luvlu declaration/i.test(audit) || !/Luvlu shown:\s*\*\*yes\*\*/i.test(audit)) throw new Error('Audit doc missing Luvlu declaration.');
if (!/Sprint 79 not started/i.test(audit)) throw new Error('Audit doc must confirm Sprint 79 not started.');
if (!/Sprint 78 completed/i.test(taskLog)) throw new Error('TASK_LOG append entry for Sprint 78 missing.');

const pkg = JSON.parse(mustRead('package.json'));
if (Object.keys(pkg.scripts || {}).some((key) => key.includes('validate-child-home-story-world-reconstruction-v1'))) {
  throw new Error('Do not add validator to package.json scripts.');
}

console.log('validate-child-home-story-world-reconstruction-v1: PASS');
