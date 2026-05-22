# PR #141: Child Home Trust Microcopy v1

## PR title and purpose
**Title:** PR #141: Child Home Trust Microcopy v1  
**Purpose:** Add gentle, child-facing trust microcopy to Child Home so the experience feels calm, safe, warm, and pressure-free without adding new routes or changing progress logic.

## Roadmap alignment
This sprint follows PR #140 (Parent Onboarding Trust Copy v1) in the approved sequence and prepares child-facing trust language before deeper Story World and Story Detail trust microcopy phases.

## Why Child Home Trust Microcopy follows Parent Onboarding Trust Copy
Parent onboarding trust copy established parent-facing trust context first. Child Home trust microcopy now mirrors that trust intent in child-safe words, keeping tone simple and non-legal for children.

## Child home trust microcopy goal
Give children short, warm reminders that this is a calm story world, there is no race, and they can read at their own pace with family support.

## What this microcopy is
- Local-first static read-only copy.
- Child-facing, simple, and short trust reminders.
- A minimal microcopy layer on existing Child Home.

## What this microcopy is not
- Not a new route or new flow.
- Not a redesign of Child Home.
- Not analytics, backend, sharing, or growth instrumentation.
- Not a change to story completion or journey progress behavior.

## Child-facing copy principles
- Keep language short and warm.
- Emphasize calm, choice, and readiness.
- Avoid legal and parent-control framing on child surfaces.
- Avoid pressure, scoring, and reward framing.

## Calm world copy rules
- Must communicate a gentle pace.
- Must avoid urgency and competition cues.
- Canonical phrase: “One calm step at a time.”

## No-race copy rules
- Must explicitly say there is no race.
- Must avoid rank/score/streak language.
- Canonical phrase: “There is no race here.”

## Choice/readiness copy rules
- Must communicate that the child can continue later.
- Must avoid pressure to complete now.
- Canonical phrase: “Read when you feel ready.”

## Family reading copy rules
- Must welcome shared reading with family.
- Must not gate family reading behind features.
- Canonical phrase: “You can read with your family.”

## Sacred care copy rules
- Must communicate gentle story handling.
- Must avoid heavy legal/privacy terminology on Child Home.
- Canonical phrase: “Stories are shared with care.”

## Luvlu helper copy rules
- Must present Luvlu as helper only.
- Must avoid reward, unlock, or score framing.
- Canonical phrase: “Luvlu can help you choose.”

## UI integration status
Integrated minimally into existing `app/(child)/today.tsx` as a static read-only trust microcopy block with no new navigation, no CTA additions, and no layout redesign.

## No backend/no tracking assumptions
- No backend/auth/cloud sync/payment work is introduced.
- No analytics/telemetry/tracking implementation is introduced.
- No network/API calls are introduced.

## No hard gamification rules
No XP, coins, streaks, leaderboards, ranking, score, unlock, premium, referral, or viral mechanics are introduced.

## Relationship to Parent Onboarding Trust Copy v1
Child Home trust words echo the trust posture of PR #140 while adapting tone for children and keeping parent/legal language off child home.

## Relationship to Privacy Center Copy Hardening v1
This child-facing microcopy complements PR #139 by staying consistent with calm/local trust intent while remaining child-safe and non-legal in wording.

## Relationship to Story World Trust Microcopy v1
This PR sets baseline trust language for Child Home that PR #142 will extend into Story World surfaces.

## What this PR changes
- Adds `childHomeTrustMicrocopyService` with versioned local-first child trust copy getters and summary.
- Adds a minimal static trust microcopy block on Child Home (`today.tsx`).
- Adds a dedicated validator script and npm script for PR #141 checks.
- Adds this implementation note document.

## What this PR does not do
- Does not add child routes.
- Does not alter Story World doorway output/order.
- Does not alter story completion or journey progress writes.
- Does not add backend, network, tracking, sharing, notifications, or audio features.

## Follow-up recommendations for PR #142 and PR #143
Roadmap-aligned follow-ups:
- **PR #142: Story World Trust Microcopy v1**
- **PR #143: Story Detail Trust Microcopy v1**

Source for naming: current sprint roadmap in implementation prompt for PR #141 sequence after PR #140.

## Final PR #141 readiness statement
PR #141 is ready for merge once all repository validation commands pass in CI and local checks remain green.
