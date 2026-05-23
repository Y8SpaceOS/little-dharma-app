# PR #157: Runtime-Ready Story Gate v1

## PR title and purpose
Define a strict, measurable, and safe runtime-ready story gate contract and dry-run gate report.

## Roadmap alignment
Recovery-aligned follow-up to PR #154, PR #155, and PR #156.

## Why Runtime-Ready Story Gate follows Bulk Content Import Pipeline v2
Bulk import candidate stories need deterministic readiness decisions before any runtime availability decisions.

## Runtime-ready story gate goal
Create a pure/read-only validator that produces gate reports and counter impact.

## What this gate is
A contract + validator for runtime-ready candidate evaluation.

## What this gate is not
It is not runtime promotion, resolver mutation, route change, or content import.

## Runtime-ready definition
A story is `runtime_ready_candidate` only when required fields are present and fail-level issues are absent.

## Runtime-ready versus QA-ready
QA-ready indicates editorial baseline; runtime-ready candidate adds renderer-critical fields and safety checks.

## Runtime-ready versus published-local
Published-local is out of scope in PR #157.

## Runtime-ready versus audio-ready
Audio readiness is out of scope in PR #157 and deferred to PR #158.

## Required story fields
storyId, title, summary/description, sourceTradition, category mapping, ageBands, primaryValue, secondaryValues, characters, >=4 panels with text, durationMinutes, parentNote, parentNote.sourceContext, parentNote.discussionPrompt, reflectionPrompt.

## Panel quality rules
Minimum panel count, non-empty text, panel length guardrail, blocked language checks, sacred-care note expectation.

## Parent note rules
Require sourceContext and discussionPrompt; require valueForParent/valueExplained when available; enforce respectful non-performance framing.

## Reflection prompt rules
Require reflectionPrompt; no quiz/score/performance framing; keep gentle and optional family-safe tone.

## Category mapping rules
primaryCategoryId must be a Story Experience Index category; storyPackId inference is conservative and marked as limitation.

## Dharma Journey mapping rules
journeyId is optional; journeyOrder expected when journeyId exists for ordered journey runtime readiness.

## Resolver eligibility rules
For current registry stories, use Runtime Story Resolver v2 `getRuntimeStoryEligibility(story).canRender` read-only.

## Blocked story rules
Missing required fields, exact child age, Story Library wording, backend/tracking/sharing/notification wording, hard gamification language, sacred trivialization, or resolver canRender=false for registry stories.

## Gate decision model
`runtime_ready_candidate`, `qa_ready_only`, `blocked`, `needs_editorial_review`, `needs_runtime_fields`.

## Gate report structure
Report includes modelVersion, story identifiers/status, decision, issues, check blocks, resolver check, counter impact, source files, and limitations.

## Counter impact reporting
Tracks runtimeReadyDelta, qaReadyOnlyDelta, blockedDelta, needsReviewDelta, and PR #207 runtime-ready target.

## Relationship to Story Experience Index Model v1
Uses category IDs and status context where available.

## Relationship to Bulk Content Import Pipeline v2
Accepts bulk story input shape for dry-run readiness gate usage in future content PRs.

## Relationship to Content Scale Recovery Control Tower v1
Produces measurable readiness outputs aligned with recovery counter thinking.

## Relationship to Runtime Story Resolver v2
Uses resolver eligibility read-only for registry stories and does not modify resolver behavior.

## Relationship to future PR #159–170 content packs
Provides standardized pre-runtime readiness gate reports for pack-level planning.

## No backend/no tracking assumptions
No backend, auth, cloud sync, analytics, or telemetry additions.

## No notifications/no sharing assumptions
No notifications, reminders, email, SMS, WhatsApp, referral, invite, or sharing implementation.

## No AI personalization assumptions
No AI personalization logic is added.

## No reward/gamification assumptions
No reward, points, streak, leaderboard, or gamification mechanics are added.

## Runtime behavior preservation rules
No runtime resolver bypass and no runtime availability mutation.

## Story completion behavior preservation rules
No story completion persistence/service changes.

## Journey progress behavior preservation rules
No journey progress persistence/service changes.

## Story reader/audio preservation rules
No story reader behavior changes and no audio foundation changes.

## What this PR changes
Adds runtime-ready gate types, service, docs, and validator script.

## What this PR does not do
Does not add stories/packs/routes or promote qa_ready to runtime-ready.

## Follow-up recommendations for PR #158 and PR #159
- PR #158: Audio-Ready Script Gate v1
- PR #159: Ramayana Expansion Recovery Pack v1

## Final PR #157 readiness statement
PR #157 introduces runtime-ready gate contract and validation-only behavior with no runtime mutations.

## PR #207 target alignment
Gate report counter impact includes `pr207RuntimeReadyTarget` to keep readiness work aligned to PR #207.
