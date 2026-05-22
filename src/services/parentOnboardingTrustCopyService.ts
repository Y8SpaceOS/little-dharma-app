export const parentOnboardingTrustCopyModelVersion = 'pr140-parent-onboarding-trust-copy-v1';

export type ParentOnboardingTrustCopyModel = {
  modelVersion: string;
  welcomeCopy: string;
  localFirstCopy: string;
  childProfileCopy: string;
  agePrivacyCopy: string;
  noTrackingCopy: string;
  noSharingCopy: string;
  noMicRecordingCopy: string;
  sacredRespectCopy: string;
  parentControlCopy: string;
  parentTrustBullets: string[];
  accessibilityLabel: string;
  accessibilityHint: string;
};

const welcomeCopy = 'Welcome to Little Dharma. A calm story world for your family.';
const localFirstCopy = 'Progress stays on this device in this version.';
const childProfileCopy = 'No public child profile exists in this version.';
const agePrivacyCopy = 'Exact age is not required during family setup in this version.';
const noTrackingCopy = 'No analytics or telemetry tracking is implemented in the current scope.';
const noSharingCopy = 'No automatic sharing is implemented in this version.';
const noMicRecordingCopy = 'No microphone or recording is used in this version.';
const sacredRespectCopy = 'Sacred content is handled respectfully, and stories are prepared with care.';
const parentControlCopy = 'Parents stay in control and can continue when your family is ready.';

export const buildParentOnboardingTrustCopy = (): ParentOnboardingTrustCopyModel => ({
  modelVersion: parentOnboardingTrustCopyModelVersion,
  welcomeCopy: getParentOnboardingWelcomeCopy(),
  localFirstCopy: getParentOnboardingLocalFirstCopy(),
  childProfileCopy: getParentOnboardingChildProfileCopy(),
  agePrivacyCopy: getParentOnboardingAgePrivacyCopy(),
  noTrackingCopy: getParentOnboardingNoTrackingCopy(),
  noSharingCopy: getParentOnboardingNoSharingCopy(),
  noMicRecordingCopy: getParentOnboardingNoMicRecordingCopy(),
  sacredRespectCopy: getParentOnboardingSacredRespectCopy(),
  parentControlCopy: getParentOnboardingParentControlCopy(),
  parentTrustBullets: [
    'Welcome to Little Dharma.',
    'A calm story world for your family.',
    'Progress stays on this device.',
    'No public child profile.',
    'No exact age required.',
    'No ads, no rankings, no pressure loops.',
    'No analytics or telemetry tracking in this version.',
    'No automatic sharing.',
    'No microphone or recording in this version.',
    'Sacred content is handled respectfully.',
    'Stories are prepared with care.',
    'You stay in control.',
    'Continue when your family is ready.',
  ],
  accessibilityLabel: 'For parents: onboarding trust copy',
  accessibilityHint:
    'Read how onboarding remains local-first, private, and parent-controlled in this version.',
});

export const getParentOnboardingWelcomeCopy = (): string => welcomeCopy;
export const getParentOnboardingLocalFirstCopy = (): string => localFirstCopy;
export const getParentOnboardingChildProfileCopy = (): string => childProfileCopy;
export const getParentOnboardingAgePrivacyCopy = (): string => agePrivacyCopy;
export const getParentOnboardingNoTrackingCopy = (): string => noTrackingCopy;
export const getParentOnboardingNoSharingCopy = (): string => noSharingCopy;
export const getParentOnboardingNoMicRecordingCopy = (): string => noMicRecordingCopy;
export const getParentOnboardingSacredRespectCopy = (): string => sacredRespectCopy;
export const getParentOnboardingParentControlCopy = (): string => parentControlCopy;

export const getParentOnboardingCopySummary = (): string =>
  'Welcome to Little Dharma: a calm story world for your family that is local-first, with progress on this device, no public child profile, no exact age requirement, no analytics/telemetry tracking, no automatic sharing, no microphone/recording, respectful sacred content handling, and parents in control.';
