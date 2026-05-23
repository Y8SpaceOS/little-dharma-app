# PR #156: Bulk Content Import Pipeline v2

## PR title and purpose
PR #156 defines a read-only, contract-first pipeline for validating bulk story import inputs and producing dry-run reporting before any runtime promotion.

## Roadmap alignment
This sprint is recovery-aligned after PR #154 (Control Tower v1) and PR #155 (Story Experience Index Model v1), and prepares PR #159–170 bulk pack throughput.

## Why Bulk Content Import Pipeline follows Story Experience Index Model
The pipeline uses Story Experience Index category IDs and readiness semantics so import decisions map directly to index counters, category coverage, and journey coverage without mutating runtime data.

## Bulk Content Import Pipeline goal
Enable safe, consistent, measurable intake of 50–150 story experiences per PR with explicit readiness separation.

## What this pipeline is
A pure validation and dry-run modeling layer for pack input contracts, readiness candidates, issue reporting, and projected counter impact.

## What this pipeline is not
Not a runtime importer, not a promotion gate, not content publishing, not backend sync, not analytics tracking.

## Import pack input contract
`BulkContentImportPackInput` requires pack metadata, journey intent, age-band intent, import batch identity, PR identity, and stories array.

## Story input contract
`BulkContentImportStoryInput` captures index, QA, runtime, and audio-candidate metadata including category mapping and readiness intent.

## Panel input contract
`BulkContentImportStoryPanelInput` captures panel text and optional illustration/tone/sacred-care annotations.

## Parent note input contract
`BulkContentImportParentNoteInput` captures source context, parent value, and discussion prompt.

## Audio script input contract
`BulkContentImportAudioScriptInput` captures narration script, voice direction, pronunciation notes, pacing notes, and audio readiness intent.

## Category mapping rules
Primary category must be one of Story Experience Index v1 category IDs; secondary categories must follow the same taxonomy.

## Dharma Journey mapping rules
Journey mapping is optional for indexing, but when present is included in dry-run journey impact counts.

## Index candidate rules
Required: storyId, title, summary, sourceTradition, primaryCategoryId, ageBands, primaryValue, statusIntent. Panels may be empty only for `index_only`.

## QA-ready candidate rules
Requires all index fields plus at least 3 panels, parentNote, reflectionPrompt, secondaryValues, characters, and sacredRespectNotes for sacred-content stories.

## Runtime-ready candidate rules
Requires all QA-ready fields plus at least 4 panels, text on each panel, durationMinutes, parentNote.sourceContext, parentNote.discussionPrompt, and zero fail-level issues.

## Audio-script-ready candidate rules
Requires all runtime-ready fields plus narrationScript, voiceDirection, pronunciationNotes, and pacingNotes.

## Blocked story rules
Blocked on missing title/storyId/sourceTradition, duplicate storyId in pack, exact-age usage instead of age bands, Story Library child-facing wording, hard gamification wording, sacred trivialization wording, backend/tracking/sharing/notification wording, or readiness requests without required fields.

## Dry-run report structure
`BulkContentImportDryRunReport` includes modelVersion, importBatchId, packId, story counts by readiness class, validationIssues, counterImpact, categoryImpact, journeyImpact, readinessDecisions, sourceFiles, and limitations.

## Counter impact reporting
Counter deltas are reported as indexed/qa/runtime/audio/blocked and aligned with PR #207 targets (1000 indexed, 450 runtime-ready, 350 audio-ready scripts).

## Relationship to Story Experience Index Model v1
The pipeline enforces index-compatible category IDs and readiness semantics expected by PR #155 models.

## Relationship to Content Scale Recovery Control Tower v1
Dry-run counter impact supports PR #154 style recovery tracking and forecast updates.

## Relationship to Runtime Story Resolver v2
Pipeline does not bypass resolver gates; runtime-ready is only a candidate classification with no runtime mutation.

## Relationship to future PR #159–170 content packs
PR #159 onward should submit pack inputs through this pipeline, review dry-run failures, then submit corrected metadata before runtime/audio gate PRs.

## No backend/no tracking assumptions
No backend, auth, cloud sync, analytics, telemetry, or network/API implementation is included.

## No notifications/no sharing assumptions
No push/reminder/email/SMS/WhatsApp/social/share implementation is included.

## No AI personalization assumptions
No AI personalization logic is introduced.

## No reward/gamification assumptions
Gamification language is explicitly blocked by validation.

## Runtime behavior preservation rules
No Runtime Story Resolver v2 behavior changes and no runtime availability promotion are performed.

## Story completion behavior preservation rules
No story completion persistence or completion-service interactions are added.

## Journey progress behavior preservation rules
No journey progress persistence/service interactions are added.

## Story reader/audio preservation rules
No story reader behavior or audio playback behavior changes are included.

## What this PR changes
Adds pipeline types, read-only validation service, dry-run report generation, and a validator script for policy compliance.

## What this PR does not do
Does not add stories/content packs/routes, does not promote qa_ready to runtime, does not change resolver/journey/completion/audio behavior.

## Follow-up recommendations for PR #157 and PR #158
- PR #157: Runtime-Ready Story Gate v1
- PR #158: Audio-Ready Script Gate v1

## Final PR #156 readiness statement
PR #156 is ready when validator checks pass and dry-run contract enforcement is in place without runtime mutation.

## PR #207 target alignment
This pipeline directly supports PR #207 counter growth while preserving safety and readiness separation.
