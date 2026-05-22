# PR #116: Device QA Runbook + Internal TestFlight Readiness v0

## PR title and purpose
This runbook defines the first manual device QA workflow for Little Dharma release-candidate validation on real iPhone and Android devices. It standardizes manual smoke coverage, severity classification, blocker handling, and release decisions before internal TestFlight/internal distribution.

## QA objective
Ensure current release-candidate behavior is stable, child-safe, parent-trustworthy, local-first, and route-correct across representative devices and network conditions without introducing runtime scope creep.

## Device matrix
Minimum required matrix:
- iPhone small screen (for example iPhone SE class)
- iPhone large screen (for example iPhone 14/15 Pro Max class)
- Android small/medium screen
- Android large screen
- Low-end/performance-sensitive Android device if available
- At least one offline/no-network pass (airplane mode or disabled network)
- At least one fresh install / cleared storage pass

For each matrix row, capture:
- Device model and OS version
- Fresh install vs existing install
- Storage reset performed (yes/no)
- Network mode (online/offline/intermittent)
- Final QA decision and issue list

## Build assumptions
- Candidate build reflects merged work through PR #115 plus PR #116 docs/validator only.
- Existing app routes are engineering source of truth.
- Prototype screens (including Screens 424-487) are not runtime routes.
- Placeholder auth/subscription/audio/content-depth states can exist only when clearly labeled as inactive.

## Pre-QA setup
- Confirm branch/commit under test.
- Install build on test devices.
- Prepare issue logging destination and screenshot folder.
- Confirm required validators run locally before manual pass starts.

## Reset/local storage setup
- Run one pass with fresh install or cleared app storage.
- Run one pass with existing local state preserved.
- Verify no account requirement appears during either pass.

## iPhone QA checklist
- App launches without crash.
- Core child and parent routes open and return safely.
- Touch targets remain usable on small and large iPhone layouts.
- Story World navigation, story reading, and completion remain functional.

## Android QA checklist
- App launches without crash.
- Core child and parent routes open and return safely.
- Layout and touch targets remain usable on small/medium and large Android layouts.
- Low-end Android (if available) remains responsive enough for core flow completion.

## Offline/no-network checklist
- Enable airplane mode or disable all network.
- Confirm child flow and parent read-only/trust surfaces still load.
- Confirm no blocking remote-call errors interrupt core usage.

## No-account checklist
- Confirm no forced sign-in to access core child flow.
- Confirm auth surfaces, if visited, are clearly placeholder/inactive when applicable.
- Confirm privacy language remains no-account/local-first aligned.

## Child flow checklist
- Home/entry to child space is reachable.
- Child can reach Story World.
- Child can enter a story, complete, and exit safely.
- Child can reach Treasures and return.

## Story World checklist
- Story World label is used (not Story Library) in child-facing contexts.
- Story cards/navigation function without dead taps.
- Return/back paths are clear and functional.

## Story detail/reader/completion checklist
- Story detail opens from Story World.
- Reader content can be advanced/read without crash.
- Completion state and exit/navigation links work.

## Treasures checklist
- Treasures route opens from child flow.
- Treasures UI is readable and navigable.
- Return path to child flow is available.

## Parent flow checklist
- Parent gate/dashboard/controls/privacy/feedback/subscription/profile routes open as expected.
- Parent surfaces do not imply active backend or live purchases.
- Parent navigation fallback paths are present.

## Parent feedback local draft checklist
- Feedback entry remains local draft oriented.
- No backend submission requirement appears.
- Draft-related copy remains truthful.

## Privacy/trust copy checklist
- Copy aligns with local-first/no-account/no-cloud expectations.
- No misleading claims about active cloud sync/auth/payment.
- Parent trust language remains clear and not materially misleading.

## Auth/subscription placeholder checklist
- Auth screens are clearly labeled placeholder/inactive (if present).
- Subscription/checkout remains placeholder with no active purchase flow.
- Placeholder limitations are understandable to parent users.

## Accessibility smoke checklist
- Primary controls are reachable with adequate touch area.
- Basic focus/navigation order remains usable.
- No critical navigation path is blocked by accessibility defects.

## Cultural/sacred respect smoke checklist
- Sacred content presentation remains respectful and non-trivializing.
- No hard gamification terms (XP/coins/streaks/leaderboards/rankings) are introduced in child experience.
- Brand mark and symbolism treatment stays consistent with current guardrails.

## Luvlu usage smoke checklist
- Luvlu appears as subtle helper/narrator only.
- Luvlu is not presented as logo/deity/badge/token/reward mechanic.
- Luvlu is not used as random decorative clutter.

## Regression command checklist
Run and record status for:
- `npm run typecheck`
- `npm run lint`
- `npm run test`
- `node scripts/validate-route-integrity-v1.mjs`
- `node scripts/validate-local-first-state-v1.mjs`
- `node scripts/validate-local-state-runtime-hardening-v1.mjs`
- `node scripts/validate-parent-surface-readiness-v1.mjs`
- `node scripts/validate-story-runtime-hardening-v1.mjs`
- `node scripts/validate-accessibility-touch-target-v1.mjs`
- `node scripts/validate-offline-no-account-v1.mjs`
- `node scripts/validate-release-candidate-gate-v0.mjs`
- `node scripts/validate-device-qa-runbook-v0.mjs`

## Issue severity definitions
- **P0 blocker:** app cannot launch, core route crash, child cannot reach Story World, story reader/completion unusable, parent trust copy materially misleading, or active auth/payment/mic/network requirement appears.
- **P1 blocker:** major flow broken but app launches, fallback navigation missing, completion/progress broken, parent feedback local draft broken, or accessibility issue prevents navigation.
- **P2 warning:** copy issue, minor layout issue, small touch target issue, non-critical placeholder confusion, manual polish item.
- **P3 backlog:** future polish, content depth, animation, audio, broader visual enhancement.

## Blocker criteria
- Any open P0 blocks release.
- Any open P1 blocks release.
- Reproducible crash in core route path is blocker regardless of frequency.

## Warning criteria
- P2/P3 issues are non-blocking only when documented with owner and follow-up plan.
- Placeholder gaps remain warnings only if clearly labeled and non-deceptive.

## QA result template
Use `docs/qa/DEVICE_QA_RESULT_TEMPLATE.md` for each device/session run. Do not invent alternate report structures for PR #116.

## Screenshots/recording capture guidance
- Capture at least one screenshot per failed issue.
- Capture short recording for navigation or crash repro when possible.
- Name files with date, device, route, and issue id.
- Link artifacts in QA result template issue table.

## Release decision rules
- Internal QA can proceed if all automated gates pass and no P0/P1 manual blockers remain.
- TestFlight/internal release should not proceed if any P0/P1 remains unresolved.
- P2/P3 can proceed only if documented and accepted.
- Placeholder auth/subscription/audio/content depth are WARN, not blockers, if clearly labeled.

## Follow-up recommendations for PR #117 and PR #118
- PR #117: execute full device matrix runs using this template and open remediation tickets for all P0/P1/P2 findings.
- PR #118: close validated blockers/warnings, re-run primary gates, and publish updated readiness decision log.

## Final PR #116 readiness statement
PR #116 readiness is achieved when this runbook, result template, and validator pass together and confirm no runtime scope expansion beyond manual QA governance artifacts.
