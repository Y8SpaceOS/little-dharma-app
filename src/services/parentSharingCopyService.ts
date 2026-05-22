export const parentSharingCopyModelVersion = 'pr137-parent-sharing-copy-v1';

export type ParentSharingCopyModel = {
  modelVersion: string;
  consentCopy: string;
  privacyCopy: string;
  safetyCopy: string;
  blessingCopy: string;
  valueReflectionCopy: string;
  allowedUseCases: string[];
  doNotShareRules: string[];
  parentTrustBullets: string[];
  accessibilityLabel: string;
  accessibilityHint: string;
};

const consentCopy = 'You can share this blessing with family when you choose. You are in control, and sharing is always optional.';
const privacyCopy = "Your child's progress stays private on this device. No child profile, score, or streak is shared.";
const safetyCopy = 'Share a gentle reflection, not a performance update. Keep details child-safe, simple, and respectful for family-only context.';
const blessingCopy = 'A gentle family note: share a blessing, not a score. Keep the message warm, brief, and pressure-free.';
const valueReflectionCopy = 'Share with family when you choose by naming one value your child noticed, without progress details or identity details.';

const allowedUseCases: string[] = [
  'A parent privately shares a blessing with close family.',
  'A parent shares a value reflection with grandparents.',
  'A parent saves wording for a family conversation later.',
  'A parent copies a general blessing without child identity.',
  'A parent shares cultural learning context without progress details.',
];

const doNotShareRules: string[] = [
  'No child name is required.',
  'No exact child age should be shared.',
  'No public child profile is created.',
  'No score, rank, streak, or progress bragging should be shared.',
  'No school, class, or location identifiers should be shared.',
  'No sensitive family routine details should be shared.',
  'No deity or sacred content should be used as meme or viral bait.',
  'No pressure to share.',
  'No auto-sharing behavior.',
  'No referral or invite loops.',
];

export const getParentSharingConsentCopy = (): string => consentCopy;
export const getParentSharingPrivacyCopy = (): string => privacyCopy;
export const getParentSharingSafetyCopy = (): string => `${safetyCopy} Sacred stories should be shared with care and respect.`;
export const getParentSharingBlessingCopy = (): string => blessingCopy;
export const getParentSharingValueReflectionCopy = (): string => valueReflectionCopy;
export const getParentSharingDoNotShareRules = (): string[] => [...doNotShareRules];
export const getParentSharingAllowedUseCases = (): string[] => [...allowedUseCases];

export const getParentSharingCopySummary = (): string =>
  'Parent sharing copy is consent-first, local-first, child-safe, and culturally respectful. It supports gentle family notes without identity, scoring, pressure, or public sharing.';

export const buildParentSharingCopy = (): ParentSharingCopyModel => ({
  modelVersion: parentSharingCopyModelVersion,
  consentCopy: getParentSharingConsentCopy(),
  privacyCopy: getParentSharingPrivacyCopy(),
  safetyCopy: getParentSharingSafetyCopy(),
  blessingCopy: getParentSharingBlessingCopy(),
  valueReflectionCopy: getParentSharingValueReflectionCopy(),
  allowedUseCases: getParentSharingAllowedUseCases(),
  doNotShareRules: getParentSharingDoNotShareRules(),
  parentTrustBullets: [
    'Share with family when you choose.',
    "Keep your child's progress private.",
    'No child profile is shared.',
    'A gentle family note is enough.',
    'You are in control.',
  ],
  accessibilityLabel: 'For parents: sharing guidance copy',
  accessibilityHint: 'Read consent-first and privacy-safe sharing guidance. No sharing action is triggered here.',
});
