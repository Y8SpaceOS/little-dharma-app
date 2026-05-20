# Visual Repair PR Sequence

Date: 2026-05-20 (UTC)

## Sequencing Principles
1. Prioritize existing high-traffic journey routes first (P0).
2. Keep each PR route-bounded and validator-stable.
3. Preserve all current behavior/state/navigation contracts.
4. Do not add prototype-only screens/routes.

## Recommended Next 10 Visual Repair PRs

| PR # | Target routes/screens | Priority focus | Scope boundary | Risk level | Required checks |
|---:|---|---|---|---|---|
| PR-01 | `/`, `/onboarding` | P0 | Entry/onboarding visual parity only | Low | route render + nav smoke + screenshot diff |
| PR-02 | `/(child)/today` | P0 | Child hub visual repair only | Medium | action cards/nav smoke + screenshot QA |
| PR-03 | `/(child)/worlds`, `/world/[slug]` | P0 | World browsing surfaces | Medium | dynamic route smoke + screenshot QA |
| PR-04 | `/story/[slug]` | P0 | Story reader visual pass only | Medium | read/start/complete flow smoke + screenshots |
| PR-05 | `/(parent)/dashboard` | P1 | Parent summary/trust surface | Medium | render/link smoke + screenshots |
| PR-06 | `/(parent)/controls` | P1 | Controls/toggles visuals only | Medium | toggle behavior smoke (no logic changes) + screenshots |
| PR-07 | `/(parent)/privacy` | P1 | Trust/privacy visual consistency | Low-Med | render/link smoke + screenshots |
| PR-08 | `/(parent)/profiles` | P1 | Profiles list/detail visual cleanup | Medium | profile interaction smoke + screenshots |
| PR-09 | `/auth/sign-in`, `/auth/sign-up` | P2 | Auth forms visual consistency | Medium | validation-display smoke + screenshots |
| PR-10 | `/(parent)/journey-settings`, `/(parent)/subscription` | P2 | Settings/subscription visuals | Medium | settings/paywall render smoke + screenshots |

## Deferred PR Candidates (After Top 10)
- PR-11: `/(parent)/feedback`
- PR-12: `/(child)/bedtime`, `/(child)/chant`
- PR-13: `/(child)/treasures`
- PR-14: `/(parent)/gate` (only if needed; behavior-sensitive)

## P0/P1/P2/P3 Backlog Rollup
- P0: 6 screens
- P1: 4 screens
- P2: 8 screens
- P3: 1 screen

## Prototype Leakage Guardrails
- No new `app/` route creation in visual repair PRs.
- No implementation of future-only prototype screens.
- No validator, state contract, or data-flow changes.
- If mapping is pattern-level only (not direct screen ID), PR description must state the mapping reference and rationale.

## Immediate Next PR Recommendation
**Start with PR-01** (`/` + `/onboarding`) because it has highest user-facing impact with lowest engineering risk while remaining fully inside current runtime scope.
