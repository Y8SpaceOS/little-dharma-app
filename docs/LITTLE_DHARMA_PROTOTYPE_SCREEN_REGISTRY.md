# Little Dharma Prototype Screen Registry v2 (Active 01–487)

This governance registry is the active implementation contract for **screen IDs 01–487**.

## Active tier system (implementation scope)

| ID range | Tier | Usage |
|---|---|---|
| 01–45 | Primary Prototype / Visual Soul | primary visual north star |
| 46–145 | Immediate Next 100 / Product Expansion | product-depth expansion |
| 146–295 | Newly Shared Next 150 / Deep Product Flows | active expanded product reference |
| 296–423 | Missing Screens Pack / Implementation Depth | design system, edge states, runtime controls, trust settings, accessibility, offline, future reference surfaces |
| 424–487 | Luvlu + Motion + Micro-State Pack | Luvlu character system, motion, microinteractions, sacred/cultural respect rules, parent-child boundaries, recovery states, future IP guardrails |


## Legacy parity anchor note

Screens 01–08 remain the onboarding/app-shell parity anchor set for Sprint 77 continuity.
Screen 01 through Screen 08 references remain valid inside the active 01–487 system.

## Archived conflicting set (explicitly non-active)

The older **unique/indicative 100-screen set** is now:
- **archived**
- **tertiary inspiration only**
- **not active implementation scope**
- **not used for active screen numbering**
- **superseded by the newly shared 146–295 and 296–487 reference system**

## Active registry data source

Machine-readable active registry source (validated by script):
- `docs/content/prototype-screen-registry-active.csv`

Archive metadata source (validated by script):
- `docs/content/prototype-screen-registry-archived-unique-indicative-100.csv`

## UI PR inheritance governance rule

Every future UI PR must declare one of:
1. direct prototype/reference screen IDs used, or
2. inherited archetype/system screens used from 296–487.

For non-direct screens, each PR must declare:
- closest archetype/reference screen
- surface type: child-facing / parent-facing / system state / future-only
- components inherited
- Luvlu usage decision
- motion/microinteraction decision
- cultural/parent/privacy guardrail if relevant
- manual QA checklist

## Child-facing Luvlu declaration rule (424–487 governs)

Every child-facing screen must explicitly declare:
- Luvlu shown / not shown
- reason
- placement
- size
- state: active guide / quiet / muted / bedtime / tap-help / recovery / completion / not applicable

## Motion inheritance rule (454–461 governs)

Any interactive visual treatment must inherit from screens 454–461 where relevant:
- button press
- card lift
- Story World door opening
- journey node completion
- diya lighting
- flower bloom
- treasure reveal
- Luvlu wing flutter/blink

## Sacred/cultural respect rule (462–469 governs)

Any screen involving deity stories, shlokas, sacred sound, rituals, festivals, Ramayana, Krishna, Ganesha, Hanuman, Rama, or Devi must reference the relevant cultural respect screens 462–469.

## Parent-child boundary rule (470–475 governs)

Any parent gate, child-to-parent transition, disabled child setting, parent setting impact, or child-safe redirect must reference screens 470–475.

## Future-only governance (must stay reference-only unless explicitly scoped)

- 406–415: commerce/ecosystem (future/reference only)
- 416–423: school/teacher/community (future/reference only)
- 482–487: future character/IP governance (future/reference only)

## Sprint mapping alignment

The old product roadmap remains preserved, while this 01–487 registry is now the design execution layer across all sprints.

Near-term execution sequence:
- 77A — Active Design Registry Rebase to 01–487
- 77B — Onboarding + Entry Visual Reconstruction using 01–487
- 78 — Child Home + Story World Reconstruction
- 79 — Story Detail + Reader + Completion
- 80 — Dharma Journeys + Treasures + Values
- 81 — Audio + Bedtime + Ritual + Culture Foundation
- 82 — Parent Trust + Controls + Weekly Summary Foundation
- 83 — Visual Parity Hardening
- 84 — Activities / Printables Foundation
- 85 — Culture & Wonder Foundation
- 86 — Ganesha Story Pack v1 + Story World Integration
- 87 — Krishna Story Pack v1 + Story World Integration
- 88 — Ramayana Journey Content Foundation
- 89 — Journey Map Runtime Depth
- 90 — Audio Metadata / Player Foundation Hardening

Global guardrails remain active:
- No hard gamification product mechanics (no XP, coins, streaks, leaderboards, rankings).
- Sprint 78 onward remains **not_started** unless already completed in existing history.
- TASK_LOG remains append-only.
- This sprint performs governance/reference updates only; no runtime UI redesign.
