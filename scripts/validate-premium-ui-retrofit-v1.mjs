import { existsSync, readFileSync } from 'node:fs';

const routeFiles = [
  'app/index.tsx',
  'app/onboarding.tsx',
  'app/(child)/today.tsx',
  'app/(child)/worlds.tsx',
  'app/world/[slug].tsx',
  'app/story/[slug].tsx'
];

const bannedStrings = [
  'Screen 22','Screen 23','Screen 24','Story Detail','Story Reader','contract','visual parity','implementation',
  '9:41','battery','wifi','signal','notch',
  'XP','coins','streak','leaderboard','rankings'
];

const bannedLuvluMarkers = ['tree', 'plant', 'teddy'];
const requiredRoutes = ['/onboarding','/(child)/today','/(child)/worlds','/world/','/story/'];
const protoRoutePatterns = [/\/screen-4(2[4-9]|[3-9][0-9])/, /\/screen-[0-9]{3}/];

const allRouteCode = routeFiles.map((f) => readFileSync(f, 'utf8')).join('\n');
const uiStringSource = allRouteCode.replace(/import[^\n]+/g, '');

const failures = [];
for (const f of routeFiles) if (!existsSync(f)) failures.push(`Missing key route file: ${f}`);
for (const s of bannedStrings) if (uiStringSource.includes(s)) failures.push(`Banned live UI/internal string detected: ${s}`);
for (const s of bannedLuvluMarkers) if (/luvlu/i.test(uiStringSource) && new RegExp(`\\b${s}\\b`, 'i').test(uiStringSource)) failures.push(`Disallowed Luvlu marker found: ${s}`);
for (const s of requiredRoutes) if (!uiStringSource.includes(s)) failures.push(`Required navigation string missing: ${s}`);
for (const rx of protoRoutePatterns) if (rx.test(allRouteCode)) failures.push(`Prototype-only route pattern found: ${rx}`);

if (failures.length) {
  console.error('validate-premium-ui-retrofit-v1 failed:');
  failures.forEach((f) => console.error(`- ${f}`));
  process.exit(1);
}

console.log('validate-premium-ui-retrofit-v1 passed');
