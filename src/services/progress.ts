import { getAllStoryCompletions, getLatestCarryingWord, getWorldProgress } from '@/lib/storyProgress';
import { getVrindavanJourneyPath } from '@/services/journeys';



type WeeklyProgressSummary = {
  completedDays: number;
  remainingDays: number;
  completionLabel: string;
  practicedValues: string[];
  parentSummary: string;
};

function buildWeeklyProgressSummary(stories: ReturnType<typeof getVrindavanJourneyPath>, completedSlugs: Set<string>): WeeklyProgressSummary {
  const practicedValues = stories
    .filter((packet) => completedSlugs.has(packet.story.slug))
    .map((packet) => packet.story.value)
    .filter((value, index, all) => all.indexOf(value) === index);

  const completedStoryCount = stories.filter((packet) => completedSlugs.has(packet.story.slug)).length;
  const completedDays = Math.min(stories.length, completedStoryCount);
  const remainingDays = Math.max(stories.length - completedDays, 0);

  const parentSummary =
    completedDays === 0
      ? 'This week has just begun. One calm 10-minute story ritual today starts the Vrindavan rhythm.'
      : remainingDays === 0
        ? 'Your child completed all seven Vrindavan days this week. Celebrate the values practiced and revisit favorite stories to keep the ritual warm.'
        : `Your child completed ${completedDays} of 7 Vrindavan days this week. ${remainingDays} day${remainingDays === 1 ? '' : 's'} remain for a full family ritual week.`;

  return {
    completedDays,
    remainingDays,
    completionLabel: `${completedDays}/7 days completed`,
    practicedValues,
    parentSummary
  };
}

export async function getParentDashboardSnapshot() {
  const stories = getVrindavanJourneyPath();
  const worldProgress = await getWorldProgress('vrindavan', stories);
  const allCompletions = await getAllStoryCompletions();
  const completedSlugs = new Set(Object.keys(allCompletions));
  const weeklyProgress = buildWeeklyProgressSummary(stories, completedSlugs);
  const latestStory = worldProgress.latestCompletedStory?.story ?? null;
  const latestCarryingWord = await getLatestCarryingWord(stories);

  return {
    currentWorld: 'Vrindavan',
    storiesCompleted: worldProgress.completedStories,
    totalStories: worldProgress.totalStories,
    completionPercent: worldProgress.totalStories === 0 ? 0 : Math.round((worldProgress.completedStories / worldProgress.totalStories) * 100),
    latestCompletedStoryTitle: latestStory?.title ?? 'No story completed yet',
    latestEarnedBadge: latestStory?.badgeName ?? 'No badge yet',
    latestValueLearned: latestStory?.value ?? 'No value completed yet',
    latestCarryingWord: latestCarryingWord ?? latestStory?.value ?? 'No carrying word yet',
    latestRitualCompleted: latestStory?.ritual.microShlokaTitle ?? 'No ritual completed yet',
    latestRitualParentMeaning:
      latestStory?.ritual.parentMeaning ?? 'After your next story, you will see a gentle note about why this value matters in everyday family life.',
    latestReflectionPrompt: latestStory?.parentReflectionPrompt ?? 'After your next story, ask your child what value they practiced and where they can use it at home tonight.',
    suggestedNextJourney: worldProgress.nextIncompleteStory?.story.title ?? 'Vrindavan path completed for now',
    dailyRitualCopy:
      worldProgress.isCompleted
        ? 'You completed the current Vrindavan path. Revisit stories to keep the daily ritual warm and joyful.'
        : 'A calm 10-minute daily ritual is building beautifully—one story, one value, one reflection at a time.',
    reflectionBridgeCopy: 'Use tonight’s conversation starter for a gentle 2-minute family reflection.',
    ritualLoopExplanation:
      'Daily ritual loop: Story (imagination) → Value (character) → Shloka/chant seed (memory) → Reflection (family conversation).',
    privacyPromise: 'Private by default on this device: local progress only, no ads, no public child profile, no leaderboard, and no open chat.',
    weeklyProgress
  };
}
