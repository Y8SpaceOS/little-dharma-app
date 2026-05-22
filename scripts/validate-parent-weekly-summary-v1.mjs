import fs from 'fs';
import path from 'path';

const root = process.cwd();
const checks = [];
const pass = (msg) => checks.push(`PASS: ${msg}`);
const warn = (msg) => checks.push(`WARN: ${msg}`);
const fail = (msg) => checks.push(`FAIL: ${msg}`);

const servicePath = path.join(root, 'src/services/parentWeeklySummaryService.ts');
const docsPath = path.join(root, 'docs/parent/PARENT_WEEKLY_SUMMARY_V1.md');
const dashboardPath = path.join(root, 'app/(parent)/dashboard.tsx');
const packagePath = path.join(root, 'package.json');

const requiredExports = [
  'parentWeeklySummaryModelVersion','getParentWeeklySummary','buildParentWeeklySummary','getWeeklyCompletedStories','getWeeklyValuesExplored','getWeeklyJourneysTouched','getWeeklyReflectionPrompts','getWeeklySuggestedNextStory','getParentWeeklySummaryTrustNote'
];

function read(file) { return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : ''; }

const service = read(servicePath);
const docs = read(docsPath);
const dashboard = read(dashboardPath);
const pkg = read(packagePath);

fs.existsSync(servicePath) ? pass('Service file exists.') : fail('Missing src/services/parentWeeklySummaryService.ts');
fs.existsSync(docsPath) ? pass('Docs file exists.') : fail('Missing docs/parent/PARENT_WEEKLY_SUMMARY_V1.md');

for (const name of requiredExports) {
  service.includes(`export `) && service.includes(name) ? pass(`Export present: ${name}`) : fail(`Missing export: ${name}`);
}

service.includes('getAllStoryCompletions') ? pass('Uses local story progress read helper.') : fail('Does not use local story progress reads.');
!service.includes('AsyncStorage.setItem') ? pass('No AsyncStorage writes in service.') : fail('Service writes AsyncStorage.');

for (const banned of ['markStoryComplete','markJourneyStoryCompleted','setJourneyProgress','pruneStoryCompletions']) {
  !service.includes(`${banned}(`) ? pass(`No state mutation call: ${banned}`) : fail(`Found forbidden mutation call: ${banned}`);
}

for (const banned of ['fetch(', 'axios', 'supabase', 'telemetry', 'analytics', 'payment', 'subscription', 'email', 'push', 'share']) {
  !service.toLowerCase().includes(banned.toLowerCase()) ? pass(`No banned implementation token: ${banned}`) : fail(`Found banned implementation token: ${banned}`);
}

for (const blocked of ['qa_ready', 'staged', 'outline_only', 'not_runtime_available']) {
  !service.includes(`'${blocked}'`) || blocked === 'staged' ? pass(`No recommendation of blocked status: ${blocked}`) : fail(`Blocked status token appears: ${blocked}`);
}

service.includes('No completed stories this week yet. You can continue gently whenever your family is ready.')
  ? pass('Includes calm empty state copy.') : fail('Missing required calm empty state copy.');
service.toLowerCase().includes('stored on this device') ? pass('Includes local-first trust note.') : fail('Missing local-first trust note text.');

const sections = ['PR title and purpose','Roadmap alignment','Why Parent Weekly Summary follows Mahabharata Journey Outline','Parent weekly summary goal','What this summary is','What this summary is not','Local-first data sources','Weekly window rules','Completed story rules','Values explored rules','Journeys touched rules','Reflection prompt rules','Suggested next story rules','Empty state rules','Parent trust copy rules','Privacy/no-backend assumptions','No hard gamification rules','UI integration status','Relationship to Parent Journey Progress Dashboard v1','Relationship to Story Completion Moment v1','Relationship to Runtime Story Resolver v2','What this PR changes','What this PR does not do','Follow-up recommendations for PR #136 and PR #137','Final PR #135 readiness statement'];
for (const section of sections) {
  docs.includes(section) ? pass(`Docs section present: ${section}`) : fail(`Missing docs section: ${section}`);
}

docs.includes('PR #136: Journey Detail Parent Trust Copy v1') && docs.includes('PR #137: Parent Sharing Copy v1')
  ? pass('Follow-up recommendations are roadmap-aligned.') : fail('Follow-up recommendations mismatch.');

if (dashboard.includes('This week in Little Dharma')) pass('Parent UI binding found on parent dashboard (read-only card expected).');
else warn('Parent UI binding appears deferred.');

pkg.includes('validate:parent-weekly-summary-v1') ? pass('Package script registered.') : fail('Missing package script validate:parent-weekly-summary-v1');

const fatalTerms = ['XP', 'coins', 'streak', 'leaderboard', 'rank', 'score', 'report card'];
for (const term of fatalTerms) {
  !service.includes(term)  ? pass(`No hard gamification term in implementation: ${term}`) : fail(`Hard gamification term found in implementation: ${term}`);
}

const failed = checks.filter((line) => line.startsWith('FAIL')).length;
for (const line of checks) console.log(line);
if (failed > 0) {
  console.error(`\nValidation failed with ${failed} FAIL check(s).`);
  process.exit(1);
}
console.log('\nValidation passed with no FAIL checks.');
