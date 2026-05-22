export const completionTrustMicrocopyModelVersion = 'pr144-completion-trust-microcopy-v1';

export type CompletionTrustMicrocopyModel = {
  modelVersion: string;
  calmFinishCopy: string;
  noScoreCopy: string;
  restReadinessCopy: string;
  familyReflectionCopy: string;
  sacredCareCopy: string;
  luvluGentleCelebrationCopy: string;
  progressGentleCopy: string;
  microcopyBullets: string[];
  accessibilityLabel: string;
  accessibilityHint: string;
};

const calmFinishCopy = 'You finished one calm story.';
const noScoreCopy = 'There is no score here.';
const restReadinessCopy = 'Rest when you feel ready. You can read again later.';
const familyReflectionCopy = 'You can talk about this story with your family.';
const sacredCareCopy = 'Stories are remembered with care.';
const luvluGentleCelebrationCopy = 'Luvlu is proud of your calm heart and stays with you as a gentle helper.';
const progressGentleCopy = 'One gentle story at a time. Your progress is gentle and not competitive.';

export const buildCompletionTrustMicrocopy = (): CompletionTrustMicrocopyModel => ({
  modelVersion: completionTrustMicrocopyModelVersion,
  calmFinishCopy: getCompletionCalmFinishCopy(),
  noScoreCopy: getCompletionNoScoreCopy(),
  restReadinessCopy: getCompletionRestReadinessCopy(),
  familyReflectionCopy: getCompletionFamilyReflectionCopy(),
  sacredCareCopy: getCompletionSacredCareCopy(),
  luvluGentleCelebrationCopy: getCompletionLuvluGentleCelebrationCopy(),
  progressGentleCopy: getCompletionProgressGentleCopy(),
  microcopyBullets: [
    'You finished one calm story.',
    'There is no score here.',
    'Rest when you feel ready.',
    'You can read again later.',
    'You can talk about this story with your family.',
    'Stories are remembered with care.',
    'Luvlu is proud of your calm heart.',
    'One gentle story at a time.',
    'Your progress is gentle and not competitive.',
  ],
  accessibilityLabel: 'Completion trust words',
  accessibilityHint: 'Calm reminders after finishing a story with no score and gentle progress.',
});

export const getCompletionCalmFinishCopy = (): string => calmFinishCopy;
export const getCompletionNoScoreCopy = (): string => noScoreCopy;
export const getCompletionRestReadinessCopy = (): string => restReadinessCopy;
export const getCompletionFamilyReflectionCopy = (): string => familyReflectionCopy;
export const getCompletionSacredCareCopy = (): string => sacredCareCopy;
export const getCompletionLuvluGentleCelebrationCopy = (): string => luvluGentleCelebrationCopy;
export const getCompletionProgressGentleCopy = (): string => progressGentleCopy;

export const getCompletionTrustMicrocopySummary = (): string =>
  'Completion trust microcopy keeps the finish moment calm: one finished calm story, no score, rest when ready, family reflection welcome, stories remembered with care, Luvlu as a gentle helper, and progress that is gentle and not competitive.';
