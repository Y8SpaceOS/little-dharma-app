# LITTLE DHARMA PROTOTYPE VISUAL PARITY AUDIT (Sprint 80 Merge Block)

## Purpose
This audit pauses PR #92 merge until Sprint 80 implemented screens achieve acceptable visual parity against assigned prototype/reference screens.

## Scoring Definition (Visual Parity Only)
- **5** = almost same as prototype
- **4** = clearly inherits from prototype and acceptable
- **3** = directionally related but visibly different
- **2** = generic implementation
- **1** = wrong screen

## Repair Priority Definition
- **P0** = merge-blocking visual repair required before Sprint 80 merge
- **P1** = high-importance repair; acceptable only after P0 closure
- **P2** = polish repair that can follow after parity baseline

---

## 1) App Entry
- **Implemented route/file:** `/` → `app/index.tsx`
- **Reference screen IDs:** 01–08, 146–155, 306–315, 424–443, 487
- **Visual parity score:** **3/5**
- **What matches:** warm gradient shell, Little Dharma mark, intro CTA, helper presence.
- **What does not match:** prototype-level spacing rhythm, motif layering, and typography hierarchy are simplified; card proportions and ornamental framing are noticeably generic.
- **Required repair:** align hero spacing scale, type ramp, and ornamental motif framing to prototype; implement prototype-faithful card geometry and CTA placement; refine Luvlu placement/state to match reference composition.
- **Repair priority:** **P0**
- **Merge blocker:** **yes**
- **Manual review status:** **under manual review until screenshot approval**.
- **Scoring rule note:** do not auto-upgrade App Entry to 4/5 or 5/5 without explicit screenshot-confirmed evidence.
- **Evidence requirement:** visual parity closure requires manual screenshot confirmation.
- **Evidence note:** Screen 01 rebuilt from little_dharma_screen_01_splash_visual_spec.md and little_dharma_screen_01_splash_contract.json. Manual screenshot approval required before score upgrade.


## 2) Onboarding
- **Implemented route/file:** `/onboarding` → `app/onboarding.tsx`
- **Reference screen IDs:** 01–08, 146–155, 306–315, 424–443, 487
- **Visual parity score:** **3/5**
- **What matches:** multi-step flow intent, soft palette family, helper/trust callouts.
- **What does not match:** reference screens appear more art-directed and spatially curated; current implementation reads as utility cards with limited motif depth and weaker visual hierarchy transitions between steps.
- **Required repair:** recompose each onboarding panel to prototype compositions, harmonize iconography and motif cadence, tighten step-level hierarchy and button geometry, and match reference Luvlu state logic.
- **Repair priority:** **P0**
- **Merge blocker:** **yes**

## 3) Child Home
- **Implemented route/file:** `/(child)/today` → `app/(child)/today.tsx`
- **Reference screen IDs:** 09–18, 46–75, 156–175, 316–335, 424–453
- **Visual parity score:** **3/5**
- **What matches:** welcome hero, doorway cards, warm child-facing tone, Luvlu helper bubble.
- **What does not match:** grid/card anatomy and prominence weighting differ from prototype; motif density and decorative anchors under-represented; primary/secondary action hierarchy does not fully resemble references.
- **Required repair:** implement prototype card families and elevations, rebalance hero-to-grid visual hierarchy, restore missing motif anchors, and align Luvlu bubble location/state to prototype frames.
- **Repair priority:** **P0**
- **Merge blocker:** **yes**

## 4) Story World
- **Implemented route/file:** `/(child)/worlds` → `app/(child)/worlds.tsx`
- **Reference screen IDs:** 09–18, 46–75, 156–175, 316–335, 424–453
- **Visual parity score:** **3/5**
- **What matches:** doorway browsing concept, category chips, warm palette family.
- **What does not match:** component shapes and world-card compositions remain generic versus prototype; hierarchy between world artwork, labels, and actions is flatter than references.
- **Required repair:** convert doorway cards to prototype-specific composition system, restore artwork/motif balance, and align CTA chip treatment plus spacing cadence to references.
- **Repair priority:** **P0**
- **Merge blocker:** **yes**

## 5) Story Detail
- **Implemented route/file:** `/story/[slug]` (detail state) → `app/story/[slug].tsx`
- **Reference screen IDs:** 22–28, 86–95, 186–195, 336–347
- **Visual parity score:** **3/5**
- **What matches:** clear story metadata, parent context note, start action.
- **What does not match:** prototype detail screens show stronger hero art + layered card relationships; current layout relies on simple stacked cards with limited motif fidelity.
- **Required repair:** rebuild detail header and metadata blocks with prototype structure, re-style Luvlu guide panel to match reference state, and align CTA order/size/spacing.
- **Repair priority:** **P0**
- **Merge blocker:** **yes**

## 6) Story Reader
- **Implemented route/file:** `/story/[slug]` (reader state) → `app/story/[slug].tsx`
- **Reference screen IDs:** 22–28, 86–95, 186–195, 336–347
- **Visual parity score:** **2/5**
- **What matches:** panel progression and calm reading intent.
- **What does not match:** reader typography, panel framing, navigation controls, and ceremonial motif treatment diverge significantly from prototype reading surfaces.
- **Required repair:** implement prototype reader template (text frame, progress cues, nav control styling, margins, and motif framing), and align Luvlu helper state per reference.
- **Repair priority:** **P0**
- **Merge blocker:** **yes**

## 7) Story Completion
- **Implemented route/file:** `/story/[slug]` (completion state) → `app/story/[slug].tsx`
- **Reference screen IDs:** 22–28, 86–95, 186–195, 336–347, 452–453
- **Visual parity score:** **3/5**
- **What matches:** completion acknowledgment, blessing language, return links.
- **What does not match:** celebration surface is understated versus prototype; completion card stack, visual reward composition, and motif warmth depth are not yet parity-level.
- **Required repair:** match prototype completion composition, strengthen visual reward hierarchy (without gamification), and reposition Luvlu/support blocks per reference states.
- **Repair priority:** **P0**
- **Merge blocker:** **yes**

## 8) Dharma Journeys
- **Implemented route/file:** Story World/Journey doorway representations in `app/(child)/worlds.tsx` and `app/world/[slug].tsx` (`journeys` slug)
- **Reference screen IDs:** 19–21, **especially Screen 20**
- **Visual parity score:** **2/5**
- **What matches:** a journey entry point exists; journey concept is represented.
- **What does not match:** the Screen 20-specific visual structure and journey-path storytelling treatment are not implemented with parity; current view is mostly placeholder/generic cards.
- **Required repair:** implement Screen 20-first journey visual model (path architecture, hierarchy, and composition), then align supporting states for 19–21.
- **Repair priority:** **P0**
- **Merge blocker:** **yes**

## 9) Journey Detail
- **Implemented route/file:** `/world/[slug]` (journeys and related world detail card surfaces) → `app/world/[slug].tsx`
- **Reference screen IDs:** **Screen 20**, 76–85, 176–185, 348–355
- **Visual parity score:** **2/5**
- **What matches:** route exists for doorway detail and status chips.
- **What does not match:** reference journey-detail structure (especially Screen 20 lineage) is not visually mirrored; card hierarchy and progression framing are generic.
- **Required repair:** create prototype-faithful Journey Detail template (Screen 20 anchor), including hierarchy, path framing, and culturally respectful motif composition.
- **Repair priority:** **P0**
- **Merge blocker:** **yes**

## 10) Values
- **Implemented route/file:** `/world/values` via `app/world/[slug].tsx` (values slug)
- **Reference screen IDs:** 29–31, 236–245, 356–365
- **Visual parity score:** **3/5**
- **What matches:** values doorway and value-tag language are present.
- **What does not match:** prototype values screens have richer iconographic/ornamental structure and stronger hierarchy; current values detail is repurposed generic world detail.
- **Required repair:** introduce dedicated values visual treatment matching reference card families, value motif placement, and hierarchy.
- **Repair priority:** **P0**
- **Merge blocker:** **yes**

## 11) My Treasures
- **Implemented route/file:** `/(child)/treasures` → `app/(child)/treasures.tsx`
- **Reference screen IDs:** 29–31, 236–245, 452–453, 457–460
- **Visual parity score:** **3/5**
- **What matches:** memory/value garden concept, warm emotional tone, child-facing encouragement.
- **What does not match:** prototype treasure compositions and visual motif choreography are denser and more distinct; current layout remains text-heavy and utilitarian.
- **Required repair:** recompose hero, memory clusters, and value garden chips into prototype card architecture; reduce text density and align decorative motif rhythm.
- **Repair priority:** **P0**
- **Merge blocker:** **yes**

---

## Global Merge Gate Outcome
- Screens below 4 requiring repair: **all 11 audited screens**.
- Sprint 80 merge status: **blocked** until P0 parity repairs are completed and re-audited.
- Sprint 81 status in this audit: **not started**.
- Guardrails reconfirmed: **no backend/auth/cloud sync/CMS/analytics expansion, no audio/mic/voice command features, no hard gamification additions** in this audit PR.
