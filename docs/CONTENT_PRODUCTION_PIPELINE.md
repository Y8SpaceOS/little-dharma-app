# Content Production Pipeline v1 (Sprint 40)

## Purpose
This pipeline converts Story Master Index rows into high-quality, age-band-specific, authenticity-reviewed story production artifacts for Sprints 41 onward.

Pipeline goals:
- Convert Story Master Index rows into production briefs.
- Convert production briefs into age-band variants (`ages_3_5`, `ages_6_8`, `ages_9_12`).
- Prevent low-quality AI story dumping.
- Enforce source sensitivity + authenticity review discipline.
- Enforce age-band appropriateness.
- Create repeatable, auditable production batches.
- Preserve parent trust and cultural respect.
- Prepare controlled runtime handoff candidates without changing runtime behavior in this sprint.

## Inputs and outputs
- Primary intake source: `docs/content/story-master-index-v1.csv`
- Reference strategy/docs:
  - `docs/STORY_MASTER_INDEX_V1.md`
  - `docs/CONTENT_AUTHENTICITY_OS.md`
  - `docs/AGE_BAND_STORY_TEMPLATES.md`
  - `docs/CONTENT_DATA_MODEL_V2.md`
- Production artifacts created/used:
  - `docs/content/story-production-brief-template.md`
  - `docs/CONTENT_DRAFTING_PROMPTS.md`
  - `docs/content/story-production-batch-template.csv`

## Production stages (required)
1. **Index Intake**
   - Pull candidate rows by `releasePhase`, `releasePriority`, `reviewStatus`, and source sensitivity.
   - Verify each selected row has explicit `contentLabel` and `parentSourceNote` guidance.

2. **Batch Selection**
   - Create one bounded batch with explicit `batchId` and owner.
   - Follow diversity, sensitivity, and release-phase balancing rules (see below).

3. **Story Brief Creation**
   - Generate a structured brief per selected `baseStoryId` using the production brief template.
   - Lock one primary value and one carrying word/phrase seed.

4. **Age-Band Variant Drafting**
   - Draft one variant per target age band.
   - Keep shared value spine, but adjust language/complexity/ritual/pause depth by age.

5. **Authenticity Review**
   - Validate source claims, sacred references, and source-note honesty.
   - Block invented sacred quotes or unsupported certainty.

6. **Parent Trust Review**
   - Validate emotional tone, safety framing, and trust-preserving parent notes.
   - Reject guilt/fear/shame and competitive framing.

7. **Child Readability Review**
   - Validate age fit, clarity, delight, and cognitive load.

8. **Ritual / Pause / Carrying Word Review**
   - Validate ritual is short/doable, pause is calming, and carrying word is memorable.

9. **Final Editorial Approval**
   - Approve only if all mandatory review gates pass.

10. **Runtime Handoff Candidate**
   - Mark as runtime-handoff candidate only after editorial approval.
   - No runtime data mutation in this sprint.

11. **Release Readiness**
   - Confirm release-phase fit (`private_beta`, `public_beta`, etc.) and batch readiness.

## Batch selection rules
- Start with `private_beta` rows first.
- Prioritize `ages_6_8` variants first for private beta production flow.
- Maintain value diversity (avoid clustering too many stories with same primary value in one batch).
- Maintain content-world diversity across batches.
- Avoid stacking too many high-sensitivity (`tier_1`/`tier_2`) rows in a single batch.
- Include low-risk everyday/original stories (`tier_4`/`tier_5`) for production speed and quality throughput.
- Include selected Vrindavan/Ganesha/Hanuman rows each cycle to preserve product identity.
- Require source review before high-sensitivity content can advance beyond drafting.

## Recommended batch sizes and rollout targets
- **Sprint 41:** Vrindavan Week 1 QA / story refinement batch.
- **Sprints 42–45:** 7-story batches (or 7 base-idea batches).
- **Private beta target:** 21–30 story experiences.
- **Public beta target:** 60–100 story experiences.
- **Paid v1 target:** 150–250 story experiences.

## Allowed productionStage values
Use only the following values in production tracking CSV and status tooling:
- `selected`
- `brief_created`
- `drafted`
- `authenticity_review`
- `parent_trust_review`
- `child_readability_review`
- `revision_needed`
- `approved_for_runtime_handoff`
- `blocked`

## Approval rules (hard gates)
- Tier 1 content cannot bypass authenticity review.
- Tier 2 content requires conservative `parentSourceNote` wording.
- Tier 4 and Tier 5 can move faster but still require tone + parent trust review.
- No story reaches runtime handoff without final editorial approval.
- No story containing invented sacred quotes can proceed.
- No story with unclear `contentLabel` can proceed.
- No story with missing carrying word can proceed.

## Review checklists

### 1) Authenticity checklist
- Source framing matches sensitivity tier.
- No fake scripture claims.
- No invented sacred quotes.
- No unsupported certainty language.
- Sacred figures are treated respectfully (not casualized).
- `parentSourceNote` is honest about source confidence.

### 2) Parent trust checklist
- No shame/fear/guilt framing.
- No manipulation or pressure language.
- Privacy-safe phrasing (no public child identity patterns).
- Clear `contentLabel` and clear source note.
- Parent mirror is gentle and non-judgmental.

### 3) Age-band fit checklist
- Tone and vocabulary match target age band.
- Cognitive complexity is appropriate.
- Story objective is understandable.
- One primary value remains clear.

### 4) Ritual safety checklist
- Ritual is short, optional-feeling, and safe.
- No coercive religious framing.
- No performance comparison/competition cues.

### 5) Pause quality checklist
- Pause language is calming and low-pressure.
- Pause is brief and doable.
- Pause reinforces reflection, not guilt.

### 6) Quiz/reflection checklist
- Reflection is non-shaming.
- Questions are age-appropriate and clear.
- No leaderboard/streak/competition framing.

### 7) Bedtime suitability checklist
- Closing tone is warm and soothing.
- No overstimulating or fear-heavy messaging.
- Parent-child closing line supports bonding.

### 8) Final approval checklist
- All mandatory gate statuses are passed.
- Carrying word is present and memorable.
- `contentLabel` and `parentSourceNote` are complete.
- No unsupported religious claims remain.
- No runtime/privacy risks introduced by content language.

## Output quality bar
A story experience is only release-ready when:
- Child understands the value.
- Parent understands why it matters.
- Story feels warm, not preachy.
- Ritual is small and doable.
- Pause is calming.
- Quiz/reflection is non-shaming.
- Carrying word is memorable.
- Source note is honest.
- No unsupported religious claim exists.
- No runtime/privacy risk is introduced.

## Sprint 41–45 usage plan
- **Sprint 41 — Vrindavan Week 1 Content QA Pass:** use this pipeline for QA normalization and remediation briefs.
- **Sprint 42 — Vrindavan Week 2 Content Architecture:** use this pipeline to select and brief Week 2 batch.
- **Sprint 43 — Add Vrindavan Stories 8–14:** run selected stories fully through the pipeline before runtime handoff.
- **Sprint 44 — Add Vrindavan Stories 15–21:** repeat 7-story controlled batch cycle.
- **Sprint 45 — 21-Day Vrindavan Path Completion State:** use approved artifacts to validate cadence continuity and final path readiness.

## Illustrative example only (not runtime story data)
**Master index row example:** `BSI-0001` (from private beta candidate set in `docs/STORY_MASTER_INDEX_V1.md`).

**How it becomes a production brief (illustrative):**
- `baseStoryId`: `BSI-0001`
- `baseStoryTitle`: `vrindavan krishna story seed 1`
- `contentWorld`: `vrindavan_krishna`
- `contentLabel`: `traditional_retelling` (example label)
- `sourceSensitivityTier`: `tier_2_traditional_retelling`
- `primaryValue`: `kindness`
- `carryingWordSeed`: `kind hands`
- `targetAgeBand`: `ages_6_8` (first-pass private beta priority)
- `reviewStatus`: starts at `brief_created`, then progresses by gate outcomes.

This example is illustrative only; it is not a full story and does not add runtime story content.
