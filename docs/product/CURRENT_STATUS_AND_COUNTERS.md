# Current Status and Counters

## Purpose

This document gives future agents a quick current-state snapshot. It should be updated whenever major content packs or roadmap milestones merge.

## Latest known repo status

As of the project conversation handoff:

- PR #154 through PR #158 established content governance, indexing, import, runtime, and audio gates.
- PR #159 added Ramayana Expansion Recovery Pack v1.
- PR #160 fixed the Vrindavan journey launch crash.
- GitHub PR #162 added Krishna Childhood Expansion Recovery Pack v1.
- PR #163 added Ganesha + Hanuman Expansion Pack v1.
- PR #164 added Product Handoff Docs v1.
- PR #165 added Design Screen Reference Governance v1.
- PR #166 clarified that the 1-487 screen system is the product visual and experiential north star.

## Recovery content additions

| Pack | Indexed stories | QA-staged runtime candidates | Audio candidates |
|---|---:|---:|---:|
| Ramayana Expansion Recovery Pack v1 | 100 | 40 | 25 |
| Krishna Childhood Expansion Recovery Pack v1 | 120 | 45 | 30 |
| Ganesha + Hanuman Expansion Pack v1 | 100 | 35+ | 25 |
| Total recovery additions | 420 | 155+ | 105 |

## PR #207 target

| Target | Required by PR #207 |
|---|---:|
| Indexed story experiences | 1,000+ |
| Runtime-ready or QA-staged runtime candidates | 450+ |
| Audio-ready scripts | 350+ |
| Strong Dharma Journeys | 6-8 |

## Approximate gap after PR #163

This table counts only the known recovery additions above, not any pre-existing app content.

| Target | Known recovery additions | Remaining gap before pre-existing content adjustments |
|---|---:|---:|
| Indexed story experiences | 320 | 680 |
| Runtime-ready or QA-staged runtime candidates | 120+ | 330 |
| Audio-ready scripts | 80 | 270 |

A future Content Counter Audit should calculate exact repo totals from `contentRegistryStories`, Story Experience Index, runtime gates, and audio gates.

## Important caveat

Content counts are useful only if quality is real. Generic title-substitution shells must not be counted as runtime progress.

## Next recommended audit

Add a dedicated counter audit PR after several more content packs:

- Count indexed story experiences.
- Count QA-staged runtime candidates.
- Count runtime-ready stories if any.
- Count audio-script-ready candidates.
- Count journey coverage.
- Count category coverage.
- Report exact gap to PR #207.


## PR #168 update

- Bedtime + Values Expansion Pack v1 added 100 indexed stories, 35 QA-staged runtime candidates, and 25 audio-script-ready candidates in local-first mode.


## PR #169 update

- Festival Stories Expansion Pack v1 added 100 indexed stories, 35 QA-staged runtime candidates, and 25 audio-script-ready candidates in local-first mode with no runtime-ready promotion.


## PR #170 update

- Bhagavad Gita for Children Expansion Pack v1 added 100 indexed stories, 35 QA-staged runtime candidates, and 30 audio-script-ready candidates in local-first mode with no runtime-ready promotion.
- Recovery totals after PR #170 are approximately 620 indexed, 225+ QA-staged runtime candidates, and 160 audio-script-ready candidates.


## PR #171 update

- Mahabharata Child-Safe Expansion Pack v1 added 100 indexed stories, 35 QA-staged runtime candidates, and 25 audio-script-ready candidates in local-first mode with no runtime-ready promotion.
- Recovery totals after PR #171 are approximately 720 indexed, 260+ QA-staged runtime candidates, and 185 audio-script-ready candidates.


## PR #172 update

- Shloka + Mantra Meaning Expansion Pack v1 added 75 indexed stories, 25 QA-staged runtime candidates, and 25 audio-script-ready candidates in local-first mode with no runtime-ready promotion.
- Approximate totals after PR #172 are 795 indexed, 285+ QA-staged runtime candidates, and 210 audio-script-ready candidates.


## Content Registry Audit after PR #172

Audit source: `npm run validate:content-registry-counters-v1` using canonical registry exports.

### Exact totals

- Total registered stories: **831**
- Total story packs: **12**
- Total journeys: **11**

### Category breakdown (`primaryCategoryId`)

- missing: 36
- ramayana_journey: 100
- krishna_stories: 120
- ganesha_stories: 50
- hanuman_stories: 50
- bedtime_stories: 50
- values_stories: 50
- festival_stories: 100
- bhagavad_gita_for_children: 100
- mahabharata_child_safe: 100
- shloka_mantra_meanings: 75

### Status breakdown

- status.indexed: 531
- status.qa_ready: 300
- readinessStatus.qa_ready: 200
- readinessStatus.metadata_only: 375
- readinessStatus.missing: 256

### Audio readiness breakdown

- audioStatus.script_ready: 155
- audioStatus.script_needed: 420
- audioStatus.missing: 256
- audio_script_ready_count: 155

### Journey coverage

- Journey-linked stories: 831
- Stories without `journeyId`: 0
- Missing journey references: 0
- Orphan journeys: 0

### Integrity gate snapshot

- duplicate story IDs: none
- duplicate pack IDs: none
- duplicate journey IDs: none
- missing pack references: none
- non-canonical categories: none
- runtime-ready stories: 0
- published-local stories: 0

### Known limitations

- 36 legacy stories in registry do not yet carry `primaryCategoryId`, `readinessStatus`, or `audioStatus` on the record itself; they appear as `missing` in category/readiness/audio breakdowns.
- `getContentRegistryCoverageSummary()` does not enumerate story-pack IDs directly, so pack coverage is validated structurally in this audit script rather than summary-text matching.

### Next recommended content-system action

Normalize the 36 legacy registry stories to explicit Story Experience Index fields (`primaryCategoryId`, `readinessStatus`, `audioStatus`) so all governance counters are fully field-backed and no longer reported under `missing`.
