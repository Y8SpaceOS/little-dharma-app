# PR #119: Content Registry Refactor

## PR title and purpose
**PR #119: Content Registry Refactor** introduces a canonical local-first content registry that maps existing Vrindavan packets into Content Model v2 story entities and publishes deterministic registry exports for stories, packs, journeys, and lookup helpers.

## Roadmap alignment
- Approved roadmap sprint: Content Registry Refactor (originally PR #116).
- Adjusted release sequence: now executed as **PR #119** after release-readiness governance sprints PR #115–117.
- This PR intentionally does **not** continue QA-governance expansion.

## Why a content registry is needed
- Existing content exists across runtime packet seeds, Story World preview data, and journey resolution paths.
- A canonical registry reduces drift by defining one typed source of truth for ids/slugs and seed-backed mappings.
- Registry-first architecture prepares safe migration of Story World previews and runtime resolution without changing current app behavior.

## Relationship to Content Model v2
- Registry entries are typed with Content Model v2 `Story`, `StoryPack`, and `DharmaJourney`.
- Vrindavan packet-to-story mapping reuses `mapVrindavanPacketToStoryModelV2` from existing adapters.

## Current content reality
- Active runtime path remains `src/services/journeys.ts` + `src/data/seed/vrindavan.ts`.
- Current local seed includes the existing **21 Vrindavan story packets**.
- Story World currently mixes available stories and coming-soon preview cards.

## What becomes registry-backed in this PR
- Canonical `Story[]` mapping from Vrindavan packets.
- Registry-level `StoryPack[]` with at least one starter pack.
- Registry-level `DharmaJourney[]` with the starter path.
- Deterministic lookup maps by `id` and `slug` plus summary coverage helper.
- Read-only compatibility service previews for story/pack/journey metadata.

## What remains runtime-backed by existing resolver
- Active story runtime resolution still uses the existing journey resolver (`getRuntimeStoryBySlug`, `getStoryJourneyBySlug`).
- No route switching to registry resolver in this PR.
- No Story World UI data-source migration in this PR.

## Registry exports
- `contentRegistryVersion`
- `contentRegistryStories`
- `contentRegistryStoriesById`
- `contentRegistryStoriesBySlug`
- `contentRegistryStoryPacks`
- `contentRegistryStoryPacksById`
- `contentRegistryJourneys`
- `contentRegistryJourneysById`
- `getContentRegistryStoryBySlug(slug)`
- `getContentRegistryStoryById(id)`
- `getContentRegistryPackById(id)`
- `getContentRegistryJourneyById(id)`
- `getContentRegistryCoverageSummary()`

## Story registry design
- Seed source: `vrindavanStoryPackets`.
- Mapping function: `mapVrindavanPacketToStoryModelV2(packet, index)`.
- Deterministic story id scheme: `toContentModelStoryId(slug)`.
- Story lookup maps are computed once and exported as plain local objects.

## StoryPack registry design
- Includes `vrindavan-story-pack-v1` as starter canonical pack.
- Pack references all registered story ids from current Vrindavan seed.
- Pack scope remains local-first and runtime-safe (no network dependencies).

## DharmaJourney registry design
- Includes `vrindavan-starter-path` as starter canonical journey.
- Journey references ordered story ids from the same registry story list.
- Journey status and duration are modeled for preview/readiness, not runtime replacement yet.

## Slug vs ID rules
- `slug` is route/runtime compatibility key for existing story lookup paths.
- `id` is canonical model key for registry-level integrity and pack/journey relationships.
- Registry enforces both maps (`BySlug`, `ById`) to support migration without route changes.

## Local-first assumptions
- Registry is generated entirely from local source files at build/runtime.
- No backend, auth, cloud sync, or remote import is required.
- All lookup helpers are synchronous and deterministic.

## No-backend/no-import assumptions
- No Story Import Pipeline logic in this PR.
- No editorial ingestion/approval workflow introduced in this PR.
- No remote content fetching and no network transport dependency.

## Migration safety rules
- Existing runtime resolver remains intact and unchanged.
- No new app routes or prototype route files are introduced.
- Registry service helpers are read-only compatibility previews.
- UI behavior should remain materially unchanged.

## Existing 21 Vrindavan mapping
- All existing 21 Vrindavan packets are mapped into Content Model v2 stories through adapter reuse.
- Coverage helper reports missing ids (if any) and coverage status.

## Known limitations
- Registry currently covers only existing Vrindavan seed packets.
- Story World coming-soon cards are not yet fully re-authored as canonical model entities.
- Runtime resolver still points to legacy packet path by design for this sprint.

## What this PR does not do
- No Story Import Pipeline implementation.
- No Editorial QA Validator implementation.
- No UI redesign or data-driven Story World runtime rendering migration.
- No backend/auth/payment/audio/microphone/recording/analytics implementation.
- No content scale expansion beyond current mapped Vrindavan seed.

## Follow-up recommendations for PR #120 and PR #121
- **PR #120: Story Import Pipeline v1**
  - Add deterministic import scaffolding from approved source manifests into registry-ready v2 entities.
  - Keep local-first guardrails and no-network default for developer/test workflows.
- **PR #121: Editorial QA Validator v1**
  - Add editorial validation for sacred framing, metadata completeness, and child-safe language constraints.
  - Validate imported stories/packs/journeys before runtime eligibility.

## Final PR #119 readiness statement
PR #119 establishes a canonical Content Registry layer aligned to Content Model v2 while preserving current runtime behavior and route integrity. It is ready to support migration work planned in PR #120 and PR #121.
