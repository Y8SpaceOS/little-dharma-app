import type { DharmaJourneyV1 } from '@/types/dharmaJourney';

export const journeyParentTrustCopyModelVersion = 'journey_parent_trust_copy_v1';

type JourneyParentTrustCopy = {
  modelVersion: string;
  journeyId: string;
  journeyTitle: string;
  childFacingTitle: string;
  trustSummary: string;
  ageAppropriatenessCopy: string;
  valuesCopy: string;
  sacredRespectCopy: string;
  progressPrivacyCopy: string;
  availabilityCopy: string;
  parentGuidanceBullets: string[];
  accessibilityLabel: string;
  accessibilityHint: string;
};

const FALLBACK_VALUES = 'kindness, courage, gratitude, and thoughtful choices';

const formatList = (values: string[]): string => values.filter(Boolean).join(', ');

const getJourneyStatusTier = (journey: DharmaJourneyV1): 'available' | 'staged' | 'coming_soon' => {
  const status = (journey.status || '').toLowerCase();
  if (journey.isRuntimeAvailable || status === 'available' || status === 'runtime_ready') return 'available';
  if (status === 'qa_ready' || status === 'indexed' || status === 'planned') return 'staged';
  return 'coming_soon';
};

export const getJourneyTrustSummary = (journey: DharmaJourneyV1): string => {
  const providedNote = journey.parentTrustNotes?.find((note) => note.trim().length > 0);
  if (providedNote) return providedNote;

  const baseTitle = journey.childFacingTitle || journey.title || 'this journey';
  return `What your child will explore: ${baseTitle}. Continue when your family is ready, one gentle step at a time.`;
};

export const getJourneyAgeAppropriatenessCopy = (journey: DharmaJourneyV1): string => {
  const ageBands = journey.recommendedAgeBands?.map((band) => String(band)) ?? [];
  if (ageBands.length > 0) {
    return `Why this journey is gentle: designed for broad age bands (${formatList(ageBands)}) so families can read calmly together without pressure.`;
  }

  return 'Why this journey is gentle: this path is written for age-appropriate family reading with calm language and short, respectful steps.';
};

export const getJourneyValuesCopy = (journey: DharmaJourneyV1): string => {
  const values = journey.primaryValues?.filter((value) => value.trim().length > 0) ?? [];
  if (values.length > 0) return `Values in this journey: ${formatList(values)}.`;
  return `Values in this journey: ${FALLBACK_VALUES}.`;
};

export const getJourneySacredRespectCopy = (journey: DharmaJourneyV1): string => {
  const notes = journey.sacredRespectNotes?.filter((note) => note.trim().length > 0) ?? [];
  if (notes.length > 0) {
    return `Sacred content is handled with care: ${notes[0]}`;
  }

  return 'Sacred content is handled with care through respectful language, context notes, and family-friendly retellings.';
};

export const getJourneyProgressPrivacyCopy = (): string =>
  'Progress stays on this device. We do not use cloud sync, ads, analytics tracking, or ranking systems for this journey copy.';

export const getJourneyAvailabilityCopy = (journey: DharmaJourneyV1): string => {
  const tier = getJourneyStatusTier(journey);
  if (tier === 'available') return 'Available now: this journey can be read in the app today, one step at a time.';
  if (tier === 'staged') return 'Some stories are being prepared. This journey is staged carefully and will appear when family-ready runtime access opens.';
  return 'Coming soon: this journey is still being prepared with care. You can return when your family is ready.';
};

export const getJourneyParentGuidanceBullets = (journey: DharmaJourneyV1): string[] => {
  const storyCount = journey.storyRefs?.length ?? 0;
  const safeStoryCount = storyCount > 0 ? `${storyCount} planned steps` : 'a gentle number of planned steps';
  return [
    'For parents: this journey is designed for gentle family reading.',
    `What your child will explore is paced over ${safeStoryCount}.`,
    'Progress stays on this device.',
    'There is no pressure or addictive loop. Continue gently when your family is ready.',
    getJourneyAvailabilityCopy(journey),
  ];
};

export const buildJourneyParentTrustCopy = (journey: DharmaJourneyV1): JourneyParentTrustCopy => {
  const journeyTitle = journey.title || 'Dharma Journey';
  const childFacingTitle = journey.childFacingTitle || journeyTitle;
  const trustSummary = getJourneyTrustSummary(journey);
  const ageAppropriatenessCopy = getJourneyAgeAppropriatenessCopy(journey);
  const valuesCopy = getJourneyValuesCopy(journey);
  const sacredRespectCopy = getJourneySacredRespectCopy(journey);
  const progressPrivacyCopy = getJourneyProgressPrivacyCopy();
  const availabilityCopy = getJourneyAvailabilityCopy(journey);

  return {
    modelVersion: journeyParentTrustCopyModelVersion,
    journeyId: journey.id,
    journeyTitle,
    childFacingTitle,
    trustSummary,
    ageAppropriatenessCopy,
    valuesCopy,
    sacredRespectCopy,
    progressPrivacyCopy,
    availabilityCopy,
    parentGuidanceBullets: getJourneyParentGuidanceBullets(journey),
    accessibilityLabel: `For parents: trust notes for ${journeyTitle}`,
    accessibilityHint: 'Read why this journey is gentle, what values it explores, and how progress remains local on this device.',
  };
};
