# PR #153: Parent-Facing Copy Snapshot Validator v1

## PR title and purpose
Create a strict, maintainable validator that audits parent-facing trust copy surfaces for drift against canonical promises and prohibited patterns.

## Roadmap alignment
This PR follows **PR #152: Parent Trust Copy Inventory v1** and prepares copy governance groundwork for child-facing inventory and validator phases.

## Why Parent-Facing Copy Snapshot Validator follows Parent Trust Copy Inventory
PR #152 established canonical parent trust promises and source surfaces. This validator applies automated checks against that inventory so drift can be detected early.

## Parent-facing copy snapshot validator goal
Prevent regressions in parent trust-copy language while preserving current runtime behavior and route structure.

## What this validator checks
- Inventory/service file existence and exports.
- Expected parent surface IDs in inventory.
- Canonical promise presence in inventory.
- Collective theme coverage across parent trust-copy services.
- Forbidden terms allowed only in negative/no-pressure context.
- Implementation token and banned-import absence in parent copy services.
- Route preservation (no parent/child/app route changes in this PR).
- Story Library regression prevention.
- Seed file presence.
- Package script registration.

## What this validator does not check
- UI rendering output or component visuals.
- Runtime logic correctness beyond static token/pattern governance.
- API/backend behavior (no such behavior is introduced in this PR).

## Parent trust inventory dependency
Depends on `src/services/parentTrustCopyInventoryService.ts` as the canonical source for surfaces and promises.

## Parent services covered
- `src/services/parentControlsCopyService.ts`
- `src/services/privacyCenterCopyService.ts`
- `src/services/parentOnboardingTrustCopyService.ts`
- `src/services/parentSharingCopyService.ts`
- `src/services/parentWeeklySummaryService.ts`
- `src/services/parentWeeklySummaryCopyPolishService.ts`
- `src/services/parentReflectionPromptCopyService.ts`
- `src/services/journeyParentTrustCopyService.ts`
- `src/services/parentControlsJourneySettingsCopyService.ts`

## Canonical promise coverage rules
Canonical promises must exist in inventory. Individual services may cover only relevant subsets; missing per-service promises produce WARN, not FAIL.

## Collective theme coverage rules
The combined parent service set must cover local-first, privacy, no-auto-sharing, no-tracking, no-recording, no-pressure, sacred respect, parent-control, and gentle continuation themes. Missing collective themes FAIL.

## Forbidden term rules
High-risk terms (e.g., engagement, retention, score, streak, referral, tracking, analytics, cloud sync) are prohibited unless explicitly used in negative/no-pressure framing.

## Negative-context allowance rules
Forbidden terms are allowed only when nearby text clearly negates them (for example “no analytics” or “not shared automatically”).

## Implementation-token rules
Parent copy services must not include runtime implementation tokens, state mutation helpers, network/auth/cloud/analytics hooks, share/mail/SMS/notification hooks, or AI tokens.

## Route preservation rules
This PR must not modify app route files or introduce new parent/child routes.

## No backend/no tracking assumptions
Validator enforces no backend-active implication, no cloud-account requirement implication, and no tracking/analytics/telemetry implication.

## No notifications/no sharing assumptions
Validator enforces no active notifications/reminders implication and no automatic sharing implication.

## No AI personalization assumptions
Validator forbids AI personalization/AI implementation tokens in parent copy services.

## No fake controls/toggles assumptions
Validator protects against copy that implies fake controls/toggles not backed by implementation.

## No hard gamification rules
Validator blocks ranking/scoring/streak/pressure framing and related gamification regressions.

## Runtime behavior preservation rules
PR is validator/docs/script-only and does not alter runtime behavior.

## Story completion behavior preservation rules
No story completion helper or behavior mutation tokens are allowed in covered parent copy services.

## Journey progress behavior preservation rules
No journey progress mutation/helper tokens are allowed in covered parent copy services.

## Story reader/audio preservation rules
No audio/recording library imports or behavior tokens are allowed in covered parent copy services.

## Relationship to Parent Trust Copy Inventory v1
This validator operationalizes PR #152 canonical promises and parent-surface inventory as enforceable checks.

## Relationship to Privacy Center Copy Hardening v1
Includes privacy-center service in cross-surface trust governance checks.

## Relationship to Parent Controls Copy Hardening v1
Includes parent-controls service and journey settings copy service in governance checks.

## Relationship to Parent Weekly Summary Copy Polish v1
Includes weekly summary and polish services to ensure no drift toward pressure/gamification language.

## What this PR changes
- Adds `scripts/validate-parent-facing-copy-snapshot-v1.mjs`.
- Adds `docs/parent/PARENT_FACING_COPY_SNAPSHOT_VALIDATOR_V1.md`.
- Registers npm script `validate:parent-facing-copy-snapshot-v1`.

## What this PR does not do
- No UI changes.
- No route additions/changes.
- No runtime behavior changes.
- No backend/cloud/sync/auth/payment/network additions.
- No analytics/telemetry additions.
- No sharing/notification/reminder/email/SMS/WhatsApp/social implementation.
- No AI personalization.
- No fake controls/toggles.
- No gamification mechanics.

## Follow-up recommendations for PR #154 and PR #155
- **PR #154: Child-Facing Copy Inventory v1**.
- **PR #155: Child-Facing Copy Snapshot Validator v1**.

Roadmap naming source: `src/services/parentTrustCopyInventoryService.ts` currently references PR #154 as next audit recommendation; this validator doc extends the immediate follow-up sequence to include PR #155.

## Final PR #153 readiness statement
PR #153 is ready when validator checks pass and route/runtime preservation constraints remain unchanged.
