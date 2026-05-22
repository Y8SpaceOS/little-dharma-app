import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const pass = (m) => console.log(`PASS ${m}`);
const fail = (m) => { console.error(`FAIL ${m}`); hasFail = true; };
const warn = (m) => console.warn(`WARN ${m}`);
let hasFail = false;

const exists = (p) => fs.existsSync(path.join(root, p));
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');

const doc = 'docs/qa/STORY_RUNTIME_HARDENING.md';
if (!exists(doc)) fail(`${doc} missing`); else pass(`${doc} exists`);

const requiredSections = [
  'PR title and purpose','Story runtime flow review','Story resolver hardening','Reader state hardening','Completion/progress hardening',
  'Journey linkage hardening','Treasures hardening','Local-first state usage','Tests added/updated','Scope guardrail confirmation',
  'Known non-blocking issues','Follow-up recommendations for PR #113 and PR #114','Final PR #112 readiness statement'
];
if (exists(doc)) {
  const text = read(doc);
  for (const section of requiredSections) text.toLowerCase().includes(section.toLowerCase()) ? pass(`doc section: ${section}`) : fail(`doc section missing: ${section}`);
}

const reqFiles = ['app/story/[slug].tsx','app/world/[slug].tsx','app/(child)/treasures.tsx','src/lib/storyProgress.ts','src/lib/journeyProgress.ts','src/services/journeys.ts','src/data/storyWorld.ts'];
for (const f of reqFiles) exists(f) ? pass(`required file exists: ${f}`) : fail(`required file missing: ${f}`);
for (const f of ['docs/qa/ROUTE_INTEGRITY_AUDIT.md','docs/qa/LOCAL_FIRST_STATE_AUDIT.md','docs/qa/LOCAL_STATE_RUNTIME_HARDENING.md','docs/qa/PARENT_SURFACE_FUNCTIONAL_READINESS.md']) exists(f) ? pass(`readiness doc exists: ${f}`) : fail(`readiness doc missing: ${f}`);
for (const f of ['scripts/validate-route-integrity-v1.mjs','scripts/validate-local-first-state-v1.mjs','scripts/validate-local-state-runtime-hardening-v1.mjs','scripts/validate-parent-surface-readiness-v1.mjs']) exists(f) ? pass(`validator exists: ${f}`) : fail(`validator missing: ${f}`);

const hasScreenRangeId = (value) => {
  const matches = value.match(/\d+/g);
  if (!matches) return false;
  return matches.some((chunk) => {
    const n = Number.parseInt(chunk, 10);
    return Number.isInteger(n) && n >= 424 && n <= 487;
  });
};

const runtimePrototypeLeakFiles = [];
const walkForPrototypeLeaks = (startDir) => {
  for (const ent of fs.readdirSync(path.join(root, startDir), { withFileTypes: true })) {
    const rel = path.join(startDir, ent.name);
    if (ent.isDirectory()) {
      walkForPrototypeLeaks(rel);
      continue;
    }
    if (!/\.(ts|tsx|js|jsx|mjs|md|json)$/i.test(ent.name)) continue;
    if (hasScreenRangeId(rel)) runtimePrototypeLeakFiles.push(rel);
  }
};

walkForPrototypeLeaks('app');
walkForPrototypeLeaks('src');
if (runtimePrototypeLeakFiles.length > 0) {
  fail(`prototype screen files 424-487 detected recursively: ${runtimePrototypeLeakFiles.slice(0, 8).join(', ')}`);
} else {
  pass('no 424-487 prototype runtime files detected recursively in app/ and src/');
}

const scanDirs = ['app','src'];
const bannedWords = ['fake phone chrome'];
const bannedImpl = ['backend','checkout','payment','microphone','recording'];
for (const dir of scanDirs) {
  const files = [];
  const walk = (d) => {
    for (const ent of fs.readdirSync(path.join(root, d), { withFileTypes: true })) {
      const rel = path.join(d, ent.name);
      if (ent.isDirectory()) walk(rel);
      else if (/\.(ts|tsx|js|jsx|mjs|md)$/.test(ent.name)) files.push(rel);
    }
  };
  walk(dir);
  const corpus = files.map((f) => read(f).toLowerCase()).join('\n');
  bannedWords.forEach((w) => corpus.includes(w) ? fail(`banned string found: ${w}`) : pass(`no banned string: ${w}`));
  bannedImpl.forEach((w) => corpus.includes(w) ? warn(`keyword present (manual review): ${w}`) : pass(`no suspicious keyword: ${w}`));
}

const story = read('app/story/[slug].tsx').toLowerCase();
story.includes('resting for now') ? pass('story fallback copy exists') : fail('story fallback copy missing');
story.includes('/(child)/worlds') && story.includes('/(child)/today') ? pass('story fallback/back links exist') : fail('story fallback/back links missing');
story.includes('back to story world') && story.includes('back to child home') ? pass('completion screen safe navigation exists') : fail('completion safe navigation missing');

const treasures = read('app/(child)/treasures.tsx');
treasures.includes('vrindavanPath.filter') ? pass('treasures display filtering present') : warn('treasures stale slug filtering not confidently detected');

if (hasFail) process.exit(1);
console.log('PASS story runtime hardening validator complete');
