# Little Dharma Implemented Route Visual Audit (Sprint 76 repair)

## Scope note
This is a Sprint 76 visual QA repair audit. It does **not** claim full prototype parity.

## Route-by-route audit
| Route | File | Status | Prototype mapping | Aligned | Missing | Fix target |
|---|---|---|---|---|---|---|
| / | app/index.tsx | Warm entry card exists | 01 Splash / Brand Mark | Partial | Stronger brand mark surface + philosophy transition | Sprint 77 candidate |
| /onboarding | app/onboarding.tsx | Functional multi-step onboarding exists | 01–08 Onboarding sequence | Partial | Visual identity, top bars, card artistry, gate polish | **Recommend Sprint 77 scope** |
| /(child)/today | app/(child)/today.tsx | Rebuilt warm hero + path doorway cards | 09 Child Home | Partial | More motif depth and richer anchor art | PR84 + Sprint 77 |
| /(child)/worlds | app/(child)/worlds.tsx | Doorway grid implemented | 10 Story World Browse | Partial | Distinct micro-layout polish, richer doorway art | PR84 + Sprint 77 |
| /world/[slug] | app/world/[slug].tsx | World-specific hero + structured story cards | 15,16,19 | Partial | Deeper content data integration and card variety | Sprint 78 |
| /story/[slug] | app/story/[slug].tsx | Runtime story flow + parent/value sections | 22,25–28 | Partial | Detail-stage chip polish and advanced completion visuals | Sprint 78 |
| /(child)/treasures | app/(child)/treasures.tsx | Functional progress screen | 28–31 | Partial | Needs warm visual pass parity | Later |
| /(child)/bedtime | app/(child)/bedtime.tsx | Placeholder | 17 | No | Full bedtime parity UI missing | Later |
| /(child)/chant | app/(child)/chant.tsx | Placeholder | 35 | No | Full shloka/sacred sound visual runtime missing | Later |
| /(parent)/dashboard | app/(parent)/dashboard.tsx | Warm trust-first pass added | 38,40 | Partial | deeper insight cards + weekly summary structure | PR84 + Sprint 77 |
| /(parent)/controls | app/(parent)/controls.tsx | Functional controls | 40 | Partial | warm visual parity pass missing | Sprint 77+ |
| /(parent)/privacy | app/(parent)/privacy.tsx | Functional trust copy | 03,40,41 | Partial | warm layout parity + chips + callouts | Sprint 77+ |
| /(parent)/feedback | app/(parent)/feedback.tsx | Functional form | n/a | No | visual parity intentionally lower priority | Later |
| /(parent)/profiles | app/(parent)/profiles.tsx | Placeholder | parent surfaces | No | full runtime UI missing | Later |
| /(parent)/journey-settings | app/(parent)/journey-settings.tsx | Functional settings list | 19,40 | Partial | warm card hierarchy + icon anchors | Later |
| /(parent)/subscription | app/(parent)/subscription.tsx | Placeholder | 45 conceptually | No | full runtime UI missing | Later |
| /auth/sign-in | app/auth/sign-in.tsx | Placeholder | parent access | No | full runtime UI missing | Later |
| /auth/sign-up | app/auth/sign-up.tsx | Placeholder | parent access | No | full runtime UI missing | Later |

## Onboarding status (requested deep check)
- Onboarding exists: `app/onboarding.tsx`.
- Access path: `/onboarding` (from `/` when onboarding incomplete).
- Reset path: Parent dashboard reset action clears onboarding and returns to `/`.
- Ownership files: `app/onboarding.tsx`, `app/index.tsx`, `src/lib/onboardingState.ts`, `src/lib/childProfile.ts`.
- Mapping:
  - 01 Splash / Brand Mark: partial (`/` intro card)
  - 02 Brand Philosophy: partial (copy in step sequence)
  - 03 Parent Promise: partial
  - 04 Child Profile Setup: yes functionally, partial visually
  - 05 Choose First Companion: partial (favorite character)
  - 06 Content Comfort Settings: partial
  - 07 First World Preview: missing dedicated polished surface
  - 08 Parent Gate: missing dedicated gate UI parity
- Recommendation: onboarding should be the next dedicated visual scope (Sprint 77 candidate pivot).

## Sprint recommendation (no roadmap edits in this patch)
Given manual QA findings, recommendation is to change next sprint label to:
- **Sprint 77 — Onboarding + App Shell Visual Parity v1**
instead of Child Home + Story World polish, because onboarding/app shell remain the largest parity gap.
