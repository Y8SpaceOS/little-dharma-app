export const storyReaderGentlePaceCopyModelVersion = 'pr151-story-reader-gentle-pace-copy-v1';

export type StoryReaderGentlePaceCopyModel = {
  modelVersion: string;
  readSlowlyCopy: string;
  oneCalmPageCopy: string;
  storiesCanWaitCopy: string;
  noRaceCopy: string;
  pauseReturnCopy: string;
  familyReadingCopy: string;
  sacredCareCopy: string;
  luvluGentlePaceCopy: string;
  microcopyBullets: string[];
  accessibilityLabel: string;
  accessibilityHint: string;
};

const readSlowlyCopy = 'Read slowly.';
const oneCalmPageCopy = 'One calm page at a time.';
const storiesCanWaitCopy = 'Stories can wait for you.';
const noRaceCopy = 'There is no race here.';
const pauseReturnCopy = 'You can pause and return later.';
const familyReadingCopy = 'You can read with your family.';
const sacredCareCopy = 'Sacred stories are read with care.';
const luvluGentlePaceCopy = 'Luvlu can help you keep a gentle pace, without prizes or reward tokens.';

export const buildStoryReaderGentlePaceCopy = (): StoryReaderGentlePaceCopyModel => ({
  modelVersion: storyReaderGentlePaceCopyModelVersion,
  readSlowlyCopy: getStoryReaderReadSlowlyCopy(),
  oneCalmPageCopy: getStoryReaderOneCalmPageCopy(),
  storiesCanWaitCopy: getStoryReaderStoriesCanWaitCopy(),
  noRaceCopy: getStoryReaderNoRaceCopy(),
  pauseReturnCopy: getStoryReaderPauseReturnCopy(),
  familyReadingCopy: getStoryReaderFamilyReadingCopy(),
  sacredCareCopy: getStoryReaderSacredCareCopy(),
  luvluGentlePaceCopy: getStoryReaderLuvluGentlePaceCopy(),
  microcopyBullets: [
    'Read slowly.',
    'One calm page at a time.',
    'Stories can wait for you.',
    'There is no race here.',
    'You can pause and return later.',
    'You can read with your family.',
    'Sacred stories are read with care.',
    'Luvlu can help you keep a gentle pace without prizes or reward tokens.',
  ],
  accessibilityLabel: 'Story reader gentle pace words',
  accessibilityHint: 'Calm reminders for reading one page at a time with no race and safe return later.',
});

export const getStoryReaderReadSlowlyCopy = (): string => readSlowlyCopy;
export const getStoryReaderOneCalmPageCopy = (): string => oneCalmPageCopy;
export const getStoryReaderStoriesCanWaitCopy = (): string => storiesCanWaitCopy;
export const getStoryReaderNoRaceCopy = (): string => noRaceCopy;
export const getStoryReaderPauseReturnCopy = (): string => pauseReturnCopy;
export const getStoryReaderFamilyReadingCopy = (): string => familyReadingCopy;
export const getStoryReaderSacredCareCopy = (): string => sacredCareCopy;
export const getStoryReaderLuvluGentlePaceCopy = (): string => luvluGentlePaceCopy;

export const getStoryReaderGentlePaceCopySummary = (): string =>
  'Story Reader gentle pace copy keeps reading calm: read slowly, one calm page at a time, stories can wait, there is no race, pausing and returning later is welcome, family reading is welcome, sacred stories are read with care, and Luvlu helps with gentle pace without rewards.';
