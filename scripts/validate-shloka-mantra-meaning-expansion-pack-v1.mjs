import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = process.cwd();
const PACK = path.join(ROOT, 'src/data/shlokaMantraMeaningExpansionPackV1.ts');
const REGISTRY = path.join(ROOT, 'src/data/contentRegistry.ts');
const DOC = path.join(ROOT, 'docs/content/SHLOKA_MANTRA_MEANING_EXPANSION_PACK_V1.md');
const STATUS = path.join(ROOT, 'docs/product/CURRENT_STATUS_AND_COUNTERS.md');

const ALLOWED = new Set([
  'src/data/shlokaMantraMeaningExpansionPackV1.ts','src/data/contentRegistry.ts','scripts/validate-shloka-mantra-meaning-expansion-pack-v1.mjs','package.json','docs/content/SHLOKA_MANTRA_MEANING_EXPANSION_PACK_V1.md','docs/product/CURRENT_STATUS_AND_COUNTERS.md'
]);

const FORBIDDEN = ['must chant','perfect recitation','guaranteed blessing','magical result','pronunciation score','voice recording'];
const GENERIC = ['begins with a clear moment','moves the story forward','numbered placeholder event','template narrative','story shell'];

function assert(c,m){ if(!c) throw new Error(m); }
function read(f){ return fs.readFileSync(f,'utf8'); }
function extractStories(text){
  const marker='export const shlokaMantraMeaningExpansionPackV1Stories: ExtendedStory[] = ';
  const s=text.indexOf(marker); assert(s>=0,'stories export missing');
  const e=text.indexOf(';\n\nexport const shlokaMantraMeaningExpansionPackV1StoryPack',s);
  assert(e>s,'story pack marker missing');
  return JSON.parse(text.slice(s+marker.length,e));
}

const stories=extractStories(read(PACK));
assert(stories.length===75,'exactly 75 unique IDs required');
assert(new Set(stories.map(s=>s.id)).size===75,'IDs must be unique');
const qa=stories.filter(s=>s.status==='qa_ready');
const audio=stories.filter(s=>s.audioStatus==='script_ready' && s.audioScript);
assert(qa.length>=25,'at least 25 qa_ready required');
assert(audio.length>=25,'at least 25 audio-script-ready required');
assert(stories.every(s=>s.primaryCategoryId==='shloka_mantra_meanings'),'category mismatch');
assert(stories.every(s=>s.journeyId==='shloka-mantra-meaning-journey-v1'),'journey mismatch');
assert(stories.every(s=>s.audioMetadata),'all stories must have audioMetadata');
assert(stories.every(s=>Array.isArray(s.panels)&&s.panels.length>=4&&s.panels.every(p=>(p.text||'').trim())),'no empty panels');

const blob=stories.map((s)=>[s.title,s.summary,...s.panels.map(p=>p.text),s.parentNote?.sourceContext,s.parentNote?.discussionPrompt,s.reflectionPrompt,s.audioScript?.narrationScript].filter(Boolean).join(' ')).join('\n').toLowerCase();
for(const t of FORBIDDEN) assert(!blob.includes(t),`forbidden language detected: ${t}`);
for(const t of GENERIC) assert(!blob.includes(t),`generic panel phrase detected: ${t}`);
assert(!/\b\d+\./.test(stories.map(s=>s.title).join('\n')),'no child-facing numbered titles');
assert(!/sanskrit-only/i.test(blob),'no Sanskrit-only placeholders allowed');

const panelOpen=qa.map(s=>s.panels[0].text.toLowerCase().trim());
const narrOpen=audio.map(s=>s.audioScript.narrationScript.split('.')[0].toLowerCase().trim());
const maxDup=(arr)=>{const m=new Map(); arr.forEach(v=>m.set(v,(m.get(v)||0)+1)); return Math.max(...m.values());};
assert(maxDup(panelOpen)<=10,'repeated panel openings detected');
assert(maxDup(narrOpen)<=10,'repeated narration openings detected');

const otherData=fs.readdirSync(path.join(ROOT,'src/data')).filter(f=>f.endsWith('.ts')&&f!=='shlokaMantraMeaningExpansionPackV1.ts').map(f=>read(path.join(ROOT,'src/data',f))).join('\n');
for(const id of stories.map(s=>s.id)) assert(!otherData.includes(id),`duplicate ID against existing content: ${id}`);

const reg=read(REGISTRY);
assert(reg.includes('shlokaMantraMeaningExpansionPackV1Journey'),'journey is registered');
execSync('npm run validate:story-experience-index-model-v1',{stdio:'pipe'});

function changedFiles(){
  const c=[]; try{c.push(execSync('git diff --name-only',{encoding:'utf8'}));}catch{}
  for(const raw of c){const f=raw.trim().split('\n').filter(Boolean); if(f.length) return f;} return [];
}
for(const f of changedFiles()) assert(ALLOWED.has(f),`changed file outside approved scope: ${f}`);

assert(fs.existsSync(DOC),'doc missing');
assert(fs.existsSync(STATUS),'status doc missing');
const addedAudioFiles = execSync("git diff --name-only --diff-filter=A | rg '\\.(mp3|wav|m4a)$' || true",{encoding:'utf8'}).trim();
assert(!addedAudioFiles,'audio files added, not allowed');

console.log('validate:shloka-mantra-meaning-expansion-pack-v1 PASS', { indexed: stories.length, qa_ready: qa.length, audio_script_ready: audio.length });
