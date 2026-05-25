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
const GENERIC = [
  'begins with a clear moment',
  'moves the story forward',
  'numbered placeholder event',
  'story shell',
  'template narrative',
  'krishna guides the children to pause, breathe',
  'small problem during daily activities',
  "listen, speak gently, and understand each person's need",
  'invites others to join with calm and respect',
  'the group feels lighter',
  'grows through everyday choices'
];

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

assert(!stories.some((st)=>/Mahabharata Values Story\s+\d+/i.test(st.title)), 'placeholder child-facing titles are not allowed');
assert(!/Story\s+\d+:/i.test(textBlob), 'Story X: placeholders are not allowed in panels/audio');
assert(!/krishna guides the children to pause, breathe/i.test(textBlob), 'repeated generic Krishna guidance line is not allowed');

const blob=JSON.stringify(stories).toLowerCase();
for (const t of GENERIC) assert(!blob.includes(t),`generic shell phrase detected: ${t}`);
assert(!/"title"\s*:\s*"\d+[).:-]/.test(JSON.stringify(stories)), 'child-facing numbered titles are not allowed');

const panelOpenings = qa.map(s=>s.panels[0].text.toLowerCase().trim());
const narrationOpenings = audio.map(s=>s.audioScript.narrationScript.split('.')[0].toLowerCase().trim());
function maxDup(arr){ const m=new Map(); for(const v of arr){m.set(v,(m.get(v)||0)+1);} return Math.max(...m.values()); }
assert(maxDup(panelOpenings)<=6,'repeated panel openings detected');
assert(maxDup(narrationOpenings)<=6,'repeated narration openings detected');
const panelTitleSignatures = qa.map((s)=>s.panels.map((p)=>p.title.toLowerCase()).join('|'));
assert(maxDup(panelTitleSignatures)<=10,'repeated panel title signatures detected');
const discussion = qa.map((s)=>(s.parentNote?.discussionPrompt||'').toLowerCase().trim()).filter(Boolean);
const reflection = qa.map((s)=>(s.reflectionPrompt||'').toLowerCase().trim()).filter(Boolean);
const sceneSummary = qa.map((s)=>(s.illustrationPrompt?.sceneSummary||'').toLowerCase().trim()).filter(Boolean);
assert(maxDup(discussion)<=4,'repeated parent discussion prompts detected');
assert(maxDup(reflection)<=4,'repeated reflection prompts detected');
assert(maxDup(sceneSummary)<=3,'repeated illustration scene summaries detected');


const panelBodies = qa.map((s)=>s.panels.map((p)=>p.text.toLowerCase().replace(/\s+/g,' ').trim()).join('||'));
assert(maxDup(panelBodies)<=10,'repeated panel body skeletons across qa_ready stories detected');

const knownChars=['arjuna','bhima','yudhishthira','nakula','sahadeva','draupadi','kunti','krishna','vidura'];
for (const st of qa){
  const lowerTitle=(st.title||'').toLowerCase();
  const titleChar=knownChars.find((c)=>lowerTitle.includes(c));
  if(titleChar){
    const actingText=(st.panels?.[2]?.text||'').toLowerCase();
    assert(actingText.includes(titleChar),`title/acting-character mismatch: ${st.id}`);
  }
}

const otherData = fs.readdirSync(path.join(ROOT,'src/data')).filter(f=>f.endsWith('.ts')&&f!=='mahabharataChildSafeExpansionPackV1.ts').map(f=>read(path.join(ROOT,'src/data',f))).join('\n');
for (const id of stories.map(s=>s.id)) assert(!otherData.includes(id), `duplicate ID against existing content: ${id}`);

const reg = read(REGISTRY);
assert(reg.includes('mahabharataChildSafeExpansionPackV1Journey'),'journey is not registered');

execSync('npm run validate:story-experience-index-model-v1',{stdio:'pipe'});

function changedFiles(){
  const override = process.env.VALIDATE_CHANGED_FILES;
  if (override && override.trim()) return override.split(',').map((x)=>x.trim()).filter(Boolean);
  const candidates=[];
  try { candidates.push(execSync('git diff --name-only HEAD~1..HEAD',{encoding:'utf8'})); } catch {}
  try { const mb=execSync('git merge-base HEAD origin/main',{encoding:'utf8'}).trim(); candidates.push(execSync(`git diff --name-only ${mb}..HEAD`,{encoding:'utf8'})); } catch {}
  try { candidates.push(execSync('git diff --name-only',{encoding:'utf8'})); } catch {}
  for (const raw of candidates){ const files=raw.trim().split('\n').filter(Boolean); if(files.length) return files; }
  return [];
}
for (const f of changedFiles()) assert(ALLOWED.has(f),`changed file outside approved scope: ${f}`);

assert(fs.existsSync(DOC),'doc missing');
assert(fs.existsSync(STATUS),'status doc missing');

console.log('validate:mahabharata-child-safe-expansion-pack-v1 PASS', { indexed: stories.length, qa_ready: qa.length, audio_script_ready: audio.length });
