# Vrindavan Week 2 Content Architecture (Stories 8–14)

## Sprint 42 Scope and Guardrails
- Sprint type: Content architecture / production-brief sprint (no runtime implementation).
- This document prepares seven future Vrindavan stories (planned story numbers 8–14) for Sprint 43 runtime integration.
- No runtime stories were added in this sprint.
- No `src/data/seed/vrindavan.ts` changes.
- No UI, navigation, backend/auth/cloud sync, CMS, audio, native sharing, analytics, dependency, or runtime schema migrations.

## Design Inputs Applied
- Week 1 QA learnings from `docs/VRINDAVAN_WEEK1_CONTENT_QA.md` and `docs/content/vrindavan-week1-content-qa.csv`.
- Content authenticity constraints from `docs/CONTENT_AUTHENTICITY_OS.md`.
- Content Data Model v2 allowed labels/tier values from `docs/CONTENT_DATA_MODEL_V2.md`.
- Story production structure from `docs/CONTENT_PRODUCTION_PIPELINE.md` and `docs/CONTENT_DRAFTING_PROMPTS.md`.

## Week 2 Story Selection Principles
1. One explicit primary value per story.
2. Warm, child-safe, non-preachy tone.
3. No shame/fear/guilt prompts.
4. No unsupported scripture claims.
5. No invented sacred quotes.
6. Respectful devotional framing with source-sensitivity notes.
7. One small, doable ritual and one calming pause per story.
8. One gentle, non-shaming quiz/reflection prompt.
9. One simple carrying word.
10. One practical parent mirror prompt.

## Planned Story Set (8–14)

### 8) Krishna Shares the Picnic
- Primary value: generosity
- Supporting value: kindness
- Arc: children gather snacks, some have less, Krishna models sharing, everyone feels included.
- Ritual: one-bite sharing gratitude ritual.
- Carrying word: Share

### 9) The Flute and Quiet Listening
- Primary value: focus
- Supporting value: calmness
- Arc: playful noise softens into attentive listening; children notice details when they settle.
- Ritual: one-minute listening pause.
- Carrying word: Listen

### 10) Respect at the Yamuna Bank
- Primary value: respect
- Supporting value: care
- Arc: children approach a sacred natural place gently and learn respectful behavior.
- Ritual: careful-steps practice.
- Carrying word: Gentle

### 11) The Garland Mistake and Honest Bow
- Primary value: humility
- Supporting value: honesty
- Arc: a mistake happens, ownership and apology restore connection.
- Ritual: hand-on-heart apology practice.
- Carrying word: Bow

### 12) Butter Pot Waiting Game
- Primary value: self-control
- Supporting value: patience
- Arc: desire to act quickly becomes a chance to pause and choose wisely.
- Ritual: three-breath wait.
- Carrying word: Wait

### 13) Sweeping the Courtyard Together
- Primary value: service
- Supporting value: teamwork
- Arc: ordinary helping becomes joyful contribution to shared space.
- Ritual: two-minute helping action.
- Carrying word: Help

### 14) Wonder at Fireflies
- Primary value: curiosity
- Supporting value: joy
- Arc: evening wonder invites gentle questions and gratitude for creation.
- Ritual: wonder-noticing practice.
- Carrying word: Wonder

## Source-Sensitivity Framing Standard (Week 2)
- Default contentLabel: `traditional_retelling`.
- Default sourceSensitivityTier: `tier_2_traditional_retelling`.
- Parent-facing source framing should use low-claim language:
  - devotional storytelling tradition
  - values-oriented retelling
  - adapted for young children
  - not a literal scripture translation
- Do not assert exact canonical verse/chapter sources unless already verified in project docs.

## Week 2 Private Beta Readiness

### Why these seven stories belong after Week 1
- Week 1 established base rhythm (story → ritual → pause → quiz → completion).
- Week 2 extends the same rhythm with slightly richer social/emotional scenarios (sharing, listening, repair, service, wonder) while staying age-appropriate and short-form.
- The sequence keeps continuity in Vrindavan context without requiring runtime/system changes.

### How Week 2 diversifies values
- Recommended spread covered: humility, generosity, focus, respect, self-control, service, curiosity/joy.
- Value overlap with Week 1 is minimized by emphasizing new social practice angles and distinct carrying words.

### How Week 2 preserves daily ritual habit
- Every brief includes a tiny ritual that fits a 10-minute family window.
- Every brief includes a calming pause prompt to protect emotional pacing.
- Every brief includes non-shaming quiz/reflection style to preserve child confidence and repeat usage.

### What Sprint 43 must check before runtime handoff
- Confirm production briefs map cleanly to existing runtime schema (without v2 migration).
- Confirm language remains warm and child-safe after draft-to-runtime adaptation.
- Confirm no unsupported sacred claims are introduced during implementation edits.
- Confirm story flow parity: Story → Ritual → Pause → Quiz → Completion.

## Sprint 43 Handoff Checklist
- [ ] Confirm no duplicate slugs.
- [ ] Confirm all stories have exactly one primary value.
- [ ] Confirm all rituals are small and doable.
- [ ] Confirm all pause prompts are calming.
- [ ] Confirm all quizzes are non-shaming.
- [ ] Confirm all carrying words are simple.
- [ ] Confirm no unsupported sacred claims.
- [ ] Confirm parent prompts are useful.
- [ ] Confirm runtime schema compatibility.
- [ ] Confirm validators pass.

## Artifact Link
- Machine-readable tracker: `docs/content/vrindavan-week2-content-architecture.csv`
