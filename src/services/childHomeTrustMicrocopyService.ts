export const childHomeTrustMicrocopyModelVersion = 'pr141-child-home-trust-microcopy-v1';

export type ChildHomeTrustMicrocopyModel = {
  modelVersion: string;
  calmWorldCopy: string;
  noRaceCopy: string;
  choiceCopy: string;
  familyReadingCopy: string;
  sacredCareCopy: string;
  luvluHelperCopy: string;
  microcopyBullets: string[];
  accessibilityLabel: string;
  accessibilityHint: string;
};

const calmWorldCopy = 'One calm step at a time.';
const noRaceCopy = 'There is no race here.';
const choiceCopy = 'Read when you feel ready.';
const familyReadingCopy = 'You can read with your family.';
const sacredCareCopy = 'Stories are shared with care.';
const luvluHelperCopy = 'Luvlu can help you choose.';

export const buildChildHomeTrustMicrocopy = (): ChildHomeTrustMicrocopyModel => ({
  modelVersion: childHomeTrustMicrocopyModelVersion,
  calmWorldCopy: getChildHomeCalmWorldCopy(),
  noRaceCopy: getChildHomeNoRaceCopy(),
  choiceCopy: getChildHomeChoiceCopy(),
  familyReadingCopy: getChildHomeFamilyReadingCopy(),
  sacredCareCopy: getChildHomeSacredCareCopy(),
  luvluHelperCopy: getChildHomeLuvluHelperCopy(),
  microcopyBullets: [
    'One calm step at a time.',
    'Choose one gentle story.',
    'There is no race here.',
    'Read when you feel ready.',
    'Luvlu can help you choose.',
    'Stories are shared with care.',
    'You can read with your family.',
  ],
  accessibilityLabel: 'Child Home trust words',
  accessibilityHint: 'Gentle reminders that stories are calm, unhurried, and family-friendly.',
});

export const getChildHomeCalmWorldCopy = (): string => calmWorldCopy;
export const getChildHomeNoRaceCopy = (): string => noRaceCopy;
export const getChildHomeChoiceCopy = (): string => choiceCopy;
export const getChildHomeFamilyReadingCopy = (): string => familyReadingCopy;
export const getChildHomeSacredCareCopy = (): string => sacredCareCopy;
export const getChildHomeLuvluHelperCopy = (): string => luvluHelperCopy;

export const getChildHomeTrustMicrocopySummary = (): string =>
  'Child Home trust microcopy keeps the story space calm: there is no race, children can read when ready, Luvlu helps with choices, stories are shared with care, and family reading is welcome.';
