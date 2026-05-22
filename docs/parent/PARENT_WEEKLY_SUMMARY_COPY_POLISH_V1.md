# PR #147: Parent Weekly Summary Copy Polish v1

## PR title and purpose
Polish Parent Weekly Summary copy in the existing parent dashboard card so it feels warmer, calmer, local-first, and parent-trusted.

## Roadmap alignment
This PR follows PR #146 Parent Reflection Prompt Copy v1 and extends parent-facing trust language continuity.

## Why Parent Weekly Summary Copy Polish follows Parent Reflection Prompt Copy
PR #146 established gentle, optional, no-pressure parent prompt language. PR #147 applies the same tone to weekly summary copy so parents receive consistent guidance across reflection and dashboard surfaces.

## Parent weekly summary copy polish goal
Make weekly summary language feel like a gentle family recap, not a measurement system.

## What this copy is
Static, read-only, local-first parent microcopy for the existing weekly summary card.

## What this copy is not
Not new data logic, not tracking, not analytics, not sharing, not notifications, not AI generation, and not gamification.

## Parent-facing weekly summary principles
- Calm, warm, culturally respectful language.
- Trust-first and local-first framing.
- Optional family pacing with no pressure.

## Gentle summary copy rules
Use gentle framing such as “This week in Little Dharma” and “A gentle look at your family’s story time.”

## Local-first copy rules
State clearly that summary context is stored on this device.

## No-score/no-ranking/no-pressure copy rules
Explicitly say “No score, no ranking, no pressure.”

## Stories remembered copy rules
Frame completed stories as remembered with care, not evaluated.

## Values conversation copy rules
Frame values explored as conversation starters, not performance indicators.

## Gentle next-step copy rules
Frame the next story as gentle and optional.

## Return-later copy rules
Reassure families they can continue whenever ready and return another day.

## Sacred care copy rules
Include explicit sacred-care language stating sacred stories are handled with care and respect.

## UI integration status
Integrated as copy-only updates in `app/(parent)/dashboard.tsx` existing weekly summary card with no route or control changes.

## No backend/no tracking assumptions
No backend, account sync, tracking, analytics, or telemetry behavior is introduced.

## No notifications/no sharing assumptions
No notifications, reminders, sharing, email, SMS, WhatsApp, social, invite, or referral behaviors are introduced.

## No AI generation assumptions
No AI-generated summaries or AI content generation are introduced.

## No hard gamification rules
No leaderboard, streak, rank, or performance mechanics are introduced.

## Weekly summary data preservation rules
Weekly summary computation remains in `parentWeeklySummaryService` unchanged.

## Completion/progress behavior preservation rules
No story completion write behavior or journey progress write behavior changes are allowed or included.

## Story runtime/audio preservation rules
No runtime story availability, story reader, panel, or audio behavior changes are included.

## Relationship to Parent Weekly Summary v1
Builds on PR #135 by preserving v1 weekly summary data while improving parent-facing wording.

## Relationship to Parent Reflection Prompt Copy v1
Extends PR #146 tone: optional, no-pressure, conversation-forward parent language.

## Relationship to Privacy Center Copy Hardening v1
Aligns with privacy trust framing from Privacy Center Copy Hardening v1, especially local-first reassurance.

## What this PR changes
- Adds Parent Weekly Summary Copy Polish service and model helpers.
- Applies copy-only binding to existing parent dashboard weekly summary card.
- Adds dedicated validator and script entry.

## What this PR does not do
- Does not change weekly summary data logic.
- Does not add backend/cloud/account/network features.
- Does not add tracking/sharing/notifications/reminders.
- Does not add AI generation.
- Does not add routes or controls.

## Follow-up recommendations for PR #148 and PR #149
From roadmap naming in current sprint plan:
- PR #148: Parent Controls Journey Settings Copy v1
- PR #149: My Treasures Trust Copy v1

## Final PR #147 readiness statement
PR #147 is ready once validators pass: copy polish is static/read-only, local-first, no-pressure, and preserves existing summary/progress/runtime behavior.
