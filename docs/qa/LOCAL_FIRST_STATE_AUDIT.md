# PR #109: Local-first State + Data Safety Audit

## PR Title and Purpose
**PR #109: Local-first State + Data Safety Audit** verifies that Little Dharma core runtime remains local-first, privacy-safe, resilient to corrupted/missing local state, and independent from backend/auth/cloud/payment/audio systems for current app usage.

## Executive Summary
- Core child-facing and parent-facing progression state is persisted locally with AsyncStorage and has baseline fallback handling for missing and malformed data.
- No backend/cloud/auth/payment/microphone/recording runtime dependency is required for child onboarding, story access, progress marking, or parent controls in current flows.
- Auth routes and subscription routes currently exist as placeholder/legacy surfaces (minimal static screens), not active production implementations.
- Data safety risks found are low-to-moderate and mainly concern schema validation hardening (unvalidated enum values and unbounded key growth for unknown slugs).
- No product expansion, route additions, or visual redesign were performed in this PR.

## Local-first State Inventory
1. **Onboarding completion + profile state** (`onboardingComplete`, profile fields). Source: `src/lib/onboardingState.ts`.
2. **Child profile state** (nickname/age band/intent/setup completion timestamp). Source: `src/lib/childProfile.ts`.
3. **Story completion/progress state** (completion timestamp, badge, value word by story slug). Source: `src/lib/storyProgress.ts`.
4. **Parent controls state** (Luvlu helper prompts, bedtime reduced prompts, parent prompts visibility, updated timestamp). Source: `src/lib/parentControls.ts`.
5. **Journey progress state** (per-journey completed story IDs + current/last opened story metadata). Source: `src/lib/journeyProgress.ts`.
6. **Threshold/gate recency state** (last parent-threshold entry timestamp). Source: `src/lib/thresholdState.ts`.
7. **Parent feedback draft state** (local draft of optional parent feedback form). Source: `src/lib/parentFeedback.ts`.

## Storage Key Inventory
| Key name | Source file | Stored data type | Child/privacy sensitivity | Fallback behavior | Status |
|---|---|---|---|---|---|
| `little_dharma_onboarding_state_v1` | `src/lib/onboardingState.ts` | JSON object with `onboardingComplete` + `profile` | Medium (child identity and preference fields) | Missing/corrupt -> resets to `{ onboardingComplete:false, profile:null }` | safe |
| `little_dharma_child_profile_v1` | `src/lib/childProfile.ts` | JSON object with child nickname/age band/intent/setup metadata | Medium (child nickname/age band) | Missing/corrupt -> default profile with no name and epoch timestamp | safe |
| `little_dharma_story_progress_v1` | `src/lib/storyProgress.ts` | JSON map `{ [storySlug]: { completedAt,badgeName,valueWord? } }` | Low-medium (no direct PII; behavioral progress data) | Missing/corrupt -> empty map `{}` | safe (needs follow-up for slug/schema hardening) |
| `little_dharma_parent_controls_v1` | `src/lib/parentControls.ts` | JSON object of local parent toggles | Low (preference flags only) | Missing/corrupt -> deterministic defaults | safe |
| `little_dharma_journey_progress_v1` | `src/lib/journeyProgress.ts` | JSON map `{ [journeyId]: JourneyProgress }` | Low-medium (behavioral progress pattern data) | Missing/corrupt -> empty map `{}` | safe |
| `little_dharma_threshold_v1_last_entered_at` | `src/lib/thresholdState.ts` | numeric timestamp string | Low | Missing/invalid -> threshold shown (`true`) | safe |
| `little_dharma_parent_feedback_v1` | `src/lib/parentFeedback.ts` | JSON object draft including optional parent contact detail | Medium-high (contains optional parent-entered contact detail) | Missing/corrupt -> empty draft with safe defaults | safe (needs follow-up for retention policy) |

## Child Profile / Onboarding State Review
- Child profile and onboarding are local-only AsyncStorage surfaces with no server transport requirement in audited flows.
- Missing/corrupt values degrade safely to non-crashing defaults in both libraries.
- Onboarding profile currently trusts parsed field values and does not strictly validate enum membership at load time (age/language/character/bedtime). This is acceptable for current controlled UI writes but should be strengthened for defensive migration/read robustness.
- `childNameOrNickname` is trimmed and optional, reducing accidental unsafe empty-string persistence.

## Story Progress / Treasures State Review
- Story completion state is local-only and tolerates absent/corrupt storage by returning `{}`.
- Duplicate completion marking is idempotent per slug key overwrite (latest completion wins).
- Old/unknown slugs remain inert; they do not crash reads because access is key-based and filtered through active story arrays in UI helpers.
- Follow-up needed: add optional pruning or validation to prevent indefinite accumulation of stale/unknown slug entries over long-lived installs.

## Parent Controls / Journey Settings State Review
- Parent controls are local-only toggles with strict boolean defaults and serialized write chain to avoid concurrent write races.
- Journey progress is local-only with missing/corrupt fallback to `{}` and duplicate `completedStoryIds` prevention.
- Parent journey summary aggregates local values only and does not depend on cloud/account systems.

## Auth / Privacy / Subscription Surface Review
- `app/auth/sign-in.tsx` and `app/auth/sign-up.tsx` are placeholder UI surfaces (static text only), not integrated account/auth implementations.
- `app/(parent)/subscription.tsx` is placeholder UI text only.
- `src/services/subscriptions.ts` contains placeholder config (`provider: 'RevenueCat placeholder'`) and does not implement checkout/payment flow.
- Parent privacy copy explicitly states no account sign-in and no cloud sync in current version.

## Backend / Cloud / Payment / Mic / Audio Scope Review
- Core onboarding, child profile, story runtime, world browsing, treasures, parent controls, and parent journey state all run from local data + local storage.
- `src/lib/supabase.ts` exists as configured client scaffold but is not required by audited core local-first user flows.
- No checkout/payment implementation was found (only placeholder subscription surface/config).
- No microphone or recording implementation found.
- Story data model includes `audioAvailable` metadata flags, but no active playback/recording pipeline was identified in audited runtime surfaces.

## Legacy Wording Debt
Terms appearing as copy/placeholder/blocked concepts and **not** active implementation:
- **Auth/account wording** in auth placeholder routes.
- **Subscription/payment wording** in parent subscription placeholder and subscription config placeholder.
- **Cloud sync wording** in parent privacy/controls copy (explicitly says unavailable in this version).
- **Audio/microphone/recording wording** in parent controls/dashboard copy (explicitly says unavailable in this version).
- **Leaderboard wording** appears only in privacy reassurances (“no leaderboard”), not as a feature.

## Data Safety Risks Found
1. **Schema validation depth risk (low-moderate):** onboarding/child profile/journey progress readers rely on permissive parsing and partial shape trust; stricter field validation would improve resilience to tampered or legacy values.
2. **Stale key accumulation risk (low):** story/journey maps can retain obsolete identifiers indefinitely without pruning.
3. **Feedback draft sensitivity risk (low-moderate):** optional contact detail is stored locally without explicit retention expiry/clear-on-submit policy.

## Fixes Made
- Added this audit artifact and enforced validator coverage for local-first documentation and storage-key traceability.
- No runtime product behavior changes were required for this PR because no blocking local-state safety defect was found.

## Follow-up Recommendations
### PR #110
- Add strict runtime validators/normalizers for onboarding and child profile enums at load boundaries.
- Add storage-versioned migration helper utilities for local state evolution.
- Add optional stale-slug pruning utility for story/journey progress maps.

### PR #111
- Add privacy retention policy handling for `parent_feedback` draft (e.g., TTL or explicit parent clear CTA).
- Add “local state integrity checks” unit tests for malformed payload permutations.
- Add consolidated storage key registry doc/source constant to reduce drift.

## Final PR #109 Readiness Statement
PR #109 local-first state and data safety audit is complete for current scope. Core runtime remains local-first and functional without backend/auth/cloud/payment/mic/recording implementation dependencies. Placeholder/legacy auth and subscription surfaces are identified and documented, and follow-up hardening tasks are queued for PR #110 and PR #111.
