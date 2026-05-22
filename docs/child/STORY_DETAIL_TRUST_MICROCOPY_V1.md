# STORY_DETAIL_TRUST_MICROCOPY_V1

## PR title and purpose
PR #143: Story Detail Trust Microcopy v1 adds calm, child-facing trust language to the Story Detail pre-reading surface.

## Roadmap alignment
This work follows PR #142 Story World Trust Microcopy v1 and continues the approved trust microcopy sequence.

## Why Story Detail Trust Microcopy follows Story World Trust Microcopy
After children choose a world doorway, the next trust moment is Story Detail before reading begins. This keeps trust language continuous from doorway to start.

## Story Detail trust microcopy goal
Help children feel calm and unpressured before starting a story.

## What this microcopy is
Static, local-first, read-only trust language for the existing Story Detail surface.

## What this microcopy is not
Not a new route, not a runtime change, not a progression or completion behavior change, and not a feature expansion.

## Child-facing copy principles
Warm, simple, short, and gentle. No legal-heavy or parent-policy language on the child screen.

## Start/readiness copy rules
Use direct readiness language: children can start when they feel ready.

## No-race copy rules
Clearly state there is no race and no speed pressure.

## Slow reading copy rules
Invite slow reading and reinforce one calm story at a time.

## Family reading copy rules
Clearly welcome reading with family.

## Sacred care copy rules
Frame sacred stories as shared with care and respect.

## Luvlu helper copy rules
Position Luvlu as a helper for beginning, not a reward or gate.

## Gentle progress copy rules
Progress language must be gentle and not scored or ranked.

## UI integration status
A minimal static trust copy block is bound in `app/story/[slug].tsx` on the detail stage only, before the story starts.

## No backend/no tracking assumptions
No backend/auth/cloud sync/payment work is introduced.
No analytics/telemetry/tracking implementation is introduced.
No network/API calls are introduced.

## No hard gamification rules
No XP, coins, streaks, leaderboards, rank, unlock, premium, or gated framing in child-facing trust copy.

## Story runtime preservation rules
No changes to runtime story resolver behavior, story availability, panel rendering logic, completion write behavior, or journey progress write behavior.

## Audio behavior preservation rules
No changes to story audio foundation behavior or audio entry logic.

## Relationship to Child Home Trust Microcopy v1
Builds on PR #141 by carrying the same no-race, family-reading, and shared-with-care trust tone into Story Detail.

## Relationship to Story World Trust Microcopy v1
Builds on PR #142 by extending trust language from world selection into pre-reading.

## Relationship to Completion Trust Microcopy v1
Prepares handoff to PR #144 Completion Trust Microcopy v1 for post-reading calm and reflection trust language.

## What this PR changes
- Adds `src/services/storyDetailTrustMicrocopyService.ts` with a typed model and trust copy getters.
- Adds minimal read-only Story Detail UI binding in `app/story/[slug].tsx`.
- Adds validator `scripts/validate-story-detail-trust-microcopy-v1.mjs`.
- Adds npm script `validate:story-detail-trust-microcopy-v1`.

## What this PR does not do
- No new child routes.
- No Story Detail redesign.
- No story reader, panel, completion, journey progress, runtime availability, or audio behavior changes.
- No backend, auth, payment, analytics, telemetry, sharing, messaging, or social implementation.

## Follow-up recommendations for PR #144 and PR #145
- PR #144: Completion Trust Microcopy v1.
- PR #145: Audio Entry Trust Microcopy v1.
Source: roadmap sequence in sprint brief for PR #143.

## Final PR #143 readiness statement
Story Detail Trust Microcopy v1 is implemented as local-first static trust copy with minimal UI binding and preservation of runtime, completion, and audio behaviors.
