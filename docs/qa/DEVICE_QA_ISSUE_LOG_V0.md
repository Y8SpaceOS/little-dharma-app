# Device QA Issue Log v0

## Purpose
Capture reproducible manual device QA findings from the PR #117 execution matrix in a single severity-governed issue ledger that supports release decisions.

## Issue ID format
`DQA-YYYYMMDD-###` (example: `DQA-20260522-001`).

## Severity scale
- **P0 blocker:** Release-blocking crash, broken core flow, or trust/safety violation.
- **P1 blocker:** Major functional defect in key child/parent flow; release blocked until resolved.
- **P2 warning:** Non-blocking usability/copy/layout problem requiring follow-up.
- **P3 backlog:** Nice-to-have polish or lower-priority backlog item.

## Status values
- New
- Triaged
- In Progress
- Fixed
- Verified
- Deferred
- Accepted Risk

## Owner field
Each issue must include a named owner (engineering, QA, design, or product).

## Device field
Each issue must include device model and OS version where observed.

## Route/surface field
Each issue must identify the route/surface impacted (child flow, Story World, story reader, treasures, parent surfaces, etc.).

## Reproduction steps field
Each issue must include clear, repeatable steps.

## Expected result field
Each issue must define expected behavior.

## Actual result field
Each issue must define observed behavior.

## Evidence link field
Each issue must include screenshot/video/log artifact links when available.

## Decision field
Each issue must include decision/next action (fix now, defer, accepted risk, etc.).

## Issue table
| Issue ID | Severity | Status | Owner | Device / OS | Network condition | Install state | Route / surface | Reproduction steps | Expected result | Actual result | Evidence link | Decision / next action |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| EXAMPLE-DO-NOT-COUNT | P2 | Example | QA Owner (Example) | Example Device / OS | Offline | Fresh install | Story World (example) | 1) Open app 2) Navigate to Story World | Story cards should be tappable | Example only — replace with real finding | example-link | Example only — remove when real issues are logged |

## Current P0/P1/P2/P3 summary
- P0: No logged issues yet.
- P1: No logged issues yet.
- P2: No logged issues yet (example row does not count).
- P3: No logged issues yet.
- Manual issue discovery status: Pending manual device execution.

## Sign-off impact summary
Until real matrix execution populates this log with validated outcomes, sign-off remains blocked for internal TestFlight/internal QA readiness.