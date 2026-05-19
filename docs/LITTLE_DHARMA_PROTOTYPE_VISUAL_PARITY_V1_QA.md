# Sprint 76 Visual QA Failure Patch (Prototype Visual Parity Foundation v1)

This update is an explicit **Sprint 76 visual QA failure patch** after manual QA reported that runtime visuals still felt too list-like and technical.

## Runtime surfaces implemented this sprint

This visual QA failure patch was implemented this sprint across the listed runtime surfaces.

## Screens changed
- `app/_layout.tsx` (hide route/debug headers)
- `app/(child)/today.tsx`
- `app/(child)/worlds.tsx`
- `app/world/[slug].tsx`
- `app/(parent)/dashboard.tsx`
- `src/design/visualSystem.ts`

## Prototype references used
- 09 Child Home
- 10 Story World Browse
- 15 Krishna Stories Category
- 16 Festival Doorway
- 18 Empty/New Child State
- 19 Dharma Journeys Hub
- 22 Story Detail (partial in this patch)
- 38 Parent Progress Dashboard
- 40 Parent Controls

## Visual changes made
- Route/debug headers hidden from runtime shell.
- Child Home rebuilt with warm greeting hero, journey hero card, Luvlu helper bubble, and 2x2 warm pathway doorway grid.
- Story World rebuilt from text-list feeling into doorway card grid with icons and distinct surfaces.
- World detail rebuilt with world-specific hero tone and structured story cards with separated chips/rows/CTA.
- Parent Dashboard rebuilt into warm trust-first hierarchy with weekly metrics and trust cards.
- Expanded shared warm visual system tokens and component styles.

## Remaining parity gaps
- Stronger Krishna/Ganesha/Bedtime/Journey motif depth with richer art anchors.
- Advanced gradients and illustration anchors.
- Doorway-art blocks and journey pathline visuals.
- Richer treasures/collectible moments.
- Full parent surface parity pass beyond dashboard.
- Story Detail screen 22 parity still partial and needs deeper visual pass.

## Manual QA checklist
- [ ] No visible route/debug labels such as `(child)/today`.
- [ ] Child Home feels warm, rounded, and child-facing with doorway cards.
- [ ] Story World feels like entering worlds, not reading a catalogue.
- [ ] World detail cards separate title/description/chips/source/CTA cleanly.
- [ ] Parent dashboard feels trust-first and warm (not enterprise/report-like).
- [ ] Luvlu is helper-only and Moru is not used in active runtime copy.


## Prototype mapping
This patch maps Child Home, Story World, World Detail, Parent Dashboard, and shell cleanup against the prototype references listed above.
