# Parent Reflection Prompt Copy v1

## PR title and purpose
PR #146: Parent Reflection Prompt Copy v1 adds a versioned, static, parent-facing reflection copy layer for calm post-story conversation.

## Roadmap alignment
This follows PR #145 Audio Entry Trust Microcopy v1 in the approved sequence.

## Why Parent Reflection Prompt Copy follows Audio Entry Trust Microcopy
After reinforcing trust around audio expectations, this step reinforces trust at story completion with optional, non-evaluative parent reflection language.

## Parent reflection prompt copy goal
Help parents ask one gentle, values-oriented question after reading while keeping reflection optional and respectful.

## What this copy is
A local-first read-only service model and a minimal completion-stage rendering block in the existing story route.

## What this copy is not
Not reminders, notifications, sharing, analytics, backend sync, personalization, AI generation, or assessment.

## Parent-facing reflection principles
Warm, calm, culturally respectful, and pressure-free language for family use.

## Optional reflection copy rules
Copy explicitly states reflection is optional and can happen only if the child wants to talk.

## No-quiz/no-score copy rules
Copy explicitly states: “No quiz, no score, no pressure.”

## Value question copy rules
Copy includes: “What kindness did you notice in this story?”

## Peace/calm question copy rules
Copy includes: “Which part felt peaceful?”

## Family conversation copy rules
Copy supports calm family conversation in the family’s own time.

## Sacred care copy rules
Copy states sacred stories are discussed with care and respect.

## Return-later copy rules
Copy states families can return to the story another day.

## UI integration status
Integrated as a static read-only block in `app/story/[slug].tsx` completion stage. No new controls, routes, or behavior changes.

## No backend/no tracking assumptions
No backend/auth/cloud sync/payment/API work is introduced. No tracking implementation is introduced.

## No notifications/no sharing assumptions
No notification, reminder, sharing, email, SMS, WhatsApp, social, referral, or invite implementation is introduced.

## No AI generation assumptions
No AI-generated, personalized, or runtime-generated reflection prompts are introduced.

## No hard gamification rules
No streak, rank, leaderboard, reward loop, or performance framing is introduced.

## Completion behavior preservation rules
No story completion write behavior is changed.

## Story runtime/audio preservation rules
No runtime story availability, reader flow, panel flow, or audio behavior is changed.

## Relationship to Completion Trust Microcopy v1
This extends completion trust language with parent-facing optional reflection copy.

## Relationship to Parent Weekly Summary v1
This does not alter weekly summary data or summary generation; it only adds static copy for completion-stage reflection.

## Relationship to Parent Sharing Copy v1
This does not add sharing mechanics; it remains private, static, and local-first.

## What this PR changes
- Adds `parentReflectionPromptCopyService` with versioned exports and summary helper.
- Adds static completion-stage reflection copy rendering in existing story route.
- Adds validator script and package script.
- Adds this documentation page.

## What this PR does not do
No new routes, no state mutation additions, no backend/network integrations, no notifications/reminders/sharing features, and no audio/completion runtime behavior changes.

## Follow-up recommendations for PR #147 and PR #148
Roadmap follow-ups:
- PR #147: Parent Weekly Summary Copy Polish v1
- PR #148: Parent Controls Journey Settings Copy v1

Source: sprint roadmap naming provided in current planning context.

## Final PR #146 readiness statement
Parent Reflection Prompt Copy v1 is scoped to static trust copy and is ready once validators pass.
