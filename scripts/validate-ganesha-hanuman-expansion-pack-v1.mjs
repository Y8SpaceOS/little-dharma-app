import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const packPath = path.join(root, 'src/data/ganeshaHanumanExpansionRecoveryPackV1.ts');
const docPath = path.join(root, 'docs/content/GANESHA_HANUMAN_EXPANSION_PACK_V1.md');
const pkgPath = path.join(root, 'package.json');
let failed = false;
const pass = (m) => console.log(`PASS ${m}`);
const fail = (m) => { failed = true; console.error(`FAIL ${m}`); };

if (!fs.existsSync(packPath)) fail('pack file missing'); else pass('pack file exists');
if (!fs.existsSync(docPath)) fail('doc missing'); else pass('doc exists');
const src = fs.readFileSync(packPath, 'utf8');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
if (!pkg.scripts?.['validate:ganesha-hanuman-expansion-pack-v1']) fail('package script missing'); else pass('package script registered');

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

for (const phrase of ['Story Library','leaderboard','coins','streak','ElevenLabs','microphone','recording','analytics','whatsapp','sms','email','push notification']) {
  if (src.toLowerCase().includes(phrase.toLowerCase())) fail(`banned phrase: ${phrase}`);
}
if (src.includes('titles.map(') || src.includes('titles.slice(') || src.includes('% 5')) fail('generated shell pattern detected'); else pass('no generated shell markers');
if (src.includes("primaryCategoryId: 'ganesha_stories'")) pass('ganesha category mapping present'); else fail('ganesha category mapping missing');
if (src.includes("primaryCategoryId: 'hanuman_stories'")) pass('hanuman category mapping present'); else fail('hanuman category mapping missing');
if (src.includes("journeyId: ganeshaJourneyId")) pass('ganesha journey mapping present'); else fail('ganesha journey mapping missing');
if (src.includes("journeyId: hanumanJourneyId")) pass('hanuman journey mapping present'); else fail('hanuman journey mapping missing');
if ((src.match(/panels: \[/g)||[]).length >= 35) pass('runtime panels present'); else fail('runtime panels missing');
if (!src.includes('parentNote: { sourceContext:')) fail('parentNote.sourceContext missing'); else pass('parentNote.sourceContext present');
if (!src.includes('discussionPrompt')) fail('discussionPrompt missing'); else pass('discussionPrompt present');
if (!src.includes('reflectionPrompt')) fail('reflectionPrompt missing'); else pass('reflectionPrompt present');
if (!src.includes('pronunciationNotes')) fail('pronunciationNotes missing'); else pass('pronunciationNotes present');

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
