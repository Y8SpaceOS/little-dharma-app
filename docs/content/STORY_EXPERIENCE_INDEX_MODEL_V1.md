# PR #155: Story Experience Index Model v1

## PR title and purpose
Define a formal Story Experience Index Model v1 for consistent counting, classification, and recovery scaling.

## Roadmap alignment
This PR is the approved next step after PR #154 and before PR #156/PR #157.

## Why Story Experience Index Model follows Content Scale Recovery Control Tower
PR #154 exposed gaps to PR #207 targets; this model standardizes counting semantics before bulk import and runtime gating.

## Story Experience Index goal
Create stable, repeatable local-first metrics for indexed, runtime-ready, audio-script-ready, and published-local story experiences.

## What is a story experience
A story experience is an indexed unit mapped to a unique experienceId tied to local metadata, readiness, category, and journey coverage.

## What this model is
A docs + types + service + validator model that classifies existing registry stories without mutating runtime behavior.

## What this model is not
Not a new content pack, not a runtime promotion mechanism, not an audio pipeline, and not a backend/telemetry feature.

## Story versus story experience counting rules
One unique storyId normally equals one indexed story experience; placeholders are excluded unless backed by content metadata.

## Age-band variant counting rules
Age-band variants count as additional experiences only when they have separate entry IDs.

## Runtime-ready counting rules
qa_ready does not imply runtime-ready; runtime-ready requires Runtime Story Resolver v2 canRender eligibility.

## Audio-ready script counting rules
Audio script readiness requires explicit script status mapping; metadata placeholders alone do not qualify.

## Published-local counting rules
Published-local means child-usable in local app distribution without backend dependency.

## Story World category mapping rules
Primary category is inferred conservatively from storyPackId only when explicit category mapping is unavailable.

## Dharma Journey mapping rules
Journey coverage uses journeyId and journeyOrder metadata with runtime qualification from resolver eligibility.

## Content pack mapping rules
Each entry is tied to storyPackId; contentPackCount reads from existing content registry packs.

## Confidence and limitation rules
Model records confidence and explicit limitations for inferred category and journey mappings and conservative audio detection.

## PR #207 target alignment
Targets remain aligned with PR #154: 1000 indexed, 450 runtime-ready, 350 audio-ready.

## Integration with Content Scale Recovery Control Tower v1
Control tower counters now read Story Experience Index counters for indexed/runtime/audio confidence uplift.

## Integration with Runtime Story Resolver v2
Runtime-ready eligibility is sourced from getRuntimeStoryEligibility(story).canRender.

## Integration with Story World Data-Driven Browse
No doorway order/output changes; index only maps and counts category coverage.

## No backend/no tracking assumptions
No backend, auth, cloud sync, analytics, or telemetry implementation is added.

## No notifications/no sharing assumptions
No notifications, reminders, push/email/SMS/WhatsApp/social sharing mechanics are added.

## No AI personalization assumptions
No AI personalization logic is introduced.

## No reward/gamification assumptions
No reward systems, streaks, points, or gamification mechanics are introduced.

## Runtime behavior preservation rules
No runtime resolver behavior is modified and no qa_ready content is promoted automatically.

## Story completion behavior preservation rules
No completion write/read flows are called or modified.

## Journey progress behavior preservation rules
No journey progress write/read flows are called or modified.

## Story reader/audio preservation rules
No story reader behavior or audio foundation behavior changes are included.

## What this PR changes
- Adds Story Experience Index types.
- Adds Story Experience Index service and summary/counter APIs.
- Adds validator and package script registration.
- Adds this documentation.

## What this PR does not do
- Add stories or content packs.
- Change routes/UI surfaces.
- Change runtime availability behavior.
- Add backend/network/tracking/sharing/notification systems.

## Follow-up recommendations for PR #156 and PR #157
- PR #156: Bulk Content Import Pipeline v2 should generate index-ready entries with explicit category/journey metadata.
- PR #157: Runtime-Ready Story Gate v1 should enforce resolver-qualified promotions into runtime-ready counts.

## Final PR #155 readiness statement
PR #155 is recovery-aligned and ready to support consistent content-scale measurement for upcoming bulk content recovery PRs.
