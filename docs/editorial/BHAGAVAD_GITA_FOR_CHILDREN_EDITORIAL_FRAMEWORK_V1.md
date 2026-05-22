# PR #132: Bhagavad Gita for Children Editorial Framework v1

## PR title and purpose
PR #132 establishes Editorial Framework v1 for future Bhagavad Gita-for-children content across authoring, QA, and runtime gating.

## Roadmap alignment
- Original roadmap item: PR #129 (shifted to PR #132 after release-readiness governance insertions in PR #115–117).
- This sprint remains aligned to the approved 100-sprint roadmap sequence.

## Why Bhagavad Gita framework follows Ramayana Audio v1
Ramayana Audio v1 completed core audio scaffolding and sacred narration conventions. The next safe step is an editorial framework that defines cultural, theological, and child-safety boundaries before any Bhagavad Gita runtime content is introduced.

## Editorial goal
Create a values-led, emotionally gentle, parent-trusted framework that translates sacred teachings into age-appropriate guidance without war-glorifying, fear-based, or sectarian framing.

## What this framework is
- A policy baseline for writers, editors, reviewers, and QA.
- A child-safety and sacred-respect contract.
- A readiness gate checklist for future runtime publication.

## What this framework is not
- Not a full Bhagavad Gita content pack.
- Not playable runtime stories.
- Not new routes, screens, or Story World UI changes.
- Not audio implementation.

## Source sensitivity
Bhagavad Gita material is sacred and context-sensitive. Adaptations must preserve reverence, avoid distortion, and avoid reducing teachings into generic motivational slogans detached from dharmic context.

## Child-safety principles
- Use calm, non-fear-based language.
- Avoid vivid battle imagery and trauma-centric narration.
- Keep guidance practical, emotionally safe, and family-readable.
- Use developmentally appropriate abstractions by age band.

## Sacred respect principles
- Preserve reverence in narration and reflections.
- Treat teaching passages as sacred focal moments.
- Avoid comic or meme-like delivery around core teachings.

## Allowed themes
- Courage with gentleness
- Doing the right thing
- Calm action
- Self-control
- Devotion
- Friendship with the Divine
- Gratitude
- Focus
- Humility
- Compassion
- Truthful speech
- Wise choices
- Service
- Inner steadiness

## Restricted themes
- Battlefield violence as spectacle
- Weapon focus
- Death/fear-heavy framing
- Caste/duty absolutism
- Blind obedience
- Shame/punishment-heavy morality
- Theological superiority
- Sectarian claims
- Fatalism
- Trauma-heavy conflict
- Adult philosophical abstraction without child grounding
- Political/nationalist appropriation

## Age-band guidance
- **3–5**: simple values, calm body, kindness, gratitude, friendship, “do one good thing.”
- **6–8**: choices, focus, courage, calm action, helping without reward.
- **9–12**: deeper reflection, intention, duty as responsibility, self-control, devotion, discernment.
- **family**: parent-child guided explanation only.

## Parent trust rules
- Explain source sensitivity.
- Avoid fear-based morality.
- Avoid theological absolutism.
- Include parent discussion prompts.
- Include caution notes for complex concepts.
- Flag content that needs parent guidance.

## Shloka and sacred sound rules
- No jokes around shlokas.
- No mascot chatter over sacred teaching moments.
- Maintain respectful cadence and explanatory framing for children.
- Defer runtime sacred audio until approved audio metadata exists.

## Krishna and Arjuna portrayal rules
- Krishna must be treated with reverence.
- Arjuna must be portrayed as a sincere learner.
- Never frame Arjuna as weak for emotional struggle.
- No cartoonish or meme-like portrayals of Gita teaching scenes.

## Battlefield context rules
- Contextualize conflict minimally and gently.
- Do not dramatize weaponry, injury, death, or fear.
- Reframe duty toward responsibility, discernment, and compassionate action.
- Reject war-glorifying narratives.

## Story adaptation rules
- Start from values and child life situations.
- Keep philosophical depth grounded in concrete examples.
- Use non-sectarian language where possible.
- Include editor notes when a concept requires parent guidance.

## Reflection prompt rules
- Prompts must invite calm self-reflection, not guilt.
- Prefer practical actions (kindness, truthful speech, focus, service).
- Avoid absolutist “one correct belief” framing.
- Keep emotional tone gentle and supportive.

## Audio readiness rules
- No Bhagavad Gita audio publishing in this PR.
- Audio remains blocked until sacred-respect metadata and editorial QA pass.
- Sacred focal teaching moments must disallow mascot overlays.

## Runtime readiness checklist
- child-safe summary
- age-band fit
- parent note
- sacred respect level
- no restricted themes
- no battlefield spectacle
- no sectarian claim
- no runtime availability without editorial QA
- no audio until audio metadata is approved
- no mascot in sacred focal teaching moments

## Editorial review checklist
- Values-first framing remains explicit.
- Teaching remains child-grounded and age-band appropriate.
- Sacred portrayal passes Krishna/Arjuna respect rules.
- Restricted themes are absent.
- Parent guidance and caution notes are complete.
- Runtime gating rules remain intact.

## Relationship to Content Model v2
This framework is content-policy metadata guidance compatible with Content Model v2 and does not alter existing schema contracts.

## Relationship to Editorial QA Validator v1
This framework defines domain-specific rules that Editorial QA Validator v1 must enforce before future Bhagavad Gita stories can advance readiness states.

## Relationship to Runtime Story Resolver v2
Runtime Story Resolver v2 behavior is unchanged. This PR reinforces that no Bhagavad Gita entries become runtime-available without passing QA gates.

## Relationship to Story Audio Foundation v1
Story Audio Foundation v1 remains unchanged. This PR adds policy-level constraints for eventual Bhagavad Gita audio readiness.

## Local-first/no-backend assumptions
All changes are local files and validators only. No backend/auth/cloud sync/payment/analytics/network/API integrations are introduced.

## What this PR changes
- Adds Bhagavad Gita editorial framework data/config exports.
- Adds editorial framework documentation for authoring and review.
- Adds a dedicated validator for framework presence, safety constraints, and roadmap alignment.

## What this PR does not do
- Does not add Bhagavad Gita runtime stories or a full content pack.
- Does not add routes, screens, or Story World doorway changes.
- Does not add audio playback, TTS, microphone, or recording implementation.

## Follow-up recommendations for PR #133 and PR #134
- PR #133: Mahabharata Editorial Framework v1.
- PR #134: Mahabharata Journey Outline v1.

## Final PR #132 readiness statement
PR #132 is ready when typecheck, lint, tests, all existing validators, and the Bhagavad Gita framework validator pass without weakening prior QA gates.
