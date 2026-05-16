# Vrindavan Week 2 Runtime QA (Sprint 43)

Date: 2026-05-16

This QA pass validates runtime integration of Vrindavan stories 8–14 into `src/data/seed/vrindavan.ts` while preserving the existing Story → Ritual → Pause/Reflection → Quiz → Completion flow and runtime schema.

## Story-by-Story QA

| Story # | Story Slug | Primary Value | Carrying Word | Runtime Schema Compatibility | Authenticity Check | Parent Trust Check | Child Readability Check | Ritual/Pause/Quiz Quality Check | Final QA Status |
|---|---|---|---|---|---|---|---|---|---|
| 8 | `krishna-shares-the-picnic` | generosity | Share | Uses existing `StoryJourney` packet fields only (world/character/value/story/panels/quiz/ritual/badge/parent/completion); no v2 fields added. | Devotional retelling tone; no invented sacred quotes; no unsupported scripture claims. | Inclusive sharing framing; no guilt/shame framing. | Short sentences and concrete actions suitable for young children. | Ritual is tiny and practical; reflection/pause is calming; quiz is non-shaming. | ready_for_private_beta |
| 9 | `the-flute-and-quiet-listening` | focus | Listen | Preserves existing runtime naming and field structure exactly. | Value-oriented devotional story, no canonical-claim overreach. | Encourages effort and calm attention rather than pressure/perfection. | Warm, simple language with sensory details. | One-minute listening ritual, soft reflection, gentle quiz prompt. | ready_for_private_beta |
| 10 | `respect-at-the-yamuna-bank` | respect | Gentle | Existing schema intact; no backend/CMS/audio fields introduced. | Respectful sacred-place framing; no legal/ritual authority claims. | Models respectful habits through behavior, not fear. | Child-friendly vocabulary and short panel rhythm. | Careful-steps ritual and reflection are practical; quiz reinforces respect safely. | ready_for_private_beta |
| 11 | `the-garland-mistake-and-honest-bow` | humility | Bow | Packet matches prior runtime contract and flow components. | No fabricated quote attribution; focused on gentle repair arc. | Repair-with-dignity framing avoids shame labels. | Clear cause/repair sequence supports comprehension. | Hand-on-heart ritual is doable; pause prompt regulates feelings; quiz is supportive. | ready_for_private_beta |
| 12 | `butter-pot-waiting-game` | self-control | Wait | Runtime story schema fully preserved with no migration fields. | Playful devotional retelling, no unsupported canonical claims. | Emphasizes pause-and-choose without obedience pressure. | Action-oriented, simple, child-safe wording. | Three-breath ritual is compact; pause is embodied; quiz keeps confidence tone. | ready_for_private_beta |
| 13 | `sweeping-the-courtyard-together` | service | Help | Uses current story packet shape and naming conventions only. | Service framed as joyful contribution; no hierarchy/shame framing. | Reinforces family teamwork and contribution trust signals. | Easy-to-follow progression and concrete helping actions. | Two-minute helping ritual is practical; reflection grounded; quiz is gentle. | ready_for_private_beta |
| 14 | `wonder-at-fireflies` | curiosity | Wonder | Completes all existing runtime elements with no schema change. | Devotional wonder tone; no doctrine/science overclaims. | Encourages open-ended noticing and calm gratitude. | Soft, vivid language appropriate for ages 4–6. | Wonder ritual and reflection are soothing; quiz rewards curiosity safely. | ready_for_private_beta |

## Runtime Schema Compatibility Notes

- All seven added stories follow the existing `StoryJourney` runtime structure used by stories 1–7.
- No Content Data Model v2 runtime fields were introduced.
- No age-band routing fields, backend/auth/cloud-sync fields, CMS fields, analytics fields, audio fields, or dependency changes were introduced.
- Story order extends naturally from 1–7 to 8–14 without reordering prior story slugs.

## Manual iPhone QA Checklist (Required Post-CLI)

This CLI environment cannot run iPhone device checks. The following must be executed on iPhone and recorded:

1. Verify stories 1–14 are reachable in Vrindavan path.
2. Verify each new story (8–14) opens without crash.
3. Verify story panels render correctly.
4. Verify quiz renders correctly.
5. Verify ritual/pause/completion flow remains intact.
6. Verify no layout break on story detail screen.
7. Verify parent dashboard/progress does not regress.
8. Verify no duplicate or broken story cards.
