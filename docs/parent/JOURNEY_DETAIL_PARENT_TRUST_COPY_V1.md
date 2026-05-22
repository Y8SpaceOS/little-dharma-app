# PR #136: Journey Detail Parent Trust Copy v1

## PR title and purpose
PR #136 adds a local-first, read-only parent trust copy service for journey detail surfaces so families can quickly understand tone, values, privacy, sacred respect, and availability staging.

## Roadmap alignment
This follows PR #135 Parent Weekly Summary v1 in sequence and keeps the parent trust surface expansion incremental.

## Why Journey Detail Parent Trust Copy follows Parent Weekly Summary
Parent Weekly Summary established parent-facing trust language and local-first framing. Journey detail trust copy extends that same trust baseline to journey-level context before or during family reading.

## Parent trust copy goal
Give parents concise, culturally respectful language on what a journey is, why it is gentle, what values are explored, how sacred content is handled, and what is/not tracked.

## What this trust copy is
- A read-only service model for parent trust messaging.
- Local-first messaging only.
- Availability messaging that distinguishes runtime-available, staged preparation, and coming soon.

## What this trust copy is not
- Not child progression logic.
- Not runtime unlock logic.
- Not network/backend/auth/payment/analytics/telemetry/email/push/share implementation.
- Not a new route or UI redesign.

## Data sources
- `DharmaJourneyV1` fields: title, childFacingTitle, description, recommendedAgeBands, primaryValues, sacredRespectNotes, parentTrustNotes, status, isRuntimeAvailable, storyRefs.

## Age appropriateness copy rules
- If `recommendedAgeBands` exist, render broad age-band phrasing.
- If missing, fallback to calm generic age-appropriate family reading copy.
- Never collect or expose exact child age.

## Values copy rules
- If `primaryValues` exist, list them in parent-friendly text.
- If missing, use a safe fallback values list.

## Sacred respect copy rules
- If `sacredRespectNotes` exist, prioritize the first curated note.
- Otherwise use a respectful fallback that emphasizes care and context.

## Progress privacy copy rules
- Explicitly state progress stays on device.
- Explicitly state no cloud sync and no tracking-style ranking loop language.

## Availability copy rules
- `available` or `runtime_ready` or `isRuntimeAvailable=true`: available now copy.
- `qa_ready` / staged statuses: preparing/staged copy only.
- `coming_soon`: coming soon copy only.
- No staged/qa_ready content is exposed as playable.

## Parent guidance bullet rules
- Include calm “For parents” framing.
- Include values and pacing expectations.
- Include local-first progress privacy line.
- Include no-pressure/no-score/no-streak wording.
- Include availability preparation line when not runtime-available.

## UI integration status
UI binding is intentionally deferred in this PR to reduce route-surface risk in `app/world/[slug].tsx`, which currently uses static world-card content not yet backed by journey resolver wiring.

## Privacy/no-backend assumptions
- Local-first read-only service.
- No backend/auth/cloud sync implementation.
- No telemetry/analytics implementation.
- No network calls.

## No hard gamification rules
Trust copy must not introduce XP, coins, streaks, leaderboards, ranks, scores, performance labels, or report-card framing.

## Relationship to Journey Data Model v1
Builds on Journey Data Model v1 fields and does not mutate that model.

## Relationship to Parent Journey Progress Dashboard v1
Complements dashboard progress snapshots with journey-level trust and context language.

## Relationship to Parent Weekly Summary v1
Reuses the same calm parent tone and local-first trust assumptions established in PR #135.

## Relationship to Runtime Story Resolver v2
Does not bypass or alter Runtime Story Resolver v2; availability messaging remains read-only and non-playability-changing.

## What this PR changes
- Adds `journeyParentTrustCopyService` with required exports and fallback-safe copy generation.
- Adds validator for service/docs/rules compliance.
- Adds package script for validator execution.

## What this PR does not do
- No backend/auth/cloud/payment/analytics/telemetry/email/push/share work.
- No story completion or journey progress mutation changes.
- No Story World doorway ordering or child route structure changes.
- No new runtime story availability exposure.

## Follow-up recommendations for PR #137 and PR #138
- PR #137: Parent Sharing Copy v1.
- PR #138: Parent Controls Copy Hardening v1.
- Source: roadmap sequence provided in sprint brief for PR #136.

## Final PR #136 readiness statement
PR #136 is ready once validators pass in CI and integration remains read-only/local-first with no routing or progress-write regressions.
