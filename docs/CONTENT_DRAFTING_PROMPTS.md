# Content Drafting Prompts v1 (Sprint 40)

Use these templates for controlled content production only. They are designed to prevent shallow AI dumping and preserve authenticity + parent trust.

## Global guardrails (prepend to every prompt)
- Do not invent scripture citations or sacred quotes.
- Do not claim certainty when source certainty is unknown.
- Do not use sacred figures casually or comedically.
- Do not use shame/fear/guilt framing.
- Do not use leaderboard/streak/competition framing.
- Do not include public child identity data.
- Always include a clear `contentLabel`.
- Always include a clear, conservative `parentSourceNote`.
- Keep one primary value and one carrying word/phrase.
- Parent mirror must be gentle, non-judgmental.

---

## 1) Story brief generation from one master index row
**Template:**
"""
You are producing a Story Production Brief from one Story Master Index row.

Input row:
{{MASTER_INDEX_ROW}}

Output format:
- baseStoryId
- baseStoryTitle
- contentWorld
- contentLabel
- sourceSensitivityTier
- sourceSummary
- parentSourceNote
- primaryValue
- supportingValue
- carryingWordSeed
- targetAgeBand
- storyObjective
- storyArc
- panelsOrBeats
- ritual
- pause
- quizOrReflection
- badgeOrTreasure
- parentMirrorPrompt
- bedtimeReflection
- reviewStatus
- reviewerNotes

Requirements:
- Preserve source sensitivity and avoid unsupported religious claims.
- Keep output concise and production-ready.
- Do not draft full runtime story text.
"""

## 2) ages_3_5 variant drafting
"""
Draft an ages_3_5 variant from this approved story brief:
{{STORY_BRIEF}}

Requirements:
- Very simple words and short beats.
- Warm, safe, concrete examples.
- One clear value and one carrying word.
- Ritual and pause must be tiny and calming.
- No shame/fear/guilt.
- Include: contentLabel, parentSourceNote, and brief parent mirror.
"""

## 3) ages_6_8 variant drafting
"""
Draft an ages_6_8 variant from this approved story brief:
{{STORY_BRIEF}}

Requirements:
- Clear story arc with moderate detail.
- One primary value, one carrying word.
- Gentle reflection question with no pressure.
- Ritual must be practical for daily use.
- Include: contentLabel, parentSourceNote, parent mirror.
- No invented sacred quotes or unsupported certainty.
"""

## 4) ages_9_12 variant drafting
"""
Draft an ages_9_12 variant from this approved story brief:
{{STORY_BRIEF}}

Requirements:
- Slightly deeper internal reflection and moral nuance.
- Keep respect for source sensitivity and authenticity.
- One primary value and one carrying word.
- Reflection should invite thought, not guilt.
- Include: contentLabel, parentSourceNote, parent mirror.
- No competitive/streak framing.
"""

## 5) Authenticity review prompt
"""
Review the draft for authenticity and source sensitivity.

Inputs:
- Story brief: {{STORY_BRIEF}}
- Draft variant: {{DRAFT_VARIANT}}

Checklist:
- Any fake scripture claim?
- Any invented sacred quote?
- Any casual sacred-figure misuse?
- Any unsupported source certainty?
- Is parentSourceNote conservative and honest?

Output:
- authenticityReviewStatus: pass | revision_needed | blocked
- issuesFound
- exact revision instructions
"""

## 6) Parent trust review prompt
"""
Review the draft for parent trust and emotional safety.

Inputs:
- Story brief: {{STORY_BRIEF}}
- Draft variant: {{DRAFT_VARIANT}}

Checklist:
- Any shame/fear/guilt language?
- Any manipulative language?
- Is contentLabel clear?
- Is parentSourceNote clear?
- Is parent mirror gentle and practical?

Output:
- parentTrustReviewStatus: pass | revision_needed | blocked
- issuesFound
- exact revision instructions
"""

## 7) Child readability review prompt
"""
Review the draft for age-band readability.

Inputs:
- targetAgeBand: {{AGE_BAND}}
- Draft variant: {{DRAFT_VARIANT}}

Checklist:
- Vocabulary fit
- Sentence complexity fit
- Value clarity for age
- Delight/warmth without preachiness

Output:
- childReadabilityReviewStatus: pass | revision_needed | blocked
- issuesFound
- exact revision instructions
"""

## 8) Ritual / pause / carrying word review prompt
"""
Review ritual design quality.

Inputs:
- Draft variant: {{DRAFT_VARIANT}}

Checklist:
- Ritual is small and doable
- Pause is calming
- Carrying word is present and memorable
- Reflection is non-shaming
- No competition framing

Output:
- ritualPauseReviewStatus: pass | revision_needed | blocked
- issuesFound
- exact revision instructions
"""

## 9) Final editorial QA prompt
"""
Run final editorial QA on this variant.

Inputs:
- Story brief: {{STORY_BRIEF}}
- Draft variant: {{DRAFT_VARIANT}}
- Prior review notes: {{REVIEW_NOTES}}

Hard stop rules:
- Block if invented sacred quote exists.
- Block if contentLabel unclear.
- Block if carrying word missing.
- Block if parentSourceNote unclear.
- Block if runtime/privacy risk language appears.

Output:
- finalApprovalStatus: approved_for_runtime_handoff | revision_needed | blocked
- finalChecklistSummary
- requiredFixesBeforeHandoff
"""
