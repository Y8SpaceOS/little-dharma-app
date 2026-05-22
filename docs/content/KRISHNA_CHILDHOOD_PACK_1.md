# PR #126: Krishna Childhood Pack 1

## PR title and purpose
PR #126: Krishna Childhood Pack 1 introduces a small, local-first Krishna childhood content foundation (5 stories) using established Content Model v2, content registry, editorial QA, runtime gating, and journey structures.

## Roadmap alignment
This sprint is aligned to the approved 100-sprint roadmap. Krishna Childhood Pack 1 was originally roadmap PR #123 and is now implemented as PR #126 after insertion of PR #115–117 release-readiness governance sprints.

## Why Krishna Childhood Pack 1 follows Ramayana Pack 1
Ramayana Pack 1 established the journey-pack baseline pattern in PR #125. Krishna Childhood Pack 1 now follows with the same local-first, validator-gated, child-safe structure while preserving current runtime behavior constraints.

## Content scope
This PR adds only a carefully scoped Pack 1 starter set (5 stories), not the full Krishna corpus.

## Stories included
1. Krishna Shares Butter Kindly
2. Yashoda’s Gentle Lesson
3. Krishna Helps a Little Calf
4. The Flute That Made Everyone Listen
5. Friends Share Under the Kadamba Tree

## Age-band strategy
Primary target is ages 3–8 with `3-5` and `6-8` support, plus selective `family` suitability. Recommendations remain simple and parent-guided.

## Sacred/cultural respect approach
Krishna is presented with devotional warmth and sacred restraint, avoiding parody, irreverence, fear-heavy miracle framing, and over-comedic deity treatment.

## Parent trust approach
Each story includes structured parent notes for source context, value framing, discussion prompts, practice prompts, and caution guidance to support non-shaming, child-safe narration.

## Editorial QA expectations
All stories are authored in Content Model v2 with complete required fields and staged as `qa_ready` for Editorial QA Validator v1 workflows.

## Runtime availability rules
Pack status and story statuses are deliberately `qa_ready`. Runtime resolver eligibility remains gated by status and editorial QA readiness; this PR does not force runtime exposure.

## Relationship to Content Model v2
Stories, pack, and journey are modeled directly with Content Model v2 `Story`, `StoryPack`, and `DharmaJourney` structures.

## Relationship to Content Registry
Krishna Childhood Pack 1 stories, pack, and journey are appended to registry collections after existing Vrindavan and Ramayana entries without overwriting IDs/slugs.

## Relationship to Editorial QA Validator v1
This pack follows existing QA discipline and does not bypass validator expectations. Content is structured for QA-first progression.

## Relationship to Runtime Story Resolver v2
No resolver behavior redesign is introduced. Existing runtime availability gates remain intact and authoritative.

## Relationship to Journey Data Model v1
The new journey uses existing journey model fields and `guided_path` journey type, preserving Journey Data Model v1 compatibility.

## Relationship to existing Vrindavan content
Existing Vrindavan seed content, IDs/slugs, and starter path behavior remain preserved and unmodified.

## Local-first/no-backend assumptions
All additions are static local content with synchronous usage patterns only. No backend, auth, analytics, cloud sync, payment, mic, recording, or new networking behavior is introduced.

## What this PR changes
- Adds Krishna Childhood Pack 1 seed stories.
- Adds Krishna Childhood Pack 1 registry adapter (stories, pack, journey, coverage summary).
- Integrates Krishna entries into global content registry maps/lists.
- Adds dedicated PR #126 validator script.
- Adds package script for validator execution.
- Adds this documentation artifact.

## What this PR does not do
- Does not add or alter app routes.
- Does not redesign Story World or Journey UI.
- Does not change current doorway output/order.
- Does not change story completion behavior.
- Does not overwrite existing Vrindavan or Ramayana seed content.
- Does not add the full Krishna corpus.

## Follow-up recommendations for PR #127 and PR #128
- PR #127: Ganesha Wisdom Pack 1
- PR #128: Parent Journey Progress Dashboard v1

## Final PR #126 readiness statement
PR #126 is ready when typecheck/lint/tests and all required validators pass, with Krishna pack runtime exposure intentionally gated at `qa_ready` until downstream QA/runtime promotion criteria are met.
