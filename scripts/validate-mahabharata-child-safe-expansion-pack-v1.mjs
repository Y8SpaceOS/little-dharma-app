import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = process.cwd();
const PACK = path.join(ROOT, 'src/data/mahabharataChildSafeExpansionPackV1.ts');
const REGISTRY = path.join(ROOT, 'src/data/contentRegistry.ts');
const DOC = path.join(ROOT, 'docs/content/MAHABHARATA_CHILD_SAFE_EXPANSION_PACK_V1.md');
const STATUS = path.join(ROOT, 'docs/product/CURRENT_STATUS_AND_COUNTERS.md');

const ALLOWED = new Set([
  'src/data/mahabharataChildSafeExpansionPackV1.ts',
  'src/data/contentRegistry.ts',
  'scripts/validate-mahabharata-child-safe-expansion-pack-v1.mjs',
  'package.json',
  'docs/content/MAHABHARATA_CHILD_SAFE_EXPANSION_PACK_V1.md',
  'docs/product/CURRENT_STATUS_AND_COUNTERS.md'
]);

const BANNED = ['gore','revenge','humiliation','behead','blood','war strategy','court politics','adult politics','battle intensity'];
const GENERIC = ['begins with a clear moment','moves the story forward','numbered placeholder event','story shell','template narrative'];

function assert(c,m){ if(!c) throw new Error(m); }
function read(f){ return fs.readFileSync(f,'utf8'); }

function extractStories(text){
  const marker='export const mahabharataChildSafeExpansionPackV1Stories: ExtendedStory[] = ';
  const s=text.indexOf(marker); assert(s>=0,'stories export missing');
  const e=text.indexOf(';\n\nexport const mahabharataChildSafeExpansionPackV1StoryPack',s);
  assert(e>s,'story pack marker missing');
  return JSON.parse(text.slice(s+marker.length,e));
}

const stories = extractStories(read(PACK));
assert(stories.length===100,'exactly 100 stories required');
assert(new Set(stories.map(s=>s.id)).size===100,'IDs must be unique');
const qa = stories.filter(s=>s.status==='qa_ready');
const audio = stories.filter(s=>s.audioStatus==='script_ready' && s.audioScript);
assert(qa.length>=35,'at least 35 qa_ready required');
assert(audio.length>=25,'at least 25 audio-script-ready required');
assert(stories.every(s=>s.primaryCategoryId==='mahabharata_child_safe'),'category mismatch');
assert(stories.every(s=>s.journeyId==='mahabharata-child-safe-journey-v1'),'journey mismatch');
assert(stories.every(s=>s.audioMetadata),'all stories must have audioMetadata');
assert(stories.every(s=>Array.isArray(s.panels)&&s.panels.length>=4&&s.panels.every(p=>(p.text||'').trim())), 'no empty panels');

const textBlob = stories.map((s)=>[s.title,s.summary,...s.panels.map((p)=>p.text),s.parentNote?.sourceContext,s.parentNote?.valueExplained,s.parentNote?.discussionPrompt,s.reflectionPrompt,s.audioScript?.narrationScript].filter(Boolean).join(' ')).join('\n').toLowerCase();
for (const t of BANNED) assert(!textBlob.includes(t),`banned framing detected: ${t}`);
const blob=JSON.stringify(stories).toLowerCase();
for (const t of GENERIC) assert(!blob.includes(t),`generic shell phrase detected: ${t}`);
assert(!/"title"\s*:\s*"\d+[).:-]/.test(JSON.stringify(stories)), 'child-facing numbered titles are not allowed');

const panelOpenings = qa.map(s=>s.panels[0].text.toLowerCase().trim());
const narrationOpenings = audio.map(s=>s.audioScript.narrationScript.split('.')[0].toLowerCase().trim());
function maxDup(arr){ const m=new Map(); for(const v of arr){m.set(v,(m.get(v)||0)+1);} return Math.max(...m.values()); }
assert(maxDup(panelOpenings)<=2,'repeated panel openings detected');
assert(maxDup(narrationOpenings)<=2,'repeated narration openings detected');

const otherData = fs.readdirSync(path.join(ROOT,'src/data')).filter(f=>f.endsWith('.ts')&&f!=='mahabharataChildSafeExpansionPackV1.ts').map(f=>read(path.join(ROOT,'src/data',f))).join('\n');
for (const id of stories.map(s=>s.id)) assert(!otherData.includes(id), `duplicate ID against existing content: ${id}`);

const reg = read(REGISTRY);
assert(reg.includes('mahabharataChildSafeExpansionPackV1Journey'),'journey is not registered');

execSync('npm run validate:story-experience-index-model-v1',{stdio:'pipe'});

function changedFiles(){
  try { return execSync('git diff --name-only',{encoding:'utf8'}).trim().split('\n').filter(Boolean); } catch { return []; }
}
for (const f of changedFiles()) assert(ALLOWED.has(f),`changed file outside approved scope: ${f}`);

assert(fs.existsSync(DOC),'doc missing');
assert(fs.existsSync(STATUS),'status doc missing');

console.log('validate:mahabharata-child-safe-expansion-pack-v1 PASS', { indexed: stories.length, qa_ready: qa.length, audio_script_ready: audio.length });
