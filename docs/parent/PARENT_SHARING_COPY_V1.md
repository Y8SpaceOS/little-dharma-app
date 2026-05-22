# PR #137: Parent Sharing Copy v1

## PR title and purpose
Create Parent Sharing Copy v1 as a local-first, parent-trusted copy model for future sharing surfaces, without implementing any sharing mechanics.

## Roadmap alignment
This sprint follows PR #136 Journey Detail Parent Trust Copy v1 and continues the parent trust roadmap sequence after PR #135 Parent Weekly Summary v1.

## Why Parent Sharing Copy follows Journey Detail Parent Trust Copy
Journey Detail Parent Trust Copy established parent-facing trust framing for age appropriateness, values, privacy, and sacred respect. Parent Sharing Copy extends that trust framing into future share-adjacent language before any interaction is built.

## Parent sharing copy goal
Define approved parent-facing language, privacy boundaries, sacred guardrails, and validator coverage for optional family sharing context.

## What this copy is
- Consent-first, optional parent guidance copy.
- Local-first and read-only copy definitions.
- Child-safe and culturally respectful wording for family moments.

## What this copy is not
- Not a sharing feature.
- Not a native share sheet.
- Not social posting, invite, referral, messaging, or export implementation.

## Consent-first sharing principles
- Sharing is optional and parent-led.
- “You can share this blessing with family when you choose.”
- “You are in control.”

## Privacy copy rules
- “Your child’s progress stays private on this device.”
- “No child profile, score, or streak is shared.”
- No backend, auth, cloud sync, analytics, or telemetry assumptions.

## Child-safety copy rules
- Keep language non-performative and pressure-free.
- Do not expose identifying child details.
- Keep sharing guidance family-safe and local-first.

## Sacred respect sharing rules
- “Sacred stories should be shared with care and respect.”
- Do not frame sacred content as meme, trend, or viral bait.

## Allowed sharing use cases
- Parent privately shares a blessing with close family.
- Parent shares a value reflection with grandparents.
- Parent saves wording for a family conversation later.
- Parent copies a general blessing without child identity.
- Parent shares cultural learning context without progress details.

## Do-not-share rules
- No child name required.
- No exact child age.
- No public child profile.
- No score/rank/streak/progress bragging.
- No school/class/location identifiers.
- No sensitive family routine details.
- No deity/sacred content used as meme or viral bait.
- No pressure to share.
- No auto-sharing.
- No referral/invite loops.

## Blessing copy rules
- “A gentle family note.”
- “Share a blessing, not a score.”
- Keep blessings kind, brief, and respectful.

## Value reflection copy rules
- Reflection language should center values over performance.
- Reflection language should avoid identity, comparison, or metrics.

## Parent trust bullet rules
- Include consent, privacy, and control language.
- Keep parent bullets calm, direct, and non-gamified.

## UI integration status
Deferred in PR #137. No UI binding added in this PR to keep the scope service/docs/validator only.

## Privacy/no-backend assumptions
All Parent Sharing Copy v1 content is local-first read-only text. No backend/auth/payment/analytics/telemetry/network implementation is introduced.

## No hard gamification rules
Avoid XP, coins, streaks, leaderboard, rank, score, performance framing, achievement unlocked language, referral mechanics, and viral framing.

## Relationship to Parent Weekly Summary v1
Parent Weekly Summary v1 introduced parent reflection context from local progress. Parent Sharing Copy v1 defines optional copy guardrails that can accompany future parent-controlled sharing moments.

## Relationship to Journey Detail Parent Trust Copy v1
Journey Detail Parent Trust Copy v1 established trust language per journey. Parent Sharing Copy v1 applies trust language to future parent sharing contexts.

## Relationship to Story Completion Moment v1
Story Completion Moment v1 provides completion context. Parent Sharing Copy v1 defines future-safe parent wording that can be used around family sharing decisions without changing completion behavior.

## What this PR changes
- Adds `src/services/parentSharingCopyService.ts` with Parent Sharing Copy v1 model and getters.
- Adds `docs/parent/PARENT_SHARING_COPY_V1.md` with policy and guardrail documentation.
- Adds `scripts/validate-parent-sharing-copy-v1.mjs` and package script wiring.

## What this PR does not do
- Does not implement sharing.
- Does not add native share sheets.
- Does not add email, WhatsApp, SMS, push, social posting, deep links, invite, or referral implementation.
- Does not add image export.
- Does not add backend/cloud sync/auth/payment/analytics/telemetry/network calls.
- Does not mutate story completion or journey progress.

## Follow-up recommendations for PR #138 and PR #139
- PR #138: Parent Controls Copy Hardening v1.
- PR #139: Privacy Center Copy Hardening v1.
- Source: sprint roadmap naming provided in PR #137 planning context.

## Final PR #137 readiness statement
Parent Sharing Copy v1 is ready for integration planning as a copy-only, local-first, consent-led foundation with validator coverage and no sharing implementation.
