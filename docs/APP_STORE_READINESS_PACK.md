# App Store Readiness Pack (Sprint 59)

## Sprint objective
Prepare a non-code App Store Readiness Pack for private beta release-candidate decisioning without changing runtime behavior.

## Current release-readiness status
- Status: documentation readiness in progress; submission readiness is **not approved yet**.
- This pack supports private beta review and go/no-go discussion.
- This pack is **not App Store approval** and is not a submission record.

## What this sprint does
- Creates review artifacts: metadata draft, readiness checklist, screenshot capture plan, known-risk ledger, and validation script.
- Consolidates parent trust, child safety, privacy, local-first, and no runtime analytics posture statements.

## What this sprint does not do
- No App Store submission.
- No App Store Connect credential setup.
- No runtime feature changes, no story/content schema changes, no backend/auth/cloud sync, no telemetry/analytics SDK changes.

## App identity draft
- Working app name: Little Dharma.
- Identity: parent-guided spiritual storytelling with gentle daily rituals.

## App positioning draft
- A private family app for story, reflection, and values practice.
- Child journey is local-first and parent-guided.

## Parent-facing value proposition
- Calm, short spiritual story moments families can repeat daily.
- Parent dashboard and trust surfaces help families discuss values without public sharing.

## Age/TG positioning assumptions
- Family/parent-guided use with child participation.
- Final age labeling requires owner review and App Store policy alignment.

## App category assumptions
- Primary: Education.
- Secondary consideration: Lifestyle.
- Final category is pending owner decision.

## Privacy posture summary
- Current architecture is local-first with no backend account system in this pack scope.
- Privacy language is conservative and must remain consistent with in-app behavior.

## Child safety posture summary
- No open community-sharing surfaces.
- No child-facing ads.
- No ranking mechanics.
- Parent-managed trust and feedback surfaces remain parent-only routes.

## Data collection / no-backend / local-first statement
- Current private beta posture: no backend/cloud sync in this release-readiness scope.
- Story progress and parent feedback capture are local-first app behaviors.

## Analytics posture summary (Sprint 58 baseline)
- No runtime analytics SDK/instrumentation is active as of Sprint 58.
- Analytics documentation exists as a future privacy-safe spec only.
- Current claim language: no runtime analytics.

## Support/contact workflow
1. Parent opens support link or contact email listed in metadata.
2. Parent provides app version, device, and issue summary.
3. Team triages into: blocker, major, minor, question.
4. Team responds with acknowledgement + expected next action.
5. If issue affects trust/safety/privacy claims, update known-risk ledger and go/no-go gate.

## Feedback handling workflow (Sprint 57 baseline)
1. Parent uses Parent Feedback Capture route.
2. Feedback is saved locally on device.
3. During private beta QA sessions, parent can share feedback content manually with support.
4. Team maps feedback to known-risk and readiness checklist items.

## Screenshot capture plan
- See `docs/content/app-store-screenshot-plan.csv`.
- Capture set includes onboarding/welcome, child journey highlights, and parent trust surfaces.
- Manual iPhone capture evidence is required before submission decision.

## Manual iPhone QA evidence requirements
- Full route regression evidence for child + parent surfaces.
- Screenshot proof tied to checklist rows.
- Manual verification of trust/privacy copy, no prohibited claims, and stable navigation.

## App Store metadata draft
- See `docs/content/app-store-metadata-draft.csv`.
- Metadata remains draft and requires owner input before any submission action.

## Known-risk ledger
- See `docs/content/app-store-known-risk-ledger.csv`.
- Includes open items for URLs, manual QA evidence, and review unknowns.

## Pre-submission checklist
- See `docs/content/app-store-readiness-checklist.csv`.
- All `requiredBefore=submit_for_review` rows must be done or explicitly accepted with owner sign-off.

## Go/no-go readiness gate
Go only if all of the following are true:
- Manual iPhone QA evidence complete.
- Support/contact and privacy policy URLs finalized.
- Metadata approved by owner.
- No high-severity open blocker in known-risk ledger.
- Claim language review passed for parent trust, child safety, and privacy.

No-go if any of the above is missing.

## Claims that are allowed
- Parent-guided spiritual storytelling.
- Gentle daily ritual and reflection practice.
- Private local-first child journey.
- No open community-sharing surface.
- No child-facing ads.
- No runtime analytics.
- Parent feedback saved locally.

## Claims that are not allowed
- Any medical or therapeutic claim.
- Any guaranteed outcomes for behavior, learning, or spirituality.
- Any statement that implies certification/compliance approval status.
- Any claim that cloud sync, production analytics, or crash-reporting platforms are active.

## Open items before submission
- Final support URL.
- Final privacy policy URL.
- Final owner-approved metadata text.
- Completed screenshot evidence set.
- Completed manual iPhone QA evidence package.

## Limitations / what is not claimed
- This sprint does not claim legal approval or platform approval.
- This sprint does not claim final release sign-off.
- This sprint does not replace Sprint 60 private beta gate execution.

## Final QA status
- Documentation and validator artifacts prepared in Sprint 59.
- Manual iPhone QA evidence remains required.
- Sprint 60 remains the next active release-candidate gate sprint.

## Keywords for validator traceability
private beta · parent trust · child safety · privacy · local-first · no runtime analytics · support/contact · screenshot capture plan · known-risk ledger · manual iPhone QA · go/no-go · not App Store approval
