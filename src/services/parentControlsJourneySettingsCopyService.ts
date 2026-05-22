export const parentControlsJourneySettingsCopyModelVersion = 'pr148-parent-controls-journey-settings-copy-v1';

export type ParentControlsJourneySettingsCopyModel = {
  modelVersion: string;
  gentleChoiceCopy: string;
  oneStoryAtATimeCopy: string;
  pauseReturnCopy: string;
  localProgressCopy: string;
  noPressureCopy: string;
  broadAgeBandCopy: string;
  sacredCareCopy: string;
  futureSettingsCopy: string;
  microcopyBullets: string[];
  accessibilityLabel: string;
  accessibilityHint: string;
};

export const getParentControlsJourneyGentleChoiceCopy = (): string => 'Journey choices stay gentle.';
export const getParentControlsJourneyOneStoryAtATimeCopy = (): string => 'Your child can go one story at a time.';
export const getParentControlsJourneyPauseReturnCopy = (): string => 'You can pause and return later.';
export const getParentControlsJourneyLocalProgressCopy = (): string => 'Progress stays on this device.';
export const getParentControlsJourneyNoPressureCopy = (): string => 'No streaks, rankings, or pressure.';
export const getParentControlsJourneyBroadAgeBandCopy = (): string => 'Broad age bands guide story readiness.';
export const getParentControlsJourneySacredCareCopy = (): string => 'Sacred journeys are handled with care.';
export const getParentControlsJourneyFutureSettingsCopy = (): string => 'More parent choices can be added later.';

export const getParentControlsJourneySettingsCopySummary = (): string =>
  'Journey settings copy is gentle, local-first, non-competitive, and static while preserving current journey and runtime behavior.';

export const buildParentControlsJourneySettingsCopy = (): ParentControlsJourneySettingsCopyModel => ({
  modelVersion: parentControlsJourneySettingsCopyModelVersion,
  gentleChoiceCopy: getParentControlsJourneyGentleChoiceCopy(),
  oneStoryAtATimeCopy: getParentControlsJourneyOneStoryAtATimeCopy(),
  pauseReturnCopy: getParentControlsJourneyPauseReturnCopy(),
  localProgressCopy: getParentControlsJourneyLocalProgressCopy(),
  noPressureCopy: getParentControlsJourneyNoPressureCopy(),
  broadAgeBandCopy: getParentControlsJourneyBroadAgeBandCopy(),
  sacredCareCopy: getParentControlsJourneySacredCareCopy(),
  futureSettingsCopy: getParentControlsJourneyFutureSettingsCopy(),
  microcopyBullets: [
    getParentControlsJourneyGentleChoiceCopy(),
    getParentControlsJourneyOneStoryAtATimeCopy(),
    getParentControlsJourneyPauseReturnCopy(),
    getParentControlsJourneyLocalProgressCopy(),
    getParentControlsJourneyNoPressureCopy(),
    getParentControlsJourneyBroadAgeBandCopy(),
    getParentControlsJourneySacredCareCopy(),
    getParentControlsJourneyFutureSettingsCopy(),
  ],
  accessibilityLabel: 'For parents: journey setting choices stay gentle and local-first',
  accessibilityHint:
    'Read the static journey settings guidance about one-story pacing, pause and return, on-device progress, no pressure loops, and sacred care.',
});
