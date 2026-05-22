# PR #120: Story Import Pipeline v1

## PR title and purpose
**PR #120: Story Import Pipeline v1** defines a repeatable, local-first import manifest format and conversion/validation helpers for safe future content expansion into Content Model v2 and Content Registry without route edits.

## Roadmap alignment
- Original roadmap slot: Story Import Pipeline v1 at PR #117.
- Adjusted sequence after governance inserts PR #115–117: this sprint is now **PR #120**.
- Scope intentionally avoids QA-governance expansion unless explicitly approved.

## Why the import pipeline is needed
The app needs a deterministic local-file architecture for adding future packs/journeys/stories safely and consistently, while preserving current runtime behavior and route integrity.

## Relationship to Content Model v2
Import drafts mirror Content Model v2 structure and convert directly into `Story`, `StoryPack`, and `DharmaJourney` compatible entities.

## Relationship to Content Registry Refactor
This pipeline prepares registry-candidate content inputs and validation scaffolding, without replacing current registry behavior in this PR.

## Current content reality
Runtime still depends on current local Vrindavan seed and resolver flows. This sprint adds import architecture scaffolding only.

## Import manifest design
`ContentImportManifest` includes identity, scope metadata, import mode, one pack draft, story drafts, journey drafts, local timestamps, and notes.

## ImportedStoryDraft design
`ImportedStoryDraft` captures full story-level editorial structure: ids/slugs, child-facing summary, cultural/source context, value metadata, panels, parent notes, prompts, sacred guardrails, illustration metadata, audio placeholders, and status.

## ImportedStoryPackDraft design
`ImportedStoryPackDraft` captures pack identity, child-facing title, category, age guidance, story references, and safety/sacred notes.

## ImportedDharmaJourneyDraft design
`ImportedDharmaJourneyDraft` captures journey metadata, story references, age guidance, estimated duration, status, and journey type.

## Validation result design
`ContentImportValidationResult` reports pass/fail plus errors/warnings and counts for stories, packs, journeys, and status-readiness (`indexed`, `qa_ready`, runtime-ready).

## Local-first assumptions
All pipeline helpers are synchronous and local-file based. No network calls, backend dependencies, or remote import paths are introduced.

## No-backend/no-remote-import assumptions
No backend/auth/cloud sync/payment/audio playback/microphone/recording/analytics/telemetry implementation is introduced in this PR.

## Status lifecycle rules
Draft imports should normally enter as `indexed` or `qa_ready`. `runtime_ready` / `available` require explicit validation and runtime backing.

## Runtime eligibility rules
Imported stories are not runtime-resolved by default. Runtime eligibility requires explicit readiness status and future resolver integration work.

## Sacred/cultural respect guardrails
Validation flags hard gamification language and enforces gentle child-facing phrasing while preserving sacred framing boundaries.

## Luvlu usage boundaries
Luvlu is treated only as a subtle helper/narrator reference; not logo, deity, badge, token, or reward mechanic.

## Parent trust requirements
Imported drafts must include parent notes, child-safe framing, local-first safety posture, and no manipulative progress design.

## Example manifest notes
`vrindavanPreviewImportManifest` is explicitly a local preview/import scaffold and contains only three lightweight draft stories.

## What this PR does not do
- Does not add routes or prototype-only runtime screens.
- Does not replace story resolver or Story World rendering.
- Does not mass-add content packs.
- Does not introduce remote imports or backend features.
- Does not implement Editorial QA Validator (reserved for PR #121).

## Follow-up recommendations for PR #121 and PR #122
- **PR #121: Editorial QA Validator v1**
- **PR #122: Runtime Story Resolver v2**

## Final PR #120 readiness statement
PR #120 establishes typed local import manifest architecture, preview data scaffolding, conversion helpers, and validator coverage while preserving current runtime behavior.
