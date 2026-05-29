# Prototype Screen Mapping + Runtime UI Alignment v1 (PR #180)

## Purpose

This document maps the full 1-487 Little Dharma prototype screen reference system to the
**actual runtime surfaces that exist in this repository today**, so future UI work can move the
shipped app toward the prototype's warmth and depth without drifting into new routes, new content,
or forbidden mechanics.

It is a **mapping and alignment reference, not an implementation checklist**. The 1-487 screen
system is the product's visual and experiential north star (see
`docs/product/DESIGN_SCREEN_REFERENCE_1_487.md`). Screens must not auto-become routes; every
implementation sprint still requires explicit approval.

## Ground truth for this branch

- The app currently ships **20 routes** (plus the `app/_layout.tsx` navigation shell), counted from
  `app/**/*.tsx`.
- The Dharma Journey Map route **already exists** at `app/journey-map/[journeyId].tsx`. It was
  merged earlier (PR #178 foundation + PR #179 polish) and is documented in
  `docs/product/DHARMA_JOURNEY_MAP_V1.md`. **This PR did not create it.**
- The Story World browse surface at `app/(child)/worlds.tsx` was already polished by PR #176/#177
  and is documented in `docs/product/STORY_WORLD_BROWSE_V1.md`.
- **PR #180 adds no new routes.** It contributes this mapping document, a small set of purely
  additive warm design tokens, and a self-contained visual polish to the one remaining
  un-aligned journey-like surface: `app/world/[slug].tsx`.

> Note: `docs/visual-qa/ROUTE_TO_PROTOTYPE_REFERENCE_MAP.md` predates the journey-map route and
> lists 19 routes. This document extends that map with the 20th route
> (`/journey-map/[journeyId]`) and supersedes its route count.

## Canonical prototype tiers (faithful to DESIGN_SCREEN_REFERENCE_1_487.md)

| Tier | Range | Prototype intent |
|---|---|---|
| Visual Soul / Baseline | 001-045 | Splash, brand philosophy, values intro, parent promise, Meet Luvlu, profile setup, content comfort, first-world preview, parent gate baseline. Defines warmth, Story World language, parent-trust framing. |
| Product Expansion ("missing middle") | 046-145 | Expansion breadth. **Source pack not committed to repo.** Reference-only — exact screen contracts must NOT be inferred from memory. |
| Deep Product Flows | 146-295 | Richer Story World, Dharma Journey surfaces, parent-trusted surfaces, Luvlu usage, audio-related *states* (visual only), values/treasures/garden, rituals. |
| Implementation Depth | 296-423 | Component/card library, category detail, Story World list/search, parent surfaces, journey/detail surfaces, audio states, acceptance contracts. |
| Luvlu + Motion + Micro-State Governance | 424-487 | NOT a route pack. Governance for Luvlu, motion softness, cultural respect, parent-child boundaries, state transitions, future-IP boundaries. |

## Range → runtime surface mapping

Sixteen contiguous ranges cover all of 001-487 with no gaps. Each resolves to the runtime
surface family it informs and its current engineering status.

| Prototype range | Runtime surface(s) | Engineering status | Polished in PR #180? |
|---|---|---|---|
| 001 | `app/index.tsx` (+ `app/_layout.tsx` shell) | Engineered | No (out of scope) |
| 002-045 | `app/onboarding.tsx`, `app/(parent)/gate.tsx`, `app/(parent)/profiles.tsx`, `app/(parent)/controls.tsx` | Engineered (pattern-level parity) | No |
| 046-145 | Informs `app/(child)/today.tsx`, `app/(child)/worlds.tsx` breadth | **Reference-only** (source pack not committed) | No — do not build from guesswork |
| 146-180 | `app/(child)/worlds.tsx` (browse), `app/world/[slug].tsx` (world detail) | Engineered; worlds.tsx polished by #176/#177 | No (worlds.tsx already polished) |
| 181-215 | `app/journey-map/[journeyId].tsx` (primary), `app/world/[slug].tsx` *journeyLike* (secondary/legacy) | Engineered; journey-map polished by #178/#179 | **Yes — `world/[slug].tsx` journeyLike path only** |
| 216-245 | `app/story/[slug].tsx` | Engineered | No |
| 246-270 | `app/(child)/bedtime.tsx` | Engineered | No |
| 271-295 | `app/(child)/chant.tsx`, `app/(child)/treasures.tsx` | Engineered | No |
| 296-330 | `src/design/visualSystem.ts` + all card surfaces (component/card library) | Engineered design system | Tokens only (additive) |
| 331-360 | `app/(child)/worlds.tsx` + `src/services/storyWorldBrowseService.ts` (list/search) | Engineered | No |
| 361-390 | `app/(parent)/dashboard.tsx` | Engineered | No |
| 391-410 | `app/(parent)/journey-settings.tsx`, `app/(parent)/privacy.tsx`, `app/(parent)/feedback.tsx` | Engineered | No |
| 411-423 | `app/(parent)/subscription.tsx`, `app/auth/sign-in.tsx`, `app/auth/sign-up.tsx` | Engineered (local-first; no purchase/auth backend) | No |
| 424-450 | Luvlu governance → `helperBubble`/`luvluBubble` in `visualSystem.ts`, used in `today.tsx`/`onboarding.tsx` | Cross-cutting governance | No |
| 451-470 | Motion governance → `Pressable` press states, overlay transitions | Cross-cutting governance | No |
| 471-487 | Micro-state / empty / disabled governance → empty + disabled states across `worlds.tsx`, `journey-map`, `world/[slug].tsx` | Cross-cutting governance | Reinforced in `world/[slug].tsx` copy |

## Route resolution (all 20 routes)

| Route | File | Mapped range | Status |
|---|---|---|---|
| `/` | `app/index.tsx` | 001 | Engineered |
| `/onboarding` | `app/onboarding.tsx` | 002-045 | Engineered |
| `/(child)/today` | `app/(child)/today.tsx` | 026-145 (home hub) | Engineered |
| `/(child)/worlds` | `app/(child)/worlds.tsx` | 063-070 / 146-180 / 331-360 | Engineered + polished (#176/#177) |
| `/world/[slug]` | `app/world/[slug].tsx` | 146-180 (detail) / 181-215 (journeyLike) | Engineered (legacy); **polished by this PR** |
| `/journey-map/[journeyId]` | `app/journey-map/[journeyId].tsx` | 181-215 | Engineered + polished (#178/#179) |
| `/story/[slug]` | `app/story/[slug].tsx` | 216-245 | Engineered |
| `/(child)/bedtime` | `app/(child)/bedtime.tsx` | 246-270 | Engineered |
| `/(child)/chant` | `app/(child)/chant.tsx` | 271-295 (visual only, no audio) | Engineered |
| `/(child)/treasures` | `app/(child)/treasures.tsx` | 271-295 (non-reward) | Engineered |
| `/(parent)/gate` | `app/(parent)/gate.tsx` | 002-045 (Parent Gate) | Engineered (behavior-sensitive) |
| `/(parent)/dashboard` | `app/(parent)/dashboard.tsx` | 361-390 | Engineered |
| `/(parent)/controls` | `app/(parent)/controls.tsx` | 002-045 (content comfort) | Engineered |
| `/(parent)/profiles` | `app/(parent)/profiles.tsx` | 002-045 (profile setup) | Engineered |
| `/(parent)/journey-settings` | `app/(parent)/journey-settings.tsx` | 391-410 | Engineered |
| `/(parent)/privacy` | `app/(parent)/privacy.tsx` | 391-410 | Engineered |
| `/(parent)/feedback` | `app/(parent)/feedback.tsx` | 391-410 | Engineered (local draft capture) |
| `/(parent)/subscription` | `app/(parent)/subscription.tsx` | 411-423 | Engineered (no purchase backend) |
| `/auth/sign-in` | `app/auth/sign-in.tsx` | 411-423 | Engineered (visual alignment only) |
| `/auth/sign-up` | `app/auth/sign-up.tsx` | 411-423 | Engineered (visual alignment only) |

## What to borrow from the prototype (per tier)

- **001-045:** Warm cream/saffron gradients, large rounded cards, soft shadows, clear text and CTA
  hierarchy, gentle parent-trust framing, "Story World" language, Meet-Luvlu warmth.
- **146-295:** Story-path feel (vertical rail, soft connectors, gentle markers), Dharma Journey
  step hierarchy, values/treasures/garden warmth, ritual calm, parent-trust surfaces.
- **296-423:** Shared design tokens, consistent card/pill/chip components, calm parent surfaces,
  category-detail layout, list/search scanability.
- **424-487:** Luvlu as a subtle, short-spoken helper; soft low-intensity motion; warm, non-punitive
  empty/disabled micro-states.

## What NOT to copy (governance, all tiers)

- No new routes spun up just because a prototype screen references an adjacent one.
- No backend, account, analytics, tracking, or network dependency.
- No audio files, audio playback, chanting audio, TTS, microphone, voice recording, or
  pronunciation scoring (audio "states" are visual-only).
- No XP, coins, streaks, ranks, leaderboards, energy bars, loot, paid locks, or unlock-gates.
- No course/module/unlock/premium language; no adult religious-app density; no analytics-dashboard
  or marketplace/paywall styling.
- No story text changes, no content-model migration, no `runtime_ready` promotion, no resolver
  behavior change.
- Luvlu must not become a logo, deity, token, badge, coin, idol, achievement, or reward object,
  must not nag, and must not speak over narration or sacred sound.
- For 046-145: do **not** infer exact screen contracts from memory — fetch the committed source
  pack first.

## PR #180 runtime alignment applied

Only one runtime surface was polished, plus additive design tokens:

### `src/design/visualSystem.ts` (additive only)
- Added warm journey-path accent tokens consumed by `world/[slug].tsx`: `gold` (`#EACD9D`),
  `diyaGlow` (`#FFF2DD`), `diyaRim` (`#E9C98F`), `journeyLine` (`#E9D8BD`).
- These mirror the canonical journey-map palette and the prototype's "gold" accent. **No existing
  token values were changed**, so already-merged surfaces (#176/#177 worlds, #178/#179 journey-map)
  are unaffected.

### `app/world/[slug].tsx` (legacy journeyLike surface)
- Re-colored the journey path strip, step dots, connector, and journey card from the previous
  green tints to the warm diya/saffron/gold language used by the canonical journey-map screen.
- Added gentle wayfinding markers (`🪔` diya, `🌸` flower, `🪷` lotus) to journey step labels,
  matching the journey-map `pathMarker` emoji set.
- Aligned the journey-step coming-soon copy to the governance phrase **"Being prepared with care"**
  (non-journey worlds keep "Coming soon").
- This surface is now a secondary/legacy path; the canonical journey experience is
  `app/journey-map/[journeyId].tsx`. The polish is self-contained (local styles + additive tokens)
  with **no data, routing, content, or behavior change**.

## Explicit scope statements for PR #180

- **No new routes were created.** The route count is **20** (the journey-map route already existed).
- `app/journey-map/[journeyId].tsx` was **not** created by this PR — it was merged earlier (#178/#179).
- `app/world/[slug].tsx` is the journey-like runtime surface that this PR aligns; it is legacy/
  secondary to the canonical journey-map route.
- All 487 prototype screens were mapped here, but **only already-engineered screens were polished**
  (and only `world/[slug].tsx` was touched visually).
- **No story, content, registry, runtime, audio, backend, or gamification behavior changed.**

## Recommended next PRs

- Device visual QA evidence for `world/[slug].tsx` warm journey path on small/large child screens.
- Decide whether `/world/[slug]` should redirect journey-like slugs to `/journey-map/[journeyId]`
  to consolidate the two journey surfaces (routing decision — out of scope here).
- Commit the 046-145 source pack before any implementation work in that range.
