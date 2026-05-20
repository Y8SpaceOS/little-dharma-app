# Built Screen Visual Transformation Backlog

Date: 2026-05-20 (UTC)  
Baseline: latest local `main`-derived code in this checkout  
Scope: docs-only audit of currently built routes under `app/`

## Route Audit Coverage
- Audited built routes/screens: **19** runtime routes (`.tsx` screens excluding `app/_layout.tsx`).
- Shell/layout file (`app/_layout.tsx`) tracked separately as **system scaffolding**, not a user-facing screen.

## Priority Backlog Table (All Current Built Screens)

| # | App route | File path | Current product purpose | Audience | Visually repaired already?* | Direct 487 match? | Prototype reference | Recommended action | Priority | Recommended PR order | Engineering risk | Visual risk | Required validator | Screenshot QA requirement |
|---|---|---|---|---|---|---|---|---|---|---:|---|---|---|---|
| 1 | `/` | `app/index.tsx` | Splash entry with CTA into onboarding | Child+Parent | Partial | Yes | 01 — Splash / Brand Entry | Repair now | P0 | PR-01 | Low | High | Route render + CTA navigation smoke | Required (before/after) |
| 2 | `/onboarding` | `app/onboarding.tsx` | Values intro and continue flow | Child+Parent | Partial | Yes | 02 — Brand Philosophy / Values Intro | Repair now | P0 | PR-01 | Low | High | Continue action/navigation smoke | Required |
| 3 | `/(child)/today` | `app/(child)/today.tsx` | Child home hub | Child | Partial | Closest | Child hub/home governance pattern | Repair now | P0 | PR-02 | Medium | High | Entry cards + parent-link smoke | Required |
| 4 | `/(child)/worlds` | `app/(child)/worlds.tsx` | World chooser | Child | Partial | Closest | 07 — First World Preview (pattern-level) | Repair now | P0 | PR-03 | Medium | High | World list + selection navigation | Required |
| 5 | `/world/[slug]` | `app/world/[slug].tsx` | World detail and story list | Child | Partial | Closest | 07 — First World Preview + world detail pattern | Repair now | P0 | PR-03 | Medium | High | Dynamic slug rendering + story links | Required |
| 6 | `/story/[slug]` | `app/story/[slug].tsx` | Story detail/reader/completion state | Child | Partial | Closest | Story reader governance + completion pattern | Repair now | P0 | PR-04 | Medium | High | Read/start/complete state checks | Required |
| 7 | `/(parent)/dashboard` | `app/(parent)/dashboard.tsx` | Parent summary metrics/trust hub | Parent | Partial | Closest | Parent dashboard governance surface | Repair now | P1 | PR-05 | Medium | Medium | Parent metrics/links smoke | Required |
| 8 | `/(parent)/controls` | `app/(parent)/controls.tsx` | Parent controls/toggles | Parent | Partial | Closest | 06 — Content Comfort Settings (pattern-level) | Repair now | P1 | PR-06 | Medium | Medium | Toggle state + persistence behavior smoke | Required |
| 9 | `/(parent)/privacy` | `app/(parent)/privacy.tsx` | Privacy/trust center | Parent | Partial | Closest | Privacy governance/reference pattern | Repair now | P1 | PR-07 | Low | Medium | Static render + outbound/link checks | Required |
| 10 | `/(parent)/profiles` | `app/(parent)/profiles.tsx` | Parent-managed profiles | Parent | Partial | Closest | 04 — Child Profile Setup (pattern-level only) | Repair later | P1 | PR-08 | Medium | Medium | Profile list/edit flows smoke | Required |
| 11 | `/(parent)/journey-settings` | `app/(parent)/journey-settings.tsx` | Journey prefs/settings | Parent | Partial | Closest | Parent settings governance pattern | Repair later | P2 | PR-09 | Medium | Medium | Settings render/state smoke | Required |
| 12 | `/(parent)/subscription` | `app/(parent)/subscription.tsx` | Subscription/paywall context | Parent | Partial | Closest | Subscription/paywall governance pattern | Repair later | P2 | PR-10 | Medium | Medium | Plan/CTA render checks | Required |
| 13 | `/(parent)/feedback` | `app/(parent)/feedback.tsx` | Parent feedback capture | Parent | Partial | Closest | Feedback form governance pattern | Repair later | P2 | PR-11 | Low | Low-Med | Form state/local draft smoke | Optional unless layout overhaul |
| 14 | `/auth/sign-in` | `app/auth/sign-in.tsx` | Parent sign-in | Parent | Partial | Closest | Auth form governance pattern | Repair later | P2 | PR-12 | Medium | Medium | Sign-in form validation/display smoke | Required |
| 15 | `/auth/sign-up` | `app/auth/sign-up.tsx` | Parent sign-up | Parent | Partial | Closest | Auth onboarding governance pattern | Repair later | P2 | PR-12 | Medium | Medium | Sign-up form validation/display smoke | Required |
| 16 | `/(child)/bedtime` | `app/(child)/bedtime.tsx` | Calming bedtime surface | Child | Partial | Closest | Bedtime routine pattern reference | Repair later | P2 | PR-13 | Low | Medium | Render + nav back smoke | Optional |
| 17 | `/(child)/chant` | `app/(child)/chant.tsx` | Chant activity surface | Child | Partial | Closest | Child practice activity pattern | Repair later | P2 | PR-13 | Low | Medium | Render/interactions smoke | Optional |
| 18 | `/(child)/treasures` | `app/(child)/treasures.tsx` | Progress/treasure collection | Child | Partial | Closest | Rewards/treasure pattern reference | Repair later | P2 | PR-14 | Medium | Medium | Collection render/state smoke | Required |
| 19 | `/(parent)/gate` | `app/(parent)/gate.tsx` | Parent gate checkpoint | System (parent-auth gate) | Partial | Yes/Closest | 08 — Parent Gate | Defer (only fix visual parity on existing behavior) | P3 | PR-15 | Medium (routing sensitivity) | Low-Med | Gate pass/fail navigation smoke | Required |

\* “Partial” = screen exists and likely had some visual updates historically, but not yet certified as fully aligned to 487 visual/governance references.

## P0/P1/P2/P3 Summary
- **P0 (6 screens):** core child/entry journey surfaces currently used in primary flow.
- **P1 (4 screens):** high-frequency parent trust/control surfaces.
- **P2 (8 screens):** support/settings/auth/secondary child surfaces.
- **P3 (1 screen):** sensitive gate surface; update only with strict no-behavior-change constraints.

## Prototype Leakage Guardrails
1. The 487 library is **reference-only**; it is not an automatic implementation queue.
2. Every repair PR must target an existing `app/` route and must not add new routes.
3. If no direct prototype exists, use closest governance/pattern reference and document mapping in PR notes.
4. No repair PR may alter navigation contracts, validators, state model, or local-first data behavior.
5. Any proposal to add non-built prototype surfaces must be captured as future-only product scope.

## Screens Not In 487 But Present In App
(Using current known mappings; no direct single-screen 487 parity.)
- `/(child)/today`
- `/story/[slug]`
- `/(parent)/dashboard`
- `/(parent)/privacy`
- `/(parent)/journey-settings`
- `/(parent)/subscription`
- `/(parent)/feedback`
- `/auth/sign-in`
- `/auth/sign-up`
- `/(child)/bedtime`
- `/(child)/chant`
- `/(child)/treasures`

These should map to closest governance/pattern references and be repaired without inventing prototype-only runtime screens.

## 487 References That Are Future-Only
- 03 — Parent Promise (future-only unless explicitly approved as new runtime scope).
- 04 — Child Profile Setup as dedicated onboarding screen (future-only; current mapping is parent profile surfaces only).
- 05 — Meet Luvlu standalone screen (future-only; currently helper copy/component usage only).
- 06 — Content Comfort Settings as onboarding step (future-only; current mapping is parent controls surface).
- 07 — First World Preview as distinct onboarding step (future-only; world browsing exists but onboarding insertion is new scope).

## Immediate Next PR Recommendation
**PR-01: Visual parity repair for `/` and `/onboarding` only.**  
Scope constraints:
- docs/test evidence + visual refresh on existing components only,
- no route additions,
- no validator changes,
- no state/navigation behavior changes.
