# PR #140: Parent Onboarding Trust Copy v1

## PR title and purpose
Standardize parent-facing onboarding trust copy so families receive clear, calm, local-first expectations in existing parent setup surfaces.

## Roadmap alignment
This PR is sequenced after PR #139 Privacy Center Copy Hardening v1 and continues the roadmap focus on parent trust clarity.

## Why Parent Onboarding Trust Copy follows Privacy Center Copy Hardening
Privacy Center Copy Hardening established stable trust language for privacy surfaces; onboarding now mirrors that language at first parent setup touchpoints.

## Parent onboarding trust copy goal
Help parents quickly understand privacy and trust boundaries before continuing family setup.

## What this copy is
Read-only, local-first, parent-facing trust microcopy for onboarding/setup context.

## What this copy is not
Not new onboarding functionality, not a new onboarding step, not flow logic changes, and not backend/account implementation.

## Onboarding trust copy principles
- Warm and concise.
- Transparent and specific.
- Culturally respectful.
- Local-first and read-only.

## Welcome copy rules
- Use: “Welcome to Little Dharma.”
- Include: “A calm story world for your family.”

## Local-first copy rules
- Must explicitly state progress stays on this device.
- Must avoid cloud/account/surveillance implications.

## Child profile copy rules
- Must explicitly state no public child profile exists.

## Age privacy copy rules
- Must explicitly state exact age is not required.
- Must not collect or expose exact child age fields.

## No tracking copy rules
- Must explicitly state no analytics or telemetry tracking in current scope.

## No sharing copy rules
- Must explicitly state no automatic sharing.
- Must not imply email/push/SMS/WhatsApp/social/referral implementation.

## No microphone/recording copy rules
- Must explicitly state no microphone or recording in this version.

## Sacred respect copy rules
- Must explicitly state sacred content is handled respectfully.
- Reinforce stories are prepared with care.

## Parent control copy rules
- Must explicitly state parents stay in control.
- Include readiness language: continue when your family is ready.

## UI integration status
UI binding is deferred in this PR. No `app/(parent)/onboarding.tsx` route exists in the current tree, so this PR ships service + docs + validator only.

## Privacy/no-backend assumptions
- No backend/auth/cloud sync/accounts are introduced.
- No analytics/telemetry is introduced.
- No network/API calls are introduced.

## No hard gamification rules
Trust copy must not introduce XP, coins, streaks, leaderboards, ranking, scores, performance framing, achievements, referral, or viral language.

## Relationship to Privacy Center Copy Hardening v1
This PR reuses the same trust constraints and local-first framing for onboarding context.

## Relationship to Parent Controls Copy Hardening v1
This PR keeps parent control language consistent with controls trust positioning.

## Relationship to Parent Sharing Copy v1
This PR preserves no automatic sharing language and does not add any sharing mechanics.

## What this PR changes
- Adds Parent Onboarding Trust Copy service/model.
- Adds validator for PR #140 constraints and copy checks.
- Adds PR #140 documentation and roadmap follow-up notes.

## What this PR does not do
- No new onboarding functionality.
- No onboarding flow logic changes.
- No backend/auth/payment/analytics/telemetry/network/email/push/SMS/WhatsApp/social/referral/share implementation.
- No state mutation, no new child routes, and no Story World doorway changes.

## Follow-up recommendations for PR #141 and PR #142
- PR #141: Child Home Trust Microcopy v1.
- PR #142: Story World Trust Microcopy v1.

Roadmap naming source: sprint instructions for PR #140 in this repository workflow context.

## Final PR #140 readiness statement
Parent Onboarding Trust Copy v1 is implementation-ready as local-first read-only copy service + validator + documentation, with UI binding deferred until an existing parent onboarding/setup route is available.
