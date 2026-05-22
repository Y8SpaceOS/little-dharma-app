# PR #118: Content Model v2

## PR title and purpose
PR #118: Content Model v2 defines the canonical typed content contracts for Story World scale-up readiness without changing runtime routes, UI, or backend scope.

## Why Content Model v2 exists
The app now needs stable, explicit contracts for stories, journeys, packs, variants, parent notes, audio metadata placeholders, sacred guardrails, and future import planning.

## Current content reality
Current runtime uses local-first TypeScript seed packets and story world list items. This sprint formalizes contracts around that reality.

## Relationship to existing 21 Vrindavan stories
The 21 Vrindavan packets remain the current content backbone. v2 introduces mapping readiness so each packet can be adapted into canonical `Story` shape without replacing active resolvers in this PR.

## Story model
Includes identity, taxonomy, age guidance, panels, parent notes, ritual/reflection prompts, sacred metadata, illustration metadata, and status lifecycle.

## StoryPanel model
Panel contract includes id/title/text and optional image, narration, interaction, and sacred note fields.

## StoryVariant model
Variant contract supports age-specific reading and panel alternatives with independent status.

## StoryPack model
Pack contract organizes stories into child-facing and editorial categories with safety and sacred notes.

## DharmaJourney model
Journey contract defines ordered story IDs, age bands, completion estimates, and journey type.

## JourneyProgress model
Progress contract tracks local completion state via current/last/completed IDs, timestamp, and percentage.

## AudioMetadata model
Audio metadata is model-ready only: availability, voice options, script status, preferred voice style, pacing, and explicit `noMicRequired`.

## IllustrationPrompt model
Illustration prompt model carries scene summary, style direction, cultural guardrails, deity treatment, and avoid list.

## ParentNote model
Parent note model standardizes source context, value explanation, discussion prompt, practice prompt, and caution note.

## SacredRespectLevel model
Controlled values: `general`, `sacred_story`, `deity_focal`, `shloka_or_prayer`, `ritual_context`.

## ContentStatus lifecycle
`draft` -> `indexed` -> `qa_ready` -> `runtime_ready` -> `available` with optional `coming_soon` and `archived` branches.

## AgeBand rules
Canonical v2 age bands are `3-5`, `6-8`, `9-12`, and `family`.

## StoryWorldCategory rules
Canonical categories are: `krishna`, `ganesha`, `ramayana`, `hanuman`, `bedtime`, `values`, `festivals`, `mahabharata`, `bhagavad_gita`, `panchatantra`, `saints`, `shlokas`.

## Sacred/cultural respect guardrails
Use reverent framing, avoid caricature, preserve context around prayers/rituals, and keep child-facing wording gentle and truthful.

## Luvlu usage boundaries in content
Luvlu remains a subtle helper/narrator only. Luvlu is never a logo/deity/token/badge/reward mechanic or random decorative mascot.

## Parent trust requirements
Content remains privacy-safe, local-first, age-aware, and non-manipulative, with clear parent note context and no telemetry expansion.

## Local-first/no-backend assumptions
No backend/auth/cloud sync/payment/audio playback/microphone/recording pipelines are implemented in this PR.

## Migration plan for existing content
1. Keep current runtime packets untouched.
2. Map packets via adapters to v2 for coverage reporting.
3. Expand to full story pack import in PR #119 onward.
4. Adopt v2-native authoring once QA confirms parity.

## What this PR does not do
No new routes, no prototype route activation, no UI redesign, no networked features, no story pack mass expansion, no runtime browse refactor.

## Follow-up recommendations for PR #119 and PR #120
- PR #119: Content Registry Refactor.
- PR #120: Story Import Pipeline v1.

## Final PR #118 readiness statement
Content Model v2 contracts, documentation, adapter scaffolding, and validator gates are in place for architecture readiness while preserving existing runtime behavior.
