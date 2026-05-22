import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const appDir = path.join(root, 'app');
const srcDir = path.join(root, 'src');
const auditDocPath = path.join(root, 'docs/qa/ROUTE_INTEGRITY_AUDIT.md');

const requiredRoutes = [
  'app/index.tsx',
  'app/onboarding.tsx',
  'app/(child)/today.tsx',
  'app/(child)/worlds.tsx',
  'app/world/[slug].tsx',
  'app/story/[slug].tsx',
];

const knownTargets = [
  '/', '/onboarding', '/(child)/today', '/(child)/worlds',
  '/world/krishna', '/world/ganesha', '/world/ramayana', '/world/hanuman', '/world/bedtime', '/world/values', '/world/festivals',
];

const blockedPrototypeNamePatterns = [
  /screen[-_ ]?(42[4-9]|4[3-7]\d|48[0-7])/i,
  /prototype/i,
];

const blockedChromeTerms = ['9:41', 'fake notch', 'fake battery', 'fake signal', 'phone chrome', 'device frame'];
const blockedGamificationTerms = ['XP', 'coins', 'leaderboard', 'ranking', 'streak', 'score'];
const blockedScopeTerms = ['microphone', 'recording', 'voice input', 'payment', 'checkout', 'subscription checkout', 'backend auth', 'cloud sync'];

const requiredAuditSections = [
  'Route Inventory',
  'Navigation Target Inventory',
  'Primary CTA Coverage',
  'Dynamic Route Coverage',
  'Fallback State Coverage',
  'Scope Guardrail Confirmation',
  'Broken Links Found and Fixed',
  'Final PR #108 Readiness Statement',
];

let hasFailure = false;

function pass(msg) { console.log(`PASS: ${msg}`); }
function fail(msg) { hasFailure = true; console.error(`FAIL: ${msg}`); }

function exists(relPath) {
  return fs.existsSync(path.join(root, relPath));
}

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

for (const route of requiredRoutes) {
  exists(route) ? pass(`Required route exists: ${route}`) : fail(`Missing required route: ${route}`);
}

exists('docs/qa/ROUTE_INTEGRITY_AUDIT.md')
  ? pass('Audit document exists: docs/qa/ROUTE_INTEGRITY_AUDIT.md')
  : fail('Missing required audit document: docs/qa/ROUTE_INTEGRITY_AUDIT.md');

for (const dynamicRoute of ['app/world/[slug].tsx', 'app/story/[slug].tsx']) {
  if (!exists(dynamicRoute)) {
    fail(`Dynamic route file missing: ${dynamicRoute}`);
    continue;
  }
  const content = fs.readFileSync(path.join(root, dynamicRoute), 'utf8');
  if (content.trim().length < 80) fail(`Dynamic route file appears invalid/empty: ${dynamicRoute}`);
  else pass(`Dynamic route file appears valid: ${dynamicRoute}`);
}

const appFiles = walk(appDir);
const appRelFiles = appFiles.map((f) => path.relative(root, f).replace(/\\/g, '/'));

for (const rel of appRelFiles) {
  const base = path.basename(rel);
  if (blockedPrototypeNamePatterns.some((p) => p.test(base))) {
    fail(`Prototype-only route filename pattern detected under app/: ${rel}`);
  }
}
pass('No obvious prototype-only route filenames detected under app/.');

for (const rel of appRelFiles) {
  const m = rel.match(/(?:^|\/)Screen[-_ ]?(\d+)(?:\.|$)/i);
  if (m) {
    const id = Number(m[1]);
    if (id >= 424 && id <= 487) fail(`Prototype runtime screen id route detected (424-487): ${rel}`);
  }
}
pass('No Screens 424–487 runtime route files detected under app/.');

const scanFiles = [...appFiles, ...walk(srcDir)].filter((f) => /\.(tsx?|jsx?|mjs|cjs|json|md)$/i.test(f));

function scanTerms(terms, label, mode = 'fail') {
  for (const file of scanFiles) {
    const rel = path.relative(root, file).replace(/\\/g, '/');
    const text = fs.readFileSync(file, 'utf8');
    for (const term of terms) {
      const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b${escaped}\\b`, term === 'XP' ? 'g' : 'gi');
      if (regex.test(text)) {
        const msg = `${label} term "${term}" found in ${rel}`;
        if (mode === 'warn') console.warn(`WARN: ${msg}`);
        else fail(msg);
      }
    }
  }
}

scanTerms(blockedChromeTerms, 'Fake phone chrome', 'fail');
scanTerms(blockedGamificationTerms, 'Hard gamification', 'warn');
scanTerms(blockedScopeTerms, 'Out-of-scope implementation', 'warn');

const navSourceFiles = [
  'app/index.tsx', 'app/onboarding.tsx', 'app/(child)/today.tsx', 'app/(child)/worlds.tsx', 'app/world/[slug].tsx', 'app/story/[slug].tsx'
];
const navText = navSourceFiles.filter(exists).map((p) => fs.readFileSync(path.join(root, p), 'utf8')).join('\n');
for (const target of knownTargets) {
  navText.includes(target)
    ? pass(`Known navigation target present: ${target}`)
    : fail(`Known navigation target missing from key route files: ${target}`);
}

if (navText.includes('/story/${') || navText.includes('/story/')) pass('Dynamic /story/[slug] navigation support detected.');
else fail('Missing evidence of dynamic /story/[slug] navigation support.');

const storySlugContent = exists('app/story/[slug].tsx') ? fs.readFileSync(path.join(root, 'app/story/[slug].tsx'), 'utf8') : '';
for (const fallback of ['Return to Story World', 'Go back to Child Home']) {
  storySlugContent.includes(fallback)
    ? pass(`Story fallback link exists: ${fallback}`)
    : fail(`Story fallback link missing: ${fallback}`);
}

const worldSlugContent = exists('app/world/[slug].tsx') ? fs.readFileSync(path.join(root, 'app/world/[slug].tsx'), 'utf8') : '';
worldSlugContent.includes('Back to Story World')
  ? pass('World fallback link exists: Back to Story World')
  : fail('World fallback link missing: Back to Story World');

if (fs.existsSync(auditDocPath)) {
  const audit = fs.readFileSync(auditDocPath, 'utf8');
  for (const section of requiredAuditSections) {
    audit.includes(section)
      ? pass(`Audit section present: ${section}`)
      : fail(`Audit section missing: ${section}`);
  }
}

if (hasFailure) {
  console.error('\nRoute integrity validation failed. See FAIL messages above for fixes.');
  process.exit(1);
}

console.log('\nRoute integrity validation passed.');
