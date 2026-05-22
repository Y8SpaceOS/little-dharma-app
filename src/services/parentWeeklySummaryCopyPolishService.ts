export const parentWeeklySummaryCopyPolishModelVersion = 'pr147-parent-weekly-summary-copy-polish-v1';

export type ParentWeeklySummaryCopyPolishModel = {
  modelVersion: string;
  gentleTitleCopy: string;
  trustIntroCopy: string;
  localFirstCopy: string;
  noPressureCopy: string;
  storiesRememberedCopy: string;
  valuesConversationCopy: string;
  gentleNextStepCopy: string;
  returnLaterCopy: string;
  sacredCareCopy: string;
  microcopyBullets: string[];
  accessibilityLabel: string;
  accessibilityHint: string;
};

const gentleTitleCopy = 'This week in Little Dharma';
const trustIntroCopy = 'A gentle look at your family\'s story time.';
const localFirstCopy = 'Stored on this device.';
const noPressureCopy = 'No score, no ranking, no pressure.';
const storiesRememberedCopy = 'Stories remembered with care.';
const valuesConversationCopy = 'Values explored are conversation starters for your family.';
const gentleNextStepCopy = 'A gentle next story is here if and when you want it.';
const returnLaterCopy = 'Continue whenever your family is ready.';
const sacredCareCopy = 'Sacred stories are handled with care and respect.';

export const buildParentWeeklySummaryCopyPolish = (): ParentWeeklySummaryCopyPolishModel => ({
  modelVersion: parentWeeklySummaryCopyPolishModelVersion,
  gentleTitleCopy: getParentWeeklySummaryGentleTitleCopy(),
  trustIntroCopy: getParentWeeklySummaryTrustIntroCopy(),
  localFirstCopy: getParentWeeklySummaryLocalFirstCopy(),
  noPressureCopy: getParentWeeklySummaryNoPressureCopy(),
  storiesRememberedCopy: getParentWeeklySummaryStoriesRememberedCopy(),
  valuesConversationCopy: getParentWeeklySummaryValuesConversationCopy(),
  gentleNextStepCopy: getParentWeeklySummaryGentleNextStepCopy(),
  returnLaterCopy: getParentWeeklySummaryReturnLaterCopy(),
  sacredCareCopy: getParentWeeklySummarySacredCareCopy(),
  microcopyBullets: [
    'A gentle weekly summary for your family.',
    'Stored on this device.',
    'No score, no ranking, no pressure.',
    'Stories are remembered with care.',
    'Values explored are conversation starters.',
    'A gentle next story is optional.',
    'Continue whenever your family is ready.',
    'Sacred stories are handled with care and respect.',
  ],
  accessibilityLabel: 'Parent weekly summary copy',
  accessibilityHint:
    'Gentle, local-first summary copy with no score or ranking, values for conversation, an optional next story, and return-later reassurance.',
});

export const getParentWeeklySummaryGentleTitleCopy = (): string => gentleTitleCopy;
export const getParentWeeklySummaryTrustIntroCopy = (): string => trustIntroCopy;
export const getParentWeeklySummaryLocalFirstCopy = (): string => localFirstCopy;
export const getParentWeeklySummaryNoPressureCopy = (): string => noPressureCopy;
export const getParentWeeklySummaryStoriesRememberedCopy = (): string => storiesRememberedCopy;
export const getParentWeeklySummaryValuesConversationCopy = (): string => valuesConversationCopy;
export const getParentWeeklySummaryGentleNextStepCopy = (): string => gentleNextStepCopy;
export const getParentWeeklySummaryReturnLaterCopy = (): string => returnLaterCopy;
export const getParentWeeklySummarySacredCareCopy = (): string => sacredCareCopy;

export const getParentWeeklySummaryCopyPolishSummary = (): string =>
  'Parent Weekly Summary copy polish keeps weekly reflection warm and gentle: stored on this device, no score or ranking pressure, stories remembered with care, values explored as conversation starters, an optional next story, return-later reassurance, and sacred care language.';
