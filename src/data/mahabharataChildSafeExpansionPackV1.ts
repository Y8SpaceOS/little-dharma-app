import type { DharmaJourney, Story, StoryPack } from '@/types/contentModel';
import type { StoryExperienceCategoryId } from '@/types/storyExperienceIndex';

type ExtendedStory = Story & { storyId: string; primaryCategoryId: StoryExperienceCategoryId; secondaryCategoryIds: StoryExperienceCategoryId[]; readinessStatus: 'metadata_only' | 'qa_ready'; audioStatus: 'script_needed' | 'script_ready'; journeyStatus: 'journey_ordered'; audioScript?: { narrationScript: string; voiceDirection: string; pronunciationNotes: string; pacingNotes: string; audioReadinessIntent: 'ready' }; };

export const mahabharataChildSafeExpansionPackV1Stories: ExtendedStory[] = [
  {
    "id": "mahabharata-child-safe-exp-v1-001",
    "storyId": "mahabharata-child-safe-exp-v1-001",
    "slug": "mahabharata-child-safe-exp-v1-001",
    "title": "Mahabharata Values Story 1",
    "shortTitle": "Mahabharata Values Story 1",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns friendship through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 1,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 1: at the gurukul garden, Arjuna notices that two friends disagree about turns."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna invites everyone to speak kindly and take turns."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Friendship grows when everyone feels included."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices friendship through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Mahabharata Values Story 1. Story 1: at the gurukul garden, Arjuna notices that two friends disagree about turns. Krishna guides the children to pause, breathe, and think about what is fair and kind. Arjuna invites everyone to speak kindly and take turns. Friendship grows when everyone feels included.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-002",
    "storyId": "mahabharata-child-safe-exp-v1-002",
    "slug": "mahabharata-child-safe-exp-v1-002",
    "title": "Mahabharata Values Story 2",
    "shortTitle": "Mahabharata Values Story 2",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns fairness through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 2,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Fairness",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 2: near the riverside steps, Arjuna notices that a younger child is left out."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses honesty and explains what happened."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Fairness becomes easier when we listen first."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices fairness through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Mahabharata Values Story 2. Story 2: near the riverside steps, Arjuna notices that a younger child is left out. Krishna guides the children to pause, breathe, and think about what is fair and kind. Arjuna chooses honesty and explains what happened. Fairness becomes easier when we listen first.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-003",
    "storyId": "mahabharata-child-safe-exp-v1-003",
    "slug": "mahabharata-child-safe-exp-v1-003",
    "title": "Mahabharata Values Story 3",
    "shortTitle": "Mahabharata Values Story 3",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns patience through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 3,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 3: in the family courtyard, Arjuna notices that a task feels too hard at first."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna waits, breathes, and responds with patience."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Patience helps strong feelings become calm choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices patience through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Mahabharata Values Story 3. Story 3: in the family courtyard, Arjuna notices that a task feels too hard at first. Krishna guides the children to pause, breathe, and think about what is fair and kind. Arjuna waits, breathes, and responds with patience. Patience helps strong feelings become calm choices.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-004",
    "storyId": "mahabharata-child-safe-exp-v1-004",
    "slug": "mahabharata-child-safe-exp-v1-004",
    "title": "Mahabharata Values Story 4",
    "shortTitle": "Mahabharata Values Story 4",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns courage through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 4,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 4: under the banyan tree, Arjuna notices that someone speaks before listening."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna shares tools fairly and thanks each helper."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Courage can be gentle and truthful."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices courage through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Mahabharata Values Story 4. Story 4: under the banyan tree, Arjuna notices that someone speaks before listening. Krishna guides the children to pause, breathe, and think about what is fair and kind. Arjuna shares tools fairly and thanks each helper. Courage can be gentle and truthful.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-005",
    "storyId": "mahabharata-child-safe-exp-v1-005",
    "slug": "mahabharata-child-safe-exp-v1-005",
    "title": "Mahabharata Values Story 5",
    "shortTitle": "Mahabharata Values Story 5",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns truth through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 5,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Truth",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 5: by the lamp-lit study room, Arjuna notices that a promise is nearly forgotten."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna asks elders for wise guidance before deciding."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Humility keeps success warm and shared."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices truth through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Mahabharata Values Story 5. Story 5: by the lamp-lit study room, Arjuna notices that a promise is nearly forgotten. Krishna guides the children to pause, breathe, and think about what is fair and kind. Arjuna asks elders for wise guidance before deciding. Humility keeps success warm and shared.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-006",
    "storyId": "mahabharata-child-safe-exp-v1-006",
    "slug": "mahabharata-child-safe-exp-v1-006",
    "title": "Mahabharata Values Story 6",
    "shortTitle": "Mahabharata Values Story 6",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns humility through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 6,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 6: at the morning prayer hall, Arjuna notices that a mistake is hidden in worry."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna apologizes gently and repairs what can be repaired."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Wise choices create peaceful consequences."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices humility through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Mahabharata Values Story 6. Story 6: at the morning prayer hall, Arjuna notices that a mistake is hidden in worry. Krishna guides the children to pause, breathe, and think about what is fair and kind. Arjuna apologizes gently and repairs what can be repaired. Wise choices create peaceful consequences.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-007",
    "storyId": "mahabharata-child-safe-exp-v1-007",
    "slug": "mahabharata-child-safe-exp-v1-007",
    "title": "Mahabharata Values Story 7",
    "shortTitle": "Mahabharata Values Story 7",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns wisdom through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 7,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Wisdom",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 7: in the kitchen during seva, Arjuna notices that credit is given to only one child."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna includes the quiet child and makes space."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Family responsibility builds trust every day."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices wisdom through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Mahabharata Values Story 7. Story 7: in the kitchen during seva, Arjuna notices that credit is given to only one child. Krishna guides the children to pause, breathe, and think about what is fair and kind. Arjuna includes the quiet child and makes space. Family responsibility builds trust every day.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-008",
    "storyId": "mahabharata-child-safe-exp-v1-008",
    "slug": "mahabharata-child-safe-exp-v1-008",
    "title": "Mahabharata Values Story 8",
    "shortTitle": "Mahabharata Values Story 8",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns family responsibility through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 8,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Family Responsibility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 8: on the path to class, Arjuna notices that a queue becomes impatient."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna finishes family duty before games."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Simple dharma means doing the next right thing kindly."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices family responsibility through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Mahabharata Values Story 8. Story 8: on the path to class, Arjuna notices that a queue becomes impatient. Krishna guides the children to pause, breathe, and think about what is fair and kind. Arjuna finishes family duty before games. Simple dharma means doing the next right thing kindly.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-009",
    "storyId": "mahabharata-child-safe-exp-v1-009",
    "slug": "mahabharata-child-safe-exp-v1-009",
    "title": "Mahabharata Values Story 9",
    "shortTitle": "Mahabharata Values Story 9",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns choices through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 9,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Choices",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 9: beside the grain store, Arjuna notices that shared supplies run low."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna returns what was borrowed with gratitude."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Friendship grows when everyone feels included."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices choices through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Mahabharata Values Story 9. Story 9: beside the grain store, Arjuna notices that shared supplies run low. Krishna guides the children to pause, breathe, and think about what is fair and kind. Arjuna returns what was borrowed with gratitude. Friendship grows when everyone feels included.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-010",
    "storyId": "mahabharata-child-safe-exp-v1-010",
    "slug": "mahabharata-child-safe-exp-v1-010",
    "title": "Mahabharata Values Story 10",
    "shortTitle": "Mahabharata Values Story 10",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns consequences through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 10,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Consequences",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 10: in the village craft corner, Arjuna notices that a sibling needs help before play."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses a truthful path even when it is hard."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Fairness becomes easier when we listen first."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices consequences through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Mahabharata Values Story 10. Story 10: in the village craft corner, Arjuna notices that a sibling needs help before play. Krishna guides the children to pause, breathe, and think about what is fair and kind. Arjuna chooses a truthful path even when it is hard. Fairness becomes easier when we listen first.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-011",
    "storyId": "mahabharata-child-safe-exp-v1-011",
    "slug": "mahabharata-child-safe-exp-v1-011",
    "title": "Mahabharata Values Story 11",
    "shortTitle": "Mahabharata Values Story 11",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns dharma through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 11,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Dharma",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 11: at the gurukul garden, Arjuna notices that two friends disagree about turns."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna invites everyone to speak kindly and take turns."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Patience helps strong feelings become calm choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices dharma through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Mahabharata Values Story 11. Story 11: at the gurukul garden, Arjuna notices that two friends disagree about turns. Krishna guides the children to pause, breathe, and think about what is fair and kind. Arjuna invites everyone to speak kindly and take turns. Patience helps strong feelings become calm choices.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-012",
    "storyId": "mahabharata-child-safe-exp-v1-012",
    "slug": "mahabharata-child-safe-exp-v1-012",
    "title": "Mahabharata Values Story 12",
    "shortTitle": "Mahabharata Values Story 12",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns friendship through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 12,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 12: near the riverside steps, Arjuna notices that a younger child is left out."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses honesty and explains what happened."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Courage can be gentle and truthful."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices friendship through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Mahabharata Values Story 12. Story 12: near the riverside steps, Arjuna notices that a younger child is left out. Krishna guides the children to pause, breathe, and think about what is fair and kind. Arjuna chooses honesty and explains what happened. Courage can be gentle and truthful.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-013",
    "storyId": "mahabharata-child-safe-exp-v1-013",
    "slug": "mahabharata-child-safe-exp-v1-013",
    "title": "Mahabharata Values Story 13",
    "shortTitle": "Mahabharata Values Story 13",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns fairness through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 13,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Fairness",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 13: in the family courtyard, Arjuna notices that a task feels too hard at first."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna waits, breathes, and responds with patience."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Humility keeps success warm and shared."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices fairness through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Mahabharata Values Story 13. Story 13: in the family courtyard, Arjuna notices that a task feels too hard at first. Krishna guides the children to pause, breathe, and think about what is fair and kind. Arjuna waits, breathes, and responds with patience. Humility keeps success warm and shared.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-014",
    "storyId": "mahabharata-child-safe-exp-v1-014",
    "slug": "mahabharata-child-safe-exp-v1-014",
    "title": "Mahabharata Values Story 14",
    "shortTitle": "Mahabharata Values Story 14",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns patience through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 14,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 14: under the banyan tree, Arjuna notices that someone speaks before listening."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna shares tools fairly and thanks each helper."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Wise choices create peaceful consequences."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices patience through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Mahabharata Values Story 14. Story 14: under the banyan tree, Arjuna notices that someone speaks before listening. Krishna guides the children to pause, breathe, and think about what is fair and kind. Arjuna shares tools fairly and thanks each helper. Wise choices create peaceful consequences.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-015",
    "storyId": "mahabharata-child-safe-exp-v1-015",
    "slug": "mahabharata-child-safe-exp-v1-015",
    "title": "Mahabharata Values Story 15",
    "shortTitle": "Mahabharata Values Story 15",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns courage through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 15,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 15: by the lamp-lit study room, Arjuna notices that a promise is nearly forgotten."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna asks elders for wise guidance before deciding."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Family responsibility builds trust every day."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices courage through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Mahabharata Values Story 15. Story 15: by the lamp-lit study room, Arjuna notices that a promise is nearly forgotten. Krishna guides the children to pause, breathe, and think about what is fair and kind. Arjuna asks elders for wise guidance before deciding. Family responsibility builds trust every day.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-016",
    "storyId": "mahabharata-child-safe-exp-v1-016",
    "slug": "mahabharata-child-safe-exp-v1-016",
    "title": "Mahabharata Values Story 16",
    "shortTitle": "Mahabharata Values Story 16",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns truth through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 16,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Truth",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 16: at the morning prayer hall, Arjuna notices that a mistake is hidden in worry."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna apologizes gently and repairs what can be repaired."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Simple dharma means doing the next right thing kindly."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices truth through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Mahabharata Values Story 16. Story 16: at the morning prayer hall, Arjuna notices that a mistake is hidden in worry. Krishna guides the children to pause, breathe, and think about what is fair and kind. Arjuna apologizes gently and repairs what can be repaired. Simple dharma means doing the next right thing kindly.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-017",
    "storyId": "mahabharata-child-safe-exp-v1-017",
    "slug": "mahabharata-child-safe-exp-v1-017",
    "title": "Mahabharata Values Story 17",
    "shortTitle": "Mahabharata Values Story 17",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns humility through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 17,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 17: in the kitchen during seva, Arjuna notices that credit is given to only one child."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna includes the quiet child and makes space."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Friendship grows when everyone feels included."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices humility through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Mahabharata Values Story 17. Story 17: in the kitchen during seva, Arjuna notices that credit is given to only one child. Krishna guides the children to pause, breathe, and think about what is fair and kind. Arjuna includes the quiet child and makes space. Friendship grows when everyone feels included.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-018",
    "storyId": "mahabharata-child-safe-exp-v1-018",
    "slug": "mahabharata-child-safe-exp-v1-018",
    "title": "Mahabharata Values Story 18",
    "shortTitle": "Mahabharata Values Story 18",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns wisdom through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 18,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Wisdom",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 18: on the path to class, Arjuna notices that a queue becomes impatient."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna finishes family duty before games."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Fairness becomes easier when we listen first."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices wisdom through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Mahabharata Values Story 18. Story 18: on the path to class, Arjuna notices that a queue becomes impatient. Krishna guides the children to pause, breathe, and think about what is fair and kind. Arjuna finishes family duty before games. Fairness becomes easier when we listen first.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-019",
    "storyId": "mahabharata-child-safe-exp-v1-019",
    "slug": "mahabharata-child-safe-exp-v1-019",
    "title": "Mahabharata Values Story 19",
    "shortTitle": "Mahabharata Values Story 19",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns family responsibility through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 19,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Family Responsibility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 19: beside the grain store, Arjuna notices that shared supplies run low."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna returns what was borrowed with gratitude."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Patience helps strong feelings become calm choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices family responsibility through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Mahabharata Values Story 19. Story 19: beside the grain store, Arjuna notices that shared supplies run low. Krishna guides the children to pause, breathe, and think about what is fair and kind. Arjuna returns what was borrowed with gratitude. Patience helps strong feelings become calm choices.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-020",
    "storyId": "mahabharata-child-safe-exp-v1-020",
    "slug": "mahabharata-child-safe-exp-v1-020",
    "title": "Mahabharata Values Story 20",
    "shortTitle": "Mahabharata Values Story 20",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns choices through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 20,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Choices",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 20: in the village craft corner, Arjuna notices that a sibling needs help before play."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses a truthful path even when it is hard."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Courage can be gentle and truthful."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices choices through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Mahabharata Values Story 20. Story 20: in the village craft corner, Arjuna notices that a sibling needs help before play. Krishna guides the children to pause, breathe, and think about what is fair and kind. Arjuna chooses a truthful path even when it is hard. Courage can be gentle and truthful.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-021",
    "storyId": "mahabharata-child-safe-exp-v1-021",
    "slug": "mahabharata-child-safe-exp-v1-021",
    "title": "Mahabharata Values Story 21",
    "shortTitle": "Mahabharata Values Story 21",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns consequences through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 21,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Consequences",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 21: at the gurukul garden, Arjuna notices that two friends disagree about turns."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna invites everyone to speak kindly and take turns."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Humility keeps success warm and shared."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices consequences through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Mahabharata Values Story 21. Story 21: at the gurukul garden, Arjuna notices that two friends disagree about turns. Krishna guides the children to pause, breathe, and think about what is fair and kind. Arjuna invites everyone to speak kindly and take turns. Humility keeps success warm and shared.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-022",
    "storyId": "mahabharata-child-safe-exp-v1-022",
    "slug": "mahabharata-child-safe-exp-v1-022",
    "title": "Mahabharata Values Story 22",
    "shortTitle": "Mahabharata Values Story 22",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns dharma through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 22,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Dharma",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 22: near the riverside steps, Arjuna notices that a younger child is left out."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses honesty and explains what happened."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Wise choices create peaceful consequences."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices dharma through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Mahabharata Values Story 22. Story 22: near the riverside steps, Arjuna notices that a younger child is left out. Krishna guides the children to pause, breathe, and think about what is fair and kind. Arjuna chooses honesty and explains what happened. Wise choices create peaceful consequences.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-023",
    "storyId": "mahabharata-child-safe-exp-v1-023",
    "slug": "mahabharata-child-safe-exp-v1-023",
    "title": "Mahabharata Values Story 23",
    "shortTitle": "Mahabharata Values Story 23",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns friendship through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 23,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 23: in the family courtyard, Arjuna notices that a task feels too hard at first."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna waits, breathes, and responds with patience."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Family responsibility builds trust every day."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices friendship through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Mahabharata Values Story 23. Story 23: in the family courtyard, Arjuna notices that a task feels too hard at first. Krishna guides the children to pause, breathe, and think about what is fair and kind. Arjuna waits, breathes, and responds with patience. Family responsibility builds trust every day.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-024",
    "storyId": "mahabharata-child-safe-exp-v1-024",
    "slug": "mahabharata-child-safe-exp-v1-024",
    "title": "Mahabharata Values Story 24",
    "shortTitle": "Mahabharata Values Story 24",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns fairness through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 24,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Fairness",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 24: under the banyan tree, Arjuna notices that someone speaks before listening."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna shares tools fairly and thanks each helper."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Simple dharma means doing the next right thing kindly."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices fairness through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Mahabharata Values Story 24. Story 24: under the banyan tree, Arjuna notices that someone speaks before listening. Krishna guides the children to pause, breathe, and think about what is fair and kind. Arjuna shares tools fairly and thanks each helper. Simple dharma means doing the next right thing kindly.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-025",
    "storyId": "mahabharata-child-safe-exp-v1-025",
    "slug": "mahabharata-child-safe-exp-v1-025",
    "title": "Mahabharata Values Story 25",
    "shortTitle": "Mahabharata Values Story 25",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns patience through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 25,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 25: by the lamp-lit study room, Arjuna notices that a promise is nearly forgotten."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna asks elders for wise guidance before deciding."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Friendship grows when everyone feels included."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices patience through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Mahabharata Values Story 25. Story 25: by the lamp-lit study room, Arjuna notices that a promise is nearly forgotten. Krishna guides the children to pause, breathe, and think about what is fair and kind. Arjuna asks elders for wise guidance before deciding. Friendship grows when everyone feels included.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-026",
    "storyId": "mahabharata-child-safe-exp-v1-026",
    "slug": "mahabharata-child-safe-exp-v1-026",
    "title": "Mahabharata Values Story 26",
    "shortTitle": "Mahabharata Values Story 26",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns courage through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 26,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 26: at the morning prayer hall, Arjuna notices that a mistake is hidden in worry."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna apologizes gently and repairs what can be repaired."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Fairness becomes easier when we listen first."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices courage through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-027",
    "storyId": "mahabharata-child-safe-exp-v1-027",
    "slug": "mahabharata-child-safe-exp-v1-027",
    "title": "Mahabharata Values Story 27",
    "shortTitle": "Mahabharata Values Story 27",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns truth through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 27,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Truth",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 27: in the kitchen during seva, Arjuna notices that credit is given to only one child."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna includes the quiet child and makes space."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Patience helps strong feelings become calm choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices truth through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-028",
    "storyId": "mahabharata-child-safe-exp-v1-028",
    "slug": "mahabharata-child-safe-exp-v1-028",
    "title": "Mahabharata Values Story 28",
    "shortTitle": "Mahabharata Values Story 28",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns humility through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 28,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 28: on the path to class, Arjuna notices that a queue becomes impatient."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna finishes family duty before games."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Courage can be gentle and truthful."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices humility through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-029",
    "storyId": "mahabharata-child-safe-exp-v1-029",
    "slug": "mahabharata-child-safe-exp-v1-029",
    "title": "Mahabharata Values Story 29",
    "shortTitle": "Mahabharata Values Story 29",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns wisdom through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 29,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Wisdom",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 29: beside the grain store, Arjuna notices that shared supplies run low."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna returns what was borrowed with gratitude."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Humility keeps success warm and shared."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices wisdom through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-030",
    "storyId": "mahabharata-child-safe-exp-v1-030",
    "slug": "mahabharata-child-safe-exp-v1-030",
    "title": "Mahabharata Values Story 30",
    "shortTitle": "Mahabharata Values Story 30",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns family responsibility through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 30,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Family Responsibility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 30: in the village craft corner, Arjuna notices that a sibling needs help before play."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses a truthful path even when it is hard."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Wise choices create peaceful consequences."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices family responsibility through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-031",
    "storyId": "mahabharata-child-safe-exp-v1-031",
    "slug": "mahabharata-child-safe-exp-v1-031",
    "title": "Mahabharata Values Story 31",
    "shortTitle": "Mahabharata Values Story 31",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns choices through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 31,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Choices",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 31: at the gurukul garden, Arjuna notices that two friends disagree about turns."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna invites everyone to speak kindly and take turns."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Family responsibility builds trust every day."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices choices through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-032",
    "storyId": "mahabharata-child-safe-exp-v1-032",
    "slug": "mahabharata-child-safe-exp-v1-032",
    "title": "Mahabharata Values Story 32",
    "shortTitle": "Mahabharata Values Story 32",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns consequences through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 32,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Consequences",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 32: near the riverside steps, Arjuna notices that a younger child is left out."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses honesty and explains what happened."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Simple dharma means doing the next right thing kindly."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices consequences through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-033",
    "storyId": "mahabharata-child-safe-exp-v1-033",
    "slug": "mahabharata-child-safe-exp-v1-033",
    "title": "Mahabharata Values Story 33",
    "shortTitle": "Mahabharata Values Story 33",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns dharma through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 33,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Dharma",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 33: in the family courtyard, Arjuna notices that a task feels too hard at first."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna waits, breathes, and responds with patience."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Friendship grows when everyone feels included."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices dharma through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-034",
    "storyId": "mahabharata-child-safe-exp-v1-034",
    "slug": "mahabharata-child-safe-exp-v1-034",
    "title": "Mahabharata Values Story 34",
    "shortTitle": "Mahabharata Values Story 34",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns friendship through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 34,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 34: under the banyan tree, Arjuna notices that someone speaks before listening."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna shares tools fairly and thanks each helper."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Fairness becomes easier when we listen first."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices friendship through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-035",
    "storyId": "mahabharata-child-safe-exp-v1-035",
    "slug": "mahabharata-child-safe-exp-v1-035",
    "title": "Mahabharata Values Story 35",
    "shortTitle": "Mahabharata Values Story 35",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns fairness through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 35,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Fairness",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 35: by the lamp-lit study room, Arjuna notices that a promise is nearly forgotten."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna asks elders for wise guidance before deciding."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Patience helps strong feelings become calm choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices fairness through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-036",
    "storyId": "mahabharata-child-safe-exp-v1-036",
    "slug": "mahabharata-child-safe-exp-v1-036",
    "title": "Mahabharata Values Story 36",
    "shortTitle": "Mahabharata Values Story 36",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns patience through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 36,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 36: at the morning prayer hall, Arjuna notices that a mistake is hidden in worry."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna apologizes gently and repairs what can be repaired."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Courage can be gentle and truthful."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices patience through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-037",
    "storyId": "mahabharata-child-safe-exp-v1-037",
    "slug": "mahabharata-child-safe-exp-v1-037",
    "title": "Mahabharata Values Story 37",
    "shortTitle": "Mahabharata Values Story 37",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns courage through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 37,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 37: in the kitchen during seva, Arjuna notices that credit is given to only one child."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna includes the quiet child and makes space."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Humility keeps success warm and shared."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices courage through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-038",
    "storyId": "mahabharata-child-safe-exp-v1-038",
    "slug": "mahabharata-child-safe-exp-v1-038",
    "title": "Mahabharata Values Story 38",
    "shortTitle": "Mahabharata Values Story 38",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns truth through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 38,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Truth",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 38: on the path to class, Arjuna notices that a queue becomes impatient."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna finishes family duty before games."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Wise choices create peaceful consequences."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices truth through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-039",
    "storyId": "mahabharata-child-safe-exp-v1-039",
    "slug": "mahabharata-child-safe-exp-v1-039",
    "title": "Mahabharata Values Story 39",
    "shortTitle": "Mahabharata Values Story 39",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns humility through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 39,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 39: beside the grain store, Arjuna notices that shared supplies run low."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna returns what was borrowed with gratitude."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Family responsibility builds trust every day."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices humility through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-040",
    "storyId": "mahabharata-child-safe-exp-v1-040",
    "slug": "mahabharata-child-safe-exp-v1-040",
    "title": "Mahabharata Values Story 40",
    "shortTitle": "Mahabharata Values Story 40",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns wisdom through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 40,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Wisdom",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 40: in the village craft corner, Arjuna notices that a sibling needs help before play."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses a truthful path even when it is hard."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Simple dharma means doing the next right thing kindly."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices wisdom through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-041",
    "storyId": "mahabharata-child-safe-exp-v1-041",
    "slug": "mahabharata-child-safe-exp-v1-041",
    "title": "Mahabharata Values Story 41",
    "shortTitle": "Mahabharata Values Story 41",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns family responsibility through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 41,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Family Responsibility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 41: at the gurukul garden, Arjuna notices that two friends disagree about turns."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna invites everyone to speak kindly and take turns."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Friendship grows when everyone feels included."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices family responsibility through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-042",
    "storyId": "mahabharata-child-safe-exp-v1-042",
    "slug": "mahabharata-child-safe-exp-v1-042",
    "title": "Mahabharata Values Story 42",
    "shortTitle": "Mahabharata Values Story 42",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns choices through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 42,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Choices",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 42: near the riverside steps, Arjuna notices that a younger child is left out."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses honesty and explains what happened."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Fairness becomes easier when we listen first."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices choices through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-043",
    "storyId": "mahabharata-child-safe-exp-v1-043",
    "slug": "mahabharata-child-safe-exp-v1-043",
    "title": "Mahabharata Values Story 43",
    "shortTitle": "Mahabharata Values Story 43",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns consequences through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 43,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Consequences",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 43: in the family courtyard, Arjuna notices that a task feels too hard at first."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna waits, breathes, and responds with patience."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Patience helps strong feelings become calm choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices consequences through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-044",
    "storyId": "mahabharata-child-safe-exp-v1-044",
    "slug": "mahabharata-child-safe-exp-v1-044",
    "title": "Mahabharata Values Story 44",
    "shortTitle": "Mahabharata Values Story 44",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns dharma through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 44,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Dharma",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 44: under the banyan tree, Arjuna notices that someone speaks before listening."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna shares tools fairly and thanks each helper."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Courage can be gentle and truthful."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices dharma through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-045",
    "storyId": "mahabharata-child-safe-exp-v1-045",
    "slug": "mahabharata-child-safe-exp-v1-045",
    "title": "Mahabharata Values Story 45",
    "shortTitle": "Mahabharata Values Story 45",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns friendship through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 45,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 45: by the lamp-lit study room, Arjuna notices that a promise is nearly forgotten."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna asks elders for wise guidance before deciding."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Humility keeps success warm and shared."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices friendship through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-046",
    "storyId": "mahabharata-child-safe-exp-v1-046",
    "slug": "mahabharata-child-safe-exp-v1-046",
    "title": "Mahabharata Values Story 46",
    "shortTitle": "Mahabharata Values Story 46",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns fairness through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 46,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Fairness",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 46: at the morning prayer hall, Arjuna notices that a mistake is hidden in worry."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna apologizes gently and repairs what can be repaired."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Wise choices create peaceful consequences."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices fairness through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-047",
    "storyId": "mahabharata-child-safe-exp-v1-047",
    "slug": "mahabharata-child-safe-exp-v1-047",
    "title": "Mahabharata Values Story 47",
    "shortTitle": "Mahabharata Values Story 47",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns patience through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 47,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 47: in the kitchen during seva, Arjuna notices that credit is given to only one child."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna includes the quiet child and makes space."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Family responsibility builds trust every day."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices patience through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-048",
    "storyId": "mahabharata-child-safe-exp-v1-048",
    "slug": "mahabharata-child-safe-exp-v1-048",
    "title": "Mahabharata Values Story 48",
    "shortTitle": "Mahabharata Values Story 48",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns courage through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 48,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 48: on the path to class, Arjuna notices that a queue becomes impatient."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna finishes family duty before games."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Simple dharma means doing the next right thing kindly."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices courage through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-049",
    "storyId": "mahabharata-child-safe-exp-v1-049",
    "slug": "mahabharata-child-safe-exp-v1-049",
    "title": "Mahabharata Values Story 49",
    "shortTitle": "Mahabharata Values Story 49",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns truth through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 49,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Truth",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 49: beside the grain store, Arjuna notices that shared supplies run low."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna returns what was borrowed with gratitude."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Friendship grows when everyone feels included."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices truth through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-050",
    "storyId": "mahabharata-child-safe-exp-v1-050",
    "slug": "mahabharata-child-safe-exp-v1-050",
    "title": "Mahabharata Values Story 50",
    "shortTitle": "Mahabharata Values Story 50",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns humility through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 50,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 50: in the village craft corner, Arjuna notices that a sibling needs help before play."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses a truthful path even when it is hard."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Fairness becomes easier when we listen first."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices humility through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-051",
    "storyId": "mahabharata-child-safe-exp-v1-051",
    "slug": "mahabharata-child-safe-exp-v1-051",
    "title": "Mahabharata Values Story 51",
    "shortTitle": "Mahabharata Values Story 51",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns wisdom through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 51,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Wisdom",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 51: at the gurukul garden, Arjuna notices that two friends disagree about turns."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna invites everyone to speak kindly and take turns."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Patience helps strong feelings become calm choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices wisdom through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-052",
    "storyId": "mahabharata-child-safe-exp-v1-052",
    "slug": "mahabharata-child-safe-exp-v1-052",
    "title": "Mahabharata Values Story 52",
    "shortTitle": "Mahabharata Values Story 52",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns family responsibility through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 52,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Family Responsibility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 52: near the riverside steps, Arjuna notices that a younger child is left out."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses honesty and explains what happened."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Courage can be gentle and truthful."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices family responsibility through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-053",
    "storyId": "mahabharata-child-safe-exp-v1-053",
    "slug": "mahabharata-child-safe-exp-v1-053",
    "title": "Mahabharata Values Story 53",
    "shortTitle": "Mahabharata Values Story 53",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns choices through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 53,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Choices",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 53: in the family courtyard, Arjuna notices that a task feels too hard at first."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna waits, breathes, and responds with patience."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Humility keeps success warm and shared."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices choices through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-054",
    "storyId": "mahabharata-child-safe-exp-v1-054",
    "slug": "mahabharata-child-safe-exp-v1-054",
    "title": "Mahabharata Values Story 54",
    "shortTitle": "Mahabharata Values Story 54",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns consequences through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 54,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Consequences",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 54: under the banyan tree, Arjuna notices that someone speaks before listening."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna shares tools fairly and thanks each helper."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Wise choices create peaceful consequences."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices consequences through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-055",
    "storyId": "mahabharata-child-safe-exp-v1-055",
    "slug": "mahabharata-child-safe-exp-v1-055",
    "title": "Mahabharata Values Story 55",
    "shortTitle": "Mahabharata Values Story 55",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns dharma through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 55,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Dharma",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 55: by the lamp-lit study room, Arjuna notices that a promise is nearly forgotten."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna asks elders for wise guidance before deciding."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Family responsibility builds trust every day."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices dharma through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-056",
    "storyId": "mahabharata-child-safe-exp-v1-056",
    "slug": "mahabharata-child-safe-exp-v1-056",
    "title": "Mahabharata Values Story 56",
    "shortTitle": "Mahabharata Values Story 56",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns friendship through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 56,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 56: at the morning prayer hall, Arjuna notices that a mistake is hidden in worry."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna apologizes gently and repairs what can be repaired."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Simple dharma means doing the next right thing kindly."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices friendship through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-057",
    "storyId": "mahabharata-child-safe-exp-v1-057",
    "slug": "mahabharata-child-safe-exp-v1-057",
    "title": "Mahabharata Values Story 57",
    "shortTitle": "Mahabharata Values Story 57",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns fairness through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 57,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Fairness",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 57: in the kitchen during seva, Arjuna notices that credit is given to only one child."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna includes the quiet child and makes space."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Friendship grows when everyone feels included."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices fairness through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-058",
    "storyId": "mahabharata-child-safe-exp-v1-058",
    "slug": "mahabharata-child-safe-exp-v1-058",
    "title": "Mahabharata Values Story 58",
    "shortTitle": "Mahabharata Values Story 58",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns patience through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 58,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 58: on the path to class, Arjuna notices that a queue becomes impatient."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna finishes family duty before games."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Fairness becomes easier when we listen first."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices patience through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-059",
    "storyId": "mahabharata-child-safe-exp-v1-059",
    "slug": "mahabharata-child-safe-exp-v1-059",
    "title": "Mahabharata Values Story 59",
    "shortTitle": "Mahabharata Values Story 59",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns courage through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 59,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 59: beside the grain store, Arjuna notices that shared supplies run low."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna returns what was borrowed with gratitude."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Patience helps strong feelings become calm choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices courage through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-060",
    "storyId": "mahabharata-child-safe-exp-v1-060",
    "slug": "mahabharata-child-safe-exp-v1-060",
    "title": "Mahabharata Values Story 60",
    "shortTitle": "Mahabharata Values Story 60",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns truth through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 60,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Truth",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 60: in the village craft corner, Arjuna notices that a sibling needs help before play."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses a truthful path even when it is hard."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Courage can be gentle and truthful."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices truth through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-061",
    "storyId": "mahabharata-child-safe-exp-v1-061",
    "slug": "mahabharata-child-safe-exp-v1-061",
    "title": "Mahabharata Values Story 61",
    "shortTitle": "Mahabharata Values Story 61",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns humility through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 61,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 61: at the gurukul garden, Arjuna notices that two friends disagree about turns."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna invites everyone to speak kindly and take turns."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Humility keeps success warm and shared."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices humility through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-062",
    "storyId": "mahabharata-child-safe-exp-v1-062",
    "slug": "mahabharata-child-safe-exp-v1-062",
    "title": "Mahabharata Values Story 62",
    "shortTitle": "Mahabharata Values Story 62",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns wisdom through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 62,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Wisdom",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 62: near the riverside steps, Arjuna notices that a younger child is left out."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses honesty and explains what happened."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Wise choices create peaceful consequences."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices wisdom through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-063",
    "storyId": "mahabharata-child-safe-exp-v1-063",
    "slug": "mahabharata-child-safe-exp-v1-063",
    "title": "Mahabharata Values Story 63",
    "shortTitle": "Mahabharata Values Story 63",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns family responsibility through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 63,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Family Responsibility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 63: in the family courtyard, Arjuna notices that a task feels too hard at first."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna waits, breathes, and responds with patience."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Family responsibility builds trust every day."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices family responsibility through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-064",
    "storyId": "mahabharata-child-safe-exp-v1-064",
    "slug": "mahabharata-child-safe-exp-v1-064",
    "title": "Mahabharata Values Story 64",
    "shortTitle": "Mahabharata Values Story 64",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns choices through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 64,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Choices",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 64: under the banyan tree, Arjuna notices that someone speaks before listening."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna shares tools fairly and thanks each helper."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Simple dharma means doing the next right thing kindly."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices choices through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-065",
    "storyId": "mahabharata-child-safe-exp-v1-065",
    "slug": "mahabharata-child-safe-exp-v1-065",
    "title": "Mahabharata Values Story 65",
    "shortTitle": "Mahabharata Values Story 65",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns consequences through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 65,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Consequences",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 65: by the lamp-lit study room, Arjuna notices that a promise is nearly forgotten."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna asks elders for wise guidance before deciding."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Friendship grows when everyone feels included."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices consequences through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-066",
    "storyId": "mahabharata-child-safe-exp-v1-066",
    "slug": "mahabharata-child-safe-exp-v1-066",
    "title": "Mahabharata Values Story 66",
    "shortTitle": "Mahabharata Values Story 66",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns dharma through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 66,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Dharma",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 66: at the morning prayer hall, Arjuna notices that a mistake is hidden in worry."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna apologizes gently and repairs what can be repaired."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Fairness becomes easier when we listen first."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices dharma through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-067",
    "storyId": "mahabharata-child-safe-exp-v1-067",
    "slug": "mahabharata-child-safe-exp-v1-067",
    "title": "Mahabharata Values Story 67",
    "shortTitle": "Mahabharata Values Story 67",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns friendship through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 67,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 67: in the kitchen during seva, Arjuna notices that credit is given to only one child."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna includes the quiet child and makes space."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Patience helps strong feelings become calm choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices friendship through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-068",
    "storyId": "mahabharata-child-safe-exp-v1-068",
    "slug": "mahabharata-child-safe-exp-v1-068",
    "title": "Mahabharata Values Story 68",
    "shortTitle": "Mahabharata Values Story 68",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns fairness through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 68,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Fairness",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 68: on the path to class, Arjuna notices that a queue becomes impatient."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna finishes family duty before games."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Courage can be gentle and truthful."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices fairness through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-069",
    "storyId": "mahabharata-child-safe-exp-v1-069",
    "slug": "mahabharata-child-safe-exp-v1-069",
    "title": "Mahabharata Values Story 69",
    "shortTitle": "Mahabharata Values Story 69",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns patience through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 69,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 69: beside the grain store, Arjuna notices that shared supplies run low."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna returns what was borrowed with gratitude."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Humility keeps success warm and shared."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices patience through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-070",
    "storyId": "mahabharata-child-safe-exp-v1-070",
    "slug": "mahabharata-child-safe-exp-v1-070",
    "title": "Mahabharata Values Story 70",
    "shortTitle": "Mahabharata Values Story 70",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns courage through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 70,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 70: in the village craft corner, Arjuna notices that a sibling needs help before play."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses a truthful path even when it is hard."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Wise choices create peaceful consequences."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices courage through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-071",
    "storyId": "mahabharata-child-safe-exp-v1-071",
    "slug": "mahabharata-child-safe-exp-v1-071",
    "title": "Mahabharata Values Story 71",
    "shortTitle": "Mahabharata Values Story 71",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns truth through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 71,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Truth",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 71: at the gurukul garden, Arjuna notices that two friends disagree about turns."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna invites everyone to speak kindly and take turns."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Family responsibility builds trust every day."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices truth through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-072",
    "storyId": "mahabharata-child-safe-exp-v1-072",
    "slug": "mahabharata-child-safe-exp-v1-072",
    "title": "Mahabharata Values Story 72",
    "shortTitle": "Mahabharata Values Story 72",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns humility through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 72,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 72: near the riverside steps, Arjuna notices that a younger child is left out."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses honesty and explains what happened."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Simple dharma means doing the next right thing kindly."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices humility through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-073",
    "storyId": "mahabharata-child-safe-exp-v1-073",
    "slug": "mahabharata-child-safe-exp-v1-073",
    "title": "Mahabharata Values Story 73",
    "shortTitle": "Mahabharata Values Story 73",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns wisdom through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 73,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Wisdom",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 73: in the family courtyard, Arjuna notices that a task feels too hard at first."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna waits, breathes, and responds with patience."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Friendship grows when everyone feels included."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices wisdom through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-074",
    "storyId": "mahabharata-child-safe-exp-v1-074",
    "slug": "mahabharata-child-safe-exp-v1-074",
    "title": "Mahabharata Values Story 74",
    "shortTitle": "Mahabharata Values Story 74",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns family responsibility through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 74,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Family Responsibility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 74: under the banyan tree, Arjuna notices that someone speaks before listening."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna shares tools fairly and thanks each helper."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Fairness becomes easier when we listen first."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices family responsibility through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-075",
    "storyId": "mahabharata-child-safe-exp-v1-075",
    "slug": "mahabharata-child-safe-exp-v1-075",
    "title": "Mahabharata Values Story 75",
    "shortTitle": "Mahabharata Values Story 75",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns choices through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 75,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Choices",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 75: by the lamp-lit study room, Arjuna notices that a promise is nearly forgotten."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna asks elders for wise guidance before deciding."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Patience helps strong feelings become calm choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices choices through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-076",
    "storyId": "mahabharata-child-safe-exp-v1-076",
    "slug": "mahabharata-child-safe-exp-v1-076",
    "title": "Mahabharata Values Story 76",
    "shortTitle": "Mahabharata Values Story 76",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns consequences through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 76,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Consequences",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 76: at the morning prayer hall, Arjuna notices that a mistake is hidden in worry."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna apologizes gently and repairs what can be repaired."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Courage can be gentle and truthful."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices consequences through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-077",
    "storyId": "mahabharata-child-safe-exp-v1-077",
    "slug": "mahabharata-child-safe-exp-v1-077",
    "title": "Mahabharata Values Story 77",
    "shortTitle": "Mahabharata Values Story 77",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns dharma through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 77,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Dharma",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 77: in the kitchen during seva, Arjuna notices that credit is given to only one child."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna includes the quiet child and makes space."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Humility keeps success warm and shared."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices dharma through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-078",
    "storyId": "mahabharata-child-safe-exp-v1-078",
    "slug": "mahabharata-child-safe-exp-v1-078",
    "title": "Mahabharata Values Story 78",
    "shortTitle": "Mahabharata Values Story 78",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns friendship through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 78,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 78: on the path to class, Arjuna notices that a queue becomes impatient."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna finishes family duty before games."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Wise choices create peaceful consequences."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices friendship through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-079",
    "storyId": "mahabharata-child-safe-exp-v1-079",
    "slug": "mahabharata-child-safe-exp-v1-079",
    "title": "Mahabharata Values Story 79",
    "shortTitle": "Mahabharata Values Story 79",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns fairness through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 79,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Fairness",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 79: beside the grain store, Arjuna notices that shared supplies run low."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna returns what was borrowed with gratitude."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Family responsibility builds trust every day."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices fairness through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-080",
    "storyId": "mahabharata-child-safe-exp-v1-080",
    "slug": "mahabharata-child-safe-exp-v1-080",
    "title": "Mahabharata Values Story 80",
    "shortTitle": "Mahabharata Values Story 80",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns patience through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 80,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 80: in the village craft corner, Arjuna notices that a sibling needs help before play."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses a truthful path even when it is hard."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Simple dharma means doing the next right thing kindly."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices patience through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-081",
    "storyId": "mahabharata-child-safe-exp-v1-081",
    "slug": "mahabharata-child-safe-exp-v1-081",
    "title": "Mahabharata Values Story 81",
    "shortTitle": "Mahabharata Values Story 81",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns courage through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 81,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 81: at the gurukul garden, Arjuna notices that two friends disagree about turns."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna invites everyone to speak kindly and take turns."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Friendship grows when everyone feels included."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices courage through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-082",
    "storyId": "mahabharata-child-safe-exp-v1-082",
    "slug": "mahabharata-child-safe-exp-v1-082",
    "title": "Mahabharata Values Story 82",
    "shortTitle": "Mahabharata Values Story 82",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns truth through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 82,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Truth",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 82: near the riverside steps, Arjuna notices that a younger child is left out."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses honesty and explains what happened."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Fairness becomes easier when we listen first."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices truth through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-083",
    "storyId": "mahabharata-child-safe-exp-v1-083",
    "slug": "mahabharata-child-safe-exp-v1-083",
    "title": "Mahabharata Values Story 83",
    "shortTitle": "Mahabharata Values Story 83",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns humility through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 83,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 83: in the family courtyard, Arjuna notices that a task feels too hard at first."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna waits, breathes, and responds with patience."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Patience helps strong feelings become calm choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices humility through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-084",
    "storyId": "mahabharata-child-safe-exp-v1-084",
    "slug": "mahabharata-child-safe-exp-v1-084",
    "title": "Mahabharata Values Story 84",
    "shortTitle": "Mahabharata Values Story 84",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns wisdom through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 84,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Wisdom",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 84: under the banyan tree, Arjuna notices that someone speaks before listening."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna shares tools fairly and thanks each helper."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Courage can be gentle and truthful."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices wisdom through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-085",
    "storyId": "mahabharata-child-safe-exp-v1-085",
    "slug": "mahabharata-child-safe-exp-v1-085",
    "title": "Mahabharata Values Story 85",
    "shortTitle": "Mahabharata Values Story 85",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns family responsibility through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 85,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Family Responsibility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 85: by the lamp-lit study room, Arjuna notices that a promise is nearly forgotten."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna asks elders for wise guidance before deciding."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Humility keeps success warm and shared."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices family responsibility through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-086",
    "storyId": "mahabharata-child-safe-exp-v1-086",
    "slug": "mahabharata-child-safe-exp-v1-086",
    "title": "Mahabharata Values Story 86",
    "shortTitle": "Mahabharata Values Story 86",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns choices through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 86,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Choices",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 86: at the morning prayer hall, Arjuna notices that a mistake is hidden in worry."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna apologizes gently and repairs what can be repaired."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Wise choices create peaceful consequences."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices choices through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-087",
    "storyId": "mahabharata-child-safe-exp-v1-087",
    "slug": "mahabharata-child-safe-exp-v1-087",
    "title": "Mahabharata Values Story 87",
    "shortTitle": "Mahabharata Values Story 87",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns consequences through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 87,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Consequences",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 87: in the kitchen during seva, Arjuna notices that credit is given to only one child."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna includes the quiet child and makes space."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Family responsibility builds trust every day."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices consequences through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-088",
    "storyId": "mahabharata-child-safe-exp-v1-088",
    "slug": "mahabharata-child-safe-exp-v1-088",
    "title": "Mahabharata Values Story 88",
    "shortTitle": "Mahabharata Values Story 88",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns dharma through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 88,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Dharma",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 88: on the path to class, Arjuna notices that a queue becomes impatient."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna finishes family duty before games."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Simple dharma means doing the next right thing kindly."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices dharma through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-089",
    "storyId": "mahabharata-child-safe-exp-v1-089",
    "slug": "mahabharata-child-safe-exp-v1-089",
    "title": "Mahabharata Values Story 89",
    "shortTitle": "Mahabharata Values Story 89",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns friendship through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 89,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 89: beside the grain store, Arjuna notices that shared supplies run low."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna returns what was borrowed with gratitude."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Friendship grows when everyone feels included."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices friendship through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-090",
    "storyId": "mahabharata-child-safe-exp-v1-090",
    "slug": "mahabharata-child-safe-exp-v1-090",
    "title": "Mahabharata Values Story 90",
    "shortTitle": "Mahabharata Values Story 90",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns fairness through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 90,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Fairness",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 90: in the village craft corner, Arjuna notices that a sibling needs help before play."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses a truthful path even when it is hard."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Fairness becomes easier when we listen first."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices fairness through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-091",
    "storyId": "mahabharata-child-safe-exp-v1-091",
    "slug": "mahabharata-child-safe-exp-v1-091",
    "title": "Mahabharata Values Story 91",
    "shortTitle": "Mahabharata Values Story 91",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns patience through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 91,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 91: at the gurukul garden, Arjuna notices that two friends disagree about turns."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna invites everyone to speak kindly and take turns."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Patience helps strong feelings become calm choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices patience through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-092",
    "storyId": "mahabharata-child-safe-exp-v1-092",
    "slug": "mahabharata-child-safe-exp-v1-092",
    "title": "Mahabharata Values Story 92",
    "shortTitle": "Mahabharata Values Story 92",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns courage through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 92,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 92: near the riverside steps, Arjuna notices that a younger child is left out."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses honesty and explains what happened."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Courage can be gentle and truthful."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices courage through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-093",
    "storyId": "mahabharata-child-safe-exp-v1-093",
    "slug": "mahabharata-child-safe-exp-v1-093",
    "title": "Mahabharata Values Story 93",
    "shortTitle": "Mahabharata Values Story 93",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns truth through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 93,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Truth",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 93: in the family courtyard, Arjuna notices that a task feels too hard at first."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna waits, breathes, and responds with patience."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Humility keeps success warm and shared."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices truth through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-094",
    "storyId": "mahabharata-child-safe-exp-v1-094",
    "slug": "mahabharata-child-safe-exp-v1-094",
    "title": "Mahabharata Values Story 94",
    "shortTitle": "Mahabharata Values Story 94",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns humility through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 94,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 94: under the banyan tree, Arjuna notices that someone speaks before listening."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna shares tools fairly and thanks each helper."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Wise choices create peaceful consequences."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices humility through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-095",
    "storyId": "mahabharata-child-safe-exp-v1-095",
    "slug": "mahabharata-child-safe-exp-v1-095",
    "title": "Mahabharata Values Story 95",
    "shortTitle": "Mahabharata Values Story 95",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns wisdom through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 95,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Wisdom",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 95: by the lamp-lit study room, Arjuna notices that a promise is nearly forgotten."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna asks elders for wise guidance before deciding."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Family responsibility builds trust every day."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices wisdom through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-096",
    "storyId": "mahabharata-child-safe-exp-v1-096",
    "slug": "mahabharata-child-safe-exp-v1-096",
    "title": "Mahabharata Values Story 96",
    "shortTitle": "Mahabharata Values Story 96",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns family responsibility through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 96,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Family Responsibility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 96: at the morning prayer hall, Arjuna notices that a mistake is hidden in worry."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna apologizes gently and repairs what can be repaired."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Simple dharma means doing the next right thing kindly."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices family responsibility through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-097",
    "storyId": "mahabharata-child-safe-exp-v1-097",
    "slug": "mahabharata-child-safe-exp-v1-097",
    "title": "Mahabharata Values Story 97",
    "shortTitle": "Mahabharata Values Story 97",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns choices through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 97,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Choices",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 97: in the kitchen during seva, Arjuna notices that credit is given to only one child."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna includes the quiet child and makes space."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Friendship grows when everyone feels included."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices choices through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-098",
    "storyId": "mahabharata-child-safe-exp-v1-098",
    "slug": "mahabharata-child-safe-exp-v1-098",
    "title": "Mahabharata Values Story 98",
    "shortTitle": "Mahabharata Values Story 98",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns consequences through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 98,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Consequences",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 98: on the path to class, Arjuna notices that a queue becomes impatient."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna finishes family duty before games."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Fairness becomes easier when we listen first."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices consequences through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-099",
    "storyId": "mahabharata-child-safe-exp-v1-099",
    "slug": "mahabharata-child-safe-exp-v1-099",
    "title": "Mahabharata Values Story 99",
    "shortTitle": "Mahabharata Values Story 99",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns dharma through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 99,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Dharma",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 99: beside the grain store, Arjuna notices that shared supplies run low."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna returns what was borrowed with gratitude."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Patience helps strong feelings become calm choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices dharma through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-100",
    "storyId": "mahabharata-child-safe-exp-v1-100",
    "slug": "mahabharata-child-safe-exp-v1-100",
    "title": "Mahabharata Values Story 100",
    "shortTitle": "Mahabharata Values Story 100",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns friendship through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 100,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "Story 100: in the village craft corner, Arjuna notices that a sibling needs help before play."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna guides the children to pause, breathe, and think about what is fair and kind."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses a truthful path even when it is hard."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Courage can be gentle and truthful."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices friendship through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  }
];

export const mahabharataChildSafeExpansionPackV1StoryPack: StoryPack = {
  id: 'mahabharata-child-safe-expansion-pack-v1',
  title: 'Mahabharata Child-Safe Expansion Pack v1',
  childFacingTitle: 'Mahabharata Values Stories',
  description: 'Child-safe Mahabharata stories focused on values, warmth, and simple dharma choices.',
  sourceTradition: 'Mahabharata (Child-Safe)',
  category: 'values',
  status: 'qa_ready',
  storyIds: mahabharataChildSafeExpansionPackV1Stories.map((story) => story.id),
  recommendedAgeBands: ['6-8', '9-12'],
  contentSafetyNotes: [
    'Child-safe and non-violent framing.',
    'Focused on values, choices, and consequences in simple child-facing language.'
  ],
  sacredRespectNotes: ['Sacred content presented with warmth, restraint, and reverence.']
};

export const mahabharataChildSafeExpansionPackV1Journey: DharmaJourney = {
  id: 'mahabharata-child-safe-journey-v1',
  title: 'Mahabharata Child-Safe Journey v1',
  childFacingTitle: 'Mahabharata Values Journey',
  description: 'A child-safe guided journey through Mahabharata-inspired values stories.',
  sourceTradition: 'Mahabharata (Child-Safe)',
  recommendedAgeBands: ['6-8', '9-12'],
  storyIds: mahabharataChildSafeExpansionPackV1Stories.map((story) => story.id),
  estimatedCompletionWeeks: 6,
  status: 'qa_ready',
  journeyType: 'guided_path'
};
