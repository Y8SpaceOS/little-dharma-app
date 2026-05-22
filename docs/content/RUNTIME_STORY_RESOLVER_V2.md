# PR #122: Runtime Story Resolver v2

## PR title and purpose
PR #122 introduces a local-first Runtime Story Resolver v2 bridge so runtime story lookup can prefer Content Registry / Content Model v2 when a story is truly eligible, while preserving the existing working Vrindavan runtime fallback.

## Roadmap alignment
- Approved roadmap sprint: Runtime Story Resolver v2.
- Renumbered delivery: PR #122 (originally planned as #119 before governance inserts #115-117).

## Why Runtime Story Resolver v2 is needed
The app now has content ingestion and registry layers, but runtime still needs a safe gate so non-runtime-ready imported or preview stories do not become routable by accident.

## Relationship to Content Model v2
Resolver v2 reads model-v2 shaped stories and maps them into a runtime-resolved shape with explicit eligibility metadata.

## Relationship to Content Registry Refactor
Resolver v2 consumes the registry as first-priority source for runtime-eligible stories.

## Relationship to Story Import Pipeline v1
Imported stories are not automatically runtime-safe; resolver v2 enforces eligibility checks before runtime resolution.

## Relationship to Editorial QA Validator v1
Editorial QA is part of eligibility. Any QA errors block registry runtime usage.

## Current runtime reality
Current route behavior remains Vrindavan-first in practical outcomes because resolver v2 falls back to legacy packets whenever registry stories are not eligible.

## Resolver source priority
1. Registry story by slug/id when runtime eligible.
2. Legacy Vrindavan packet by matching slug as fallback.
3. Null when neither source can resolve.

## Registry eligibility rules
Registry story must satisfy all:
- status is `runtime_ready` or `available`
- editorial QA has zero errors
- not a preview scaffold
- required runtime fields are present

## Editorial QA gating rules
Resolver v2 uses editorial QA validation output and blocks registry runtime resolution on errors.

## Legacy Vrindavan fallback rules
When registry exists but is not runtime-eligible, resolver v2 uses legacy Vrindavan by slug if available.

## Preview scaffold blocking rules
Preview scaffold content is explicitly blocked from runtime eligibility.

## Missing story behavior
Resolver v2 returns `null` for missing/unresolvable stories and does not throw.

## RuntimeResolvedStoryV2 shape
Resolver output includes source, identifiers, runtime content payload, and `eligibility` metadata so migration can be audited safely.

## Local-first/no-backend assumptions
Resolver v2 is synchronous, local-first, and does not use network, backend, auth, telemetry, or filesystem runtime access.

## What this PR changes
- Adds runtime resolver v2 types.
- Adds runtime resolver v2 service with eligibility gates and legacy fallback.
- Adds validator coverage for architecture and guardrails.
- Adds this PR documentation.

## What this PR does not do
- No new routes.
- No Story World browse rendering migration.
- No UI redesign.
- No backend/auth/payment/audio playback/mic/recording/analytics.
- No content-scale rollout.

## Migration safety rules
- Keep existing Vrindavan runtime behavior intact.
- Do not route preview/import scaffold stories.
- Preserve existing completion flow behavior.
- Keep resolver deterministic and synchronous.

## Follow-up recommendations for PR #123 and PR #124
- **PR #123: Story World Data-Driven Browse** — migrate browse data sources after resolver safety gates are proven stable.
- **PR #124: Journey Data Model v1** — formalize journey-level runtime model and completion mapping using resolver-v2 outputs.

## Final PR #122 readiness statement
PR #122 is architecturally ready when runtime/type/lint/test and validator gates pass, including explicit confirmation that preview scaffold stories remain blocked from runtime routing and legacy fallback remains intact.
