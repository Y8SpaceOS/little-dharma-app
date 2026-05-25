import fs from 'node:fs';
const text = fs.readFileSync('src/data/bedtimeValuesExpansionPackV1.ts','utf8');
if(!fs.existsSync('docs/content/BEDTIME_VALUES_EXPANSION_PACK_V1.md')) throw new Error('docs missing');
const pkg=JSON.parse(fs.readFileSync('package.json','utf8')); if(!pkg.scripts['validate:bedtime-values-expansion-pack-v1']) throw new Error('script missing');
const ids=[...text.matchAll(/"id": "bedtime-values-exp-v1-\d{3}"/g)].map(m=>m[0]);
if(ids.length!==100||new Set(ids).size!==100) throw new Error('ID count/uniqueness failed');
if((text.match(/"status": "qa_ready"/g)||[]).length<35) throw new Error('qa_ready count failed');
if((text.match(/"audioScript":/g)||[]).length<25) throw new Error('audio count failed');
if(!text.includes('"primaryCategoryId": "bedtime_stories"')||!text.includes('"primaryCategoryId": "values_stories"')) throw new Error('category coverage failed');
if((text.match(/"journeyId": "bedtime-values-journey-v1"/g)||[]).length!==100) throw new Error('journey mapping failed');
if((text.match(/"audioMetadata":/g)||[]).length!==100) throw new Error('audioMetadata failed');
for (const b of ['moves the story forward','children can imitate','is at the heart of','begins with a clear moment','numbered placeholder event','clear event sequencing','family dialogue','practical value','specific bedtime moment','specific values moment','titles.map','titles.slice','%']) { if(text.toLowerCase().includes(b)) throw new Error('banned token '+b); }
console.log('validate-bedtime-values-expansion-pack-v1: PASS');
