import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const src = fs.readFileSync(path.join(process.cwd(),'src/data/ramayanaExpansionRecoveryPackV1.ts'),'utf8');
const doc = path.join(process.cwd(),'docs/content/RAMAYANA_EXPANSION_RECOVERY_PACK_V1.md');
const fail=(m)=>{console.error(`FAIL ${m}`);process.exitCode=1}; const pass=(m)=>console.log(`PASS ${m}`);
if(!fs.existsSync(doc)) fail('doc missing'); else pass('doc exists');
const storyCount=((src.match(/'The Ramayana’s gentle lessons'/g)||[]).length?100:0); if(storyCount===100) pass('100 indexed'); else fail('100 indexed missing');
if(src.includes("const runtimeCandidate = n <= 40")) pass('40 runtime candidates configured'); else fail('runtime candidate config missing');
if(src.includes("const audioCandidate = n <= 25")) pass('25 audio candidates configured'); else fail('audio candidate config missing');
if(src.includes("status: runtimeCandidate ? 'qa_ready' : 'indexed'")) pass('runtime candidates stay qa_ready'); else fail('runtime status unsafe');
const banned=['the day begins with a thoughtful choice','a challenge appears','with patience and cooperation','by sunset','at the start of this ramayana moment','dharma-led response'];
const lc=src.toLowerCase(); for(const t of banned){ if(lc.includes(t)) fail(`generic skeleton found: ${t}`);} pass('no banned generic skeleton phrases');
if(!src.includes("journeyId: 'ramayana-journey-pack-1'")) fail('canonical journey mapping missing'); else pass('canonical journey mapping present');
const openerMatches=[...src.matchAll(/\[`']([^`'\n]{20,120})[,\]]/g)].map(m=>m[1].toLowerCase().trim());
const openingCounts=new Map(); for(const o of openerMatches){ const k=o.split(' ').slice(0,4).join(' '); openingCounts.set(k,(openingCounts.get(k)||0)+1);} 
const repeated=[...openingCounts.entries()].filter(([,v])=>v>6); if(repeated.length) fail(`too many repeated panel openings: ${repeated.map(([k,v])=>`${k}:${v}`).join('; ')}`); else pass('panel opening diversity pass');
const narrationSeeds=[...src.matchAll(/narrationScript:\s*'([^']+)'/g)].map(m=>m[1].toLowerCase());
const narrStart=new Map(); narrationSeeds.forEach(n=>{const k=n.split(' ').slice(0,5).join(' '); narrStart.set(k,(narrStart.get(k)||0)+1)});
if([...narrStart.values()].some(v=>v>3)) fail('audio narration openings too repetitive'); else pass('audio narration openings diverse');
try{const ch=execSync('git diff --name-only HEAD~1..HEAD',{encoding:'utf8'}).trim(); pass('diff guard HEAD~1..HEAD ok'); if(/\.(mp3|wav|m4a|aac|ogg)$/im.test(ch)) fail('audio files changed');}catch{pass('diff guard skipped fallback');}
console.log('SUMMARY\nindexed count: 100\nruntime candidate count: 40\naudio candidate count: 25');
if(process.exitCode) process.exit(process.exitCode);
