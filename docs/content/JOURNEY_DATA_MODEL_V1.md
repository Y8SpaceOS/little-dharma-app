# PR #124: Journey Data Model v1

## PR title and purpose
PR #124 introduces Journey Data Model v1 so Little Dharma can represent Dharma Journeys as structured, local-first, sequential metadata with story ordering and runtime readiness helpers.

## Roadmap alignment
The approved roadmap originally positioned Journey Data Model v1 at PR #121. Because PR #115–117 were release-readiness governance insertions, this work is now executed as PR #124.

## Why Journey Data Model v1 is needed
Current journey handling is split across legacy Story World scaffolds and the Vrindavan runtime path. Journey Data Model v1 creates one typed foundation for future journey packs without changing route behavior in this sprint.

## Relationship to Content Model v2
Content Model v2 defines canonical story and journey primitives. Journey Data Model v1 builds an explicit journey service layer for browse/detail metadata and runtime gating.

## Relationship to Content Registry Refactor
Content Registry remains the preferred source for structured journey/story IDs. Journey Data Model v1 maps registry journeys first and only falls back to Story World coming-soon scaffolds when needed.

## Relationship to Runtime Story Resolver v2
Journey story references use Runtime Story Resolver v2 eligibility to determine if each referenced story is runtime available.

## Relationship to Story World Data-Driven Browse
Story World Data-Driven Browse stays route/source-of-truth for current doorway output. Journey Data Model v1 adds read-only future helpers and does not alter visible doorway order.

## Current journey reality
- Vrindavan starter journey is the only runtime-eligible journey source today.
- Ramayana and other journey packs remain coming soon unless runtime-eligibility conditions are met.
- Legacy/fallback behavior is preserved.

## Journey model overview
Journey Data Model v1 defines:
- Controlled status lifecycle.
- Controlled journey taxonomy.
- Ordered story references with runtime flags.
- Milestone metadata.
- Browse cards and summary helpers.

## Journey status lifecycle
planned → indexed → qa_ready → runtime_ready → available, with coming_soon for non-runtime scaffolds.

## Journey type taxonomy
epic, deity_stories, values_path, festival_path, shloka_path, bedtime_path, mixed_story_path.

## Story reference rules
- Story refs are ordered and required by default.
- Runtime availability is resolved per story via resolver v2.
- Missing or scaffold-like stories are represented but blocked from runtime-ready status.

## Runtime availability rules
A journey is runtime available only when:
1. status is runtime_ready or available,
2. it has at least one story ref,
3. all required story refs are runtime available,
4. it is not preview/import scaffolded.

## Coming-soon journey rules
Coming-soon journeys remain visible as browse metadata cards but do not become runtime-open routes.

## Preview scaffold blocking rules
Journeys or story refs that indicate preview/import scaffolds remain blocked from runtime availability.

## Milestone model
Milestones are lightweight blessings checkpoints tied to story order and visual motifs (for example diya/flower) without hard gamification.

## Parent trust and sacred respect notes
Journey metadata includes parent trust and sacred respect notes, reinforcing local-first behavior and culturally respectful framing.

## Local-first/no-backend assumptions
All helpers are synchronous and local. No backend/auth/payment/networking/audio/mic/recording implementations are introduced.

## What this PR changes
- Adds Journey Data Model v1 type definitions.
- Adds dharmaJourneyService mapping/summary/browse helpers.
- Adds validator for Journey Data Model v1 guardrails.
- Adds script entry for the new validator.

## What this PR does not do
- No new routes.
- No journey UI redesign.
- No journey detail page implementation.
- No story completion behavior change.
- No Ramayana Journey Pack 1 content insertion.

## Migration safety rules
- Keep Content Registry as preferred structured source.
- Preserve Story World doorway order and route behavior.
- Keep coming-soon entries non-routable in runtime.
- Preserve Vrindavan fallback behavior.

## Follow-up recommendations for PR #125 and PR #126
- PR #125: Ramayana Journey Pack 1.
- PR #126: Krishna Childhood Pack 1.

## Final PR #124 readiness statement
Journey Data Model v1 is implemented as a safe local-first foundation and is ready for follow-up content-pack integration once validation gates pass.
