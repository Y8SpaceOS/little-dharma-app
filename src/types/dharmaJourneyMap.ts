import type { AgeBand } from '@/types/contentModel';

export type DharmaJourneyMapStepState = 'completed' | 'available' | 'coming_soon' | 'being_prepared' | 'missing';

export type DharmaJourneyMapPathMarker = 'diya' | 'flower' | 'lotus_dot';

export type DharmaJourneyMapStep = {
  id: string;
  order: number;
  storyId: string;
  slug: string;
  title: string;
  summary: string;
  primaryValue: string;
  ageBands: AgeBand[];
  durationMinutes: number | null;
  state: DharmaJourneyMapStepState;
  pathMarker: DharmaJourneyMapPathMarker;
  href: string;
  isTappable: boolean;
  trustLabel: string;
};

export type DharmaJourneyMapModel = {
  id: string;
  journeyId: string;
  journeyTitle: string;
  childFacingTitle: string;
  childFacingDescription: string;
  supportedJourney: boolean;
  trustCopy: string;
  fallbackMessage: string | null;
  progressMode: 'gentle_local_stub';
  steps: DharmaJourneyMapStep[];
};
