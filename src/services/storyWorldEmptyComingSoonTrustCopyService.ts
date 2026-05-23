export const storyWorldEmptyComingSoonTrustCopyModelVersion = 'pr150-story-world-empty-coming-soon-trust-copy-v1';

export type StoryWorldEmptyComingSoonTrustCopyModel = {
  modelVersion: string;
  preparingCopy: string;
  preparedWithCareCopy: string;
  nothingLockedCopy: string;
  chooseAnotherDoorwayCopy: string;
  storiesCanWaitCopy: string;
  noRaceCopy: string;
  sacredRespectCopy: string;
  luvluGentleGuideCopy: string;
  microcopyBullets: string[];
  accessibilityLabel: string;
  accessibilityHint: string;
};

const preparingCopy = 'This world is getting ready.';
const preparedWithCareCopy = 'Stories are being prepared with care.';
const nothingLockedCopy = 'Nothing is locked here.';
const chooseAnotherDoorwayCopy = 'You can choose another doorway.';
const storiesCanWaitCopy = 'Stories can wait for you.';
const noRaceCopy = 'There is no race here.';
const sacredRespectCopy = 'Sacred stories are prepared with respect.';
const luvluGentleGuideCopy = 'Luvlu can help you choose gently.';

export const buildStoryWorldEmptyComingSoonTrustCopy = (): StoryWorldEmptyComingSoonTrustCopyModel => ({
  modelVersion: storyWorldEmptyComingSoonTrustCopyModelVersion,
  preparingCopy: getStoryWorldPreparingCopy(),
  preparedWithCareCopy: getStoryWorldPreparedWithCareCopy(),
  nothingLockedCopy: getStoryWorldNothingLockedCopy(),
  chooseAnotherDoorwayCopy: getStoryWorldChooseAnotherDoorwayCopy(),
  storiesCanWaitCopy: getStoryWorldStoriesCanWaitCopy(),
  noRaceCopy: getStoryWorldNoRaceCopy(),
  sacredRespectCopy: getStoryWorldSacredRespectCopy(),
  luvluGentleGuideCopy: getStoryWorldLuvluGentleGuideCopy(),
  microcopyBullets: [
    preparingCopy,
    preparedWithCareCopy,
    nothingLockedCopy,
    chooseAnotherDoorwayCopy,
    storiesCanWaitCopy,
    noRaceCopy,
    sacredRespectCopy,
    luvluGentleGuideCopy
  ],
  accessibilityLabel: 'Story World preparing words',
  accessibilityHint: 'Gentle words for worlds that are still being prepared with care.'
});

export const getStoryWorldPreparingCopy = (): string => preparingCopy;
export const getStoryWorldPreparedWithCareCopy = (): string => preparedWithCareCopy;
export const getStoryWorldNothingLockedCopy = (): string => nothingLockedCopy;
export const getStoryWorldChooseAnotherDoorwayCopy = (): string => chooseAnotherDoorwayCopy;
export const getStoryWorldStoriesCanWaitCopy = (): string => storiesCanWaitCopy;
export const getStoryWorldNoRaceCopy = (): string => noRaceCopy;
export const getStoryWorldSacredRespectCopy = (): string => sacredRespectCopy;
export const getStoryWorldLuvluGentleGuideCopy = (): string => luvluGentleGuideCopy;

export const getStoryWorldEmptyComingSoonTrustCopySummary = (): string =>
  'Story World empty and coming-soon trust copy keeps waiting gentle: this world is getting ready, stories are prepared with care, nothing is locked here, children can choose another doorway, stories can wait, there is no race, sacred stories are prepared with respect, and Luvlu can guide gently without tokens or rewards.';
