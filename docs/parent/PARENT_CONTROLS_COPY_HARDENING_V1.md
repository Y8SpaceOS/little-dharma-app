# PR #138: Parent Controls Copy Hardening v1

## PR title and purpose
PR #138: Parent Controls Copy Hardening v1 standardizes parent-facing trust copy across the existing controls surface with calm, concise, local-first language.

## Roadmap alignment
This sprint follows PR #137 Parent Sharing Copy v1 in the approved parent trust roadmap sequence.

## Why Parent Controls Copy Hardening follows Parent Sharing Copy
After clarifying optional family sharing language in PR #137, the next dependency is to harden baseline controls copy so parents clearly understand on-device boundaries before broader privacy-center and onboarding trust refinements.

## Parent controls copy goal
Ensure parents understand what controls exist today, what stays local, what is not collected or shared, and what limits intentionally remain in this version.

## What this copy is
- A trust-focused language layer for existing parent controls and privacy guidance.
- A local-first clarification that progress stays on this device.
- A safety and dignity statement for sacred content and calm family use.

## What this copy is not
- Not new controls or behavior changes.
- Not backend, auth, cloud sync, telemetry, or analytics functionality.
- Not sharing, invite, referral, push, SMS, WhatsApp, or social implementation.

## Control-surface copy principles
- You stay in control.
- Keep wording simple, transparent, and non-technical.
- Describe only existing capabilities.
- Keep copy read-only and non-promotional.

## Privacy copy rules
- Explicitly state: progress stays on this device.
- Explicitly state: no public child profile.
- Explicitly state: exact age is not required.
- Avoid any remote monitoring or surveillance implication.

## Local-first copy rules
- Emphasize simple, local-first controls.
- No account dependency language.
- No backend profile or cloud-state assumptions.

## Content readiness copy rules
- Explicitly state stories are prepared with care.
- Reinforce staged availability as careful readiness, not scarcity pressure.
- Use “continue when your family is ready.”

## Sacred respect copy rules
- Explicitly state sacred content is handled respectfully.
- Use culturally respectful and family-centered framing.
- Avoid novelty framing for sacred references.

## No-pressure/no-gamification copy rules
- Explicitly state no ads, no rankings, no pressure loops.
- Avoid competitive or performance framing.
- Avoid addictive-mechanics language.

## Current limits copy rules
- State that current controls are simple and local-first.
- State no new controls/functionality are introduced in this PR.
- Avoid implying future backend/account completion is already present.

## UI integration status
A minimal read-only copy block is integrated into the existing parent controls route only (`app/(parent)/controls.tsx`).

## Privacy/no-backend assumptions
All copy assumes local-only storage and no backend/auth/cloud-sync layer. This PR does not introduce network calls, telemetry, or remote parent tracking.

## No hard gamification rules
Parent controls copy must not introduce or promote XP, coins, streaks, leaderboards, ranks, scores, referral loops, or viral mechanics.

## Relationship to Parent Weekly Summary v1
Complements Parent Weekly Summary v1 by keeping parent trust language consistent: gentle, non-judgmental, and local-first.

## Relationship to Journey Detail Parent Trust Copy v1
Extends Journey Detail Parent Trust Copy v1 principles from journey-specific trust notes to baseline controls-level trust messaging.

## Relationship to Parent Sharing Copy v1
Builds directly on Parent Sharing Copy v1 guardrails by clarifying that controls remain local-first and that no public child profile or pressure loops are part of the current controls surface.

## What this PR changes
- Adds `parentControlsCopyService` with standardized trust, privacy, local-first, content readiness, sacred respect, no-pressure, and current-limits copy.
- Adds a minimal controls-screen copy block using this service.
- Adds a dedicated validator and package script for PR #138 policy checks.

## What this PR does not do
- Does not add new parent controls/functionality.
- Does not add backend/auth/cloud sync/payment/analytics/telemetry.
- Does not add sharing, email, push, SMS, WhatsApp, social, invite, referral, or network/API implementation.
- Does not change story completion writes, journey progress writes, Story World doorway output/order, runtime resolver behavior, or child routes.

## Follow-up recommendations for PR #139 and PR #140
- PR #139: Privacy Center Copy Hardening v1.
- PR #140: Parent Onboarding Trust Copy v1.

Roadmap naming source: current sprint planning notes in this repository for PR sequencing after PR #137.

## Final PR #138 readiness statement
Parent Controls Copy Hardening v1 is ready when validator checks pass, copy remains read-only and local-first, and no new control functionality is introduced.
