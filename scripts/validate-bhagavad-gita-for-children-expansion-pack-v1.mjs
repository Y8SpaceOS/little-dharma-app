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
  'numbered placeholder event','story shell','template narrative'
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
assert(stories.every(s=>!/(story|lesson|tale)\s*\d+$/i.test(s.title)),'no child-facing numbered titles');

const blob=JSON.stringify(stories).toLowerCase();
for(const p of GENERIC_PHRASES) assert(!blob.includes(p),`generic phrase detected: ${p}`);
for(const p of BANNED_LANGUAGE) assert(!blob.includes(p),`banned language detected: ${p}`);

const p1=qa.map(s=>(s.panels[0]?.text||'').toLowerCase().trim());
const n1=audio.map(s=>(s.audioScript.narrationScript||'').split('.')[0].toLowerCase().trim());
const count=(arr)=>arr.reduce((m,v)=>(m.set(v,(m.get(v)||0)+1),m),new Map());
assert(Math.max(...count(p1).values())<=2,'repeated panel openings detected');
assert(Math.max(...count(n1).values())<=2,'repeated narration openings detected');

const other=fs.readdirSync(path.join(ROOT,'src/data')).filter(f=>f.endsWith('.ts')&&f!=='bhagavadGitaForChildrenExpansionPackV1.ts');
const txt=other.map(f=>read(path.join(ROOT,'src/data',f))).join('\n');
for(const id of ids) assert(!txt.includes(id),`duplicate ID against existing content: ${id}`);

const regText=read(REGISTRY);
assert(regText.includes('bhagavadGitaForChildrenExpansionPackV1Journey'),'journey is not registered');

execSync('npm run validate:story-experience-index-model-v1',{stdio:'pipe'});

const changed=execSync('git diff --name-only',{encoding:'utf8'}).trim().split('\n').filter(Boolean);
assert(changed.length>0,'no changed files detected');
for(const f of changed){
  assert(ALLOWED.has(f),`changed file outside approved scope: ${f}`);
}

console.log('validate-bhagavad-gita-for-children-expansion-pack-v1: PASS', {
  indexed: stories.length,
  qa_ready: qa.length,
  audio_script_ready: audio.length
});
