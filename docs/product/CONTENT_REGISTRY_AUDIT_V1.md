# Content Registry Audit v1

## What this audit validates

`validate:content-registry-counters-v1` computes exact counters from canonical registry exports and enforces integrity gates:

- No duplicate story, story-pack, or journey IDs.
- No missing `storyPackId` references.
- No missing `journeyId` references.
- No non-canonical `primaryCategoryId` values.
- No accidental `runtime_ready` / `available` story promotion.
- No sacred-content pack introducing runtime audio files, TTS, microphone, voice recording, chanting mode, or pronunciation scoring behavior fields.

## How counters are computed

The script reads `contentRegistryStories`, `contentRegistryStoryPacks`, and `contentRegistryJourneys` and computes:

- Exact totals for stories, packs, journeys.
- Story breakdowns by `primaryCategoryId`, `status`, `readinessStatus`, `audioStatus`.
- Gate-relevant totals (`qa_ready`, `runtime_ready`, `audio_script_ready`, `published_local`).
- Journey linkage coverage and no-journey counts.
- Duplicate ID lists and orphan/missing relationship checks.
- Coverage-summary pack mention signal from `getContentRegistryCoverageSummary()`.

## Canonical files

- Canonical registry root: `src/data/contentRegistry.ts`
- Pack registries and expansion pack data under `src/data/*Registry.ts` and `src/data/*ExpansionPackV1.ts`
- Category ID canon used by this audit: `src/types/storyExperienceIndex.ts`

## How future content packs should update counters

1. Add the stories to `contentRegistryStories` (through pack exports).
2. Register exactly one canonical story pack in `contentRegistryStoryPacks`.
3. Register all canonical journeys used by the stories in `contentRegistryJourneys`.
4. Keep `primaryCategoryId` aligned with `StoryExperienceCategoryId`.
5. Run `npm run validate:content-registry-counters-v1` before merge.

## Why approximate counters should be avoided

Approximate counts drift after repeated expansion-pack merges and hide registry integrity regressions (missing journey links, duplicate IDs, or category drift). After this PR, exact audited counters are required for product-status reporting and PR #207 progress tracking.


## Current normalization note

- PR #174 normalized 21 Vrindavan legacy registry stories with explicit `primaryCategoryId`, `readinessStatus`, `audioStatus`, and `journeyStatus` metadata using conservative defaults (`krishna_stories`, `metadata_only`, `script_needed`).
- PR #175 normalized the remaining 15 category-missing registry stories (Ramayana Pack 1, Krishna Childhood Pack 1, Ganesha Wisdom Pack 1) with conservative canonical `primaryCategoryId` mapping and safe defaults `readinessStatus: metadata_only` + `audioStatus: script_needed`.
- Integrity gates remain unchanged: no runtime-ready promotion and no new audio assets.
