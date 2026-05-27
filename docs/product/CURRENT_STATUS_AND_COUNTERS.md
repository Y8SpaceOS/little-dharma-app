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

- krishna_stories: 141
- missing: 15
- ramayana_journey: 100
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
- readinessStatus.metadata_only: 396
- readinessStatus.missing: 235

### Audio readiness breakdown

- audioStatus.script_ready: 155
- audioStatus.script_needed: 441
- audioStatus.missing: 235
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

- 220 stories in registry still do not yet carry explicit `readinessStatus` and `audioStatus` on the record itself; these continue to appear under `missing` until their owning packs are normalized in future PRs.
- `getContentRegistryCoverageSummary()` does not enumerate story-pack IDs directly, so pack coverage is validated structurally in this audit script rather than summary-text matching.

### Next recommended content-system action

Continue phased metadata normalization for remaining legacy packs so `readinessStatus.missing` and `audioStatus.missing` converge to zero without changing runtime behavior or promoting stories to `runtime_ready`.
