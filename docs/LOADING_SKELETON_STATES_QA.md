# Sprint 56 — Loading and Skeleton States QA

## Sprint objective
Improve perceived responsiveness with calm, static loading/skeleton states across current private-beta child and parent surfaces, without adding dependencies, animation libraries, backend logic, analytics, or telemetry.

## Surfaces touched
- `app/(child)/today.tsx`
- `app/(child)/treasures.tsx`
- `app/(parent)/dashboard.tsx`
- `src/components/CalmLoadingState.tsx`

## Loading component implementation summary
- Added `CalmLoadingState` with static placeholder lines/cards using only React Native built-ins (`View`, `Text`, `StyleSheet`).
- API: `surfaceName`, `audience`, `title`, `message`, `variant`.
- Audience defaults:
  - child: “Getting your gentle journey ready.”
  - parent: “Preparing your family journey summary.”
  - neutral: “Preparing this space.”

## Loading/skeleton states added
- Child Home journey summary card now shows calm inline loading state during async journey refresh.
- My Treasures summary card now shows calm inline loading state during completion/word refresh.
- Parent Dashboard now shows calm loading card during summary refresh and removed raw user-facing “Loading...” placeholders from summary seed values.

## Copy review
- Copy is warm, calm, non-urgent, and avoids technical/internal system wording.
- Forbidden pressure/error phrases are not used in the loading component or this QA doc.

## Low-stimulation review
- Static placeholders only.
- No shimmer or pulsing animations.
- Soft neutral palette and short reassuring copy.

## Accessibility review
- Loading component has `accessibilityRole="progressbar"` and contextual `accessibilityLabel` based on surface name.

## No animation dependency review
- No animation libraries added.
- No third-party skeleton package added.
- No new dependencies added.

## No telemetry/no backend review
- No telemetry or analytics additions.
- No backend/auth/cloud-sync changes.

## Limitations / what is not claimed
- This sprint does not claim full on-device loading-state sign-off.
- Manual iPhone/Expo Go verification is still required.

## Manual iPhone QA checklist
- Launch app on iPhone via Expo Go.
- Open Child Home and verify calm inline loading appears briefly, then summary renders.
- Open My Treasures and verify loading placeholder appears before summary values.
- Open Parent Dashboard and verify calm loading card appears before summary values.
- Confirm no flashy animation and no pressure language.

## Regression checklist
- Story path 1–21 remains functional.
- Story → Ritual → Pause → Quiz → Completion remains functional.
- Bedtime Mode remains functional.
- Parent Trust & Privacy Center remains functional.

## Final QA status
- Automated/documentation checks: pass.
- Manual iPhone loading-state QA: pending.
