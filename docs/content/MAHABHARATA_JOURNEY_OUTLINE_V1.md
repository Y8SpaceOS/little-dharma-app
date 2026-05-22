# PR #134: Mahabharata Journey Outline v1

## PR title and purpose
**Title:** PR #134: Mahabharata Journey Outline v1  
**Purpose:** Define a child-safe, parent-trusted, values-led Mahabharata journey outline structure for future content packs, without adding runtime-playable stories.

## Roadmap alignment
- This sprint aligns with the approved 100-sprint roadmap queue where the original Mahabharata Journey Outline was mapped to PR #131.
- Due to inserted governance sprints (PR #115–117), this execution is now PR #134.
- Follow-up naming source reviewed in-roadmap docs:
  - `Parent Weekly Summary v1` is listed in Sprint 83.
  - A direct roadmap entry for `Journey Detail Parent Trust Copy v1` is not explicitly present in current roadmap files.

## Why Mahabharata Journey Outline follows Mahabharata Editorial Framework
This outline inherits all safety, sacred-respect, and parent-trust constraints from Mahabharata Editorial Framework v1 before any future story authoring begins.

## Journey outline goal
Establish a sequence-ready structure that later teams can convert into validated story packs while preserving source respect, child emotional safety, and family trust.

## What this outline is
- A planning-layer outline of sections and episodes.
- A values and maturity sequencing scaffold.
- A runtime-blocked dataset marked `outline_only` and `not_runtime_available`.

## What this outline is not
- Not playable content.
- Not story panels or full narrative bodies.
- Not new routes, screens, journey UI redesign, or story world doorway changes.
- Not audio, backend, analytics, telemetry, API/TTS, or microphone functionality.

## Source sensitivity
Mahabharata source handling in this outline remains sacred-respectful, child-safe, and explicitly non-sensational around conflict, humiliation, vows, and grief.

## Editorial framework dependency
All outline episodes are constrained by Mahabharata Editorial Framework v1 restricted themes, sacred respect rules, age-band guidance, and parent trust rules.

## Journey section structure
1. Seeds of Dharma  
2. Childhood, Learning, and Family Bonds  
3. Choices, Promises, and Consequences  
4. Exile, Patience, and Inner Strength  
5. Wisdom, Friendship, and Divine Guidance  
6. Conflict Context Without Spectacle  
7. Healing, Forgiveness, and Reflection

## Episode outline table
| # | Title | Section | Complexity | Parent Guidance | Runtime |
|---|---|---|---|---|---|
| 1 | The Promise to Listen Carefully | Seeds of Dharma | gentle | no | not_runtime_available |
| 2 | Young Friends Learn Together | Childhood, Learning, and Family Bonds | gentle | no | not_runtime_available |
| 3 | A Question of Fairness | Childhood, Learning, and Family Bonds | guided | no | not_runtime_available |
| 4 | The Choice to Speak Truthfully | Choices, Promises, and Consequences | guided | no | not_runtime_available |
| 5 | A Promise Made with Care | Choices, Promises, and Consequences | guided | no | not_runtime_available |
| 6 | Learning Patience in Difficult Times | Exile, Patience, and Inner Strength | guided | no | not_runtime_available |
| 7 | Draupadi’s Dignity and Courage | Exile, Patience, and Inner Strength | family_only | yes | not_runtime_available |
| 8 | Krishna’s Gentle Guidance | Wisdom, Friendship, and Divine Guidance | guided | no | not_runtime_available |
| 9 | Choosing Peace Before Conflict | Conflict Context Without Spectacle | guided | yes | not_runtime_available |
| 10 | Courage Without Anger | Conflict Context Without Spectacle | guided | yes | not_runtime_available |
| 11 | Forgiveness After Hurt | Healing, Forgiveness, and Reflection | family_only | yes | not_runtime_available |
| 12 | What Dharma Teaches the Heart | Healing, Forgiveness, and Reflection | gentle | no | not_runtime_available |

## Age-band strategy
- **3–5:** gentle value language only.
- **6–8:** guided, concrete value application.
- **9–12:** increased nuance, consequences, and reflection.
- **Family:** required parent-guided handling for complex dignity/conflict episodes.

## Parent-guided episode rules
Parent guidance is required for episodes with dignity-sensitive or conflict-adjacent themes and for any entry marked `family_only` complexity.

## Draupadi dignity handling
- Dignity-first and courage-first framing only.
- No humiliation spectacle.
- No disrobing depiction.
- Parent-guided contextual handling required.

## Complex character handling
Characters are presented with nuance and moral complexity; the outline prohibits simplistic hero-villain flattening.

## War/conflict handling
Conflict themes are contextualized for peace-seeking, restraint, and reflection. The outline forbids battle spectacle, weapon focus, revenge framing, and graphic violence.

## Krishna/sacred guidance handling
Krishna-related outline entries are reverent, sacred-respectful, and non-trivialized, with devotional tone preserved.

## Runtime availability rules
All entries remain `outline_only` with `not_runtime_available` status. No Mahabharata episodes in this sprint are publishable, playable, or runtime-resolved.

## Future content-pack readiness rules
Future packs may only be created after:
1. Editorial QA Validator v1 compliance.
2. Runtime Story Resolver v2 guardrails remain intact.
3. Parent trust and age-band checks are completed.
4. Content model and journey model integration checks pass.

## Local-first/no-backend assumptions
This outline is fully local planning data. No backend, auth, cloud sync, payments, telemetry, or analytics dependencies are introduced.

## Relationship to Content Model v2
The outline complements Content Model v2 by defining future thematic sequencing without adding runtime story records.

## Relationship to Journey Data Model v1
The outline serves as pre-journey planning input and does not alter Journey Data Model v1 behavior or runtime browse flow.

## Relationship to Editorial QA Validator v1
The outline assumes Editorial QA Validator v1 remains mandatory before any future publish eligibility.

## Relationship to Runtime Story Resolver v2
The outline is intentionally blocked from runtime availability and depends on Runtime Story Resolver v2 to keep non-ready content inaccessible.

## Relationship to Mahabharata Editorial Framework v1
This PR directly operationalizes framework constraints into a journey-outline structure while preserving all restricted-theme and sacred-respect rules.

## What this PR changes
- Adds `src/data/mahabharataJourneyOutlineV1.ts` with non-runtime outline sections, episodes, and guardrails.
- Adds documentation for usage boundaries and sensitivity handling.
- Adds a dedicated validator and package script for this sprint.

## What this PR does not do
- Does not add runtime-playable Mahabharata stories.
- Does not add routes or UI runtime behavior changes.
- Does not alter Story World doorway order/output.
- Does not add audio, mic/recording, API/TTS, backend, telemetry, analytics, or gamification.

## Follow-up recommendations for PR #135 and PR #136
- **PR #135:** Parent Weekly Summary v1 (exact roadmap naming confirmed in Sprint 83 and roadmap tables).
- **PR #136:** Journey Detail Parent Trust Copy v1 (requested sprint naming; if roadmap renames this item, use roadmap-authoritative naming at execution time and document the source file).

## Final PR #134 readiness statement
Mahabharata Journey Outline v1 is ready as an outline-only foundation, with runtime blocking and editorial dependency guardrails explicitly preserved.
