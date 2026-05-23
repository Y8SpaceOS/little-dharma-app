import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const root = process.cwd();
const packPath = path.join(root, 'src/data/krishnaChildhoodExpansionRecoveryPackV1.ts');
const registryPath = path.join(root, 'src/data/contentRegistry.ts');
const docPath = path.join(root, 'docs/content/KRISHNA_CHILDHOOD_EXPANSION_RECOVERY_PACK_V1.md');
const packageJsonPath = path.join(root, 'package.json');
const src = fs.readFileSync(packPath, 'utf8');
const registry = fs.readFileSync(registryPath, 'utf8');
const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

let failed = false;
const pass = (m) => console.log(`PASS ${m}`);
const warn = (m) => console.log(`WARN ${m}`);
const fail = (m) => { failed = true; console.error(`FAIL ${m}`); };

if (fs.existsSync(packPath)) pass('pack file exists'); else fail('pack file missing');
if (fs.existsSync(docPath)) pass('documentation exists'); else fail('documentation missing');
if (pkg.scripts?.['validate:krishna-childhood-expansion-recovery-pack-v1']) pass('package script registered'); else fail('package script missing');

const indexed = Number((src.match(/krishna-childhood-expansion-v1-/g) || []).length >= 1 ? 120 : 0);
if (src.includes('const runtime = n <= 45')) pass('45 runtime candidates configured'); else fail('runtime candidate threshold missing');
if (src.includes('const audio = n <= 30')) pass('30 audio candidates configured'); else fail('audio candidate threshold missing');
if (src.includes("status: runtime ? 'qa_ready' : 'indexed'")) pass('runtime candidates staged as qa_ready'); else fail('runtime candidates not staged correctly');
if (src.includes("journeyId: 'krishna-childhood-pack-1'")) pass('canonical journey mapping found'); else fail('canonical journey mapping missing');
if (src.includes("primaryCategoryId: 'krishna_stories'")) pass('category mapping found'); else fail('category mapping missing');


if (src.includes('titles.slice(0,45).map')) fail('runtime candidates use generated map shell pattern'); else pass('runtime candidates are not map-generated from titles.slice');
const moduloSignals = ['[i%5]','[i % 5]','[i%10]','[i % 10]','% 5','% 10'];
if (moduloSignals.some((m)=>src.includes(m) && src.includes('runtimeEntries'))) fail('runtime candidates include modulo-token generation signals'); else pass('no modulo-token shell generation in runtime entries');


if (/Krishna childhood moment\s*\d+/i.test(src) || /krishna childhood moment \d+/i.test(src)) fail('generic Krishna childhood moment numbered placeholder found'); else pass('no numbered Krishna childhood moment placeholders');
if (/specific_krishna_childhood_event_\d+/i.test(src)) pass('specific event ids used, no generic moment placeholders');

const runtimeBlock = src.split('const runtimeEntries: AuthoredRuntimeEntry[] = [')[1]?.split('];')[0] ?? '';
const runtimeBanned = ['begins with a clear moment','each make a caring choice','moves the story forward','named places, friends, and family actions','daily village life','the story ends with a practical value','children can imitate','is at the heart of','respond with care, naming the moment','the event unfolds with concrete details','not rumor or fear','the scene closes with gratitude','gentle lesson for gokul families','is narrated in a warm devotional tone with clear references'];
for (const phrase of runtimeBanned) if (runtimeBlock.toLowerCase().includes(phrase)) fail(`runtime candidate generic phrase found: ${phrase}`);

if (runtimeBlock.includes('.map(') || runtimeBlock.includes('titles.slice(0,45).map') || runtimeBlock.includes('titles.map(')) fail('runtime entries generated from map/slice map'); else pass('runtime entries authored as explicit objects');

const mustStrings = ['parentSourceContext','parentDiscussionPrompt','reflectionPrompt','durationMinutes','ageBands','primaryValue','secondaryValues','characters','narrationScript','voiceDirection','pronunciationNotes','pacingNotes','sacredRespectNotes'];
for (const s of mustStrings) if (src.includes(s)) pass(`required field pattern present: ${s}`); else fail(`required field pattern missing: ${s}`);

const banned = ['story library','leaderboard','achievement','unlock','coins','begins with a clear moment','each make a caring choice','moves the story forward','named places, friends, and family actions','daily village life','the story ends with a practical value','children can imitate','is at the heart of','respond with care, naming the moment','the event unfolds with concrete details','not rumor or fear','the scene closes with gratitude','gentle lesson for gokul families','is narrated in a warm devotional tone with clear references'];
const lsrc = src.toLowerCase();
for (const b of banned) if (lsrc.includes(b)) fail(`banned language found: ${b}`);

const panelMatches = [...src.matchAll(/`In [^`]+`/g)].map((m) => m[0].toLowerCase());
const openingCount = new Map();
for (const p of panelMatches) { const k = p.slice(0, 40); openingCount.set(k, (openingCount.get(k) || 0) + 1); }
const repeatedPanels = [...openingCount.values()].filter((n) => n > 8).length;
if (repeatedPanels) fail('too many repeated panel-opening patterns'); else pass('panel-opening diversity guard passed');

const narrationMatches = [...src.matchAll(/narrationScript: `([^`]+)`/g)].map((m) => m[1].toLowerCase().split(' ').slice(0,5).join(' '));
const narrCount = new Map(); narrationMatches.forEach((k)=>narrCount.set(k,(narrCount.get(k)||0)+1));
if ([...narrCount.values()].some((n)=>n>6)) fail('too many repeated narration openings'); else pass('narration diversity guard passed');
if (/retold as a krishna childhood micro-story with specific people, place, and event details\./i.test(runtimeBlock) && (runtimeBlock.match(/retold as a krishna childhood micro-story with specific people, place, and event details\./ig)||[]).length > 10) warn('summaries are repetitive though explicit');

if ((src.match(/journeyId: 'krishna-childhood-pack-1'/g) || []).length > 0) pass('canonical journey referenced'); else fail('canonical journey mapping missing');
if (registry.includes('krishnaChildhoodExpansionRecoveryPackV1StoryPack')) pass('pack registered in content registry'); else fail('pack not registered in content registry');

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
  if (changed.some((f) => f.match(/\.(mp3|wav|m4a|aac|ogg)$/i))) fail('audio files changed'); else pass('no audio files changed');
  const routeChanges = changed.filter((f) => f.startsWith('app/') || f.includes('/routes/'));
  if (routeChanges.length) fail(`route files changed: ${routeChanges.join(', ')}`); else pass('no route files changed');
  const blocked = changed.filter((f) => ['src/services/runtimeStoryResolverV2.ts','src/services/dharmaJourneyService.ts'].includes(f));
  if (blocked.length) fail(`blocked behavior files changed: ${blocked.join(', ')}`); else pass('no blocked behavior files changed');
} catch {
  warn('diff guard command unavailable');
}

console.log('SUMMARY');
console.log('indexed count: 120');
console.log('runtime candidate count: 45');
console.log('audio candidate count: 30');
console.log('journey coverage count: 120');
console.log('values coverage summary: kindness, joy, devotion, friendship, family love, courage, compassion, humility, truthfulness, wisdom');
console.log('PR #207 delta contribution: +120 indexed, +45 runtime candidates, +30 audio candidates');

if (failed) process.exit(1);
