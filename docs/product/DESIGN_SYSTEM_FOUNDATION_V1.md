# Design System Foundation v1

Date: 2026-05-29 (UTC)

## PR title and purpose

**Design System Foundation v1 — canonical token layer + Dharma Kit component library.**

This PR lays the shared visual foundation that lets the already-engineered runtime
screens be polished toward the 1-487 prototype "north star" *without* changing any
behavior, content, navigation, or route surface. It is **additive only**: nothing
that currently ships changes its look, because the existing `visualTokens` /
`visualStyles` exports are left untouched. The new canonical layer
(`palette`, `gradients`, `text`, `space`, `radii`, `elevation`, `motion`) and the
`dharmaKit` component library are the go-forward surface that child-core screens
adopt in later, screen-scoped PRs.

## Why this PR exists (scope guardrail)

The product direction is to make the **existing 20 routes** match the world-class
prototype. The explicit constraint is: **do not build screens where the
app/engineering work is not done.** The 1-487 prototype is a design reference, not
a route map. This PR therefore:

- adds **no new routes** and modifies **no existing route file**;
- adds only `src/` library code and one `docs/` file;
- introduces zero new behavior, content, registry, runtime, audio, backend, auth,
  analytics, or gamification.

## Source of truth

The canonical tokens are derived from the **296-423 implementation-depth
contracts** (`296-423/little_dharma_screens_296_423_contracts.json`
`globalTokens` + `globalCssRules`), which are the prototype's component/card
library — the closest thing the prototype has to a design system. Motion and the
Luvlu helper boundaries come from the **424-487 motion + micro-state governance**
tier.

## Files in this PR

| File | Type | Change |
|---|---|---|
| `src/design/visualSystem.ts` | token source | **Additive.** Appends `palette`, `gradients`, `text`, `space`, `radii`, `elevation`, `motion`, `dharmaTokens` below the unchanged `visualTokens`/`visualStyles`. |
| `src/lib/useReducedMotion.ts` | hook | New. Reduced-motion gate for the motion contract. |
| `src/components/dharmaKit.tsx` | components | New. Presentational primitives built on the canonical tokens. |
| `docs/product/DESIGN_SYSTEM_FOUNDATION_V1.md` | docs | This file. |

No `app/` route file is touched, so the route-change content guards should report
**no route changes** for this PR.

## Token mapping: prototype → React Native

The prototype `globalTokens` are mockup-scale (CSS px in phone-frame mocks). The RN
layer preserves the prototype's *hierarchy and ratios* but calibrates absolute
sizes to the already-shipped device screens (e.g. `today.tsx` headline 30, card
title ~24, body ~15) so adoption never shrinks live text.

### Color (`palette`)

| Prototype | RN `palette` | Value |
|---|---|---|
| ink | `ink` | `#402615` |
| muted | `muted` | `#7B6550` |
| cream | `cream` | `#FFF8EC` |
| paper | `paper` | `#FFFDF8` |
| saffron | `saffron` | `#F7B547` |
| (saffron ink) | `saffronInk` | `#B66A1F` |
| lotus | `lotus` / `lotusDeep` | `#FAD1E2` / `#F0A9C6` |
| sky | `sky` / `skyDeep` | `#E9F7FF` / `#68BEEA` |
| leaf | `leaf` / `leafDeep` | `#E7F6E9` / `#7AC87A` |
| gold | `gold` | `#FFF2C4` |
| line | `line` | `#F0D8B8` |
| peacock | `peacock` / `peacockLight` | `#2E789F` / `#64C0F0` |

### Gradients (`gradients`)

`expo-linear-gradient` inputs (`colors`, optional `locations`), top-to-bottom
unless a component overrides `start`/`end`:

- `body` — `#FFF0D8 → #FFF8EC → #EAF7FF` (the prototype page background)
- `warm`, `lotus`, `sky`, `leaf` — doorway/world surface tints
- `brandMark` — diya-lotus-sun mark wash
- `peacock` — `#64C0F0 → #2E789F` (Luvlu avatar)
- `progress` — `#F7B547 → #7AC87A` (gentle progress, never a score)

### Type ramp (`text`)

`display 30 / title 24 / heading 20 / subheading 17 / body 15 / bodyStrong 15 /
caption 13 / mini 11 / reader 18`. The prototype's rounded display font
(`ui-rounded` / "SF Pro Rounded" / Nunito) is **not** loaded — `expo-font` is not
installed and `app/_layout.tsx` loads no custom font — so the ramp uses system
fonts. **Follow-up:** wire `expo-font` + the rounded display face to complete brand
parity (deferred; out of scope here).

### Spacing / radii / elevation

- `space` — `xs6 / sm10 / md14 / lg18 / xl24 / xxl32`, plus `screen16`, `card16`,
  `gridGap12`, `kvGap8`.
- `radii` — `hero32 / card28 / lg24 / panel18 / tile16 / bubble16 / listItem14 /
  node14 / nav12 / iconBox11 / pill999` (direct from prototype radii).
- `elevation` — `soft` and `card` RN shadow objects approximating the prototype's
  `0 8px 18px` / `0 16px 34px rgba(106,66,26,.*)`.

### Motion (`motion`)

Timings (ms) from the 424-487 motion contract: `buttonPressIn 90 /
buttonReleaseSettle 140`, `cardLift 100 / cardReturn 160`, `doorOpen 350`,
`nodeReveal 300`, `diyaFlame 250`, `flowerBloom 450`, `bubbleReveal 180`,
`idleBlinkInterval 8000`. **Always pair with `useReducedMotion()`.**

## Component inventory (`dharmaKit`)

All components are pure, presentational, and consume only canonical tokens:

| Component | Prototype contract | Notes |
|---|---|---|
| `GradientScreen` | page background | `expo-linear-gradient` wrapper, `gradient` prop (default `body`). |
| `Card` | `.heroCard` family | paper surface, `radii.card`, `elevation.card`. |
| `HeroCard` | `.heroCard` | optional `gradient` prop for warm/lotus/sky/leaf hero washes. |
| `Tile` | `.tile` / `.grid2` | doorway tile surface. |
| `PrimaryButton` / `SecondaryButton` | CTA pattern | `Pressable`; press scale/opacity feedback is **skipped when reduced motion is on**. |
| `Chip` | tag pill | gold chip with saffron-ink caption. |
| `MetaPill` | `.kv` meta | white meta pill (duration / age / value). |
| `SectionHeader` | screen section title | `accessibilityRole="header"`. |
| `LuvluBubble` | `.luvlu` / `.bubble` | peacock gradient avatar (🦚) + short helper bubble. |
| `EmptyState` | gentle empty/recovery | lotus marker + "Being prepared with care." trust note. |

## Governance honored

- **Motion:** every animated component reads `useReducedMotion()` and drops
  press/scale feedback when the OS "Reduce Motion" setting is enabled.
- **Luvlu boundary:** `LuvluBubble` is a peacock **helper** only — never a logo,
  deity, token, badge, coin, or achievement. Copy stays short; the bubble is meant
  for a card/screen edge and must never sit over sacred focal art or speak over
  narration.
- **No gamification:** no XP, coins, streaks, rank, leaderboard, or score
  surfaces. `gradients.progress` is gentle visual progress only.
- **Local-first:** no backend, auth, analytics, audio, mic, TTS, recording, or
  payments are introduced.
- **"Story World" vocabulary:** no "Story Library" string is introduced.

## Adoption plan

1. **This PR (foundation):** tokens + kit + docs. Zero screen changes.
2. **Child core (next):** polish `today.tsx`, `worlds.tsx`, `world/[slug].tsx`,
   `journey-map/[journeyId].tsx`, `story/[slug].tsx` to adopt the kit — each as a
   separate, screen-scoped PR so the route-change guards stay reviewable.
3. **Parent + system surfaces:** later, same pattern.

## What this PR changes

- Adds the canonical token layer, the reduced-motion hook, the `dharmaKit`
  component library, and this document.

## What this PR does NOT do

- Does not modify any route, screen behavior, navigation, content, registry,
  runtime, or data semantics.
- Does not add new routes or build any 1-487 screen as a route.
- Does not touch `visualTokens` / `visualStyles`, so all merged screens
  (#176-#179) keep their exact current look.
- Does not load fonts, audio, backend, analytics, or any gamification.

## Follow-up recommendations

- **Fonts:** install `expo-font`, load the rounded display face, and point
  `text.display` / `text.title` at it for full brand-mark parity.
- **Child-core adoption PRs:** migrate the five child-core routes onto `dharmaKit`
  one screen at a time.
- **Visual QA:** snapshot the adopting screens against the 296-423 component
  library once migration begins.
