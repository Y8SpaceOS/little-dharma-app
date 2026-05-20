# Sprint 80 — Dharma Journeys + Treasures + Values Reconstruction QA

## Reference screen IDs used
19–21, 29–31, 76–85, 176–185, 236–245, 304, 348–365, 449, 452–453, 457–460, 462–469, 487.

## Routes touched
- `app/(child)/journeys.tsx`
- `app/(child)/journeys/[journeyId].tsx`
- `app/(child)/values.tsx`
- `app/(child)/treasures.tsx`
- `app/(child)/today.tsx`

## Luvlu declaration
- Luvlu shown: yes.
- reason: gentle journey guide and values reflection helper.
- placement: Dharma Journeys helper card; Values helper bubble; Treasures reflective helper card.
- size: medium/helper scale.
- state: journeys path guide; values gentle explainer; treasures reflective helper.
- not logo.

## Luvlu audio future boundary
Luvlu may become an optional tap-to-hear audio guide in a future sprint. This sprint adds no audio playback, microphone, voice command, recording, child speech capture, or AI conversation.

## Motion decision (457–460 inheritance)
Soft press/card-lift interactions only and gentle node highlight styling. No heavy animation libraries or looping motion.

## Cultural respect decision (462–469 inheritance)
Respectful child-comprehensible language for Ramayana/Krishna/Ganesha/Hanuman/Festival references; no deity avatarization; Luvlu remains helper and not deity substitute.

## Parent-child boundary decision
No parent settings exposed inside new child routes. Existing parent handoff remains unchanged.

## Manual QA checklist
- [ ] Dharma Journeys route shows six journey cards and gentle progress language.
- [ ] Journey detail shell renders node path with gentle future-node language.
- [ ] Values route shows all six values with story-practice copy.
- [ ] My Treasures shows Story Flowers/Blessing Notes/Value Petals/Diyas Lit language and honest placeholder.
- [ ] Child Home includes clear links/cards to Dharma Journeys, Values, and My Treasures.
- [ ] No XP/coins/streak/rank/leaderboard/competition terms in touched routes.
- [ ] No backend/auth/cloud sync/CMS/analytics/telemetry/monetisation/mic/recording/audio playback/voice command added.

## Sprint boundary confirmation
Sprint 80 completed. Sprint 81 not started.
