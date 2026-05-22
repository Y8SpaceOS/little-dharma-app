import fs from 'fs';
import path from 'path';

const root = process.cwd();
const ok = [];
const warns = [];
const fails = [];

const mustExist = [
  'src/types/storyWorldBrowse.ts',
  'src/services/storyWorldBrowseService.ts',
  'docs/content/STORY_WORLD_DATA_DRIVEN_BROWSE.md',
  'src/data/contentRegistry.ts',
  'src/services/runtimeStoryResolverV2.ts',
  'app/(child)/worlds.tsx'
];

const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const exists = (p) => fs.existsSync(path.join(root, p));

for (const file of mustExist) (exists(file) ? ok : fails).push(`${exists(file) ? 'PASS' : 'FAIL'} ${file} ${exists(file) ? 'exists' : 'missing'}`);
if (fails.length) finish();

const typeText = read('src/types/storyWorldBrowse.ts');
for (const name of ['StoryWorldBrowseStatus','StoryWorldBrowseCard','StoryWorldBrowseSection','StoryWorldBrowseSummary']) {
  (typeText.includes(name) ? ok : fails).push(`${typeText.includes(name) ? 'PASS' : 'FAIL'} type ${name}`);
}

const svc = read('src/services/storyWorldBrowseService.ts');
for (const exp of ['storyWorldBrowseVersion','getStoryWorldBrowseSections','getStoryWorldBrowseCards','getStoryWorldBrowseCardBySlug','getStoryWorldBrowseSummary','mapRegistryStoryToBrowseCard','mapStoryWorldItemToBrowseCard']) {
  (svc.includes(exp) ? ok : fails).push(`${svc.includes(exp) ? 'PASS' : 'FAIL'} export ${exp}`);
}

const checks = [
  ['content registry usage', /contentRegistryStories|getContentRegistry/],
  ['runtime resolver usage', /getRuntimeStoryEligibility/],
  ['coming soon handling', /coming_soon/],
  ['preview scaffold blocking', /preview|locked_preview/]
];
for (const [label, rgx] of checks) (rgx.test(svc) ? ok : fails).push(`${rgx.test(svc) ? 'PASS' : 'FAIL'} ${label}`);

const worldScreen = read('app/(child)/worlds.tsx');
(ok).push(worldScreen.includes('getStoryWorldBrowseSections') ? 'PASS worlds uses browse service' : (fails.push('FAIL worlds does not use browse service'), ''));
(worldScreen.includes('Story Library') ? fails : ok).push(worldScreen.includes('Story Library') ? 'FAIL Story Library regression' : 'PASS Story World language preserved');
const hardGamificationInWorldCopy = /\b(XP|coins|streaks|leaderboards|rankings)\b/i.test(worldScreen.replace(/hard gamification terms/g, ''));
(hardGamificationInWorldCopy ? fails : ok).push(hardGamificationInWorldCopy ? 'FAIL hard gamification terms present' : 'PASS no hard gamification terms');
(/fake phone chrome/i.test(worldScreen) ? fails : ok).push(/fake phone chrome/i.test(worldScreen) ? 'FAIL fake phone chrome introduced' : 'PASS no fake phone chrome marker');

const docs = read('docs/content/STORY_WORLD_DATA_DRIVEN_BROWSE.md');
for (const section of ['PR title and purpose','Roadmap alignment','Why data-driven browse is needed','Relationship to Content Model v2','Relationship to Content Registry Refactor','Relationship to Runtime Story Resolver v2','Current Story World browse reality','Browse model','Browse service exports','Runtime availability rules','Coming-soon handling','Preview scaffold blocking rules','Navigation safety rules','Accessibility preservation','Child-facing language rules','Luvlu usage boundaries','Local-first/no-backend assumptions','What this PR changes','What this PR does not do','Migration safety rules','Follow-up recommendations for PR #124 and PR #125','Final PR #123 readiness statement']) {
  (docs.includes(section) ? ok : fails).push(`${docs.includes(section) ? 'PASS' : 'FAIL'} docs section: ${section}`);
}

(docs.includes('PR #124: Journey Data Model v1') ? ok : fails).push(docs.includes('PR #124: Journey Data Model v1') ? 'PASS PR124 alignment' : 'FAIL PR124 mismatch');
(docs.includes('PR #125: Ramayana Journey Pack 1') ? ok : fails).push(docs.includes('PR #125: Ramayana Journey Pack 1') ? 'PASS PR125 alignment' : 'FAIL PR125 mismatch');

if (fs.existsSync(path.join(root, 'app', 'screen424.tsx')) || fs.existsSync(path.join(root, 'src', 'screen424.ts'))) fails.push('FAIL prototype leakage detected (screen 424 marker)');
else ok.push('PASS no screen 424 marker files detected');

for (const banned of ['supabase','stripe','microphone','recording','fetch(']) {
  if (svc.includes(banned)) fails.push(`FAIL banned implementation marker in browse service: ${banned}`);
}
ok.push('PASS browse service avoids backend/payment/mic/recording/network implementation markers');

warns.push('WARN world detail pages may remain legacy-backed; full journey-model alignment is planned for PR #124.');

finish();

function finish() {
  for (const m of ok.filter(Boolean)) console.log(m);
  for (const m of warns) console.warn(m);
  for (const m of fails) console.error(m);
  if (fails.length) process.exit(1);
}
