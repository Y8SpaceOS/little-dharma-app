import fs from 'fs';
import path from 'path';

const csvPath = path.join(process.cwd(), 'docs/content/story-master-index-v1.csv');
const required = ['baseStoryId','baseStoryTitle','contentWorld','contentLabel','sourceSensitivityTier','primaryValue','supportingValue','carryingWordSeed','ageBandCoverage','plannedExperienceCount','sourceSummary','parentSourceNote','authenticityRisk','ritualPotential','parentMirrorPotential','bedtimePotential','releasePhase','releasePriority','reviewStatus','notes'];

const fail=(m)=>{console.error(`❌ ${m}`);process.exit(1)};
const parseLine=(line)=>{const out=[];let cur='';let q=false;for(let i=0;i<line.length;i++){const ch=line[i];if(ch==='"'){if(q&&line[i+1]==='"'){cur+='"';i++;}else q=!q;}else if(ch===','&&!q){out.push(cur);cur='';}else cur+=ch;}out.push(cur);return out;};

if(!fs.existsSync(csvPath)) fail('CSV missing: docs/content/story-master-index-v1.csv');
const lines=fs.readFileSync(csvPath,'utf8').trim().split('\n');
if(lines.length<351) fail(`Expected >=350 data rows, got ${lines.length-1}`);
const headers=parseLine(lines[0]);
for(const c of required) if(!headers.includes(c)) fail(`Missing required column: ${c}`);
const ix=Object.fromEntries(headers.map((h,i)=>[h,i]));
let total=0;
for(let i=1;i<lines.length;i++){
  const row=parseLine(lines[i]);
  for(const c of ['baseStoryId','primaryValue','contentWorld','contentLabel','sourceSensitivityTier','reviewStatus','releasePhase','parentSourceNote']) if(!row[ix[c]]?.trim()) fail(`Row ${i+1} missing ${c}`);
  total += Number(row[ix.plannedExperienceCount]||0);
}
if(total<1050) fail(`Expected plannedExperienceCount total >= 1050, got ${total}`);
console.log(`✅ story-master-index-v1.csv validation passed (rows=${lines.length-1}, planned=${total})`);
