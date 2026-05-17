# Parent Trust & Privacy Center v1 QA

## Sprint objective
Deliver a clear, parent-readable Trust & Privacy Center that explains Little Dharma's current local-device data behavior, trust posture, child-safety boundaries, and parent guidance without adding backend/account/cloud sync/social/analytics complexity.

## Surfaces touched
- `app/(parent)/privacy.tsx`
- `app/(parent)/dashboard.tsx`
- `docs/content/parent-trust-privacy-center-v1-qa.csv`
- `scripts/validate-parent-trust-privacy-center-v1.mjs`
- `docs/MASTER_SPRINT_QUEUE.md`
- `docs/TASK_LOG.md`

## Data source review
- Parent-facing progress summaries remain sourced from existing local progress services and libraries (`src/services/progress.ts`, `src/lib/storyProgress.ts`, `src/lib/onboardingState.ts`).
- No runtime story schema or story content changes were introduced.

## Local-data claim review
- Trust center copy states data is "currently local to this device".
- Copy avoids permanent/security overclaims and reflects present app behavior.

## No-backend / no-cloud / no-analytics review
- No backend, account auth, cloud sync, telemetry, or analytics collection implementation was added in this sprint.
- Trust center copy explicitly clarifies no account/cloud sync in this version.

## Parent clarity review
- Includes plain-English sections covering what the app is, what stays local, what it does not do, parent supervision expectations, and current limitations.
- Copy is non-legalistic, specific, and avoids alarmist tone.

## Child-safety review
- Copy reinforces parent-guided use and manual supervision for younger children.
- No social/public profile or score-comparison mechanics were introduced.

## Authenticity and content-positioning review
- Copy states content is adapted devotional/value storytelling and not literal scripture translation.
- No claims of certified outcomes were added.

## No-overclaim review
- Forbidden claim phrases were excluded from trust-center UI and this QA document.
- No compliance certifications or medical/educational guarantees are claimed.

## Navigation regression checklist
- [x] Parent Dashboard loads.
- [x] Trust & Privacy Center CTA is visible on Parent Dashboard.
- [x] Parent Dashboard -> Trust & Privacy Center route opens.
- [x] Trust & Privacy Center back link returns to Parent Dashboard.
- [x] Child Home -> Parent Dashboard path remains available.
- [x] No route renames performed.

## iPhone QA checklist (manual, required before release)
- [ ] Parent Dashboard opens without crash.
- [ ] Trust & Privacy Center link is visible.
- [ ] Trust & Privacy Center opens without crash.
- [ ] Copy is readable and not cut off.
- [ ] Back/return path works.
- [ ] Child Home to Parent Dashboard still works.
- [ ] No red screen or blank screen.
- [ ] No overclaim language.
- [ ] No social/public-profile or comparison language.
- [ ] Existing story journey flow does not regress.

## Final QA status
- **Automated/documentation status:** pass (validator + required repo checks).
- **Manual iPhone QA status:** pending_manual_qa (must be completed on device before release sign-off).
