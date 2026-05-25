import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = process.cwd();
const PACK = path.join(ROOT, 'src/data/bhagavadGitaForChildrenExpansionPackV1.ts');
const REGISTRY = path.join(ROOT, 'src/data/contentRegistry.ts');
const DOC = path.join(ROOT, 'docs/content/BHAGAVAD_GITA_FOR_CHILDREN_EXPANSION_PACK_V1.md');
const STATUS = path.join(ROOT, 'docs/product/CURRENT_STATUS_AND_COUNTERS.md');

const ALLOWED = new Set([
  'src/data/bhagavadGitaForChildrenExpansionPackV1.ts',
  'src/data/contentRegistry.ts',
  'scripts/validate-bhagavad-gita-for-children-expansion-pack-v1.mjs',
  'package.json',
  'docs/content/BHAGAVAD_GITA_FOR_CHILDREN_EXPANSION_PACK_V1.md',
  'docs/product/CURRENT_STATUS_AND_COUNTERS.md'
]);

const GENERIC_PHRASES = [
  'moves the story forward','children can imitate','begins with a clear moment','clear event sequencing','family dialogue',
  'numbered placeholder event','story shell','template narrative',
  'one small right step matters today','arjuna chooses a helpful action','with gratitude and a calmer heart',
  'krishna helps arjuna practice',
  'in the school courtyard, a small task is waiting',
  'arjuna practices this choice with steady care',
  'asks arjuna to breathe slowly', 'picks up the', 'fixes what he can', 'speaks gently to a friend', 'group feels calmer'
];
const BANNED_LANGUAGE = ['battlefield','blood','revenge','destroy enemies','superior religion','doctrine','metaphysics','cosmic ontology'];

function assert(c,m){ if(!c) throw new Error(m); }
function read(file){ return fs.readFileSync(file,'utf8'); }

function extractStories(text){
  const marker='export const bhagavadGitaForChildrenExpansionPackV1Stories: ExtendedStory[] = ';
  const s=text.indexOf(marker); assert(s>=0,'stories export missing');
  const e=text.indexOf(';\n\nexport const bhagavadGitaForChildrenExpansionPackV1StoryPack',s);
  assert(e>s,'storyPack marker missing');
  return JSON.parse(text.slice(s+marker.length,e));
}

assert(fs.existsSync(PACK),'pack file missing');
assert(fs.existsSync(DOC),'doc file missing');
assert(fs.existsSync(STATUS),'status file missing');

const packText=read(PACK);
const stories=extractStories(packText);
assert(stories.length===100,'must have exactly 100 stories');
const ids=stories.map(s=>s.id);
assert(new Set(ids).size===100,'must have exactly 100 unique IDs');

const qa=stories.filter(s=>s.status==='qa_ready');
const audio=stories.filter(s=>s.audioScript && s.audioStatus==='script_ready');
assert(qa.length>=35,'must have at least 35 qa_ready');
assert(audio.length>=30,'must have at least 30 audio-script-ready');
assert(stories.every(s=>s.primaryCategoryId==='bhagavad_gita_for_children'),'category mismatch');
assert(stories.every(s=>s.journeyId==='bhagavad-gita-for-children-journey-v1'),'journey mismatch');
assert(stories.every(s=>s.audioMetadata),'all stories must have audioMetadata');
assert(stories.every(s=>Array.isArray(s.panels)&&s.panels.length>0&&s.panels.every(p=>(p.text||'').trim().length>0)),'no empty panels allowed');
const concreteWords=['chariot','lamp','pot','basket','garland','rope','mat','wheel','well','grain','sandal','cup','bell','pencil','letter','thread','rangoli','shelf','book','broom','swing','timer','shloka','kite','plant','homework','class','chalkboard','tabla','lota','prasad','recitation','school','courtyard','veranda','laundry','ink','seat','assembly','storybook','marigold','diyas','pathway','game','score','lunch','neem','fruit','teacher','classmate','flowers','guests','prayer'];
const actionWords=['help','share','shares','return','finish','finishes','complete','completes','carry','apolog','apologize','apologizes','breathe','listen','practice','clean','offer','invite','invites','wait','fold','write','water','serve','congratulate','congratulates','repair','thank','thanks','encourage','encouraging','teach','teaches','arrange','arranges','place','places','check','checks','model','suggest','suggests','notice'];
for(const st of qa){
  const txt=st.panels.map(p=>p.text.toLowerCase()).join(' ');
  const concreteHits=concreteWords.filter(w=>txt.includes(w)).length;
  const actionHits=actionWords.filter(w=>txt.includes(w)).length;
  const hasSetting=/at\s+|under\s+|before\s+|after\s+|near\s+/.test(txt);
  const hasCoreFraming = txt.includes('krishna') && txt.includes('arjuna');
  assert((concreteHits>=1 && actionHits>=1) || (hasSetting && actionHits>=1) || (hasCoreFraming && actionHits>=1),`qa_ready story lacks concrete detail: ${st.id}`);
}
const blob=JSON.stringify(stories).toLowerCase();
for(const p of GENERIC_PHRASES) assert(!blob.includes(p),`generic phrase detected: ${p}`);
for(const p of BANNED_LANGUAGE) assert(!blob.includes(p),`banned language detected: ${p}`);

for (const st of qa) {
  const text = st.panels.map((p) => p.text.toLowerCase()).join(' ');
  assert(!/notices a [^.!?]{0,60} tipped over/.test(text), `repeated tipped-over scenario detected: ${st.id}`);
}

for (const st of qa) {
  const panelText = st.panels.map((p) => p.text.toLowerCase()).join(' ');
  const scene = (st.illustrationPrompt?.sceneSummary || '').toLowerCase();
  if (!panelText.includes('chariot')) {
    assert(!scene.includes('chariot-side'), `illustration sceneSummary mismatch (chariot-side) for ${st.id}`);
  }
}



const p1=qa.map(s=>(s.panels[0]?.text||'').toLowerCase().trim());
const n1=audio.map(s=>(s.audioScript.narrationScript||'').split('.')[0].toLowerCase().trim());
const count=(arr)=>arr.reduce((m,v)=>(m.set(v,(m.get(v)||0)+1),m),new Map());
assert(Math.max(...count(p1).values())<=2,'repeated panel openings detected');
assert(Math.max(...count(n1).values())<=2,'repeated narration openings detected');
const panelTitleSig=qa.map(s=>s.panels.map(p=>p.title.toLowerCase()).join('|'));
assert(Math.max(...count(panelTitleSig).values())<=6,'repeated panel title structure across too many qa_ready stories');

const verbRoots=['notices','asks','picks','fixes','speaks','feels'];
const qaBlob=qa.map(st=>st.panels.map(p=>p.text.toLowerCase()).join(' '));
for(const v of verbRoots){
  const use=qaBlob.filter(t=>t.includes(v)).length;
  assert(use<=20,`excessive reuse of scenario verb across qa_ready stories: ${v}`);
}


const other=fs.readdirSync(path.join(ROOT,'src/data')).filter(f=>f.endsWith('.ts')&&f!=='bhagavadGitaForChildrenExpansionPackV1.ts');
const txt=other.map(f=>read(path.join(ROOT,'src/data',f))).join('\n');
for(const id of ids) assert(!txt.includes(id),`duplicate ID against existing content: ${id}`);

const regText=read(REGISTRY);
assert(regText.includes('bhagavadGitaForChildrenExpansionPackV1Journey'),'journey is not registered');

execSync('npm run validate:story-experience-index-model-v1',{stdio:'pipe'});

function getChangedFiles(){
  const override = process.env.VALIDATE_CHANGED_FILES;
  if (override && override.trim()) return override.split(',').map((x) => x.trim()).filter(Boolean);

  const candidates = [];
  try { candidates.push(execSync('git diff --name-only HEAD~1..HEAD',{encoding:'utf8'})); } catch {}
  try {
    const mb = execSync('git merge-base HEAD origin/main',{encoding:'utf8'}).trim();
    candidates.push(execSync(`git diff --name-only ${mb}..HEAD`,{encoding:'utf8'}));
  } catch {}
  try { candidates.push(execSync('git diff --name-only',{encoding:'utf8'})); } catch {}

  for (const raw of candidates){
    const files = raw.trim().split('\n').filter(Boolean);
    if (files.length) return files;
  }
  return [];
}

const changed=getChangedFiles();
if (changed.length){
  for(const f of changed){
    assert(ALLOWED.has(f),`changed file outside approved scope: ${f}`);
  }
}

console.log('validate-bhagavad-gita-for-children-expansion-pack-v1: PASS', {
  indexed: stories.length,
  qa_ready: qa.length,
  audio_script_ready: audio.length
});
