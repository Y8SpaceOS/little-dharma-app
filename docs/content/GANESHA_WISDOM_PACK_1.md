# PR #127: Ganesha Wisdom Pack 1

## PR title and purpose
PR #127 introduces the first small, local-first Ganesha Wisdom Pack foundation (3–5 stories) using Content Model v2 and existing validation/runtime gates.

## Roadmap alignment
Original roadmap PR #124 was Ganesha Wisdom Pack 1. After governance sprints PR #115–117 were inserted, this milestone is now implemented as PR #127.

## Why Ganesha Wisdom Pack 1 follows Krishna Childhood Pack 1
Krishna Childhood Pack 1 established a comparable child-safe devotional pattern for structured story packs, editorial checks, registry integration, and journey mapping. Ganesha Wisdom Pack 1 reuses that foundation to expand tradition coverage without changing runtime architecture.

## Content scope
This PR adds only a small Pack 1 starter set of five child-safe Ganesha wisdom stories for ages 3–8 (+ family use where suitable). It does not attempt a full Ganesha corpus.

## Stories included
1. Ganesha’s Listening Ears  
2. The Modak of Gratitude  
3. Ganesha and the Patient River  
4. The Little Obstacle and the Big Breath  
5. The First Step with Ganesha

## Age-band strategy
The pack uses age bands `3-5`, `6-8`, and selective `family` support. Recommended bands prioritize emotional regulation simplicity for younger children and reflective patience/problem-solving language for older children.

## Story-to-Age Mapping
| Story | Age Bands | Recommended Age | Why |
|---|---|---|---|
| Ganesha’s Listening Ears | 3-5, 6-8 | 3-5 | Concrete listening practice with one-breath regulation is accessible for early childhood. |
| The Modak of Gratitude | 3-5, 6-8, family | 6-8 | Multi-layer gratitude framing (food chain + social context) fits older children while remaining family-friendly. |
| Ganesha and the Patient River | 6-8, family | 6-8 | Patience sequencing (“step, breathe, step”) supports emerging self-regulation and delay tolerance. |
| The Little Obstacle and the Big Breath | 3-5, 6-8 | 6-8 | Problem-solving + collaborative repair language is developmentally rich for primary age children. |
| The First Step with Ganesha | 3-5, 6-8, family | 3-5 | Gentle beginning ritual and effort-over-perfection framing suits younger children and caregivers. |

## Sacred/cultural respect approach
Ganesha is presented with warmth, devotional dignity, and sacred restraint. The pack avoids parody, slapstick deity treatment, and spectacle-heavy miracle framing.

## Parent trust approach
Each story includes parent context, value framing, one discussion prompt, one practice prompt, and caution guidance to avoid shame-heavy or pressure-heavy parenting cues.

## Editorial QA expectations
All stories are authored with child-safe language standards and should pass Editorial QA Validator v1 before runtime exposure. This PR keeps stories in `qa_ready` status.

## Runtime availability rules
Content remains local-first and synchronous. Stories marked `qa_ready` are not assumed runtime-available until status/eligibility gates are met by existing runtime resolver logic.

## Relationship to Content Model v2
Each story is authored in the `Story` shape with required fields including sacred respect metadata, illustration prompts, parent notes, and audio metadata (`noMicRequired: true`).

## Relationship to Content Registry
The pack is integrated into content registry story, pack, and journey arrays after existing Vrindavan, Ramayana Pack 1, and Krishna Childhood Pack 1 entries.

## Relationship to Editorial QA Validator v1
No validator bypass is introduced. Content is intentionally status-gated and structured to be audited by existing editorial QA validation.

## Relationship to Runtime Story Resolver v2
No runtime resolver redesign is introduced. Ganesha entries flow through existing content registry and remain non-runtime-available while `qa_ready`.

## Relationship to Journey Data Model v1
A dedicated `ganesha-wisdom-pack-1` journey is added using existing `DharmaJourney` shape with `guided_path` journey type.

## Relationship to existing Ganesha Story World foundation items
This pack adds content-layer assets only and does not mutate existing Story World doorway design, order, or routing behavior.

## Local-first/no-backend assumptions
No backend, auth, cloud sync, payment, analytics/telemetry, microphone/recording, or network calls are added.

## What this PR changes
- Adds five Ganesha Wisdom Pack 1 stories in Content Model v2 shape.
- Adds Ganesha pack + journey registry adapter.
- Integrates the pack into content registry lookups.
- Adds PR-specific validator and package script.
- Adds sprint documentation.

## What this PR does not do
- Does not add new app routes.
- Does not redesign Story World or Journey UI.
- Does not alter doorway card output/order.
- Does not change completion behavior.
- Does not overwrite Vrindavan, Ramayana, or Krishna Childhood IDs/slugs/content.
- Does not add full Ganesha corpus.

## Follow-up recommendations for PR #128 and PR #129
- PR #128: Parent Journey Progress Dashboard v1
- PR #129: Story Completion Moment v1

## Final PR #127 readiness statement
PR #127 is scoped as a local-first, child-safe Ganesha content-pack foundation aligned to roadmap expectations and existing model/registry/validator/runtime constraints.
