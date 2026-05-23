# PR title and purpose
PR #151: Story Reader Gentle Pace Copy v1 introduces calm, child-facing story reader language that removes pressure and supports slow, respectful reading.

## Roadmap alignment
This sprint follows PR #150 Story World Empty/Coming Soon Trust Copy v1 and continues trust-copy hardening in child surfaces without changing runtime behavior.

## Why Story Reader Gentle Pace Copy follows Story World Empty/Coming Soon Trust Copy
PR #150 stabilized trust language at story world entry points; this PR extends that same trust posture into the active story reader stage.

## Story Reader gentle pace copy goal
Help children understand they can read slowly, one calm page at a time, pause safely, and return later without pressure.

## What this copy is
A static, read-only, child-facing set of calm reminders for reader pacing and sacred-care tone.

## What this copy is not
Not a mechanic system, not progress scoring, not rewards, not ranking, not unlock logic, and not behavior tracking.

## Child-facing reader pace principles
- Calm tone
- Non-competitive language
- Family-safe and culturally respectful wording
- No pressure to finish quickly

## Read-slowly copy rules
Include direct plain language: “Read slowly.”

## One-calm-page copy rules
Include direct plain language: “One calm page at a time.”

## Stories-can-wait copy rules
Include direct plain language: “Stories can wait for you.”

## No-race copy rules
Include direct plain language: “There is no race here.”

## Pause/return-later copy rules
Include direct plain language: “You can pause and return later.”

## Family reading copy rules
Include explicit family welcome language: “You can read with your family.”

## Sacred care copy rules
Include explicit respect language: “Sacred stories are read with care.”

## Luvlu gentle pace boundary copy rules
Luvlu may gently encourage pace and calm reading only, and must not be framed as a prize, badge, token, or reward source.

## UI integration status
Integrated in `app/story/[slug].tsx` reader stage as read-only copy-only text, without new controls or navigation changes.

## No backend/no tracking assumptions
No backend, auth, cloud sync, API, tracking, analytics, or telemetry implementation is added.

## No notifications/no sharing assumptions
No notifications, reminders, email, SMS, WhatsApp, social, referral, invite, or sharing implementation is added.

## No AI personalization assumptions
No AI personalization or generated recommendation behavior is added.

## No reward/badge/coin assumptions
No reward, badge, coin, XP, streak, rank, leaderboard, or achievement mechanics are introduced.

## No locked/premium/paywall assumptions
No locked, premium, paywall, upgrade, unlock, or gated framing is introduced.

## No hard gamification rules
Copy must remain non-competitive and must not introduce score pressure, performance framing, or retention loops.

## Story reader runtime preservation rules
Do not change stage runtime flow, panel stepping behavior, or reader state model.

## Story panel rendering preservation rules
Do not change panel rendering logic or panel data selection behavior.

## Story completion behavior preservation rules
Do not change completion write behavior or completion trigger conditions.

## Journey progress behavior preservation rules
Do not change journey progress write behavior or aggregation behavior.

## Runtime availability preservation rules
Do not change runtime resolver behavior and do not make `qa_ready` content runtime-available.

## Audio behavior preservation rules
Do not change story audio foundation behavior, audio visibility rules, or playback availability behavior.

## Relationship to Story Detail Trust Microcopy v1
Story Detail Trust Microcopy v1 covers pre-read entry reassurance; this PR extends calm language during active reading.

## Relationship to Completion Trust Microcopy v1
Completion Trust Microcopy v1 covers post-read completion reassurance; this PR covers in-reader pacing reassurance.

## Relationship to Story World Empty/Coming Soon Trust Copy v1
This PR continues trust language continuity from Story World doorway states into the reader session itself.

## What this PR changes
- Adds Story Reader Gentle Pace Copy service and exports.
- Adds reader-stage static copy binding in `app/story/[slug].tsx`.
- Adds PR #151 validator script and package command.
- Adds this product doc.

## What this PR does not do
- No runtime, panel, completion, progress, runtime availability, or audio behavior changes.
- No route additions (child/parent/story).
- No backend/network/API integrations.
- No notification/sharing/social mechanics.
- No gamified mechanics.

## Follow-up recommendations for PR #152 and PR #153
Roadmap-aligned follow-ups:
- PR #152: Parent Trust Copy Inventory v1
- PR #153: Parent-Facing Copy Snapshot Validator v1

Source for naming: sprint roadmap directive in this implementation brief.

## Final PR #151 readiness statement
PR #151 is ready for merge once all validators and baseline checks pass in CI.
