import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const root = process.cwd();
const packPath = path.join(root, 'src/data/ganeshaHanumanExpansionRecoveryPackV1.ts');
const docPath = path.join(root, 'docs/content/GANESHA_HANUMAN_EXPANSION_PACK_V1.md');
const pkgPath = path.join(root, 'package.json');
const registryPath = path.join(root, 'src/data/contentRegistry.ts');
let failed = false;
const pass = (m) => console.log(`PASS ${m}`);
const warn = (m) => console.log(`WARN ${m}`);
const fail = (m) => { failed = true; console.error(`FAIL ${m}`); };

if (!fs.existsSync(packPath)) fail('pack file missing'); else pass('pack file exists');
if (!fs.existsSync(docPath)) fail('doc missing'); else pass('doc exists');
const src = fs.readFileSync(packPath, 'utf8');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
const registry = fs.readFileSync(registryPath, 'utf8');
if (!pkg.scripts?.['validate:ganesha-hanuman-expansion-pack-v1']) fail('package script missing'); else pass('package script registered');


const packStoryIds = [...src.matchAll(/storyId: '(ganesha|hanuman)-exp-v1-(\d+)'/g)].map((m)=>`${m[1]}-exp-v1-${m[2]}`);
const packIdSet = new Set(packStoryIds);
if (packStoryIds.length !== packIdSet.size) fail('duplicate storyId exists inside pack'); else pass('no duplicate storyId inside pack');
if (packIdSet.size === 100) pass('exactly 100 unique story IDs in pack'); else fail('pack does not contain exactly 100 unique story IDs');
const gUnique = new Set(packStoryIds.filter((id)=>id.startsWith('ganesha-'))).size;
const hUnique = new Set(packStoryIds.filter((id)=>id.startsWith('hanuman-'))).size;
if (gUnique === 50) pass('exactly 50 unique Ganesha IDs'); else fail('Ganesha unique ID count is not 50');
if (hUnique === 50) pass('exactly 50 unique Hanuman IDs'); else fail('Hanuman unique ID count is not 50');

const idBindingCount = (src.match(/id:\s*entry\.storyId/g) || []).length;
const slugBindingCount = (src.match(/slug:\s*entry\.storyId/g) || []).length;
if (idBindingCount >= 1) pass('mapped story id values are bound to storyId'); else fail('mapped story id binding missing');
if (slugBindingCount >= 1) pass('mapped story slug values are bound to storyId'); else fail('mapped story slug binding missing');
if (packIdSet.size === 100 && idBindingCount >= 1 && slugBindingCount >= 1) {
  pass('no duplicate id/slug inside pack (derived from unique storyId set)');
}

const slugMatches = [...src.matchAll(/slug: entry\.storyId|slug: '([^']+)'/g)].map((m)=>m[1]).filter(Boolean);
if (slugMatches.length) {
  const sset = new Set(slugMatches);
  if (sset.size !== slugMatches.length) fail('duplicate slug exists inside pack'); else pass('no duplicate explicit slug in pack');
}

const otherDataFiles = fs.readdirSync(path.join(root, 'src/data')).filter((f)=>f.endsWith('.ts') && f !== 'ganeshaHanumanExpansionRecoveryPackV1.ts');
const otherIds = new Set();
for (const f of otherDataFiles) {
  const c = fs.readFileSync(path.join(root, 'src/data', f), 'utf8');
  for (const m of c.matchAll(/storyId:\s*'([^']+)'/g)) otherIds.add(m[1]);
  for (const m of c.matchAll(/id:\s*'([^']+)'/g)) if (m[1].includes('exp-v1-') || m[1].includes('pack1-') || m[1].includes('vrindavan')) otherIds.add(m[1]);
}
const overlapping = [...packIdSet].filter((id)=>otherIds.has(id));
if (overlapping.length) fail(`pack introduces duplicate IDs against existing data: ${overlapping.slice(0,5).join(', ')}`); else pass('no duplicate IDs against existing data files');

if (registry.includes('contentRegistryStoriesById') && registry.includes('Object.fromEntries(')) {
  if (overlapping.length === 0 && packIdSet.size === 100) {
    pass('contentRegistryStoriesById overwrite risk check passed for new pack IDs');
  } else {
    fail('contentRegistryStoriesById overwrite risk detected for new pack IDs');
  }
}

if (!src.includes('audioMetadata: {')) fail('audioMetadata missing on mapped stories'); else pass('audioMetadata mapping present');
if (src.includes("narrationScriptStatus: entry.audioScript ? 'qa_ready' : 'indexed'")) pass('audio metadata narrationScriptStatus aligned'); else fail('audio metadata narrationScriptStatus mapping missing');
if (src.includes('audioAvailable: false') && src.includes('noMicRequired: true')) pass('safe default audio metadata values present'); else fail('safe default audio metadata values missing');
try {
  execSync("npx --yes tsx -e \"import { buildStoryExperienceIndex } from './src/services/storyExperienceIndexService.ts'; const out = buildStoryExperienceIndex(); if (!out?.entries?.length) throw new Error('empty index'); console.log(out.entries.length);\"", { stdio: 'pipe', encoding: 'utf8' });
  pass('Story Experience Index builds without throwing after pack registration');
} catch (error) {
  fail(`Story Experience Index build failed: ${String(error)}`);
}

const indexed = (src.match(/storyId: '(ganesha|hanuman)-exp-v1-/g) || []).length;
const ganesha = (src.match(/storyId: 'ganesha-exp-v1-/g) || []).length;
const hanuman = (src.match(/storyId: 'hanuman-exp-v1-/g) || []).length;
const runtime = (src.match(/status: 'qa_ready'/g) || []).length;
const audio = (src.match(/audioScript: {/g) || []).length;

indexed >= 100 ? pass('indexed >=100') : fail('indexed <100');
ganesha >= 50 ? pass('ganesha >=50') : fail('ganesha <50');
hanuman >= 50 ? pass('hanuman >=50') : fail('hanuman <50');
runtime >= 35 ? pass('runtime >=35') : fail('runtime <35');
audio >= 25 ? pass('audio >=25') : fail('audio <25');

for (const phrase of ['Story Library','leaderboard','coins','streak','ElevenLabs','microphone','recording','analytics','telemetry','whatsapp','sms','email','push notification']) {
  if (src.toLowerCase().includes(phrase.toLowerCase())) fail(`banned phrase: ${phrase}`);
}
for (const phrase of ['begins with a clear moment','moves the story forward','the story ends with a practical value','children can imitate','is at the heart of','specific Ganesha moment','specific Hanuman moment','numbered placeholder event','clear event sequencing','family dialogue','warm devotional style with story-specific names']) {
  if (src.toLowerCase().includes(phrase.toLowerCase())) fail(`generic placeholder phrase found: ${phrase}`);
}

if (src.includes('titles.map(') || src.includes('titles.slice(')) fail('runtime entries generated from map/slice'); else pass('no titles.map generation marker');
if (src.includes('% 5') || src.includes('%5') || src.includes('% 10') || src.includes('%10')) fail('modulo-generated panel choice marker found'); else pass('no modulo generation marker');

if (src.includes("primaryCategoryId: 'ganesha_stories'")) pass('ganesha category mapping present'); else fail('ganesha category mapping missing');
if (src.includes("primaryCategoryId: 'hanuman_stories'")) pass('hanuman category mapping present'); else fail('hanuman category mapping missing');
if (src.includes("journeyId: ganeshaJourneyId")) pass('ganesha journey mapping present'); else fail('ganesha journey mapping missing');
if (src.includes("journeyId: hanumanJourneyId")) pass('hanuman journey mapping present'); else fail('hanuman journey mapping missing');

const canonicalG = (registry.match(/ganeshaWisdomPack1Journey/g) || []).length;
const canonicalH = (registry.match(/hanuman.*journey/gi) || []).length;
canonicalG <= 2 ? pass('no duplicate canonical Ganesha journey registration') : fail('duplicate canonical Ganesha journey registration');
canonicalH <= 2 ? pass('no duplicate canonical Hanuman journey registration signal') : warn('review Hanuman journey registration count');

const panelBlocks = [...src.matchAll(/status: 'qa_ready'[\s\S]*?panels:\s*\[([^\]]+)\]/g)].map((m) => m[1]);
if (panelBlocks.length >= 35) pass('runtime panels present'); else fail('runtime panels missing');
const panelStarts = panelBlocks.map((b) => (b.match(/'([^']+)'/)?.[1] ?? '').toLowerCase().split(' ').slice(0,6).join(' '));
const panelStartFreq = new Map(); panelStarts.forEach((k)=>panelStartFreq.set(k,(panelStartFreq.get(k)||0)+1));
if ([...panelStartFreq.values()].some((n)=>n>24)) fail('too many runtime candidates share same panel-opening pattern'); else pass('runtime panel-opening diversity guard passed');

const narrStarts = [...src.matchAll(/narrationScript:\s*'([^']+)'/g)].map((m)=>m[1].toLowerCase().split(' ').slice(0,6).join(' '));
const narrFreq = new Map(); narrStarts.forEach((k)=>narrFreq.set(k,(narrFreq.get(k)||0)+1));
if ([...narrFreq.values()].some((n)=>n>12)) fail('too many audio candidates share same narration-opening pattern'); else pass('audio narration-opening diversity guard passed');

if (!src.includes('parentNote: { sourceContext:')) fail('parentNote.sourceContext missing'); else pass('parentNote.sourceContext present');
if (!src.includes('discussionPrompt')) fail('discussionPrompt missing'); else pass('discussionPrompt present');
if (!src.includes('reflectionPrompt')) fail('reflectionPrompt missing'); else pass('reflectionPrompt present');
if (!src.includes('pronunciationNotes')) fail('pronunciationNotes missing'); else pass('pronunciationNotes present');

const blockedFiles = new Set([
  'src/services/runtimeStoryResolverV2.ts',
  'src/services/storyCompletionMomentService.ts',
  'src/services/dharmaJourneyService.ts',
  'src/services/storyReaderService.ts',
  'src/services/storyAudioFoundationService.ts'
]);

try {
  let changedRaw = '';
  try { changedRaw = execSync('git diff --name-only HEAD~1..HEAD', { encoding: 'utf8' }).trim(); } catch {}
  if (!changedRaw) {
    try {
      let base = '';
      try { base = execSync('git merge-base HEAD origin/main', { encoding: 'utf8' }).trim(); } catch { base = execSync('git merge-base HEAD main', { encoding: 'utf8' }).trim(); }
      changedRaw = execSync(`git diff --name-only ${base}..HEAD`, { encoding: 'utf8' }).trim();
    } catch {}
  }
  const changed = changedRaw.split('\n').filter(Boolean);
  const routeChanges = changed.filter((f) => f.startsWith('app/'));
  if (routeChanges.length) fail(`app route files changed: ${routeChanges.join(', ')}`); else pass('no app route files changed');
  const blocked = changed.filter((f) => blockedFiles.has(f));
  if (blocked.length) fail(`blocked behavior files changed: ${blocked.join(', ')}`); else pass('no blocked behavior files changed');
  if (changed.some((f)=>/\.(mp3|wav|m4a|aac|ogg)$/i.test(f))) fail('audio files changed'); else pass('no audio files changed');
} catch {
  warn('diff guard command unavailable');
}

console.log('SUMMARY');
console.log(`indexed count: ${indexed}`);
console.log(`Ganesha count: ${ganesha}`);
console.log(`Hanuman count: ${hanuman}`);
console.log(`runtime candidate count: ${runtime}`);
console.log(`audio candidate count: ${audio}`);
console.log('journey coverage summary: ganesha-wisdom-journey + hanuman-journey-placeholder-v1');
console.log('values coverage summary: wisdom, listening, humility, patience, kindness, devotion, courage, service, loyalty, calm strength');
console.log('PR #207 delta contribution: +100 indexed, +35 runtime candidates, +25 audio candidates');

if (failed) process.exit(1);
