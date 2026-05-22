# PR #128: Parent Journey Progress Dashboard v1

## PR title and purpose
PR #128 introduces a parent-facing, local-first, read-only journey progress dashboard model so families can calmly understand available, staged, and coming-soon Dharma Journeys plus local completion context.

## Roadmap alignment
- Approved roadmap item: Parent Journey Progress Dashboard v1.
- Original slot: PR #125.
- Adjusted slot after governance insertions (PR #115–117): PR #128.

## Why Parent Journey Progress Dashboard follows content-pack foundation
This dashboard is layered after PR #118–127 so it can summarize established content model, registry, resolver, journey model, and seeded journey packs without changing child runtime behavior.

## Parent trust goal
Provide a culturally respectful, non-addictive progress surface that emphasizes values explored, completed stories, and next gentle story guidance without pressure language.

## Local-first progress assumptions
- Progress is computed synchronously from local journey/story progress stores.
- No account, cloud, backend, or telemetry dependency.
- Read-only: this PR does not write completion state.

## Data sources
- Journey catalog: `getDharmaJourneys()` from Journey Data Model v1.
- Story completion state: local story completion helper.
- Journey completion state: local journey progress helper.

## Journey progress card model
The parent card model includes:
- journeyId
- journeyTitle
- childFacingTitle
- status
- totalStories
- runtimeAvailableStoryCount
- completedStoryCount
- completionPercent
- nextStorySlug
- nextStoryTitle
- primaryValues
- recommendedAgeBands
- parentSummary
- trustNote
- isRuntimeAvailable
- isComingSoon
- accessibilityLabel
- accessibilityHint

## Runtime-available vs qa_ready vs coming-soon handling
- **Available/runtime-ready**: journeys fully runtime-available per Journey Data Model v1 + runtime resolver constraints.
- **Staged/qa_ready**: not runtime-open; surfaced as staged for parent visibility only.
- **Coming soon**: explicitly non-routable preview state.
- qa_ready content is never surfaced as playable/runtime-open by this dashboard model.

## Completion percentage rules
- Completion percentage counts only stories that are runtime-available **or** already known in local completion state.
- This prevents staged-only stories from inflating or pressuring progress.

## Next story recommendation rules
- Recommend the first runtime-available incomplete story in journey order.
- If none remain, return no recommendation and communicate gentle completion wording.
- Never recommend qa_ready-only non-runtime stories as playable.

## Values summary rules
- Values summary deduplicates journey primary values and returns a concise top set for calm parent readability.

## Privacy and no-backend assumptions
- No backend/auth/login/accounts.
- No analytics/telemetry.
- No payments/subscriptions/cloud storage additions.
- No networking added for progress computation.

## No hard gamification rules
- No XP, coins, streaks, ranks, leaderboards, or pressure framing.
- Parent wording uses “journey progress,” “completed stories,” “values explored,” and “next gentle story.”

## UI integration status
UI route binding is intentionally deferred in PR #128. Parent route architecture already exists, but this sprint focuses on service + validator + docs while avoiding broad navigation changes.

## What this PR changes
- Adds parent journey progress service with read-only dashboard computation.
- Adds PR #128 documentation and governance rules.
- Adds validator gate for parent dashboard v1 constraints.

## What this PR does not do
- No backend/auth/cloud sync/payment/analytics/telemetry.
- No microphone/recording/audio implementation.
- No child route redesign.
- No Story World doorway order changes.
- No story completion write-path changes.

## Follow-up recommendations for PR #129 and PR #130
- **PR #129: Story Completion Moment v1** — add gentle completion moment UX aligned to current local-first completion writes.
- **PR #130: Story Audio Foundation v1** — introduce foundational audio architecture under child-safe and privacy-safe constraints.

## Final PR #128 readiness statement
PR #128 is ready once typecheck, lint, tests, existing journey/content validators, and the new parent dashboard validator all pass.
