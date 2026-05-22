import type { SacredRespectLevel } from '@/types/contentModel';

export const storyCompletionMomentModelVersion = '1.0.0';

export type CompletionTreasureMotif = 'diya' | 'flower' | 'blessing' | 'lotus' | 'peacock-feather';

type CompletionStoryLike = {
  id?: string;
  slug: string;
  title: string;
  primaryValue?: string;
  value?: string;
  reflectionPrompt?: string;
  completionBlessing?: string;
  sacredRespectLevel?: SacredRespectLevel;
  parentNote?: { discussionPrompt?: string };
};

export type StoryCompletionMoment = {
  storyId: string;
  storySlug: string;
  storyTitle: string;
  completionTitle: string;
  blessingText: string;
  valueLabel: string;
  reflectionPrompt: string;
  parentPrompt: string | null;
  treasureMotif: CompletionTreasureMotif;
  nextActions: string[];
  luvluAllowed: boolean;
  sacredRespectNote: string;
  accessibilityLabel: string;
  accessibilityHint: string;
};

const defaultBlessing = 'You completed this story with a calm heart. May its light stay with you.';
const defaultValue = 'Kindness';
const defaultReflectionPrompt = 'What is one gentle way you can share this value today?';
const defaultParentPrompt = 'Ask: Which moment felt meaningful, and how can we practice it together today?';

const motifByRespectLevel: Record<SacredRespectLevel, CompletionTreasureMotif> = {
  general: 'flower',
  sacred_story: 'diya',
  deity_focal: 'lotus',
  shloka_or_prayer: 'blessing',
  ritual_context: 'peacock-feather',
};

export function getCompletionBlessingText(story: CompletionStoryLike): string {
  return story.completionBlessing?.trim() || defaultBlessing;
}

export function getCompletionValueLabel(story: CompletionStoryLike): string {
  return story.primaryValue?.trim() || story.value?.trim() || defaultValue;
}

export function getCompletionReflectionPrompt(story: CompletionStoryLike): string {
  return story.reflectionPrompt?.trim() || defaultReflectionPrompt;
}

export function getCompletionTreasureMotif(story: CompletionStoryLike): CompletionTreasureMotif {
  const level = story.sacredRespectLevel || 'general';
  return motifByRespectLevel[level] || 'flower';
}

export function getCompletionNextActions(story: CompletionStoryLike): string[] {
  const value = getCompletionValueLabel(story).toLowerCase();
  return [
    `Return to Story World for another gentle ${value} story.`,
    'Visit Child Home for your next calm activity.',
  ];
}

export function shouldShowLuvluOnCompletion(story: CompletionStoryLike): boolean {
  const level = story.sacredRespectLevel;
  if (!level) return false;
  return level === 'general' || level === 'sacred_story';
}

function getSacredRespectNote(story: CompletionStoryLike): string {
  const level = story.sacredRespectLevel;
  if (!level) return 'Completion is shared softly with care and respect.';
  switch (level) {
    case 'deity_focal':
      return 'Completion is shared with stillness and reverence.';
    case 'shloka_or_prayer':
      return 'Completion is held with prayerful quiet and care.';
    case 'ritual_context':
      return 'Completion is honored gently with ritual respect.';
    case 'sacred_story':
      return 'Completion is celebrated softly with sacred respect.';
    default:
      return 'Completion is celebrated with warmth and gratitude.';
  }
}

export function buildStoryCompletionMoment(story: CompletionStoryLike): StoryCompletionMoment {
  const valueLabel = getCompletionValueLabel(story);
  const parentPrompt = story.parentNote?.discussionPrompt?.trim() || defaultParentPrompt;
  return {
    storyId: story.id || story.slug,
    storySlug: story.slug,
    storyTitle: story.title,
    completionTitle: `${story.title} is complete`,
    blessingText: getCompletionBlessingText(story),
    valueLabel,
    reflectionPrompt: getCompletionReflectionPrompt(story),
    parentPrompt,
    treasureMotif: getCompletionTreasureMotif(story),
    nextActions: getCompletionNextActions(story),
    luvluAllowed: shouldShowLuvluOnCompletion(story),
    sacredRespectNote: getSacredRespectNote(story),
    accessibilityLabel: `Story complete: ${story.title}`,
    accessibilityHint: `Reflect on ${valueLabel} and choose your next gentle step.`,
  };
}
