import { getWorldProgress } from '@/lib/storyProgress';
import { getVrindavanJourneyPath } from '@/services/journeys';

export async function getParentDashboardSnapshot() {
  const stories = getVrindavanJourneyPath();
  const worldProgress = await getWorldProgress('vrindavan', stories);
  const latestStory = worldProgress.latestCompletedStory?.story ?? null;

  return {
    currentWorld: 'Vrindavan',
    storiesCompleted: worldProgress.completedStories,
    totalStories: worldProgress.totalStories,
    completionPercent: worldProgress.totalStories === 0 ? 0 : Math.round((worldProgress.completedStories / worldProgress.totalStories) * 100),
    latestCompletedStoryTitle: latestStory?.title ?? 'No story completed yet',
    latestEarnedBadge: latestStory?.badgeName ?? 'No badge yet',
    latestValueLearned: latestStory?.value ?? 'No value completed yet',
    latestRitualCompleted: latestStory?.ritual.microShlokaTitle ?? 'No ritual completed yet',
    latestReflectionPrompt: latestStory?.parentReflectionPrompt ?? 'After your next story, ask your child what value they practiced and where they can use it at home tonight.',
    suggestedNextJourney: worldProgress.nextIncompleteStory?.story.title ?? 'Vrindavan path completed for now',
    dailyRitualCopy:
      worldProgress.isCompleted
        ? 'You completed the current Vrindavan path. Revisit stories to keep the daily ritual warm and joyful.'
        : 'A calm 10-minute daily ritual is building beautifully—one story, one value, one reflection at a time.',
    reflectionBridgeCopy: 'Use tonight’s conversation starter for a gentle 2-minute family reflection.',
    ritualLoopExplanation:
      'Daily ritual loop: Story (imagination) → Value (character) → Shloka/chant seed (memory) → Reflection (family conversation).',
    privacyPromise: 'Private by default on this device: local progress only, no ads, no public child profile, no leaderboard, and no open chat.'
  };
}
