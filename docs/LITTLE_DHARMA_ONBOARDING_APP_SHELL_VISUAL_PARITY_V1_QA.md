# Little Dharma Onboarding + App Shell Visual Parity v1 QA (Sprint 77B Runtime Reconstruction)

## Scope
- Sprint 77B only: runtime app entry + onboarding visual reconstruction.
- Reference IDs used: **01–08, 146–155, 306–315, 424–443, 454, 461, 487**.
- Sprint 78 is **not started**.

## Exact onboarding access path
1. Launch app to `/` (`app/index.tsx`).
2. Tap **Begin Little Dharma**.
3. Flow opens `/onboarding` with 8-step parent/child warm onboarding.

## Exact reset/testing method
- QA reset control on entry screen: **Reset Onboarding (Local QA)**.
- Reset is local-only and reopens `/onboarding`.

## Runtime onboarding sequence (8 required moments)
1. Welcome to Little Dharma.
2. Parent promise / safe spiritual story world.
3. Meet Luvlu the Peacock.
4. Choose child age band, not exact DOB.
5. Choose comfort/content preferences.
6. Preview Story World / Dharma Journeys lightly.
7. Explain local-first / privacy-safe trust.
8. Parent/grown-up handoff to `/(parent)/profiles`.

## Luvlu declaration
- Luvlu shown: **yes**.
- Reason: first-time guide/helper.
- Placement: entry/onboarding helper zone.
- Size: medium/helper scale, not dominant deity-like scale.
- State: welcoming guide / calm helper / parent handoff support.
- Not logo: brand mark remains diya-lotus-sun.

## Motion decision
- Soft motion intent from 454 honored via gentle progression + calm transitions only.
- Motion restraint from 461 honored by avoiding flashy animation and stimulation-heavy effects.

## Cultural / parent / privacy guardrails
- Parent-trusted and child-safe spiritual framing preserved.
- No hard gamification (no XP/coins/streaks/leaderboards/competition).
- No backend/auth/cloud sync/CMS/analytics/telemetry/monetisation/mic/recording added.

## Manual QA checklist
- [ ] Entry screen feels warm and child-friendly with cream/saffron/lotus/sky/leaf tone.
- [ ] Diya-lotus-sun appears as brand mark.
- [ ] Luvlu appears visibly as helper, not as logo.
- [ ] Begin Little Dharma CTA is clear.
- [ ] Reset Onboarding (Local QA) exists and is visually de-emphasized.
- [ ] Onboarding includes all 8 required moments in order.
- [ ] Age-band selection is broad-only; no exact DOB prompt.
- [ ] Parent handoff route is `/(parent)/profiles`.
- [ ] Local-first / privacy-safe parent language is shown.
- [ ] Sprint 78 work has not started.
