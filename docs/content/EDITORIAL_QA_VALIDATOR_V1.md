# PR #121: Editorial QA Validator v1

## PR title and purpose
Introduce Editorial QA Validator v1 for local imported content quality and runtime-readiness gating.

## Roadmap alignment
Originally planned as PR #118, now executed as PR #121 after inserted PR #115–117 release-readiness governance sprints.

## Why editorial QA is needed
Imported/local content must pass structured editorial checks for child safety, sacred respect, parent trust, and runtime eligibility readiness before runtime resolver integration.

## Relationship to Content Model v2
Builds directly on Content Model v2 fields (age bands, sacred respect, parent note, illustration, audio metadata, status).

## Relationship to Story Import Pipeline v1
Runs on local import manifest/story drafts; no network, no backend, no resolver migration.

## Current content reality
Current entries include preview scaffold/import candidates; indexed and qa_ready can pass editorial validation while still blocked from runtime approval.

## Editorial QA policy
Default policy enforces panel length/count limits, age bands, required parent fields, blocked child-facing/gamification terms, sacred-required fields, and runtime-eligible statuses.

## Finding severity rules
- **error**: blocks editorial validity and runtime approval.
- **warning**: quality concern; should be improved before broad rollout.
- **info**: non-blocking note (e.g., status not runtime-eligible yet).

## Editorial QA categories
structure, age_band, sacred_respect, parent_trust, values_metadata, panel_quality, child_language, runtime_eligibility, luvlu_boundary, audio_metadata, illustration_guardrail.

## Structure checks
Required id/slug/title/shortTitle/summary/storyPackId/status/panels/parentNote/illustrationPrompt/audioMetadata.

## Age-band checks
At least one age band; recommended age band alignment; warnings for duration under 2 or over 20 minutes.

## Sacred/cultural respect checks
Require sacredRespectLevel; stricter caution/guardrails for sacred contexts; no comedic deity treatment for deity focal stories; no mascot/Luvlu chatter for shloka_or_prayer.

## Parent trust checks
Require sourceContext, valueExplained, discussionPrompt, practicePrompt, cautionNote; block manipulative language.

## Values metadata checks
Require primaryValue, secondaryValues array, and characters array.

## Panel quality checks
Panel count in policy bounds; panel id/title/text required; short/long text warnings/errors; block hard gamification terms and “Story Library”; warn on intense/violent phrasing.

## Child language checks
Prefer warm/simple language; block hard gamification and “Story Library”; warn on shame/comparison language.

## Runtime eligibility checks
Only runtime_ready/available can be runtime-approved; indexed/qa_ready can pass QA but remain not runtime approved; preview scaffold must not be runtime approved.

## Luvlu boundary checks
Luvlu cannot be treated as deity/logo/reward/badge/token; exclude Luvlu from deity focal and shloka/prayer panel text.

## Audio metadata checks
audioMetadata.noMicRequired must be true; audioAvailable false is acceptable; narrationScriptStatus required.

## Illustration guardrail checks
Require sceneSummary/styleGuidance/culturalGuardrails/deityTreatment; avoidList should include anti-gamification and anti-cartoonish deity-treatment guardrails.

## Preview scaffold rules
Preview/import scaffold entries remain local validation artifacts and should not be marked runtime ready unless fully runtime-backed and editorially approved.

## Local-first/no-backend assumptions
All checks are local-file-based and run with Node.js fs/path validators; no remote calls or backend dependencies.

## What this PR does not do
No route additions, no prototype screen routing, no Story World rendering migration, no runtime resolver replacement, no backend/auth/payment/audio playback/mic/recording/analytics implementation, and no mass content expansion.

## Follow-up recommendations for PR #122 and PR #123
- **PR #122: Runtime Story Resolver v2** — integrate editorial QA outputs into runtime selection eligibility.
- **PR #123: Story World Data-Driven Browse** — consume approved content metadata for Story World browsing.

## Final PR #121 readiness statement
PR #121 is ready once primary type/lint/test and validator gates pass, with any legacy visual scope-guard failures documented without weakening editorial QA requirements.
