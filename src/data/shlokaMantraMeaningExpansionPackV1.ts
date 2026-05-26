import type { DharmaJourney, Story, StoryPack } from '@/types/contentModel';

type ExtendedStory = Story & { storyId: string; primaryCategoryId: string; secondaryCategoryIds: string[]; readinessStatus: 'metadata_only' | 'qa_ready'; audioStatus: 'script_needed' | 'script_ready'; journeyStatus: 'journey_ordered'; sacredRespectNotes: string; audioScript?: { narrationScript: string; voiceDirection: string; pronunciationNotes: string; pacingNotes: string; audioReadinessIntent: 'ready' }; };

export const shlokaMantraMeaningExpansionPackV1Stories: ExtendedStory[] = [
  {
    "id": "shloka-mantra-meaning-exp-v1-001",
    "storyId": "shloka-mantra-meaning-exp-v1-001",
    "slug": "shloka-mantra-meaning-exp-v1-001",
    "title": "Morning Gratitude Mantra Meaning",
    "shortTitle": "Morning Gratitude",
    "summary": "This shloka/mantra reminds children to practice gratitude with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 1,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Morning Gratitude — Sacred Context",
        "text": "A parent introduces the morning gratitude shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Morning Gratitude — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice gratitude with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Morning Gratitude — Daily Practice",
        "text": "The child tries one small action of gratitude, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Morning Gratitude — Reflection",
        "text": "Together, parent and child reflect on how gratitude can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is gratitude, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice gratitude with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of gratitude feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on morning gratitude with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims.",
    "audioScript": {
      "narrationScript": "Morning Gratitude Mantra Meaning. This shloka/mantra reminds children to practice gratitude with gratitude, calm, and respect in everyday life. A parent helps the child reflect on one gentle action of gratitude. The focus is calm understanding, gratitude, and devotion, without pressure to recite perfectly.",
      "voiceDirection": "Warm, grounded, and reverent.",
      "pronunciationNotes": "No pronunciation scoring. Keep words simple and child-safe.",
      "pacingNotes": "Leave short pauses for parent-child reflection after each sentence.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-002",
    "storyId": "shloka-mantra-meaning-exp-v1-002",
    "slug": "shloka-mantra-meaning-exp-v1-002",
    "title": "Peace Before Study Mantra Meaning",
    "shortTitle": "Peace Before Study",
    "summary": "This shloka/mantra reminds children to practice focus with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 2,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Focus",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Peace Before Study — Sacred Context",
        "text": "A parent introduces the peace before study shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Peace Before Study — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice focus with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Peace Before Study — Daily Practice",
        "text": "The child tries one small action of focus, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Peace Before Study — Reflection",
        "text": "Together, parent and child reflect on how focus can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is focus, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice focus with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of focus feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on peace before study with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims.",
    "audioScript": {
      "narrationScript": "Peace Before Study Mantra Meaning. This shloka/mantra reminds children to practice focus with gratitude, calm, and respect in everyday life. A parent helps the child reflect on one gentle action of focus. The focus is calm understanding, gratitude, and devotion, without pressure to recite perfectly.",
      "voiceDirection": "Warm, grounded, and reverent.",
      "pronunciationNotes": "No pronunciation scoring. Keep words simple and child-safe.",
      "pacingNotes": "Leave short pauses for parent-child reflection after each sentence.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-003",
    "storyId": "shloka-mantra-meaning-exp-v1-003",
    "slug": "shloka-mantra-meaning-exp-v1-003",
    "title": "Kind Speech Mantra Meaning",
    "shortTitle": "Kind Speech",
    "summary": "This shloka/mantra reminds children to practice kindness with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 3,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Kind Speech — Sacred Context",
        "text": "A parent introduces the kind speech shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Kind Speech — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice kindness with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Kind Speech — Daily Practice",
        "text": "The child tries one small action of kindness, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Kind Speech — Reflection",
        "text": "Together, parent and child reflect on how kindness can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is kindness, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice kindness with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of kindness feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on kind speech with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims.",
    "audioScript": {
      "narrationScript": "Kind Speech Mantra Meaning. This shloka/mantra reminds children to practice kindness with gratitude, calm, and respect in everyday life. A parent helps the child reflect on one gentle action of kindness. The focus is calm understanding, gratitude, and devotion, without pressure to recite perfectly.",
      "voiceDirection": "Warm, grounded, and reverent.",
      "pronunciationNotes": "No pronunciation scoring. Keep words simple and child-safe.",
      "pacingNotes": "Leave short pauses for parent-child reflection after each sentence.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-004",
    "storyId": "shloka-mantra-meaning-exp-v1-004",
    "slug": "shloka-mantra-meaning-exp-v1-004",
    "title": "Service With Humility Mantra Meaning",
    "shortTitle": "Service With Humility",
    "summary": "This shloka/mantra reminds children to practice humility with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 4,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Service With Humility — Sacred Context",
        "text": "A parent introduces the service with humility shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Service With Humility — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice humility with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Service With Humility — Daily Practice",
        "text": "The child tries one small action of humility, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Service With Humility — Reflection",
        "text": "Together, parent and child reflect on how humility can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is humility, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice humility with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of humility feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on service with humility with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims.",
    "audioScript": {
      "narrationScript": "Service With Humility Mantra Meaning. This shloka/mantra reminds children to practice humility with gratitude, calm, and respect in everyday life. A parent helps the child reflect on one gentle action of humility. The focus is calm understanding, gratitude, and devotion, without pressure to recite perfectly.",
      "voiceDirection": "Warm, grounded, and reverent.",
      "pronunciationNotes": "No pronunciation scoring. Keep words simple and child-safe.",
      "pacingNotes": "Leave short pauses for parent-child reflection after each sentence.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-005",
    "storyId": "shloka-mantra-meaning-exp-v1-005",
    "slug": "shloka-mantra-meaning-exp-v1-005",
    "title": "Calm Breathing Prayer Mantra Meaning",
    "shortTitle": "Calm Breathing Prayer",
    "summary": "This shloka/mantra reminds children to practice calm with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 5,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Calm Breathing Prayer — Sacred Context",
        "text": "A parent introduces the calm breathing prayer shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Calm Breathing Prayer — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice calm with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Calm Breathing Prayer — Daily Practice",
        "text": "The child tries one small action of calm, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Calm Breathing Prayer — Reflection",
        "text": "Together, parent and child reflect on how calm can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is calm, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice calm with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of calm feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on calm breathing prayer with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims.",
    "audioScript": {
      "narrationScript": "Calm Breathing Prayer Mantra Meaning. This shloka/mantra reminds children to practice calm with gratitude, calm, and respect in everyday life. A parent helps the child reflect on one gentle action of calm. The focus is calm understanding, gratitude, and devotion, without pressure to recite perfectly.",
      "voiceDirection": "Warm, grounded, and reverent.",
      "pronunciationNotes": "No pronunciation scoring. Keep words simple and child-safe.",
      "pacingNotes": "Leave short pauses for parent-child reflection after each sentence.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-006",
    "storyId": "shloka-mantra-meaning-exp-v1-006",
    "slug": "shloka-mantra-meaning-exp-v1-006",
    "title": "Respect for Parents Mantra Meaning",
    "shortTitle": "Respect for Parents",
    "summary": "This shloka/mantra reminds children to practice respect with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 6,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Respect",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Respect for Parents — Sacred Context",
        "text": "A parent introduces the respect for parents shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Respect for Parents — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice respect with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Respect for Parents — Daily Practice",
        "text": "The child tries one small action of respect, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Respect for Parents — Reflection",
        "text": "Together, parent and child reflect on how respect can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is respect, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice respect with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of respect feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on respect for parents with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims.",
    "audioScript": {
      "narrationScript": "Respect for Parents Mantra Meaning. This shloka/mantra reminds children to practice respect with gratitude, calm, and respect in everyday life. A parent helps the child reflect on one gentle action of respect. The focus is calm understanding, gratitude, and devotion, without pressure to recite perfectly.",
      "voiceDirection": "Warm, grounded, and reverent.",
      "pronunciationNotes": "No pronunciation scoring. Keep words simple and child-safe.",
      "pacingNotes": "Leave short pauses for parent-child reflection after each sentence.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-007",
    "storyId": "shloka-mantra-meaning-exp-v1-007",
    "slug": "shloka-mantra-meaning-exp-v1-007",
    "title": "Light in the Heart Mantra Meaning",
    "shortTitle": "Light in the Heart",
    "summary": "This shloka/mantra reminds children to practice devotion with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 7,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Devotion",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Light in the Heart — Sacred Context",
        "text": "A parent introduces the light in the heart shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Light in the Heart — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice devotion with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Light in the Heart — Daily Practice",
        "text": "The child tries one small action of devotion, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Light in the Heart — Reflection",
        "text": "Together, parent and child reflect on how devotion can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is devotion, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice devotion with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of devotion feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on light in the heart with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims.",
    "audioScript": {
      "narrationScript": "Light in the Heart Mantra Meaning. This shloka/mantra reminds children to practice devotion with gratitude, calm, and respect in everyday life. A parent helps the child reflect on one gentle action of devotion. The focus is calm understanding, gratitude, and devotion, without pressure to recite perfectly.",
      "voiceDirection": "Warm, grounded, and reverent.",
      "pronunciationNotes": "No pronunciation scoring. Keep words simple and child-safe.",
      "pacingNotes": "Leave short pauses for parent-child reflection after each sentence.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-008",
    "storyId": "shloka-mantra-meaning-exp-v1-008",
    "slug": "shloka-mantra-meaning-exp-v1-008",
    "title": "Friendship Blessing Mantra Meaning",
    "shortTitle": "Friendship Blessing",
    "summary": "This shloka/mantra reminds children to practice kindness with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 8,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Friendship Blessing — Sacred Context",
        "text": "A parent introduces the friendship blessing shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Friendship Blessing — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice kindness with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Friendship Blessing — Daily Practice",
        "text": "The child tries one small action of kindness, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Friendship Blessing — Reflection",
        "text": "Together, parent and child reflect on how kindness can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is kindness, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice kindness with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of kindness feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on friendship blessing with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims.",
    "audioScript": {
      "narrationScript": "Friendship Blessing Mantra Meaning. This shloka/mantra reminds children to practice kindness with gratitude, calm, and respect in everyday life. A parent helps the child reflect on one gentle action of kindness. The focus is calm understanding, gratitude, and devotion, without pressure to recite perfectly.",
      "voiceDirection": "Warm, grounded, and reverent.",
      "pronunciationNotes": "No pronunciation scoring. Keep words simple and child-safe.",
      "pacingNotes": "Leave short pauses for parent-child reflection after each sentence.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-009",
    "storyId": "shloka-mantra-meaning-exp-v1-009",
    "slug": "shloka-mantra-meaning-exp-v1-009",
    "title": "Patience in Waiting Mantra Meaning",
    "shortTitle": "Patience in Waiting",
    "summary": "This shloka/mantra reminds children to practice focus with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 9,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Focus",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Patience in Waiting — Sacred Context",
        "text": "A parent introduces the patience in waiting shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Patience in Waiting — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice focus with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Patience in Waiting — Daily Practice",
        "text": "The child tries one small action of focus, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Patience in Waiting — Reflection",
        "text": "Together, parent and child reflect on how focus can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is focus, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice focus with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of focus feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on patience in waiting with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims.",
    "audioScript": {
      "narrationScript": "Patience in Waiting Mantra Meaning. This shloka/mantra reminds children to practice focus with gratitude, calm, and respect in everyday life. A parent helps the child reflect on one gentle action of focus. The focus is calm understanding, gratitude, and devotion, without pressure to recite perfectly.",
      "voiceDirection": "Warm, grounded, and reverent.",
      "pronunciationNotes": "No pronunciation scoring. Keep words simple and child-safe.",
      "pacingNotes": "Leave short pauses for parent-child reflection after each sentence.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-010",
    "storyId": "shloka-mantra-meaning-exp-v1-010",
    "slug": "shloka-mantra-meaning-exp-v1-010",
    "title": "Gratitude for Food Mantra Meaning",
    "shortTitle": "Gratitude for Food",
    "summary": "This shloka/mantra reminds children to practice gratitude with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 10,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Gratitude for Food — Sacred Context",
        "text": "A parent introduces the gratitude for food shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Gratitude for Food — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice gratitude with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Gratitude for Food — Daily Practice",
        "text": "The child tries one small action of gratitude, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Gratitude for Food — Reflection",
        "text": "Together, parent and child reflect on how gratitude can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is gratitude, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice gratitude with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of gratitude feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on gratitude for food with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims.",
    "audioScript": {
      "narrationScript": "Gratitude for Food Mantra Meaning. This shloka/mantra reminds children to practice gratitude with gratitude, calm, and respect in everyday life. A parent helps the child reflect on one gentle action of gratitude. The focus is calm understanding, gratitude, and devotion, without pressure to recite perfectly.",
      "voiceDirection": "Warm, grounded, and reverent.",
      "pronunciationNotes": "No pronunciation scoring. Keep words simple and child-safe.",
      "pacingNotes": "Leave short pauses for parent-child reflection after each sentence.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-011",
    "storyId": "shloka-mantra-meaning-exp-v1-011",
    "slug": "shloka-mantra-meaning-exp-v1-011",
    "title": "Courage With Kindness Mantra Meaning",
    "shortTitle": "Courage With Kindness",
    "summary": "This shloka/mantra reminds children to practice devotion with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 11,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Devotion",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Courage With Kindness — Sacred Context",
        "text": "A parent introduces the courage with kindness shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Courage With Kindness — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice devotion with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Courage With Kindness — Daily Practice",
        "text": "The child tries one small action of devotion, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Courage With Kindness — Reflection",
        "text": "Together, parent and child reflect on how devotion can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is devotion, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice devotion with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of devotion feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on courage with kindness with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims.",
    "audioScript": {
      "narrationScript": "Courage With Kindness Mantra Meaning. This shloka/mantra reminds children to practice devotion with gratitude, calm, and respect in everyday life. A parent helps the child reflect on one gentle action of devotion. The focus is calm understanding, gratitude, and devotion, without pressure to recite perfectly.",
      "voiceDirection": "Warm, grounded, and reverent.",
      "pronunciationNotes": "No pronunciation scoring. Keep words simple and child-safe.",
      "pacingNotes": "Leave short pauses for parent-child reflection after each sentence.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-012",
    "storyId": "shloka-mantra-meaning-exp-v1-012",
    "slug": "shloka-mantra-meaning-exp-v1-012",
    "title": "Truthful Words Mantra Meaning",
    "shortTitle": "Truthful Words",
    "summary": "This shloka/mantra reminds children to practice respect with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 12,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Respect",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Truthful Words — Sacred Context",
        "text": "A parent introduces the truthful words shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Truthful Words — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice respect with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Truthful Words — Daily Practice",
        "text": "The child tries one small action of respect, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Truthful Words — Reflection",
        "text": "Together, parent and child reflect on how respect can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is respect, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice respect with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of respect feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on truthful words with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims.",
    "audioScript": {
      "narrationScript": "Truthful Words Mantra Meaning. This shloka/mantra reminds children to practice respect with gratitude, calm, and respect in everyday life. A parent helps the child reflect on one gentle action of respect. The focus is calm understanding, gratitude, and devotion, without pressure to recite perfectly.",
      "voiceDirection": "Warm, grounded, and reverent.",
      "pronunciationNotes": "No pronunciation scoring. Keep words simple and child-safe.",
      "pacingNotes": "Leave short pauses for parent-child reflection after each sentence.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-013",
    "storyId": "shloka-mantra-meaning-exp-v1-013",
    "slug": "shloka-mantra-meaning-exp-v1-013",
    "title": "Helping Hands Mantra Meaning",
    "shortTitle": "Helping Hands",
    "summary": "This shloka/mantra reminds children to practice kindness with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 13,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Helping Hands — Sacred Context",
        "text": "A parent introduces the helping hands shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Helping Hands — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice kindness with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Helping Hands — Daily Practice",
        "text": "The child tries one small action of kindness, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Helping Hands — Reflection",
        "text": "Together, parent and child reflect on how kindness can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is kindness, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice kindness with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of kindness feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on helping hands with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims.",
    "audioScript": {
      "narrationScript": "Helping Hands Mantra Meaning. This shloka/mantra reminds children to practice kindness with gratitude, calm, and respect in everyday life. A parent helps the child reflect on one gentle action of kindness. The focus is calm understanding, gratitude, and devotion, without pressure to recite perfectly.",
      "voiceDirection": "Warm, grounded, and reverent.",
      "pronunciationNotes": "No pronunciation scoring. Keep words simple and child-safe.",
      "pacingNotes": "Leave short pauses for parent-child reflection after each sentence.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-014",
    "storyId": "shloka-mantra-meaning-exp-v1-014",
    "slug": "shloka-mantra-meaning-exp-v1-014",
    "title": "Evening Reflection Mantra Meaning",
    "shortTitle": "Evening Reflection",
    "summary": "This shloka/mantra reminds children to practice calm with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 14,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening Reflection — Sacred Context",
        "text": "A parent introduces the evening reflection shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Evening Reflection — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice calm with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Evening Reflection — Daily Practice",
        "text": "The child tries one small action of calm, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Evening Reflection — Reflection",
        "text": "Together, parent and child reflect on how calm can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is calm, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice calm with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of calm feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on evening reflection with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims.",
    "audioScript": {
      "narrationScript": "Evening Reflection Mantra Meaning. This shloka/mantra reminds children to practice calm with gratitude, calm, and respect in everyday life. A parent helps the child reflect on one gentle action of calm. The focus is calm understanding, gratitude, and devotion, without pressure to recite perfectly.",
      "voiceDirection": "Warm, grounded, and reverent.",
      "pronunciationNotes": "No pronunciation scoring. Keep words simple and child-safe.",
      "pacingNotes": "Leave short pauses for parent-child reflection after each sentence.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-015",
    "storyId": "shloka-mantra-meaning-exp-v1-015",
    "slug": "shloka-mantra-meaning-exp-v1-015",
    "title": "Gentle Discipline Mantra Meaning",
    "shortTitle": "Gentle Discipline",
    "summary": "This shloka/mantra reminds children to practice focus with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 15,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Focus",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Gentle Discipline — Sacred Context",
        "text": "A parent introduces the gentle discipline shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Gentle Discipline — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice focus with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Gentle Discipline — Daily Practice",
        "text": "The child tries one small action of focus, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Gentle Discipline — Reflection",
        "text": "Together, parent and child reflect on how focus can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is focus, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice focus with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of focus feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on gentle discipline with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims.",
    "audioScript": {
      "narrationScript": "Gentle Discipline Mantra Meaning. This shloka/mantra reminds children to practice focus with gratitude, calm, and respect in everyday life. A parent helps the child reflect on one gentle action of focus. The focus is calm understanding, gratitude, and devotion, without pressure to recite perfectly.",
      "voiceDirection": "Warm, grounded, and reverent.",
      "pronunciationNotes": "No pronunciation scoring. Keep words simple and child-safe.",
      "pacingNotes": "Leave short pauses for parent-child reflection after each sentence.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-016",
    "storyId": "shloka-mantra-meaning-exp-v1-016",
    "slug": "shloka-mantra-meaning-exp-v1-016",
    "title": "Compassion for All Mantra Meaning",
    "shortTitle": "Compassion for All",
    "summary": "This shloka/mantra reminds children to practice kindness with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 16,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Compassion for All — Sacred Context",
        "text": "A parent introduces the compassion for all shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Compassion for All — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice kindness with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Compassion for All — Daily Practice",
        "text": "The child tries one small action of kindness, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Compassion for All — Reflection",
        "text": "Together, parent and child reflect on how kindness can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is kindness, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice kindness with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of kindness feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on compassion for all with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims.",
    "audioScript": {
      "narrationScript": "Compassion for All Mantra Meaning. This shloka/mantra reminds children to practice kindness with gratitude, calm, and respect in everyday life. A parent helps the child reflect on one gentle action of kindness. The focus is calm understanding, gratitude, and devotion, without pressure to recite perfectly.",
      "voiceDirection": "Warm, grounded, and reverent.",
      "pronunciationNotes": "No pronunciation scoring. Keep words simple and child-safe.",
      "pacingNotes": "Leave short pauses for parent-child reflection after each sentence.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-017",
    "storyId": "shloka-mantra-meaning-exp-v1-017",
    "slug": "shloka-mantra-meaning-exp-v1-017",
    "title": "Respect for Teachers Mantra Meaning",
    "shortTitle": "Respect for Teachers",
    "summary": "This shloka/mantra reminds children to practice respect with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 17,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Respect",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Respect for Teachers — Sacred Context",
        "text": "A parent introduces the respect for teachers shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Respect for Teachers — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice respect with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Respect for Teachers — Daily Practice",
        "text": "The child tries one small action of respect, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Respect for Teachers — Reflection",
        "text": "Together, parent and child reflect on how respect can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is respect, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice respect with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of respect feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on respect for teachers with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims.",
    "audioScript": {
      "narrationScript": "Respect for Teachers Mantra Meaning. This shloka/mantra reminds children to practice respect with gratitude, calm, and respect in everyday life. A parent helps the child reflect on one gentle action of respect. The focus is calm understanding, gratitude, and devotion, without pressure to recite perfectly.",
      "voiceDirection": "Warm, grounded, and reverent.",
      "pronunciationNotes": "No pronunciation scoring. Keep words simple and child-safe.",
      "pacingNotes": "Leave short pauses for parent-child reflection after each sentence.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-018",
    "storyId": "shloka-mantra-meaning-exp-v1-018",
    "slug": "shloka-mantra-meaning-exp-v1-018",
    "title": "Thankful Bedtime Mantra Meaning",
    "shortTitle": "Thankful Bedtime",
    "summary": "This shloka/mantra reminds children to practice gratitude with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 18,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Thankful Bedtime — Sacred Context",
        "text": "A parent introduces the thankful bedtime shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Thankful Bedtime — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice gratitude with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Thankful Bedtime — Daily Practice",
        "text": "The child tries one small action of gratitude, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Thankful Bedtime — Reflection",
        "text": "Together, parent and child reflect on how gratitude can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is gratitude, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice gratitude with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of gratitude feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on thankful bedtime with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims.",
    "audioScript": {
      "narrationScript": "Thankful Bedtime Mantra Meaning. This shloka/mantra reminds children to practice gratitude with gratitude, calm, and respect in everyday life. A parent helps the child reflect on one gentle action of gratitude. The focus is calm understanding, gratitude, and devotion, without pressure to recite perfectly.",
      "voiceDirection": "Warm, grounded, and reverent.",
      "pronunciationNotes": "No pronunciation scoring. Keep words simple and child-safe.",
      "pacingNotes": "Leave short pauses for parent-child reflection after each sentence.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-019",
    "storyId": "shloka-mantra-meaning-exp-v1-019",
    "slug": "shloka-mantra-meaning-exp-v1-019",
    "title": "Steady Mind Mantra Meaning",
    "shortTitle": "Steady Mind",
    "summary": "This shloka/mantra reminds children to practice focus with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 19,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Focus",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Steady Mind — Sacred Context",
        "text": "A parent introduces the steady mind shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Steady Mind — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice focus with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Steady Mind — Daily Practice",
        "text": "The child tries one small action of focus, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Steady Mind — Reflection",
        "text": "Together, parent and child reflect on how focus can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is focus, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice focus with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of focus feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on steady mind with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims.",
    "audioScript": {
      "narrationScript": "Steady Mind Mantra Meaning. This shloka/mantra reminds children to practice focus with gratitude, calm, and respect in everyday life. A parent helps the child reflect on one gentle action of focus. The focus is calm understanding, gratitude, and devotion, without pressure to recite perfectly.",
      "voiceDirection": "Warm, grounded, and reverent.",
      "pronunciationNotes": "No pronunciation scoring. Keep words simple and child-safe.",
      "pacingNotes": "Leave short pauses for parent-child reflection after each sentence.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-020",
    "storyId": "shloka-mantra-meaning-exp-v1-020",
    "slug": "shloka-mantra-meaning-exp-v1-020",
    "title": "Humble Success Mantra Meaning",
    "shortTitle": "Humble Success",
    "summary": "This shloka/mantra reminds children to practice humility with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 20,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Humble Success — Sacred Context",
        "text": "A parent introduces the humble success shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Humble Success — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice humility with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Humble Success — Daily Practice",
        "text": "The child tries one small action of humility, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Humble Success — Reflection",
        "text": "Together, parent and child reflect on how humility can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is humility, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice humility with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of humility feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on humble success with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims.",
    "audioScript": {
      "narrationScript": "Humble Success Mantra Meaning. This shloka/mantra reminds children to practice humility with gratitude, calm, and respect in everyday life. A parent helps the child reflect on one gentle action of humility. The focus is calm understanding, gratitude, and devotion, without pressure to recite perfectly.",
      "voiceDirection": "Warm, grounded, and reverent.",
      "pronunciationNotes": "No pronunciation scoring. Keep words simple and child-safe.",
      "pacingNotes": "Leave short pauses for parent-child reflection after each sentence.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-021",
    "storyId": "shloka-mantra-meaning-exp-v1-021",
    "slug": "shloka-mantra-meaning-exp-v1-021",
    "title": "Listening Heart Mantra Meaning",
    "shortTitle": "Listening Heart",
    "summary": "This shloka/mantra reminds children to practice respect with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 21,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Respect",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Listening Heart — Sacred Context",
        "text": "A parent introduces the listening heart shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Listening Heart — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice respect with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Listening Heart — Daily Practice",
        "text": "The child tries one small action of respect, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Listening Heart — Reflection",
        "text": "Together, parent and child reflect on how respect can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is respect, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice respect with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of respect feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on listening heart with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims.",
    "audioScript": {
      "narrationScript": "Listening Heart Mantra Meaning. This shloka/mantra reminds children to practice respect with gratitude, calm, and respect in everyday life. A parent helps the child reflect on one gentle action of respect. The focus is calm understanding, gratitude, and devotion, without pressure to recite perfectly.",
      "voiceDirection": "Warm, grounded, and reverent.",
      "pronunciationNotes": "No pronunciation scoring. Keep words simple and child-safe.",
      "pacingNotes": "Leave short pauses for parent-child reflection after each sentence.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-022",
    "storyId": "shloka-mantra-meaning-exp-v1-022",
    "slug": "shloka-mantra-meaning-exp-v1-022",
    "title": "Calm in Disagreement Mantra Meaning",
    "shortTitle": "Calm in Disagreement",
    "summary": "This shloka/mantra reminds children to practice calm with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 22,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Calm in Disagreement — Sacred Context",
        "text": "A parent introduces the calm in disagreement shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Calm in Disagreement — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice calm with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Calm in Disagreement — Daily Practice",
        "text": "The child tries one small action of calm, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Calm in Disagreement — Reflection",
        "text": "Together, parent and child reflect on how calm can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is calm, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice calm with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of calm feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on calm in disagreement with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims.",
    "audioScript": {
      "narrationScript": "Calm in Disagreement Mantra Meaning. This shloka/mantra reminds children to practice calm with gratitude, calm, and respect in everyday life. A parent helps the child reflect on one gentle action of calm. The focus is calm understanding, gratitude, and devotion, without pressure to recite perfectly.",
      "voiceDirection": "Warm, grounded, and reverent.",
      "pronunciationNotes": "No pronunciation scoring. Keep words simple and child-safe.",
      "pacingNotes": "Leave short pauses for parent-child reflection after each sentence.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-023",
    "storyId": "shloka-mantra-meaning-exp-v1-023",
    "slug": "shloka-mantra-meaning-exp-v1-023",
    "title": "Prayer for Wisdom Mantra Meaning",
    "shortTitle": "Prayer for Wisdom",
    "summary": "This shloka/mantra reminds children to practice devotion with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 23,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Devotion",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Prayer for Wisdom — Sacred Context",
        "text": "A parent introduces the prayer for wisdom shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Prayer for Wisdom — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice devotion with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Prayer for Wisdom — Daily Practice",
        "text": "The child tries one small action of devotion, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Prayer for Wisdom — Reflection",
        "text": "Together, parent and child reflect on how devotion can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is devotion, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice devotion with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of devotion feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on prayer for wisdom with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims.",
    "audioScript": {
      "narrationScript": "Prayer for Wisdom Mantra Meaning. This shloka/mantra reminds children to practice devotion with gratitude, calm, and respect in everyday life. A parent helps the child reflect on one gentle action of devotion. The focus is calm understanding, gratitude, and devotion, without pressure to recite perfectly.",
      "voiceDirection": "Warm, grounded, and reverent.",
      "pronunciationNotes": "No pronunciation scoring. Keep words simple and child-safe.",
      "pacingNotes": "Leave short pauses for parent-child reflection after each sentence.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-024",
    "storyId": "shloka-mantra-meaning-exp-v1-024",
    "slug": "shloka-mantra-meaning-exp-v1-024",
    "title": "Family Harmony Mantra Meaning",
    "shortTitle": "Family Harmony",
    "summary": "This shloka/mantra reminds children to practice kindness with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 24,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Family Harmony — Sacred Context",
        "text": "A parent introduces the family harmony shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Family Harmony — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice kindness with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Family Harmony — Daily Practice",
        "text": "The child tries one small action of kindness, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Family Harmony — Reflection",
        "text": "Together, parent and child reflect on how kindness can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is kindness, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice kindness with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of kindness feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on family harmony with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims.",
    "audioScript": {
      "narrationScript": "Family Harmony Mantra Meaning. This shloka/mantra reminds children to practice kindness with gratitude, calm, and respect in everyday life. A parent helps the child reflect on one gentle action of kindness. The focus is calm understanding, gratitude, and devotion, without pressure to recite perfectly.",
      "voiceDirection": "Warm, grounded, and reverent.",
      "pronunciationNotes": "No pronunciation scoring. Keep words simple and child-safe.",
      "pacingNotes": "Leave short pauses for parent-child reflection after each sentence.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-025",
    "storyId": "shloka-mantra-meaning-exp-v1-025",
    "slug": "shloka-mantra-meaning-exp-v1-025",
    "title": "Careful Action Mantra Meaning",
    "shortTitle": "Careful Action",
    "summary": "This shloka/mantra reminds children to practice focus with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 25,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Focus",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Careful Action — Sacred Context",
        "text": "A parent introduces the careful action shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Careful Action — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice focus with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Careful Action — Daily Practice",
        "text": "The child tries one small action of focus, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Careful Action — Reflection",
        "text": "Together, parent and child reflect on how focus can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is focus, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice focus with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of focus feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on careful action with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims.",
    "audioScript": {
      "narrationScript": "Careful Action Mantra Meaning. This shloka/mantra reminds children to practice focus with gratitude, calm, and respect in everyday life. A parent helps the child reflect on one gentle action of focus. The focus is calm understanding, gratitude, and devotion, without pressure to recite perfectly.",
      "voiceDirection": "Warm, grounded, and reverent.",
      "pronunciationNotes": "No pronunciation scoring. Keep words simple and child-safe.",
      "pacingNotes": "Leave short pauses for parent-child reflection after each sentence.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-026",
    "storyId": "shloka-mantra-meaning-exp-v1-026",
    "slug": "shloka-mantra-meaning-exp-v1-026",
    "title": "Joyful Gratitude Mantra Meaning",
    "shortTitle": "Joyful Gratitude",
    "summary": "This shloka/mantra reminds children to practice gratitude with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 26,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Joyful Gratitude — Sacred Context",
        "text": "A parent introduces the joyful gratitude shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Joyful Gratitude — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice gratitude with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Joyful Gratitude — Daily Practice",
        "text": "The child tries one small action of gratitude, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Joyful Gratitude — Reflection",
        "text": "Together, parent and child reflect on how gratitude can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is gratitude, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice gratitude with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of gratitude feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on joyful gratitude with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-027",
    "storyId": "shloka-mantra-meaning-exp-v1-027",
    "slug": "shloka-mantra-meaning-exp-v1-027",
    "title": "Sacred Quiet Time Mantra Meaning",
    "shortTitle": "Sacred Quiet Time",
    "summary": "This shloka/mantra reminds children to practice calm with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 27,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Quiet Time — Sacred Context",
        "text": "A parent introduces the sacred quiet time shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Sacred Quiet Time — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice calm with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Sacred Quiet Time — Daily Practice",
        "text": "The child tries one small action of calm, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Sacred Quiet Time — Reflection",
        "text": "Together, parent and child reflect on how calm can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is calm, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice calm with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of calm feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on sacred quiet time with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-028",
    "storyId": "shloka-mantra-meaning-exp-v1-028",
    "slug": "shloka-mantra-meaning-exp-v1-028",
    "title": "Kind Morning Start Mantra Meaning",
    "shortTitle": "Kind Morning Start",
    "summary": "This shloka/mantra reminds children to practice kindness with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 28,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Kind Morning Start — Sacred Context",
        "text": "A parent introduces the kind morning start shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Kind Morning Start — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice kindness with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Kind Morning Start — Daily Practice",
        "text": "The child tries one small action of kindness, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Kind Morning Start — Reflection",
        "text": "Together, parent and child reflect on how kindness can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is kindness, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice kindness with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of kindness feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on kind morning start with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-029",
    "storyId": "shloka-mantra-meaning-exp-v1-029",
    "slug": "shloka-mantra-meaning-exp-v1-029",
    "title": "Respectful Greetings Mantra Meaning",
    "shortTitle": "Respectful Greetings",
    "summary": "This shloka/mantra reminds children to practice respect with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 29,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Respect",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Respectful Greetings — Sacred Context",
        "text": "A parent introduces the respectful greetings shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Respectful Greetings — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice respect with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Respectful Greetings — Daily Practice",
        "text": "The child tries one small action of respect, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Respectful Greetings — Reflection",
        "text": "Together, parent and child reflect on how respect can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is respect, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice respect with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of respect feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on respectful greetings with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-030",
    "storyId": "shloka-mantra-meaning-exp-v1-030",
    "slug": "shloka-mantra-meaning-exp-v1-030",
    "title": "Serving Without Pride Mantra Meaning",
    "shortTitle": "Serving Without Pride",
    "summary": "This shloka/mantra reminds children to practice humility with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 30,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Serving Without Pride — Sacred Context",
        "text": "A parent introduces the serving without pride shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Serving Without Pride — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice humility with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Serving Without Pride — Daily Practice",
        "text": "The child tries one small action of humility, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Serving Without Pride — Reflection",
        "text": "Together, parent and child reflect on how humility can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is humility, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice humility with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of humility feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on serving without pride with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-031",
    "storyId": "shloka-mantra-meaning-exp-v1-031",
    "slug": "shloka-mantra-meaning-exp-v1-031",
    "title": "Inner Light Reminder Mantra Meaning",
    "shortTitle": "Inner Light Reminder",
    "summary": "This shloka/mantra reminds children to practice devotion with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 31,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Devotion",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Inner Light Reminder — Sacred Context",
        "text": "A parent introduces the inner light reminder shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Inner Light Reminder — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice devotion with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Inner Light Reminder — Daily Practice",
        "text": "The child tries one small action of devotion, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Inner Light Reminder — Reflection",
        "text": "Together, parent and child reflect on how devotion can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is devotion, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice devotion with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of devotion feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on inner light reminder with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-032",
    "storyId": "shloka-mantra-meaning-exp-v1-032",
    "slug": "shloka-mantra-meaning-exp-v1-032",
    "title": "Peaceful Transitions Mantra Meaning",
    "shortTitle": "Peaceful Transitions",
    "summary": "This shloka/mantra reminds children to practice calm with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 32,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Peaceful Transitions — Sacred Context",
        "text": "A parent introduces the peaceful transitions shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Peaceful Transitions — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice calm with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Peaceful Transitions — Daily Practice",
        "text": "The child tries one small action of calm, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Peaceful Transitions — Reflection",
        "text": "Together, parent and child reflect on how calm can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is calm, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice calm with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of calm feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on peaceful transitions with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-033",
    "storyId": "shloka-mantra-meaning-exp-v1-033",
    "slug": "shloka-mantra-meaning-exp-v1-033",
    "title": "Thoughtful Choices Mantra Meaning",
    "shortTitle": "Thoughtful Choices",
    "summary": "This shloka/mantra reminds children to practice focus with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 33,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Focus",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Thoughtful Choices — Sacred Context",
        "text": "A parent introduces the thoughtful choices shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Thoughtful Choices — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice focus with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Thoughtful Choices — Daily Practice",
        "text": "The child tries one small action of focus, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Thoughtful Choices — Reflection",
        "text": "Together, parent and child reflect on how focus can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is focus, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice focus with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of focus feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on thoughtful choices with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-034",
    "storyId": "shloka-mantra-meaning-exp-v1-034",
    "slug": "shloka-mantra-meaning-exp-v1-034",
    "title": "Gentle Forgiveness Mantra Meaning",
    "shortTitle": "Gentle Forgiveness",
    "summary": "This shloka/mantra reminds children to practice kindness with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 34,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Gentle Forgiveness — Sacred Context",
        "text": "A parent introduces the gentle forgiveness shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Gentle Forgiveness — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice kindness with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Gentle Forgiveness — Daily Practice",
        "text": "The child tries one small action of kindness, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Gentle Forgiveness — Reflection",
        "text": "Together, parent and child reflect on how kindness can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is kindness, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice kindness with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of kindness feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on gentle forgiveness with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-035",
    "storyId": "shloka-mantra-meaning-exp-v1-035",
    "slug": "shloka-mantra-meaning-exp-v1-035",
    "title": "Thankful Learning Mantra Meaning",
    "shortTitle": "Thankful Learning",
    "summary": "This shloka/mantra reminds children to practice gratitude with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 35,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Thankful Learning — Sacred Context",
        "text": "A parent introduces the thankful learning shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Thankful Learning — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice gratitude with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Thankful Learning — Daily Practice",
        "text": "The child tries one small action of gratitude, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Thankful Learning — Reflection",
        "text": "Together, parent and child reflect on how gratitude can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is gratitude, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice gratitude with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of gratitude feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on thankful learning with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-036",
    "storyId": "shloka-mantra-meaning-exp-v1-036",
    "slug": "shloka-mantra-meaning-exp-v1-036",
    "title": "Sharing Happily Mantra Meaning",
    "shortTitle": "Sharing Happily",
    "summary": "This shloka/mantra reminds children to practice kindness with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 36,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sharing Happily — Sacred Context",
        "text": "A parent introduces the sharing happily shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Sharing Happily — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice kindness with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Sharing Happily — Daily Practice",
        "text": "The child tries one small action of kindness, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Sharing Happily — Reflection",
        "text": "Together, parent and child reflect on how kindness can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is kindness, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice kindness with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of kindness feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on sharing happily with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-037",
    "storyId": "shloka-mantra-meaning-exp-v1-037",
    "slug": "shloka-mantra-meaning-exp-v1-037",
    "title": "Mindful Speaking Mantra Meaning",
    "shortTitle": "Mindful Speaking",
    "summary": "This shloka/mantra reminds children to practice respect with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 37,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Respect",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Mindful Speaking — Sacred Context",
        "text": "A parent introduces the mindful speaking shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Mindful Speaking — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice respect with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Mindful Speaking — Daily Practice",
        "text": "The child tries one small action of respect, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Mindful Speaking — Reflection",
        "text": "Together, parent and child reflect on how respect can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is respect, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice respect with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of respect feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on mindful speaking with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-038",
    "storyId": "shloka-mantra-meaning-exp-v1-038",
    "slug": "shloka-mantra-meaning-exp-v1-038",
    "title": "Quiet Confidence Mantra Meaning",
    "shortTitle": "Quiet Confidence",
    "summary": "This shloka/mantra reminds children to practice humility with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 38,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet Confidence — Sacred Context",
        "text": "A parent introduces the quiet confidence shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Quiet Confidence — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice humility with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Quiet Confidence — Daily Practice",
        "text": "The child tries one small action of humility, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Quiet Confidence — Reflection",
        "text": "Together, parent and child reflect on how humility can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is humility, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice humility with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of humility feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on quiet confidence with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-039",
    "storyId": "shloka-mantra-meaning-exp-v1-039",
    "slug": "shloka-mantra-meaning-exp-v1-039",
    "title": "Prayer Before Meals Mantra Meaning",
    "shortTitle": "Prayer Before Meals",
    "summary": "This shloka/mantra reminds children to practice gratitude with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 39,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Prayer Before Meals — Sacred Context",
        "text": "A parent introduces the prayer before meals shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Prayer Before Meals — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice gratitude with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Prayer Before Meals — Daily Practice",
        "text": "The child tries one small action of gratitude, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Prayer Before Meals — Reflection",
        "text": "Together, parent and child reflect on how gratitude can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is gratitude, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice gratitude with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of gratitude feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on prayer before meals with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-040",
    "storyId": "shloka-mantra-meaning-exp-v1-040",
    "slug": "shloka-mantra-meaning-exp-v1-040",
    "title": "Compassionate Strength Mantra Meaning",
    "shortTitle": "Compassionate Strength",
    "summary": "This shloka/mantra reminds children to practice devotion with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 40,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Devotion",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Compassionate Strength — Sacred Context",
        "text": "A parent introduces the compassionate strength shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Compassionate Strength — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice devotion with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Compassionate Strength — Daily Practice",
        "text": "The child tries one small action of devotion, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Compassionate Strength — Reflection",
        "text": "Together, parent and child reflect on how devotion can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is devotion, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice devotion with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of devotion feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on compassionate strength with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-041",
    "storyId": "shloka-mantra-meaning-exp-v1-041",
    "slug": "shloka-mantra-meaning-exp-v1-041",
    "title": "Study With Attention Mantra Meaning",
    "shortTitle": "Study With Attention",
    "summary": "This shloka/mantra reminds children to practice focus with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 41,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Focus",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Study With Attention — Sacred Context",
        "text": "A parent introduces the study with attention shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Study With Attention — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice focus with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Study With Attention — Daily Practice",
        "text": "The child tries one small action of focus, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Study With Attention — Reflection",
        "text": "Together, parent and child reflect on how focus can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is focus, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice focus with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of focus feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on study with attention with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-042",
    "storyId": "shloka-mantra-meaning-exp-v1-042",
    "slug": "shloka-mantra-meaning-exp-v1-042",
    "title": "Calm Before Sleep Mantra Meaning",
    "shortTitle": "Calm Before Sleep",
    "summary": "This shloka/mantra reminds children to practice calm with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 42,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Calm Before Sleep — Sacred Context",
        "text": "A parent introduces the calm before sleep shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Calm Before Sleep — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice calm with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Calm Before Sleep — Daily Practice",
        "text": "The child tries one small action of calm, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Calm Before Sleep — Reflection",
        "text": "Together, parent and child reflect on how calm can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is calm, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice calm with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of calm feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on calm before sleep with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-043",
    "storyId": "shloka-mantra-meaning-exp-v1-043",
    "slug": "shloka-mantra-meaning-exp-v1-043",
    "title": "Respect for Nature Mantra Meaning",
    "shortTitle": "Respect for Nature",
    "summary": "This shloka/mantra reminds children to practice respect with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 43,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Respect",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Respect for Nature — Sacred Context",
        "text": "A parent introduces the respect for nature shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Respect for Nature — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice respect with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Respect for Nature — Daily Practice",
        "text": "The child tries one small action of respect, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Respect for Nature — Reflection",
        "text": "Together, parent and child reflect on how respect can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is respect, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice respect with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of respect feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on respect for nature with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-044",
    "storyId": "shloka-mantra-meaning-exp-v1-044",
    "slug": "shloka-mantra-meaning-exp-v1-044",
    "title": "Devotion in Daily Life Mantra Meaning",
    "shortTitle": "Devotion in Daily Life",
    "summary": "This shloka/mantra reminds children to practice devotion with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 44,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Devotion",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Devotion in Daily Life — Sacred Context",
        "text": "A parent introduces the devotion in daily life shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Devotion in Daily Life — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice devotion with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Devotion in Daily Life — Daily Practice",
        "text": "The child tries one small action of devotion, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Devotion in Daily Life — Reflection",
        "text": "Together, parent and child reflect on how devotion can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is devotion, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice devotion with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of devotion feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on devotion in daily life with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-045",
    "storyId": "shloka-mantra-meaning-exp-v1-045",
    "slug": "shloka-mantra-meaning-exp-v1-045",
    "title": "Soft Voice Practice Mantra Meaning",
    "shortTitle": "Soft Voice Practice",
    "summary": "This shloka/mantra reminds children to practice kindness with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 45,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Soft Voice Practice — Sacred Context",
        "text": "A parent introduces the soft voice practice shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Soft Voice Practice — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice kindness with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Soft Voice Practice — Daily Practice",
        "text": "The child tries one small action of kindness, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Soft Voice Practice — Reflection",
        "text": "Together, parent and child reflect on how kindness can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is kindness, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice kindness with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of kindness feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on soft voice practice with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-046",
    "storyId": "shloka-mantra-meaning-exp-v1-046",
    "slug": "shloka-mantra-meaning-exp-v1-046",
    "title": "Steady During Change Mantra Meaning",
    "shortTitle": "Steady During Change",
    "summary": "This shloka/mantra reminds children to practice focus with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 46,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Focus",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Steady During Change — Sacred Context",
        "text": "A parent introduces the steady during change shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Steady During Change — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice focus with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Steady During Change — Daily Practice",
        "text": "The child tries one small action of focus, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Steady During Change — Reflection",
        "text": "Together, parent and child reflect on how focus can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is focus, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice focus with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of focus feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on steady during change with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-047",
    "storyId": "shloka-mantra-meaning-exp-v1-047",
    "slug": "shloka-mantra-meaning-exp-v1-047",
    "title": "Grateful for Helpers Mantra Meaning",
    "shortTitle": "Grateful for Helpers",
    "summary": "This shloka/mantra reminds children to practice gratitude with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 47,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Grateful for Helpers — Sacred Context",
        "text": "A parent introduces the grateful for helpers shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Grateful for Helpers — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice gratitude with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Grateful for Helpers — Daily Practice",
        "text": "The child tries one small action of gratitude, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Grateful for Helpers — Reflection",
        "text": "Together, parent and child reflect on how gratitude can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is gratitude, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice gratitude with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of gratitude feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on grateful for helpers with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-048",
    "storyId": "shloka-mantra-meaning-exp-v1-048",
    "slug": "shloka-mantra-meaning-exp-v1-048",
    "title": "Peaceful Family Circle Mantra Meaning",
    "shortTitle": "Peaceful Family Circle",
    "summary": "This shloka/mantra reminds children to practice calm with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 48,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Peaceful Family Circle — Sacred Context",
        "text": "A parent introduces the peaceful family circle shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Peaceful Family Circle — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice calm with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Peaceful Family Circle — Daily Practice",
        "text": "The child tries one small action of calm, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Peaceful Family Circle — Reflection",
        "text": "Together, parent and child reflect on how calm can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is calm, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice calm with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of calm feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on peaceful family circle with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-049",
    "storyId": "shloka-mantra-meaning-exp-v1-049",
    "slug": "shloka-mantra-meaning-exp-v1-049",
    "title": "Humility in Teamwork Mantra Meaning",
    "shortTitle": "Humility in Teamwork",
    "summary": "This shloka/mantra reminds children to practice humility with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 49,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Humility in Teamwork — Sacred Context",
        "text": "A parent introduces the humility in teamwork shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Humility in Teamwork — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice humility with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Humility in Teamwork — Daily Practice",
        "text": "The child tries one small action of humility, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Humility in Teamwork — Reflection",
        "text": "Together, parent and child reflect on how humility can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is humility, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice humility with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of humility feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on humility in teamwork with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-050",
    "storyId": "shloka-mantra-meaning-exp-v1-050",
    "slug": "shloka-mantra-meaning-exp-v1-050",
    "title": "Respectful Disagreement Mantra Meaning",
    "shortTitle": "Respectful Disagreement",
    "summary": "This shloka/mantra reminds children to practice respect with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 50,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Respect",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Respectful Disagreement — Sacred Context",
        "text": "A parent introduces the respectful disagreement shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Respectful Disagreement — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice respect with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Respectful Disagreement — Daily Practice",
        "text": "The child tries one small action of respect, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Respectful Disagreement — Reflection",
        "text": "Together, parent and child reflect on how respect can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is respect, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice respect with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of respect feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on respectful disagreement with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-051",
    "storyId": "shloka-mantra-meaning-exp-v1-051",
    "slug": "shloka-mantra-meaning-exp-v1-051",
    "title": "Devotional Thank You Mantra Meaning",
    "shortTitle": "Devotional Thank You",
    "summary": "This shloka/mantra reminds children to practice devotion with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 51,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Devotion",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Devotional Thank You — Sacred Context",
        "text": "A parent introduces the devotional thank you shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Devotional Thank You — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice devotion with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Devotional Thank You — Daily Practice",
        "text": "The child tries one small action of devotion, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Devotional Thank You — Reflection",
        "text": "Together, parent and child reflect on how devotion can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is devotion, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice devotion with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of devotion feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on devotional thank you with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-052",
    "storyId": "shloka-mantra-meaning-exp-v1-052",
    "slug": "shloka-mantra-meaning-exp-v1-052",
    "title": "Kindness to Siblings Mantra Meaning",
    "shortTitle": "Kindness to Siblings",
    "summary": "This shloka/mantra reminds children to practice kindness with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 52,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Kindness to Siblings — Sacred Context",
        "text": "A parent introduces the kindness to siblings shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Kindness to Siblings — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice kindness with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Kindness to Siblings — Daily Practice",
        "text": "The child tries one small action of kindness, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Kindness to Siblings — Reflection",
        "text": "Together, parent and child reflect on how kindness can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is kindness, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice kindness with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of kindness feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on kindness to siblings with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-053",
    "storyId": "shloka-mantra-meaning-exp-v1-053",
    "slug": "shloka-mantra-meaning-exp-v1-053",
    "title": "Concentration Prayer Mantra Meaning",
    "shortTitle": "Concentration Prayer",
    "summary": "This shloka/mantra reminds children to practice focus with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 53,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Focus",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Concentration Prayer — Sacred Context",
        "text": "A parent introduces the concentration prayer shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Concentration Prayer — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice focus with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Concentration Prayer — Daily Practice",
        "text": "The child tries one small action of focus, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Concentration Prayer — Reflection",
        "text": "Together, parent and child reflect on how focus can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is focus, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice focus with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of focus feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on concentration prayer with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-054",
    "storyId": "shloka-mantra-meaning-exp-v1-054",
    "slug": "shloka-mantra-meaning-exp-v1-054",
    "title": "Gentle Apology Mantra Meaning",
    "shortTitle": "Gentle Apology",
    "summary": "This shloka/mantra reminds children to practice humility with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 54,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Gentle Apology — Sacred Context",
        "text": "A parent introduces the gentle apology shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Gentle Apology — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice humility with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Gentle Apology — Daily Practice",
        "text": "The child tries one small action of humility, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Gentle Apology — Reflection",
        "text": "Together, parent and child reflect on how humility can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is humility, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice humility with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of humility feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on gentle apology with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-055",
    "storyId": "shloka-mantra-meaning-exp-v1-055",
    "slug": "shloka-mantra-meaning-exp-v1-055",
    "title": "Evening Gratitude Lamp Mantra Meaning",
    "shortTitle": "Evening Gratitude Lamp",
    "summary": "This shloka/mantra reminds children to practice gratitude with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 55,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening Gratitude Lamp — Sacred Context",
        "text": "A parent introduces the evening gratitude lamp shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Evening Gratitude Lamp — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice gratitude with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Evening Gratitude Lamp — Daily Practice",
        "text": "The child tries one small action of gratitude, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Evening Gratitude Lamp — Reflection",
        "text": "Together, parent and child reflect on how gratitude can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is gratitude, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice gratitude with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of gratitude feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on evening gratitude lamp with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-056",
    "storyId": "shloka-mantra-meaning-exp-v1-056",
    "slug": "shloka-mantra-meaning-exp-v1-056",
    "title": "Calm When Upset Mantra Meaning",
    "shortTitle": "Calm When Upset",
    "summary": "This shloka/mantra reminds children to practice calm with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 56,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Calm When Upset — Sacred Context",
        "text": "A parent introduces the calm when upset shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Calm When Upset — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice calm with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Calm When Upset — Daily Practice",
        "text": "The child tries one small action of calm, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Calm When Upset — Reflection",
        "text": "Together, parent and child reflect on how calm can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is calm, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice calm with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of calm feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on calm when upset with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-057",
    "storyId": "shloka-mantra-meaning-exp-v1-057",
    "slug": "shloka-mantra-meaning-exp-v1-057",
    "title": "Respecting Sacred Spaces Mantra Meaning",
    "shortTitle": "Respecting Sacred Spaces",
    "summary": "This shloka/mantra reminds children to practice respect with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 57,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Respect",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Respecting Sacred Spaces — Sacred Context",
        "text": "A parent introduces the respecting sacred spaces shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Respecting Sacred Spaces — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice respect with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Respecting Sacred Spaces — Daily Practice",
        "text": "The child tries one small action of respect, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Respecting Sacred Spaces — Reflection",
        "text": "Together, parent and child reflect on how respect can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is respect, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice respect with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of respect feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on respecting sacred spaces with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-058",
    "storyId": "shloka-mantra-meaning-exp-v1-058",
    "slug": "shloka-mantra-meaning-exp-v1-058",
    "title": "Prayer for Good Intent Mantra Meaning",
    "shortTitle": "Prayer for Good Intent",
    "summary": "This shloka/mantra reminds children to practice devotion with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 58,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Devotion",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Prayer for Good Intent — Sacred Context",
        "text": "A parent introduces the prayer for good intent shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Prayer for Good Intent — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice devotion with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Prayer for Good Intent — Daily Practice",
        "text": "The child tries one small action of devotion, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Prayer for Good Intent — Reflection",
        "text": "Together, parent and child reflect on how devotion can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is devotion, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice devotion with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of devotion feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on prayer for good intent with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-059",
    "storyId": "shloka-mantra-meaning-exp-v1-059",
    "slug": "shloka-mantra-meaning-exp-v1-059",
    "title": "Thoughtful Listening Mantra Meaning",
    "shortTitle": "Thoughtful Listening",
    "summary": "This shloka/mantra reminds children to practice focus with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 59,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Focus",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Thoughtful Listening — Sacred Context",
        "text": "A parent introduces the thoughtful listening shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Thoughtful Listening — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice focus with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Thoughtful Listening — Daily Practice",
        "text": "The child tries one small action of focus, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Thoughtful Listening — Reflection",
        "text": "Together, parent and child reflect on how focus can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is focus, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice focus with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of focus feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on thoughtful listening with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-060",
    "storyId": "shloka-mantra-meaning-exp-v1-060",
    "slug": "shloka-mantra-meaning-exp-v1-060",
    "title": "Compassion in Play Mantra Meaning",
    "shortTitle": "Compassion in Play",
    "summary": "This shloka/mantra reminds children to practice kindness with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 60,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Compassion in Play — Sacred Context",
        "text": "A parent introduces the compassion in play shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Compassion in Play — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice kindness with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Compassion in Play — Daily Practice",
        "text": "The child tries one small action of kindness, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Compassion in Play — Reflection",
        "text": "Together, parent and child reflect on how kindness can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is kindness, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice kindness with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of kindness feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on compassion in play with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-061",
    "storyId": "shloka-mantra-meaning-exp-v1-061",
    "slug": "shloka-mantra-meaning-exp-v1-061",
    "title": "Humble Leadership Mantra Meaning",
    "shortTitle": "Humble Leadership",
    "summary": "This shloka/mantra reminds children to practice humility with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 61,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Humble Leadership — Sacred Context",
        "text": "A parent introduces the humble leadership shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Humble Leadership — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice humility with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Humble Leadership — Daily Practice",
        "text": "The child tries one small action of humility, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Humble Leadership — Reflection",
        "text": "Together, parent and child reflect on how humility can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is humility, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice humility with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of humility feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on humble leadership with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-062",
    "storyId": "shloka-mantra-meaning-exp-v1-062",
    "slug": "shloka-mantra-meaning-exp-v1-062",
    "title": "Thankful Wake-Up Mantra Meaning",
    "shortTitle": "Thankful Wake-Up",
    "summary": "This shloka/mantra reminds children to practice gratitude with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 62,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Thankful Wake-Up — Sacred Context",
        "text": "A parent introduces the thankful wake-up shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Thankful Wake-Up — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice gratitude with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Thankful Wake-Up — Daily Practice",
        "text": "The child tries one small action of gratitude, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Thankful Wake-Up — Reflection",
        "text": "Together, parent and child reflect on how gratitude can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is gratitude, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice gratitude with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of gratitude feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on thankful wake-up with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-063",
    "storyId": "shloka-mantra-meaning-exp-v1-063",
    "slug": "shloka-mantra-meaning-exp-v1-063",
    "title": "Quiet Reflection Minute Mantra Meaning",
    "shortTitle": "Quiet Reflection Minute",
    "summary": "This shloka/mantra reminds children to practice calm with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 63,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet Reflection Minute — Sacred Context",
        "text": "A parent introduces the quiet reflection minute shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Quiet Reflection Minute — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice calm with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Quiet Reflection Minute — Daily Practice",
        "text": "The child tries one small action of calm, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Quiet Reflection Minute — Reflection",
        "text": "Together, parent and child reflect on how calm can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is calm, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice calm with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of calm feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on quiet reflection minute with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-064",
    "storyId": "shloka-mantra-meaning-exp-v1-064",
    "slug": "shloka-mantra-meaning-exp-v1-064",
    "title": "Respect for Elders Mantra Meaning",
    "shortTitle": "Respect for Elders",
    "summary": "This shloka/mantra reminds children to practice respect with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 64,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Respect",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Respect for Elders — Sacred Context",
        "text": "A parent introduces the respect for elders shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Respect for Elders — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice respect with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Respect for Elders — Daily Practice",
        "text": "The child tries one small action of respect, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Respect for Elders — Reflection",
        "text": "Together, parent and child reflect on how respect can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is respect, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice respect with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of respect feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on respect for elders with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-065",
    "storyId": "shloka-mantra-meaning-exp-v1-065",
    "slug": "shloka-mantra-meaning-exp-v1-065",
    "title": "Devotion Through Service Mantra Meaning",
    "shortTitle": "Devotion Through Service",
    "summary": "This shloka/mantra reminds children to practice devotion with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 65,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Devotion",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Devotion Through Service — Sacred Context",
        "text": "A parent introduces the devotion through service shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Devotion Through Service — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice devotion with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Devotion Through Service — Daily Practice",
        "text": "The child tries one small action of devotion, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Devotion Through Service — Reflection",
        "text": "Together, parent and child reflect on how devotion can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is devotion, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice devotion with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of devotion feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on devotion through service with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-066",
    "storyId": "shloka-mantra-meaning-exp-v1-066",
    "slug": "shloka-mantra-meaning-exp-v1-066",
    "title": "Kind Words First Mantra Meaning",
    "shortTitle": "Kind Words First",
    "summary": "This shloka/mantra reminds children to practice kindness with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 66,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Kind Words First — Sacred Context",
        "text": "A parent introduces the kind words first shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Kind Words First — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice kindness with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Kind Words First — Daily Practice",
        "text": "The child tries one small action of kindness, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Kind Words First — Reflection",
        "text": "Together, parent and child reflect on how kindness can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is kindness, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice kindness with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of kindness feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on kind words first with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-067",
    "storyId": "shloka-mantra-meaning-exp-v1-067",
    "slug": "shloka-mantra-meaning-exp-v1-067",
    "title": "Focus Before Homework Mantra Meaning",
    "shortTitle": "Focus Before Homework",
    "summary": "This shloka/mantra reminds children to practice focus with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 67,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Focus",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Focus Before Homework — Sacred Context",
        "text": "A parent introduces the focus before homework shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Focus Before Homework — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice focus with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Focus Before Homework — Daily Practice",
        "text": "The child tries one small action of focus, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Focus Before Homework — Reflection",
        "text": "Together, parent and child reflect on how focus can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is focus, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice focus with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of focus feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on focus before homework with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-068",
    "storyId": "shloka-mantra-meaning-exp-v1-068",
    "slug": "shloka-mantra-meaning-exp-v1-068",
    "title": "Gratitude for Friends Mantra Meaning",
    "shortTitle": "Gratitude for Friends",
    "summary": "This shloka/mantra reminds children to practice gratitude with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 68,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Gratitude for Friends — Sacred Context",
        "text": "A parent introduces the gratitude for friends shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Gratitude for Friends — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice gratitude with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Gratitude for Friends — Daily Practice",
        "text": "The child tries one small action of gratitude, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Gratitude for Friends — Reflection",
        "text": "Together, parent and child reflect on how gratitude can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is gratitude, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice gratitude with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of gratitude feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on gratitude for friends with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-069",
    "storyId": "shloka-mantra-meaning-exp-v1-069",
    "slug": "shloka-mantra-meaning-exp-v1-069",
    "title": "Calm Travel Prayer Mantra Meaning",
    "shortTitle": "Calm Travel Prayer",
    "summary": "This shloka/mantra reminds children to practice calm with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 69,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Calm Travel Prayer — Sacred Context",
        "text": "A parent introduces the calm travel prayer shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Calm Travel Prayer — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice calm with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Calm Travel Prayer — Daily Practice",
        "text": "The child tries one small action of calm, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Calm Travel Prayer — Reflection",
        "text": "Together, parent and child reflect on how calm can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is calm, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice calm with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of calm feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on calm travel prayer with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-070",
    "storyId": "shloka-mantra-meaning-exp-v1-070",
    "slug": "shloka-mantra-meaning-exp-v1-070",
    "title": "Humble Celebration Mantra Meaning",
    "shortTitle": "Humble Celebration",
    "summary": "This shloka/mantra reminds children to practice humility with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 70,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Humble Celebration — Sacred Context",
        "text": "A parent introduces the humble celebration shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Humble Celebration — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice humility with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Humble Celebration — Daily Practice",
        "text": "The child tries one small action of humility, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Humble Celebration — Reflection",
        "text": "Together, parent and child reflect on how humility can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is humility, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice humility with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of humility feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on humble celebration with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-071",
    "storyId": "shloka-mantra-meaning-exp-v1-071",
    "slug": "shloka-mantra-meaning-exp-v1-071",
    "title": "Respecting Differences Mantra Meaning",
    "shortTitle": "Respecting Differences",
    "summary": "This shloka/mantra reminds children to practice respect with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 71,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Respect",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Respecting Differences — Sacred Context",
        "text": "A parent introduces the respecting differences shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Respecting Differences — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice respect with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Respecting Differences — Daily Practice",
        "text": "The child tries one small action of respect, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Respecting Differences — Reflection",
        "text": "Together, parent and child reflect on how respect can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is respect, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice respect with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of respect feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on respecting differences with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-072",
    "storyId": "shloka-mantra-meaning-exp-v1-072",
    "slug": "shloka-mantra-meaning-exp-v1-072",
    "title": "Devotional Pause Mantra Meaning",
    "shortTitle": "Devotional Pause",
    "summary": "This shloka/mantra reminds children to practice devotion with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 72,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Devotion",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Devotional Pause — Sacred Context",
        "text": "A parent introduces the devotional pause shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Devotional Pause — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice devotion with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Devotional Pause — Daily Practice",
        "text": "The child tries one small action of devotion, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Devotional Pause — Reflection",
        "text": "Together, parent and child reflect on how devotion can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is devotion, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice devotion with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of devotion feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on devotional pause with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-073",
    "storyId": "shloka-mantra-meaning-exp-v1-073",
    "slug": "shloka-mantra-meaning-exp-v1-073",
    "title": "Kind Farewell Mantra Meaning",
    "shortTitle": "Kind Farewell",
    "summary": "This shloka/mantra reminds children to practice kindness with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 73,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Kind Farewell — Sacred Context",
        "text": "A parent introduces the kind farewell shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Kind Farewell — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice kindness with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Kind Farewell — Daily Practice",
        "text": "The child tries one small action of kindness, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Kind Farewell — Reflection",
        "text": "Together, parent and child reflect on how kindness can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is kindness, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice kindness with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of kindness feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on kind farewell with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-074",
    "storyId": "shloka-mantra-meaning-exp-v1-074",
    "slug": "shloka-mantra-meaning-exp-v1-074",
    "title": "Focused Breathing Mantra Meaning",
    "shortTitle": "Focused Breathing",
    "summary": "This shloka/mantra reminds children to practice focus with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 74,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Focus",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Focused Breathing — Sacred Context",
        "text": "A parent introduces the focused breathing shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Focused Breathing — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice focus with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Focused Breathing — Daily Practice",
        "text": "The child tries one small action of focus, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Focused Breathing — Reflection",
        "text": "Together, parent and child reflect on how focus can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is focus, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice focus with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of focus feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on focused breathing with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-075",
    "storyId": "shloka-mantra-meaning-exp-v1-075",
    "slug": "shloka-mantra-meaning-exp-v1-075",
    "title": "Grateful Good Night Mantra Meaning",
    "shortTitle": "Grateful Good Night",
    "summary": "This shloka/mantra reminds children to practice gratitude with gratitude, calm, and respect in everyday life. It is presented as gentle understanding, not performance.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 75,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Devotion",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent",
      "Family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Grateful Good Night — Sacred Context",
        "text": "A parent introduces the grateful good night shloka/mantra in a warm and respectful way."
      },
      {
        "id": "panel-2",
        "title": "Grateful Good Night — Simple Meaning",
        "text": "This shloka/mantra reminds children to practice gratitude with gratitude, calm, and respect in everyday life."
      },
      {
        "id": "panel-3",
        "title": "Grateful Good Night — Daily Practice",
        "text": "The child tries one small action of gratitude, such as speaking gently, waiting calmly, or helping at home."
      },
      {
        "id": "panel-4",
        "title": "Grateful Good Night — Reflection",
        "text": "Together, parent and child reflect on how gratitude can make the day more peaceful and kind."
      }
    ],
    "parentNote": {
      "sourceContext": "This item explains sacred meaning in simple child-facing language while preserving respect.",
      "valueExplained": "The focus is gratitude, gratitude, calm attention, and devotion in daily life.",
      "discussionPrompt": "What is one moment today where your child can practice gratitude with care and respect?",
      "practicePrompt": "Invite a short pause, one deep breath, and one gentle action.",
      "cautionNote": "Avoid pressure, perfection language, or performance framing."
    },
    "reflectionPrompt": "Which one small step of gratitude feels kind and possible for you today?",
    "ritualPrompt": "Sit quietly for a few breaths and share one gratitude thought.",
    "completionBlessing": "May your heart stay calm, kind, and devoted.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided child reflection on grateful good night with peaceful home setting.",
      "styleGuidance": "Warm, respectful, child-safe, non-performative.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "competition framing",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning-first sacred guidance only. No chanting pressure, no performance framing, no magical claims."
  }
];

export const shlokaMantraMeaningExpansionPackV1StoryPack: StoryPack = { id: 'shloka-mantra-meaning-expansion-pack-v1', title: 'Shloka + Mantra Meaning Expansion Pack v1', childFacingTitle: 'Shloka and Mantra Meaning Journey', description: 'Child-safe sacred meaning pack focused on gratitude, calm, devotion, and parent-guided understanding.', sourceTradition: 'Shloka and Mantra Meaning (Child-Safe)', category: 'values', status: 'indexed', storyIds: shlokaMantraMeaningExpansionPackV1Stories.map((s) => s.id), recommendedAgeBands: ['6-8', '9-12'], contentSafetyNotes: ['Meaning-first only; no chanting performance mechanics.', 'No backend, no mic capture, no TTS, no audio playback feature changes.'], sacredRespectNotes: ['Sacred content is presented with warmth, restraint, and parent trust.'] };

export const shlokaMantraMeaningExpansionPackV1Journey: DharmaJourney = { id: 'shloka-mantra-meaning-journey-v1', title: 'Shloka + Mantra Meaning Journey v1', childFacingTitle: 'Shloka Meaning Journey', description: 'Parent-guided sacred meaning journey with child-safe reflections and calm practice.', sourceTradition: 'Shloka and Mantra Meaning (Child-Safe)', recommendedAgeBands: ['6-8', '9-12'], storyIds: shlokaMantraMeaningExpansionPackV1Stories.map((s) => s.id), estimatedCompletionWeeks: 8, status: 'indexed', journeyType: 'guided_path' };
