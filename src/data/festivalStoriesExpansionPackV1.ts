import type { DharmaJourney, Story, StoryPack } from '@/types/contentModel';
import type { StoryExperienceCategoryId } from '@/types/storyExperienceIndex';

type ExtendedStory = Story & { storyId: string; primaryCategoryId: StoryExperienceCategoryId; secondaryCategoryIds: StoryExperienceCategoryId[]; readinessStatus: 'metadata_only' | 'qa_ready'; audioStatus: 'script_needed' | 'script_ready'; journeyStatus: 'journey_ordered'; audioScript?: { narrationScript: string; voiceDirection: string; pronunciationNotes: string; pacingNotes: string; audioReadinessIntent: 'ready' }; };

export const festivalStoriesExpansionPackV1Stories: ExtendedStory[] = [
  {
    "id": "festival-stories-exp-v1-001",
    "storyId": "festival-stories-exp-v1-001",
    "slug": "festival-stories-exp-v1-001",
    "title": "Night Before Diwali in Ayodhya",
    "shortTitle": "Night Before Diwali in Ayodhya",
    "summary": "On the eve of Diwali, Rama, Sita, and Lakshmana walk through Ayodhya as families prepare lamps for a joyful homecoming.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Family retelling of Diwali welcome traditions in Ayodhya.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 1,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "Rama",
      "Sita",
      "Lakshmana"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Dawn",
        "text": "Night Before Diwali in Ayodhya: In Ayodhya lane, the family begins Diwali preparations with ."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": " Diwali using names, places, and  respectfully."
      },
      {
        "id": "panel-3",
        "title": "Kind Choice",
        "text": ", and the children choose patience, sharing, and respectful speech before continuing the celebration."
      },
      {
        "id": "panel-4",
        "title": "Evening Blessing",
        "text": "The celebration ends with prayer and prasad, and  from Diwali to practice tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Family retelling of Diwali welcome traditions in Ayodhya.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "How did sharing lamp oil help everyone celebrate together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "Where can you bring light for someone this week?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Diwali celebration in Ayodhya with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Night Before Diwali in Ayodhya. On the eve of Diwali, Rama, Sita, and Lakshmana walk through Ayodhya as families prepare lamps for a joyful homecoming. Night Before Diwali in Ayodhya: In Ayodhya lane, the family begins Diwali preparations with . , and the children choose patience, sharing, and respectful speech before continuing the celebration.",
      "voiceDirection": "Warm, gentle, and respectful.",
      "pronunciationNotes": "Ayodhya (uh-YO-dhya), Vrindavan (VRIN-da-van), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan).",
      "pacingNotes": "Steady pace with soft pauses between scenes.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-002",
    "storyId": "festival-stories-exp-v1-002",
    "slug": "festival-stories-exp-v1-002",
    "title": "Lamps Returning to Ayodhya",
    "shortTitle": "Lamps Returning to Ayodhya",
    "summary": "Families in Ayodhya light diyas to welcome Rama, filling streets with gratitude and gentle joy.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Diwali homecoming retelling centered on lamps and gratitude.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 2,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "Rama",
      "Sita",
      "Hanuman"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Gathering",
        "text": "Lamps Returning to Ayodhya: In Ayodhya lane, the family begins Diwali preparations with ."
      },
      {
        "id": "panel-2",
        "title": "Festival Meaning",
        "text": " Diwali using names, places, and  respectfully."
      },
      {
        "id": "panel-3",
        "title": "Helping Moment",
        "text": ", and the children choose patience, sharing, and respectful speech before continuing the celebration."
      },
      {
        "id": "panel-4",
        "title": "Prayer Close",
        "text": "The celebration ends with prayer and prasad, and  from Diwali to practice tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Diwali homecoming retelling centered on lamps and gratitude.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Why did the children protect each small flame carefully?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What does welcoming light mean in your home?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Diwali celebration in Ayodhya with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Lamps Returning to Ayodhya. Families in Ayodhya light diyas to welcome Rama, filling streets with gratitude and gentle joy. Lamps Returning to Ayodhya: In Ayodhya lane, the family begins Diwali preparations with . , and the children choose patience, sharing, and respectful speech before continuing the celebration.",
      "voiceDirection": "Warm, gentle, and respectful.",
      "pronunciationNotes": "Ayodhya (uh-YO-dhya), Vrindavan (VRIN-da-van), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan).",
      "pacingNotes": "Steady pace with soft pauses between scenes.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-003",
    "storyId": "festival-stories-exp-v1-003",
    "slug": "festival-stories-exp-v1-003",
    "title": "Radha on Holi Morning",
    "shortTitle": "Radha on Holi Morning",
    "summary": "Radha begins Holi morning in Vrindavan with kindness, laughter, and safe colors shared respectfully.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Vrindavan Holi retelling focused on Radha’s gentle leadership.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 3,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "Radha",
      "Krishna",
      "Lalita"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Early Light",
        "text": "Radha on Holi Morning: In Vrindavan courtyard, the family begins Holi preparations with ."
      },
      {
        "id": "panel-2",
        "title": "Family Work",
        "text": " Holi using names, places, and  respectfully."
      },
      {
        "id": "panel-3",
        "title": "Sharing Choice",
        "text": ", and the children choose patience, sharing, and respectful speech before continuing the celebration."
      },
      {
        "id": "panel-4",
        "title": "Gratitude",
        "text": "The celebration ends with prayer and prasad, and  from Holi to practice tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Vrindavan Holi retelling focused on Radha’s gentle leadership.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "How did asking permission make Holi feel safer?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you include someone who feels shy in a game?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Holi celebration in Vrindavan with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Radha on Holi Morning. Radha begins Holi morning in Vrindavan with kindness, laughter, and safe colors shared respectfully. Radha on Holi Morning: In Vrindavan courtyard, the family begins Holi preparations with . , and the children choose patience, sharing, and respectful speech before continuing the celebration.",
      "voiceDirection": "Warm, gentle, and respectful.",
      "pronunciationNotes": "Ayodhya (uh-YO-dhya), Vrindavan (VRIN-da-van), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan).",
      "pacingNotes": "Steady pace with soft pauses between scenes.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-004",
    "storyId": "festival-stories-exp-v1-004",
    "slug": "festival-stories-exp-v1-004",
    "title": "Krishna and Safe Holi Colors",
    "shortTitle": "Krishna and Safe Holi Colors",
    "summary": "Krishna, Radha, and Yashoda show how Holi can be bright, respectful, and safe with natural colors.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Family Holi retelling about respectful play and natural colors.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 4,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "Krishna",
      "Radha",
      "Yashoda"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Morning Start",
        "text": "Krishna and Safe Holi Colors: In Vrindavan courtyard, the family begins Holi preparations with ."
      },
      {
        "id": "panel-2",
        "title": "Story Time",
        "text": " Holi using names, places, and  respectfully."
      },
      {
        "id": "panel-3",
        "title": "Careful Action",
        "text": ", and the children choose patience, sharing, and respectful speech before continuing the celebration."
      },
      {
        "id": "panel-4",
        "title": "Calm Finish",
        "text": "The celebration ends with prayer and prasad, and  from Holi to practice tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Family Holi retelling about respectful play and natural colors.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which safety rule did Krishna repeat to protect everyone?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What rule helps friends play kindly in your games?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Holi celebration in Vrindavan with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Krishna and Safe Holi Colors. Krishna, Radha, and Yashoda show how Holi can be bright, respectful, and safe with natural colors. Krishna and Safe Holi Colors: In Vrindavan courtyard, the family begins Holi preparations with . , and the children choose patience, sharing, and respectful speech before continuing the celebration.",
      "voiceDirection": "Warm, gentle, and respectful.",
      "pronunciationNotes": "Ayodhya (uh-YO-dhya), Vrindavan (VRIN-da-van), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan).",
      "pacingNotes": "Steady pace with soft pauses between scenes.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-005",
    "storyId": "festival-stories-exp-v1-005",
    "slug": "festival-stories-exp-v1-005",
    "title": "Child Making a Clay Ganesh Idol",
    "shortTitle": "Child Making a Clay Ganesh Idol",
    "summary": "A child and parent shape a clay Ganesha idol together, learning patience, reverence, and nature-safe care.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Family retelling for Ganesh Chaturthi.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 5,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "child",
      "Ganesha",
      "parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Welcome",
        "text": "Child Making a Clay Ganesh Idol: At a low wooden table, a child kneads river clay while a parent shows how to shape Ganesha’s round belly and gentle trunk."
      },
      {
        "id": "panel-2",
        "title": "Tradition",
        "text": "They press tiny rice-grain eyes and a leaf crown, then place the idol on a reusable tray instead of plastic glitter."
      },
      {
        "id": "panel-3",
        "title": "Respectful Play",
        "text": "When the trunk cracks, the child feels upset; the parent adds a little water and teaches patient repair with soft fingers."
      },
      {
        "id": "panel-4",
        "title": "Thankful End",
        "text": "At prayer time, the child offers one flower and promises to return the clay to a garden pot after the festival."
      }
    ],
    "parentNote": {
      "sourceContext": "Family retelling for Ganesh Chaturthi.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "What choice showed care during Ganesh Chaturthi?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you practice calm care in family celebrations?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ganesh Chaturthi celebration in home courtyard with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Child Making a Clay Ganesh Idol. A child and parent shape a clay Ganesha idol together, learning patience, reverence, and nature-safe care. Child Making a Clay Ganesh Idol: At a low wooden table, a child kneads river clay while a parent shows how to shape Ganesha’s round belly and gentle trunk. When the trunk cracks, the child feels upset; the parent adds a little water and teaches patient repair with soft fingers.",
      "voiceDirection": "Warm, gentle, and respectful.",
      "pronunciationNotes": "Ayodhya (uh-YO-dhya), Vrindavan (VRIN-da-van), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan).",
      "pacingNotes": "Steady pace with soft pauses between scenes.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-006",
    "storyId": "festival-stories-exp-v1-006",
    "slug": "festival-stories-exp-v1-006",
    "title": "First Modak Offering",
    "shortTitle": "First Modak Offering",
    "summary": "During Ganesh Chaturthi, Parvati guides a child making first modaks with rice flour, jaggery, and coconut for Ganesha.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Family retelling for Ganesh Chaturthi.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 6,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "Ganesha",
      "Parvati",
      "child"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Dawn",
        "text": "In the kitchen, rice flour dough is kneaded while coconut and jaggery cook into a sweet filling for modaks."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "Parvati shows how to fold each modak pleat before placing them on a brass plate before Ganesha."
      },
      {
        "id": "panel-3",
        "title": "Kind Choice",
        "text": "One modak tears open, so the child reshapes it patiently and saves it for family sharing instead of hiding the mistake."
      },
      {
        "id": "panel-4",
        "title": "Evening Blessing",
        "text": "After a short prayer, the first modak is offered to Ganesha and the rest are shared as warm prasad with neighbors."
      }
    ],
    "parentNote": {
      "sourceContext": "Family retelling for Ganesh Chaturthi.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "What choice showed care during Ganesh Chaturthi?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you practice calm care in family celebrations?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ganesh Chaturthi celebration in home shrine with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "First Modak Offering. During Ganesh Chaturthi, Parvati guides a child making first modaks with rice flour, jaggery, and coconut for Ganesha. In the kitchen, rice flour dough is kneaded while coconut and jaggery cook into a sweet filling for modaks. One modak tears open, so the child reshapes it patiently and saves it for family sharing instead of hiding the mistake.",
      "voiceDirection": "Warm, gentle, and respectful.",
      "pronunciationNotes": "Ayodhya (uh-YO-dhya), Vrindavan (VRIN-da-van), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan).",
      "pacingNotes": "Steady pace with soft pauses between scenes.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-007",
    "storyId": "festival-stories-exp-v1-007",
    "slug": "festival-stories-exp-v1-007",
    "title": "Navratri Lamp at Home",
    "shortTitle": "Navratri Lamp at Home",
    "summary": "At home during Navratri, a family lights a diya for Devi and practices calm courage through evening aarti.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Family retelling for Navratri.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 7,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "mother",
      "child",
      "Devi"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Gathering",
        "text": "At the home altar, a small diya is lit before Devi while marigold petals are arranged in a neat circle."
      },
      {
        "id": "panel-2",
        "title": "Festival Meaning",
        "text": "The family claps softly through aarti, and an older cousin explains that courage can be gentle and steady."
      },
      {
        "id": "panel-3",
        "title": "Helping Moment",
        "text": "When the flame flickers, the children shield it together and relight with care rather than panic."
      },
      {
        "id": "panel-4",
        "title": "Prayer Close",
        "text": "They end by bowing quietly and promising to carry Devi’s calm courage into school and play."
      }
    ],
    "parentNote": {
      "sourceContext": "Family retelling for Navratri.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "What choice showed care during Navratri?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you practice calm care in family celebrations?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Navratri celebration in home altar with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Navratri Lamp at Home. At home during Navratri, a family lights a diya for Devi and practices calm courage through evening aarti. At the home altar, a small diya is lit before Devi while marigold petals are arranged in a neat circle. When the flame flickers, the children shield it together and relight with care rather than panic.",
      "voiceDirection": "Warm, gentle, and respectful.",
      "pronunciationNotes": "Ayodhya (uh-YO-dhya), Vrindavan (VRIN-da-van), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan).",
      "pacingNotes": "Steady pace with soft pauses between scenes.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-008",
    "storyId": "festival-stories-exp-v1-008",
    "slug": "festival-stories-exp-v1-008",
    "title": "Dussehra Courage Without Fear",
    "shortTitle": "Dussehra Courage Without Fear",
    "summary": "A child-safe Dussehra story where Rama’s courage is remembered through a symbolic lesson of good over wrong.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Family retelling for Dussehra.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 8,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "Rama",
      "Sita",
      "Hanuman"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Early Light",
        "text": "In the village square, children build a small paper Ravana effigy to represent anger, pride, and hurtful words."
      },
      {
        "id": "panel-2",
        "title": "Family Work",
        "text": "An elder retells how Rama chose dharma with courage, focus, and compassion for others."
      },
      {
        "id": "panel-3",
        "title": "Sharing Choice",
        "text": "Before lighting the effigy, each child writes one unkind habit to let go and one kind habit to practice."
      },
      {
        "id": "panel-4",
        "title": "Gratitude",
        "text": "As the tiny effigy burns, families cheer for good over wrong and share sweets in a peaceful closing."
      }
    ],
    "parentNote": {
      "sourceContext": "Family retelling for Dussehra.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "What choice showed care during Dussehra?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you practice calm care in family celebrations?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Dussehra celebration in village square with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Dussehra Courage Without Fear. A child-safe Dussehra story where Rama’s courage is remembered through a symbolic lesson of good over wrong. In the village square, children build a small paper Ravana effigy to represent anger, pride, and hurtful words. Before lighting the effigy, each child writes one unkind habit to let go and one kind habit to practice.",
      "voiceDirection": "Warm, gentle, and respectful.",
      "pronunciationNotes": "Ayodhya (uh-YO-dhya), Vrindavan (VRIN-da-van), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan).",
      "pacingNotes": "Steady pace with soft pauses between scenes.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-009",
    "storyId": "festival-stories-exp-v1-009",
    "slug": "festival-stories-exp-v1-009",
    "title": "Kite-Sharing on Makar Sankranti",
    "shortTitle": "Kite-Sharing on Makar Sankranti",
    "summary": "On Makar Sankranti, children share kites and til-gud on a sunny rooftop, learning generosity and joy.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Family retelling for Makar Sankranti.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 9,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "siblings",
      "grandfather",
      "neighbors"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Morning Start",
        "text": "Under bright winter sunlight, siblings carry kites and spools to the terrace for Makar Sankranti."
      },
      {
        "id": "panel-2",
        "title": "Story Time",
        "text": "Grandmother passes til-gud laddus and reminds everyone that sweet words matter as much as sweet treats."
      },
      {
        "id": "panel-3",
        "title": "Careful Action",
        "text": "When one child’s kite string snaps, another offers a spare spool so play can continue together."
      },
      {
        "id": "panel-4",
        "title": "Calm Finish",
        "text": "By sunset they exchange laddus with neighbors and thank the sun for warmth and harvest."
      }
    ],
    "parentNote": {
      "sourceContext": "Family retelling for Makar Sankranti.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "What choice showed care during Makar Sankranti?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you practice calm care in family celebrations?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Makar Sankranti celebration in sunny rooftop with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Kite-Sharing on Makar Sankranti. On Makar Sankranti, children share kites and til-gud on a sunny rooftop, learning generosity and joy. Under bright winter sunlight, siblings carry kites and spools to the terrace for Makar Sankranti. When one child’s kite string snaps, another offers a spare spool so play can continue together.",
      "voiceDirection": "Warm, gentle, and respectful.",
      "pronunciationNotes": "Ayodhya (uh-YO-dhya), Vrindavan (VRIN-da-van), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan).",
      "pacingNotes": "Steady pace with soft pauses between scenes.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-010",
    "storyId": "festival-stories-exp-v1-010",
    "slug": "festival-stories-exp-v1-010",
    "title": "Sibling Care on Raksha Bandhan",
    "shortTitle": "Sibling Care on Raksha Bandhan",
    "summary": "On Raksha Bandhan, siblings tie rakhi and promise mutual care, respect, and support.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Family retelling for Raksha Bandhan.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 10,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "sister",
      "brother",
      "grandmother"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Welcome",
        "text": "In the veranda, a sister ties a rakhi on her brother’s wrist while he places a small rakhi on hers too."
      },
      {
        "id": "panel-2",
        "title": "Tradition",
        "text": "They exchange simple vows: speak kindly, help with chores, and stand by each other at school."
      },
      {
        "id": "panel-3",
        "title": "Respectful Play",
        "text": "A disagreement about gifts is resolved when they choose a shared charity box instead of competing."
      },
      {
        "id": "panel-4",
        "title": "Thankful End",
        "text": "The family seals the promise with kheer and blessings for mutual care throughout the year."
      }
    ],
    "parentNote": {
      "sourceContext": "Family retelling for Raksha Bandhan.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "What choice showed care during Raksha Bandhan?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you practice calm care in family celebrations?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Raksha Bandhan celebration in family home with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Sibling Care on Raksha Bandhan. On Raksha Bandhan, siblings tie rakhi and promise mutual care, respect, and support. In the veranda, a sister ties a rakhi on her brother’s wrist while he places a small rakhi on hers too. A disagreement about gifts is resolved when they choose a shared charity box instead of competing.",
      "voiceDirection": "Warm, gentle, and respectful.",
      "pronunciationNotes": "Ayodhya (uh-YO-dhya), Vrindavan (VRIN-da-van), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan).",
      "pacingNotes": "Steady pace with soft pauses between scenes.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-011",
    "storyId": "festival-stories-exp-v1-011",
    "slug": "festival-stories-exp-v1-011",
    "title": "Ram Navami Cradle Celebration",
    "shortTitle": "Ram Navami Cradle Celebration",
    "summary": "Ram Navami is celebrated with baby Rama’s cradle, prayers, and family joy in a child-safe devotional setting.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Family retelling for Ram Navami.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 11,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "baby Rama",
      "Kausalya",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Dawn",
        "text": "At the shrine hall, a decorated cradle for baby Rama is lined with yellow cloth and jasmine strings."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "Children sing a soft lullaby while elders recite short verses about Rama’s birth in Ayodhya."
      },
      {
        "id": "panel-3",
        "title": "Kind Choice",
        "text": "A toddler reaches for the cradle flowers, and the older children gently guide tiny hands with respect."
      },
      {
        "id": "panel-4",
        "title": "Evening Blessing",
        "text": "After prayer, fruit and panakam are shared as the family celebrates Rama’s birth with gratitude."
      }
    ],
    "parentNote": {
      "sourceContext": "Family retelling for Ram Navami.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "What choice showed care during Ram Navami?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you practice calm care in family celebrations?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ram Navami celebration in Ayodhya home with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Ram Navami Cradle Celebration. Ram Navami is celebrated with baby Rama’s cradle, prayers, and family joy in a child-safe devotional setting. At the shrine hall, a decorated cradle for baby Rama is lined with yellow cloth and jasmine strings. A toddler reaches for the cradle flowers, and the older children gently guide tiny hands with respect.",
      "voiceDirection": "Warm, gentle, and respectful.",
      "pronunciationNotes": "Ayodhya (uh-YO-dhya), Vrindavan (VRIN-da-van), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan).",
      "pacingNotes": "Steady pace with soft pauses between scenes.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-012",
    "storyId": "festival-stories-exp-v1-012",
    "slug": "festival-stories-exp-v1-012",
    "title": "Hanuman Jayanti Seva",
    "shortTitle": "Hanuman Jayanti Seva",
    "summary": "For Hanuman Jayanti, children practice seva while chanting Rama’s name with humility.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Family retelling for Hanuman Jayanti.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 12,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "Hanuman",
      "Rama devotees",
      "children"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Gathering",
        "text": "At Hanuman temple, children fill water pots and sweep the path before devotees arrive."
      },
      {
        "id": "panel-2",
        "title": "Festival Meaning",
        "text": "A sevak teaches them to chant 'Sri Rama' softly while working so service stays humble."
      },
      {
        "id": "panel-3",
        "title": "Helping Moment",
        "text": "When praise comes, they thank Hanuman and keep serving instead of showing off."
      },
      {
        "id": "panel-4",
        "title": "Prayer Close",
        "text": "The morning ends with banana prasad and a promise to serve quietly at home too."
      }
    ],
    "parentNote": {
      "sourceContext": "Family retelling for Hanuman Jayanti.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "What choice showed care during Hanuman Jayanti?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you practice calm care in family celebrations?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Hanuman Jayanti celebration in temple courtyard with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Hanuman Jayanti Seva. For Hanuman Jayanti, children practice seva while chanting Rama’s name with humility. At Hanuman temple, children fill water pots and sweep the path before devotees arrive. When praise comes, they thank Hanuman and keep serving instead of showing off.",
      "voiceDirection": "Warm, gentle, and respectful.",
      "pronunciationNotes": "Ayodhya (uh-YO-dhya), Vrindavan (VRIN-da-van), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan).",
      "pacingNotes": "Steady pace with soft pauses between scenes.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-013",
    "storyId": "festival-stories-exp-v1-013",
    "slug": "festival-stories-exp-v1-013",
    "title": "Maha Shivratri Quiet Prayer",
    "shortTitle": "Maha Shivratri Quiet Prayer",
    "summary": "A Maha Shivratri night story of Shiva devotion with bilva leaves, quiet prayer, and calm attention.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Family retelling for Maha Shivratri.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 13,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "Shiva",
      "Parvati",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Early Light",
        "text": "At a night temple, bilva leaves are rinsed and placed beside cool water for Shiva abhishek."
      },
      {
        "id": "panel-2",
        "title": "Family Work",
        "text": "Parvati stories are told in hushed voices while children hold lamps away from crowded steps."
      },
      {
        "id": "panel-3",
        "title": "Sharing Choice",
        "text": "A leaf drops, and the youngest child carefully picks it up and offers it again with folded hands."
      },
      {
        "id": "panel-4",
        "title": "Gratitude",
        "text": "They finish in still silence, feeling peaceful devotion before walking home under moonlight."
      }
    ],
    "parentNote": {
      "sourceContext": "Family retelling for Maha Shivratri.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "What choice showed care during Maha Shivratri?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you practice calm care in family celebrations?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Maha Shivratri celebration in night temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Maha Shivratri Quiet Prayer. A Maha Shivratri night story of Shiva devotion with bilva leaves, quiet prayer, and calm attention. At a night temple, bilva leaves are rinsed and placed beside cool water for Shiva abhishek. A leaf drops, and the youngest child carefully picks it up and offers it again with folded hands.",
      "voiceDirection": "Warm, gentle, and respectful.",
      "pronunciationNotes": "Ayodhya (uh-YO-dhya), Vrindavan (VRIN-da-van), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan).",
      "pacingNotes": "Steady pace with soft pauses between scenes.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-014",
    "storyId": "festival-stories-exp-v1-014",
    "slug": "festival-stories-exp-v1-014",
    "title": "Diya Lane of Ayodhya",
    "shortTitle": "Diya Lane of Ayodhya",
    "summary": "A Diwali micro-retelling focused on diyas, Rama homecoming, and family values.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Community-family retelling for Diwali.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 14,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "parents",
      "elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Morning Start",
        "text": "During Diwali, children prepare diyas while elders set up mustard-oil lamps near the home altar."
      },
      {
        "id": "panel-2",
        "title": "Story Time",
        "text": "The family recalls Rama homecoming and explains why reverence and kindness belong together."
      },
      {
        "id": "panel-3",
        "title": "Careful Action",
        "text": "When supplies run short, children share turns and help younger ones take part calmly."
      },
      {
        "id": "panel-4",
        "title": "Calm Finish",
        "text": "The celebration closes with prayer and prasad, carrying rangoli memories into everyday life."
      }
    ],
    "parentNote": {
      "sourceContext": "Community-family retelling for Diwali.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "How did listening help this Diwali celebration?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "Which value from this story can you practice tomorrow?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Diwali celebration in family neighborhood with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Diya Lane of Ayodhya. A Diwali micro-retelling focused on diyas, Rama homecoming, and family values. During Diwali, children prepare diyas while elders set up mustard-oil lamps near the home altar. When supplies run short, children share turns and help younger ones take part calmly.",
      "voiceDirection": "Warm, gentle, and respectful.",
      "pronunciationNotes": "Ayodhya (uh-YO-dhya), Vrindavan (VRIN-da-van), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan).",
      "pacingNotes": "Steady pace with soft pauses between scenes.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-015",
    "storyId": "festival-stories-exp-v1-015",
    "slug": "festival-stories-exp-v1-015",
    "title": "Sarayu Lights at Sunset",
    "shortTitle": "Sarayu Lights at Sunset",
    "summary": "A Diwali micro-retelling focused on diyas, Rama homecoming, and family values.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Community-family retelling for Diwali.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 15,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "parents",
      "elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Welcome",
        "text": "During Diwali, children prepare diyas while elders set up mustard-oil lamps near the home altar."
      },
      {
        "id": "panel-2",
        "title": "Tradition",
        "text": "The family recalls Rama homecoming and explains why reverence and kindness belong together."
      },
      {
        "id": "panel-3",
        "title": "Respectful Play",
        "text": "When supplies run short, children share turns and help younger ones take part calmly."
      },
      {
        "id": "panel-4",
        "title": "Thankful End",
        "text": "The celebration closes with prayer and prasad, carrying rangoli memories into everyday life."
      }
    ],
    "parentNote": {
      "sourceContext": "Community-family retelling for Diwali.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "How did listening help this Diwali celebration?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "Which value from this story can you practice tomorrow?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Diwali celebration in family neighborhood with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Sarayu Lights at Sunset. A Diwali micro-retelling focused on diyas, Rama homecoming, and family values. During Diwali, children prepare diyas while elders set up mustard-oil lamps near the home altar. When supplies run short, children share turns and help younger ones take part calmly.",
      "voiceDirection": "Warm, gentle, and respectful.",
      "pronunciationNotes": "Ayodhya (uh-YO-dhya), Vrindavan (VRIN-da-van), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan).",
      "pacingNotes": "Steady pace with soft pauses between scenes.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-016",
    "storyId": "festival-stories-exp-v1-016",
    "slug": "festival-stories-exp-v1-016",
    "title": "Colors with Consent in Barsana",
    "shortTitle": "Colors with Consent in Barsana",
    "summary": "A Holi micro-retelling focused on flower colors, Radha and Krishna, and family values.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Community-family retelling for Holi.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 16,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "parents",
      "elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Dawn",
        "text": "During Holi, children prepare flower colors while elders set up permission before color near the home altar."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "The family recalls Radha and Krishna and explains why reverence and kindness belong together."
      },
      {
        "id": "panel-3",
        "title": "Kind Choice",
        "text": "When supplies run short, children share turns and help younger ones take part calmly."
      },
      {
        "id": "panel-4",
        "title": "Evening Blessing",
        "text": "The celebration closes with prayer and prasad, carrying tesu petals memories into everyday life."
      }
    ],
    "parentNote": {
      "sourceContext": "Community-family retelling for Holi.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "How did listening help this Holi celebration?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "Which value from this story can you practice tomorrow?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Holi celebration in family neighborhood with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Colors with Consent in Barsana. A Holi micro-retelling focused on flower colors, Radha and Krishna, and family values. During Holi, children prepare flower colors while elders set up permission before color near the home altar. When supplies run short, children share turns and help younger ones take part calmly.",
      "voiceDirection": "Warm, gentle, and respectful.",
      "pronunciationNotes": "Ayodhya (uh-YO-dhya), Vrindavan (VRIN-da-van), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan).",
      "pacingNotes": "Steady pace with soft pauses between scenes.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-017",
    "storyId": "festival-stories-exp-v1-017",
    "slug": "festival-stories-exp-v1-017",
    "title": "Butter Pots and Gentle Holi",
    "shortTitle": "Butter Pots and Gentle Holi",
    "summary": "A Holi micro-retelling focused on flower colors, Radha and Krishna, and family values.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Community-family retelling for Holi.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 17,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "parents",
      "elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Gathering",
        "text": "During Holi, children prepare flower colors while elders set up permission before color near the home altar."
      },
      {
        "id": "panel-2",
        "title": "Festival Meaning",
        "text": "The family recalls Radha and Krishna and explains why reverence and kindness belong together."
      },
      {
        "id": "panel-3",
        "title": "Helping Moment",
        "text": "When supplies run short, children share turns and help younger ones take part calmly."
      },
      {
        "id": "panel-4",
        "title": "Prayer Close",
        "text": "The celebration closes with prayer and prasad, carrying tesu petals memories into everyday life."
      }
    ],
    "parentNote": {
      "sourceContext": "Community-family retelling for Holi.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "How did listening help this Holi celebration?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "Which value from this story can you practice tomorrow?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Holi celebration in family neighborhood with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Butter Pots and Gentle Holi. A Holi micro-retelling focused on flower colors, Radha and Krishna, and family values. During Holi, children prepare flower colors while elders set up permission before color near the home altar. When supplies run short, children share turns and help younger ones take part calmly.",
      "voiceDirection": "Warm, gentle, and respectful.",
      "pronunciationNotes": "Ayodhya (uh-YO-dhya), Vrindavan (VRIN-da-van), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan).",
      "pacingNotes": "Steady pace with soft pauses between scenes.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-018",
    "storyId": "festival-stories-exp-v1-018",
    "slug": "festival-stories-exp-v1-018",
    "title": "Midnight Bells of Janmashtami",
    "shortTitle": "Midnight Bells of Janmashtami",
    "summary": "A Janmashtami micro-retelling focused on midnight bell, butter pot, and family values.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Community-family retelling for Janmashtami.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 18,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "parents",
      "elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Early Light",
        "text": "During Janmashtami, children prepare midnight bell while elders set up Mathura to Gokul memory near the home altar."
      },
      {
        "id": "panel-2",
        "title": "Family Work",
        "text": "The family recalls butter pot and explains why reverence and kindness belong together."
      },
      {
        "id": "panel-3",
        "title": "Sharing Choice",
        "text": "When supplies run short, children share turns and help younger ones take part calmly."
      },
      {
        "id": "panel-4",
        "title": "Gratitude",
        "text": "The celebration closes with prayer and prasad, carrying cradle for Krishna memories into everyday life."
      }
    ],
    "parentNote": {
      "sourceContext": "Community-family retelling for Janmashtami.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "How did listening help this Janmashtami celebration?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "Which value from this story can you practice tomorrow?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Janmashtami celebration in family neighborhood with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Midnight Bells of Janmashtami. A Janmashtami micro-retelling focused on midnight bell, butter pot, and family values. During Janmashtami, children prepare midnight bell while elders set up Mathura to Gokul memory near the home altar. When supplies run short, children share turns and help younger ones take part calmly.",
      "voiceDirection": "Warm, gentle, and respectful.",
      "pronunciationNotes": "Ayodhya (uh-YO-dhya), Vrindavan (VRIN-da-van), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan).",
      "pacingNotes": "Steady pace with soft pauses between scenes.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-019",
    "storyId": "festival-stories-exp-v1-019",
    "slug": "festival-stories-exp-v1-019",
    "title": "Cradle Songs in Gokul",
    "shortTitle": "Cradle Songs in Gokul",
    "summary": "A Janmashtami micro-retelling focused on midnight bell, butter pot, and family values.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Community-family retelling for Janmashtami.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 19,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "parents",
      "elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Morning Start",
        "text": "During Janmashtami, children prepare midnight bell while elders set up Mathura to Gokul memory near the home altar."
      },
      {
        "id": "panel-2",
        "title": "Story Time",
        "text": "The family recalls butter pot and explains why reverence and kindness belong together."
      },
      {
        "id": "panel-3",
        "title": "Careful Action",
        "text": "When supplies run short, children share turns and help younger ones take part calmly."
      },
      {
        "id": "panel-4",
        "title": "Calm Finish",
        "text": "The celebration closes with prayer and prasad, carrying cradle for Krishna memories into everyday life."
      }
    ],
    "parentNote": {
      "sourceContext": "Community-family retelling for Janmashtami.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "How did listening help this Janmashtami celebration?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "Which value from this story can you practice tomorrow?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Janmashtami celebration in family neighborhood with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Cradle Songs in Gokul. A Janmashtami micro-retelling focused on midnight bell, butter pot, and family values. During Janmashtami, children prepare midnight bell while elders set up Mathura to Gokul memory near the home altar. When supplies run short, children share turns and help younger ones take part calmly.",
      "voiceDirection": "Warm, gentle, and respectful.",
      "pronunciationNotes": "Ayodhya (uh-YO-dhya), Vrindavan (VRIN-da-van), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan).",
      "pacingNotes": "Steady pace with soft pauses between scenes.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-020",
    "storyId": "festival-stories-exp-v1-020",
    "slug": "festival-stories-exp-v1-020",
    "title": "Moonlit Modak Kitchen",
    "shortTitle": "Moonlit Modak Kitchen",
    "summary": "A Ganesh Chaturthi micro-retelling focused on clay idol, durva grass, and family values.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Community-family retelling for Ganesh Chaturthi.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 20,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "parents",
      "elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Welcome",
        "text": "During Ganesh Chaturthi, children prepare clay idol while elders set up nature-safe visarjan near the home altar."
      },
      {
        "id": "panel-2",
        "title": "Tradition",
        "text": "The family recalls durva grass and explains why reverence and kindness belong together."
      },
      {
        "id": "panel-3",
        "title": "Respectful Play",
        "text": "When supplies run short, children share turns and help younger ones take part calmly."
      },
      {
        "id": "panel-4",
        "title": "Thankful End",
        "text": "The celebration closes with prayer and prasad, carrying modak plate memories into everyday life."
      }
    ],
    "parentNote": {
      "sourceContext": "Community-family retelling for Ganesh Chaturthi.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "How did listening help this Ganesh Chaturthi celebration?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "Which value from this story can you practice tomorrow?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ganesh Chaturthi celebration in family neighborhood with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Moonlit Modak Kitchen. A Ganesh Chaturthi micro-retelling focused on clay idol, durva grass, and family values. During Ganesh Chaturthi, children prepare clay idol while elders set up nature-safe visarjan near the home altar. When supplies run short, children share turns and help younger ones take part calmly.",
      "voiceDirection": "Warm, gentle, and respectful.",
      "pronunciationNotes": "Ayodhya (uh-YO-dhya), Vrindavan (VRIN-da-van), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan).",
      "pacingNotes": "Steady pace with soft pauses between scenes.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-021",
    "storyId": "festival-stories-exp-v1-021",
    "slug": "festival-stories-exp-v1-021",
    "title": "Ganesh Visarjan Promise to Nature",
    "shortTitle": "Ganesh Visarjan Promise to Nature",
    "summary": "A Ganesh Chaturthi micro-retelling focused on clay idol, durva grass, and family values.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Community-family retelling for Ganesh Chaturthi.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 21,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "parents",
      "elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Dawn",
        "text": "During Ganesh Chaturthi, children prepare clay idol while elders set up nature-safe visarjan near the home altar."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "The family recalls durva grass and explains why reverence and kindness belong together."
      },
      {
        "id": "panel-3",
        "title": "Kind Choice",
        "text": "When supplies run short, children share turns and help younger ones take part calmly."
      },
      {
        "id": "panel-4",
        "title": "Evening Blessing",
        "text": "The celebration closes with prayer and prasad, carrying modak plate memories into everyday life."
      }
    ],
    "parentNote": {
      "sourceContext": "Community-family retelling for Ganesh Chaturthi.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "How did listening help this Ganesh Chaturthi celebration?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "Which value from this story can you practice tomorrow?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ganesh Chaturthi celebration in family neighborhood with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Ganesh Visarjan Promise to Nature. A Ganesh Chaturthi micro-retelling focused on clay idol, durva grass, and family values. During Ganesh Chaturthi, children prepare clay idol while elders set up nature-safe visarjan near the home altar. When supplies run short, children share turns and help younger ones take part calmly.",
      "voiceDirection": "Warm, gentle, and respectful.",
      "pronunciationNotes": "Ayodhya (uh-YO-dhya), Vrindavan (VRIN-da-van), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan).",
      "pacingNotes": "Steady pace with soft pauses between scenes.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-022",
    "storyId": "festival-stories-exp-v1-022",
    "slug": "festival-stories-exp-v1-022",
    "title": "Nine Nights of Kind Steps",
    "shortTitle": "Nine Nights of Kind Steps",
    "summary": "A Festival micro-retelling focused on altar, sharing, and family values.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Community-family retelling for Diwali.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 22,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "parents",
      "elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Gathering",
        "text": "During Festival, children prepare altar while elders set up kindness near the home altar."
      },
      {
        "id": "panel-2",
        "title": "Festival Meaning",
        "text": "The family recalls sharing and explains why reverence and kindness belong together."
      },
      {
        "id": "panel-3",
        "title": "Helping Moment",
        "text": "When supplies run short, children share turns and help younger ones take part calmly."
      },
      {
        "id": "panel-4",
        "title": "Prayer Close",
        "text": "The celebration closes with prayer and prasad, carrying prayer memories into everyday life."
      }
    ],
    "parentNote": {
      "sourceContext": "Community-family retelling for Diwali.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "How did listening help this Diwali celebration?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "Which value from this story can you practice tomorrow?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Diwali celebration in family neighborhood with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Nine Nights of Kind Steps. A Festival micro-retelling focused on altar, sharing, and family values. During Festival, children prepare altar while elders set up kindness near the home altar. When supplies run short, children share turns and help younger ones take part calmly.",
      "voiceDirection": "Warm, gentle, and respectful.",
      "pronunciationNotes": "Ayodhya (uh-YO-dhya), Vrindavan (VRIN-da-van), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan).",
      "pacingNotes": "Steady pace with soft pauses between scenes.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-023",
    "storyId": "festival-stories-exp-v1-023",
    "slug": "festival-stories-exp-v1-023",
    "title": "Garba Circle of Respect",
    "shortTitle": "Garba Circle of Respect",
    "summary": "A Navratri micro-retelling focused on diya, Devi altar, and family values.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Community-family retelling for Navratri.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 23,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "parents",
      "elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Early Light",
        "text": "During Navratri, children prepare diya while elders set up courage and compassion near the home altar."
      },
      {
        "id": "panel-2",
        "title": "Family Work",
        "text": "The family recalls Devi altar and explains why reverence and kindness belong together."
      },
      {
        "id": "panel-3",
        "title": "Sharing Choice",
        "text": "When supplies run short, children share turns and help younger ones take part calmly."
      },
      {
        "id": "panel-4",
        "title": "Gratitude",
        "text": "The celebration closes with prayer and prasad, carrying garba circle memories into everyday life."
      }
    ],
    "parentNote": {
      "sourceContext": "Community-family retelling for Navratri.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "How did listening help this Navratri celebration?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "Which value from this story can you practice tomorrow?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Navratri celebration in family neighborhood with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Garba Circle of Respect. A Navratri micro-retelling focused on diya, Devi altar, and family values. During Navratri, children prepare diya while elders set up courage and compassion near the home altar. When supplies run short, children share turns and help younger ones take part calmly.",
      "voiceDirection": "Warm, gentle, and respectful.",
      "pronunciationNotes": "Ayodhya (uh-YO-dhya), Vrindavan (VRIN-da-van), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan).",
      "pacingNotes": "Steady pace with soft pauses between scenes.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-024",
    "storyId": "festival-stories-exp-v1-024",
    "slug": "festival-stories-exp-v1-024",
    "title": "Rama Banner in the Courtyard",
    "shortTitle": "Rama Banner in the Courtyard",
    "summary": "A Dussehra micro-retelling focused on Rama, good over wrong, and family values.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Community-family retelling for Dussehra.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 24,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "parents",
      "elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Morning Start",
        "text": "During Dussehra, children prepare Rama while elders set up child-safe lesson near the home altar."
      },
      {
        "id": "panel-2",
        "title": "Story Time",
        "text": "The family recalls good over wrong and explains why reverence and kindness belong together."
      },
      {
        "id": "panel-3",
        "title": "Careful Action",
        "text": "When supplies run short, children share turns and help younger ones take part calmly."
      },
      {
        "id": "panel-4",
        "title": "Calm Finish",
        "text": "The celebration closes with prayer and prasad, carrying symbolic Ravana memories into everyday life."
      }
    ],
    "parentNote": {
      "sourceContext": "Community-family retelling for Dussehra.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "How did listening help this Dussehra celebration?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "Which value from this story can you practice tomorrow?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Dussehra celebration in family neighborhood with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Rama Banner in the Courtyard. A Dussehra micro-retelling focused on Rama, good over wrong, and family values. During Dussehra, children prepare Rama while elders set up child-safe lesson near the home altar. When supplies run short, children share turns and help younger ones take part calmly.",
      "voiceDirection": "Warm, gentle, and respectful.",
      "pronunciationNotes": "Ayodhya (uh-YO-dhya), Vrindavan (VRIN-da-van), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan).",
      "pacingNotes": "Steady pace with soft pauses between scenes.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-025",
    "storyId": "festival-stories-exp-v1-025",
    "slug": "festival-stories-exp-v1-025",
    "title": "Autumn Fair of Brave Hearts",
    "shortTitle": "Autumn Fair of Brave Hearts",
    "summary": "A Dussehra micro-retelling focused on Rama, good over wrong, and family values.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Community-family retelling for Diwali.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 25,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "parents",
      "elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Welcome",
        "text": "During Dussehra, children prepare Rama while elders set up child-safe lesson near the home altar."
      },
      {
        "id": "panel-2",
        "title": "Tradition",
        "text": "The family recalls good over wrong and explains why reverence and kindness belong together."
      },
      {
        "id": "panel-3",
        "title": "Respectful Play",
        "text": "When supplies run short, children share turns and help younger ones take part calmly."
      },
      {
        "id": "panel-4",
        "title": "Thankful End",
        "text": "The celebration closes with prayer and prasad, carrying symbolic Ravana memories into everyday life."
      }
    ],
    "parentNote": {
      "sourceContext": "Community-family retelling for Diwali.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "How did listening help this Diwali celebration?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "Which value from this story can you practice tomorrow?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Diwali celebration in family neighborhood with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Autumn Fair of Brave Hearts. A Dussehra micro-retelling focused on Rama, good over wrong, and family values. During Dussehra, children prepare Rama while elders set up child-safe lesson near the home altar. When supplies run short, children share turns and help younger ones take part calmly.",
      "voiceDirection": "Warm, gentle, and respectful.",
      "pronunciationNotes": "Ayodhya (uh-YO-dhya), Vrindavan (VRIN-da-van), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan).",
      "pacingNotes": "Steady pace with soft pauses between scenes.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-026",
    "storyId": "festival-stories-exp-v1-026",
    "slug": "festival-stories-exp-v1-026",
    "title": "Thread of Promise at Dawn",
    "shortTitle": "Thread of Promise at Dawn",
    "summary": "A Raksha Bandhan micro-retelling focused on rakhi thread, tilak, and family values.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Community-family retelling for Raksha Bandhan.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 26,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "parents",
      "elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Dawn",
        "text": "During Raksha Bandhan, children prepare rakhi thread while elders set up mutual care near the home altar."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "The family recalls tilak and explains why reverence and kindness belong together."
      },
      {
        "id": "panel-3",
        "title": "Kind Choice",
        "text": "When supplies run short, children share turns and help younger ones take part calmly."
      },
      {
        "id": "panel-4",
        "title": "Evening Blessing",
        "text": "The celebration closes with prayer and prasad, carrying sibling promise memories into everyday life."
      }
    ],
    "parentNote": {
      "sourceContext": "Community-family retelling for Raksha Bandhan.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "How did listening help this Raksha Bandhan celebration?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "Which value from this story can you practice tomorrow?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Raksha Bandhan celebration in family neighborhood with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-027",
    "storyId": "festival-stories-exp-v1-027",
    "slug": "festival-stories-exp-v1-027",
    "title": "Brother’s Rakhi Return Gift",
    "shortTitle": "Brother’s Rakhi Return Gift",
    "summary": "A Raksha Bandhan micro-retelling focused on rakhi thread, tilak, and family values.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Community-family retelling for Raksha Bandhan.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 27,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "parents",
      "elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Gathering",
        "text": "During Raksha Bandhan, children prepare rakhi thread while elders set up mutual care near the home altar."
      },
      {
        "id": "panel-2",
        "title": "Festival Meaning",
        "text": "The family recalls tilak and explains why reverence and kindness belong together."
      },
      {
        "id": "panel-3",
        "title": "Helping Moment",
        "text": "When supplies run short, children share turns and help younger ones take part calmly."
      },
      {
        "id": "panel-4",
        "title": "Prayer Close",
        "text": "The celebration closes with prayer and prasad, carrying sibling promise memories into everyday life."
      }
    ],
    "parentNote": {
      "sourceContext": "Community-family retelling for Raksha Bandhan.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "How did listening help this Raksha Bandhan celebration?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "Which value from this story can you practice tomorrow?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Raksha Bandhan celebration in family neighborhood with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-028",
    "storyId": "festival-stories-exp-v1-028",
    "slug": "festival-stories-exp-v1-028",
    "title": "Tilgul Sharing on the Terrace",
    "shortTitle": "Tilgul Sharing on the Terrace",
    "summary": "A Makar Sankranti micro-retelling focused on kite, til-gud, and family values.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Community-family retelling for Makar Sankranti.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 28,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "parents",
      "elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Early Light",
        "text": "During Makar Sankranti, children prepare kite while elders set up sharing spools near the home altar."
      },
      {
        "id": "panel-2",
        "title": "Family Work",
        "text": "The family recalls til-gud and explains why reverence and kindness belong together."
      },
      {
        "id": "panel-3",
        "title": "Sharing Choice",
        "text": "When supplies run short, children share turns and help younger ones take part calmly."
      },
      {
        "id": "panel-4",
        "title": "Gratitude",
        "text": "The celebration closes with prayer and prasad, carrying sunlight memories into everyday life."
      }
    ],
    "parentNote": {
      "sourceContext": "Community-family retelling for Makar Sankranti.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "How did listening help this Makar Sankranti celebration?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "Which value from this story can you practice tomorrow?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Makar Sankranti celebration in family neighborhood with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-029",
    "storyId": "festival-stories-exp-v1-029",
    "slug": "festival-stories-exp-v1-029",
    "title": "Sun-Kite Promise of Friendship",
    "shortTitle": "Sun-Kite Promise of Friendship",
    "summary": "A Makar Sankranti micro-retelling focused on kite, til-gud, and family values.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Community-family retelling for Makar Sankranti.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 29,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "parents",
      "elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Morning Start",
        "text": "During Makar Sankranti, children prepare kite while elders set up sharing spools near the home altar."
      },
      {
        "id": "panel-2",
        "title": "Story Time",
        "text": "The family recalls til-gud and explains why reverence and kindness belong together."
      },
      {
        "id": "panel-3",
        "title": "Careful Action",
        "text": "When supplies run short, children share turns and help younger ones take part calmly."
      },
      {
        "id": "panel-4",
        "title": "Calm Finish",
        "text": "The celebration closes with prayer and prasad, carrying sunlight memories into everyday life."
      }
    ],
    "parentNote": {
      "sourceContext": "Community-family retelling for Makar Sankranti.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "How did listening help this Makar Sankranti celebration?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "Which value from this story can you practice tomorrow?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Makar Sankranti celebration in family neighborhood with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-030",
    "storyId": "festival-stories-exp-v1-030",
    "slug": "festival-stories-exp-v1-030",
    "title": "Temple Cradle for Rama",
    "shortTitle": "Temple Cradle for Rama",
    "summary": "A Ram Navami micro-retelling focused on baby Rama cradle, Ayodhya birth story, and family values.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Community-family retelling for Dussehra.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 30,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "parents",
      "elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Welcome",
        "text": "During Ram Navami, children prepare baby Rama cradle while elders set up family bhajan near the home altar."
      },
      {
        "id": "panel-2",
        "title": "Tradition",
        "text": "The family recalls Ayodhya birth story and explains why reverence and kindness belong together."
      },
      {
        "id": "panel-3",
        "title": "Respectful Play",
        "text": "When supplies run short, children share turns and help younger ones take part calmly."
      },
      {
        "id": "panel-4",
        "title": "Thankful End",
        "text": "The celebration closes with prayer and prasad, carrying panakam memories into everyday life."
      }
    ],
    "parentNote": {
      "sourceContext": "Community-family retelling for Dussehra.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "How did listening help this Dussehra celebration?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "Which value from this story can you practice tomorrow?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Dussehra celebration in family neighborhood with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-031",
    "storyId": "festival-stories-exp-v1-031",
    "slug": "festival-stories-exp-v1-031",
    "title": "Ram Navami Sweet Rice Offering",
    "shortTitle": "Ram Navami Sweet Rice Offering",
    "summary": "On Ram Navami, a family prepares sweet rice prasad and learns service through sharing.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Community-family retelling for Ram Navami.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 31,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "parents",
      "elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Dawn",
        "text": "Ram Navami Sweet Rice Offering: Before sunrise on Ram Navami, rice simmers with cardamom as grandmother tells why sweet prasad is shared with everyone."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "A child stirs the pot slowly and places raisins in a small bowl for the temple plate."
      },
      {
        "id": "panel-3",
        "title": "Kind Choice",
        "text": "When sugar spills, siblings clean together and measure again without blame."
      },
      {
        "id": "panel-4",
        "title": "Evening Blessing",
        "text": "After the cradle prayer for baby Rama, the family serves warm sweet rice to neighbors and watchman alike."
      }
    ],
    "parentNote": {
      "sourceContext": "Community-family retelling for Ram Navami.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "How did listening help this Ram Navami celebration?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "Which value from this story can you practice tomorrow?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ram Navami celebration in family neighborhood with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-032",
    "storyId": "festival-stories-exp-v1-032",
    "slug": "festival-stories-exp-v1-032",
    "title": "Seva Broom at Hanuman Temple",
    "shortTitle": "Seva Broom at Hanuman Temple",
    "summary": "Children practice Hanuman Jayanti seva by cleaning the temple with care and humility.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Community-family retelling for Hanuman Jayanti.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 32,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "parents",
      "elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Gathering",
        "text": "Seva Broom at Hanuman Temple: At Hanuman temple, children arrive with small brooms and buckets before the morning aarti bell."
      },
      {
        "id": "panel-2",
        "title": "Festival Meaning",
        "text": "A sevak shows how to sweep from the outer steps inward so no one slips on flower stems."
      },
      {
        "id": "panel-3",
        "title": "Helping Moment",
        "text": "One child wants to finish fast, but the group slows down to clear corners near the diya stand carefully."
      },
      {
        "id": "panel-4",
        "title": "Prayer Close",
        "text": "When the floor shines, they offer jasmines and chant Rama’s name, happy that seva kept everyone safe."
      }
    ],
    "parentNote": {
      "sourceContext": "Community-family retelling for Hanuman Jayanti.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "How did listening help this Hanuman Jayanti celebration?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "Which value from this story can you practice tomorrow?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Hanuman Jayanti celebration in family neighborhood with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-033",
    "storyId": "festival-stories-exp-v1-033",
    "slug": "festival-stories-exp-v1-033",
    "title": "Hanuman Chalisa with Grandfather",
    "shortTitle": "Hanuman Chalisa with Grandfather",
    "summary": "A family recites Hanuman Chalisa together and learns patient encouragement and humble strength.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Community-family retelling for Hanuman Jayanti.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 33,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "parents",
      "elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Early Light",
        "text": "Hanuman Chalisa with Grandfather: Grandfather opens a worn Hanuman Chalisa book and invites the children to sit beside the tulsi plant."
      },
      {
        "id": "panel-2",
        "title": "Family Work",
        "text": "He explains difficult words with simple examples of courage used for helping, not showing off."
      },
      {
        "id": "panel-3",
        "title": "Sharing Choice",
        "text": "A child stumbles on a verse; cousins wait kindly and repeat it together until the line feels steady."
      },
      {
        "id": "panel-4",
        "title": "Gratitude",
        "text": "They close with folded hands and fruit sharing, carrying Hanuman’s humility into the day."
      }
    ],
    "parentNote": {
      "sourceContext": "Community-family retelling for Hanuman Jayanti.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "How did listening help this Hanuman Jayanti celebration?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "Which value from this story can you practice tomorrow?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Hanuman Jayanti celebration in family neighborhood with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-034",
    "storyId": "festival-stories-exp-v1-034",
    "slug": "festival-stories-exp-v1-034",
    "title": "Bilva Leaves at Midnight",
    "shortTitle": "Bilva Leaves at Midnight",
    "summary": "A quiet Maha Shivratri offering of bilva leaves teaches calm devotion and gentle attention.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Community-family retelling for Maha Shivratri.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 34,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "parents",
      "elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Morning Start",
        "text": "Bilva Leaves at Midnight: Near midnight on Maha Shivratri, a family rinses bilva leaves and arranges them beside cool water for abhishek."
      },
      {
        "id": "panel-2",
        "title": "Story Time",
        "text": "A parent explains why each leaf is offered gently, with attention and quiet breath."
      },
      {
        "id": "panel-3",
        "title": "Careful Action",
        "text": "When the youngest drops a leaf, an elder smiles and says devotion matters more than perfection."
      },
      {
        "id": "panel-4",
        "title": "Calm Finish",
        "text": "They place the bilva leaves one by one, ending in stillness and gratitude before dawn."
      }
    ],
    "parentNote": {
      "sourceContext": "Community-family retelling for Maha Shivratri.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "How did listening help this Maha Shivratri celebration?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "Which value from this story can you practice tomorrow?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Maha Shivratri celebration in family neighborhood with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-035",
    "storyId": "festival-stories-exp-v1-035",
    "slug": "festival-stories-exp-v1-035",
    "title": "Riverbank Silence on Shivratri",
    "shortTitle": "Riverbank Silence on Shivratri",
    "summary": "A riverbank Shivratri vigil shows children how shared silence can become devotion.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Community-family retelling for Maha Shivratri.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 35,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "parents",
      "elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Welcome",
        "text": "Riverbank Silence on Shivratri: At the riverbank shrine on Shivratri night, lamps float softly while bells ring from a distant mandir."
      },
      {
        "id": "panel-2",
        "title": "Tradition",
        "text": "Children sit wrapped in shawls as Parvati and Shiva stories are told in calm voices."
      },
      {
        "id": "panel-3",
        "title": "Respectful Play",
        "text": "When wind blows out a diya, they relight it together and shield the flame with cupped hands."
      },
      {
        "id": "panel-4",
        "title": "Thankful End",
        "text": "The family returns home in silence, keeping the prayerful peace in their hearts."
      }
    ],
    "parentNote": {
      "sourceContext": "Community-family retelling for Maha Shivratri.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "How did listening help this Maha Shivratri celebration?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "Which value from this story can you practice tomorrow?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Maha Shivratri celebration in family neighborhood with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-036",
    "storyId": "festival-stories-exp-v1-036",
    "slug": "festival-stories-exp-v1-036",
    "title": "Village Prayers for Navratri",
    "shortTitle": "Village Prayers for Navratri",
    "summary": "A Navratri retelling where children learn reverence, sharing, and calm courage.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Community-family retelling for Navratri.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 36,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "parents",
      "elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Families arrive early and begin specific seva tasks with mindful hands."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "An elder narrates the festival story with concrete family details in simple child-friendly words."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "When a small conflict appears, the children choose listening and sharing before continuing."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The day closes with prayer and shared prasad, and a promise to carry the value into school and home."
      }
    ],
    "parentNote": {
      "sourceContext": "Community-family retelling for Navratri.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "How did listening help this Navratri celebration?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "Which value from this story can you practice tomorrow?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Navratri celebration in family neighborhood with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-037",
    "storyId": "festival-stories-exp-v1-037",
    "slug": "festival-stories-exp-v1-037",
    "title": "Clay Idol and Clean River Peacock",
    "shortTitle": "Clay Idol and Clean River Peacock",
    "summary": "A gentle Ganesh Chaturthi festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Ganesh Chaturthi.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 37,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Ganesh Chaturthi.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ganesh Chaturthi celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-038",
    "storyId": "festival-stories-exp-v1-038",
    "slug": "festival-stories-exp-v1-038",
    "title": "Lamp of Courage at Home Sandal",
    "shortTitle": "Lamp of Courage at Home Sandal",
    "summary": "A gentle Navratri festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Navratri.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 38,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Navratri.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Navratri celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-039",
    "storyId": "festival-stories-exp-v1-039",
    "slug": "festival-stories-exp-v1-039",
    "title": "Choosing Right Over Wrong Marigold",
    "shortTitle": "Choosing Right Over Wrong Marigold",
    "summary": "A gentle Dussehra festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Dussehra.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 39,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Dussehra.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Dussehra celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-040",
    "storyId": "festival-stories-exp-v1-040",
    "slug": "festival-stories-exp-v1-040",
    "title": "Promise Thread of Care River",
    "shortTitle": "Promise Thread of Care River",
    "summary": "A gentle Raksha Bandhan festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Raksha Bandhan.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 40,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Raksha Bandhan.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Raksha Bandhan celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-041",
    "storyId": "festival-stories-exp-v1-041",
    "slug": "festival-stories-exp-v1-041",
    "title": "Kites Across the Winter Sky Moon",
    "shortTitle": "Kites Across the Winter Sky Moon",
    "summary": "A gentle Makar Sankranti festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Makar Sankranti.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 41,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Makar Sankranti.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Makar Sankranti celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-042",
    "storyId": "festival-stories-exp-v1-042",
    "slug": "festival-stories-exp-v1-042",
    "title": "Cradle Song for Rama Lotus",
    "shortTitle": "Cradle Song for Rama Lotus",
    "summary": "A gentle Ram Navami festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Ram Navami.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 42,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Ram Navami.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ram Navami celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-043",
    "storyId": "festival-stories-exp-v1-043",
    "slug": "festival-stories-exp-v1-043",
    "title": "Service with a Humble Heart Peacock",
    "shortTitle": "Service with a Humble Heart Peacock",
    "summary": "A gentle Hanuman Jayanti festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Hanuman Jayanti.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 43,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Hanuman Jayanti.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Hanuman Jayanti celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-044",
    "storyId": "festival-stories-exp-v1-044",
    "slug": "festival-stories-exp-v1-044",
    "title": "Quiet Temple Night Sandal",
    "shortTitle": "Quiet Temple Night Sandal",
    "summary": "A gentle Maha Shivratri festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Maha Shivratri.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 44,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Maha Shivratri.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Maha Shivratri celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-045",
    "storyId": "festival-stories-exp-v1-045",
    "slug": "festival-stories-exp-v1-045",
    "title": "Courtyard Lights of Gratitude Marigold",
    "shortTitle": "Courtyard Lights of Gratitude Marigold",
    "summary": "A gentle Diwali festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Diwali.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 45,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Diwali.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Diwali celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-046",
    "storyId": "festival-stories-exp-v1-046",
    "slug": "festival-stories-exp-v1-046",
    "title": "Flower Colors and Friendly Smiles River",
    "shortTitle": "Flower Colors and Friendly Smiles River",
    "summary": "A gentle Holi festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Holi.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 46,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Holi.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Holi celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-047",
    "storyId": "festival-stories-exp-v1-047",
    "slug": "festival-stories-exp-v1-047",
    "title": "Little Flute at Dawn Moon",
    "shortTitle": "Little Flute at Dawn Moon",
    "summary": "A gentle Janmashtami festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Janmashtami.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 47,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Janmashtami.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Janmashtami celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-048",
    "storyId": "festival-stories-exp-v1-048",
    "slug": "festival-stories-exp-v1-048",
    "title": "Clay Idol and Clean River Lotus",
    "shortTitle": "Clay Idol and Clean River Lotus",
    "summary": "A gentle Ganesh Chaturthi festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Ganesh Chaturthi.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 48,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Ganesh Chaturthi.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ganesh Chaturthi celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-049",
    "storyId": "festival-stories-exp-v1-049",
    "slug": "festival-stories-exp-v1-049",
    "title": "Lamp of Courage at Home Peacock",
    "shortTitle": "Lamp of Courage at Home Peacock",
    "summary": "A gentle Navratri festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Navratri.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 49,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Navratri.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Navratri celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-050",
    "storyId": "festival-stories-exp-v1-050",
    "slug": "festival-stories-exp-v1-050",
    "title": "Choosing Right Over Wrong Sandal",
    "shortTitle": "Choosing Right Over Wrong Sandal",
    "summary": "A gentle Dussehra festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Dussehra.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 50,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Dussehra.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Dussehra celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-051",
    "storyId": "festival-stories-exp-v1-051",
    "slug": "festival-stories-exp-v1-051",
    "title": "Promise Thread of Care Marigold",
    "shortTitle": "Promise Thread of Care Marigold",
    "summary": "A gentle Raksha Bandhan festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Raksha Bandhan.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 51,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Raksha Bandhan.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Raksha Bandhan celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-052",
    "storyId": "festival-stories-exp-v1-052",
    "slug": "festival-stories-exp-v1-052",
    "title": "Kites Across the Winter Sky River",
    "shortTitle": "Kites Across the Winter Sky River",
    "summary": "A gentle Makar Sankranti festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Makar Sankranti.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 52,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Makar Sankranti.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Makar Sankranti celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-053",
    "storyId": "festival-stories-exp-v1-053",
    "slug": "festival-stories-exp-v1-053",
    "title": "Cradle Song for Rama Moon",
    "shortTitle": "Cradle Song for Rama Moon",
    "summary": "A gentle Ram Navami festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Ram Navami.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 53,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Ram Navami.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ram Navami celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-054",
    "storyId": "festival-stories-exp-v1-054",
    "slug": "festival-stories-exp-v1-054",
    "title": "Service with a Humble Heart Lotus",
    "shortTitle": "Service with a Humble Heart Lotus",
    "summary": "A gentle Hanuman Jayanti festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Hanuman Jayanti.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 54,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Hanuman Jayanti.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Hanuman Jayanti celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-055",
    "storyId": "festival-stories-exp-v1-055",
    "slug": "festival-stories-exp-v1-055",
    "title": "Quiet Temple Night Peacock",
    "shortTitle": "Quiet Temple Night Peacock",
    "summary": "A gentle Maha Shivratri festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Maha Shivratri.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 55,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Maha Shivratri.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Maha Shivratri celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-056",
    "storyId": "festival-stories-exp-v1-056",
    "slug": "festival-stories-exp-v1-056",
    "title": "Courtyard Lights of Gratitude Sandal",
    "shortTitle": "Courtyard Lights of Gratitude Sandal",
    "summary": "A gentle Diwali festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Diwali.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 56,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Diwali.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Diwali celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-057",
    "storyId": "festival-stories-exp-v1-057",
    "slug": "festival-stories-exp-v1-057",
    "title": "Flower Colors and Friendly Smiles Marigold",
    "shortTitle": "Flower Colors and Friendly Smiles Marigo",
    "summary": "A gentle Holi festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Holi.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 57,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Holi.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Holi celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-058",
    "storyId": "festival-stories-exp-v1-058",
    "slug": "festival-stories-exp-v1-058",
    "title": "Little Flute at Dawn River",
    "shortTitle": "Little Flute at Dawn River",
    "summary": "A gentle Janmashtami festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Janmashtami.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 58,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Janmashtami.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Janmashtami celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-059",
    "storyId": "festival-stories-exp-v1-059",
    "slug": "festival-stories-exp-v1-059",
    "title": "Clay Idol and Clean River Moon",
    "shortTitle": "Clay Idol and Clean River Moon",
    "summary": "A gentle Ganesh Chaturthi festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Ganesh Chaturthi.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 59,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Ganesh Chaturthi.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ganesh Chaturthi celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-060",
    "storyId": "festival-stories-exp-v1-060",
    "slug": "festival-stories-exp-v1-060",
    "title": "Lamp of Courage at Home Lotus",
    "shortTitle": "Lamp of Courage at Home Lotus",
    "summary": "A gentle Navratri festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Navratri.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 60,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Navratri.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Navratri celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-061",
    "storyId": "festival-stories-exp-v1-061",
    "slug": "festival-stories-exp-v1-061",
    "title": "Choosing Right Over Wrong Peacock",
    "shortTitle": "Choosing Right Over Wrong Peacock",
    "summary": "A gentle Dussehra festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Dussehra.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 61,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Dussehra.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Dussehra celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-062",
    "storyId": "festival-stories-exp-v1-062",
    "slug": "festival-stories-exp-v1-062",
    "title": "Promise Thread of Care A",
    "shortTitle": "Promise Thread of Care A",
    "summary": "A gentle Raksha Bandhan festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Raksha Bandhan.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 62,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Raksha Bandhan.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Raksha Bandhan celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-063",
    "storyId": "festival-stories-exp-v1-063",
    "slug": "festival-stories-exp-v1-063",
    "title": "Kites Across the Winter Sky B",
    "shortTitle": "Kites Across the Winter Sky B",
    "summary": "A gentle Makar Sankranti festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Makar Sankranti.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 63,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Makar Sankranti.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Makar Sankranti celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-064",
    "storyId": "festival-stories-exp-v1-064",
    "slug": "festival-stories-exp-v1-064",
    "title": "Cradle Song for Rama C",
    "shortTitle": "Cradle Song for Rama C",
    "summary": "A gentle Ram Navami festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Ram Navami.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 64,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Ram Navami.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ram Navami celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-065",
    "storyId": "festival-stories-exp-v1-065",
    "slug": "festival-stories-exp-v1-065",
    "title": "Service with a Humble Heart D",
    "shortTitle": "Service with a Humble Heart D",
    "summary": "A gentle Hanuman Jayanti festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Hanuman Jayanti.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 65,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Hanuman Jayanti.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Hanuman Jayanti celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-066",
    "storyId": "festival-stories-exp-v1-066",
    "slug": "festival-stories-exp-v1-066",
    "title": "Quiet Temple Night E",
    "shortTitle": "Quiet Temple Night E",
    "summary": "A gentle Maha Shivratri festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Maha Shivratri.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 66,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Maha Shivratri.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Maha Shivratri celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-067",
    "storyId": "festival-stories-exp-v1-067",
    "slug": "festival-stories-exp-v1-067",
    "title": "Courtyard Lights of Gratitude F",
    "shortTitle": "Courtyard Lights of Gratitude F",
    "summary": "A gentle Diwali festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Diwali.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 67,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Diwali.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Diwali celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-068",
    "storyId": "festival-stories-exp-v1-068",
    "slug": "festival-stories-exp-v1-068",
    "title": "Flower Colors and Friendly Smiles G",
    "shortTitle": "Flower Colors and Friendly Smiles G",
    "summary": "A gentle Holi festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Holi.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 68,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Holi.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Holi celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-069",
    "storyId": "festival-stories-exp-v1-069",
    "slug": "festival-stories-exp-v1-069",
    "title": "Little Flute at Dawn H",
    "shortTitle": "Little Flute at Dawn H",
    "summary": "A gentle Janmashtami festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Janmashtami.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 69,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Janmashtami.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Janmashtami celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-070",
    "storyId": "festival-stories-exp-v1-070",
    "slug": "festival-stories-exp-v1-070",
    "title": "Clay Idol and Clean River I",
    "shortTitle": "Clay Idol and Clean River I",
    "summary": "A gentle Ganesh Chaturthi festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Ganesh Chaturthi.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 70,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Ganesh Chaturthi.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ganesh Chaturthi celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-071",
    "storyId": "festival-stories-exp-v1-071",
    "slug": "festival-stories-exp-v1-071",
    "title": "Lamp of Courage at Home J",
    "shortTitle": "Lamp of Courage at Home J",
    "summary": "A gentle Navratri festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Navratri.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 71,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Navratri.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Navratri celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-072",
    "storyId": "festival-stories-exp-v1-072",
    "slug": "festival-stories-exp-v1-072",
    "title": "Choosing Right Over Wrong K",
    "shortTitle": "Choosing Right Over Wrong K",
    "summary": "A gentle Dussehra festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Dussehra.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 72,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Dussehra.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Dussehra celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-073",
    "storyId": "festival-stories-exp-v1-073",
    "slug": "festival-stories-exp-v1-073",
    "title": "Promise Thread of Care L",
    "shortTitle": "Promise Thread of Care L",
    "summary": "A gentle Raksha Bandhan festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Raksha Bandhan.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 73,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Raksha Bandhan.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Raksha Bandhan celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-074",
    "storyId": "festival-stories-exp-v1-074",
    "slug": "festival-stories-exp-v1-074",
    "title": "Kites Across the Winter Sky M",
    "shortTitle": "Kites Across the Winter Sky M",
    "summary": "A gentle Makar Sankranti festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Makar Sankranti.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 74,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Makar Sankranti.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Makar Sankranti celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-075",
    "storyId": "festival-stories-exp-v1-075",
    "slug": "festival-stories-exp-v1-075",
    "title": "Cradle Song for Rama N",
    "shortTitle": "Cradle Song for Rama N",
    "summary": "A gentle Ram Navami festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Ram Navami.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 75,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Ram Navami.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ram Navami celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-076",
    "storyId": "festival-stories-exp-v1-076",
    "slug": "festival-stories-exp-v1-076",
    "title": "Service with a Humble Heart O",
    "shortTitle": "Service with a Humble Heart O",
    "summary": "A gentle Hanuman Jayanti festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Hanuman Jayanti.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 76,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Hanuman Jayanti.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Hanuman Jayanti celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-077",
    "storyId": "festival-stories-exp-v1-077",
    "slug": "festival-stories-exp-v1-077",
    "title": "Quiet Temple Night P",
    "shortTitle": "Quiet Temple Night P",
    "summary": "A gentle Maha Shivratri festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Maha Shivratri.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 77,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Maha Shivratri.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Maha Shivratri celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-078",
    "storyId": "festival-stories-exp-v1-078",
    "slug": "festival-stories-exp-v1-078",
    "title": "Courtyard Lights of Gratitude Q",
    "shortTitle": "Courtyard Lights of Gratitude Q",
    "summary": "A gentle Diwali festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Diwali.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 78,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Diwali.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Diwali celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-079",
    "storyId": "festival-stories-exp-v1-079",
    "slug": "festival-stories-exp-v1-079",
    "title": "Flower Colors and Friendly Smiles R",
    "shortTitle": "Flower Colors and Friendly Smiles R",
    "summary": "A gentle Holi festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Holi.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 79,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Holi.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Holi celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-080",
    "storyId": "festival-stories-exp-v1-080",
    "slug": "festival-stories-exp-v1-080",
    "title": "Little Flute at Dawn S",
    "shortTitle": "Little Flute at Dawn S",
    "summary": "A gentle Janmashtami festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Janmashtami.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 80,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Janmashtami.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Janmashtami celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-081",
    "storyId": "festival-stories-exp-v1-081",
    "slug": "festival-stories-exp-v1-081",
    "title": "Clay Idol and Clean River T",
    "shortTitle": "Clay Idol and Clean River T",
    "summary": "A gentle Ganesh Chaturthi festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Ganesh Chaturthi.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 81,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Ganesh Chaturthi.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ganesh Chaturthi celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-082",
    "storyId": "festival-stories-exp-v1-082",
    "slug": "festival-stories-exp-v1-082",
    "title": "Lamp of Courage at Home U",
    "shortTitle": "Lamp of Courage at Home U",
    "summary": "A gentle Navratri festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Navratri.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 82,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Navratri.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Navratri celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-083",
    "storyId": "festival-stories-exp-v1-083",
    "slug": "festival-stories-exp-v1-083",
    "title": "Choosing Right Over Wrong V",
    "shortTitle": "Choosing Right Over Wrong V",
    "summary": "A gentle Dussehra festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Dussehra.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 83,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Dussehra.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Dussehra celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-084",
    "storyId": "festival-stories-exp-v1-084",
    "slug": "festival-stories-exp-v1-084",
    "title": "Promise Thread of Care W",
    "shortTitle": "Promise Thread of Care W",
    "summary": "A gentle Raksha Bandhan festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Raksha Bandhan.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 84,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Raksha Bandhan.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Raksha Bandhan celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-085",
    "storyId": "festival-stories-exp-v1-085",
    "slug": "festival-stories-exp-v1-085",
    "title": "Kites Across the Winter Sky X",
    "shortTitle": "Kites Across the Winter Sky X",
    "summary": "A gentle Makar Sankranti festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Makar Sankranti.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 85,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Makar Sankranti.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Makar Sankranti celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-086",
    "storyId": "festival-stories-exp-v1-086",
    "slug": "festival-stories-exp-v1-086",
    "title": "Cradle Song for Rama Y",
    "shortTitle": "Cradle Song for Rama Y",
    "summary": "A gentle Ram Navami festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Ram Navami.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 86,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Ram Navami.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ram Navami celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-087",
    "storyId": "festival-stories-exp-v1-087",
    "slug": "festival-stories-exp-v1-087",
    "title": "Service with a Humble Heart Z",
    "shortTitle": "Service with a Humble Heart Z",
    "summary": "A gentle Hanuman Jayanti festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Hanuman Jayanti.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 87,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Hanuman Jayanti.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Hanuman Jayanti celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-088",
    "storyId": "festival-stories-exp-v1-088",
    "slug": "festival-stories-exp-v1-088",
    "title": "Quiet Temple Night A",
    "shortTitle": "Quiet Temple Night A",
    "summary": "A gentle Maha Shivratri festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Maha Shivratri.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 88,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Maha Shivratri.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Maha Shivratri celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-089",
    "storyId": "festival-stories-exp-v1-089",
    "slug": "festival-stories-exp-v1-089",
    "title": "Courtyard Lights of Gratitude B",
    "shortTitle": "Courtyard Lights of Gratitude B",
    "summary": "A gentle Diwali festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Diwali.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 89,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Diwali.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Diwali celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-090",
    "storyId": "festival-stories-exp-v1-090",
    "slug": "festival-stories-exp-v1-090",
    "title": "Flower Colors and Friendly Smiles C",
    "shortTitle": "Flower Colors and Friendly Smiles C",
    "summary": "A gentle Holi festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Holi.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 90,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Holi.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Holi celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-091",
    "storyId": "festival-stories-exp-v1-091",
    "slug": "festival-stories-exp-v1-091",
    "title": "Little Flute at Dawn D",
    "shortTitle": "Little Flute at Dawn D",
    "summary": "A gentle Janmashtami festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Janmashtami.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 91,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Janmashtami.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Janmashtami celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-092",
    "storyId": "festival-stories-exp-v1-092",
    "slug": "festival-stories-exp-v1-092",
    "title": "Clay Idol and Clean River E",
    "shortTitle": "Clay Idol and Clean River E",
    "summary": "A gentle Ganesh Chaturthi festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Ganesh Chaturthi.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 92,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Ganesh Chaturthi.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ganesh Chaturthi celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-093",
    "storyId": "festival-stories-exp-v1-093",
    "slug": "festival-stories-exp-v1-093",
    "title": "Lamp of Courage at Home F",
    "shortTitle": "Lamp of Courage at Home F",
    "summary": "A gentle Navratri festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Navratri.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 93,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Navratri.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Navratri celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-094",
    "storyId": "festival-stories-exp-v1-094",
    "slug": "festival-stories-exp-v1-094",
    "title": "Choosing Right Over Wrong G",
    "shortTitle": "Choosing Right Over Wrong G",
    "summary": "A gentle Dussehra festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Dussehra.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 94,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Dussehra.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Dussehra celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-095",
    "storyId": "festival-stories-exp-v1-095",
    "slug": "festival-stories-exp-v1-095",
    "title": "Promise Thread of Care H",
    "shortTitle": "Promise Thread of Care H",
    "summary": "A gentle Raksha Bandhan festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Raksha Bandhan.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 95,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Raksha Bandhan.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Raksha Bandhan celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-096",
    "storyId": "festival-stories-exp-v1-096",
    "slug": "festival-stories-exp-v1-096",
    "title": "Kites Across the Winter Sky I",
    "shortTitle": "Kites Across the Winter Sky I",
    "summary": "A gentle Makar Sankranti festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Makar Sankranti.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 96,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Makar Sankranti.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Makar Sankranti celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-097",
    "storyId": "festival-stories-exp-v1-097",
    "slug": "festival-stories-exp-v1-097",
    "title": "Cradle Song for Rama J",
    "shortTitle": "Cradle Song for Rama J",
    "summary": "A gentle Ram Navami festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Ram Navami.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 97,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Ram Navami.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ram Navami celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-098",
    "storyId": "festival-stories-exp-v1-098",
    "slug": "festival-stories-exp-v1-098",
    "title": "Service with a Humble Heart K",
    "shortTitle": "Service with a Humble Heart K",
    "summary": "A gentle Hanuman Jayanti festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Hanuman Jayanti.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 98,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Hanuman Jayanti.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Hanuman Jayanti celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-099",
    "storyId": "festival-stories-exp-v1-099",
    "slug": "festival-stories-exp-v1-099",
    "title": "Quiet Temple Night L",
    "shortTitle": "Quiet Temple Night L",
    "summary": "A gentle Maha Shivratri festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Maha Shivratri.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 99,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Maha Shivratri.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Maha Shivratri celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "festival-stories-exp-v1-100",
    "storyId": "festival-stories-exp-v1-100",
    "slug": "festival-stories-exp-v1-100",
    "title": "Courtyard Lights of Gratitude M",
    "shortTitle": "Courtyard Lights of Gratitude M",
    "summary": "A gentle Diwali festival moment for children and families.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Short indexed retelling for Diwali.",
    "storyPackId": "festival-stories-expansion-pack-v1",
    "journeyId": "festival-stories-journey-v1",
    "journeyOrder": 100,
    "ageBands": [
      "3-5",
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Care"
    ],
    "characters": [
      "children",
      "family"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Beginning",
        "text": "Children help set a clean prayer space before the celebration."
      },
      {
        "id": "panel-2",
        "title": "Middle",
        "text": "A parent explains one simple meaning of the festival in warm language."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "They practice one value together through sharing or helping."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The family closes with gratitude and a calm blessing."
      }
    ],
    "parentNote": {
      "sourceContext": "Short indexed retelling for Diwali.",
      "valueExplained": "Festivals teach devotion, kindness, and family responsibility.",
      "discussionPrompt": "Which value was practiced together?",
      "practicePrompt": "Choose one caring action for your next family celebration.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "What one helping action can you do today?",
    "ritualPrompt": "Take three calm breaths and offer thanks.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Diwali celebration in home and temple with warm family devotion.",
      "styleGuidance": "Warm colors, respectful expressions, child-safe festivity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "hard gamification",
        "violent scenes"
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
    "primaryCategoryId": "festival_stories",
    "secondaryCategoryIds": [
      "festival_stories"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  }
];

export const festivalStoriesExpansionPackV1StoryPack: StoryPack = {
  id: 'festival-stories-expansion-pack-v1',
  title: 'Festival Stories Expansion Pack v1',
  childFacingTitle: 'Festival Story World Pack',
  description: 'Child-safe Hindu festival stories with parent-friendly context and local-first metadata.',
  sourceTradition: 'Festival Stories',
  category: 'festivals',
  status: 'indexed',
  storyIds: festivalStoriesExpansionPackV1Stories.map((story) => story.id),
  recommendedAgeBands: ['3-5', '6-8', '9-12'],
  contentSafetyNotes: [
    'Child-safe sacred framing with calm language.',
    'No fear-heavy, punishment-heavy, or mocking treatment.',
    'No backend dependency for core reading experience.'
  ],
  sacredRespectNotes: [
    'Festival stories are warm, respectful, and parent-trusted.',
    'Luvlu remains a subtle helper and not a sacred authority.'
  ]
};

export const festivalStoriesExpansionPackV1Journey: DharmaJourney = {
  id: 'festival-stories-journey-v1',
  title: 'Festival Stories Journey v1',
  childFacingTitle: 'Festival Story Journey',
  description: 'A guided journey through child-safe Hindu festival stories and family values.',
  sourceTradition: 'Festival Stories',
  recommendedAgeBands: ['3-5', '6-8', '9-12'],
  storyIds: festivalStoriesExpansionPackV1Stories.map((story) => story.id),
  estimatedCompletionWeeks: 6,
  status: 'indexed',
  journeyType: 'guided_path'
};
