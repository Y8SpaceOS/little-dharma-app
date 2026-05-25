import fs from 'node:fs';
import { execSync } from 'node:child_process';

const PACK='src/data/bedtimeValuesExpansionPackV1.ts';
const DOC='docs/content/BEDTIME_VALUES_EXPANSION_PACK_V1.md';
const BLOCKED=[
  'app/','src/app/','src/services/runtimeStoryResolver','src/services/storyCompletion','src/services/journeyProgress','src/components/story/','src/screens/story','src/audio/','backend/','api/','analytics','telemetry','notification','sharing','microphone','recording','tts','elevenlabs'
];

function extractStories(ts){
  const s=ts.indexOf('= ['); const e=ts.lastIndexOf('] as ExtendedStory[]');
  const json=ts.slice(s+2,e+1).trim();
  return JSON.parse(json);
}

if(!fs.existsSync(PACK)) throw new Error('pack file missing');
if(!fs.existsSync(DOC)) throw new Error('docs missing');
const pkg=JSON.parse(fs.readFileSync('package.json','utf8'));
if(!pkg.scripts['validate:bedtime-values-expansion-pack-v1']) throw new Error('package script missing');
const text=fs.readFileSync(PACK,'utf8');
const stories=extractStories(text);

if(stories.length!==100) throw new Error('must have exactly 100 stories');
const ids=stories.map(s=>s.id);
if(new Set(ids).size!==ids.length) throw new Error('duplicate IDs inside pack');
if(stories.filter(s=>s.status==='qa_ready').length<35) throw new Error('need >=35 qa_ready');
if(stories.filter(s=>s.audioScript).length<25) throw new Error('need >=25 audio scripts');
if(!stories.some(s=>s.primaryCategoryId==='bedtime_stories')||!stories.some(s=>s.primaryCategoryId==='values_stories')) throw new Error('missing category coverage');
if(!stories.every(s=>s.journeyId==='bedtime-values-journey-v1')) throw new Error('journey mapping missing');
if(!stories.every(s=>s.audioMetadata)) throw new Error('audioMetadata missing');

// numbered generated titles forbidden
if(stories.some(s=>/bedtime values story\s*\d+/i.test(s.title))) throw new Error('numbered generated titles detected');

// duplicates against existing content files (excluding pack)
const otherFiles=execSync("rg --files src/data | rg -v 'bedtimeValuesExpansionPackV1.ts'",{encoding:'utf8'}).trim().split('\n').filter(Boolean);
const otherText=otherFiles.map(f=>fs.readFileSync(f,'utf8')).join('\n');
for(const id of ids){ if(otherText.includes(id)) throw new Error(`duplicate ID against existing content: ${id}`); }

// quality checks runtime candidates
const runtime=stories.filter(s=>s.status==='qa_ready');
const banned=['moves the story forward','children can imitate','is at the heart of','begins with a clear moment','numbered placeholder event','clear event sequencing','family dialogue','practical value','specific bedtime moment','specific values moment','titles.map','titles.slice'];
const all=JSON.stringify(runtime).toLowerCase();
for(const b of banned){ if(all.includes(b)) throw new Error('banned phrase '+b); }
if(text.includes('%')) throw new Error('modulo-style generation token detected');

const panelOpenings=runtime.map(s=>s.panels?.[0]?.text?.split(',')[0]?.toLowerCase().trim()||'');
const repeated=new Map(); panelOpenings.forEach(o=>repeated.set(o,(repeated.get(o)||0)+1));
if([...repeated.values()].some(v=>v>3)) throw new Error('repeated panel-opening skeletons detected');

const narrationOpenings=runtime.filter(s=>s.audioScript).map(s=>s.audioScript.narrationScript.split('. ')[0].toLowerCase());
const nrep=new Map(); narrationOpenings.forEach(o=>nrep.set(o,(nrep.get(o)||0)+1));
if([...nrep.values()].some(v=>v>2)) throw new Error('repeated narration-opening skeletons detected');

for(const s of runtime){
  if(!s.panels || s.panels.length!==4) throw new Error(`runtime story missing 4 panels: ${s.id}`);
  const panelText=s.panels.map(p=>p.text.toLowerCase()).join(' ');
  const titleTokens=(s.title.toLowerCase().match(/[a-z]+/g)||[]).filter(t=>t.length>=4 && !['story','before','sleep','quiet','soft','lamp'].includes(t));
  const charTokens=(s.characters||[]).map(c=>c.toLowerCase());
  const tokens=[...new Set([...titleTokens,...charTokens])];
  const hits=tokens.filter(t=>panelText.includes(t)).length;
  if(hits<1) throw new Error(`insufficient story-specific panel tokens: ${s.id}`);
}

// index build validator call
execSync('npm run validate:story-experience-index-model-v1',{stdio:'pipe'});

// diff guard
let diff='';
try { diff=execSync('git diff --name-only HEAD~1..HEAD',{encoding:'utf8'}); }
catch { const mb=execSync('git merge-base HEAD origin/main',{encoding:'utf8'}).trim(); diff=execSync(`git diff --name-only ${mb}..HEAD`,{encoding:'utf8'}); }
const changed=diff.trim().split('\n').filter(Boolean);
if(changed.some(f=>f.match(/\.(mp3|wav|m4a|aac|ogg)$/i))) throw new Error('audio file added/changed');
if(changed.some(f=>BLOCKED.some(b=>f.includes(b)))) throw new Error('blocked runtime/story/audio/backend behavior file changed');

console.log('validate-bedtime-values-expansion-pack-v1: PASS', { indexed: stories.length, qa_ready: runtime.length, audio: stories.filter(s=>s.audioScript).length });
