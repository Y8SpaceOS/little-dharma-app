# Story World Trust Microcopy v1

## PR title and purpose
**PR #142: Story World Trust Microcopy v1** adds gentle, child-facing trust microcopy on Story World so children can choose a doorway calmly without pressure.

## Roadmap alignment
This sprint follows **PR #141: Child Home Trust Microcopy v1** in the approved trust-copy sequence.

## Why Story World Trust Microcopy follows Child Home Trust Microcopy
Child Home Trust Microcopy established calm, no-race language at entry. Story World now applies that same trust tone to doorway selection.

## Story World trust microcopy goal
Help children feel safe choosing one doorway, moving slowly, and knowing stories can wait.

## What this microcopy is
- Local-first, static, read-only child-facing trust text.
- Short reminders for doorway choice, no-race pacing, readiness, family reading, sacred care, and Luvlu helper guidance.

## What this microcopy is not
- Not a navigation change.
- Not a doorway order/output change.
- Not backend/auth/payment/analytics/telemetry work.
- Not sharing, messaging, or social implementation.
- Not progress/state mutation logic.

## Child-facing copy principles
- Warm, simple, short.
- Gentle pacing language.
- Helper guidance without pressure.
- No parent/legal-heavy framing on child surface.

## Doorway choice copy rules
Use direct, calm language: **“Choose one doorway.”**

## No-race copy rules
State clearly: **“There is no race here.”**

## Readiness/waiting copy rules
State clearly that waiting is okay: **“Stories can wait for you.”**

## Family reading copy rules
Invite co-reading: **“You can read with your family.”**

## Sacred care copy rules
Preserve respectful framing: **“Stories are shared with care.”**

## Luvlu helper copy rules
Position Luvlu as optional support only: **“Luvlu can help you choose.”**

## Coming-soon care copy rules
Describe readiness, not gating: **“Some worlds are still getting ready.”**

## UI integration status
Integrated as a minimal static trust block on `app/(child)/worlds.tsx` with no new controls, routes, or navigation behavior changes.

## No backend/no tracking assumptions
- No backend/auth/cloud sync/payment work is introduced.
- No analytics/telemetry/tracking implementation is introduced.
- No network/API calls are introduced by this microcopy service.

## No hard gamification rules
No XP, coins, streaks, leaderboards, ranking, score, performance, achievement unlocked, referral, viral, unlock, premium, or locked mechanics/language are introduced.

## Story World doorway preservation rules
- Doorway titles, output, and order remain unchanged.
- Existing Story World browse behavior remains unchanged.
- No “Story Library” child-facing regression.

## Relationship to Child Home Trust Microcopy v1
Builds directly on PR #141 trust language and keeps the same child-safe, no-pressure tone.

## Relationship to Story Detail Trust Microcopy v1
This PR is the Story World layer that precedes Story Detail Trust Microcopy so trust language stays consistent from doorway selection into detail-level reading context.

## What this PR changes
- Adds `storyWorldTrustMicrocopyService` model + accessors + summary.
- Adds minimal read-only trust microcopy block to Story World.
- Adds sprint validator script and npm script entry.
- Adds this sprint documentation.

## What this PR does not do
- No new child routes.
- No Story World redesign.
- No doorway list/order/output changes.
- No runtime availability changes.
- No persistence/progress mutation changes.

## Follow-up recommendations for PR #143 and PR #144
Roadmap naming source: existing Child Home Trust Microcopy v1 doc follow-up section and sprint instructions.

- **PR #143: Story Detail Trust Microcopy v1**
  - Add trust microcopy to story detail context (ready pacing, family co-reading, care language near start actions).
- **PR #144: Completion Trust Microcopy v1**
  - Add gentle completion-moment trust language with no score/rank/streak framing.

## Final PR #142 readiness statement
PR #142 is ready once repository validation passes: Story World trust microcopy is static/read-only, child-safe, roadmap-aligned, and preserves existing Story World behavior.
