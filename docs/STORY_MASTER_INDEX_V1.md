# Story Master Index v1 (Sprint 39)

## Purpose
Sprint 39 creates the first concrete, reviewable **master content inventory** for the 1,000+ story strategy. This sprint intentionally delivers a planning/index artifact, not runtime features, so the team can scale content depth with authenticity discipline before story production accelerates.

> Note: Sprint 40 production pipeline now consumes this index as the controlled intake source for story production briefs and age-band drafting.

## Why this sprint is an index sprint (not 1,050 full stories)
Writing 1,050 full experiences in one sprint would reduce quality and increase authenticity risk. Instead, Sprint 39 defines high-quality **BaseStoryIdea** units that each map to three planned age-band variants (`ages_3_5`, `ages_6_8`, `ages_9_12`). This locks strategic coverage and sequencing while preserving editorial review gates.

## Master index totals
- Total base ideas: **450**
- Planned experiences per base idea: **3**
- Implied planned story experiences: **1,350**
- CSV source: `docs/content/story-master-index-v1.csv`

## Content-world distribution (base ideas)
- vrindavan_krishna: 40
- ganesha: 30
- hanuman: 30
- ramayana: 40
- mahabharata: 40
- shiva_parvati: 25
- devi_shakti: 25
- saraswati: 20
- panchatantra_niti: 35
- jataka_compassion: 20
- saints_bhakti: 25
- festivals: 30
- everyday_little_dharma: 40
- nature_gratitude_family_school: 30
- bedtime_morning_rituals: 20

## Value distribution
All 20 target values are represented with near-even distribution across the 450 base ideas (22–23 ideas each primary value), intentionally avoiding over-concentration in only kindness/courage/gratitude.

## Release-phase distribution
- private_alpha: 127
- private_beta: 24
- public_beta: 128
- paid_v1: 23
- later_phase: 125
- long_term_moat: 23

## Source-sensitivity distribution
- tier_1_canonical_sacred: 31
- tier_2_traditional_retelling: 299
- tier_3_cultural_festival: 30
- tier_4_original_values: 28
- tier_5_everyday_modern: 62

High-sensitivity rows are conservatively worded and usually tagged `needs_source_review`.

## How this supports roadmap stages
- **Private beta:** structured, moderate-risk clusters available quickly from approved or near-approval rows.
- **Public beta:** broader world spread and ritual habit variety without sacrificing review discipline.
- **Paid v1:** deeper multi-world catalog and age-band breadth as a substantive value proposition.
- **Long-term moat:** index architecture enables scalable expansion while preserving authenticity controls.

## How Sprint 40 pipeline v1 will use this index
Sprint 40 should use this index as intake:
1. Pull rows by `releasePhase` + `releasePriority`.
2. Route high-sensitivity rows to source review first.
3. Draft age-band variants per `ageBandCoverage`.
4. Progress rows through `reviewStatus` gates.
5. Promote approved rows to production batches.

## How Sprints 41+ should select stories
- Start with rows marked `private_beta` + `P1/P2` and moderate/low authenticity risk.
- Maintain cross-world diversity each sprint.
- Keep balanced value taxonomy over each batch.
- Include a controlled percentage of high-sensitivity items with explicit source review.

## Index Quality Rules
- No duplicate ideas with minor wording edits.
- Every row has one clear `primaryValue`.
- Every row includes 3-age coverage in `ageBandCoverage`.
- Every row includes `parentSourceNote` discipline.
- Every row has `reviewStatus`.
- Every row has `releasePhase`.
- High-sensitivity content is not marked release-ready without review.

## Private Beta Candidate Set (24 base stories)
Mostly ages_6_8 first adaptation candidates.

| baseStoryId | title | world | primaryValue | Why private beta |
|---|---|---|---|---|
| BSI-0001 | vrindavan krishna story seed 1 | vrindavan_krishna | kindness | Familiar devotional setting + low complexity adaptation path |
| BSI-0003 | vrindavan krishna story seed 3 | vrindavan_krishna | truth | Strong parent-child discussion potential |
| BSI-0008 | vrindavan krishna story seed 8 | vrindavan_krishna | friendship | Supports ritual habit through warm social value |
| BSI-0042 | ganesha story seed 2 | ganesha | courage | High child delight; easy narrative clarity |
| BSI-0046 | ganesha story seed 6 | ganesha | devotion | Good ritual bridge opportunities |
| BSI-0053 | ganesha story seed 13 | ganesha | compassion | Balanced emotional depth for 6–8 |
| BSI-0071 | hanuman story seed 1 | hanuman | forgiveness | Strong action + reflection blend |
| BSI-0075 | hanuman story seed 5 | hanuman | curiosity | Supports engaging quiz prompts |
| BSI-0082 | hanuman story seed 12 | hanuman | self-control | Useful for daily behavior carryover |
| BSI-0101 | ramayana story seed 1 | ramayana | kindness | Foundational epic familiarity for families |
| BSI-0107 | ramayana story seed 7 | ramayana | devotion | Devotional tone with review controls |
| BSI-0114 | ramayana story seed 14 | ramayana | respect | Parent trust potential when reviewed |
| BSI-0141 | mahabharata story seed 1 | mahabharata | kindness | High discussion depth, controlled adaptation |
| BSI-0149 | mahabharata story seed 9 | mahabharata | generosity | Values-forward framing works for pilot |
| BSI-0156 | mahabharata story seed 16 | mahabharata | responsibility | Strong parent mirror potential |
| BSI-0311 | festivals story seed 1 | festivals | kindness | Seasonal relevance and family ritual fit |
| BSI-0316 | festivals story seed 6 | festivals | humility | Practical context for parent co-reading |
| BSI-0341 | everyday little dharma story seed 1 | everyday_little_dharma | kindness | Low authenticity risk, fast production |
| BSI-0348 | everyday little dharma story seed 8 | everyday_little_dharma | friendship | Daily school/home relevance |
| BSI-0357 | everyday little dharma story seed 17 | everyday_little_dharma | calm | Bedtime and regulation crossover |
| BSI-0391 | nature gratitude family school story seed 1 | nature_gratitude_family_school | kindness | Grounded family context |
| BSI-0399 | nature gratitude family school story seed 9 | nature_gratitude_family_school | generosity | Ritual carry-word clarity |
| BSI-0431 | bedtime morning rituals story seed 1 | bedtime_morning_rituals | kindness | Immediate bedtime/morning loop utility |
| BSI-0437 | bedtime morning rituals story seed 7 | bedtime_morning_rituals | devotion | Gentle reflection + habit potential |

## Public Beta Candidate Set (cluster view, 60–100 later experiences)
- **Vrindavan Core Cluster (10–12 base ideas)**: emotion-rich Krishna devotional retellings with careful source review.
- **Ganesha Learning Cluster (8–10 base ideas)**: obstacle, focus, and humility arcs for repeatable ritual practice.
- **Hanuman Courage Cluster (8–10 base ideas)**: courage/self-control/devotion arcs for energetic readers.
- **Everyday Values Cluster (12–15 base ideas)**: home/school originals with low authenticity risk and fast throughput.
- **Bedtime & Family Ritual Cluster (8–10 base ideas)**: calm transitions, gratitude, reflection, and parent-child closings.
- **Festival Context Cluster (6–8 base ideas)**: calendar-based family context stories with regional-variation safe notes.

## Paid v1 Candidate Set (cluster view, 150–250 later experiences)
- Multi-world epic-and-values pack drawing from Vrindavan, Ramayana, Mahabharata, Ganesha, Hanuman, Shiva-Parvati, Devi, Saraswati.
- Wisdom-and-niti pack from Panchatantra + selected Jataka + saints_bhakti.
- Family-practice pack from everyday, nature/family/school, and bedtime/morning ritual worlds.
- All packs planned with full 3-band variants (`ages_3_5`, `ages_6_8`, `ages_9_12`) and review progression gates.

## Validation
Run dependency-free validation:

```bash
node scripts/validate-story-master-index.mjs
```
