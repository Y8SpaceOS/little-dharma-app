export const storyDetailTrustMicrocopyModelVersion = 'pr143-story-detail-trust-microcopy-v1';

export type StoryDetailTrustMicrocopyModel = {
  modelVersion: string;
  startReadinessCopy: string;
  noRaceCopy: string;
  slowReadingCopy: string;
  familyReadingCopy: string;
  sacredCareCopy: string;
  luvluHelperCopy: string;
  progressGentleCopy: string;
  microcopyBullets: string[];
  accessibilityLabel: string;
  accessibilityHint: string;
};

const startReadinessCopy = 'Start when you feel ready.';
const noRaceCopy = 'There is no race here.';
const slowReadingCopy = 'Read slowly. One calm story at a time.';
const familyReadingCopy = 'You can read with your family.';
const sacredCareCopy = 'Stories are shared with care.';
const luvluHelperCopy = 'Luvlu can help you begin.';
const progressGentleCopy = 'Your progress is gentle and not scored.';

export const buildStoryDetailTrustMicrocopy = (): StoryDetailTrustMicrocopyModel => ({
  modelVersion: storyDetailTrustMicrocopyModelVersion,
  startReadinessCopy: getStoryDetailStartReadinessCopy(),
  noRaceCopy: getStoryDetailNoRaceCopy(),
  slowReadingCopy: getStoryDetailSlowReadingCopy(),
  familyReadingCopy: getStoryDetailFamilyReadingCopy(),
  sacredCareCopy: getStoryDetailSacredCareCopy(),
  luvluHelperCopy: getStoryDetailLuvluHelperCopy(),
  progressGentleCopy: getStoryDetailProgressGentleCopy(),
  microcopyBullets: [
    'Start when you feel ready.',
    'There is no race here.',
    'Read slowly.',
    'One calm story at a time.',
    'You can read with your family.',
    'Stories are shared with care.',
    'Luvlu can help you begin.',
    'Your progress is gentle and not scored.',
  ],
  accessibilityLabel: 'Story detail trust words',
  accessibilityHint: 'Gentle reminders that starting, reading pace, and progress are calm and unhurried.',
});

export const getStoryDetailStartReadinessCopy = (): string => startReadinessCopy;
export const getStoryDetailNoRaceCopy = (): string => noRaceCopy;
export const getStoryDetailSlowReadingCopy = (): string => slowReadingCopy;
export const getStoryDetailFamilyReadingCopy = (): string => familyReadingCopy;
export const getStoryDetailSacredCareCopy = (): string => sacredCareCopy;
export const getStoryDetailLuvluHelperCopy = (): string => luvluHelperCopy;
export const getStoryDetailProgressGentleCopy = (): string => progressGentleCopy;

export const getStoryDetailTrustMicrocopySummary = (): string =>
  'Story Detail trust microcopy keeps the pre-reading space calm: start when ready, there is no race, read slowly, family reading is welcome, stories are shared with care, Luvlu helps you begin, and progress is gentle and not scored.';
