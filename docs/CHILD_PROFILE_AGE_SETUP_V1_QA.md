# Child Profile and Age Setup v1 QA

## Sprint objective
Deliver a parent-trusted, local-only child profile setup foundation that is optional, skippable, and privacy-safe.

## Surfaces touched
- `src/lib/childProfile.ts`
- `app/onboarding.tsx`
- `app/(parent)/dashboard.tsx`
- `app/(child)/today.tsx`

## Profile fields review
- `childNameOrNickname` optional.
- `ageBand` optional and broad age band only.
- `parentIntent` optional.
- `setupCompleted` boolean.
- `updatedAtLocal` local metadata.

## Local-only behavior review
- Child profile is stored in AsyncStorage only.
- No backend and no cloud sync in this sprint.

## Optional/skippable setup review
- Onboarding includes an optional child setup step.
- Parent can skip optional setup and continue.

## Reset behavior review
- Parent Dashboard reset now clears onboarding state and local child profile state together.
- Reset copy and reset behavior are aligned.

## Revisit/edit preservation review
- Revisit setup hydrates saved child profile fields from local storage.
- Finishing revisit without edits does not wipe saved optional child profile values by default.

## Privacy/safety review
- No exact birthdate collection.
- No sensitive child information requested.
- Copy asks families to avoid sensitive details.

## Parent trust review
- Copy clarifies that this stays on this device in the current version.
- Parent Dashboard shows a calm summary and edit path.

## Child delight review
- Child Home can greet with saved nickname.
- Safe fallback greeting remains when no profile data is present.

## No age-band routing review
- Broad age band is saved only for future readiness.
- No age-band routing or story gating is added.

## No sensitive data review
No collection of school, location, media, direct contact, medical, caste/community, or developmental data.

## Accessibility review
- Added accessibility labels for optional setup inputs and skip action.
- Existing route structure remains accessible.

## Error/loading compatibility review
- Existing route error boundaries remain unchanged.
- Existing calm loading states remain unchanged.

## Manual iPhone QA checklist
- [ ] Onboarding optional child setup appears and reads clearly.
- [ ] Skip behavior works and does not block app entry.
- [ ] Save behavior persists optional fields locally.
- [ ] Parent Dashboard summary reflects saved/skipped states.
- [ ] Child Home nickname greeting uses safe fallback when absent.
- [ ] Core story flow still works after setup save and setup skip.

## Regression checklist
- [x] Parent Dashboard still loads and renders summary cards.
- [x] Privacy Center route remains unchanged.
- [x] Parent Feedback route remains unchanged.
- [x] Child Home primary actions remain available.

## Limitations / what is not claimed
- Not a full personalization engine.
- No backend.
- No analytics.
- No age-band routing.
- Manual iPhone QA still required for full sign-off.

## Final QA status
`pending_manual_qa` until manual iPhone QA is completed.
