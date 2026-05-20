import fs from 'fs';

const must = (p) => {
  if (!fs.existsSync(p)) throw new Error(`Missing required file: ${p}`);
  return fs.readFileSync(p, 'utf8');
};

const index = must('app/index.tsx');
const onboarding = must('app/onboarding.tsx');
const gate = must('app/(parent)/profiles.tsx');
const qa = must('docs/LITTLE_DHARMA_ONBOARDING_APP_SHELL_VISUAL_PARITY_V1_QA.md');
const audit = must('docs/LITTLE_DHARMA_IMPLEMENTED_ROUTE_VISUAL_AUDIT.md');
const queue = must('docs/MASTER_SPRINT_QUEUE.md');
const roadmap = must('docs/content/post-foundation-product-build-roadmap.csv');

const docsScoped = `${qa}\n${audit}`;
const appScoped = `${index}\n${onboarding}`;

if (!/LinearGradient/.test(index) || !/(warm|calm|cream|saffron|lotus|story world)/i.test(index)) throw new Error('app/index.tsx must include warm entry surface language');
if (!/Little Dharma/.test(index) || !/🪔🌸☀️/.test(index)) throw new Error('app/index.tsx must include Little Dharma brand entry with diya-lotus-sun');
if (!/Luvlu|🦚/.test(index)) throw new Error('app/index.tsx must include Luvlu runtime presence');
if (!/Begin Little Dharma/.test(index)) throw new Error('app/index.tsx must include Begin Little Dharma CTA');
if (!/Reset Onboarding \(Local QA\)/.test(index)) throw new Error('app/index.tsx must include QA reset path');

const moments = [
  /Welcome to Little Dharma/,
  /Parent promise \/ safe spiritual story world/,
  /Meet Luvlu the Peacock/,
  /Choose child age band, not exact DOB/,
  /Choose comfort\/content preferences/,
  /Preview Story World \/ Dharma Journeys lightly/,
  /Local-first \/ privacy-safe trust/,
  /Parent\/grown-up handoff/
];
for (const re of moments) if (!re.test(onboarding)) throw new Error(`Missing onboarding moment: ${re}`);

if (!/age band, not exact DOB/i.test(onboarding) || /date of birth \(dd|dob \d{1,2}\/\d{1,2}|mm\/dd\/yyyy/i.test(onboarding)) throw new Error('onboarding must use age-band approach and avoid exact DOB requests');
if (!/local-first|privacy-safe/i.test(onboarding)) throw new Error('onboarding must include local-first/privacy-safe language');
if (!/Luvlu|guide\/helper|🦚/i.test(onboarding)) throw new Error('onboarding must include Luvlu as guide/helper');
if (!/\/\(parent\)\/profiles/.test(onboarding + gate)) throw new Error('typed parent route /(parent)/profiles must remain');

if (!/01–08/.test(docsScoped) || !/146–155/.test(docsScoped) || !/306–315/.test(docsScoped) || !/424–443/.test(docsScoped) || !/454/.test(docsScoped) || !/461/.test(docsScoped) || !/487/.test(docsScoped)) throw new Error('docs must include required reference screen ranges');
if (!/Luvlu declaration/i.test(docsScoped) || !/Luvlu shown:\s*\*\*yes\*\*/i.test(docsScoped)) throw new Error('docs must include Luvlu declaration');
if (!/Sprint 78[^\n]*not started/i.test(docsScoped + '\n' + queue)) throw new Error('docs must include Sprint 78 not started');
if (!/no hard gamification/i.test(docsScoped) || !/No backend\/auth\/cloud sync\/CMS\/analytics\/telemetry/i.test(docsScoped)) throw new Error('docs must include no hard gamification and no backend expansion guardrails');
if (!/78,Story Detail \+ Content Runtime Visual Integration v1,[^\n]*,not_started,/.test(roadmap)) throw new Error('Sprint 78 must remain not_started in roadmap CSV');
if (/\/parent-gate|\/(parent)\/gate/.test(appScoped + docsScoped)) throw new Error('invalid parent route alias found');

console.log('Sprint 77B onboarding + app shell visual parity validator passed.');
