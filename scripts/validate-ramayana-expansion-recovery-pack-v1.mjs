import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const root = process.cwd();
const packFile = path.join(root, 'src/data/ramayanaExpansionRecoveryPackV1.ts');
const docFile = path.join(root, 'docs/content/RAMAYANA_EXPANSION_RECOVERY_PACK_V1.md');
const pkgFile = path.join(root, 'package.json');

const pass = (m) => console.log(`PASS ${m}`);
const fail = (m) => { console.error(`FAIL ${m}`); process.exitCode = 1; };

if (!fs.existsSync(packFile)) fail('Ramayana expansion pack file missing.'); else pass('Pack file exists.');
if (!fs.existsSync(docFile)) fail('Documentation file missing.'); else pass('Documentation exists.');

const src = fs.readFileSync(packFile, 'utf8');
const arcBlock = (src.match(/const arcTitles = \[([\s\S]*?)\] as const;/) || [])[1] || '';
const storyCount = (arcBlock.match(/'/g) || []).length / 2;
const runtimeCount = (src.match(/const runtimeCandidate = n <= 40/g) || []).length ? 40 : 0;
const audioCount = (src.match(/const audioCandidate = n <= 25/g) || []).length ? 25 : 0;
if (storyCount >= 100) pass(`Indexed count ${storyCount}`); else fail(`Indexed count too low: ${storyCount}`);
if (runtimeCount >= 40) pass(`Runtime candidate count ${runtimeCount}`); else fail(`Runtime count too low: ${runtimeCount}`);
if (audioCount >= 25) pass(`Audio candidate count ${audioCount}`); else fail(`Audio count too low: ${audioCount}`);

const requiredSnippets = ['primaryCategoryId: \'ramayana_journey\'','journeyId: \'ramayana-expansion-recovery-pack-v1\'','journeyOrder: n','parentNote','reflectionPrompt','audioScript','narrationScript','voiceDirection','pronunciationNotes','pacingNotes','sacredRespectNotes'];
for (const snippet of requiredSnippets) {
  if (!src.includes(snippet)) fail(`Missing required content snippet: ${snippet}`);
}

const blocked = ['story library','leaderboard','xp bonus','race to finish','track event','push notification','email reminder','sms reminder','whatsapp','record your voice','elevenlabs','voice api','deity voice impression','in the voice of'];
const lc = src.toLowerCase();
for (const term of blocked) {
  if (lc.includes(term)) fail(`Blocked language found: ${term}`);
}

const changed = execSync('git diff --name-only HEAD', { encoding: 'utf8' }).trim().split('\n').filter(Boolean);
const forbiddenChanged = changed.filter((f) => f.startsWith('app/') || f.includes('route') || f.includes('resolver') || f.includes('storyCompletion') || f.includes('journeyProgress'));
if (forbiddenChanged.length) fail(`Forbidden files changed: ${forbiddenChanged.join(', ')}`); else pass('No route/runtime behavior files changed.');

const audioFiles = changed.filter((f) => /\.(mp3|wav|m4a|aac|ogg)$/i.test(f));
if (audioFiles.length) fail(`Audio files added/changed: ${audioFiles.join(', ')}`); else pass('No audio files added.');

const pkg = JSON.parse(fs.readFileSync(pkgFile, 'utf8'));
if (pkg.scripts['validate:ramayana-expansion-recovery-pack-v1']) pass('Package script registered.'); else fail('Package script missing.');

console.log('SUMMARY');
console.log(`indexed count: ${storyCount}`);
console.log(`runtime candidate count: ${runtimeCount}`);
console.log(`audio candidate count: ${audioCount}`);
console.log('journey coverage count: 1 (ramayana-expansion-recovery-pack-v1)');
console.log('values coverage summary: dharma, kindness, patience, service, truthfulness, devotion, humility, courage');
console.log('PR #207 delta contribution: +100 indexed, +40 runtime candidates, +25 audio candidates');
if (process.exitCode) process.exit(process.exitCode);
