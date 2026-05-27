import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = process.cwd();
const PACK = path.join(ROOT, 'src/data/shlokaMantraMeaningExpansionPackV1.ts');
const REGISTRY = path.join(ROOT, 'src/data/contentRegistry.ts');
const TYPES = path.join(ROOT, 'src/types/storyExperienceIndex.ts');
const DOC = path.join(ROOT, 'docs/content/SHLOKA_MANTRA_MEANING_EXPANSION_PACK_V1.md');
const STATUS = path.join(ROOT, 'docs/product/CURRENT_STATUS_AND_COUNTERS.md');

const ALLOWED = new Set(['src/data/shlokaMantraMeaningExpansionPackV1.ts','src/data/contentRegistry.ts','scripts/validate-shloka-mantra-meaning-expansion-pack-v1.mjs','package.json','docs/content/SHLOKA_MANTRA_MEANING_EXPANSION_PACK_V1.md','docs/product/CURRENT_STATUS_AND_COUNTERS.md','src/types/storyExperienceIndex.ts','scripts/validate-story-experience-index-model-v1.mjs','docs/product/CONTENT_REGISTRY_AUDIT_V1.md','scripts/audit-content-registry-counters-v1.mjs','src/data/ganeshaHanumanExpansionRecoveryPackV1.ts']);
const FORBIDDEN = ['must chant','perfect recitation','guaranteed blessing','magical result','pronunciation score','voice recording'];
const SHELL_PHRASES = ['this shloka/mantra reminds children to practice','with gratitude, calm, and respect in everyday life','such as speaking gently, waiting calmly, or helping at home','together, parent and child reflect on how','it is presented as gentle understanding, not performance'];

const assert=(c,m)=>{if(!c)throw new Error(m);};
const read=(f)=>fs.readFileSync(f,'utf8');
const maxDup=(arr)=>{const m=new Map(); for(const v of arr)m.set(v,(m.get(v)||0)+1); return Math.max(...m.values());};
function extractStories(text){ const marker='export const shlokaMantraMeaningExpansionPackV1Stories: ExtendedStory[] = '; const s=text.indexOf(marker); assert(s>=0,'stories export missing'); const e=text.indexOf(';\n\nexport const shlokaMantraMeaningExpansionPackV1StoryPack',s); assert(e>s,'story pack marker missing'); return JSON.parse(text.slice(s+marker.length,e)); }

const stories=extractStories(read(PACK));
const qa=stories.filter(s=>s.status==='qa_ready');
const audio=stories.filter(s=>s.audioStatus==='script_ready'&&s.audioScript);
assert(stories.length===75,'exactly 75 unique IDs required');
assert(new Set(stories.map(s=>s.id)).size===75,'IDs must be unique');
assert(qa.length>=25,'at least 25 qa_ready required');
assert(audio.length>=25,'at least 25 audio-script-ready required');
assert(stories.every(s=>s.primaryCategoryId==='shloka_mantra_meanings'),'category mismatch');
assert(stories.every(s=>s.journeyId==='shloka-mantra-meaning-journey-v1'),'journey mismatch');
assert(stories.every(s=>s.audioMetadata),'all stories must have audioMetadata');
assert(qa.every(s=>s.parentNote?.sourceContext&&s.parentNote?.discussionPrompt&&s.reflectionPrompt),'qa_ready entries missing required authored fields');
assert(read(TYPES).includes("'shloka_mantra_meanings'"),'canonical StoryExperienceCategoryId missing shloka_mantra_meanings');

const blob=stories.map((s)=>[s.title,s.summary,...s.panels.map(p=>p.text),s.parentNote?.sourceContext,s.parentNote?.discussionPrompt,s.reflectionPrompt,s.audioScript?.narrationScript].filter(Boolean).join(' ')).join('\n').toLowerCase();
for(const t of FORBIDDEN) assert(!blob.includes(t),`forbidden language detected: ${t}`);
for(const t of SHELL_PHRASES) assert(!blob.includes(t),`template shell phrase detected: ${t}`);
assert(!/\b\d+\./.test(stories.map(s=>s.title).join('\n')),'no child-facing numbered titles');

const panelOpen=qa.map(s=>s.panels[0].text.toLowerCase().trim());
const narrOpen=audio.map(s=>s.audioScript.narrationScript.split('.')[0].toLowerCase().trim());
const sigs=qa.map(s=>s.panels.map(p=>p.title.toLowerCase().trim()).join('|'));
const srcCtx=qa.map(s=>s.parentNote.sourceContext.toLowerCase().trim());
const discuss=qa.map(s=>s.parentNote.discussionPrompt.toLowerCase().trim());
const reflect=qa.map(s=>s.reflectionPrompt.toLowerCase().trim());
assert(maxDup(panelOpen)<=3,'repeated panel openings too frequent');
assert(maxDup(narrOpen)<=2,'repeated narration openings too frequent');
assert(maxDup(sigs)<=25,'repeated panel title signatures too frequent');
assert(maxDup(srcCtx)<=5,'repeated parentNote.sourceContext too frequent');
assert(maxDup(discuss)<=3,'repeated discussionPrompt too frequent');
assert(maxDup(reflect)<=3,'repeated reflectionPrompt too frequent');

const dataDir=path.join(ROOT,'src/data');
const otherData=fs.readdirSync(dataDir).filter(f=>f.endsWith('.ts')&&f!=='shlokaMantraMeaningExpansionPackV1.ts').map(f=>read(path.join(dataDir,f))).join('\n');
for(const id of stories.map(s=>s.id)) assert(!otherData.includes(id),`duplicate ID against existing content: ${id}`);
assert(read(REGISTRY).includes('shlokaMantraMeaningExpansionPackV1Journey'),'journey is registered');

const run=(cmd)=>{try{return execSync(cmd,{encoding:'utf8'}).trim();}catch{return '';} };
const hasCommit=(ref)=>run(`git rev-parse --verify ${ref}`) !== '';

function getDiffRange(){
  const mergeBase = run('git merge-base HEAD origin/main 2>/dev/null');
  if (mergeBase) return `${mergeBase}..HEAD`;
  if (hasCommit('HEAD~1')) return 'HEAD~1..HEAD';
  return '';
}

function changedFiles(){
  const env=process.env.VALIDATE_CHANGED_FILES;
  if(env?.trim()) return env.split(',').map((x)=>x.trim()).filter(Boolean);

  const range = getDiffRange();
  if (range) {
    const fromRange = run(`git diff --name-only ${range}`).split('\n').map((x)=>x.trim()).filter(Boolean);
    if (fromRange.length) return fromRange;
  }

  return run('git diff --name-only').split('\n').map((x)=>x.trim()).filter(Boolean);
}

for(const f of changedFiles()) assert(ALLOWED.has(f),`changed file outside approved scope: ${f}`);

const diffRange = getDiffRange();
const added = (diffRange ? run(`git diff --name-status --diff-filter=A ${diffRange}`) : '').split('\n').filter(Boolean).map((l) => l.split(/\s+/).pop());
for(const file of added){ if(/\.(mp3|wav|m4a)$/i.test(file)) throw new Error(`audio files added, not allowed: ${file}`); }

assert(fs.existsSync(DOC),'doc missing');
assert(fs.existsSync(STATUS),'status doc missing');
execSync('npm run validate:story-experience-index-model-v1',{stdio:'pipe'});
console.log('validate:shloka-mantra-meaning-expansion-pack-v1 PASS', { indexed: stories.length, qa_ready: qa.length, audio_script_ready: audio.length });
