# Sprint Approval Governance

## Purpose

This document prevents roadmap drift. It defines what must happen before any sprint or pull request begins.

## Required sprint approval summary

Before every sprint, the implementer must provide an approval summary with:

- Proposed PR number and title.
- Sprint type.
- Whether it is part of the approved roadmap.
- What files or systems it may touch.
- What files or systems it must not touch.
- PR #207 counter impact.
- Manual QA expectation.
- Validation commands to run.

No implementation should begin until the summary is approved.

## Roadmap change rule

Any change to the plan through PR #207 requires explicit approval. This includes changing sprint order, adding new feature classes, changing runtime resolver behavior, changing story completion, changing journey progress, changing Story World doorway behavior, or changing audio playback behavior.

## Hotfix exception

Hotfixes can be created without changing the roadmap only for app launch crashes, red screens, runtime import crashes, broken validators that block planned work, broken local-first loading, or critical registry collisions.

Hotfixes must be small, scoped, and followed by a return to the approved roadmap.

## Content recovery rule

During the current recovery phase, content sprints are the priority. Do not drift into copy-only, UI-only, route-only, analytics, notification, sharing, or governance-only work unless specifically approved.

## Forbidden unapproved changes

Do not add or modify the following without approval:

- app routes
- child routes
- parent routes
- runtime resolver behavior
- story reader behavior
- story completion persistence
- journey progress persistence
- backend or cloud sync
- analytics or telemetry
- notifications or reminders
- sharing, email, SMS, WhatsApp, or social loops
- microphone or recording features
- TTS, ElevenLabs, or external voice APIs
- audio playback or audio files
- AI personalization
- payment, paid locks, or monetization
- XP, coins, streaks, rankings, leaderboards, or hard gamification

## Merge criteria

A PR can be merged only when:

- The sprint scope matches the approved summary.
- Validators pass.
- There is no route, runtime, backend, audio, analytics, sharing, notification, or gamification drift.
- Manual QA is clean when the PR affects launch, runtime, or user-visible behavior.
- Content quality is real, not generic shell progress.
