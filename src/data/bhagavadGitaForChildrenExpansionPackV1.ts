import type { DharmaJourney, Story, StoryPack } from '@/types/contentModel';
import type { StoryExperienceCategoryId } from '@/types/storyExperienceIndex';

type ExtendedStory = Story & { storyId: string; primaryCategoryId: StoryExperienceCategoryId; secondaryCategoryIds: StoryExperienceCategoryId[]; readinessStatus: 'metadata_only' | 'qa_ready'; audioStatus: 'script_needed' | 'script_ready'; journeyStatus: 'journey_ordered'; audioScript?: { narrationScript: string; voiceDirection: string; pronunciationNotes: string; pacingNotes: string; audioReadinessIntent: 'ready' }; };

export const bhagavadGitaForChildrenExpansionPackV1Stories: ExtendedStory[] = [
  {
    "id": "bhagavad-gita-children-exp-v1-001",
    "storyId": "bhagavad-gita-children-exp-v1-001",
    "slug": "bhagavad-gita-children-exp-v1-001",
    "title": "Arjuna\u2019s Rangoli Lines",
    "shortTitle": "Arjuna\u2019s Rangoli Lines",
    "summary": "At home before a festival, Arjuna\u2019s rangoli lines wobble, and he wants to quit. Krishna reminds him that steady effort matters more than perfect shapes.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 1,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Starting moment",
        "text": "At home before a festival, Arjuna\u2019s rangoli lines wobble, and he wants to quit. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "Krishna\u2019s reminder",
        "text": "Krishna reminds him that steady effort matters more than perfect shapes."
      },
      {
        "id": "panel-3",
        "title": "Action chosen",
        "text": "Arjuna redraws slowly, one petal at a time, and finishes with care. Arjuna practices this choice with steady care."
      },
      {
        "id": "panel-4",
        "title": "What he learned",
        "text": "He smiles at progress and learns to value effort over quick results."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models courage through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'Arjuna\u2019s Rangoli Lines' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'Arjuna\u2019s Rangoli Lines' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Arjuna\u2019s Rangoli Lines. At home before a festival, Arjuna\u2019s rangoli lines wobble, and he wants to quit. Krishna reminds him that steady effort matters more than perfect shapes. Arjuna redraws slowly, one petal at a time, and finishes with care. He smiles at progress and learns to value effort over quick results.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-002",
    "storyId": "bhagavad-gita-children-exp-v1-002",
    "slug": "bhagavad-gita-children-exp-v1-002",
    "title": "Sharing Credit at Cleanup",
    "shortTitle": "Sharing Credit at Cleanup",
    "summary": "After class cleanup, everyone praises Arjuna for neat shelves. Krishna asks him to notice who carried books and swept corners too.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 2,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Morning challenge",
        "text": "After class cleanup, everyone praises Arjuna for neat shelves. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "Krishna\u2019s reminder",
        "text": "Krishna asks him to notice who carried books and swept corners too."
      },
      {
        "id": "panel-3",
        "title": "Action chosen",
        "text": "Arjuna thanks his friends by name and shares the credit openly. Arjuna practices this choice with steady care."
      },
      {
        "id": "panel-4",
        "title": "What he learned",
        "text": "The class feels included, and Arjuna learns humility in success."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models calm through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'Sharing Credit at Cleanup' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'Sharing Credit at Cleanup' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Sharing Credit at Cleanup. After class cleanup, everyone praises Arjuna for neat shelves. Krishna asks him to notice who carried books and swept corners too. Arjuna thanks his friends by name and shares the credit openly. The class feels included, and Arjuna learns humility in success.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-003",
    "storyId": "bhagavad-gita-children-exp-v1-003",
    "slug": "bhagavad-gita-children-exp-v1-003",
    "title": "The Truth About the Clay Cup",
    "shortTitle": "The Truth About the Clay Cup",
    "summary": "A clay cup cracks while Arjuna is pouring water for guests. Krishna encourages truth before excuses and calm before fear.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 3,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Before class",
        "text": "A clay cup cracks while Arjuna is pouring water for guests. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "Gentle advice",
        "text": "Krishna encourages truth before excuses and calm before fear."
      },
      {
        "id": "panel-3",
        "title": "Action chosen",
        "text": "Arjuna tells the truth, apologizes, and brings another cup carefully. Arjuna practices this choice with steady care."
      },
      {
        "id": "panel-4",
        "title": "What he learned",
        "text": "Trust stays strong, and Arjuna learns honesty with responsibility."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models responsibility through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'The Truth About the Clay Cup' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'The Truth About the Clay Cup' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Truth About the Clay Cup. A clay cup cracks while Arjuna is pouring water for guests. Krishna encourages truth before excuses and calm before fear. Arjuna tells the truth, apologizes, and brings another cup carefully. Trust stays strong, and Arjuna learns honesty with responsibility.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-004",
    "storyId": "bhagavad-gita-children-exp-v1-004",
    "slug": "bhagavad-gita-children-exp-v1-004",
    "title": "Before the Recitation Bell",
    "shortTitle": "Before the Recitation Bell",
    "summary": "Arjuna\u2019s heart races before he recites a verse at school. Krishna teaches him three breaths and one clear first line.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 4,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Steady Effort",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "At home",
        "text": "Arjuna\u2019s heart races before he recites a verse at school. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "Gentle advice",
        "text": "Krishna teaches him three breaths and one clear first line."
      },
      {
        "id": "panel-3",
        "title": "What Arjuna did",
        "text": "Arjuna starts softly, keeps his pace, and completes the recitation. Arjuna practices this choice with steady care."
      },
      {
        "id": "panel-4",
        "title": "What he learned",
        "text": "He learns calm focus can carry him through nervous moments."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models kindness through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'Before the Recitation Bell' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'Before the Recitation Bell' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Before the Recitation Bell. Arjuna\u2019s heart races before he recites a verse at school. Krishna teaches him three breaths and one clear first line. Arjuna starts softly, keeps his pace, and completes the recitation. He learns calm focus can carry him through nervous moments.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-005",
    "storyId": "bhagavad-gita-children-exp-v1-005",
    "slug": "bhagavad-gita-children-exp-v1-005",
    "title": "The Child Sitting Alone",
    "shortTitle": "The Child Sitting Alone",
    "summary": "At lunch, one child sits alone under the neem tree. Krishna asks Arjuna what kindness looks like in action today.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 5,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "At the courtyard",
        "text": "At lunch, one child sits alone under the neem tree. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "A calm question",
        "text": "Krishna asks Arjuna what kindness looks like in action today."
      },
      {
        "id": "panel-3",
        "title": "What Arjuna did",
        "text": "Arjuna invites the child to join, shares fruit, and listens first. Arjuna practices this choice with steady care."
      },
      {
        "id": "panel-4",
        "title": "Quiet result",
        "text": "Friendship grows, and Arjuna sees duty can be gentle inclusion."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models focus through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'The Child Sitting Alone' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'The Child Sitting Alone' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Child Sitting Alone. At lunch, one child sits alone under the neem tree. Krishna asks Arjuna what kindness looks like in action today. Arjuna invites the child to join, shares fruit, and listens first. Friendship grows, and Arjuna sees duty can be gentle inclusion.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-006",
    "storyId": "bhagavad-gita-children-exp-v1-006",
    "slug": "bhagavad-gita-children-exp-v1-006",
    "title": "Work Without Applause",
    "shortTitle": "Work Without Applause",
    "summary": "Arjuna finishes sweeping the veranda before sunrise. Krishna reminds him that right work is still right without praise.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 6,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Focus",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "At lunch",
        "text": "Arjuna finishes sweeping the veranda before sunrise. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "A calm question",
        "text": "Krishna reminds him that right work is still right without praise."
      },
      {
        "id": "panel-3",
        "title": "What Arjuna did",
        "text": "Arjuna folds the broom away and quietly helps with water pots too. Arjuna practices this choice with steady care."
      },
      {
        "id": "panel-4",
        "title": "Quiet result",
        "text": "He learns devotion through sincere action, not attention."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models humility through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'Work Without Applause' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'Work Without Applause' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Work Without Applause. Arjuna finishes sweeping the veranda before sunrise. Krishna reminds him that right work is still right without praise. Arjuna folds the broom away and quietly helps with water pots too. He learns devotion through sincere action, not attention.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-007",
    "storyId": "bhagavad-gita-children-exp-v1-007",
    "slug": "bhagavad-gita-children-exp-v1-007",
    "title": "Kind Words in a Loud Argument",
    "shortTitle": "Kind Words in a Loud Argument",
    "summary": "Two siblings argue over whose turn it is for the swing. Krishna asks Arjuna to lower his voice before offering help.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 7,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "During play",
        "text": "Two siblings argue over whose turn it is for the swing. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "Wise guidance",
        "text": "Krishna asks Arjuna to lower his voice before offering help."
      },
      {
        "id": "panel-3",
        "title": "Helpful step",
        "text": "Arjuna suggests turns with a sand timer and uses respectful words."
      },
      {
        "id": "panel-4",
        "title": "Quiet result",
        "text": "The quarrel softens, and everyone practices fairness with calm speech."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models devotion through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'Kind Words in a Loud Argument' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'Kind Words in a Loud Argument' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Kind Words in a Loud Argument. Two siblings argue over whose turn it is for the swing. Krishna asks Arjuna to lower his voice before offering help. Arjuna suggests turns with a sand timer and uses respectful words. The quarrel softens, and everyone practices fairness with calm speech.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-008",
    "storyId": "bhagavad-gita-children-exp-v1-008",
    "slug": "bhagavad-gita-children-exp-v1-008",
    "title": "Learning a Shloka Slowly",
    "shortTitle": "Learning a Shloka Slowly",
    "summary": "Arjuna stumbles on difficult Sanskrit words during practice. Krishna advises patient repetition instead of rushing for speed.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 8,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Practice time",
        "text": "Arjuna stumbles on difficult Sanskrit words during practice. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "Wise guidance",
        "text": "Krishna advises patient repetition instead of rushing for speed."
      },
      {
        "id": "panel-3",
        "title": "Helpful step",
        "text": "Arjuna claps the rhythm, repeats each line, and asks for guidance."
      },
      {
        "id": "panel-4",
        "title": "Quiet result",
        "text": "He learns patience turns effort into understanding."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models self-control through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'Learning a Shloka Slowly' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'Learning a Shloka Slowly' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Learning a Shloka Slowly. Arjuna stumbles on difficult Sanskrit words during practice. Krishna advises patient repetition instead of rushing for speed. Arjuna claps the rhythm, repeats each line, and asks for guidance. He learns patience turns effort into understanding.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-009",
    "storyId": "bhagavad-gita-children-exp-v1-009",
    "slug": "bhagavad-gita-children-exp-v1-009",
    "title": "After the Kite Contest",
    "shortTitle": "After the Kite Contest",
    "summary": "Arjuna\u2019s kite falls early in the village contest. Krishna reminds him to accept results with grace and gratitude.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 9,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Self-Control",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Starting moment",
        "text": "Arjuna\u2019s kite falls early in the village contest. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "Breathing pause",
        "text": "Krishna reminds him to accept results with grace and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Helpful step",
        "text": "Arjuna congratulates the winner and helps gather fallen strings safely. Arjuna practices this choice with steady care."
      },
      {
        "id": "panel-4",
        "title": "Steady ending",
        "text": "He learns dignity in both winning and losing."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models gratitude through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'After the Kite Contest' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'After the Kite Contest' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "After the Kite Contest. Arjuna\u2019s kite falls early in the village contest. Krishna reminds him to accept results with grace and gratitude. Arjuna congratulates the winner and helps gather fallen strings safely. He learns dignity in both winning and losing.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-010",
    "storyId": "bhagavad-gita-children-exp-v1-010",
    "slug": "bhagavad-gita-children-exp-v1-010",
    "title": "Watering the Tulsi Plant",
    "shortTitle": "Watering the Tulsi Plant",
    "summary": "No one is watching when it is time to water the tulsi. Krishna says care matters even when nobody notices.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 10,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Morning challenge",
        "text": "No one is watching when it is time to water the tulsi. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "Breathing pause",
        "text": "Krishna says care matters even when nobody notices."
      },
      {
        "id": "panel-3",
        "title": "Careful response",
        "text": "Arjuna fetches a small lota, waters gently, and clears dry leaves. Arjuna practices this choice with steady care."
      },
      {
        "id": "panel-4",
        "title": "Steady ending",
        "text": "He learns self-control and consistency in quiet duties."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models friendship through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'Watering the Tulsi Plant' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'Watering the Tulsi Plant' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Watering the Tulsi Plant. No one is watching when it is time to water the tulsi. Krishna says care matters even when nobody notices. Arjuna fetches a small lota, waters gently, and clears dry leaves. He learns self-control and consistency in quiet duties.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-011",
    "storyId": "bhagavad-gita-children-exp-v1-011",
    "slug": "bhagavad-gita-children-exp-v1-011",
    "title": "The Borrowed Pencil",
    "shortTitle": "The Borrowed Pencil",
    "summary": "Arjuna finds a classmate\u2019s pencil in his own pouch. Krishna asks what honesty asks for in small things.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 11,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Before class",
        "text": "Arjuna finds a classmate\u2019s pencil in his own pouch. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "Kind counsel",
        "text": "Krishna asks what honesty asks for in small things."
      },
      {
        "id": "panel-3",
        "title": "Careful response",
        "text": "Arjuna returns it before class and thanks his friend for lending yesterday. Arjuna practices this choice with steady care."
      },
      {
        "id": "panel-4",
        "title": "Steady ending",
        "text": "He learns trust grows through simple truthful actions."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models steady effort through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'The Borrowed Pencil' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'The Borrowed Pencil' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Borrowed Pencil. Arjuna finds a classmate\u2019s pencil in his own pouch. Krishna asks what honesty asks for in small things. Arjuna returns it before class and thanks his friend for lending yesterday. He learns trust grows through simple truthful actions.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-012",
    "storyId": "bhagavad-gita-children-exp-v1-012",
    "slug": "bhagavad-gita-children-exp-v1-012",
    "title": "Pause Before Anger",
    "shortTitle": "Pause Before Anger",
    "summary": "A game mistake makes Arjuna feel angry and hot-faced. Krishna invites him to pause, breathe, and name the feeling.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 12,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "At home",
        "text": "A game mistake makes Arjuna feel angry and hot-faced. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "Kind counsel",
        "text": "Krishna invites him to pause, breathe, and name the feeling."
      },
      {
        "id": "panel-3",
        "title": "Careful response",
        "text": "Arjuna asks for a replay politely instead of shouting. Arjuna practices this choice with steady care."
      },
      {
        "id": "panel-4",
        "title": "Steady ending",
        "text": "He learns courage includes calming his own reaction."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models honesty through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'Pause Before Anger' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'Pause Before Anger' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Pause Before Anger. A game mistake makes Arjuna feel angry and hot-faced. Krishna invites him to pause, breathe, and name the feeling. Arjuna asks for a replay politely instead of shouting. He learns courage includes calming his own reaction.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-013",
    "storyId": "bhagavad-gita-children-exp-v1-013",
    "slug": "bhagavad-gita-children-exp-v1-013",
    "title": "Steady Homework Hour",
    "shortTitle": "Steady Homework Hour",
    "summary": "Math homework feels long and frustrating after playtime. Krishna suggests breaking work into small steady steps.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 13,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "At the courtyard",
        "text": "Math homework feels long and frustrating after playtime. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "Krishna\u2019s reminder",
        "text": "Krishna suggests breaking work into small steady steps."
      },
      {
        "id": "panel-3",
        "title": "Promise kept",
        "text": "Arjuna completes one page at a time and checks carefully. Arjuna practices this choice with steady care."
      },
      {
        "id": "panel-4",
        "title": "Heart lesson",
        "text": "He learns focus and effort bring clarity."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models courage through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'Steady Homework Hour' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'Steady Homework Hour' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Steady Homework Hour. Math homework feels long and frustrating after playtime. Krishna suggests breaking work into small steady steps. Arjuna completes one page at a time and checks carefully. He learns focus and effort bring clarity.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-014",
    "storyId": "bhagavad-gita-children-exp-v1-014",
    "slug": "bhagavad-gita-children-exp-v1-014",
    "title": "Carrying the Basket Together",
    "shortTitle": "Carrying the Basket Together",
    "summary": "An elder struggles with a heavy vegetable basket at the gate. Krishna asks Arjuna to serve before being asked twice.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 14,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Steady Effort",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "At lunch",
        "text": "An elder struggles with a heavy vegetable basket at the gate. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "Krishna\u2019s reminder",
        "text": "Krishna asks Arjuna to serve before being asked twice."
      },
      {
        "id": "panel-3",
        "title": "Promise kept",
        "text": "Arjuna lifts one side and walks slowly beside the elder. Arjuna practices this choice with steady care."
      },
      {
        "id": "panel-4",
        "title": "Heart lesson",
        "text": "He learns duty as respectful service."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models calm through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'Carrying the Basket Together' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'Carrying the Basket Together' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Carrying the Basket Together. An elder struggles with a heavy vegetable basket at the gate. Krishna asks Arjuna to serve before being asked twice. Arjuna lifts one side and walks slowly beside the elder. He learns duty as respectful service.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-015",
    "storyId": "bhagavad-gita-children-exp-v1-015",
    "slug": "bhagavad-gita-children-exp-v1-015",
    "title": "A Humble Thank You",
    "shortTitle": "A Humble Thank You",
    "summary": "Arjuna receives praise for singing clearly in prayer hall. Krishna reminds him to stay humble and grateful.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 15,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "During play",
        "text": "Arjuna receives praise for singing clearly in prayer hall. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "Gentle advice",
        "text": "Krishna reminds him to stay humble and grateful."
      },
      {
        "id": "panel-3",
        "title": "Promise kept",
        "text": "Arjuna thanks his teacher and acknowledges friends who practiced with him."
      },
      {
        "id": "panel-4",
        "title": "Heart lesson",
        "text": "He learns humility keeps joy gentle and grounded."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models responsibility through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'A Humble Thank You' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'A Humble Thank You' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "A Humble Thank You. Arjuna receives praise for singing clearly in prayer hall. Krishna reminds him to stay humble and grateful. Arjuna thanks his teacher and acknowledges friends who practiced with him. He learns humility keeps joy gentle and grounded.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-016",
    "storyId": "bhagavad-gita-children-exp-v1-016",
    "slug": "bhagavad-gita-children-exp-v1-016",
    "title": "The Queue at the Well",
    "shortTitle": "The Queue at the Well",
    "summary": "The well line grows long and children begin to push. Krishna asks Arjuna to model patience and fair turns.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 16,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Focus",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Practice time",
        "text": "The well line grows long and children begin to push. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "Gentle advice",
        "text": "Krishna asks Arjuna to model patience and fair turns."
      },
      {
        "id": "panel-3",
        "title": "Action chosen",
        "text": "Arjuna marks a line in dust and helps younger children wait safely. Arjuna practices this choice with steady care."
      },
      {
        "id": "panel-4",
        "title": "Heart lesson",
        "text": "Order returns, and he learns calm leadership."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models kindness through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'The Queue at the Well' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'The Queue at the Well' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Queue at the Well. The well line grows long and children begin to push. Krishna asks Arjuna to model patience and fair turns. Arjuna marks a line in dust and helps younger children wait safely. Order returns, and he learns calm leadership.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-017",
    "storyId": "bhagavad-gita-children-exp-v1-017",
    "slug": "bhagavad-gita-children-exp-v1-017",
    "title": "Finishing the Last Chore",
    "shortTitle": "Finishing the Last Chore",
    "summary": "Evening play starts while one chore remains undone. Krishna reminds Arjuna that duty comes before distraction.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 17,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Starting moment",
        "text": "Evening play starts while one chore remains undone. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "A calm question",
        "text": "Krishna reminds Arjuna that duty comes before distraction."
      },
      {
        "id": "panel-3",
        "title": "Action chosen",
        "text": "Arjuna folds laundry first, then joins play peacefully. Arjuna practices this choice with steady care."
      },
      {
        "id": "panel-4",
        "title": "Peaceful close",
        "text": "He learns completion brings a lighter mind."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models focus through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'Finishing the Last Chore' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'Finishing the Last Chore' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Finishing the Last Chore. Evening play starts while one chore remains undone. Krishna reminds Arjuna that duty comes before distraction. Arjuna folds laundry first, then joins play peacefully. He learns completion brings a lighter mind.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-018",
    "storyId": "bhagavad-gita-children-exp-v1-018",
    "slug": "bhagavad-gita-children-exp-v1-018",
    "title": "Listening Before Answering",
    "shortTitle": "Listening Before Answering",
    "summary": "Arjuna interrupts while his friend explains a problem. Krishna says listening fully is also a form of kindness.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 18,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Morning challenge",
        "text": "Arjuna interrupts while his friend explains a problem. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "A calm question",
        "text": "Krishna says listening fully is also a form of kindness."
      },
      {
        "id": "panel-3",
        "title": "Action chosen",
        "text": "Arjuna stays quiet, listens, then responds with care. Arjuna practices this choice with steady care."
      },
      {
        "id": "panel-4",
        "title": "Peaceful close",
        "text": "He learns friendship grows through attention."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models humility through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'Listening Before Answering' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'Listening Before Answering' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Listening Before Answering. Arjuna interrupts while his friend explains a problem. Krishna says listening fully is also a form of kindness. Arjuna stays quiet, listens, then responds with care. He learns friendship grows through attention.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-019",
    "storyId": "bhagavad-gita-children-exp-v1-019",
    "slug": "bhagavad-gita-children-exp-v1-019",
    "title": "The Spilled Ink Note",
    "shortTitle": "The Spilled Ink Note",
    "summary": "Ink spills on homework right before class. Krishna guides Arjuna to stay calm and rewrite neatly.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 19,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Self-Control",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Before class",
        "text": "Ink spills on homework right before class. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "Wise guidance",
        "text": "Krishna guides Arjuna to stay calm and rewrite neatly."
      },
      {
        "id": "panel-3",
        "title": "What Arjuna did",
        "text": "Arjuna rewrites the page and submits honest work on time. Arjuna practices this choice with steady care."
      },
      {
        "id": "panel-4",
        "title": "Peaceful close",
        "text": "He learns self-control under pressure."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models devotion through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'The Spilled Ink Note' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'The Spilled Ink Note' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Spilled Ink Note. Ink spills on homework right before class. Krishna guides Arjuna to stay calm and rewrite neatly. Arjuna rewrites the page and submits honest work on time. He learns self-control under pressure.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-020",
    "storyId": "bhagavad-gita-children-exp-v1-020",
    "slug": "bhagavad-gita-children-exp-v1-020",
    "title": "Saving a Seat Kindly",
    "shortTitle": "Saving a Seat Kindly",
    "summary": "Only one shady seat is left during assembly. Krishna asks Arjuna to notice who needs comfort most.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 20,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "At home",
        "text": "Only one shady seat is left during assembly. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "Wise guidance",
        "text": "Krishna asks Arjuna to notice who needs comfort most."
      },
      {
        "id": "panel-3",
        "title": "What Arjuna did",
        "text": "Arjuna offers the seat to a tired younger child. Arjuna practices this choice with steady care."
      },
      {
        "id": "panel-4",
        "title": "Peaceful close",
        "text": "He learns kindness through small sacrifices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models self-control through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'Saving a Seat Kindly' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'Saving a Seat Kindly' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Saving a Seat Kindly. Only one shady seat is left during assembly. Krishna asks Arjuna to notice who needs comfort most. Arjuna offers the seat to a tired younger child. He learns kindness through small sacrifices.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-021",
    "storyId": "bhagavad-gita-children-exp-v1-021",
    "slug": "bhagavad-gita-children-exp-v1-021",
    "title": "The Missed Catch",
    "shortTitle": "The Missed Catch",
    "summary": "Arjuna misses an easy catch and feels embarrassed. Krishna teaches him to practice instead of blame.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 21,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "At the courtyard",
        "text": "Arjuna misses an easy catch and feels embarrassed. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "Breathing pause",
        "text": "Krishna teaches him to practice instead of blame."
      },
      {
        "id": "panel-3",
        "title": "What Arjuna did",
        "text": "Arjuna asks for another throw and keeps trying steadily."
      },
      {
        "id": "panel-4",
        "title": "What he learned",
        "text": "He learns courage through repetition."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models gratitude through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'The Missed Catch' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'The Missed Catch' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Missed Catch. Arjuna misses an easy catch and feels embarrassed. Krishna teaches him to practice instead of blame. Arjuna asks for another throw and keeps trying steadily. He learns courage through repetition.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-022",
    "storyId": "bhagavad-gita-children-exp-v1-022",
    "slug": "bhagavad-gita-children-exp-v1-022",
    "title": "Returning the Library Book",
    "shortTitle": "Returning the Library Book",
    "summary": "A borrowed storybook is overdue by two days. Krishna reminds Arjuna that promises include timing.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 22,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "At lunch",
        "text": "A borrowed storybook is overdue by two days. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "Breathing pause",
        "text": "Krishna reminds Arjuna that promises include timing."
      },
      {
        "id": "panel-3",
        "title": "Helpful step",
        "text": "Arjuna returns it, apologizes, and records the due date. Arjuna practices this choice with steady care."
      },
      {
        "id": "panel-4",
        "title": "What he learned",
        "text": "He learns responsibility in follow-through."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models friendship through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'Returning the Library Book' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'Returning the Library Book' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Returning the Library Book. A borrowed storybook is overdue by two days. Krishna reminds Arjuna that promises include timing. Arjuna returns it, apologizes, and records the due date. He learns responsibility in follow-through.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-023",
    "storyId": "bhagavad-gita-children-exp-v1-023",
    "slug": "bhagavad-gita-children-exp-v1-023",
    "title": "The Quiet Helping Hand",
    "shortTitle": "The Quiet Helping Hand",
    "summary": "Decorations are unfinished before guests arrive. Krishna asks Arjuna to help without seeking notice.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 23,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "During play",
        "text": "Decorations are unfinished before guests arrive. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "Kind counsel",
        "text": "Krishna asks Arjuna to help without seeking notice."
      },
      {
        "id": "panel-3",
        "title": "Helpful step",
        "text": "Arjuna ties marigold strings and arranges mats quietly. Arjuna practices this choice with steady care."
      },
      {
        "id": "panel-4",
        "title": "What he learned",
        "text": "He learns devotion through unseen service."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models steady effort through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'The Quiet Helping Hand' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'The Quiet Helping Hand' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Quiet Helping Hand. Decorations are unfinished before guests arrive. Krishna asks Arjuna to help without seeking notice. Arjuna ties marigold strings and arranges mats quietly. He learns devotion through unseen service.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-024",
    "storyId": "bhagavad-gita-children-exp-v1-024",
    "slug": "bhagavad-gita-children-exp-v1-024",
    "title": "Choosing Not to Tease",
    "shortTitle": "Choosing Not to Tease",
    "summary": "Some children laugh at a classmate\u2019s pronunciation. Krishna asks Arjuna to protect dignity with gentle courage.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 24,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Steady Effort",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Practice time",
        "text": "Some children laugh at a classmate\u2019s pronunciation. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "Kind counsel",
        "text": "Krishna asks Arjuna to protect dignity with gentle courage."
      },
      {
        "id": "panel-3",
        "title": "Helpful step",
        "text": "Arjuna changes the mood by encouraging one more try. Arjuna practices this choice with steady care."
      },
      {
        "id": "panel-4",
        "title": "What he learned",
        "text": "He learns kindness is brave."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models honesty through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'Choosing Not to Tease' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'Choosing Not to Tease' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Choosing Not to Tease. Some children laugh at a classmate\u2019s pronunciation. Krishna asks Arjuna to protect dignity with gentle courage. Arjuna changes the mood by encouraging one more try. He learns kindness is brave.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-025",
    "storyId": "bhagavad-gita-children-exp-v1-025",
    "slug": "bhagavad-gita-children-exp-v1-025",
    "title": "One Task at a Time",
    "shortTitle": "One Task at a Time",
    "summary": "Many tasks at once make Arjuna restless. Krishna suggests choosing one task and finishing it mindfully.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 25,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Starting moment",
        "text": "Many tasks at once make Arjuna restless. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "Krishna\u2019s reminder",
        "text": "Krishna suggests choosing one task and finishing it mindfully."
      },
      {
        "id": "panel-3",
        "title": "Careful response",
        "text": "Arjuna completes each step in order using a small checklist. Arjuna practices this choice with steady care."
      },
      {
        "id": "panel-4",
        "title": "Quiet result",
        "text": "He learns focus reduces worry."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models courage through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'One Task at a Time' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'One Task at a Time' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "One Task at a Time. Many tasks at once make Arjuna restless. Krishna suggests choosing one task and finishing it mindfully. Arjuna completes each step in order using a small checklist. He learns focus reduces worry.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-026",
    "storyId": "bhagavad-gita-children-exp-v1-026",
    "slug": "bhagavad-gita-children-exp-v1-026",
    "title": "The Shared Prasad Plate",
    "shortTitle": "The Shared Prasad Plate",
    "summary": "Only a little prasad remains after prayer. Krishna reminds Arjuna to share before taking extra.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 26,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Focus",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Morning challenge",
        "text": "Only a little prasad remains after prayer. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "Krishna\u2019s reminder",
        "text": "Krishna reminds Arjuna to share before taking extra."
      },
      {
        "id": "panel-3",
        "title": "Careful response",
        "text": "Arjuna divides it into equal pieces for everyone nearby. Arjuna practices this choice with steady care."
      },
      {
        "id": "panel-4",
        "title": "Quiet result",
        "text": "He learns gratitude and fairness together."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models calm through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'The Shared Prasad Plate' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'The Shared Prasad Plate' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Shared Prasad Plate. Only a little prasad remains after prayer. Krishna reminds Arjuna to share before taking extra. Arjuna divides it into equal pieces for everyone nearby. He learns gratitude and fairness together.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-027",
    "storyId": "bhagavad-gita-children-exp-v1-027",
    "slug": "bhagavad-gita-children-exp-v1-027",
    "title": "When Rain Changes Plans",
    "shortTitle": "When Rain Changes Plans",
    "summary": "Rain cancels the outdoor game Arjuna planned. Krishna teaches acceptance and creative effort.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 27,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Before class",
        "text": "Rain cancels the outdoor game Arjuna planned. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "Gentle advice",
        "text": "Krishna teaches acceptance and creative effort."
      },
      {
        "id": "panel-3",
        "title": "Careful response",
        "text": "Arjuna starts an indoor storytelling circle instead. Arjuna practices this choice with steady care."
      },
      {
        "id": "panel-4",
        "title": "Quiet result",
        "text": "He learns calm flexibility."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models responsibility through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'When Rain Changes Plans' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'When Rain Changes Plans' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "When Rain Changes Plans. Rain cancels the outdoor game Arjuna planned. Krishna teaches acceptance and creative effort. Arjuna starts an indoor storytelling circle instead. He learns calm flexibility.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-028",
    "storyId": "bhagavad-gita-children-exp-v1-028",
    "slug": "bhagavad-gita-children-exp-v1-028",
    "title": "Speaking Gently to a Younger Cousin",
    "shortTitle": "Speaking Gently to a Younger Cousin",
    "summary": "A younger cousin keeps interrupting homework time. Krishna asks Arjuna to guide with patience, not irritation.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 28,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "At home",
        "text": "A younger cousin keeps interrupting homework time. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "Gentle advice",
        "text": "Krishna asks Arjuna to guide with patience, not irritation."
      },
      {
        "id": "panel-3",
        "title": "Promise kept",
        "text": "Arjuna sets a short play break and then returns to study. Arjuna practices this choice with steady care."
      },
      {
        "id": "panel-4",
        "title": "Quiet result",
        "text": "He learns self-control in family moments."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models kindness through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'Speaking Gently to a Younger Cousin' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'Speaking Gently to a Younger Cousin' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Speaking Gently to a Younger Cousin. A younger cousin keeps interrupting homework time. Krishna asks Arjuna to guide with patience, not irritation. Arjuna sets a short play break and then returns to study. He learns self-control in family moments.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-029",
    "storyId": "bhagavad-gita-children-exp-v1-029",
    "slug": "bhagavad-gita-children-exp-v1-029",
    "title": "The Repaired Toy Wheel",
    "shortTitle": "The Repaired Toy Wheel",
    "summary": "A toy cart wheel loosens before sharing time. Krishna encourages careful repair instead of throwing it aside.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 29,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Self-Control",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "At the courtyard",
        "text": "A toy cart wheel loosens before sharing time. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "A calm question",
        "text": "Krishna encourages careful repair instead of throwing it aside."
      },
      {
        "id": "panel-3",
        "title": "Promise kept",
        "text": "Arjuna tightens the peg and shares the cart with others. Arjuna practices this choice with steady care."
      },
      {
        "id": "panel-4",
        "title": "Steady ending",
        "text": "He learns steady effort and care for common things."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models focus through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'The Repaired Toy Wheel' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'The Repaired Toy Wheel' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Repaired Toy Wheel. A toy cart wheel loosens before sharing time. Krishna encourages careful repair instead of throwing it aside. Arjuna tightens the peg and shares the cart with others. He learns steady effort and care for common things.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-030",
    "storyId": "bhagavad-gita-children-exp-v1-030",
    "slug": "bhagavad-gita-children-exp-v1-030",
    "title": "A Thankful Closing Prayer",
    "shortTitle": "A Thankful Closing Prayer",
    "summary": "Day ends after many small tasks and lessons. Krishna asks Arjuna to notice what went well with gratitude.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 30,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "At lunch",
        "text": "Day ends after many small tasks and lessons. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "A calm question",
        "text": "Krishna asks Arjuna to notice what went well with gratitude."
      },
      {
        "id": "panel-3",
        "title": "Promise kept",
        "text": "Arjuna offers a short thank-you prayer and rests peacefully. Arjuna practices this choice with steady care."
      },
      {
        "id": "panel-4",
        "title": "Steady ending",
        "text": "He learns gratitude steadies the heart."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models humility through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'A Thankful Closing Prayer' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'A Thankful Closing Prayer' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "A Thankful Closing Prayer. Day ends after many small tasks and lessons. Krishna asks Arjuna to notice what went well with gratitude. Arjuna offers a short thank-you prayer and rests peacefully. He learns gratitude steadies the heart.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-031",
    "storyId": "bhagavad-gita-children-exp-v1-031",
    "slug": "bhagavad-gita-children-exp-v1-031",
    "title": "The Chalkboard Mistake",
    "shortTitle": "The Chalkboard Mistake",
    "summary": "Arjuna writes the wrong answer on the board. Krishna says correcting calmly matters more than hiding errors.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 31,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "During play",
        "text": "Arjuna writes the wrong answer on the board. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "Wise guidance",
        "text": "Krishna says correcting calmly matters more than hiding errors."
      },
      {
        "id": "panel-3",
        "title": "Action chosen",
        "text": "Arjuna erases, rewrites, and thanks the classmate who helped. Arjuna practices this choice with steady care."
      },
      {
        "id": "panel-4",
        "title": "Steady ending",
        "text": "He learns humility and truth together."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models devotion through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'The Chalkboard Mistake' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'The Chalkboard Mistake' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-032",
    "storyId": "bhagavad-gita-children-exp-v1-032",
    "slug": "bhagavad-gita-children-exp-v1-032",
    "title": "Helping During Festival Setup",
    "shortTitle": "Helping During Festival Setup",
    "summary": "Festival lamps and flowers need arranging before dusk. Krishna reminds Arjuna that careful teamwork is sacred too.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 32,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Practice time",
        "text": "Festival lamps and flowers need arranging before dusk. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "Wise guidance",
        "text": "Krishna reminds Arjuna that careful teamwork is sacred too."
      },
      {
        "id": "panel-3",
        "title": "Action chosen",
        "text": "Arjuna places diyas safely and checks pathways for elders. Arjuna practices this choice with steady care."
      },
      {
        "id": "panel-4",
        "title": "Steady ending",
        "text": "He learns duty with thoughtful care."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models self-control through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'Helping During Festival Setup' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'Helping During Festival Setup' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-033",
    "storyId": "bhagavad-gita-children-exp-v1-033",
    "slug": "bhagavad-gita-children-exp-v1-033",
    "title": "The Patient Music Practice",
    "shortTitle": "The Patient Music Practice",
    "summary": "Tabla rhythm is hard to keep at first try. Krishna teaches Arjuna to slow down and repeat basics.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 33,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Starting moment",
        "text": "Tabla rhythm is hard to keep at first try. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "Breathing pause",
        "text": "Krishna teaches Arjuna to slow down and repeat basics."
      },
      {
        "id": "panel-3",
        "title": "Action chosen",
        "text": "Arjuna practices beats steadily and improves by evening."
      },
      {
        "id": "panel-4",
        "title": "Heart lesson",
        "text": "He learns patience with disciplined effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models gratitude through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'The Patient Music Practice' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'The Patient Music Practice' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-034",
    "storyId": "bhagavad-gita-children-exp-v1-034",
    "slug": "bhagavad-gita-children-exp-v1-034",
    "title": "Choosing Honesty in a Score Game",
    "shortTitle": "Choosing Honesty in a Score Game",
    "summary": "Arjuna notices an extra point marked by mistake. Krishna asks what fairness requires when no one saw.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 34,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Steady Effort",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Morning challenge",
        "text": "Arjuna notices an extra point marked by mistake. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "Breathing pause",
        "text": "Krishna asks what fairness requires when no one saw."
      },
      {
        "id": "panel-3",
        "title": "What Arjuna did",
        "text": "Arjuna reports the error and accepts the true score. Arjuna practices this choice with steady care."
      },
      {
        "id": "panel-4",
        "title": "Heart lesson",
        "text": "He learns integrity over advantage."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models friendship through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'Choosing Honesty in a Score Game' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'Choosing Honesty in a Score Game' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-035",
    "storyId": "bhagavad-gita-children-exp-v1-035",
    "slug": "bhagavad-gita-children-exp-v1-035",
    "title": "Calm Hands at Mealtime",
    "shortTitle": "Calm Hands at Mealtime",
    "summary": "Food spills while Arjuna serves guests in a hurry. Krishna advises slower hands and mindful serving.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 35,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Before class",
        "text": "Food spills while Arjuna serves guests in a hurry. In the school courtyard, a small task is waiting."
      },
      {
        "id": "panel-2",
        "title": "Kind counsel",
        "text": "Krishna advises slower hands and mindful serving."
      },
      {
        "id": "panel-3",
        "title": "What Arjuna did",
        "text": "Arjuna cleans the area and serves again with care. Arjuna practices this choice with steady care."
      },
      {
        "id": "panel-4",
        "title": "Heart lesson",
        "text": "He learns calm action prevents bigger trouble."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models steady effort through calm reflection and responsible action.",
      "discussionPrompt": "What choice in 'Calm Hands at Mealtime' helped turn the moment in a better direction?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "Where can you practice this same value from 'Calm Hands at Mealtime' today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-036",
    "storyId": "bhagavad-gita-children-exp-v1-036",
    "slug": "bhagavad-gita-children-exp-v1-036",
    "title": "Arjuna Learns Honesty with Krishna",
    "shortTitle": "Arjuna Learns Honesty with Krishna",
    "summary": "Krishna gently guides Arjuna in honesty in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 36,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Honesty",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Arjuna Learns Honesty with Krishna J', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models honesty through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-037",
    "storyId": "bhagavad-gita-children-exp-v1-037",
    "slug": "bhagavad-gita-children-exp-v1-037",
    "title": "Krishna Guides a Courage Choice",
    "shortTitle": "Krishna Guides a Courage Choice",
    "summary": "Krishna gently guides Arjuna in courage in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 37,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Krishna Guides a Courage Choice K', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models courage through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-038",
    "storyId": "bhagavad-gita-children-exp-v1-038",
    "slug": "bhagavad-gita-children-exp-v1-038",
    "title": "A Calm Promise on the Chariot",
    "shortTitle": "A Calm Promise on the Chariot",
    "summary": "Krishna gently guides Arjuna in calm in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 38,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'A Calm Promise on the Chariot L', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models calm through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-039",
    "storyId": "bhagavad-gita-children-exp-v1-039",
    "slug": "bhagavad-gita-children-exp-v1-039",
    "title": "Responsibility Steps for a Steady Heart",
    "shortTitle": "Responsibility Steps for a Steady Heart",
    "summary": "Krishna gently guides Arjuna in responsibility in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 39,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Responsibility Steps for a Steady Heart M', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models responsibility through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-040",
    "storyId": "bhagavad-gita-children-exp-v1-040",
    "slug": "bhagavad-gita-children-exp-v1-040",
    "title": "Doing Right with Kindness",
    "shortTitle": "Doing Right with Kindness",
    "summary": "Krishna gently guides Arjuna in kindness in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 40,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Doing Right with Kindness N', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models kindness through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-041",
    "storyId": "bhagavad-gita-children-exp-v1-041",
    "slug": "bhagavad-gita-children-exp-v1-041",
    "title": "Arjuna Learns Focus with Krishna",
    "shortTitle": "Arjuna Learns Focus with Krishna",
    "summary": "Krishna gently guides Arjuna in focus in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 41,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Focus",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Arjuna Learns Focus with Krishna O', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models focus through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-042",
    "storyId": "bhagavad-gita-children-exp-v1-042",
    "slug": "bhagavad-gita-children-exp-v1-042",
    "title": "Krishna Guides a Humility Choice",
    "shortTitle": "Krishna Guides a Humility Choice",
    "summary": "Krishna gently guides Arjuna in humility in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 42,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Krishna Guides a Humility Choice P', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models humility through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-043",
    "storyId": "bhagavad-gita-children-exp-v1-043",
    "slug": "bhagavad-gita-children-exp-v1-043",
    "title": "A Devotion Promise on the Chariot",
    "shortTitle": "A Devotion Promise on the Chariot",
    "summary": "Krishna gently guides Arjuna in devotion in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 43,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Devotion",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'A Devotion Promise on the Chariot Q', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models devotion through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-044",
    "storyId": "bhagavad-gita-children-exp-v1-044",
    "slug": "bhagavad-gita-children-exp-v1-044",
    "title": "Self-Control Steps for a Steady Heart",
    "shortTitle": "Self-Control Steps for a Steady Heart",
    "summary": "Krishna gently guides Arjuna in self-control in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 44,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Self-Control",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Self-Control Steps for a Steady Heart R', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models self-control through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-045",
    "storyId": "bhagavad-gita-children-exp-v1-045",
    "slug": "bhagavad-gita-children-exp-v1-045",
    "title": "Doing Right with Gratitude",
    "shortTitle": "Doing Right with Gratitude",
    "summary": "Krishna gently guides Arjuna in gratitude in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 45,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Doing Right with Gratitude S', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models gratitude through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-046",
    "storyId": "bhagavad-gita-children-exp-v1-046",
    "slug": "bhagavad-gita-children-exp-v1-046",
    "title": "Arjuna Learns Friendship with Krishna",
    "shortTitle": "Arjuna Learns Friendship with Krishna",
    "summary": "Krishna gently guides Arjuna in friendship in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 46,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Arjuna Learns Friendship with Krishna T', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models friendship through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-047",
    "storyId": "bhagavad-gita-children-exp-v1-047",
    "slug": "bhagavad-gita-children-exp-v1-047",
    "title": "Krishna Guides a Steady Effort Choice",
    "shortTitle": "Krishna Guides a Steady Effort Choice",
    "summary": "Krishna gently guides Arjuna in steady effort in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 47,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Steady Effort",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Krishna Guides a Steady Effort Choice U', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models steady effort through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-048",
    "storyId": "bhagavad-gita-children-exp-v1-048",
    "slug": "bhagavad-gita-children-exp-v1-048",
    "title": "A Honesty Promise on the Chariot",
    "shortTitle": "A Honesty Promise on the Chariot",
    "summary": "Krishna gently guides Arjuna in honesty in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 48,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Honesty",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'A Honesty Promise on the Chariot V', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models honesty through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-049",
    "storyId": "bhagavad-gita-children-exp-v1-049",
    "slug": "bhagavad-gita-children-exp-v1-049",
    "title": "Courage Steps for a Steady Heart",
    "shortTitle": "Courage Steps for a Steady Heart",
    "summary": "Krishna gently guides Arjuna in courage in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 49,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Courage Steps for a Steady Heart W', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models courage through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-050",
    "storyId": "bhagavad-gita-children-exp-v1-050",
    "slug": "bhagavad-gita-children-exp-v1-050",
    "title": "Doing Right with Calm",
    "shortTitle": "Doing Right with Calm",
    "summary": "Krishna gently guides Arjuna in calm in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 50,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Doing Right with Calm X', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models calm through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-051",
    "storyId": "bhagavad-gita-children-exp-v1-051",
    "slug": "bhagavad-gita-children-exp-v1-051",
    "title": "Arjuna Learns Responsibility with Krishna",
    "shortTitle": "Arjuna Learns Responsibility with Krishna",
    "summary": "Krishna gently guides Arjuna in responsibility in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 51,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Arjuna Learns Responsibility with Krishna Y', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models responsibility through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-052",
    "storyId": "bhagavad-gita-children-exp-v1-052",
    "slug": "bhagavad-gita-children-exp-v1-052",
    "title": "Krishna Guides a Kindness Choice",
    "shortTitle": "Krishna Guides a Kindness Choice",
    "summary": "Krishna gently guides Arjuna in kindness in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 52,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Krishna Guides a Kindness Choice Z', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models kindness through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-053",
    "storyId": "bhagavad-gita-children-exp-v1-053",
    "slug": "bhagavad-gita-children-exp-v1-053",
    "title": "A Focus Promise on the Chariot",
    "shortTitle": "A Focus Promise on the Chariot",
    "summary": "Krishna gently guides Arjuna in focus in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 53,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Focus",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'A Focus Promise on the Chariot A', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models focus through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-054",
    "storyId": "bhagavad-gita-children-exp-v1-054",
    "slug": "bhagavad-gita-children-exp-v1-054",
    "title": "Humility Steps for a Steady Heart",
    "shortTitle": "Humility Steps for a Steady Heart",
    "summary": "Krishna gently guides Arjuna in humility in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 54,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Humility Steps for a Steady Heart B', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models humility through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-055",
    "storyId": "bhagavad-gita-children-exp-v1-055",
    "slug": "bhagavad-gita-children-exp-v1-055",
    "title": "Doing Right with Devotion",
    "shortTitle": "Doing Right with Devotion",
    "summary": "Krishna gently guides Arjuna in devotion in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 55,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Devotion",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Doing Right with Devotion C', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models devotion through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-056",
    "storyId": "bhagavad-gita-children-exp-v1-056",
    "slug": "bhagavad-gita-children-exp-v1-056",
    "title": "Arjuna Learns Self-Control with Krishna",
    "shortTitle": "Arjuna Learns Self-Control with Krishna",
    "summary": "Krishna gently guides Arjuna in self-control in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 56,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Self-Control",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Arjuna Learns Self-Control with Krishna D', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models self-control through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-057",
    "storyId": "bhagavad-gita-children-exp-v1-057",
    "slug": "bhagavad-gita-children-exp-v1-057",
    "title": "Krishna Guides a Gratitude Choice",
    "shortTitle": "Krishna Guides a Gratitude Choice",
    "summary": "Krishna gently guides Arjuna in gratitude in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 57,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Krishna Guides a Gratitude Choice E', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models gratitude through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-058",
    "storyId": "bhagavad-gita-children-exp-v1-058",
    "slug": "bhagavad-gita-children-exp-v1-058",
    "title": "A Friendship Promise on the Chariot",
    "shortTitle": "A Friendship Promise on the Chariot",
    "summary": "Krishna gently guides Arjuna in friendship in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 58,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'A Friendship Promise on the Chariot F', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models friendship through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-059",
    "storyId": "bhagavad-gita-children-exp-v1-059",
    "slug": "bhagavad-gita-children-exp-v1-059",
    "title": "Steady Effort Steps for a Steady Heart",
    "shortTitle": "Steady Effort Steps for a Steady Heart",
    "summary": "Krishna gently guides Arjuna in steady effort in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 59,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Steady Effort",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Steady Effort Steps for a Steady Heart G', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models steady effort through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-060",
    "storyId": "bhagavad-gita-children-exp-v1-060",
    "slug": "bhagavad-gita-children-exp-v1-060",
    "title": "Doing Right with Honesty",
    "shortTitle": "Doing Right with Honesty",
    "summary": "Krishna gently guides Arjuna in honesty in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 60,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Honesty",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Doing Right with Honesty H', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models honesty through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-061",
    "storyId": "bhagavad-gita-children-exp-v1-061",
    "slug": "bhagavad-gita-children-exp-v1-061",
    "title": "Arjuna Learns Courage with Krishna",
    "shortTitle": "Arjuna Learns Courage with Krishna",
    "summary": "Krishna gently guides Arjuna in courage in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 61,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Arjuna Learns Courage with Krishna I', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models courage through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-062",
    "storyId": "bhagavad-gita-children-exp-v1-062",
    "slug": "bhagavad-gita-children-exp-v1-062",
    "title": "Krishna Guides a Calm Choice",
    "shortTitle": "Krishna Guides a Calm Choice",
    "summary": "Krishna gently guides Arjuna in calm in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 62,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Krishna Guides a Calm Choice J', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models calm through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-063",
    "storyId": "bhagavad-gita-children-exp-v1-063",
    "slug": "bhagavad-gita-children-exp-v1-063",
    "title": "A Responsibility Promise on the Chariot",
    "shortTitle": "A Responsibility Promise on the Chariot",
    "summary": "Krishna gently guides Arjuna in responsibility in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 63,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'A Responsibility Promise on the Chariot K', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models responsibility through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-064",
    "storyId": "bhagavad-gita-children-exp-v1-064",
    "slug": "bhagavad-gita-children-exp-v1-064",
    "title": "Kindness Steps for a Steady Heart",
    "shortTitle": "Kindness Steps for a Steady Heart",
    "summary": "Krishna gently guides Arjuna in kindness in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 64,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Kindness Steps for a Steady Heart L', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models kindness through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-065",
    "storyId": "bhagavad-gita-children-exp-v1-065",
    "slug": "bhagavad-gita-children-exp-v1-065",
    "title": "Doing Right with Focus",
    "shortTitle": "Doing Right with Focus",
    "summary": "Krishna gently guides Arjuna in focus in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 65,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Focus",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Doing Right with Focus M', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models focus through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-066",
    "storyId": "bhagavad-gita-children-exp-v1-066",
    "slug": "bhagavad-gita-children-exp-v1-066",
    "title": "Arjuna Learns Humility with Krishna",
    "shortTitle": "Arjuna Learns Humility with Krishna",
    "summary": "Krishna gently guides Arjuna in humility in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 66,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Arjuna Learns Humility with Krishna N', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models humility through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-067",
    "storyId": "bhagavad-gita-children-exp-v1-067",
    "slug": "bhagavad-gita-children-exp-v1-067",
    "title": "Krishna Guides a Devotion Choice",
    "shortTitle": "Krishna Guides a Devotion Choice",
    "summary": "Krishna gently guides Arjuna in devotion in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 67,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Devotion",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Krishna Guides a Devotion Choice O', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models devotion through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-068",
    "storyId": "bhagavad-gita-children-exp-v1-068",
    "slug": "bhagavad-gita-children-exp-v1-068",
    "title": "A Self-Control Promise on the Chariot",
    "shortTitle": "A Self-Control Promise on the Chariot",
    "summary": "Krishna gently guides Arjuna in self-control in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 68,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Self-Control",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'A Self-Control Promise on the Chariot P', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models self-control through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-069",
    "storyId": "bhagavad-gita-children-exp-v1-069",
    "slug": "bhagavad-gita-children-exp-v1-069",
    "title": "Gratitude Steps for a Steady Heart",
    "shortTitle": "Gratitude Steps for a Steady Heart",
    "summary": "Krishna gently guides Arjuna in gratitude in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 69,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Gratitude Steps for a Steady Heart Q', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models gratitude through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-070",
    "storyId": "bhagavad-gita-children-exp-v1-070",
    "slug": "bhagavad-gita-children-exp-v1-070",
    "title": "Doing Right with Friendship",
    "shortTitle": "Doing Right with Friendship",
    "summary": "Krishna gently guides Arjuna in friendship in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 70,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Doing Right with Friendship R', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models friendship through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-071",
    "storyId": "bhagavad-gita-children-exp-v1-071",
    "slug": "bhagavad-gita-children-exp-v1-071",
    "title": "Arjuna Learns Steady Effort with Krishna",
    "shortTitle": "Arjuna Learns Steady Effort with Krishna",
    "summary": "Krishna gently guides Arjuna in steady effort in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 71,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Steady Effort",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Arjuna Learns Steady Effort with Krishna S', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models steady effort through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-072",
    "storyId": "bhagavad-gita-children-exp-v1-072",
    "slug": "bhagavad-gita-children-exp-v1-072",
    "title": "Krishna Guides a Honesty Choice",
    "shortTitle": "Krishna Guides a Honesty Choice",
    "summary": "Krishna gently guides Arjuna in honesty in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 72,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Honesty",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Krishna Guides a Honesty Choice T', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models honesty through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-073",
    "storyId": "bhagavad-gita-children-exp-v1-073",
    "slug": "bhagavad-gita-children-exp-v1-073",
    "title": "A Courage Promise on the Chariot",
    "shortTitle": "A Courage Promise on the Chariot",
    "summary": "Krishna gently guides Arjuna in courage in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 73,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'A Courage Promise on the Chariot U', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models courage through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-074",
    "storyId": "bhagavad-gita-children-exp-v1-074",
    "slug": "bhagavad-gita-children-exp-v1-074",
    "title": "Calm Steps for a Steady Heart",
    "shortTitle": "Calm Steps for a Steady Heart",
    "summary": "Krishna gently guides Arjuna in calm in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 74,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Calm Steps for a Steady Heart V', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models calm through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-075",
    "storyId": "bhagavad-gita-children-exp-v1-075",
    "slug": "bhagavad-gita-children-exp-v1-075",
    "title": "Doing Right with Responsibility",
    "shortTitle": "Doing Right with Responsibility",
    "summary": "Krishna gently guides Arjuna in responsibility in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 75,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Doing Right with Responsibility W', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models responsibility through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-076",
    "storyId": "bhagavad-gita-children-exp-v1-076",
    "slug": "bhagavad-gita-children-exp-v1-076",
    "title": "Arjuna Learns Kindness with Krishna",
    "shortTitle": "Arjuna Learns Kindness with Krishna",
    "summary": "Krishna gently guides Arjuna in kindness in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 76,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Arjuna Learns Kindness with Krishna X', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models kindness through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-077",
    "storyId": "bhagavad-gita-children-exp-v1-077",
    "slug": "bhagavad-gita-children-exp-v1-077",
    "title": "Krishna Guides a Focus Choice",
    "shortTitle": "Krishna Guides a Focus Choice",
    "summary": "Krishna gently guides Arjuna in focus in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 77,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Focus",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Krishna Guides a Focus Choice Y', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models focus through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-078",
    "storyId": "bhagavad-gita-children-exp-v1-078",
    "slug": "bhagavad-gita-children-exp-v1-078",
    "title": "A Humility Promise on the Chariot",
    "shortTitle": "A Humility Promise on the Chariot",
    "summary": "Krishna gently guides Arjuna in humility in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 78,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'A Humility Promise on the Chariot Z', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models humility through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-079",
    "storyId": "bhagavad-gita-children-exp-v1-079",
    "slug": "bhagavad-gita-children-exp-v1-079",
    "title": "Devotion Steps for a Steady Heart",
    "shortTitle": "Devotion Steps for a Steady Heart",
    "summary": "Krishna gently guides Arjuna in devotion in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 79,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Devotion",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Devotion Steps for a Steady Heart A', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models devotion through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-080",
    "storyId": "bhagavad-gita-children-exp-v1-080",
    "slug": "bhagavad-gita-children-exp-v1-080",
    "title": "Doing Right with Self-Control",
    "shortTitle": "Doing Right with Self-Control",
    "summary": "Krishna gently guides Arjuna in self-control in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 80,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Self-Control",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Doing Right with Self-Control B', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models self-control through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-081",
    "storyId": "bhagavad-gita-children-exp-v1-081",
    "slug": "bhagavad-gita-children-exp-v1-081",
    "title": "Arjuna Learns Gratitude with Krishna",
    "shortTitle": "Arjuna Learns Gratitude with Krishna",
    "summary": "Krishna gently guides Arjuna in gratitude in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 81,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Arjuna Learns Gratitude with Krishna C', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models gratitude through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-082",
    "storyId": "bhagavad-gita-children-exp-v1-082",
    "slug": "bhagavad-gita-children-exp-v1-082",
    "title": "Krishna Guides a Friendship Choice",
    "shortTitle": "Krishna Guides a Friendship Choice",
    "summary": "Krishna gently guides Arjuna in friendship in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 82,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Krishna Guides a Friendship Choice D', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models friendship through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-083",
    "storyId": "bhagavad-gita-children-exp-v1-083",
    "slug": "bhagavad-gita-children-exp-v1-083",
    "title": "A Steady Effort Promise on the Chariot",
    "shortTitle": "A Steady Effort Promise on the Chariot",
    "summary": "Krishna gently guides Arjuna in steady effort in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 83,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Steady Effort",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'A Steady Effort Promise on the Chariot E', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models steady effort through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-084",
    "storyId": "bhagavad-gita-children-exp-v1-084",
    "slug": "bhagavad-gita-children-exp-v1-084",
    "title": "Honesty Steps for a Steady Heart",
    "shortTitle": "Honesty Steps for a Steady Heart",
    "summary": "Krishna gently guides Arjuna in honesty in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 84,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Honesty",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Honesty Steps for a Steady Heart F', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models honesty through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-085",
    "storyId": "bhagavad-gita-children-exp-v1-085",
    "slug": "bhagavad-gita-children-exp-v1-085",
    "title": "Doing Right with Courage",
    "shortTitle": "Doing Right with Courage",
    "summary": "Krishna gently guides Arjuna in courage in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 85,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Doing Right with Courage G', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models courage through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-086",
    "storyId": "bhagavad-gita-children-exp-v1-086",
    "slug": "bhagavad-gita-children-exp-v1-086",
    "title": "Arjuna Learns Calm with Krishna",
    "shortTitle": "Arjuna Learns Calm with Krishna",
    "summary": "Krishna gently guides Arjuna in calm in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 86,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Arjuna Learns Calm with Krishna H', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models calm through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-087",
    "storyId": "bhagavad-gita-children-exp-v1-087",
    "slug": "bhagavad-gita-children-exp-v1-087",
    "title": "Krishna Guides a Responsibility Choice",
    "shortTitle": "Krishna Guides a Responsibility Choice",
    "summary": "Krishna gently guides Arjuna in responsibility in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 87,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Krishna Guides a Responsibility Choice I', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models responsibility through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-088",
    "storyId": "bhagavad-gita-children-exp-v1-088",
    "slug": "bhagavad-gita-children-exp-v1-088",
    "title": "A Kindness Promise on the Chariot",
    "shortTitle": "A Kindness Promise on the Chariot",
    "summary": "Krishna gently guides Arjuna in kindness in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 88,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'A Kindness Promise on the Chariot J', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models kindness through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-089",
    "storyId": "bhagavad-gita-children-exp-v1-089",
    "slug": "bhagavad-gita-children-exp-v1-089",
    "title": "Focus Steps for a Steady Heart",
    "shortTitle": "Focus Steps for a Steady Heart",
    "summary": "Krishna gently guides Arjuna in focus in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 89,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Focus",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Focus Steps for a Steady Heart K', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models focus through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-090",
    "storyId": "bhagavad-gita-children-exp-v1-090",
    "slug": "bhagavad-gita-children-exp-v1-090",
    "title": "Doing Right with Humility",
    "shortTitle": "Doing Right with Humility",
    "summary": "Krishna gently guides Arjuna in humility in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 90,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Doing Right with Humility L', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models humility through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-091",
    "storyId": "bhagavad-gita-children-exp-v1-091",
    "slug": "bhagavad-gita-children-exp-v1-091",
    "title": "Arjuna Learns Devotion with Krishna",
    "shortTitle": "Arjuna Learns Devotion with Krishna",
    "summary": "Krishna gently guides Arjuna in devotion in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 91,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Devotion",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Arjuna Learns Devotion with Krishna M', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models devotion through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-092",
    "storyId": "bhagavad-gita-children-exp-v1-092",
    "slug": "bhagavad-gita-children-exp-v1-092",
    "title": "Krishna Guides a Self-Control Choice",
    "shortTitle": "Krishna Guides a Self-Control Choice",
    "summary": "Krishna gently guides Arjuna in self-control in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 92,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Self-Control",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Krishna Guides a Self-Control Choice N', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models self-control through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-093",
    "storyId": "bhagavad-gita-children-exp-v1-093",
    "slug": "bhagavad-gita-children-exp-v1-093",
    "title": "A Gratitude Promise on the Chariot",
    "shortTitle": "A Gratitude Promise on the Chariot",
    "summary": "Krishna gently guides Arjuna in gratitude in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 93,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'A Gratitude Promise on the Chariot O', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models gratitude through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-094",
    "storyId": "bhagavad-gita-children-exp-v1-094",
    "slug": "bhagavad-gita-children-exp-v1-094",
    "title": "Friendship Steps for a Steady Heart",
    "shortTitle": "Friendship Steps for a Steady Heart",
    "summary": "Krishna gently guides Arjuna in friendship in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 94,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Friendship Steps for a Steady Heart P', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models friendship through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-095",
    "storyId": "bhagavad-gita-children-exp-v1-095",
    "slug": "bhagavad-gita-children-exp-v1-095",
    "title": "Doing Right with Steady Effort",
    "shortTitle": "Doing Right with Steady Effort",
    "summary": "Krishna gently guides Arjuna in steady effort in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 95,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Steady Effort",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Doing Right with Steady Effort Q', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models steady effort through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-096",
    "storyId": "bhagavad-gita-children-exp-v1-096",
    "slug": "bhagavad-gita-children-exp-v1-096",
    "title": "Arjuna Learns Honesty with Krishna",
    "shortTitle": "Arjuna Learns Honesty with Krishna",
    "summary": "Krishna gently guides Arjuna in honesty in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 96,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Honesty",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Arjuna Learns Honesty with Krishna R', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models honesty through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-097",
    "storyId": "bhagavad-gita-children-exp-v1-097",
    "slug": "bhagavad-gita-children-exp-v1-097",
    "title": "Krishna Guides a Courage Choice",
    "shortTitle": "Krishna Guides a Courage Choice",
    "summary": "Krishna gently guides Arjuna in courage in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 97,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Krishna Guides a Courage Choice S', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models courage through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-098",
    "storyId": "bhagavad-gita-children-exp-v1-098",
    "slug": "bhagavad-gita-children-exp-v1-098",
    "title": "A Calm Promise on the Chariot",
    "shortTitle": "A Calm Promise on the Chariot",
    "summary": "Krishna gently guides Arjuna in calm in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 98,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'A Calm Promise on the Chariot T', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models calm through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-099",
    "storyId": "bhagavad-gita-children-exp-v1-099",
    "slug": "bhagavad-gita-children-exp-v1-099",
    "title": "Responsibility Steps for a Steady Heart",
    "shortTitle": "Responsibility Steps for a Steady Heart",
    "summary": "Krishna gently guides Arjuna in responsibility in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 99,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Responsibility Steps for a Steady Heart U', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models responsibility through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-100",
    "storyId": "bhagavad-gita-children-exp-v1-100",
    "slug": "bhagavad-gita-children-exp-v1-100",
    "title": "Doing Right with Kindness",
    "shortTitle": "Doing Right with Kindness",
    "summary": "Krishna gently guides Arjuna in kindness in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 100,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Doing Right with Kindness V', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models kindness through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
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
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  }
];

export const bhagavadGitaForChildrenExpansionPackV1StoryPack: StoryPack = {
  id: 'bhagavad-gita-for-children-expansion-pack-v1',
  title: 'Bhagavad Gita for Children Expansion Pack v1',
  childFacingTitle: 'Bhagavad Gita for Children',
  description: 'Child-safe Bhagavad Gita stories focused on courage, calm, and doing the right thing.',
  sourceTradition: 'Bhagavad Gita for Children',
  category: 'values',
  status: 'qa_ready',
  storyIds: bhagavadGitaForChildrenExpansionPackV1Stories.map((story) => story.id),
  recommendedAgeBands: ['6-8', '9-12'],
  contentSafetyNotes: [
    'Child-safe adaptation with non-violent framing.',
    'No adult theological density; practical values only.'
  ],
  sacredRespectNotes: ['Sacred teachings presented with warmth, simplicity, and respect.']
};

export const bhagavadGitaForChildrenExpansionPackV1Journey: DharmaJourney = {
  id: 'bhagavad-gita-for-children-journey-v1',
  title: 'Bhagavad Gita for Children Journey',
  childFacingTitle: 'Gita Calm and Courage Journey',
  description: 'A child-safe guided journey through practical Bhagavad Gita values.',
  sourceTradition: 'Bhagavad Gita for Children',
  recommendedAgeBands: ['6-8', '9-12'],
  storyIds: bhagavadGitaForChildrenExpansionPackV1Stories.map((story) => story.id),
  estimatedCompletionWeeks: 6,
  status: 'qa_ready',
  journeyType: 'guided_path'
};
