# Design Screen Reference 1-487

## Purpose

This document makes the 1-487 Little Dharma screen reference system part of the repository handoff. These screens are extremely important for design quality, visual direction, and future implementation planning.

The screen packs should guide design and implementation, but they must not automatically become app routes. Every implementation sprint still requires explicit approval.

## Why this matters

Little Dharma should not regress into a generic content app. The screen reference system defines the warmth, child-friendly density, Story World structure, Dharma Journey feel, parent trust surfaces, Luvlu behavior, motion language, and cultural restraint needed for the final product.

Claude Code, Codex, or any future implementer must treat these screens as the main design reference layer when working on UI, design system, Story World, parent surfaces, journey surfaces, audio states, completion moments, and micro-interactions.

## Source screen ranges

### Screen 01

Screen 01 was handled separately in earlier design work. It should be treated as part of the first prototype baseline, not as a license to redesign later screens.

### Screens 02-45

Screens 02-45 come from the first 45-screen structured prototype reference. This pack defines the early app-level warmth, child-facing surfaces, Story World language, parent trust framing, and baseline visual direction.

Known source file from project file library:

- `little_dharma_screens_02_45_visual_specs.md`
- Source noted inside that file: `little_dharma_45_screen_codex_reference.html`

Implementation meaning:

- Use as visual and interaction reference.
- Preserve 390/844 phone composition, gradients, rounded cards, shadows, text hierarchy, and CTA hierarchy when implementing selected screens.
- Do not implement all screens as routes by default.
- Do not introduce backend, analytics, recording, XP, coins, streaks, leaderboards, or new product flows.

### Screens 46-145

Screens 46-145 are part of the missing middle reference range from the expanded prototype work. If implementation needs these screens, fetch the exact visual specs/source pack before coding. Do not infer exact screen contracts from memory.

Implementation meaning:

- Treat as reference-only until the exact source pack is committed or attached to the task.
- Do not build from guesswork.
- Use only approved sprint summaries to select which screens or components are implemented.

### Screens 146-295

Screens 146-295 come from the expanded product-depth reference pack.

Known source file from project file library:

- `little_dharma_screens_146_295_visual_specs.md`
- Source noted inside that file: `little_dharma_next_150_screens_primary_45_plus_100.html`

This range expands the product beyond the first 45 screens. It includes richer Story World patterns, Dharma Journey surfaces, parent-trusted surfaces, Luvlu usage examples, audio-related states, values/treasures/garden ideas, rituals, and product-depth references.

Implementation meaning:

- Use as product-depth and visual reference.
- Do not replace the sprint roadmap with these screens.
- Do not implement adjacent screens just because a selected screen references them.
- Preserve child-safe, local-first, parent-trusted constraints.

### Screens 296-423

Screens 296-423 come from the missing-screen implementation contract set.

Known source files from project file library:

- `little_dharma_screens_296_423_visual_specs.md`
- `little_dharma_screens_296_423_contracts.json`

This range includes important design system and deeper product-surface references such as component library, card library, category details, Story World list/search surfaces, parent surfaces, journey/detail surfaces, audio states, and product-depth screens.

Implementation meaning:

- Use as detailed visual contracts when a screen or component is selected for implementation.
- These contracts include source mappings, required elements, forbidden elements, React Native mapping guidance, and acceptance checklists.
- Do not merge these contracts with screens 01-295 or 424-487 unless a sprint explicitly says so.
- Manual screenshot comparison is required when implementing a selected screen from this range.

### Screens 424-487

Screens 424-487 are the Luvlu + Motion + Micro-State Governance pack.

Known source files from project file library:

- `little_dharma_luvlu_motion_governance_spec.md`
- `little_dharma_luvlu_motion_governance_contract.json`
- Source noted inside those files: `little_dharma_luvlu_motion_microstate_pack_64.html`

This range is not a route implementation pack. It is a governance system for Luvlu, motion, cultural respect, parent-child boundary rules, state transitions, and future character/IP boundaries.

Implementation meaning:

- Do not implement Screens 424-487 as React Native routes.
- Do not create exact route contracts for Screens 424-487.
- Extract reusable rules, components, states, motion principles, cultural guardrails, parent-child boundary rules, and future-IP boundaries.
- Luvlu must remain a subtle helper, not a logo, deity, token, badge, coin, idol, achievement, or reward object.
- Motion must remain soft, warm, low-intensity, and respectful.

## Design source hierarchy

When designing or implementing Little Dharma UI, use this priority order:

1. Approved roadmap and sprint approval summary.
2. Current app architecture and local-first constraints.
3. Product handoff docs in `docs/product/`.
4. Exact screen range contracts from the relevant source pack.
5. Shared design tokens and component conventions from the screen contracts.
6. Manual screenshot review for selected visual surfaces.

Do not use the screen packs to override product principles, local-first architecture, sacred respect, parent trust, or no-drift governance.

## Universal design rules from the screen system

- Preserve warm Indian child-friendly visual language.
- Use large rounded cards and soft shadows.
- Prefer cream, saffron, lotus, sky, leaf, gold, and peacock accents.
- Use `Story World`, not `Story Library`, in child-facing copy.
- Use `Dharma Journeys`, story paths, values, blessings, diyas, flowers, treasures, and garden language.
- Avoid course/module/unlock/premium/XP/coins/streak/rank/leaderboard language.
- Keep parent surfaces calm, trust-oriented, privacy-safe, and practical.
- Avoid adult religious-app density.
- Avoid dry curriculum styling.
- Avoid analytics-dashboard styling.
- Avoid marketplace/paywall styling.

## Luvlu rules from the screen system

- Luvlu is the peacock helper/guide.
- The brand mark remains diya-lotus-sun.
- Luvlu can support onboarding, empty states, story transitions, ritual guidance, completion moments, values garden prompts, parent-child prompts, recovery states, and calm guidance.
- Luvlu must not dominate parent screens.
- Luvlu must not nag the child.
- Luvlu must not create return pressure.
- Luvlu must not introduce XP, coins, streaks, ranks, or leaderboards.
- Luvlu must not trivialize sacred content.
- Luvlu must not replace parent guidance.
- Luvlu bubbles should be short.
- Luvlu should not speak over story narration or sacred sound.

## Motion rules from the screen system

- Motion should be soft, short, and calm.
- Button press can use soft press-in and shadow reduction.
- Card tap can use short lift and soft return.
- Story World doors can use magical but calm reveal.
- Journey completion can use diya or halo light.
- Story completion can use diya light, flower bloom, or treasure reveal.
- Do not use loot-box, confetti-heavy, streak, competitive, or urgency mechanics.
- Reduced-motion fallback should exist for meaningful motion.

## Implementation rules

A screen reference can be implemented only when the sprint explicitly selects it or selects a component/system derived from it.

Before implementation, the sprint approval summary must say:

- selected screen range
- selected screen numbers or component families
- whether implementation is exact visual reconstruction, component extraction, or governance extraction
- allowed files
- prohibited files
- manual screenshot acceptance requirement

## Do-not-build rules

Do not automatically build:

- all 487 screens as routes
- Screens 424-487 as routes
- future companion selection
- merchandise/IP flows
- multiple active mascots
- backend, auth, analytics, sharing, notifications, payments, microphone, recording, TTS, or AI personalization
- hard gamification

## Manual design QA for screen-based implementation

When implementing a selected screen or component:

- Compare against the relevant visual spec/source preview.
- Confirm 390/844 composition or approved responsive adaptation.
- Confirm source text and hierarchy are preserved where exact reconstruction is required.
- Confirm no forbidden elements are added.
- Confirm no new product flows are introduced.
- Confirm Luvlu usage matches the source screen or governance rule.
- Confirm sacred content is not over-cartoonish or trivialized.

## Final instruction

The 1-487 screen system is a design reference and governance layer. It is essential to the final product quality. It must be available to Claude Code and future implementers, but it must be used with discipline: implement only approved surfaces, preserve the roadmap, and never convert reference screens into uncontrolled route sprawl.
