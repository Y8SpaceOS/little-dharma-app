# Content Data Model v2 (Planning Spec)

## Sprint 37 scope and intent

**This document is a planning/spec artifact only.** It defines a future-facing Content Data Model v2 so Little Dharma can scale toward 1,000+ story experiences while preserving current runtime behavior today.

- No runtime TypeScript schema migration is implemented in this sprint.
- No story packets are migrated in this sprint.
- Existing app flow remains unchanged: **Story → Ritual → Pause → Quiz → Completion**.

## Purpose of Content Data Model v2

Content Data Model v2 is designed to:

1. Support **1,000+ story experiences** over time.
2. Support **age-band variants** (`ages_3_5`, `ages_6_8`, `ages_9_12`).
3. Support **authenticity labels** and **source sensitivity tiers**.
4. Support **parent-facing source notes** and trust transparency.
5. Support **review workflow/status** for editorial and authenticity governance.
6. Support structured production for story, ritual, pause, quiz, carrying word, badge/treasure, parent mirror, and bedtime reflection moments.
7. Avoid premature runtime migration by keeping v2 as a spec until staged adoption is approved.

---

## Top-level entities

- `ContentWorld`
- `BaseStoryIdea`
- `StoryExperience`
- `AgeBandVariant`
- `RitualMoment`
- `QuizMoment`
- `PauseMoment`
- `CarryingWord`
- `BadgeTreasure`
- `ParentMirror`
- `BedtimeReflection`
- `SourceNote`
- `ReviewStatus`
- `ContentReleasePhase`

---

## Allowed enum values

### `AgeBand`
- `ages_3_5`
- `ages_6_8`
- `ages_9_12`

### `ContentWorld`
- `vrindavan_krishna`
- `ganesha`
- `hanuman`
- `ramayana`
- `mahabharata`
- `shiva_parvati`
- `devi_shakti`
- `saraswati`
- `panchatantra_niti`
- `jataka_compassion`
- `saints_bhakti`
- `festivals`
- `everyday_little_dharma`
- `nature_gratitude_family_school`
- `bedtime_morning_rituals`

### `ContentLabel`
- `canonical_story`
- `traditional_retelling`
- `festival_cultural_context`
- `original_little_dharma_story`
- `everyday_values_story`
- `bedtime_reflection`
- `parent_child_ritual`

### `SourceSensitivityTier`
- `tier_1_canonical_sacred`
- `tier_2_traditional_retelling`
- `tier_3_cultural_festival`
- `tier_4_original_values`
- `tier_5_everyday_modern`

### `ReviewStatus`
- `draft`
- `needs_source_review`
- `needs_tone_review`
- `needs_parent_trust_review`
- `approved_for_prototype`
- `approved_for_private_beta`
- `approved_for_public_beta`
- `blocked`

### `ContentReleasePhase`
- `private_alpha`
- `private_beta`
- `public_beta`
- `paid_v1`
- `later_phase`
- `long_term_moat`

---

## Required fields

### BaseStoryIdea (required field contract)

- `baseStoryId`
- `title`
- `contentWorld`
- `contentType`
- `sourceSensitivityTier`
- `primaryValue`
- `supportingValue`
- `sourceSummary`
- `parentSourceNote`
- `authenticityRisk`
- `ageBandCoverage`
- `releasePriority`
- `reviewStatus`
- `notes`

### StoryExperience (required field contract + conditional review metadata)

- `storyExperienceId`
- `baseStoryId`
- `slug`
- `title`
- `ageBand`
- `contentWorld`
- `contentLabel`
- `sourceSensitivityTier`
- `sourceNote`
- `parentSourceNote`
- `primaryValue`
- `supportingValue`
- `carryingWord`
- `panels`
- `ritual`
- `pause`
- `quiz`
- `badge`
- `parentReflectionPrompt`
- `parentMeaning`
- `bedtimeReflection`
- `estimatedDurationMinutes`
- `releasePhase`
- `reviewStatus`
- `createdBy`
- `reviewedBy`
- `lastReviewedAt`

---

## Value taxonomy rules

1. `primaryValue` is required for every `StoryExperience`.
2. `supportingValue` is optional.
3. Younger experiences should avoid value overload (prefer one strong primary value and at most one supporting value).
4. Values should map to value taxonomy guidance in `docs/CONTENT_UNIVERSE_MAP.md`.
5. `carryingWord` should usually mirror or simplify `primaryValue` into child-friendly language.

---

## Submodels

### RitualMoment
- `ritualTitle`
- `ritualPhrase`
- `transliteration`
- `meaning`
- `childInstruction`
- `parentMeaning`
- `authenticityNote`
- `isChant`
- `isOriginalPracticePhrase`
- `safetyNotes`

### PauseMoment
- `pausePrompt`
- `breathPrompt`
- `reflectionPrompt`
- `durationSeconds`
- `noCountdown`
- `noAudio`
- `lowStimulation`

### QuizMoment
- `question`
- `options`
- `correctOptionId`
- `explanation`
- `toneSafetyNote`

### ParentMirror
- `parentReflectionPrompt`
- `whyThisMatters`
- `suggestedConversationStarter`
- `familyPracticePrompt`
- `privacySafeShareSummary`

### BedtimeReflection
- `bedtimeTitle`
- `bedtimeReflectionPrompt`
- `gratitudePrompt`
- `parentChildClosingLine`
- `lowStimulationNote`

---

## Source note field semantics

- `sourceNote` = internal/source-facing editorial provenance/context note used by content/review teams.
- `parentSourceNote` = short parent-facing trust note suitable for parent-visible surfaces.

---

## Validation rules (v2 governance expectations)

1. Every `StoryExperience` must have `contentLabel`.
2. Every `StoryExperience` must have `sourceSensitivityTier`.
3. Tier 1 or Tier 2 experiences must include a `parentSourceNote`.
4. Tier 1 content cannot be approved without source review.
5. Original stories must not imply canonical provenance.
6. Sacred figures must not include invented quotes.
7. Every `StoryExperience` must have exactly one `primaryValue`.
8. Every `StoryExperience` must have `carryingWord`.
9. Every `StoryExperience` must have `reviewStatus`.
10. No public child-data fields in this model.
11. No `childName` or `parentName` fields in this model.
12. `createdBy` is required.
13. `reviewedBy` and `lastReviewedAt` are optional while `reviewStatus` is `draft`, `needs_source_review`, `needs_tone_review`, `needs_parent_trust_review`, or `blocked`.
14. `reviewedBy` and `lastReviewedAt` are required when `reviewStatus` is `approved_for_private_beta` or `approved_for_public_beta`.

---

## Migration approach (staged, non-breaking)

1. **Current v1 runtime schema remains unchanged** for now.
2. v2 is a **planning/spec schema** for content operations and future migration.
3. Future migration should be **staged**, not big-bang:
   - Stage A: authoring + validation docs/tooling,
   - Stage B: shadow mapping of existing content,
   - Stage C: selective runtime adaptation,
   - Stage D: full adoption once stable.
4. Existing Vrindavan stories should later be mapped into v2 fields.
5. Preserve and do not break current flow: **Story → Ritual → Pause → Quiz → Completion**.

---

## Illustrative TypeScript-style interfaces (non-runtime)

```ts
// Illustrative only — not runtime implementation.
type AgeBand = 'ages_3_5' | 'ages_6_8' | 'ages_9_12';

type ContentWorld =
  | 'vrindavan_krishna'
  | 'ganesha'
  | 'hanuman'
  | 'ramayana'
  | 'mahabharata'
  | 'shiva_parvati'
  | 'devi_shakti'
  | 'saraswati'
  | 'panchatantra_niti'
  | 'jataka_compassion'
  | 'saints_bhakti'
  | 'festivals'
  | 'everyday_little_dharma'
  | 'nature_gratitude_family_school'
  | 'bedtime_morning_rituals';

type ContentLabel =
  | 'canonical_story'
  | 'traditional_retelling'
  | 'festival_cultural_context'
  | 'original_little_dharma_story'
  | 'everyday_values_story'
  | 'bedtime_reflection'
  | 'parent_child_ritual';

type SourceSensitivityTier =
  | 'tier_1_canonical_sacred'
  | 'tier_2_traditional_retelling'
  | 'tier_3_cultural_festival'
  | 'tier_4_original_values'
  | 'tier_5_everyday_modern';

type ReviewStatus =
  | 'draft'
  | 'needs_source_review'
  | 'needs_tone_review'
  | 'needs_parent_trust_review'
  | 'approved_for_prototype'
  | 'approved_for_private_beta'
  | 'approved_for_public_beta'
  | 'blocked';

type ContentReleasePhase =
  | 'private_alpha'
  | 'private_beta'
  | 'public_beta'
  | 'paid_v1'
  | 'later_phase'
  | 'long_term_moat';

interface BaseStoryIdea {
  baseStoryId: string;
  title: string;
  contentWorld: ContentWorld;
  contentType: string;
  sourceSensitivityTier: SourceSensitivityTier;
  primaryValue: string;
  supportingValue?: string;
  sourceSummary: string;
  parentSourceNote: string;
  authenticityRisk: 'low' | 'medium' | 'high';
  ageBandCoverage: AgeBand[];
  releasePriority: number;
  reviewStatus: ReviewStatus;
  notes: string;
}
```

```ts
// Illustrative only — not runtime implementation.
interface StoryExperience {
  storyExperienceId: string;
  baseStoryId: string;
  slug: string;
  title: string;
  ageBand: AgeBand;
  contentWorld: ContentWorld;
  contentLabel: ContentLabel;
  sourceSensitivityTier: SourceSensitivityTier;
  sourceNote: string;
  parentSourceNote: string;
  primaryValue: string;
  supportingValue?: string;
  carryingWord: string;
  panels: Array<{ panelId: string; text: string; illustrationHint?: string }>;
  ritual: RitualMoment;
  pause: PauseMoment;
  quiz: QuizMoment;
  badge: { badgeId: string; badgeTitle: string; badgeMeaning: string };
  parentReflectionPrompt: string;
  parentMeaning: string;
  bedtimeReflection: BedtimeReflection;
  estimatedDurationMinutes: number;
  releasePhase: ContentReleasePhase;
  reviewStatus: ReviewStatus;
  createdBy: string;
  reviewedBy?: string; // Required when reviewStatus is approved_for_private_beta/public_beta
  lastReviewedAt?: string; // Required when reviewStatus is approved_for_private_beta/public_beta (ISO8601)
}
```

---

## Illustrative example record (not runtime data)

> **Illustrative only. Do not add this directly to runtime seed data.**

```json
{
  "storyExperienceId": "vrk_helping_friend_ages_6_8_v1",
  "baseStoryId": "vrk_helping_friend_base",
  "slug": "krishna-helping-a-friend",
  "title": "Krishna Helps a Friend",
  "ageBand": "ages_6_8",
  "contentWorld": "vrindavan_krishna",
  "contentLabel": "traditional_retelling",
  "sourceSensitivityTier": "tier_2_traditional_retelling",
  "sourceNote": "Internal note: child-friendly traditional retelling inspired by Bhakti storytelling themes; wording adapted for age appropriateness.",
  "parentSourceNote": "Parent note: this is a respectful traditional retelling in simple child-friendly language.",
  "primaryValue": "kindness",
  "supportingValue": "friendship",
  "carryingWord": "Kindness",
  "panels": [
    { "panelId": "p1", "text": "In Vrindavan, Krishna noticed a friend feeling worried." },
    { "panelId": "p2", "text": "He listened quietly and stayed close with care." },
    { "panelId": "p3", "text": "Together they found a small helpful action to do." }
  ],
  "ritual": {
    "ritualTitle": "Hands of Kindness",
    "ritualPhrase": "I choose kind hands and kind words.",
    "transliteration": "",
    "meaning": "Kindness can be practiced with both words and actions.",
    "childInstruction": "Place one hand on your heart and take one gentle breath.",
    "parentMeaning": "Grounds kindness in embodied calm before action.",
    "authenticityNote": "Original Little Dharma practice phrase, not a scripture quote.",
    "isChant": false,
    "isOriginalPracticePhrase": true,
    "safetyNotes": "Keep breath cue optional and pressure-free."
  },
  "pause": {
    "pausePrompt": "Let the story rest in your heart.",
    "breathPrompt": "Take one quiet breath.",
    "reflectionPrompt": "Where can you be kind today?",
    "durationSeconds": 13,
    "noCountdown": true,
    "noAudio": true,
    "lowStimulation": true
  },
  "quiz": {
    "question": "What did Krishna do first?",
    "options": [
      { "id": "a", "label": "He listened with care." },
      { "id": "b", "label": "He rushed away quickly." }
    ],
    "correctOptionId": "a",
    "explanation": "Listening kindly is often the first step in helping.",
    "toneSafetyNote": "Use encouraging, non-shaming feedback."
  },
  "badge": {
    "badgeId": "kind-heart-lotus",
    "badgeTitle": "Kind Heart Lotus",
    "badgeMeaning": "You practiced kindness with calm attention."
  },
  "parentReflectionPrompt": "Where did your child show kindness today?",
  "parentMeaning": "Naming one small kind act strengthens repeat behavior.",
  "bedtimeReflection": {
    "bedtimeTitle": "Kindness at Day's End",
    "bedtimeReflectionPrompt": "What kind moment do you remember tonight?",
    "gratitudePrompt": "Whom do you feel thankful for today?",
    "parentChildClosingLine": "May our home rest in kindness tonight.",
    "lowStimulationNote": "Keep tone soft, brief, and unrushed."
  },
  "estimatedDurationMinutes": 8,
  "releasePhase": "private_beta",
  "reviewStatus": "needs_parent_trust_review",
  "createdBy": "content_team",
  "reviewedBy": "",
  "lastReviewedAt": ""
}
```

---

## Scale path: how v2 supports roadmap phases

- **21–30 story private beta:** v2 provides consistent metadata and review gates to ship small but high-trust sets.
- **60–100 story public beta:** v2 enables predictable age-band varianting and authenticity labeling across multiple worlds.
- **150–250 paid v1:** v2 supports durable editorial workflows, parent-facing source notes, and reusable submodels for quality consistency.
- **1,000+ long-term experiences:** v2 separates base concepts from age-specific experiences, enabling combinatorial scale without sacrificing governance.

## Final note

This v2 model is intentionally structured to increase content-system clarity and trust while preserving current app runtime behavior until a staged migration sprint is approved.
