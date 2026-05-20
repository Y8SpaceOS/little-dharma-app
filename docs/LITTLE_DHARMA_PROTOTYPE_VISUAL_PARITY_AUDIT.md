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
- **Visual parity score:** **4/5**
- **Previous score:** **3/5**
- **What matches:** warm gradient shell, ornate motif framing, stronger hero composition, prototype-like CTA hierarchy, and Luvlu helper state.
- **What does not match:** still slightly lighter than full prototype illustration depth.
- **What was repaired:** upgraded spacing rhythm and card geometry, refined typography hierarchy, added richer diya-lotus-sun/cloud-leaf ornamental cadence, and kept local QA reset visually secondary.
- **Required repair:** completed in Sprint 80B for parity baseline.
- **Remaining gaps:** can still deepen illustration density on future polish passes.
- **Repair priority:** **P2**
- **Merge blocker:** **no**
## 2) Onboarding
- **Implemented route/file:** `/onboarding` → `app/onboarding.tsx`
- **Reference screen IDs:** 01–08, 146–155, 306–315, 424–443, 487
- **Visual parity score:** **4/5**
- **Previous score:** **3/5**
- **What matches:** art-directed panel framing, stronger step hierarchy, motif cadence, and Luvlu helper logic aligned to onboarding progression.
- **What does not match:** some step backgrounds can gain additional bespoke scene detail later.
- **What was repaired:** recomposed step cards away from utility look, improved button geometry/spacing, strengthened typography and trust-note prominence, and preserved age-band + local-first privacy-safe language.
- **Required repair:** completed in Sprint 80B for parity baseline.
- **Remaining gaps:** future polish can add richer bespoke illustration per step.
- **Repair priority:** **P2**
- **Merge blocker:** **no**
## 3) Child Home
- **Implemented route/file:** `/(child)/today` → `app/(child)/today.tsx`
- **Reference screen IDs:** 09–18, 46–75, 156–175, 316–335, 424–453
- **Visual parity score:** **4/5**
- **Previous score:** **3/5**
- **What matches:** hero-to-grid hierarchy, warm doorway card family, restored motif anchors (diya, lotus, sun, flower, cloud, leaf), and Luvlu helper-bubble role.
- **What does not match:** additional visual storytelling micro-illustrations remain optional polish.
- **What was repaired:** increased hero prominence, rebalanced doorway emphasis, added motif anchoring rhythm, and improved helper copy/state while preserving existing route links and no fake metrics.
- **Required repair:** completed in Sprint 80B for parity baseline.
- **Remaining gaps:** door-card art density can still increase in later polish.
- **Repair priority:** **P2**
- **Merge blocker:** **no**
## 4) Story World
- **Implemented route/file:** `/(child)/worlds` → `app/(child)/worlds.tsx`
- **Reference screen IDs:** 09–18, 46–75, 156–175, 316–335, 424–453
- **Visual parity score:** **4/5**
- **Previous score:** **3/5**
- **What matches:** child-facing Story World label, doorway/world-card framing, warm chip language, and hierarchy between title/summary/action/cues.
- **What does not match:** deeper bespoke artwork layers can be added in a later polish sprint.
- **What was repaired:** shifted generic cards toward doorway composition, strengthened motif balance and chip rhythm, and preserved full category coverage (Krishna, Ganesha, Ramayana, Hanuman, Bedtime, Values, Festival).
- **Required repair:** completed in Sprint 80B for parity baseline.
- **Remaining gaps:** optional future polish for richer scene illustrations.
- **Repair priority:** **P2**
- **Merge blocker:** **no**
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
