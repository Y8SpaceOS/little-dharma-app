# PR #148: Parent Controls Journey Settings Copy v1

## PR title and purpose
PR #148 introduces static, read-only parent-facing journey settings copy to clarify gentle pacing, local-first progress, and non-competitive design language.

## Roadmap alignment
This copy-only PR aligns with trust-and-clarity hardening work across parent surfaces and preserves existing runtime behavior.

## Why Parent Controls Journey Settings Copy follows Parent Weekly Summary Copy Polish
Parent Weekly Summary Copy Polish established tone consistency for parent trust language, and this PR extends that same tone into Parent Controls journey messaging.

## Parent controls journey settings copy goal
Provide concise, parent-readable reassurance that journey pacing is gentle and local-first, with no pressure mechanics.

## Approved copy lines
- Journey choices stay gentle.
- Your child can go one story at a time.
- You can pause and return later.
- Progress stays on this device.
- No streaks, rankings, or pressure.
- Broad age bands guide story readiness.
- Sacred journeys are handled with care.
- More parent choices can be added later.

## What this copy is
A static read-only copy block rendered on `app/(parent)/controls.tsx`.

## What this copy is not
Not a new settings feature, not a behavior change, and not a new control system.

## Parent-facing journey setting principles
- Calm and non-competitive language.
- Family-paced progression.
- Local device privacy.
- Respectful sacred-content framing.

## Gentle journey choice copy rules
Include explicit language that journey choices stay gentle.

## One-story-at-a-time copy rules
Include explicit language that a child can proceed one story at a time.

## Pause/return-later copy rules
Include explicit language that parents can pause and resume later without pressure.

## Local progress copy rules
Include explicit language that progress remains on this device.

## No-streak/no-ranking/no-pressure copy rules
Include explicit language rejecting streaks, rankings, and pressure loops.

## Broad age-band copy rules
Reference broad age bands for readiness without exact age collection.

## Sacred journey care copy rules
State that sacred journeys are handled with care and respectful language.

## Future settings copy rules
State that more parent choices may be added later without implying current functionality.

## UI integration status
Bound only to `app/(parent)/controls.tsx` as static read-only text.

## No backend/no tracking assumptions
No backend integration, cloud sync, telemetry, analytics, or remote profile behavior is introduced.

## No notifications/no sharing assumptions
No reminders, notifications, email, SMS, WhatsApp, social sharing, referrals, or sharing workflows are introduced.

## No AI personalization assumptions
No AI personalization, generation, ranking, or adaptive recommendation behavior is introduced.

## No fake controls/toggles assumptions
No fake controls, no new toggles, no new switches, and no new buttons are introduced by this PR.

## No hard gamification rules
No streaks, coins, points, leaderboards, rankings, XP loops, or reward pressure mechanics are introduced.

## Journey progress behavior preservation rules
No journey progress data model changes, completion writes, or migration behavior changes are introduced.

## Story completion behavior preservation rules
No story completion state transitions, completion milestones, or completion-trigger behavior changes are introduced.

## Story runtime/audio preservation rules
No story runtime resolver, playback runtime, or audio entry behavior changes are introduced.

## Relationship to Parent Controls Copy Hardening v1
Extends parent trust wording in a narrowly scoped journey settings copy block.

## Relationship to Journey Detail Parent Trust Copy v1
Maintains consistent trust posture and local-first messaging without adding feature behavior.

## Relationship to Parent Weekly Summary Copy Polish v1
Uses the same calm parent-facing voice established in weekly summary copy polish.

## What this PR changes
- Adds a versioned journey settings copy service.
- Adds governance documentation for this copy contract.
- Adds automated validator coverage for scope and guardrails.
- Renders static read-only journey microcopy on Parent Controls.

## What this PR does not do
Does not add toggles, switches, fake controls, new settings state, backend/cloud sync, analytics/telemetry, notifications/reminders, sharing/social, AI personalization, new routes, journey progress changes, story completion changes, or runtime/audio changes.

## Follow-up recommendations for PR #149 and PR #150
- PR #149: My Treasures Trust Copy v1
- PR #150: Story World Empty/Coming Soon Trust Copy v1

## Final PR #148 readiness statement
PR #148 is ready as a copy-only, static read-only parent-controls update that preserves existing behavior and honors all no-feature-expansion constraints.
