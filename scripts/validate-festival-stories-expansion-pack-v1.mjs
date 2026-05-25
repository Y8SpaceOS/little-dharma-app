import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = process.cwd();
const PACK = path.join(ROOT, 'src/data/festivalStoriesExpansionPackV1.ts');
const REGISTRY = path.join(ROOT, 'src/data/contentRegistry.ts');
const DOC = path.join(ROOT, 'docs/content/FESTIVAL_STORIES_EXPANSION_PACK_V1.md');
const STATUS = path.join(ROOT, 'docs/product/CURRENT_STATUS_AND_COUNTERS.md');

const REQUIRED_FESTIVALS = ['diwali','holi','janmashtami','ganesh chaturthi','navratri','dussehra','raksha bandhan','makar sankranti','ram navami','hanuman jayanti','maha shivratri'];
const BANNED_PHRASES = ['moves the story forward','children can imitate','begins with a clear moment','practical value','specific festival moment','family dialogue','clear event sequencing'];
const HARD_FAIL_PHRASES = ['honoring tradition in scene','opens with festival scene','families gather early and prepare offerings','an elder explains the festival memory','when a disagreement appears','the day ends with prayer, prasad'];

function assert(c,m){ if(!c) throw new Error(m); }
const read=(f)=>fs.readFileSync(f,'utf8');
function extractStories(text){
  const marker='export const festivalStoriesExpansionPackV1Stories: ExtendedStory[] = ';
  const s=text.indexOf(marker); assert(s>=0,'stories export missing');
  const e=text.indexOf(';\n\nexport const festivalStoriesExpansionPackV1StoryPack',s);
  return JSON.parse(text.slice(s+marker.length,e));
}

const stories=extractStories(read(PACK));
assert(stories.length===100,'must have exactly 100 stories');
const ids=stories.map(s=>s.id); assert(new Set(ids).size===100,'IDs must be unique');
const qa=stories.filter(s=>s.status==='qa_ready');
const aud=stories.filter(s=>s.audioScript);
assert(qa.length>=35,'need >=35 qa_ready');
assert(aud.length>=25,'need >=25 audio-script-ready');
assert(stories.every(s=>s.primaryCategoryId==='festival_stories'),'primaryCategoryId must be festival_stories');
assert(stories.every(s=>s.journeyId==='festival-stories-journey-v1'),'journeyId mismatch');
assert(stories.every(s=>s.audioMetadata),'audioMetadata missing');
assert(stories.every(s=>Array.isArray(s.panels)&&s.panels.length>0&&s.panels.every(p=>(p.text||'').trim())),'empty panels found');
assert(qa.every(s=>s.panels.length===4),'qa_ready stories must have 4 panels');
assert(stories.every(s=>!/story of .*\d+$/i.test(s.title) && !/tale\s*\d+$/i.test(s.title) && !/festival story\s*\d+/i.test(s.title)),'numbered placeholder title found');

const blob=JSON.stringify(stories).toLowerCase();
for(const p of BANNED_PHRASES) assert(!blob.includes(p),`banned phrase: ${p}`);
for(const p of HARD_FAIL_PHRASES) assert(!blob.includes(p),`hard-fail phrase: ${p}`);
for(const f of REQUIRED_FESTIVALS) assert(blob.includes(f),`missing festival coverage ${f}`);

// conflict checks for first authored required titles
const mustTitles=['Night Before Diwali in Ayodhya','Lamps Returning to Ayodhya','Radha on Holi Morning','Krishna and Safe Holi Colors'];
for(const t of mustTitles){
  const s=stories.find(x=>x.title===t); assert(!!s,`missing required story ${t}`);
  const z=(JSON.stringify(s)+' '+s.summary+' '+s.sourceTextOrTraditionNote).toLowerCase();
  if(t.includes('Diwali')) assert(z.includes('diwali')&&z.includes('ayodhya'),`${t} mismatch`);
  if(t.includes('Holi')) assert(z.includes('holi')&&z.includes('vrindavan'),`${t} mismatch`);
  if(t.includes('Krishna')) assert(z.includes('krishna')&&z.includes('radha'),`${t} mismatch`);
}

// repetition checks
const p1=qa.map(s=>(s.panels[0]?.text||'').toLowerCase().trim());
const n1=aud.map(s=>(s.audioScript.narrationScript||'').split('.')[0].toLowerCase().trim());
const count=(arr)=>arr.reduce((m,v)=>(m.set(v,(m.get(v)||0)+1),m),new Map());
assert(Math.max(...count(p1).values())<=2,'repeated runtime panel openings detected');
assert(Math.max(...count(n1).values())<=2,'repeated narration openings detected');
const panelTitleSig=qa.map(s=>s.panels.map(p=>p.title.toLowerCase()).join('|'));
assert(Math.max(...count(panelTitleSig).values())<=8,'too many runtime stories use same panel title structure');


// duplicate IDs against existing files
const other=fs.readdirSync(path.join(ROOT,'src/data')).filter(f=>f.endsWith('.ts')&&f!=='festivalStoriesExpansionPackV1.ts');
const txt=other.map(f=>read(path.join(ROOT,'src/data',f))).join('\n');
for(const id of ids) assert(!txt.includes(id),`duplicate ID: ${id}`);

assert(read(REGISTRY).includes('festivalStoriesExpansionPackV1Journey'),'journey not registered');
assert(fs.existsSync(DOC)&&fs.existsSync(STATUS),'docs missing');

execSync('npm run validate:story-experience-index-model-v1',{stdio:'pipe'});

const changed=execSync('git diff --name-only HEAD~1..HEAD',{encoding:'utf8'}).trim().split('\n').filter(Boolean);
const blocked=['app/','src/app/','src/services/runtimeStoryResolver','src/services/storyCompletion','src/services/journeyProgress','src/components/story/','src/screens/story','src/audio/','backend/','api/','analytics','telemetry','notification','sharing','microphone','recording','tts','elevenlabs'];
for(const f of changed){
  assert(!blocked.some(b=>f.includes(b)),`blocked file changed: ${f}`);
  assert(!/\.(mp3|wav|m4a|aac|ogg)$/i.test(f),`audio file changed: ${f}`);
}
console.log('validate-festival-stories-expansion-pack-v1: PASS',{indexed:stories.length,qa_ready:qa.length,audio_script_ready:aud.length});
