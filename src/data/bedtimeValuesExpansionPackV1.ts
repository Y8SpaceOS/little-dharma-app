import type { Story, StoryPack } from '@/types/contentModel';
import type { StoryExperienceCategoryId } from '@/types/storyExperienceIndex';

type ExtendedStory = Story & { storyId: string; primaryCategoryId: StoryExperienceCategoryId; secondaryCategoryIds: StoryExperienceCategoryId[]; readinessStatus: 'metadata_only' | 'qa_ready'; audioStatus: 'script_needed' | 'script_ready'; journeyStatus: 'journey_ordered'; audioScript?: { narrationScript: string; voiceDirection: string; pronunciationNotes: string; pacingNotes: string; audioReadinessIntent: 'ready' }; };

export const bedtimeValuesExpansionPackV1Stories: ExtendedStory[] = [
  {
    "id": "bedtime-values-exp-v1-001",
    "storyId": "bedtime-values-exp-v1-001",
    "slug": "bedtime-values-exp-v1-001",
    "title": "Bedtime values story 1: Yashoda\u2019s soft lamp",
    "shortTitle": "Bedtime values story 1: Yashoda\u2019s soft lamp",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 1,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Truthfulness",
      "Humility"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At Ayodhya, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Yashoda notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices kindness by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice kindness in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Bedtime values story 1: Yashoda\u2019s soft lamp. In a quiet home, bedtime becomes a moment for kindness, gratitude, and gentle repair.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow and soothing with short pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-002",
    "storyId": "bedtime-values-exp-v1-002",
    "slug": "bedtime-values-exp-v1-002",
    "title": "Bedtime values story 2: Ganesha listens first",
    "shortTitle": "Bedtime values story 2: Ganesha listens first",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 2,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Truthfulness",
    "secondaryValues": [
      "Patience",
      "Service"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At Kailash, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Ganesha notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices truthfulness by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice truthfulness in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Bedtime values story 2: Ganesha listens first. In a quiet home, bedtime becomes a moment for truthfulness, gratitude, and gentle repair.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow and soothing with short pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-003",
    "storyId": "bedtime-values-exp-v1-003",
    "slug": "bedtime-values-exp-v1-003",
    "title": "Bedtime values story 3: Hanuman quiet prayer",
    "shortTitle": "Bedtime values story 3: Hanuman quiet prayer",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 3,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Humility",
      "Responsibility"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At a Pune apartment, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Hanuman notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices patience by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice patience in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Bedtime values story 3: Hanuman quiet prayer. In a quiet home, bedtime becomes a moment for patience, gratitude, and gentle repair.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow and soothing with short pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-004",
    "storyId": "bedtime-values-exp-v1-004",
    "slug": "bedtime-values-exp-v1-004",
    "title": "Bedtime values story 4: Sita calm hope",
    "shortTitle": "Bedtime values story 4: Sita calm hope",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 4,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Service",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At a village near Yamuna, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Sita notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices humility by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice humility in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Bedtime values story 4: Sita calm hope. In a quiet home, bedtime becomes a moment for humility, gratitude, and gentle repair.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow and soothing with short pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-005",
    "storyId": "bedtime-values-exp-v1-005",
    "slug": "bedtime-values-exp-v1-005",
    "title": "Bedtime values story 5: Rama truthful promise",
    "shortTitle": "Bedtime values story 5: Rama truthful promise",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 5,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Service",
    "secondaryValues": [
      "Responsibility",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At Gokul, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Krishna notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices service by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice service in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Bedtime values story 5: Rama truthful promise. In a quiet home, bedtime becomes a moment for service, gratitude, and gentle repair.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow and soothing with short pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-006",
    "storyId": "bedtime-values-exp-v1-006",
    "slug": "bedtime-values-exp-v1-006",
    "title": "Bedtime values story 6: Family gratitude",
    "shortTitle": "Bedtime values story 6: Family gratitude",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 6,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Gratitude",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At Ayodhya, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Yashoda notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices responsibility by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice responsibility in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Bedtime values story 6: Family gratitude. In a quiet home, bedtime becomes a moment for responsibility, gratitude, and gentle repair.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow and soothing with short pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-007",
    "storyId": "bedtime-values-exp-v1-007",
    "slug": "bedtime-values-exp-v1-007",
    "title": "Bedtime values story 7: Kindness before sleep",
    "shortTitle": "Bedtime values story 7: Kindness before sleep",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 7,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Calm",
      "Truthfulness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At Kailash, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Ganesha notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices gratitude by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice gratitude in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Bedtime values story 7: Kindness before sleep. In a quiet home, bedtime becomes a moment for gratitude, gratitude, and gentle repair.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow and soothing with short pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-008",
    "storyId": "bedtime-values-exp-v1-008",
    "slug": "bedtime-values-exp-v1-008",
    "title": "Bedtime values story 8: Truth and repair",
    "shortTitle": "Bedtime values story 8: Truth and repair",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 8,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Kindness",
      "Patience"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At a Pune apartment, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Hanuman notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices calm by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice calm in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Bedtime values story 8: Truth and repair. In a quiet home, bedtime becomes a moment for calm, gratitude, and gentle repair.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow and soothing with short pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-009",
    "storyId": "bedtime-values-exp-v1-009",
    "slug": "bedtime-values-exp-v1-009",
    "title": "Bedtime values story 9: Sharing and patience",
    "shortTitle": "Bedtime values story 9: Sharing and patience",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 9,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Truthfulness",
      "Humility"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At a village near Yamuna, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Sita notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices kindness by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice kindness in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Bedtime values story 9: Sharing and patience. In a quiet home, bedtime becomes a moment for kindness, gratitude, and gentle repair.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow and soothing with short pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-010",
    "storyId": "bedtime-values-exp-v1-010",
    "slug": "bedtime-values-exp-v1-010",
    "title": "Bedtime values story 10: Krishna in Gokul",
    "shortTitle": "Bedtime values story 10: Krishna in Gokul",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 10,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Truthfulness",
    "secondaryValues": [
      "Patience",
      "Service"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At Gokul, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Krishna notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices truthfulness by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice truthfulness in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Bedtime values story 10: Krishna in Gokul. In a quiet home, bedtime becomes a moment for truthfulness, gratitude, and gentle repair.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow and soothing with short pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-011",
    "storyId": "bedtime-values-exp-v1-011",
    "slug": "bedtime-values-exp-v1-011",
    "title": "Bedtime values story 11: Yashoda\u2019s soft lamp",
    "shortTitle": "Bedtime values story 11: Yashoda\u2019s soft lamp",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 11,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Humility",
      "Responsibility"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At Ayodhya, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Yashoda notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices patience by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice patience in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Bedtime values story 11: Yashoda\u2019s soft lamp. In a quiet home, bedtime becomes a moment for patience, gratitude, and gentle repair.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow and soothing with short pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-012",
    "storyId": "bedtime-values-exp-v1-012",
    "slug": "bedtime-values-exp-v1-012",
    "title": "Bedtime values story 12: Ganesha listens first",
    "shortTitle": "Bedtime values story 12: Ganesha listens first",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 12,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Service",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At Kailash, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Ganesha notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices humility by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice humility in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Bedtime values story 12: Ganesha listens first. In a quiet home, bedtime becomes a moment for humility, gratitude, and gentle repair.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow and soothing with short pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-013",
    "storyId": "bedtime-values-exp-v1-013",
    "slug": "bedtime-values-exp-v1-013",
    "title": "Bedtime values story 13: Hanuman quiet prayer",
    "shortTitle": "Bedtime values story 13: Hanuman quiet prayer",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 13,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Service",
    "secondaryValues": [
      "Responsibility",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At a Pune apartment, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Hanuman notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices service by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice service in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Bedtime values story 13: Hanuman quiet prayer. In a quiet home, bedtime becomes a moment for service, gratitude, and gentle repair.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow and soothing with short pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-014",
    "storyId": "bedtime-values-exp-v1-014",
    "slug": "bedtime-values-exp-v1-014",
    "title": "Bedtime values story 14: Sita calm hope",
    "shortTitle": "Bedtime values story 14: Sita calm hope",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 14,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Gratitude",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At a village near Yamuna, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Sita notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices responsibility by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice responsibility in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Bedtime values story 14: Sita calm hope. In a quiet home, bedtime becomes a moment for responsibility, gratitude, and gentle repair.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow and soothing with short pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-015",
    "storyId": "bedtime-values-exp-v1-015",
    "slug": "bedtime-values-exp-v1-015",
    "title": "Bedtime values story 15: Rama truthful promise",
    "shortTitle": "Bedtime values story 15: Rama truthful promise",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 15,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Calm",
      "Truthfulness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At Gokul, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Krishna notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices gratitude by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice gratitude in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Bedtime values story 15: Rama truthful promise. In a quiet home, bedtime becomes a moment for gratitude, gratitude, and gentle repair.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow and soothing with short pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-016",
    "storyId": "bedtime-values-exp-v1-016",
    "slug": "bedtime-values-exp-v1-016",
    "title": "Bedtime values story 16: Family gratitude",
    "shortTitle": "Bedtime values story 16: Family gratitude",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 16,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Kindness",
      "Patience"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At Ayodhya, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Yashoda notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices calm by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice calm in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Bedtime values story 16: Family gratitude. In a quiet home, bedtime becomes a moment for calm, gratitude, and gentle repair.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow and soothing with short pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-017",
    "storyId": "bedtime-values-exp-v1-017",
    "slug": "bedtime-values-exp-v1-017",
    "title": "Bedtime values story 17: Kindness before sleep",
    "shortTitle": "Bedtime values story 17: Kindness before sleep",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 17,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Truthfulness",
      "Humility"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At Kailash, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Ganesha notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices kindness by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice kindness in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Bedtime values story 17: Kindness before sleep. In a quiet home, bedtime becomes a moment for kindness, gratitude, and gentle repair.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow and soothing with short pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-018",
    "storyId": "bedtime-values-exp-v1-018",
    "slug": "bedtime-values-exp-v1-018",
    "title": "Bedtime values story 18: Truth and repair",
    "shortTitle": "Bedtime values story 18: Truth and repair",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 18,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Truthfulness",
    "secondaryValues": [
      "Patience",
      "Service"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At a Pune apartment, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Hanuman notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices truthfulness by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice truthfulness in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Bedtime values story 18: Truth and repair. In a quiet home, bedtime becomes a moment for truthfulness, gratitude, and gentle repair.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow and soothing with short pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-019",
    "storyId": "bedtime-values-exp-v1-019",
    "slug": "bedtime-values-exp-v1-019",
    "title": "Bedtime values story 19: Sharing and patience",
    "shortTitle": "Bedtime values story 19: Sharing and patience",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 19,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Humility",
      "Responsibility"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At a village near Yamuna, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Sita notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices patience by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice patience in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Bedtime values story 19: Sharing and patience. In a quiet home, bedtime becomes a moment for patience, gratitude, and gentle repair.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow and soothing with short pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-020",
    "storyId": "bedtime-values-exp-v1-020",
    "slug": "bedtime-values-exp-v1-020",
    "title": "Bedtime values story 20: Krishna in Gokul",
    "shortTitle": "Bedtime values story 20: Krishna in Gokul",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 20,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Service",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At Gokul, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Krishna notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices humility by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice humility in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Bedtime values story 20: Krishna in Gokul. In a quiet home, bedtime becomes a moment for humility, gratitude, and gentle repair.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow and soothing with short pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-021",
    "storyId": "bedtime-values-exp-v1-021",
    "slug": "bedtime-values-exp-v1-021",
    "title": "Bedtime values story 21: Yashoda\u2019s soft lamp",
    "shortTitle": "Bedtime values story 21: Yashoda\u2019s soft lamp",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 21,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Service",
    "secondaryValues": [
      "Responsibility",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At Ayodhya, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Yashoda notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices service by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice service in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Bedtime values story 21: Yashoda\u2019s soft lamp. In a quiet home, bedtime becomes a moment for service, gratitude, and gentle repair.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow and soothing with short pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-022",
    "storyId": "bedtime-values-exp-v1-022",
    "slug": "bedtime-values-exp-v1-022",
    "title": "Bedtime values story 22: Ganesha listens first",
    "shortTitle": "Bedtime values story 22: Ganesha listens first",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 22,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Gratitude",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At Kailash, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Ganesha notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices responsibility by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice responsibility in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Bedtime values story 22: Ganesha listens first. In a quiet home, bedtime becomes a moment for responsibility, gratitude, and gentle repair.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow and soothing with short pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-023",
    "storyId": "bedtime-values-exp-v1-023",
    "slug": "bedtime-values-exp-v1-023",
    "title": "Bedtime values story 23: Hanuman quiet prayer",
    "shortTitle": "Bedtime values story 23: Hanuman quiet prayer",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 23,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Calm",
      "Truthfulness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At a Pune apartment, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Hanuman notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices gratitude by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice gratitude in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Bedtime values story 23: Hanuman quiet prayer. In a quiet home, bedtime becomes a moment for gratitude, gratitude, and gentle repair.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow and soothing with short pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-024",
    "storyId": "bedtime-values-exp-v1-024",
    "slug": "bedtime-values-exp-v1-024",
    "title": "Bedtime values story 24: Sita calm hope",
    "shortTitle": "Bedtime values story 24: Sita calm hope",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 24,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Kindness",
      "Patience"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At a village near Yamuna, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Sita notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices calm by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice calm in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Bedtime values story 24: Sita calm hope. In a quiet home, bedtime becomes a moment for calm, gratitude, and gentle repair.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow and soothing with short pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-025",
    "storyId": "bedtime-values-exp-v1-025",
    "slug": "bedtime-values-exp-v1-025",
    "title": "Bedtime values story 25: Rama truthful promise",
    "shortTitle": "Bedtime values story 25: Rama truthful promise",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 25,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Truthfulness",
      "Humility"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At Gokul, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Krishna notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices kindness by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice kindness in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Bedtime values story 25: Rama truthful promise. In a quiet home, bedtime becomes a moment for kindness, gratitude, and gentle repair.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow and soothing with short pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-026",
    "storyId": "bedtime-values-exp-v1-026",
    "slug": "bedtime-values-exp-v1-026",
    "title": "Bedtime values story 26: Family gratitude",
    "shortTitle": "Bedtime values story 26: Family gratitude",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 26,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Truthfulness",
    "secondaryValues": [
      "Patience",
      "Service"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At Ayodhya, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Yashoda notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices truthfulness by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice truthfulness in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-027",
    "storyId": "bedtime-values-exp-v1-027",
    "slug": "bedtime-values-exp-v1-027",
    "title": "Bedtime values story 27: Kindness before sleep",
    "shortTitle": "Bedtime values story 27: Kindness before sleep",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 27,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Humility",
      "Responsibility"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At Kailash, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Ganesha notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices patience by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice patience in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-028",
    "storyId": "bedtime-values-exp-v1-028",
    "slug": "bedtime-values-exp-v1-028",
    "title": "Bedtime values story 28: Truth and repair",
    "shortTitle": "Bedtime values story 28: Truth and repair",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 28,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Service",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At a Pune apartment, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Hanuman notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices humility by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice humility in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-029",
    "storyId": "bedtime-values-exp-v1-029",
    "slug": "bedtime-values-exp-v1-029",
    "title": "Bedtime values story 29: Sharing and patience",
    "shortTitle": "Bedtime values story 29: Sharing and patience",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 29,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Service",
    "secondaryValues": [
      "Responsibility",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At a village near Yamuna, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Sita notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices service by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice service in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-030",
    "storyId": "bedtime-values-exp-v1-030",
    "slug": "bedtime-values-exp-v1-030",
    "title": "Bedtime values story 30: Krishna in Gokul",
    "shortTitle": "Bedtime values story 30: Krishna in Gokul",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 30,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Gratitude",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At Gokul, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Krishna notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices responsibility by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice responsibility in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-031",
    "storyId": "bedtime-values-exp-v1-031",
    "slug": "bedtime-values-exp-v1-031",
    "title": "Bedtime values story 31: Yashoda\u2019s soft lamp",
    "shortTitle": "Bedtime values story 31: Yashoda\u2019s soft lamp",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 31,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Calm",
      "Truthfulness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At Ayodhya, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Yashoda notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices gratitude by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice gratitude in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-032",
    "storyId": "bedtime-values-exp-v1-032",
    "slug": "bedtime-values-exp-v1-032",
    "title": "Bedtime values story 32: Ganesha listens first",
    "shortTitle": "Bedtime values story 32: Ganesha listens first",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 32,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Kindness",
      "Patience"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At Kailash, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Ganesha notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices calm by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice calm in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-033",
    "storyId": "bedtime-values-exp-v1-033",
    "slug": "bedtime-values-exp-v1-033",
    "title": "Bedtime values story 33: Hanuman quiet prayer",
    "shortTitle": "Bedtime values story 33: Hanuman quiet prayer",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 33,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Truthfulness",
      "Humility"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At a Pune apartment, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Hanuman notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices kindness by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice kindness in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-034",
    "storyId": "bedtime-values-exp-v1-034",
    "slug": "bedtime-values-exp-v1-034",
    "title": "Bedtime values story 34: Sita calm hope",
    "shortTitle": "Bedtime values story 34: Sita calm hope",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 34,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Truthfulness",
    "secondaryValues": [
      "Patience",
      "Service"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At a village near Yamuna, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Sita notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices truthfulness by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice truthfulness in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-035",
    "storyId": "bedtime-values-exp-v1-035",
    "slug": "bedtime-values-exp-v1-035",
    "title": "Bedtime values story 35: Rama truthful promise",
    "shortTitle": "Bedtime values story 35: Rama truthful promise",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 35,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Humility",
      "Responsibility"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Quiet beginning",
        "text": "At Gokul, the evening slows as family members fold blankets and lower their voices."
      },
      {
        "id": "panel-2",
        "title": "Warm detail",
        "text": "A soft lamp is lit, warm milk is shared, and Krishna notices how small acts help everyone feel safe."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When a small mistake appears, the child practices patience by telling the truth, helping repair, and asking how to make things right."
      },
      {
        "id": "panel-4",
        "title": "Restful close",
        "text": "Before sleep, the family thanks nature, elders, and one another, then chooses one kind action for tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice patience in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-036",
    "storyId": "bedtime-values-exp-v1-036",
    "slug": "bedtime-values-exp-v1-036",
    "title": "Bedtime values story 36: Family gratitude",
    "shortTitle": "Bedtime values story 36: Family gratitude",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 36,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Service",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice humility in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-037",
    "storyId": "bedtime-values-exp-v1-037",
    "slug": "bedtime-values-exp-v1-037",
    "title": "Bedtime values story 37: Kindness before sleep",
    "shortTitle": "Bedtime values story 37: Kindness before sleep",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 37,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Service",
    "secondaryValues": [
      "Responsibility",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice service in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-038",
    "storyId": "bedtime-values-exp-v1-038",
    "slug": "bedtime-values-exp-v1-038",
    "title": "Bedtime values story 38: Truth and repair",
    "shortTitle": "Bedtime values story 38: Truth and repair",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 38,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Gratitude",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice responsibility in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-039",
    "storyId": "bedtime-values-exp-v1-039",
    "slug": "bedtime-values-exp-v1-039",
    "title": "Bedtime values story 39: Sharing and patience",
    "shortTitle": "Bedtime values story 39: Sharing and patience",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 39,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Calm",
      "Truthfulness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice gratitude in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-040",
    "storyId": "bedtime-values-exp-v1-040",
    "slug": "bedtime-values-exp-v1-040",
    "title": "Bedtime values story 40: Krishna in Gokul",
    "shortTitle": "Bedtime values story 40: Krishna in Gokul",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 40,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Kindness",
      "Patience"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice calm in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-041",
    "storyId": "bedtime-values-exp-v1-041",
    "slug": "bedtime-values-exp-v1-041",
    "title": "Bedtime values story 41: Yashoda\u2019s soft lamp",
    "shortTitle": "Bedtime values story 41: Yashoda\u2019s soft lamp",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 41,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Truthfulness",
      "Humility"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice kindness in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-042",
    "storyId": "bedtime-values-exp-v1-042",
    "slug": "bedtime-values-exp-v1-042",
    "title": "Bedtime values story 42: Ganesha listens first",
    "shortTitle": "Bedtime values story 42: Ganesha listens first",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 42,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Truthfulness",
    "secondaryValues": [
      "Patience",
      "Service"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice truthfulness in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-043",
    "storyId": "bedtime-values-exp-v1-043",
    "slug": "bedtime-values-exp-v1-043",
    "title": "Bedtime values story 43: Hanuman quiet prayer",
    "shortTitle": "Bedtime values story 43: Hanuman quiet prayer",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 43,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Humility",
      "Responsibility"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice patience in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-044",
    "storyId": "bedtime-values-exp-v1-044",
    "slug": "bedtime-values-exp-v1-044",
    "title": "Bedtime values story 44: Sita calm hope",
    "shortTitle": "Bedtime values story 44: Sita calm hope",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 44,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Service",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice humility in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-045",
    "storyId": "bedtime-values-exp-v1-045",
    "slug": "bedtime-values-exp-v1-045",
    "title": "Bedtime values story 45: Rama truthful promise",
    "shortTitle": "Bedtime values story 45: Rama truthful promise",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 45,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Service",
    "secondaryValues": [
      "Responsibility",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice service in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-046",
    "storyId": "bedtime-values-exp-v1-046",
    "slug": "bedtime-values-exp-v1-046",
    "title": "Bedtime values story 46: Family gratitude",
    "shortTitle": "Bedtime values story 46: Family gratitude",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 46,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Gratitude",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice responsibility in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-047",
    "storyId": "bedtime-values-exp-v1-047",
    "slug": "bedtime-values-exp-v1-047",
    "title": "Bedtime values story 47: Kindness before sleep",
    "shortTitle": "Bedtime values story 47: Kindness before sleep",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 47,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Calm",
      "Truthfulness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice gratitude in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-048",
    "storyId": "bedtime-values-exp-v1-048",
    "slug": "bedtime-values-exp-v1-048",
    "title": "Bedtime values story 48: Truth and repair",
    "shortTitle": "Bedtime values story 48: Truth and repair",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 48,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Kindness",
      "Patience"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice calm in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-049",
    "storyId": "bedtime-values-exp-v1-049",
    "slug": "bedtime-values-exp-v1-049",
    "title": "Bedtime values story 49: Sharing and patience",
    "shortTitle": "Bedtime values story 49: Sharing and patience",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 49,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Truthfulness",
      "Humility"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice kindness in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-050",
    "storyId": "bedtime-values-exp-v1-050",
    "slug": "bedtime-values-exp-v1-050",
    "title": "Bedtime values story 50: Krishna in Gokul",
    "shortTitle": "Bedtime values story 50: Krishna in Gokul",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 50,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Truthfulness",
    "secondaryValues": [
      "Patience",
      "Service"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice truthfulness in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-051",
    "storyId": "bedtime-values-exp-v1-051",
    "slug": "bedtime-values-exp-v1-051",
    "title": "Bedtime values story 51: Yashoda\u2019s soft lamp",
    "shortTitle": "Bedtime values story 51: Yashoda\u2019s soft lamp",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 51,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Humility",
      "Responsibility"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice patience in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-052",
    "storyId": "bedtime-values-exp-v1-052",
    "slug": "bedtime-values-exp-v1-052",
    "title": "Bedtime values story 52: Ganesha listens first",
    "shortTitle": "Bedtime values story 52: Ganesha listens first",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 52,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Service",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice humility in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-053",
    "storyId": "bedtime-values-exp-v1-053",
    "slug": "bedtime-values-exp-v1-053",
    "title": "Bedtime values story 53: Hanuman quiet prayer",
    "shortTitle": "Bedtime values story 53: Hanuman quiet prayer",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 53,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Service",
    "secondaryValues": [
      "Responsibility",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice service in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-054",
    "storyId": "bedtime-values-exp-v1-054",
    "slug": "bedtime-values-exp-v1-054",
    "title": "Bedtime values story 54: Sita calm hope",
    "shortTitle": "Bedtime values story 54: Sita calm hope",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 54,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Gratitude",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice responsibility in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-055",
    "storyId": "bedtime-values-exp-v1-055",
    "slug": "bedtime-values-exp-v1-055",
    "title": "Bedtime values story 55: Rama truthful promise",
    "shortTitle": "Bedtime values story 55: Rama truthful promise",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 55,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Calm",
      "Truthfulness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice gratitude in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-056",
    "storyId": "bedtime-values-exp-v1-056",
    "slug": "bedtime-values-exp-v1-056",
    "title": "Bedtime values story 56: Family gratitude",
    "shortTitle": "Bedtime values story 56: Family gratitude",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 56,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Kindness",
      "Patience"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice calm in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-057",
    "storyId": "bedtime-values-exp-v1-057",
    "slug": "bedtime-values-exp-v1-057",
    "title": "Bedtime values story 57: Kindness before sleep",
    "shortTitle": "Bedtime values story 57: Kindness before sleep",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 57,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Truthfulness",
      "Humility"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice kindness in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-058",
    "storyId": "bedtime-values-exp-v1-058",
    "slug": "bedtime-values-exp-v1-058",
    "title": "Bedtime values story 58: Truth and repair",
    "shortTitle": "Bedtime values story 58: Truth and repair",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 58,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Truthfulness",
    "secondaryValues": [
      "Patience",
      "Service"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice truthfulness in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-059",
    "storyId": "bedtime-values-exp-v1-059",
    "slug": "bedtime-values-exp-v1-059",
    "title": "Bedtime values story 59: Sharing and patience",
    "shortTitle": "Bedtime values story 59: Sharing and patience",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 59,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Humility",
      "Responsibility"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice patience in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-060",
    "storyId": "bedtime-values-exp-v1-060",
    "slug": "bedtime-values-exp-v1-060",
    "title": "Bedtime values story 60: Krishna in Gokul",
    "shortTitle": "Bedtime values story 60: Krishna in Gokul",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 60,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Service",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice humility in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-061",
    "storyId": "bedtime-values-exp-v1-061",
    "slug": "bedtime-values-exp-v1-061",
    "title": "Bedtime values story 61: Yashoda\u2019s soft lamp",
    "shortTitle": "Bedtime values story 61: Yashoda\u2019s soft lamp",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 61,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Service",
    "secondaryValues": [
      "Responsibility",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice service in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-062",
    "storyId": "bedtime-values-exp-v1-062",
    "slug": "bedtime-values-exp-v1-062",
    "title": "Bedtime values story 62: Ganesha listens first",
    "shortTitle": "Bedtime values story 62: Ganesha listens first",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 62,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Gratitude",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice responsibility in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-063",
    "storyId": "bedtime-values-exp-v1-063",
    "slug": "bedtime-values-exp-v1-063",
    "title": "Bedtime values story 63: Hanuman quiet prayer",
    "shortTitle": "Bedtime values story 63: Hanuman quiet prayer",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 63,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Calm",
      "Truthfulness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice gratitude in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-064",
    "storyId": "bedtime-values-exp-v1-064",
    "slug": "bedtime-values-exp-v1-064",
    "title": "Bedtime values story 64: Sita calm hope",
    "shortTitle": "Bedtime values story 64: Sita calm hope",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 64,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Kindness",
      "Patience"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice calm in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-065",
    "storyId": "bedtime-values-exp-v1-065",
    "slug": "bedtime-values-exp-v1-065",
    "title": "Bedtime values story 65: Rama truthful promise",
    "shortTitle": "Bedtime values story 65: Rama truthful promise",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 65,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Truthfulness",
      "Humility"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice kindness in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-066",
    "storyId": "bedtime-values-exp-v1-066",
    "slug": "bedtime-values-exp-v1-066",
    "title": "Bedtime values story 66: Family gratitude",
    "shortTitle": "Bedtime values story 66: Family gratitude",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 66,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Truthfulness",
    "secondaryValues": [
      "Patience",
      "Service"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice truthfulness in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-067",
    "storyId": "bedtime-values-exp-v1-067",
    "slug": "bedtime-values-exp-v1-067",
    "title": "Bedtime values story 67: Kindness before sleep",
    "shortTitle": "Bedtime values story 67: Kindness before sleep",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 67,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Humility",
      "Responsibility"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice patience in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-068",
    "storyId": "bedtime-values-exp-v1-068",
    "slug": "bedtime-values-exp-v1-068",
    "title": "Bedtime values story 68: Truth and repair",
    "shortTitle": "Bedtime values story 68: Truth and repair",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 68,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Service",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice humility in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-069",
    "storyId": "bedtime-values-exp-v1-069",
    "slug": "bedtime-values-exp-v1-069",
    "title": "Bedtime values story 69: Sharing and patience",
    "shortTitle": "Bedtime values story 69: Sharing and patience",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 69,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Service",
    "secondaryValues": [
      "Responsibility",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice service in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-070",
    "storyId": "bedtime-values-exp-v1-070",
    "slug": "bedtime-values-exp-v1-070",
    "title": "Bedtime values story 70: Krishna in Gokul",
    "shortTitle": "Bedtime values story 70: Krishna in Gokul",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 70,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Gratitude",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice responsibility in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-071",
    "storyId": "bedtime-values-exp-v1-071",
    "slug": "bedtime-values-exp-v1-071",
    "title": "Bedtime values story 71: Yashoda\u2019s soft lamp",
    "shortTitle": "Bedtime values story 71: Yashoda\u2019s soft lamp",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 71,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Calm",
      "Truthfulness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice gratitude in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-072",
    "storyId": "bedtime-values-exp-v1-072",
    "slug": "bedtime-values-exp-v1-072",
    "title": "Bedtime values story 72: Ganesha listens first",
    "shortTitle": "Bedtime values story 72: Ganesha listens first",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 72,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Kindness",
      "Patience"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice calm in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-073",
    "storyId": "bedtime-values-exp-v1-073",
    "slug": "bedtime-values-exp-v1-073",
    "title": "Bedtime values story 73: Hanuman quiet prayer",
    "shortTitle": "Bedtime values story 73: Hanuman quiet prayer",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 73,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Truthfulness",
      "Humility"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice kindness in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-074",
    "storyId": "bedtime-values-exp-v1-074",
    "slug": "bedtime-values-exp-v1-074",
    "title": "Bedtime values story 74: Sita calm hope",
    "shortTitle": "Bedtime values story 74: Sita calm hope",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 74,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Truthfulness",
    "secondaryValues": [
      "Patience",
      "Service"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice truthfulness in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-075",
    "storyId": "bedtime-values-exp-v1-075",
    "slug": "bedtime-values-exp-v1-075",
    "title": "Bedtime values story 75: Rama truthful promise",
    "shortTitle": "Bedtime values story 75: Rama truthful promise",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 75,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Humility",
      "Responsibility"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice patience in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-076",
    "storyId": "bedtime-values-exp-v1-076",
    "slug": "bedtime-values-exp-v1-076",
    "title": "Bedtime values story 76: Family gratitude",
    "shortTitle": "Bedtime values story 76: Family gratitude",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 76,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Service",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice humility in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-077",
    "storyId": "bedtime-values-exp-v1-077",
    "slug": "bedtime-values-exp-v1-077",
    "title": "Bedtime values story 77: Kindness before sleep",
    "shortTitle": "Bedtime values story 77: Kindness before sleep",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 77,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Service",
    "secondaryValues": [
      "Responsibility",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice service in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-078",
    "storyId": "bedtime-values-exp-v1-078",
    "slug": "bedtime-values-exp-v1-078",
    "title": "Bedtime values story 78: Truth and repair",
    "shortTitle": "Bedtime values story 78: Truth and repair",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 78,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Gratitude",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice responsibility in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-079",
    "storyId": "bedtime-values-exp-v1-079",
    "slug": "bedtime-values-exp-v1-079",
    "title": "Bedtime values story 79: Sharing and patience",
    "shortTitle": "Bedtime values story 79: Sharing and patience",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 79,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Calm",
      "Truthfulness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice gratitude in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-080",
    "storyId": "bedtime-values-exp-v1-080",
    "slug": "bedtime-values-exp-v1-080",
    "title": "Bedtime values story 80: Krishna in Gokul",
    "shortTitle": "Bedtime values story 80: Krishna in Gokul",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 80,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Kindness",
      "Patience"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice calm in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-081",
    "storyId": "bedtime-values-exp-v1-081",
    "slug": "bedtime-values-exp-v1-081",
    "title": "Bedtime values story 81: Yashoda\u2019s soft lamp",
    "shortTitle": "Bedtime values story 81: Yashoda\u2019s soft lamp",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 81,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Truthfulness",
      "Humility"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice kindness in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-082",
    "storyId": "bedtime-values-exp-v1-082",
    "slug": "bedtime-values-exp-v1-082",
    "title": "Bedtime values story 82: Ganesha listens first",
    "shortTitle": "Bedtime values story 82: Ganesha listens first",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 82,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Truthfulness",
    "secondaryValues": [
      "Patience",
      "Service"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice truthfulness in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-083",
    "storyId": "bedtime-values-exp-v1-083",
    "slug": "bedtime-values-exp-v1-083",
    "title": "Bedtime values story 83: Hanuman quiet prayer",
    "shortTitle": "Bedtime values story 83: Hanuman quiet prayer",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 83,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Humility",
      "Responsibility"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice patience in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-084",
    "storyId": "bedtime-values-exp-v1-084",
    "slug": "bedtime-values-exp-v1-084",
    "title": "Bedtime values story 84: Sita calm hope",
    "shortTitle": "Bedtime values story 84: Sita calm hope",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 84,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Service",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice humility in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-085",
    "storyId": "bedtime-values-exp-v1-085",
    "slug": "bedtime-values-exp-v1-085",
    "title": "Bedtime values story 85: Rama truthful promise",
    "shortTitle": "Bedtime values story 85: Rama truthful promise",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 85,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Service",
    "secondaryValues": [
      "Responsibility",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice service in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-086",
    "storyId": "bedtime-values-exp-v1-086",
    "slug": "bedtime-values-exp-v1-086",
    "title": "Bedtime values story 86: Family gratitude",
    "shortTitle": "Bedtime values story 86: Family gratitude",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 86,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Gratitude",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice responsibility in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-087",
    "storyId": "bedtime-values-exp-v1-087",
    "slug": "bedtime-values-exp-v1-087",
    "title": "Bedtime values story 87: Kindness before sleep",
    "shortTitle": "Bedtime values story 87: Kindness before sleep",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 87,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Calm",
      "Truthfulness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice gratitude in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-088",
    "storyId": "bedtime-values-exp-v1-088",
    "slug": "bedtime-values-exp-v1-088",
    "title": "Bedtime values story 88: Truth and repair",
    "shortTitle": "Bedtime values story 88: Truth and repair",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 88,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Kindness",
      "Patience"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice calm in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-089",
    "storyId": "bedtime-values-exp-v1-089",
    "slug": "bedtime-values-exp-v1-089",
    "title": "Bedtime values story 89: Sharing and patience",
    "shortTitle": "Bedtime values story 89: Sharing and patience",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 89,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Truthfulness",
      "Humility"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice kindness in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-090",
    "storyId": "bedtime-values-exp-v1-090",
    "slug": "bedtime-values-exp-v1-090",
    "title": "Bedtime values story 90: Krishna in Gokul",
    "shortTitle": "Bedtime values story 90: Krishna in Gokul",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 90,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Truthfulness",
    "secondaryValues": [
      "Patience",
      "Service"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice truthfulness in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-091",
    "storyId": "bedtime-values-exp-v1-091",
    "slug": "bedtime-values-exp-v1-091",
    "title": "Bedtime values story 91: Yashoda\u2019s soft lamp",
    "shortTitle": "Bedtime values story 91: Yashoda\u2019s soft lamp",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 91,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Humility",
      "Responsibility"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice patience in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-092",
    "storyId": "bedtime-values-exp-v1-092",
    "slug": "bedtime-values-exp-v1-092",
    "title": "Bedtime values story 92: Ganesha listens first",
    "shortTitle": "Bedtime values story 92: Ganesha listens first",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 92,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Service",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice humility in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-093",
    "storyId": "bedtime-values-exp-v1-093",
    "slug": "bedtime-values-exp-v1-093",
    "title": "Bedtime values story 93: Hanuman quiet prayer",
    "shortTitle": "Bedtime values story 93: Hanuman quiet prayer",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 93,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Service",
    "secondaryValues": [
      "Responsibility",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice service in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-094",
    "storyId": "bedtime-values-exp-v1-094",
    "slug": "bedtime-values-exp-v1-094",
    "title": "Bedtime values story 94: Sita calm hope",
    "shortTitle": "Bedtime values story 94: Sita calm hope",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 94,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Gratitude",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice responsibility in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-095",
    "storyId": "bedtime-values-exp-v1-095",
    "slug": "bedtime-values-exp-v1-095",
    "title": "Bedtime values story 95: Rama truthful promise",
    "shortTitle": "Bedtime values story 95: Rama truthful promise",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 95,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Calm",
      "Truthfulness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice gratitude in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-096",
    "storyId": "bedtime-values-exp-v1-096",
    "slug": "bedtime-values-exp-v1-096",
    "title": "Bedtime values story 96: Family gratitude",
    "shortTitle": "Bedtime values story 96: Family gratitude",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 96,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Kindness",
      "Patience"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice calm in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-097",
    "storyId": "bedtime-values-exp-v1-097",
    "slug": "bedtime-values-exp-v1-097",
    "title": "Bedtime values story 97: Kindness before sleep",
    "shortTitle": "Bedtime values story 97: Kindness before sleep",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 97,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Truthfulness",
      "Humility"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice kindness in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-098",
    "storyId": "bedtime-values-exp-v1-098",
    "slug": "bedtime-values-exp-v1-098",
    "title": "Bedtime values story 98: Truth and repair",
    "shortTitle": "Bedtime values story 98: Truth and repair",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 98,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Truthfulness",
    "secondaryValues": [
      "Patience",
      "Service"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice truthfulness in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-099",
    "storyId": "bedtime-values-exp-v1-099",
    "slug": "bedtime-values-exp-v1-099",
    "title": "Bedtime values story 99: Sharing and patience",
    "shortTitle": "Bedtime values story 99: Sharing and patience",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 99,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Humility",
      "Responsibility"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice patience in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bedtime_stories",
    "secondaryCategoryIds": [
      "bedtime_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bedtime-values-exp-v1-100",
    "storyId": "bedtime-values-exp-v1-100",
    "slug": "bedtime-values-exp-v1-100",
    "title": "Bedtime values story 100: Krishna in Gokul",
    "shortTitle": "Bedtime values story 100: Krishna in Gokul",
    "summary": "Child-safe bedtime and values micro-retelling with concrete home details and parent-child reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Curated bedtime and values stories inspired by dharmic family life.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 100,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Service",
      "Gratitude"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [],
    "parentNote": {
      "sourceContext": "References familiar home details and gentle sacred framing for parent-child bedtime reflection.",
      "valueExplained": "Values are modeled through everyday choices before sleep.",
      "discussionPrompt": "Where did you notice humility in tonight\u2019s story?",
      "practicePrompt": "Choose one bedtime kindness to practice tomorrow.",
      "cautionNote": "Keep discussion gentle, brief, and age-appropriate."
    },
    "reflectionPrompt": "What one truthful and kind action can you do tomorrow?",
    "ritualPrompt": "Take three quiet breaths and whisper gratitude before sleep.",
    "completionBlessing": "May your heart stay peaceful, truthful, and kind tonight.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm bedtime scene in an Indian home with family care.",
      "styleGuidance": "Soft lamp light, calm expressions, cozy textiles.",
      "culturalGuardrails": [
        "Respect sacred names and practices",
        "No fear-heavy scenes",
        "No mockery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification language",
        "violent imagery"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_bedtime",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "values_stories",
    "secondaryCategoryIds": [
      "values_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  }
] as ExtendedStory[];

export const bedtimeValuesExpansionPackV1StoryPack: StoryPack = { id: 'bedtime-values-expansion-pack-v1', title: 'Bedtime + Values Expansion Pack v1', childFacingTitle: 'Bedtime & Values Story Basket', description: 'Local-first bedtime and values content expansion with staged QA-ready candidates.', sourceTradition: 'Bedtime and Values', category: 'bedtime', status: 'indexed', storyIds: bedtimeValuesExpansionPackV1Stories.map((story) => story.id), recommendedAgeBands: ['3-5','6-8'], contentSafetyNotes: ['Local-first only.', 'No runtime promotion in this pack.'], sacredRespectNotes: ['Warm, respectful child-safe framing of sacred names and family life.'] };
