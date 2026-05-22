export const parentControlsJourneySettingsCopyModelVersion = 'pr148-parent-controls-journey-settings-copy-v1';

export type ParentControlsJourneySettingsCopyModel = {
  modelVersion: string;
  title: string;
  bullets: string[];
  summary: string;
};

const journeySettingsBullets = [
  'Journey choices stay gentle.',
  'Your child can go one story at a time.',
  'You can pause and return later.',
  'Progress stays on this device.',
  'No streaks, rankings, or pressure.',
  'Broad age bands guide story readiness.',
  'Sacred journeys are handled with care.',
  'More parent choices can be added later.',
] as const;

export const getParentControlsJourneySettingsTitle = (): string => 'Journey settings copy';
export const getParentControlsJourneySettingsBullets = (): string[] => [...journeySettingsBullets];

export const getParentControlsJourneySettingsSummary = (): string =>
  'Journey settings copy stays gentle, local-first, and non-competitive while keeping space for future parent choices.';

export const buildParentControlsJourneySettingsCopy = (): ParentControlsJourneySettingsCopyModel => ({
  modelVersion: parentControlsJourneySettingsCopyModelVersion,
  title: getParentControlsJourneySettingsTitle(),
  bullets: getParentControlsJourneySettingsBullets(),
  summary: getParentControlsJourneySettingsSummary(),
});
