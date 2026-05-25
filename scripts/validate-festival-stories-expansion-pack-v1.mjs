import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const PACK_FILE = path.join(ROOT, 'src/data/festivalStoriesExpansionPackV1.ts');
const REGISTRY_FILE = path.join(ROOT, 'src/data/contentRegistry.ts');
const DOC_FILE = path.join(ROOT, 'docs/content/FESTIVAL_STORIES_EXPANSION_PACK_V1.md');
const STATUS_FILE = path.join(ROOT, 'docs/product/CURRENT_STATUS_AND_COUNTERS.md');
const PACKAGE_JSON = path.join(ROOT, 'package.json');

const REQUIRED_FESTIVALS = ['Diwali','Holi','Janmashtami','Ganesh Chaturthi','Navratri','Dussehra','Raksha Bandhan','Makar Sankranti','Ram Navami','Hanuman Jayanti','Maha Shivratri'];
const BANNED_PHRASES = ['moves the story forward','children can imitate','begins with a clear moment','practical value','specific festival moment','family dialogue','clear event sequencing','Festival story 1'];
const PROHIBITED_CHANGED_PREFIXES = ['app/','src/app/','src/services/runtimeStoryResolver','src/services/storyCompletion','src/services/journeyProgress','src/components/story/','src/screens/story','src/audio/','backend/','api/','analytics','telemetry','notification','sharing','microphone','recording','tts','elevenlabs'];

function assert(condition, message) { if (!condition) throw new Error(message); }
function read(file){ return fs.readFileSync(file,'utf8'); }

function extractStories(tsText) {
  const marker = 'export const festivalStoriesExpansionPackV1Stories: ExtendedStory[] = ';
  const start = tsText.indexOf(marker);
  assert(start >= 0, 'stories export not found');
  const from = start + marker.length;
  const end = tsText.indexOf(';\n\nexport const festivalStoriesExpansionPackV1StoryPack', from);
  assert(end > from, 'stories array terminator not found');
  return JSON.parse(tsText.slice(from, end));
}

const tsText = read(PACK_FILE);
const stories = extractStories(tsText);
assert(stories.length === 100, 'must have exactly 100 stories');

const ids = stories.map((s) => s.id);
assert(new Set(ids).size === ids.length, 'duplicate IDs inside festival pack');

const qaReady = stories.filter((s) => s.status === 'qa_ready');
assert(qaReady.length >= 35, 'need at least 35 qa_ready candidates');
assert(stories.filter((s) => s.audioScript).length >= 25, 'need at least 25 audio-script-ready candidates');
assert(stories.every((s) => s.audioMetadata), 'all stories must have audioMetadata');
assert(stories.every((s) => Array.isArray(s.panels) && s.panels.length > 0 && s.panels.every((p) => (p.text || '').trim().length > 0)), 'all stories must have non-empty panels');
assert(qaReady.every((s) => s.panels.length === 4), 'qa_ready stories must have exactly 4 panels');
assert(qaReady.every((s) => s.readinessStatus === 'qa_ready'), 'qa_ready stories must keep qa_ready readinessStatus');
assert(stories.every((s) => !/^\d+/.test(s.title) && !/festival story\s*\d+/i.test(s.title)), 'numbered or placeholder child-facing titles detected');

const textBlob = JSON.stringify(stories).toLowerCase();
for (const phrase of BANNED_PHRASES) assert(!textBlob.includes(phrase.toLowerCase()), `banned phrase found: ${phrase}`);

for (const festival of REQUIRED_FESTIVALS) assert(stories.some((s) => s.title.includes(festival) || s.summary.includes(festival) || s.sourceTextOrTraditionNote.includes(festival)), `missing coverage: ${festival}`);

assert(stories.every((s) => s.primaryCategoryId === 'festival_stories'), 'festival category coverage mismatch');

const registryText = read(REGISTRY_FILE);
assert(registryText.includes('festivalStoriesExpansionPackV1Stories'), 'contentRegistry missing festival stories registration');
assert(registryText.includes('festivalStoriesExpansionPackV1StoryPack'), 'contentRegistry missing festival pack registration');
assert(registryText.includes('festivalStoriesExpansionPackV1Journey'), 'contentRegistry missing festival journey registration');

const pkg = JSON.parse(read(PACKAGE_JSON));
assert(pkg.scripts['validate:festival-stories-expansion-pack-v1'], 'package.json missing validate:festival-stories-expansion-pack-v1 script');

assert(fs.existsSync(DOC_FILE), 'festival content doc missing');
assert(fs.existsSync(STATUS_FILE), 'status/counters doc missing');

// duplicate IDs against existing content files
const dataDir = path.join(ROOT, 'src/data');
const allDataFiles = fs.readdirSync(dataDir).filter((f) => f.endsWith('.ts') && f !== 'festivalStoriesExpansionPackV1.ts');
const existingText = allDataFiles.map((f) => read(path.join(dataDir, f))).join('\n');
for (const id of ids) assert(!existingText.includes(id), `duplicate ID against existing content: ${id}`);

// optional changed-file safety checks: pass newline-delimited file list via env
const changedFiles = (process.env.VALIDATION_CHANGED_FILES || '').split('\n').map((s) => s.trim()).filter(Boolean);
if (changedFiles.length > 0) {
  const allowed = new Set([
    'src/data/festivalStoriesExpansionPackV1.ts',
    'src/data/contentRegistry.ts',
    'scripts/validate-festival-stories-expansion-pack-v1.mjs',
    'package.json',
    'docs/content/FESTIVAL_STORIES_EXPANSION_PACK_V1.md',
    'docs/product/CURRENT_STATUS_AND_COUNTERS.md'
  ]);
  for (const f of changedFiles) {
    assert(allowed.has(f), `changed file outside allowed scope: ${f}`);
    assert(!PROHIBITED_CHANGED_PREFIXES.some((x) => f.includes(x)), `prohibited file scope changed: ${f}`);
    assert(!/\.(mp3|wav|m4a|aac|ogg)$/i.test(f), `audio file change not allowed: ${f}`);
  }
}

console.log('validate-festival-stories-expansion-pack-v1: PASS', { indexed: stories.length, qa_ready: qaReady.length, audio_script_ready: stories.filter((s) => s.audioScript).length });
