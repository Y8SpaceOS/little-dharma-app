# Route to Prototype Reference Map

Date: 2026-05-20 (UTC)

This map resolves each currently built app route to either:
1) a direct 487 screen match, or
2) the closest visual governance/pattern reference.

## Direct + Pattern Mapping Matrix

| App route | File path | Direct 487 match? | 487 ID/Title (if direct) | Closest reference (if not direct) | Mapping confidence | Notes |
|---|---|---|---|---|---|---|
| `/` | `app/index.tsx` | Yes | 01 — Splash / Brand Entry | — | High | Direct parity candidate. |
| `/onboarding` | `app/onboarding.tsx` | Yes | 02 — Brand Philosophy / Values Intro | — | High | Direct parity candidate. |
| `/(child)/today` | `app/(child)/today.tsx` | No | — | Child home hub governance pattern | Medium | Canonical child hub exists in app but not 1:1 named 487 screen. |
| `/(child)/worlds` | `app/(child)/worlds.tsx` | No (pattern-level) | — | 07 — First World Preview pattern | Medium | Route is broader chooser than strict onboarding preview. |
| `/world/[slug]` | `app/world/[slug].tsx` | No (pattern-level) | — | World detail/list pattern aligned to 07 family | Medium | Dynamic world drilldown pattern. |
| `/story/[slug]` | `app/story/[slug].tsx` | No | — | Story reader + completion governance pattern | Medium | Product-critical runtime surface. |
| `/(parent)/dashboard` | `app/(parent)/dashboard.tsx` | No | — | Parent dashboard governance pattern | Medium | Parent operational hub. |
| `/(parent)/controls` | `app/(parent)/controls.tsx` | No (pattern-level) | — | 06 — Content Comfort Settings pattern | Medium | Existing controls route, not onboarding step. |
| `/(parent)/privacy` | `app/(parent)/privacy.tsx` | No | — | Privacy/trust reference pattern | Medium | Trust content surface. |
| `/(parent)/profiles` | `app/(parent)/profiles.tsx` | No (pattern-level) | — | 04 — Child Profile Setup pattern | Medium | Existing profile manager, not onboarding wizard. |
| `/(parent)/journey-settings` | `app/(parent)/journey-settings.tsx` | No | — | Settings governance pattern | Medium | Secondary settings surface. |
| `/(parent)/subscription` | `app/(parent)/subscription.tsx` | No | — | Subscription/paywall governance pattern | Medium | Monetization/trust UX surface. |
| `/(parent)/feedback` | `app/(parent)/feedback.tsx` | No | — | Feedback form pattern | Medium | Local draft capture behavior must be preserved. |
| `/auth/sign-in` | `app/auth/sign-in.tsx` | No | — | Parent auth sign-in pattern | Medium | Auth visual alignment only. |
| `/auth/sign-up` | `app/auth/sign-up.tsx` | No | — | Parent auth sign-up pattern | Medium | Auth visual alignment only. |
| `/(child)/bedtime` | `app/(child)/bedtime.tsx` | No | — | Bedtime calming activity pattern | Low-Med | Closest family match, no strict direct ID known. |
| `/(child)/chant` | `app/(child)/chant.tsx` | No | — | Chant/practice activity pattern | Low-Med | Closest family match, no strict direct ID known. |
| `/(child)/treasures` | `app/(child)/treasures.tsx` | No | — | Progress/rewards pattern | Medium | Keeps existing data semantics. |
| `/(parent)/gate` | `app/(parent)/gate.tsx` | Partial | 08 — Parent Gate (functional family) | Parent gate checkpoint pattern | Medium | Treat as behavior-sensitive system surface. |

## System Scaffolding (Non-screen)

| App file | Classification | Action |
|---|---|---|
| `app/_layout.tsx` | Navigation shell/system scaffold | Only touched when required by screen parity; avoid for docs-only backlog work. |

## Future-only 487 References (No new runtime build in this backlog)
- 03 Parent Promise (as standalone runtime screen)
- 05 Meet Luvlu (as standalone runtime screen)
- 06 as a net-new onboarding route/screen
- 07 as a net-new onboarding route/screen

These remain reference-only until explicit product scope approval.
