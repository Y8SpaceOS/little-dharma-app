# PR #117: Internal TestFlight Readiness Decision v0

## PR title and purpose
Document the readiness decision framework and current status for progressing the release candidate to internal TestFlight/internal QA after structured manual device QA execution.

## Decision status
**HOLD — pending manual device QA execution**.

## Automated gate status
Primary automated gates are passing in this PR execution context, including typecheck/lint/test and required governance validators.

## Manual device QA status
Pending manual device execution. No physical-device evidence has been logged yet.

## P0/P1 blocker status
Unknown until manual execution is completed and triaged.

## P2/P3 warning status
Unknown until manual execution is completed and triaged.

## Placeholder status
Placeholder auth/subscription flows remain expected placeholders and must stay clearly labeled as inactive/non-checkout.

## Scope guardrail status
In scope for PR #117: governance docs + validator only. Out of scope: runtime route/features/backend/payment/audio/microphone/analytics implementation.

## TestFlight/internal release decision
Do **not** sign off for internal TestFlight/internal QA release yet.

## Decision rationale
Automated checks alone do not establish real-device readiness. Manual matrix evidence across iPhone/Android/offline/no-account/fresh-install states is mandatory before sign-off.

## Conditions to proceed
- Manual device matrix executed with documented evidence links.
- P0/P1 issues either absent or resolved and verified.
- Any P2/P3 warnings documented with owner + disposition.
- Updated execution log and issue log reflect final truth state.

## Conditions that block release
- Manual execution still pending.
- Any open P0 issue.
- Any open P1 issue.
- Missing or unverifiable evidence for manual outcomes.

## Required next actions
1. Assign QA owner and schedule first complete matrix run.
2. Populate execution log with per-device outcomes and artifacts.
3. Populate issue log with triage status, owners, and decisions.
4. Re-evaluate readiness decision after manual evidence is in place.

## Sign-off owner
Pending assignment (QA lead + engineering owner + product owner).

## Final decision statement
**HOLD — pending manual device QA execution**. Not ready for TestFlight sign-off until manual device QA is executed and P0/P1 status is known.
