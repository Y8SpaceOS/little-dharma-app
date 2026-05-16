# Vrindavan Week 3 Runtime QA (Stories 15–21)

## Scope
Sprint 44 runtime content integration adds exactly seven Week 3 Vrindavan stories (15–21) to complete the 21-story private-beta base path, preserving the existing runtime schema and Story → Ritual → Pause/Reflection → Quiz → Completion flow.

## Story-by-story QA

| Story # | Story slug | Primary value | Runtime schema compatibility | Authenticity check | Parent trust check | Child readability check | Ritual/Pause/Quiz quality check | Carrying word | Final QA status |
|---|---|---|---|---|---|---|---|---|---|
| 15 | `krishna-cares-for-the-smallest-calf` | Responsibility | Uses existing `StoryJourney` fields only: panels, quiz, ritual, badge, parent reflection, completion copy. | Devotional tone; no invented sacred quote claims; no scripture attribution claims. | Calm, non-shaming care framing. | Short concrete sentences for ages 4–6. | Ritual is practical; reflection present in ritual; quiz has one clear correct answer. | Steady Care | Ready for private beta |
| 16 | `moonlight-calm-under-the-kadamba-tree` | Calm | Uses unchanged runtime packet structure and field names. | Respectful devotional atmosphere; no unsupported theological claims. | Co-regulation framing supports trust and safety. | Soft language and sensory imagery suitable for young children. | Breath-based ritual, reflection prompt, and comprehension quiz all coherent. | Moonlight Calm | Ready for private beta |
| 17 | `the-friendship-repair-circle` | Forgiveness | Fully compatible with current seed schema and sequencing expectations. | No punitive framing, no fabricated quotation sourcing. | Emphasizes listening and repair over blame. | Age-appropriate conflict-repair language. | Ritual supports family practice; quiz reinforces repair steps. | Kind Repair | Ready for private beta |
| 18 | `krishna-speaks-bravely-and-kindly` | Courage | Matches established StoryJourney runtime component set. | Respectful portrayal; no unsupported scripture references. | Encourages assertive but kind safety language. | Clear examples children can imitate. | Ritual gives concrete sentence practice; quiz checks value understanding. | Brave Kind Voice | Ready for private beta |
| 19 | `the-wise-choice-at-the-crossroads` | Wisdom | Preserves all runtime contracts with no v2/age-band routing fields added. | No overclaims; value taught through child-safe scenario. | Safety-first decision framing aligned with parent trust. | Simple contrast between quick/risky vs safe/steady choice. | Ritual pause + reflection + quiz all value-aligned. | Wise Choice | Ready for private beta |
| 20 | `morning-devotion-in-vrindavan` | Devotion | No schema migration; runtime shape remains consistent. | Devotional storytelling without literal scripture translation or fabricated citation. | Gentle family-practice framing, non-coercive tone. | Simple and warm phrases for early readers/listeners. | Ritual is short and doable; quiz verifies meaning through actions. | Loving Devotion | Ready for private beta |
| 21 | `the-gratitude-circle-at-sunset` | Gratitude/Joy | Uses existing schema fields and completion metadata pattern. | Thankfulness arc with no unsupported content claims. | Family circle/listening emphasis supports belonging and trust. | Repetitive, concrete gratitude examples aid comprehension. | Ritual round + reflection + quiz quality meets private-beta bar. | Thankful Joy | Ready for private beta |

## Runtime schema compatibility notes
- All Week 3 packets keep the same runtime structure already used in stories 1–14.
- No Content Data Model v2 runtime fields were added.
- No age-band routing fields were introduced.
- No backend/CMS/audio/analytics/native-sharing fields were introduced.

## Full 21-story path readiness
- Week 1 (stories 1–7), Week 2 (stories 8–14), and Week 3 (stories 15–21) are present with unique slugs.
- Week 3 extends naturally from Week 2 and preserves devotional, child-safe quality guardrails.
- Final QA status: **Ready for private beta handoff**.

## Manual iPhone QA status
- Manual iPhone QA is required post-integration for real-device verification of reachability, rendering, flow integrity, and regression checks across child and parent surfaces.
