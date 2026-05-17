import fs from 'node:fs';
const qaDoc='docs/ACCESSIBILITY_PASS_QA.md', qaCsv='docs/content/accessibility-pass-qa.csv';
const required=['qaArea','surface','expectedBehavior','status','notes'];
const allowed=new Set(['pass','pending_manual_qa','minor_issue','blocked']);
const reqPhrases=['accessibility','VoiceOver','iPhone','manual QA','not WCAG compliant'];
const forbidden=['fully accessible','WCAG compliant','guaranteed accessible','certified accessible'];
const surfaces=['app/(child)/today.tsx','app/story/[slug].tsx','app/(child)/treasures.tsx','app/(parent)/dashboard.tsx','app/(parent)/privacy.tsx','app/onboarding.tsx'];
const main=['app/(child)/today.tsx','app/story/[slug].tsx','app/(parent)/dashboard.tsx'];
const fail=(m)=>{console.error('❌ '+m);process.exit(1)};
const parse=(t)=>{let r=[],row=[],c='',q=false;for(let i=0;i<t.length;i++){const ch=t[i];if(ch==='"'){if(q&&t[i+1]==='"'){c+='"';i++;}else q=!q;continue;}if(ch===','&&!q){row.push(c);c='';continue;}if((ch==='\n'||ch==='\r')&&!q){if(ch==='\r'&&t[i+1]==='\n')i++;row.push(c);r.push(row);row=[];c='';continue;}c+=ch;}if(c.length||row.length){row.push(c);r.push(row);}return r.filter(x=>x.some(v=>v.trim()));};
if(!fs.existsSync(qaDoc)) fail(`${qaDoc} missing`); if(!fs.existsSync(qaCsv)) fail(`${qaCsv} missing`);
const doc=fs.readFileSync(qaDoc,'utf8');
for(const p of reqPhrases) if(!doc.includes(p)) fail(`QA doc missing phrase: ${p}`);
for(const p of forbidden){ if(doc.includes(p) && !doc.includes(`not ${p}`)) fail(`Forbidden phrase in QA doc: ${p}`); }
const rows=parse(fs.readFileSync(qaCsv,'utf8')); if(rows.length<2) fail('CSV missing header/data');
const h=rows[0]; for(const c of required) if(!h.includes(c)) fail(`Missing required CSV column: ${c}`);
const i=Object.fromEntries(required.map(c=>[c,h.indexOf(c)])); const data=rows.slice(1); if(data.length<14) fail('Need at least 14 QA rows');
for(const [n,row] of data.entries()){for(const k of ['qaArea','surface','expectedBehavior','status']) if(!(row[i[k]]||'').trim()) fail(`Row ${n+2} missing ${k}`); if(!allowed.has((row[i.status]||'').trim())) fail(`Row ${n+2} invalid status`)}
for(const f of surfaces){const t=fs.readFileSync(f,'utf8'); for(const p of forbidden) if(t.includes(p)) fail(`Forbidden phrase in ${f}: ${p}`);}
for(const f of main){const t=fs.readFileSync(f,'utf8'); if(!/(accessibilityRole|accessibilityLabel|accessibilityHint)/.test(t)) fail(`No accessibility props found in ${f}`)}
console.log('✅ Accessibility pass validation passed.');
