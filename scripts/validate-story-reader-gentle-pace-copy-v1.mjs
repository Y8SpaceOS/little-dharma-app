import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const servicePath = path.join(root, 'src/services/storyReaderGentlePaceCopyService.ts');
const docsPath = path.join(root, 'docs/child/STORY_READER_GENTLE_PACE_COPY_V1.md');
const storyRoutePath = path.join(root, 'app/story/[slug].tsx');
const worldsPath = path.join(root, 'app/(child)/worlds.tsx');
const worldDetailPath = path.join(root, 'app/world/[slug].tsx');
const audioServicePath = path.join(root, 'src/services/storyAudioFoundationService.ts');
const resolverPath = path.join(root, 'src/services/runtimeStoryResolverV2.ts');

let failures = 0;
const pass = (m) => console.log(`PASS ${m}`);
const warn = (m) => console.log(`WARN ${m}`);
const fail = (m) => { console.error(`FAIL ${m}`); failures += 1; };

const read = (p) => (fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : '');
const requireFile = (p, label) => (fs.existsSync(p) ? pass(`${label} exists`) : fail(`${label} missing: ${path.relative(root, p)}`));

requireFile(servicePath, 'Service file');
requireFile(docsPath, 'Docs file');

const service = read(servicePath);
const docs = read(docsPath);
const route = read(storyRoutePath);

const requiredExports = [
  'storyReaderGentlePaceCopyModelVersion','buildStoryReaderGentlePaceCopy','getStoryReaderReadSlowlyCopy','getStoryReaderOneCalmPageCopy','getStoryReaderStoriesCanWaitCopy','getStoryReaderNoRaceCopy','getStoryReaderPauseReturnCopy','getStoryReaderFamilyReadingCopy','getStoryReaderSacredCareCopy','getStoryReaderLuvluGentlePaceCopy','getStoryReaderGentlePaceCopySummary'
];
for (const ex of requiredExports) if (!new RegExp(`export\\s+(const|function)\\s+${ex}\\b`).test(service)) fail(`Missing export ${ex}`);
if (requiredExports.every((ex) => new RegExp(`export\\s+(const|function)\\s+${ex}\\b`).test(service))) pass('Required exports present');

for (const token of ['AsyncStorage','markStoryComplete','markJourneyStoryCompleted','setJourneyProgress','pruneStoryCompletions','getAllStoryCompletions','getAllJourneyProgress']) if (service.includes(token)) fail(`Service contains banned token: ${token}`);

if (/import\s.+from\s+['"](expo-sharing|expo-notifications|expo-mail-composer|expo-sms|expo-linking|expo-file-system|expo-media-library|expo-av|@react-native-firebase\/analytics|axios|node-fetch|openai)['"]/.test(service)) fail('Service imports prohibited native/network/analytics/AI library');

for (const phrase of ['read slowly','one calm page at a time','stories can wait','no race','pause and return later','read with your family','sacred stories are read with care','luvlu can help you keep a gentle pace']) if (!service.toLowerCase().includes(phrase)) fail(`Service missing required phrase: ${phrase}`);

if (!/without prizes or reward tokens|not a reward/i.test(service)) fail('Service missing Luvlu non-reward boundary');

const prohibited = ['locked','premium','upgrade','paywall','unlock','gated','achievement','badge','coins','xp','score','rank','leaderboard','streak','level up','performance','engagement','retention','growth loop','habit loop','viral','referral','share','tracking','analytics','telemetry','push','notification','whatsapp'];
for (const term of prohibited) {
  const r = new RegExp(`\\b${term.replace(/[.*+?^${}()|[\\]\\]/g, '\\\\$&')}\\b`, 'ig');
  const matches = [...service.matchAll(r)];
  for (const m of matches) {
    const start = Math.max(0, m.index - 40);
    const ctx = service.slice(start, m.index + term.length + 40).toLowerCase();
    if (!/(no|not|without)\s.{0,25}$/.test(ctx.slice(0, 40)) && !ctx.includes('without prizes or reward tokens')) fail(`Service includes prohibited term without negative context: ${term}`);
  }
}

const requiredSections = ['PR title and purpose','Roadmap alignment','Why Story Reader Gentle Pace Copy follows Story World Empty/Coming Soon Trust Copy','Story Reader gentle pace copy goal','What this copy is','What this copy is not','Child-facing reader pace principles','Read-slowly copy rules','One-calm-page copy rules','Stories-can-wait copy rules','No-race copy rules','Pause/return-later copy rules','Family reading copy rules','Sacred care copy rules','Luvlu gentle pace boundary copy rules','UI integration status','No backend/no tracking assumptions','No notifications/no sharing assumptions','No AI personalization assumptions','No reward/badge/coin assumptions','No locked/premium/paywall assumptions','No hard gamification rules','Story reader runtime preservation rules','Story panel rendering preservation rules','Story completion behavior preservation rules','Journey progress behavior preservation rules','Runtime availability preservation rules','Audio behavior preservation rules','Relationship to Story Detail Trust Microcopy v1','Relationship to Completion Trust Microcopy v1','Relationship to Story World Empty/Coming Soon Trust Copy v1','What this PR changes','What this PR does not do','Follow-up recommendations for PR #152 and PR #153','Final PR #151 readiness statement'];
for (const section of requiredSections) if (!docs.toLowerCase().includes(section.toLowerCase())) fail(`Docs missing section: ${section}`);
if (!docs.includes('PR #152: Parent Trust Copy Inventory v1') || !docs.includes('PR #153: Parent-Facing Copy Snapshot Validator v1')) fail('Roadmap follow-up names do not match required alignment');

if (!route.includes('buildStoryReaderGentlePaceCopy')) warn('UI binding appears deferred in app/story/[slug].tsx');
else pass('UI binding detected in app/story/[slug].tsx');

if (/Link\s+href=['"]\/\(parent\)|Link\s+href=['"]\/story\//.test(route)) fail('Route includes unexpected navigation additions');
if (read(worldsPath).includes('Story Library') || read(worldDetailPath).includes('Story Library') || service.includes('Story Library')) fail('Story Library regression detected');

for (const p of [audioServicePath, resolverPath]) if (!fs.existsSync(p)) fail(`Reference file missing: ${path.relative(root,p)}`);

if (failures > 0) {
  console.error(`\n${failures} validation failure(s).`);
  process.exit(1);
}
console.log('\nPASS Story Reader Gentle Pace Copy v1 validation passed.');
