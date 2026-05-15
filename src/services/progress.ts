import { getWorldProgress } from '@/lib/storyProgress';
import { getVrindavanJourneyPath } from '@/services/journeys';

export async function getParentDashboardSnapshot() {
  const stories = getVrindavanJourneyPath();
  const worldProgress = await getWorldProgress('vrindavan', stories);

  return {
    currentWorld: 'Vrindavan',
    storiesCompleted: worldProgress.completedStories,
    totalStories: worldProgress.totalStories,
    latestEarnedBadge: worldProgress.latestCompletedStory?.story.badgeName ?? 'No badge yet',
    latestValueLearned: worldProgress.latestCompletedStory?.story.value ?? 'No value completed yet',
    latestRitualCompleted: worldProgress.latestCompletedStory?.story.ritual.microShlokaTitle ?? 'No ritual completed yet',
    suggestedNextJourney: worldProgress.nextIncompleteStory?.story.title ?? 'Vrindavan path completed for now',
    dailyRitualCopy:
      worldProgress.isCompleted
        ? 'You completed the current Vrindavan path. Revisit stories to keep the daily ritual warm and joyful.'
        : 'A calm 10-minute daily ritual is building beautifully—one story, one value, one reflection at a time.',
    reflectionBridgeCopy: 'Use the reflection prompt tonight for a 2-minute family conversation.'
  };
}
