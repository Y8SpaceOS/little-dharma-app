# PR #110: Local State Runtime Hardening v1

## Purpose
Harden local-first runtime parsing and normalization so malformed, missing, legacy, or partially invalid AsyncStorage payloads do not crash app flows or produce unsafe in-memory state.

## Summary of Hardening Changes
- Added strict load-time normalization for onboarding and child profile state.
- Added defensive journey progress normalization with per-entry validation and malformed-entry dropping.
- Added explicit story progress prune helper for stale slug cleanup (opt-in, not automatic).
- Added parent feedback clear/reset helper and contact-detail clearing when permission is not granted.
- Added malformed payload unit tests for onboarding, child profile, story progress, journey progress, pruning, and parent feedback reset behavior.

## State Areas Hardened
- `src/lib/onboardingState.ts`
- `src/lib/childProfile.ts`
- `src/lib/journeyProgress.ts`
- `src/lib/storyProgress.ts`
- `src/lib/parentFeedback.ts`

## Malformed Payload Behavior
- Corrupted JSON across hardened stores safely falls back to defaults instead of throwing.
- Invalid enum-like values are dropped to safe defaults/undefined values.
- Journey entries lacking safe identity (`journeyId`) are discarded.
- Journey `completedStoryIds` is normalized to unique, non-empty strings.
- Story completion maps ignore malformed entries.

## Storage Migration / Versioning Note
No storage key version bump is introduced in PR #110. Hardening is runtime-normalization based and backward-compatible with existing keys. Future storage-shape migrations can still increment keys if structural changes become necessary.

## Tests Added
- `src/lib/localStateRuntimeHardening.test.ts`
  - corrupted onboarding JSON fallback
  - invalid/missing child profile fields normalization
  - corrupted story progress fallback
  - journey duplicate/invalid entry normalization
  - stale slug pruning helper behavior
  - parent feedback clear/reset behavior

## Scope Guardrail Confirmation
- No new app routes added.
- No prototype-only screen runtime implementation added.
- No backend/auth/payment/checkout/audio/microphone/recording implementation added.
- No visual redesign scope added.

## Follow-up Recommendations for PR #111
- Add optional bounded retention policy timestamps for selected local state classes.
- Add telemetry-free local diagnostics counters for normalization fallback frequency.
- Evaluate formal storage schema-version metadata with staged migration helpers.
