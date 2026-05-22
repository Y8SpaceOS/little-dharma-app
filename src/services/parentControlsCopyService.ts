export const parentControlsCopyModelVersion = 'pr138-parent-controls-copy-hardening-v1';

export type ParentControlsCopyModel = {
  modelVersion: string;
  trustSummary: string;
  privacyCopy: string;
  localFirstCopy: string;
  contentReadinessCopy: string;
  sacredRespectCopy: string;
  noPressureCopy: string;
  currentLimitsCopy: string;
  parentTrustBullets: string[];
  accessibilityLabel: string;
  accessibilityHint: string;
};

const trustSummary =
  'You stay in control. Parent controls in this version are simple, local-first, and designed for calm family use.';

const privacyCopy =
  'Progress stays on this device. No public child profile is created, and exact age is not required.';

const localFirstCopy =
  'Current controls are intentionally simple and local-first: settings and progress remain on this device without account login, cloud sync, or remote monitoring.';

const contentReadinessCopy =
  'Stories are prepared with care and become available in planned stages so families can continue when ready.';

const sacredRespectCopy =
  'Sacred content is handled respectfully with culturally thoughtful language, gentle framing, and family-ready context.';

const noPressureCopy =
  'No ads, no rankings, no pressure loops. The app is designed for steady family rhythm instead of competitive or addictive mechanics.';

const currentLimitsCopy =
  'Today\'s parent controls focus on local guidance and simple preference choices only. This copy does not add new control functionality.';

export const getParentControlsTrustSummary = (): string => trustSummary;
export const getParentControlsPrivacyCopy = (): string => privacyCopy;
export const getParentControlsLocalFirstCopy = (): string => localFirstCopy;
export const getParentControlsContentReadinessCopy = (): string => contentReadinessCopy;
export const getParentControlsSacredRespectCopy = (): string => sacredRespectCopy;
export const getParentControlsNoPressureCopy = (): string => noPressureCopy;
export const getParentControlsCurrentLimitsCopy = (): string => currentLimitsCopy;

export const getParentControlsCopySummary = (): string =>
  'Parent controls copy is trust-first, local-first, respectful, and clear about current limits without adding surveillance, backend features, or pressure mechanics.';

export const buildParentControlsCopy = (): ParentControlsCopyModel => ({
  modelVersion: parentControlsCopyModelVersion,
  trustSummary: getParentControlsTrustSummary(),
  privacyCopy: getParentControlsPrivacyCopy(),
  localFirstCopy: getParentControlsLocalFirstCopy(),
  contentReadinessCopy: getParentControlsContentReadinessCopy(),
  sacredRespectCopy: getParentControlsSacredRespectCopy(),
  noPressureCopy: getParentControlsNoPressureCopy(),
  currentLimitsCopy: getParentControlsCurrentLimitsCopy(),
  parentTrustBullets: [
    'You stay in control.',
    'Progress stays on this device.',
    'No public child profile.',
    'No ads, no rankings, no pressure loops.',
    'Stories are prepared with care.',
    'Sacred content is handled respectfully.',
    'Continue when your family is ready.',
  ],
  accessibilityLabel: 'For parents: controls trust and privacy copy',
  accessibilityHint:
    'Read how controls stay local-first, what is not collected or shared, and why content is staged with care.',
});
