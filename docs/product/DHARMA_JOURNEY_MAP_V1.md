# Dharma Journey Map v1 (PR #178)

## Supported journeys
- Krishna Childhood Journey (`krishna-childhood-journey-pack-1`)
- Ramayana Journey (`ramayana-journey-pack-1`)
- Ganesha Wisdom Journey (`ganesha-wisdom-journey-pack-1`)

## What the map shows
- Journey title and child-facing description.
- Ordered story steps from `contentRegistryJourneys.storyIds` using existing story metadata.
- Each step includes title, summary, value, age bands, and duration when available.
- Gentle path markers (diya, flower, lotus dot) for child-friendly wayfinding.
- Step states: `completed`, `available`, `coming_soon`, `being_prepared`, and `missing`.
- If a step is not runtime eligible, it uses “Being prepared with care.”

## Navigation behavior
- Story cards with `journeyId` may route to `/journey-map/{journeyId}`.
- Runtime-ready stories keep direct story access through existing story routes.
- Existing story navigation is preserved for non-journey stories.

## Empty and fallback behavior
- Missing `journeyOrder` is tolerated and never crashes rendering.
- If no ordered stories are found, the map renders a warm fallback message.
- Missing story metadata degrades safely through map-level fallback and non-crashing step generation.

## Intentionally not included in v1
- No XP, coins, streaks, rankings, leaderboards, energy bars, loot, or paid locks.
- No lock-gate mechanics or addictive progression loops.
- No audio playback, chanting, TTS, microphone, voice recording, or pronunciation scoring.
- No backend, account, analytics, or tracking dependency.

## Progress-state limitations
- Progress is local and gentle (`gentle_local_stub`).
- Visual states are non-competitive and trust-first.
- Completion states are representational and not reward-loop mechanics.

## Sacred-content guardrails
- Sacred stories are presented with respectful, child-safe language.
- No deity caricature behavior is introduced by this map model.
- Story availability language uses “prepared with care” for non-runtime steps.

## Recommended next PR
- Add a dedicated child route/screen shell that renders this model with large touch targets and accessibility audits.
- Wire map step tap actions to runtime-ready story detail route and soft disabled state cards for preparation-mode stories.

## Final PR validation
- Final Quality Gates are passing for PR #178.
- The stale P1 concern about `/journey-map/[journeyId]` is addressed by the child-facing journey map route.
- No further product or code changes are required before merge.
