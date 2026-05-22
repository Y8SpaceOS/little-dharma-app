import { getAllJourneyProgress } from '@/lib/journeyProgress';
import { getAllStoryCompletions } from '@/lib/storyProgress';
import { getDharmaJourneys } from '@/services/dharmaJourneyService';

export const parentWeeklySummaryModelVersion = 'pr135-parent-weekly-summary-v1';

const weeklyEmptyStateCopy = 'No completed stories this week yet. You can continue gently whenever your family is ready.';
const trustNoteCopy = 'This weekly summary is stored on this device and built from local progress only.';

type WeeklyWindow = { start: Date; end: Date };

export type ParentWeeklyCompletedStory = {
  storySlug: string;
  storyTitle: string;
  completedAt: string;
  valueLabel: string;
  journeyId: string | null;
  journeyTitle: string | null;
};

export type ParentWeeklySummary = {
  modelVersion: string;
  generatedAtLocal: string;
  periodLabel: string;
  periodStartLocal: string;
  periodEndLocal: string;
  completedStoryCount: number;
  completedStories: ParentWeeklyCompletedStory[];
  valuesExplored: string[];
  journeysTouched: { journeyId: string; journeyTitle: string }[];
  reflectionPrompts: string[];
  suggestedNextStory: { slug: string; title: string; journeyId: string; journeyTitle: string } | null;
  parentSummaryText: string;
  trustNote: string;
  emptyState: string | null;
  accessibilityLabel: string;
  accessibilityHint: string;
};

function getWeeklyWindow(windowDays = 7): WeeklyWindow {
  const end = new Date();
  const start = new Date(end);
  start.setDate(start.getDate() - windowDays);
  return { start, end };
}

function toLabel(window: WeeklyWindow): string {
  return `Last 7 days (${window.start.toLocaleDateString()} - ${window.end.toLocaleDateString()})`;
}

export async function getWeeklyCompletedStories(windowDays = 7): Promise<ParentWeeklyCompletedStory[]> {
  const [completions, journeys] = await Promise.all([getAllStoryCompletions(), Promise.resolve(getDharmaJourneys())]);
  const journeyBySlug = new Map<string, { id: string; title: string; valueMap: Map<string, string> }>();

  journeys.forEach((journey) => {
    const valueMap = new Map(journey.storyRefs.map((ref) => [ref.slug, ref.primaryValue]));
    journey.storyRefs.forEach((ref) => {
      journeyBySlug.set(ref.slug, { id: journey.id, title: journey.title, valueMap });
    });
  });

  const { start, end } = getWeeklyWindow(windowDays);
  return Object.entries(completions)
    .map(([storySlug, entry]) => {
      const journeyMeta = journeyBySlug.get(storySlug);
      const completedAt = new Date(entry.completedAt);
      const valueLabel = entry.valueWord || journeyMeta?.valueMap.get(storySlug) || 'Dharma';
      return {
        storySlug,
        storyTitle: journeyMeta?.valueMap.has(storySlug)
          ? journeys.flatMap((j) => j.storyRefs).find((ref) => ref.slug === storySlug)?.title ?? storySlug
          : storySlug,
        completedAt: entry.completedAt,
        valueLabel,
        journeyId: journeyMeta?.id ?? null,
        journeyTitle: journeyMeta?.title ?? null,
        _completedAtDate: completedAt
      };
    })
    .filter((item) => !Number.isNaN(item._completedAtDate.getTime()) && item._completedAtDate >= start && item._completedAtDate <= end)
    .sort((a, b) => b._completedAtDate.getTime() - a._completedAtDate.getTime())
    .map(({ _completedAtDate: _ignored, ...safe }) => safe);
}

export function getWeeklyValuesExplored(completedStories: ParentWeeklyCompletedStory[]): string[] {
  return Array.from(new Set(completedStories.map((story) => story.valueLabel).filter(Boolean)));
}

export function getWeeklyJourneysTouched(completedStories: ParentWeeklyCompletedStory[]): { journeyId: string; journeyTitle: string }[] {
  const seen = new Set<string>();
  return completedStories
    .filter((item): item is ParentWeeklyCompletedStory & { journeyId: string; journeyTitle: string } => Boolean(item.journeyId && item.journeyTitle))
    .filter((item) => {
      if (seen.has(item.journeyId)) return false;
      seen.add(item.journeyId);
      return true;
    })
    .map((item) => ({ journeyId: item.journeyId, journeyTitle: item.journeyTitle }));
}

export function getWeeklyReflectionPrompts(valuesExplored: string[]): string[] {
  const prompts = valuesExplored.slice(0, 3).map((value) => `Where did your child show ${value.toLowerCase()} this week?`);
  return prompts.length > 0 ? prompts : ['What gentle reflection would feel supportive for your family this week?'];
}

export async function getWeeklySuggestedNextStory(completedStories: ParentWeeklyCompletedStory[]): Promise<{ slug: string; title: string; journeyId: string; journeyTitle: string } | null> {
  const journeys = getDharmaJourneys();
  const [storyCompletions, journeyProgress] = await Promise.all([getAllStoryCompletions(), getAllJourneyProgress()]);
  const completedSet = new Set<string>([...Object.keys(storyCompletions), ...Object.values(journeyProgress).flatMap((j) => j.completedStoryIds)]);

  const preferredJourneyIds = new Set(completedStories.map((item) => item.journeyId).filter(Boolean));
  const orderedJourneys = [
    ...journeys.filter((journey) => preferredJourneyIds.has(journey.id)),
    ...journeys.filter((journey) => !preferredJourneyIds.has(journey.id))
  ];

  for (const journey of orderedJourneys) {
    const next = journey.storyRefs.find(
      (ref) => ref.isRuntimeAvailable && !completedSet.has(ref.slug) && !completedSet.has(ref.storyId) && (ref.status === 'runtime_ready' || ref.status === 'available')
    );
    if (next) return { slug: next.slug, title: next.title, journeyId: journey.id, journeyTitle: journey.title };
  }

  return null;
}

export function getParentWeeklySummaryTrustNote(): string {
  return trustNoteCopy;
}

export async function buildParentWeeklySummary(windowDays = 7): Promise<ParentWeeklySummary> {
  const window = getWeeklyWindow(windowDays);
  const completedStories = await getWeeklyCompletedStories(windowDays);
  const valuesExplored = getWeeklyValuesExplored(completedStories);
  const journeysTouched = getWeeklyJourneysTouched(completedStories);
  const reflectionPrompts = getWeeklyReflectionPrompts(valuesExplored);
  const suggestedNextStory = await getWeeklySuggestedNextStory(completedStories);
  const emptyState = completedStories.length === 0 ? weeklyEmptyStateCopy : null;

  const parentSummaryText = completedStories.length > 0
    ? `${completedStories.length} stories completed. Values explored: ${valuesExplored.join(', ') || 'Dharma'}. Continue when ready.`
    : weeklyEmptyStateCopy;

  return {
    modelVersion: parentWeeklySummaryModelVersion,
    generatedAtLocal: new Date().toISOString(),
    periodLabel: toLabel(window),
    periodStartLocal: window.start.toISOString(),
    periodEndLocal: window.end.toISOString(),
    completedStoryCount: completedStories.length,
    completedStories,
    valuesExplored,
    journeysTouched,
    reflectionPrompts,
    suggestedNextStory,
    parentSummaryText,
    trustNote: getParentWeeklySummaryTrustNote(),
    emptyState,
    accessibilityLabel: 'This week in Little Dharma summary',
    accessibilityHint: 'Shows stories completed, values explored, and a gentle next step. Stored on this device.'
  };
}

export async function getParentWeeklySummary(): Promise<ParentWeeklySummary> {
  return buildParentWeeklySummary();
}
