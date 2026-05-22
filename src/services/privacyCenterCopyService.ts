export const privacyCenterCopyModelVersion = 'pr139-privacy-center-copy-hardening-v1';

export type PrivacyCenterCopyModel = {
  modelVersion: string;
  trustSummary: string;
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

const trustSummary =
  'Privacy & Trust: progress stays on this device, families are not asked for exact age, and you stay in control.';

const localFirstCopy =
  'Progress stays on this device in this version. There is no account requirement, cloud sync, or remote parent portal in the current scope.';

const childProfileCopy =
  'No public child profile exists in this version. Child progress is kept private to this device experience.';

const agePrivacyCopy =
  'Exact age is not required. Family setup can continue without collecting exact child age details.';

const noTrackingCopy =
  'No analytics or telemetry tracking is implemented in this version. Parent trust copy remains local-first and read-only.';

const noSharingCopy =
  'No automatic sharing happens in this version. Sharing, export, and social mechanics are not implemented in the current scope.';

const noMicRecordingCopy =
  'No microphone or recording is used in this version.';

const sacredRespectCopy =
  'Sacred content is handled respectfully, and stories are prepared with care for calm family guidance.';

const parentControlCopy =
  'You stay in control with simple parent-readable privacy language and local guidance expectations.';

export const buildPrivacyCenterCopy = (): PrivacyCenterCopyModel => ({
  modelVersion: privacyCenterCopyModelVersion,
  trustSummary: getPrivacyCenterTrustSummary(),
  localFirstCopy: getPrivacyCenterLocalFirstCopy(),
  childProfileCopy: getPrivacyCenterChildProfileCopy(),
  agePrivacyCopy: getPrivacyCenterAgePrivacyCopy(),
  noTrackingCopy: getPrivacyCenterNoTrackingCopy(),
  noSharingCopy: getPrivacyCenterNoSharingCopy(),
  noMicRecordingCopy: getPrivacyCenterNoMicRecordingCopy(),
  sacredRespectCopy: getPrivacyCenterSacredRespectCopy(),
  parentControlCopy: getPrivacyCenterParentControlCopy(),
  parentTrustBullets: [
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
  ],
  accessibilityLabel: 'For parents: Privacy and Trust center copy',
  accessibilityHint:
    'Read how privacy remains local-first, what is not tracked or shared, and how parents stay in control in this version.',
});

export const getPrivacyCenterTrustSummary = (): string => trustSummary;
export const getPrivacyCenterLocalFirstCopy = (): string => localFirstCopy;
export const getPrivacyCenterChildProfileCopy = (): string => childProfileCopy;
export const getPrivacyCenterAgePrivacyCopy = (): string => agePrivacyCopy;
export const getPrivacyCenterNoTrackingCopy = (): string => noTrackingCopy;
export const getPrivacyCenterNoSharingCopy = (): string => noSharingCopy;
export const getPrivacyCenterNoMicRecordingCopy = (): string => noMicRecordingCopy;
export const getPrivacyCenterSacredRespectCopy = (): string => sacredRespectCopy;
export const getPrivacyCenterParentControlCopy = (): string => parentControlCopy;

export const getPrivacyCenterCopySummary = (): string =>
  'Privacy Center copy is calm, local-first, and clear: no public child profile, no exact age requirement, no analytics/telemetry, no automatic sharing, no microphone/recording, and parents stay in control.';
