import fs from 'node:fs';

const mustRead = (path) => {
  if (!fs.existsSync(path)) throw new Error(`Missing required file: ${path}`);
  return fs.readFileSync(path, 'utf8');
};

const storyRoutePath = 'app/story/[slug].tsx';
const storyRoute = mustRead(storyRoutePath);
const audit = mustRead('docs/LITTLE_DHARMA_IMPLEMENTED_ROUTE_VISUAL_AUDIT.md');
const taskLog = mustRead('docs/TASK_LOG.md');

if (!storyRoute.includes('Begin Story') && !storyRoute.includes('Read Story')) throw new Error('Story detail CTA missing Begin Story/Read Story language.');
if (!/Reader|Section\s+\{panelIndex \+ 1\}|Back|Next/.test(storyRoute)) throw new Error('Story reader runtime language missing.');
if (!/You completed a beautiful story|gentle blessing|Back to Story World/i.test(storyRoute)) throw new Error('Completion/blessing language missing.');
if (!/(Luvlu|🦚).*(guide|helper|blessing)|((guide|helper|blessing).*(Luvlu|🦚))/i.test(storyRoute)) throw new Error('Luvlu guide/helper presence missing.');
if (!/quiet helper/i.test(storyRoute) || !/blessing support/i.test(storyRoute)) throw new Error('Luvlu quiet/helper/completion state language missing.');

if (/Listen with Luvlu/i.test(storyRoute) && !/coming soon|disabled|future/i.test(storyRoute)) throw new Error('Listen with Luvlu can only appear with coming soon/disabled/future language.');

const forbidden = /microphone|voice command|recording|child speech capture|AI conversation|\bXP\b|coins?|streaks?|rankings?|leaderboards?|total points|completion rate|dashboard score|backend|auth|cloud sync|CMS|analytics|telemetry/i;
if (forbidden.test(storyRoute)) throw new Error('Forbidden scope or hard-gamification terms found in story route.');

for (const refs of ['22–28', '86–95', '186–195', '336–347', '430', '444–448', '452', '454–455', '458–461', '462–469', '487']) {
  if (!audit.includes(refs)) throw new Error(`Audit doc missing reference IDs: ${refs}`);
}
if (!/Luvlu declaration/i.test(audit) || !/Luvlu shown:\s*\*\*yes\*\*/i.test(audit)) throw new Error('Audit missing Luvlu declaration.');
if (!/audio guide is a future product direction/i.test(audit)) throw new Error('Audit missing Luvlu audio future boundary.');
if (!/Sprint 80 not started/i.test(audit)) throw new Error('Audit must confirm Sprint 80 not started.');
if (!/Sprint 79 completed/i.test(taskLog)) throw new Error('TASK_LOG append entry for Sprint 79 missing.');

console.log('validate-story-detail-reader-completion-reconstruction-v1: PASS');
