import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const root = process.cwd();
const servicePath = path.join(root, 'src/services/contentScaleRecoveryControlTowerService.ts');
const docPath = path.join(root, 'docs/content/CONTENT_SCALE_RECOVERY_CONTROL_TOWER_V1.md');
const pkgPath = path.join(root, 'package.json');

const pass = (m) => console.log(`PASS ${m}`);
const warn = (m) => console.log(`WARN ${m}`);
const fail = (m) => { console.log(`FAIL ${m}`); failed = true; };
let failed = false;

const requiredExports = [
  'contentScaleRecoveryControlTowerModelVersion','buildContentScaleRecoveryControlTower','getContentScaleRecoveryTargets','getContentScaleRecoveryCounters','getContentScaleRecoveryGaps','getContentScaleRecoveryNextMilestones','getContentScaleRecoverySummary'
];

if (fs.existsSync(servicePath)) pass('service exists'); else fail('service missing');
if (fs.existsSync(docPath)) pass('doc exists'); else fail('doc missing');

const service = fs.existsSync(servicePath) ? fs.readFileSync(servicePath, 'utf8') : '';
const doc = fs.existsSync(docPath) ? fs.readFileSync(docPath, 'utf8') : '';

for (const ex of requiredExports) {
  (service.includes(ex) ? pass : fail)(`required export token: ${ex}`);
}

['1000','450','350','strongDharmaJourneysTargetMin: 6','strongDharmaJourneysTargetMax: 8'].forEach((t)=> (service.includes(t)||doc.includes(t) ? pass : fail)(`PR #207 target present: ${t}`));
['PR #160','PR #170','PR #180','PR #190','PR #207'].forEach((t)=> (service.includes(t)||doc.includes(t) ? pass : fail)(`milestone present: ${t}`));
for (let i=155;i<=170;i++) (service.includes(`PR #${i}`)||doc.includes(`PR #${i}`) ? pass : fail)(`approved PR sequence includes PR #${i}`);
if ((service+doc).toLowerCase().includes('requires explicit approval')) pass('non-content detour approval rule present'); else fail('non-content detour approval rule missing');

['Krishna Stories','Ramayana Journey','Ganesha Stories','Hanuman Stories','Bedtime Stories','Values Stories','Festival Stories','Bhagavad Gita for Children','Mahabharata Child-Safe','Panchatantra / Hitopadesha'].forEach((c)=> (service.includes(c)||doc.includes(c) ? pass : fail)(`category coverage includes: ${c}`));
['Ramayana Journey','Krishna Childhood Journey','Ganesha Wisdom Journey','Hanuman Journey','Festival Journey','Bhagavad Gita for Children','Mahabharata Journey','Panchatantra / Hitopadesha Values Journey'].forEach((j)=> (service.includes(j)||doc.includes(j) ? pass : fail)(`journey coverage includes: ${j}`));

const forbiddenTokens = ['AsyncStorage','markStoryComplete','markJourneyStoryCompleted','setJourneyProgress','pruneStoryCompletions','getAllStoryCompletions','getAllJourneyProgress','fetch(','axios','telemetry','analytics','notification','share','sms','whatsapp','email','referral','invite'];
for (const t of forbiddenTokens) {
  if (service.toLowerCase().includes(t.toLowerCase())) fail(`forbidden token in service: ${t}`); else pass(`no forbidden token in service: ${t}`);
}

const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
if (pkg.scripts?.['validate:content-scale-recovery-control-tower-v1'] === 'node scripts/validate-content-scale-recovery-control-tower-v1.mjs') pass('package script registered'); else fail('package script missing/incorrect');

const changedFiles = fs.existsSync(path.join(root,'.git')) ? execSync('git status --porcelain', {encoding:'utf8'}).split('\n').filter(Boolean).map((l)=>l.slice(3)) : [];
const routeLike = changedFiles.filter((f)=>/\bapp\/|\(child\)|\(parent\)|route|story\//i.test(f));
if (routeLike.length === 0) pass('no app/child/parent route files changed'); else fail(`route-like files changed: ${routeLike.join(', ')}`);

const counterHints = ['indexedStoryExperiences','runtimeReadyStories','audioReadyScripts','dharmaJourneys'];
for (const c of counterHints) {
  if (service.includes(c)) pass(`counter defined: ${c}`); else fail(`counter missing: ${c}`);
}
warn('Counter confidence may be conservative; exact semantic status mapping depends on current content model conventions.');

if (failed) process.exit(1); else console.log('PASS content scale recovery control tower v1 validator completed');
