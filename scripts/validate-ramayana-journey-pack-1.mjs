#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const PASS='PASS'; const WARN='WARN'; const FAIL='FAIL';
const checks=[];
const add=(s,m)=>checks.push({s,m});
const resolve=(p)=>path.join(root,p);
const exists=(p)=>fs.existsSync(resolve(p));
const read=(p)=>fs.readFileSync(resolve(p),'utf8');

const seed='src/data/seed/ramayanaPack1.ts';
const registry='src/data/ramayanaPack1Registry.ts';
const docs='docs/content/RAMAYANA_JOURNEY_PACK_1.md';
const contentRegistry='src/data/contentRegistry.ts';
[seed,registry,docs,contentRegistry].forEach((f)=>add(exists(f)?PASS:FAIL,`${f} exists`));

const seedText=exists(seed)?read(seed):'';
const regText=exists(registry)?read(registry):'';
const docsText=exists(docs)?read(docs):'';
const crText=exists(contentRegistry)?read(contentRegistry):'';

add(/ramayanaPack1Stories/.test(crText) && /ramayanaPack1StoryPack/.test(crText) && /ramayanaPack1Journey/.test(crText) ? PASS : FAIL, 'Content registry imports/uses Ramayana Pack 1');

const storyCount=(seedText.match(/status:\s*'(qa_ready|runtime_ready|available)'/g)||[]).length;
add(storyCount>=3 && storyCount<=5?PASS:FAIL,`Ramayana story count between 3 and 5 (found ${storyCount})`);

const requiredFields=['id','slug','title','shortTitle','summary','sourceTradition','sourceTextOrTraditionNote','storyPackId','journeyId','journeyOrder','ageBands','recommendedAgeBand','durationMinutes','primaryValue','secondaryValues','characters','panels','parentNote','reflectionPrompt','ritualPrompt','completionBlessing','sacredRespectLevel','illustrationPrompt','audioMetadata','status'];
for(const f of requiredFields){add(seedText.includes(`${f}:`)?PASS:FAIL,`Required field present in seed: ${f}`)}
add((seedText.match(/parentNote:/g)||[]).length===storyCount?PASS:FAIL,'All stories include parentNote');
add((seedText.match(/illustrationPrompt:/g)||[]).length===storyCount?PASS:FAIL,'All stories include illustrationPrompt');
add((seedText.match(/noMicRequired:\s*true/g)||[]).length===storyCount?PASS:FAIL,'All stories include audioMetadata.noMicRequired true');
add((seedText.match(/sacredRespectLevel:/g)||[]).length===storyCount?PASS:FAIL,'All stories include sacredRespectLevel');
add(!/storyPackId:\s*'((?!ramayana-journey-pack-1).)*'/.test(seedText)?PASS:FAIL,'All stories use storyPackId ramayana-journey-pack-1');
add(!/journeyId:\s*'((?!ramayana-journey-pack-1).)*'/.test(seedText)?PASS:FAIL,'All stories use journeyId ramayana-journey-pack-1');
add(/category:\s*'ramayana'/.test(regText)?PASS:FAIL,'Story pack category is ramayana');
add(/id:\s*'ramayana-journey-pack-1'/.test(regText)&&/ramayanaPack1Journey/.test(regText)?PASS:FAIL,'Journey exists for ramayana-journey-pack-1');

const banned=/\b(xp|coins|streaks|leaderboards|rankings)\b/i;
add(!banned.test(seedText)?PASS:FAIL,'No hard gamification terms in Ramayana stories');
add(!/Story Library/i.test(seedText+docsText+crText)?PASS:FAIL,'No Story Library regression');
const panelTexts=[...seedText.matchAll(/text:\s*'([^']+)'/g)].map((m)=>m[1]).join('\n');
const unsafe=/graphic violence|war-heavy|kidnapping|trauma|blood|punishment-heavy/i;
add(!unsafe.test(panelTexts)?PASS:FAIL,'No unsafe violence/war/trauma language in Ramayana panels');
add(!/funny monkey|joke god|silly deity|cartoon deity/i.test(seedText)?PASS:FAIL,'No over-comedic deity treatment');
add(!/preview.*status:\s*'available'|status:\s*'available'.*preview/is.test(seedText+regText)?PASS:FAIL,'No preview scaffold stories marked available');
add(/qa_ready|runtime_ready|available/.test(seedText)&&/runtimeAvailabilityGated:\s*true/.test(regText)?PASS:FAIL,'Runtime availability gated by status and editorial QA');

const sections=['PR title and purpose','Roadmap alignment','Why Ramayana Journey Pack 1 is first','Content scope','Stories included','Age-band strategy','Sacred/cultural respect approach','Parent trust approach','Editorial QA expectations','Runtime availability rules','Relationship to Content Model v2','Relationship to Content Registry','Relationship to Editorial QA Validator v1','Relationship to Runtime Story Resolver v2','Relationship to Journey Data Model v1','Local-first/no-backend assumptions','What this PR changes','What this PR does not do','Follow-up recommendations for PR #126 and PR #127','Final PR #125 readiness statement'];
sections.forEach((s)=>add(docsText.includes(s)?PASS:FAIL,`Docs section present: ${s}`));
add(docsText.includes('PR #126: Krishna Childhood Pack 1')?PASS:FAIL,'Follow-up includes PR #126');
add(docsText.includes('PR #127: Ganesha Wisdom Pack 1')?PASS:FAIL,'Follow-up includes PR #127');

add(!exists('app/world/ramayana-journey-pack-1.tsx')?PASS:FAIL,'No new app routes for Ramayana pack');
const worlds=exists('app/(child)/worlds.tsx')?read('app/(child)/worlds.tsx'):'';
add(worlds.includes('Krishna Stories')&&worlds.includes('Festival Stories')?PASS:FAIL,'No Story World doorway order change (spot check)');
add(!/(supabase|fetch\(|axios|payment|checkout|microphone|recording|expo-audio|expo-av)/i.test(seedText+regText+crText)?PASS:FAIL,'No backend/auth/payment/mic/recording/network implementation');
add(!/screen[-_ ]?(42[4-9]|4[3-8][0-9]|487)/i.test((exists('app')?fs.readdirSync(resolve('app')).join('\n'):'')+(exists('src')?fs.readdirSync(resolve('src')).join('\n'):''))?PASS:FAIL,'No Screens 424–487 runtime files in app/ or src');
const childRoutes=['app/(child)/worlds.tsx','app/(child)/today.tsx','app/(child)/treasures.tsx'].filter(exists).map(read).join('\n');
add(!/Story Library/i.test(childRoutes)?PASS:FAIL,'Child-facing active routes use Story World language');

if((seedText.match(/status:\s*'qa_ready'/g)||[]).length===storyCount){add(WARN,'All Ramayana stories are qa_ready and may not be runtime available yet (acceptable for PR #125).')}

for (const c of checks) console.log(`${c.s}: ${c.m}`);
if (checks.some((c)=>c.s===FAIL)) process.exit(1);
