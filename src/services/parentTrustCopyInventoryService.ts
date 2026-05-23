export const parentTrustCopyInventoryModelVersion = '1.0.0';

export type ParentTrustCopyInventorySurface = {
  id: string;
  title: string;
  serviceFile: string;
  docFile?: string;
  purpose: string;
  parentTrustPromisesCovered: string[];
  implementationStatus: 'implemented' | 'in-progress' | 'planned';
};

export type ParentTrustCopyInventoryModel = {
  modelVersion: string;
  surfaces: ParentTrustCopyInventorySurface[];
  canonicalPromises: string[];
  preservationGuardrails: string[];
  nextAuditRecommendations: string[];
  accessibilityLabel: string;
  accessibilityHint: string;
};

const parentTrustCopyInventorySurfaces: ParentTrustCopyInventorySurface[] = [
  {
    id: 'parent-controls-copy-hardening',
    title: 'Parent Controls Copy Hardening v1',
    serviceFile: 'src/services/parentControlsCopyService.ts',
    docFile: 'docs/parent/PARENT_CONTROLS_COPY_HARDENING_V1.md',
    purpose: 'Provides parent controls trust and limits copy with local-first and no-pressure framing.',
    parentTrustPromisesCovered: ['Progress stays on this device.', 'No public child profile.', 'Parents stay in control.'],
    implementationStatus: 'implemented',
  },
  {
    id: 'privacy-center-copy-hardening',
    title: 'Privacy Center Copy Hardening v1',
    serviceFile: 'src/services/privacyCenterCopyService.ts',
    docFile: 'docs/parent/PRIVACY_CENTER_COPY_HARDENING_V1.md',
    purpose: 'Documents parent privacy expectations, local-first boundaries, and no-tracking language.',
    parentTrustPromisesCovered: ['Progress stays on this device.', 'No analytics or telemetry tracking in current scope.', 'Exact age is not required.'],
    implementationStatus: 'implemented',
  },
  {
    id: 'parent-onboarding-trust-copy',
    title: 'Parent Onboarding Trust Copy v1',
    serviceFile: 'src/services/parentOnboardingTrustCopyService.ts',
    docFile: 'docs/parent/PARENT_ONBOARDING_TRUST_COPY_V1.md',
    purpose: 'Sets parent trust expectations during onboarding without introducing new account or sharing flows.',
    parentTrustPromisesCovered: ['No public child profile.', 'Exact age is not required.', 'No automatic sharing.'],
    implementationStatus: 'implemented',
  },
  {
    id: 'parent-sharing-copy',
    title: 'Parent Sharing Copy v1',
    serviceFile: 'src/services/parentSharingCopyService.ts',
    docFile: 'docs/parent/PARENT_SHARING_COPY_V1.md',
    purpose: 'Clarifies intentional parent-controlled sharing boundaries and defaults.',
    parentTrustPromisesCovered: ['No automatic sharing.', 'Parents stay in control.', 'Family can continue gently when ready.'],
    implementationStatus: 'implemented',
  },
  {
    id: 'parent-weekly-summary',
    title: 'Parent Weekly Summary v1',
    serviceFile: 'src/services/parentWeeklySummaryService.ts',
    docFile: 'docs/parent/PARENT_WEEKLY_SUMMARY_V1.md',
    purpose: 'Supports parent reflection summaries with non-pressuring and respectful language.',
    parentTrustPromisesCovered: ['No ads, rankings, streaks, leaderboards, or pressure loops.', 'Sacred content is handled respectfully.'],
    implementationStatus: 'implemented',
  },
  {
    id: 'parent-weekly-summary-copy-polish',
    title: 'Parent Weekly Summary Copy Polish v1',
    serviceFile: 'src/services/parentWeeklySummaryCopyPolishService.ts',
    docFile: 'docs/parent/PARENT_WEEKLY_SUMMARY_COPY_POLISH_V1.md',
    purpose: 'Polishes parent weekly summary language while preserving local-first and no-pressure commitments.',
    parentTrustPromisesCovered: ['Progress stays on this device.', 'No ads, rankings, streaks, leaderboards, or pressure loops.', 'Family can continue gently when ready.'],
    implementationStatus: 'implemented',
  },
  {
    id: 'parent-reflection-prompt-copy',
    title: 'Parent Reflection Prompt Copy v1',
    serviceFile: 'src/services/parentReflectionPromptCopyService.ts',
    docFile: 'docs/parent/PARENT_REFLECTION_PROMPT_COPY_V1.md',
    purpose: 'Adds reflective parent prompts with gentle pacing and no-gamification framing.',
    parentTrustPromisesCovered: ['No ads, rankings, streaks, leaderboards, or pressure loops.', 'Parents stay in control.', 'Family can continue gently when ready.'],
    implementationStatus: 'implemented',
  },
  {
    id: 'journey-detail-parent-trust-copy',
    title: 'Journey Detail Parent Trust Copy v1',
    serviceFile: 'src/services/journeyParentTrustCopyService.ts',
    docFile: 'docs/parent/JOURNEY_DETAIL_PARENT_TRUST_COPY_V1.md',
    purpose: 'Reinforces parent trust statements on journey detail surfaces.',
    parentTrustPromisesCovered: ['Progress stays on this device.', 'No public child profile.', 'Sacred content is handled respectfully.'],
    implementationStatus: 'implemented',
  },
  {
    id: 'parent-controls-journey-settings-copy',
    title: 'Parent Controls Journey Settings Copy v1',
    serviceFile: 'src/services/parentControlsJourneySettingsCopyService.ts',
    docFile: 'docs/parent/PARENT_CONTROLS_JOURNEY_SETTINGS_COPY_V1.md',
    purpose: 'Clarifies journey settings copy for parents without introducing behavior changes.',
    parentTrustPromisesCovered: ['Parents stay in control.', 'No automatic sharing.', 'No microphone or recording in this version.'],
    implementationStatus: 'implemented',
  },
];

const parentTrustCopyCanonicalPromises = [
  'Progress stays on this device.',
  'No public child profile.',
  'Exact age is not required.',
  'No automatic sharing.',
  'No analytics or telemetry tracking in current scope.',
  'No microphone or recording in this version.',
  'No ads, rankings, streaks, leaderboards, or pressure loops.',
  'Sacred content is handled respectfully.',
  'Parents stay in control.',
  'Family can continue gently when ready.',
];

const parentTrustCopyPreservationGuardrails = [
  'No backend, cloud, or account implication in copy-only inventory updates.',
  'No tracking, analytics, or telemetry implication in copy-only inventory updates.',
  'No sharing implementation implication in copy-only inventory updates.',
  'No exact-age collection implication in copy-only inventory updates.',
  'No reward or gamification framing in copy-only inventory updates.',
  'No sacred-content over-cartooning in copy-only inventory updates.',
  'No fake controls or toggles in copy-only inventory updates.',
  'No new runtime behavior from copy-only PRs.',
];

const parentTrustCopyNextAuditRecommendations = [
  'PR #153: Parent-Facing Copy Snapshot Validator v1',
  'PR #154: Child-Facing Copy Inventory v1',
];

export function buildParentTrustCopyInventory(): ParentTrustCopyInventoryModel {
  return {
    modelVersion: parentTrustCopyInventoryModelVersion,
    surfaces: [...parentTrustCopyInventorySurfaces],
    canonicalPromises: [...parentTrustCopyCanonicalPromises],
    preservationGuardrails: [...parentTrustCopyPreservationGuardrails],
    nextAuditRecommendations: [...parentTrustCopyNextAuditRecommendations],
    accessibilityLabel: 'Parent trust copy inventory model',
    accessibilityHint: 'Summarizes parent trust-copy surfaces, promises, and preservation guardrails for roadmap-safe audits.',
  };
}

export function getParentTrustCopyInventorySurfaces(): ParentTrustCopyInventorySurface[] {
  return [...parentTrustCopyInventorySurfaces];
}

export function getParentTrustCopyCanonicalPromises(): string[] {
  return [...parentTrustCopyCanonicalPromises];
}

export function getParentTrustCopyInventorySummary(): string {
  return `Parent Trust Copy Inventory v1 tracks ${parentTrustCopyInventorySurfaces.length} parent trust-copy surfaces and ${parentTrustCopyCanonicalPromises.length} canonical promises with copy-only preservation guardrails.`;
}
