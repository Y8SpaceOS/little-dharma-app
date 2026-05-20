#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const fail = (m) => { console.error(`❌ ${m}`); process.exit(1); };
const ok = (m) => console.log(`✅ ${m}`);

const root = path.resolve('docs/screen-contracts');
if (!fs.existsSync(root) || !fs.statSync(root).isDirectory()) fail('docs/screen-contracts directory is missing');
ok('docs/screen-contracts exists');

const requiredDirs = [
  '002-045-primary-prototype',
  '046-145-expansion-reference',
  '146-295-product-depth',
  '296-423-missing-depth'
];

for (const dir of requiredDirs) {
  const full = path.join(root, dir);
  if (!fs.existsSync(full) || !fs.statSync(full).isDirectory()) fail(`Missing required directory: ${dir}`);
  const entries = fs.readdirSync(full);
  if (!entries.some((f) => f.endsWith('.md'))) fail(`${dir} must contain at least one .md visual spec`);
  if (!entries.some((f) => f.endsWith('.json'))) fail(`${dir} must contain at least one .json contract`);
}
ok('All required contract directories include .md and .json files');

const readmePath = path.join(root, 'README.md');
if (!fs.existsSync(readmePath)) fail('Missing docs/screen-contracts/README.md');
const readme = fs.readFileSync(readmePath, 'utf8');

const expectedRanges = ['002-045', '046-145', '146-295', '296-423'];
for (const range of expectedRanges) {
  if (!readme.includes(range)) fail(`README missing documented range ${range}`);
}
ok('README documents required screen ranges');

if (!/Live app implementation is not required for all contracts\./.test(readme)) fail('README must state live app implementation is not required for all contracts.');
if (!readme.includes('Screen contracts are implementation references. Screens are implemented only when selected in sprint scope.')) {
  fail('README missing required implementation-reference statement.');
}
ok('README policy statements are present');

console.log('🎉 validate-screen-contract-library-v1: PASS');
