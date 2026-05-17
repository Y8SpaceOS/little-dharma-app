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
      ? 'Your family journey is just beginning. One calm 10-minute story tonight is a beautiful start.'
      : remainingDays === 0
        ? 'Your child completed the full 21-story Vrindavan path. Celebrate gently, revisit favorite stories, and carry one value into the week.'
        : `Your child has completed ${completedDays} of 21 stories so far. ${remainingDays} ${remainingDays === 1 ? 'story remains' : 'stories remain'} in this path.`;

  return {
    completedDays,
    remainingDays,
    completionLabel: `${completedDays}/21 stories completed`,
    practicedValues,
    parentSummary
  };
}

function getLatestMeaningfulCompletion(
  stories: ReturnType<typeof getVrindavanJourneyPath>,
  completions: Awaited<ReturnType<typeof getAllStoryCompletions>>
) {
  const completedStories = stories.filter((story) => Boolean(completions[story.story.slug]));
  const validDated = completedStories
    .map((story) => {
      const date = Date.parse(completions[story.story.slug].completedAt);
      return Number.isFinite(date) ? { story, date } : null;
    })
    .filter((entry): entry is { story: (typeof stories)[number]; date: number } => entry !== null)
    .sort((a, b) => b.date - a.date);

  if (validDated.length > 0) {
    return validDated[0].story;
  }

  return completedStories[completedStories.length - 1] ?? null;
}

export async function getParentDashboardSnapshot() {
  const stories = getVrindavanJourneyPath();
  const worldProgress = await getWorldProgress('vrindavan', stories);
  const allCompletions = await getAllStoryCompletions();
  const completedSlugs = new Set(Object.keys(allCompletions));
  const weeklyProgress = buildWeeklyProgressSummary(stories, completedSlugs);
  const latestStory = getLatestMeaningfulCompletion(stories, allCompletions) ?? worldProgress.latestCompletedStory?.story ?? null;
  const latestCarryingWord = await getLatestCarryingWord(stories);

  return {
    currentWorld: 'Vrindavan',
    storiesCompleted: worldProgress.completedStories,
    totalStories: worldProgress.totalStories,
    completionPercent: worldProgress.totalStories === 0 ? 0 : Math.round((worldProgress.completedStories / worldProgress.totalStories) * 100),
    latestCompletedStoryTitle: latestStory?.story.title ?? 'No story completed yet',
    latestEarnedBadge: latestStory?.story.badgeName ?? 'No badge yet',
    latestValueLearned: latestStory?.story.value ?? 'No value completed yet',
    latestCarryingWord: latestCarryingWord ?? latestStory?.story.value ?? 'No carrying word yet',
    latestRitualCompleted: latestStory?.story.ritual.microShlokaTitle ?? 'No ritual completed yet',
    latestRitualParentMeaning:
      latestStory?.story.ritual.parentMeaning ?? 'After your next story, you will see a gentle note about why this value matters in everyday family life.',
    latestReflectionPrompt: latestStory?.story.parentReflectionPrompt ?? 'After your next story, ask your child what value they practiced and where they can use it at home tonight.',
    suggestedNextJourney: worldProgress.nextIncompleteStory?.story.title ?? 'Vrindavan 21-story path completed',
    dailyRitualCopy:
      worldProgress.isCompleted
        ? 'You completed the 21-story Vrindavan path. Revisit any story, repeat one small ritual, and choose one carrying word for the week.'
        : 'A calm 10-minute daily ritual can continue gently—one story, one value, one reflection at a time.',
    reflectionBridgeCopy: worldProgress.isCompleted ? 'Ask which value felt most alive this week and where your family wants to practice it together.' : 'Use tonight’s conversation prompt for a warm two-minute reflection together.',
    ritualLoopExplanation:
      'Daily ritual loop: Story (imagination) → Value (character) → Shloka seed (memory) → Reflection (family conversation).',
    privacyPromise: 'Private by default on this device: local progress only, no ads, no public child profile, no leaderboard, and no tracking analytics.',
    weeklyProgress
  };
}
