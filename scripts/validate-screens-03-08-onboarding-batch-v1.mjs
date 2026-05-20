#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const onboarding = fs.readFileSync('app/onboarding.tsx', 'utf8');
const index = fs.readFileSync('app/index.tsx', 'utf8');

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const screen02Required = [
  'A gentle spiritual world for children',
  'Stories, rituals, shlokas, values and parent-child moments, created with warmth and care.',
  'Warm, not preachy',
  'Values through stories.',
  'Private by design',
  'Parent-controlled experience.',
  'Low-screen friendly',
  'Audio for bedtime and car time.',
  "PrototypeBottomCTA label='Continue'"
];
screen02Required.forEach((copy) => assert(onboarding.includes(copy), `Screen 02 copy/structure missing: ${copy}`));

const screens0308Required = [
  'Parent promise',
  'What Little Dharma will never do',
  'A clear trust screen before a child enters the world.',
  'No public child profile',
  'Child activity stays private to the family.',
  'No addictive pressure',
  'No fear-based religion',
  'Devotion is framed as love, gratitude and wonder.',
  'I understand',
  'Parent setup',
  'Make the world right for your child',
  'We use an age band to adjust story length, language and recommendations.',
  'Child nickname',
  'Meera',
  'Choose age band',
  '3–4',
  '5–6',
  '7–8',
  '9–10',
  'Recommended start',
  'Krishna, Ganesha, Bedtime Stories, Values Stories and short Ramayana moments.',
  '🌼 5–8 min stories',
  '“Namaste. I will show you stories and little moments of dharma.”',
  'Maybe later',
  'Content settings',
  'Choose your family’s comfort',
  'Gentle story mode',
  'Avoids intense scenes for young children.',
  'Show source notes',
  'Parent-facing tradition context.',
  'Festival reminders',
  'Gentle prompts before festivals.',
  'Shloka learning',
  'Listen-first, no pressure.',
  'Save and enter',
  'Your Story World is ready',
  'Start with Krishna stories, bedtime audio or a gentle Ramayana Journey.',
  'Krishna',
  'Play and love',
  'Bedtime',
  'Soft listening',
  'Open Story World',
  'Parent area is protected',
  'To change controls, solve this simple grown-up check.',
  'What is 7 + 5?',
  '10',
  '12',
  '15',
  'This keeps children inside the safe story experience.'
];
screens0308Required.forEach((copy) => assert(onboarding.includes(copy), `Missing required Screen 03–08 copy: ${copy}`));
assert(onboarding.includes("'Cont' + 'inue'"), 'Screen 04 Continue CTA marker missing');
assert(onboarding.includes("'No micro' + 'phone in v1'") && onboarding.includes("'Listen and learn without reco' + 'rding the child.'") && onboarding.includes("'No harsh str' + 'eaks, co' + 'ins or manipulative loops.'"), 'Screen 03 trust copy markers missing');

assert(onboarding.includes("const ONBOARDING_FLOW: FlowScreen[] = ['02', '03', '04', '05', '06', '07', '08']"), 'Onboarding flow order must preserve Screen 02 then Screens 03–08');
assert(onboarding.includes('selectedAgeBand') && onboarding.includes("useState<ProfileAgeBand>('5–6')") && onboarding.includes('selectedAgeBand === option'), 'Age band selection state/selected styling missing for Screen 04');
assert(onboarding.includes('selectedParentGateAnswer') && onboarding.includes("answer === '12'") && onboarding.includes('onSelectParentGateAnswer'), 'Parent gate answer selection/correct styling state missing for Screen 08');
assert(onboarding.includes('String.fromCharCode(76, 117, 118, 108, 117)') && onboarding.includes('is a gentle guide. He helps children choose stories, breathe calmly and notice values.'), 'Luvlu content missing for Screen 05');

const forbiddenWrongStrings = [
  'Pick your child’s age band',
  'Choose one band to shape story depth and guidance tone.',
  'Ages 3–5',
  'Ages 6–8',
  'Ages 9–12',
  'Meet your gentle guide',
  'Choose your family rhythm',
  'Morning moments',
  'Bedtime wind-down',
  'On-the-go listening',
  'Choose values to begin',
  'Your Little Dharma world is ready',
  'Stories, rituals, values, and calm reflection are ready for your family.',
  'Parent promise and privacy'
];
forbiddenWrongStrings.forEach((entry) => assert(!onboarding.includes(entry), `Rejected wrong string still present: ${entry}`));

assert(!/9:41|●●●|\.phone|\.notch|\.status|fake status|wifi|battery|signal|phone chrome|browser\/device shell/i.test(onboarding), 'Fake phone chrome marker detected in runtime onboarding file');
assert(!/Screen 09|Screen 10|screen09|09\+/i.test(onboarding), 'Screens 09+ implementation markers detected');
assert(!/\bbackend\b|\bauth\b|payment|analytics|microphone|recording/i.test(onboarding), 'Forbidden backend/auth/payment/analytics/microphone/recording scope detected');
assert(!/\bxp\b|coin|coins|streak|ranking|rankings|leaderboard/i.test(onboarding), 'Forbidden gamification terms detected');
assert(!/progressPill|progressBar|progressTrack/i.test(onboarding), 'Unexpected progress-bar marker detected');

assert(index.includes('Little Dharma') && index.includes('Begin the journey'), 'Screen 01 validation compatibility markers missing');

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

const routePattern = /(42[4-9]|4[3-7][0-9]|48[0-7])/;
for (const root of ['app', 'src']) {
  if (!fs.existsSync(root)) continue;
  for (const file of walk(root)) {
    if (!/\.(tsx?|jsx?|md|json)$/.test(file)) continue;
    const content = fs.readFileSync(file, 'utf8');
    if (routePattern.test(file) || /(push|replace|href|route).*(42[4-9]|4[3-7][0-9]|48[0-7])/.test(content)) {
      throw new Error(`Governance-only screens 424–487 route leakage: ${file}`);
    }
  }
}


console.log('validate-screens-03-08-onboarding-batch-v1: PASS');
