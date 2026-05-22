#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const pass = (m) => console.log(`PASS ${m}`);
const warn = (m) => console.log(`WARN ${m}`);
const fail = (m) => { console.error(`FAIL ${m}`); failures += 1; };
let failures = 0;

const mustExist = [
  'src/types/contentModel.ts',
  'docs/content/CONTENT_MODEL_V2.md',
  'src/data/seed/vrindavan.ts',
  'src/data/storyWorld.ts',
  'src/services/journeys.ts'
];
for (const file of mustExist) fs.existsSync(path.join(root, file)) ? pass(`${file} exists`) : fail(`${file} missing`);

const doc = fs.existsSync('docs/content/CONTENT_MODEL_V2.md') ? fs.readFileSync('docs/content/CONTENT_MODEL_V2.md', 'utf8') : '';
const sections = ['PR title and purpose','Why Content Model v2 exists','Current content reality','Relationship to existing 21 Vrindavan stories','Story model','StoryPanel model','StoryVariant model','StoryPack model','DharmaJourney model','JourneyProgress model','AudioMetadata model','IllustrationPrompt model','ParentNote model','SacredRespectLevel model','ContentStatus lifecycle','AgeBand rules','StoryWorldCategory rules','Sacred/cultural respect guardrails','Luvlu usage boundaries in content','Parent trust requirements','Local-first/no-backend assumptions','Migration plan for existing content','What this PR does not do','Follow-up recommendations for PR #119 and PR #120','Final PR #118 readiness statement'];
for (const s of sections) doc.includes(s) ? pass(`Doc section present: ${s}`) : fail(`Doc section missing: ${s}`);

const model = fs.existsSync('src/types/contentModel.ts') ? fs.readFileSync('src/types/contentModel.ts', 'utf8') : '';
const modelNames = ['Story','StoryPanel','StoryVariant','StoryPack','DharmaJourney','JourneyProgress','AudioMetadata','IllustrationPrompt','ParentNote','SacredRespectLevel','ContentStatus','AgeBand','StoryWorldCategory'];
for (const n of modelNames) model.match(new RegExp(`type\\s+${n}\\s*=|interface\\s+${n}\\s*`)) ? pass(`Model present: ${n}`) : fail(`Model missing: ${n}`);

const requiredFields = {
  Story:['id','slug','title','shortTitle','summary','sourceTradition','sourceTextOrTraditionNote','storyPackId','ageBands','recommendedAgeBand','durationMinutes','primaryValue','secondaryValues','characters','panels','parentNote','reflectionPrompt','ritualPrompt','completionBlessing','sacredRespectLevel','illustrationPrompt','audioMetadata','status'],
  StoryPanel:['id','title','text'],
  StoryVariant:['id','storyId','ageBand','title','summary','panels','parentNote','durationMinutes','readingLevel','status'],
  StoryPack:['id','title','childFacingTitle','description','sourceTradition','category','status','storyIds','recommendedAgeBands','contentSafetyNotes','sacredRespectNotes'],
  DharmaJourney:['id','title','childFacingTitle','description','sourceTradition','recommendedAgeBands','storyIds','estimatedCompletionWeeks','status','journeyType'],
  JourneyProgress:['journeyId','completedStoryIds','currentStoryId','lastOpenedStoryId','updatedAtLocal','completionPercentage'],
  AudioMetadata:['audioAvailable','voiceOptions','narrationScriptStatus','preferredVoiceStyle','pacing','noMicRequired'],
  IllustrationPrompt:['sceneSummary','styleGuidance','culturalGuardrails','deityTreatment','avoidList'],
  ParentNote:['sourceContext','valueExplained','discussionPrompt','practicePrompt','cautionNote']
};
for (const [typeName, fields] of Object.entries(requiredFields)) {
  for (const field of fields) model.includes(`${field}:`) ? pass(`${typeName}.${field}`) : fail(`Missing field ${typeName}.${field}`);
}

const appFiles = fs.readdirSync('app', { recursive: true }).filter((x) => x.endsWith('.tsx') || x.endsWith('.ts'));
const routeCount = appFiles.length;
const gitTrackedAppRoutes = routeCount;
gitTrackedAppRoutes > 500 ? fail('Unexpectedly high app route file count') : pass(`App route file count check OK (${gitTrackedAppRoutes})`);

const allRuntimeFiles = ['app', 'src'].flatMap((dir) => fs.readdirSync(dir, { recursive: true }).map((f) => `${dir}/${f}`));
allRuntimeFiles.some((f) => /screen[-_ ]?(42[4-9]|4[3-7][0-9]|48[0-7])/i.test(f)) ? fail('Prototype screen 424-487 runtime files detected') : pass('No runtime files for prototype screens 424-487');

const scanText = allRuntimeFiles.filter((f) => /\.(ts|tsx|js|mjs|md)$/.test(f) && fs.statSync(f).isFile()).map((f) => fs.readFileSync(f, 'utf8')).join('\n');
['fake phone chrome','Dynamic Island','notch chrome'].some((t) => scanText.toLowerCase().includes(t.toLowerCase())) ? fail('Fake phone chrome string detected') : pass('No fake phone chrome strings detected');
['stripe','checkout','microphone','recording','analytics.track','telemetry','fetch(','axios','supabase','firebase'].some((t) => scanText.includes(t)) ? warn('Scope keyword detected in repo; verify no new active implementation was introduced in this PR') : pass('No blocked implementation keywords detected');

const childRuntimeText = appFiles.filter((f) => f.includes('(child)')).map((f) => fs.readFileSync(`app/${f}`, 'utf8')).join('\n');
['xp','coins','streak','leaderboard','ranking'].some((t) => new RegExp(`\\b${t}\\b`, 'i').test(childRuntimeText)) ? fail('Hard gamification term detected in child routes') : pass('No hard gamification terms in child routes');
childRuntimeText.includes('Story Library') ? fail('Story Library label found in child-facing routes') : pass('Child-facing routes avoid Story Library label');

const adapterPath = path.join(root, 'src/data/contentModelAdapters.ts');
if (!fs.existsSync(adapterPath)) warn('Adapter helper not found; partial coverage expected until PR #119+');
else {
  const adapter = fs.readFileSync(adapterPath, 'utf8');
  adapter.includes('getContentModelV2CoverageSummary') ? pass('Adapter coverage summary helper present') : warn('Adapter coverage summary helper missing');
}

if (failures > 0) process.exit(1);
