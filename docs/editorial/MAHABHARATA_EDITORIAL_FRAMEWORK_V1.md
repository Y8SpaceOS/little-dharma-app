# PR #133: Mahabharata Editorial Framework v1

## PR title and purpose
PR #133 defines Editorial Framework v1 for future Mahabharata-for-children content across writing, review, QA, and runtime gating.

## Roadmap alignment
- Original roadmap item: PR #130 (shifted to PR #133 after release-readiness governance insertions in PR #115–117).
- This sprint remains aligned to the approved 100-sprint roadmap sequence.

## Why Mahabharata framework follows Bhagavad Gita framework
PR #132 established the Bhagavad Gita for Children Editorial Framework v1. Mahabharata framework work now follows to extend the same safety-first and sacred-respect governance pattern before introducing Mahabharata journey or story-pack content.

## Editorial goal
Create a values-led, developmentally appropriate, spiritually respectful framework that makes Mahabharata adaptations emotionally safe and parent-trusted for children.

## What this framework is
- A policy baseline for child-safe Mahabharata adaptation.
- A sacred-respect and parent-trust contract for creators and reviewers.
- A runtime-readiness and editorial-readiness gate checklist.

## What this framework is not
- Not a Mahabharata content pack.
- Not runtime-playable stories.
- Not audio implementation.
- Not route, screen, or Story World UI work.

## Source sensitivity
The Mahabharata contains sacred teachings and morally complex family history. Adaptation must be reverent, context-sensitive, and child-protective while avoiding distortion, sensationalism, and ideological claims.

## Child-safety principles
- Keep emotional tone gentle and non-fear-based.
- Avoid vivid conflict, revenge, humiliation, or grief dramatization.
- Center concrete child values: care, fairness, responsibility, and compassion.
- Use age-band language and parent-guided framing for complex episodes.

## Sacred respect principles
- Preserve reverence for Krishna and sacred teachings.
- Treat all major figures with dignity and nuance.
- Keep vows, grief, and moral dilemmas respectfully contextualized.
- Disallow mascot chatter or jokes in sacred and grief-sensitive moments.

## Allowed themes
- Truthful speech
- Keeping promises carefully
- Humility
- Courage with compassion
- Wise choices
- Patience
- Fairness
- Friendship
- Family love
- Forgiveness
- Self-control
- Service
- Learning from mistakes
- Respect for elders without fear
- Responsibility
- Inner steadiness

## Restricted themes
- War as spectacle
- Weapon focus
- Revenge glorification
- Humiliation as entertainment
- Death/fear-heavy framing
- Dice game as gambling excitement
- Shame/punishment-heavy morality
- Caste superiority
- Blind obedience
- Theological superiority
- Sectarian claims
- Fatalism
- Trauma-heavy family conflict
- Adult political intrigue
- Draupadi humiliation details for young children
- Disrobing depiction
- Graphic violence
- Simplistic villainization of complex characters

## Age-band guidance
- **3–5**: simple values, kindness, sharing, friendship, patience, “choose gently.”
- **6–8**: fairness, promises, self-control, helping family, courage with care, learning from mistakes.
- **9–12**: moral complexity, intention, responsibility, consequences, discernment, forgiveness, leadership humility.
- **family**: parent-guided explanation only for complex episodes.

## Parent trust rules
- Explain source sensitivity.
- Flag complex episodes clearly.
- Include parent discussion prompts.
- Include caution notes for conflict-heavy moments.
- Avoid fear-based morality.
- Avoid revenge-based framing.
- Avoid caste superiority.
- Avoid fatalism.
- Recommend parent-guided reading for family conflict and war-adjacent material.

## Krishna portrayal rules
- Krishna must be treated with reverence.
- Teachings linked to Krishna must remain spiritually respectful and non-mocking.
- No mascot chatter over sacred teaching moments.

## Pandava and Kaurava portrayal rules
- Do not flatten Pandavas or Kauravas into simplistic cartoon heroes/villains.
- Preserve moral complexity and accountability without demonization.
- Emphasize choices, consequences, and discernment over labels.

## Draupadi dignity rules
- Draupadi must be presented with dignity at all times.
- Never depict or narrate humiliation as spectacle.
- Disrobing depiction is disallowed in child-ready adaptation.

## Complex character rules
- Bhishma, Drona, Karna, Kunti, Gandhari, and similarly complex figures require nuance.
- Avoid simplistic villainization; focus on intention, duty tension, and consequences.
- Frame lessons as reflective rather than punitive.

## War and violence context rules
- Contextualize war minimally for narrative continuity; do not dramatize it.
- Prohibit weapon-focused detail and graphic injury/death descriptions.
- Reframe conflict toward values, restraint, responsibility, and compassion.

## Dice game and gambling context rules
- Present the dice episode as a cautionary context, not excitement.
- Avoid game-like framing, thrill language, or celebratory tone.
- Focus on consequences, fairness, and respectful decision-making.

## Vows, grief, and humiliation handling rules
- Treat vows as serious commitments requiring humility and discernment.
- Handle grief with gentle language and emotional safety.
- Do not joke about vows, humiliation, sacred teachings, or grief moments.

## Story adaptation rules
- Start with child values, then map to epic context with care.
- Keep narration non-violent, non-political, non-sectarian where possible.
- Use parent notes for episodes requiring contextual maturity.
- Keep moral reflection open-ended and non-preachy.

## Reflection prompt rules
- Encourage calm reflection and kind action.
- Avoid guilt-based or fear-based prompts.
- Promote discernment, responsibility, and compassion in daily life.

## Audio readiness rules
- No Mahabharata audio is enabled in this PR.
- Future audio requires approved sacred-respect metadata and editorial QA.
- Sacred/grief-sensitive moments must block mascot overlays.

## Runtime readiness checklist
- child-safe summary
- age-band fit
- parent note
- caution note for complex episodes
- sacred respect level
- no restricted themes
- no war spectacle
- no humiliation spectacle
- no graphic violence
- no runtime availability without editorial QA
- no audio until audio metadata is approved
- no mascot in sacred/grief/teaching moments

## Editorial review checklist
- Values-first framing is explicit and child-grounded.
- Age-band fit and emotional safety are verified.
- Krishna portrayal remains reverent and sacred moments are respected.
- Draupadi dignity and complex character nuance are preserved.
- War, dice, grief, and humiliation handling rules are satisfied.
- Restricted themes are absent and parent trust notes are complete.
- Runtime and QA gates are satisfied before publication states.

## Relationship to Content Model v2
This framework is policy/config guidance and does not alter Content Model v2 schema contracts or runtime content shape.

## Relationship to Editorial QA Validator v1
This framework defines Mahabharata-specific checks that must pass Editorial QA Validator v1 requirements before any future readiness promotion.

## Relationship to Runtime Story Resolver v2
Runtime resolver behavior is unchanged. This framework reinforces that no Mahabharata story becomes runtime-available without QA and readiness gates.

## Relationship to Story Audio Foundation v1
Audio foundation logic remains unchanged. This framework only adds policy constraints for future Mahabharata audio readiness.

## Local-first/no-backend assumptions
All changes are local files and local validators only. No backend/auth/cloud sync/payment/analytics/telemetry/network integrations are added.

## What this PR changes
- Adds Mahabharata Editorial Framework v1 data exports.
- Adds Mahabharata Editorial Framework v1 documentation.
- Adds a dedicated validator to enforce framework completeness and safety gates.

## What this PR does not do
- Does not add Mahabharata runtime stories or content pack entries.
- Does not add routes, screens, or Story World doorway behavior changes.
- Does not add playback, recording, microphone, API, or TTS implementations.

## Follow-up recommendations for PR #134 and PR #135
- PR #134: Mahabharata Journey Outline v1.
- PR #135: Parent Weekly Summary v1.
- Source: approved roadmap alignment noted in PR #133 sprint brief and in-repo roadmap sequence references for post-PR #132 planning.

## Final PR #133 readiness statement
PR #133 is ready when typecheck, lint, tests, existing validators, and Mahabharata framework validator all pass without weakening any existing QA or runtime gates.
