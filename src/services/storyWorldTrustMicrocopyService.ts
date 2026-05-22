export const storyWorldTrustMicrocopyModelVersion = 'pr142-story-world-trust-microcopy-v1';

export type StoryWorldTrustMicrocopyModel = {
  modelVersion: string;
  chooseDoorwayCopy: string;
  noRaceCopy: string;
  readinessCopy: string;
  familyReadingCopy: string;
  sacredCareCopy: string;
  luvluHelperCopy: string;
  comingSoonCareCopy: string;
  microcopyBullets: string[];
  accessibilityLabel: string;
  accessibilityHint: string;
};

const chooseDoorwayCopy = 'Choose one doorway.';
const noRaceCopy = 'There is no race here.';
const readinessCopy = 'Stories can wait for you.';
const familyReadingCopy = 'You can read with your family.';
const sacredCareCopy = 'Stories are shared with care.';
const luvluHelperCopy = 'Luvlu can help you choose.';
const comingSoonCareCopy = 'Some worlds are still getting ready.';

export const buildStoryWorldTrustMicrocopy = (): StoryWorldTrustMicrocopyModel => ({
  modelVersion: storyWorldTrustMicrocopyModelVersion,
  chooseDoorwayCopy: getStoryWorldChooseDoorwayCopy(),
  noRaceCopy: getStoryWorldNoRaceCopy(),
  readinessCopy: getStoryWorldReadinessCopy(),
  familyReadingCopy: getStoryWorldFamilyReadingCopy(),
  sacredCareCopy: getStoryWorldSacredCareCopy(),
  luvluHelperCopy: getStoryWorldLuvluHelperCopy(),
  comingSoonCareCopy: getStoryWorldComingSoonCareCopy(),
  microcopyBullets: [
    'Choose one doorway.',
    'One gentle world at a time.',
    'There is no race here.',
    'Stories can wait for you.',
    'Luvlu can help you choose.',
    'Stories are shared with care.',
    'You can read with your family.',
    'Some worlds are still getting ready.',
  ],
  accessibilityLabel: 'Story World trust words',
  accessibilityHint: 'Gentle reminders that choosing a doorway is calm, unhurried, and safe.',
});

export const getStoryWorldChooseDoorwayCopy = (): string => chooseDoorwayCopy;
export const getStoryWorldNoRaceCopy = (): string => noRaceCopy;
export const getStoryWorldReadinessCopy = (): string => readinessCopy;
export const getStoryWorldFamilyReadingCopy = (): string => familyReadingCopy;
export const getStoryWorldSacredCareCopy = (): string => sacredCareCopy;
export const getStoryWorldLuvluHelperCopy = (): string => luvluHelperCopy;
export const getStoryWorldComingSoonCareCopy = (): string => comingSoonCareCopy;

export const getStoryWorldTrustMicrocopySummary = (): string =>
  'Story World trust microcopy keeps doorway choice calm: choose one doorway, there is no race, stories can wait, Luvlu can help, stories are shared with care, family reading is welcome, and coming-soon worlds are being prepared with care.';
