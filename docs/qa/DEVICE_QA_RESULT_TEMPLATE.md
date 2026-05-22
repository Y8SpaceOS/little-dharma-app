# Device QA Result Template v0

## QA run date
- Date:

## App build / commit SHA
- Build identifier:
- Commit SHA:

## Tester
- Name:

## Device and OS
- Device model:
- OS version:

## Network condition
- Online / Offline / Intermittent:

## Fresh install or existing install
- Fresh install:
- Existing install:

## Storage reset status
- Cleared storage before run (yes/no):
- Notes:

## Regression command status
- `npm run typecheck`:
- `npm run lint`:
- `npm run test`:
- `node scripts/validate-route-integrity-v1.mjs`:
- `node scripts/validate-local-first-state-v1.mjs`:
- `node scripts/validate-local-state-runtime-hardening-v1.mjs`:
- `node scripts/validate-parent-surface-readiness-v1.mjs`:
- `node scripts/validate-story-runtime-hardening-v1.mjs`:
- `node scripts/validate-accessibility-touch-target-v1.mjs`:
- `node scripts/validate-offline-no-account-v1.mjs`:
- `node scripts/validate-release-candidate-gate-v0.mjs`:
- `node scripts/validate-device-qa-runbook-v0.mjs`:

## Route smoke result
- Pass / Fail:
- Notes:

## Child flow result
- Pass / Fail:
- Notes:

## Story runtime result
- Pass / Fail:
- Notes:

## Parent flow result
- Pass / Fail:
- Notes:

## Offline/no-account result
- Pass / Fail:
- Notes:

## Accessibility smoke result
- Pass / Fail:
- Notes:

## Cultural/trust copy result
- Pass / Fail:
- Notes:

## Issues found table
| Issue ID | Severity (P0/P1/P2/P3) | Reproduction steps | Expected result | Actual result | Screenshot/recording link | Owner | Status |
|---|---|---|---|---|---|---|---|
| QA-### |  |  |  |  |  |  |  |

## Final QA decision
- Decision (Proceed / Blocked / Proceed with documented P2/P3):
- Blocking issue IDs:
- Accepted warnings/backlog IDs:

## Sign-off notes
- Summary:
- Reviewer/approver:
- Timestamp:
