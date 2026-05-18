# Content Pack Architecture v2

## Why content packs exist
Little Dharma needs a local-first way to grow from one seeded story path into multiple warm story worlds and dharma journeys without becoming a generic content app.

## Local-first architecture
- Content packs are defined in local TypeScript metadata (`src/lib/contentPacks.ts`).
- No backend, auth, cloud sync, CMS, analytics, telemetry, or remote config is required.
- Status is explicit: `available`, `planned`, or `coming_later`.

## Story World and Dharma Journeys relationship
- `story_world`/`festival`/`bedtime`/`values` packs describe browse-ready story world collections.
- `dharma_journey` packs describe future sequential journey paths.
- Story World remains child-facing and warm. Journey packs remain parent-trust transparent when not yet available.

## Required metadata
Each pack includes:
`id`, `title`, `childFacingTitle`, `description`, `packType`, `sourceTradition`, `recommendedAgeBands`, `primaryValues`, `characters`, `storyIds`, `journeyIds`, `status`, `sortOrder`, `parentTrustNote`, and `updatedAtLocal`.

## Editorial guardrails
- Child-safe retellings.
- No graphic violence for younger children.
- No fear-based religion.
- No sectarian superiority.
- No caste-coded messaging.
- No guilt-based devotion.
- No deity trivialisation.
- Source-tradition respect and parent-trusted language.
- Clear age-band suitability and clear status labeling.

## What is not included yet
- No full Ramayana/Mahabharata/Bhagavad Gita story packs.
- No full journey runtime or full journey map UI.
- No audio playback pipeline.
- No content download system or paid locks.
