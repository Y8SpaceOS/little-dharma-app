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
    "summary": "A child-safe Diwali retelling set around Ayodhya that highlights kindness and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Diwali.",
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
      "Courage",
      "Sharing"
    ],
    "characters": [
      "Rama",
      "Sita",
      "Lakshmana"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Ayodhya, Rama helps prepare for Diwali with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Lakshmana explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry gratitude into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Diwali.",
      "valueExplained": "Kindness can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Diwali story showed kindness?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show kindness during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Diwali celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
      "narrationScript": "Night Before Diwali in Ayodhya. During Diwali, this child-safe story in Ayodhya shows kindness through prayer, sharing, and family care.",
      "voiceDirection": "Warm, clear, and respectful.",
      "pronunciationNotes": "Krishna (KRISH-na), Radha (RAA-dha), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan), Ayodhya (uh-YO-dhya).",
      "pacingNotes": "Steady pacing with gentle pauses after each scene.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-002",
    "storyId": "festival-stories-exp-v1-002",
    "slug": "festival-stories-exp-v1-002",
    "title": "Lamps Returning to Ayodhya",
    "shortTitle": "Lamps Returning to Ayodhya",
    "summary": "A child-safe Holi retelling set around Vrindavan that highlights courage and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Holi.",
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
    "primaryValue": "Courage",
    "secondaryValues": [
      "Sharing",
      "Gratitude"
    ],
    "characters": [
      "Krishna",
      "Radha",
      "Yashoda"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Vrindavan, Krishna helps prepare for Holi with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Yashoda explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry devotion into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Holi.",
      "valueExplained": "Courage can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Holi story showed courage?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show courage during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Holi celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
      "narrationScript": "Lamps Returning to Ayodhya. During Holi, this child-safe story in Vrindavan shows courage through prayer, sharing, and family care.",
      "voiceDirection": "Warm, clear, and respectful.",
      "pronunciationNotes": "Krishna (KRISH-na), Radha (RAA-dha), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan), Ayodhya (uh-YO-dhya).",
      "pacingNotes": "Steady pacing with gentle pauses after each scene.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-003",
    "storyId": "festival-stories-exp-v1-003",
    "slug": "festival-stories-exp-v1-003",
    "title": "Radha on Holi Morning",
    "shortTitle": "Radha on Holi Morning",
    "summary": "A child-safe Janmashtami retelling set around Mathura that highlights sharing and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Janmashtami.",
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
    "primaryValue": "Sharing",
    "secondaryValues": [
      "Gratitude",
      "Devotion"
    ],
    "characters": [
      "Krishna",
      "Devaki",
      "Vasudeva"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Mathura, Krishna helps prepare for Janmashtami with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Vasudeva explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry patience into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Janmashtami.",
      "valueExplained": "Sharing can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Janmashtami story showed sharing?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show sharing during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Janmashtami celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
      "narrationScript": "Radha on Holi Morning. During Janmashtami, this child-safe story in Mathura shows sharing through prayer, sharing, and family care.",
      "voiceDirection": "Warm, clear, and respectful.",
      "pronunciationNotes": "Krishna (KRISH-na), Radha (RAA-dha), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan), Ayodhya (uh-YO-dhya).",
      "pacingNotes": "Steady pacing with gentle pauses after each scene.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-004",
    "storyId": "festival-stories-exp-v1-004",
    "slug": "festival-stories-exp-v1-004",
    "title": "Krishna and Safe Holi Colors",
    "shortTitle": "Krishna and Safe Holi Colors",
    "summary": "A child-safe Ganesh Chaturthi retelling set around Kailash that highlights gratitude and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Ganesh Chaturthi.",
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
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Devotion",
      "Patience"
    ],
    "characters": [
      "Ganesha",
      "Parvati",
      "Shiva"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Kailash, Ganesha helps prepare for Ganesh Chaturthi with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Shiva explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry truthfulness into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Ganesh Chaturthi.",
      "valueExplained": "Gratitude can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Ganesh Chaturthi story showed gratitude?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show gratitude during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ganesh Chaturthi celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
      "narrationScript": "Krishna and Safe Holi Colors. During Ganesh Chaturthi, this child-safe story in Kailash shows gratitude through prayer, sharing, and family care.",
      "voiceDirection": "Warm, clear, and respectful.",
      "pronunciationNotes": "Krishna (KRISH-na), Radha (RAA-dha), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan), Ayodhya (uh-YO-dhya).",
      "pacingNotes": "Steady pacing with gentle pauses after each scene.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-005",
    "storyId": "festival-stories-exp-v1-005",
    "slug": "festival-stories-exp-v1-005",
    "title": "Child Making a Clay Ganesh Idol",
    "shortTitle": "Child Making a Clay Ganesh Idol",
    "summary": "A child-safe Navratri retelling set around home altar that highlights devotion and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Navratri.",
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
    "primaryValue": "Devotion",
    "secondaryValues": [
      "Patience",
      "Truthfulness"
    ],
    "characters": [
      "Durga",
      "Parvati",
      "family elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At home altar, Durga helps prepare for Navratri with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, family elders explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry care into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Navratri.",
      "valueExplained": "Devotion can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Navratri story showed devotion?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show devotion during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Navratri celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
      "narrationScript": "Child Making a Clay Ganesh Idol. During Navratri, this child-safe story in home altar shows devotion through prayer, sharing, and family care.",
      "voiceDirection": "Warm, clear, and respectful.",
      "pronunciationNotes": "Krishna (KRISH-na), Radha (RAA-dha), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan), Ayodhya (uh-YO-dhya).",
      "pacingNotes": "Steady pacing with gentle pauses after each scene.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-006",
    "storyId": "festival-stories-exp-v1-006",
    "slug": "festival-stories-exp-v1-006",
    "title": "First Modak Offering",
    "shortTitle": "First Modak Offering",
    "summary": "A child-safe Dussehra retelling set around Ayodhya that highlights patience and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Dussehra.",
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
    "primaryValue": "Patience",
    "secondaryValues": [
      "Truthfulness",
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
        "title": "Arrival",
        "text": "At Ayodhya, Rama helps prepare for Dussehra with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Hanuman explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry humility into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Dussehra.",
      "valueExplained": "Patience can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Dussehra story showed patience?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show patience during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Dussehra celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
      "narrationScript": "First Modak Offering. During Dussehra, this child-safe story in Ayodhya shows patience through prayer, sharing, and family care.",
      "voiceDirection": "Warm, clear, and respectful.",
      "pronunciationNotes": "Krishna (KRISH-na), Radha (RAA-dha), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan), Ayodhya (uh-YO-dhya).",
      "pacingNotes": "Steady pacing with gentle pauses after each scene.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-007",
    "storyId": "festival-stories-exp-v1-007",
    "slug": "festival-stories-exp-v1-007",
    "title": "Navratri Lamp at Home",
    "shortTitle": "Navratri Lamp at Home",
    "summary": "A child-safe Raksha Bandhan retelling set around family home that highlights truthfulness and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Raksha Bandhan.",
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
    "primaryValue": "Truthfulness",
    "secondaryValues": [
      "Care",
      "Humility"
    ],
    "characters": [
      "sister",
      "brother",
      "grandmother"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At family home, sister helps prepare for Raksha Bandhan with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, grandmother explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry service into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Raksha Bandhan.",
      "valueExplained": "Truthfulness can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Raksha Bandhan story showed truthfulness?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show truthfulness during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Raksha Bandhan celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
      "narrationScript": "Navratri Lamp at Home. During Raksha Bandhan, this child-safe story in family home shows truthfulness through prayer, sharing, and family care.",
      "voiceDirection": "Warm, clear, and respectful.",
      "pronunciationNotes": "Krishna (KRISH-na), Radha (RAA-dha), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan), Ayodhya (uh-YO-dhya).",
      "pacingNotes": "Steady pacing with gentle pauses after each scene.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-008",
    "storyId": "festival-stories-exp-v1-008",
    "slug": "festival-stories-exp-v1-008",
    "title": "Dussehra Courage Circle",
    "shortTitle": "Dussehra Courage Circle",
    "summary": "A child-safe Makar Sankranti retelling set around terrace that highlights care and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Makar Sankranti.",
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
    "primaryValue": "Care",
    "secondaryValues": [
      "Humility",
      "Service"
    ],
    "characters": [
      "children",
      "grandfather",
      "neighbors"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At terrace, children helps prepare for Makar Sankranti with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, neighbors explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry kindness into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Makar Sankranti.",
      "valueExplained": "Care can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Makar Sankranti story showed care?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show care during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Makar Sankranti celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
      "narrationScript": "Dussehra Courage Circle. During Makar Sankranti, this child-safe story in terrace shows care through prayer, sharing, and family care.",
      "voiceDirection": "Warm, clear, and respectful.",
      "pronunciationNotes": "Krishna (KRISH-na), Radha (RAA-dha), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan), Ayodhya (uh-YO-dhya).",
      "pacingNotes": "Steady pacing with gentle pauses after each scene.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-009",
    "storyId": "festival-stories-exp-v1-009",
    "slug": "festival-stories-exp-v1-009",
    "title": "Kite Sharing on Makar Sankranti",
    "shortTitle": "Kite Sharing on Makar Sankranti",
    "summary": "A child-safe Ram Navami retelling set around Ayodhya temple that highlights humility and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Ram Navami.",
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
    "primaryValue": "Humility",
    "secondaryValues": [
      "Service",
      "Kindness"
    ],
    "characters": [
      "Rama",
      "Kausalya",
      "Dasharatha"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Ayodhya temple, Rama helps prepare for Ram Navami with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Dasharatha explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry courage into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Ram Navami.",
      "valueExplained": "Humility can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Ram Navami story showed humility?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show humility during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ram Navami celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
      "narrationScript": "Kite Sharing on Makar Sankranti. During Ram Navami, this child-safe story in Ayodhya temple shows humility through prayer, sharing, and family care.",
      "voiceDirection": "Warm, clear, and respectful.",
      "pronunciationNotes": "Krishna (KRISH-na), Radha (RAA-dha), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan), Ayodhya (uh-YO-dhya).",
      "pacingNotes": "Steady pacing with gentle pauses after each scene.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-010",
    "storyId": "festival-stories-exp-v1-010",
    "slug": "festival-stories-exp-v1-010",
    "title": "Sibling Care on Raksha Bandhan",
    "shortTitle": "Sibling Care on Raksha Bandhan",
    "summary": "A child-safe Hanuman Jayanti retelling set around temple courtyard that highlights service and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Hanuman Jayanti.",
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
    "primaryValue": "Service",
    "secondaryValues": [
      "Kindness",
      "Courage"
    ],
    "characters": [
      "Hanuman",
      "Rama",
      "Sita"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At temple courtyard, Hanuman helps prepare for Hanuman Jayanti with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Sita explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry sharing into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Hanuman Jayanti.",
      "valueExplained": "Service can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Hanuman Jayanti story showed service?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show service during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Hanuman Jayanti celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
      "narrationScript": "Sibling Care on Raksha Bandhan. During Hanuman Jayanti, this child-safe story in temple courtyard shows service through prayer, sharing, and family care.",
      "voiceDirection": "Warm, clear, and respectful.",
      "pronunciationNotes": "Krishna (KRISH-na), Radha (RAA-dha), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan), Ayodhya (uh-YO-dhya).",
      "pacingNotes": "Steady pacing with gentle pauses after each scene.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-011",
    "storyId": "festival-stories-exp-v1-011",
    "slug": "festival-stories-exp-v1-011",
    "title": "Ram Navami Cradle Celebration",
    "shortTitle": "Ram Navami Cradle Celebration",
    "summary": "A child-safe Maha Shivratri retelling set around Kailash that highlights kindness and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Maha Shivratri.",
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
      "Courage",
      "Sharing"
    ],
    "characters": [
      "Shiva",
      "Parvati",
      "Nandi"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Kailash, Shiva helps prepare for Maha Shivratri with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Nandi explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry gratitude into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Maha Shivratri.",
      "valueExplained": "Kindness can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Maha Shivratri story showed kindness?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show kindness during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Maha Shivratri celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
      "narrationScript": "Ram Navami Cradle Celebration. During Maha Shivratri, this child-safe story in Kailash shows kindness through prayer, sharing, and family care.",
      "voiceDirection": "Warm, clear, and respectful.",
      "pronunciationNotes": "Krishna (KRISH-na), Radha (RAA-dha), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan), Ayodhya (uh-YO-dhya).",
      "pacingNotes": "Steady pacing with gentle pauses after each scene.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-012",
    "storyId": "festival-stories-exp-v1-012",
    "slug": "festival-stories-exp-v1-012",
    "title": "Hanuman Jayanti Seva Path",
    "shortTitle": "Hanuman Jayanti Seva Path",
    "summary": "A child-safe Diwali retelling set around Ayodhya that highlights courage and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Diwali.",
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
    "primaryValue": "Courage",
    "secondaryValues": [
      "Sharing",
      "Gratitude"
    ],
    "characters": [
      "Rama",
      "Sita",
      "Lakshmana"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Ayodhya, Rama helps prepare for Diwali with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Lakshmana explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry devotion into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Diwali.",
      "valueExplained": "Courage can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Diwali story showed courage?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show courage during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Diwali celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
      "narrationScript": "Hanuman Jayanti Seva Path. During Diwali, this child-safe story in Ayodhya shows courage through prayer, sharing, and family care.",
      "voiceDirection": "Warm, clear, and respectful.",
      "pronunciationNotes": "Krishna (KRISH-na), Radha (RAA-dha), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan), Ayodhya (uh-YO-dhya).",
      "pacingNotes": "Steady pacing with gentle pauses after each scene.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-013",
    "storyId": "festival-stories-exp-v1-013",
    "slug": "festival-stories-exp-v1-013",
    "title": "Maha Shivratri Quiet Prayer",
    "shortTitle": "Maha Shivratri Quiet Prayer",
    "summary": "A child-safe Holi retelling set around Vrindavan that highlights sharing and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Holi.",
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
    "primaryValue": "Sharing",
    "secondaryValues": [
      "Gratitude",
      "Devotion"
    ],
    "characters": [
      "Krishna",
      "Radha",
      "Yashoda"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Vrindavan, Krishna helps prepare for Holi with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Yashoda explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry patience into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Holi.",
      "valueExplained": "Sharing can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Holi story showed sharing?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show sharing during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Holi celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
      "narrationScript": "Maha Shivratri Quiet Prayer. During Holi, this child-safe story in Vrindavan shows sharing through prayer, sharing, and family care.",
      "voiceDirection": "Warm, clear, and respectful.",
      "pronunciationNotes": "Krishna (KRISH-na), Radha (RAA-dha), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan), Ayodhya (uh-YO-dhya).",
      "pacingNotes": "Steady pacing with gentle pauses after each scene.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-014",
    "storyId": "festival-stories-exp-v1-014",
    "slug": "festival-stories-exp-v1-014",
    "title": "Janmashtami Story of Mathura 1",
    "shortTitle": "Janmashtami Story of Mathura 1",
    "summary": "A child-safe Janmashtami retelling set around Mathura that highlights gratitude and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Janmashtami.",
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
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Devotion",
      "Patience"
    ],
    "characters": [
      "Krishna",
      "Devaki",
      "Vasudeva"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Mathura, Krishna helps prepare for Janmashtami with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Vasudeva explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry truthfulness into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Janmashtami.",
      "valueExplained": "Gratitude can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Janmashtami story showed gratitude?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show gratitude during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Janmashtami celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
      "narrationScript": "Janmashtami Story of Mathura 1. During Janmashtami, this child-safe story in Mathura shows gratitude through prayer, sharing, and family care.",
      "voiceDirection": "Warm, clear, and respectful.",
      "pronunciationNotes": "Krishna (KRISH-na), Radha (RAA-dha), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan), Ayodhya (uh-YO-dhya).",
      "pacingNotes": "Steady pacing with gentle pauses after each scene.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-015",
    "storyId": "festival-stories-exp-v1-015",
    "slug": "festival-stories-exp-v1-015",
    "title": "Ganesh Chaturthi Story of Kailash 2",
    "shortTitle": "Ganesh Chaturthi Story of Kailash",
    "summary": "A child-safe Ganesh Chaturthi retelling set around Kailash that highlights devotion and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Ganesh Chaturthi.",
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
    "primaryValue": "Devotion",
    "secondaryValues": [
      "Patience",
      "Truthfulness"
    ],
    "characters": [
      "Ganesha",
      "Parvati",
      "Shiva"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Kailash, Ganesha helps prepare for Ganesh Chaturthi with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Shiva explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry care into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Ganesh Chaturthi.",
      "valueExplained": "Devotion can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Ganesh Chaturthi story showed devotion?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show devotion during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ganesh Chaturthi celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
      "narrationScript": "Ganesh Chaturthi Story of Kailash 2. During Ganesh Chaturthi, this child-safe story in Kailash shows devotion through prayer, sharing, and family care.",
      "voiceDirection": "Warm, clear, and respectful.",
      "pronunciationNotes": "Krishna (KRISH-na), Radha (RAA-dha), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan), Ayodhya (uh-YO-dhya).",
      "pacingNotes": "Steady pacing with gentle pauses after each scene.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-016",
    "storyId": "festival-stories-exp-v1-016",
    "slug": "festival-stories-exp-v1-016",
    "title": "Navratri Story of Home Altar 3",
    "shortTitle": "Navratri Story of Home Altar 3",
    "summary": "A child-safe Navratri retelling set around home altar that highlights patience and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Navratri.",
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
    "primaryValue": "Patience",
    "secondaryValues": [
      "Truthfulness",
      "Care"
    ],
    "characters": [
      "Durga",
      "Parvati",
      "family elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At home altar, Durga helps prepare for Navratri with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, family elders explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry humility into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Navratri.",
      "valueExplained": "Patience can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Navratri story showed patience?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show patience during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Navratri celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
      "narrationScript": "Navratri Story of Home Altar 3. During Navratri, this child-safe story in home altar shows patience through prayer, sharing, and family care.",
      "voiceDirection": "Warm, clear, and respectful.",
      "pronunciationNotes": "Krishna (KRISH-na), Radha (RAA-dha), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan), Ayodhya (uh-YO-dhya).",
      "pacingNotes": "Steady pacing with gentle pauses after each scene.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-017",
    "storyId": "festival-stories-exp-v1-017",
    "slug": "festival-stories-exp-v1-017",
    "title": "Dussehra Story of Ayodhya 4",
    "shortTitle": "Dussehra Story of Ayodhya 4",
    "summary": "A child-safe Dussehra retelling set around Ayodhya that highlights truthfulness and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Dussehra.",
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
    "primaryValue": "Truthfulness",
    "secondaryValues": [
      "Care",
      "Humility"
    ],
    "characters": [
      "Rama",
      "Sita",
      "Hanuman"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Ayodhya, Rama helps prepare for Dussehra with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Hanuman explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry service into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Dussehra.",
      "valueExplained": "Truthfulness can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Dussehra story showed truthfulness?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show truthfulness during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Dussehra celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
      "narrationScript": "Dussehra Story of Ayodhya 4. During Dussehra, this child-safe story in Ayodhya shows truthfulness through prayer, sharing, and family care.",
      "voiceDirection": "Warm, clear, and respectful.",
      "pronunciationNotes": "Krishna (KRISH-na), Radha (RAA-dha), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan), Ayodhya (uh-YO-dhya).",
      "pacingNotes": "Steady pacing with gentle pauses after each scene.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-018",
    "storyId": "festival-stories-exp-v1-018",
    "slug": "festival-stories-exp-v1-018",
    "title": "Raksha Bandhan Story of Family Home 5",
    "shortTitle": "Raksha Bandhan Story of Family Ho",
    "summary": "A child-safe Raksha Bandhan retelling set around family home that highlights care and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Raksha Bandhan.",
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
    "primaryValue": "Care",
    "secondaryValues": [
      "Humility",
      "Service"
    ],
    "characters": [
      "sister",
      "brother",
      "grandmother"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At family home, sister helps prepare for Raksha Bandhan with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, grandmother explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry kindness into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Raksha Bandhan.",
      "valueExplained": "Care can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Raksha Bandhan story showed care?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show care during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Raksha Bandhan celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
      "narrationScript": "Raksha Bandhan Story of Family Home 5. During Raksha Bandhan, this child-safe story in family home shows care through prayer, sharing, and family care.",
      "voiceDirection": "Warm, clear, and respectful.",
      "pronunciationNotes": "Krishna (KRISH-na), Radha (RAA-dha), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan), Ayodhya (uh-YO-dhya).",
      "pacingNotes": "Steady pacing with gentle pauses after each scene.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-019",
    "storyId": "festival-stories-exp-v1-019",
    "slug": "festival-stories-exp-v1-019",
    "title": "Makar Sankranti Story of Terrace 6",
    "shortTitle": "Makar Sankranti Story of Terrace ",
    "summary": "A child-safe Makar Sankranti retelling set around terrace that highlights humility and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Makar Sankranti.",
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
    "primaryValue": "Humility",
    "secondaryValues": [
      "Service",
      "Kindness"
    ],
    "characters": [
      "children",
      "grandfather",
      "neighbors"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At terrace, children helps prepare for Makar Sankranti with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, neighbors explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry courage into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Makar Sankranti.",
      "valueExplained": "Humility can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Makar Sankranti story showed humility?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show humility during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Makar Sankranti celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
      "narrationScript": "Makar Sankranti Story of Terrace 6. During Makar Sankranti, this child-safe story in terrace shows humility through prayer, sharing, and family care.",
      "voiceDirection": "Warm, clear, and respectful.",
      "pronunciationNotes": "Krishna (KRISH-na), Radha (RAA-dha), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan), Ayodhya (uh-YO-dhya).",
      "pacingNotes": "Steady pacing with gentle pauses after each scene.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-020",
    "storyId": "festival-stories-exp-v1-020",
    "slug": "festival-stories-exp-v1-020",
    "title": "Ram Navami Story of Ayodhya Temple 7",
    "shortTitle": "Ram Navami Story of Ayodhya Templ",
    "summary": "A child-safe Ram Navami retelling set around Ayodhya temple that highlights service and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Ram Navami.",
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
    "primaryValue": "Service",
    "secondaryValues": [
      "Kindness",
      "Courage"
    ],
    "characters": [
      "Rama",
      "Kausalya",
      "Dasharatha"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Ayodhya temple, Rama helps prepare for Ram Navami with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Dasharatha explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry sharing into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Ram Navami.",
      "valueExplained": "Service can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Ram Navami story showed service?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show service during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ram Navami celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
      "narrationScript": "Ram Navami Story of Ayodhya Temple 7. During Ram Navami, this child-safe story in Ayodhya temple shows service through prayer, sharing, and family care.",
      "voiceDirection": "Warm, clear, and respectful.",
      "pronunciationNotes": "Krishna (KRISH-na), Radha (RAA-dha), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan), Ayodhya (uh-YO-dhya).",
      "pacingNotes": "Steady pacing with gentle pauses after each scene.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-021",
    "storyId": "festival-stories-exp-v1-021",
    "slug": "festival-stories-exp-v1-021",
    "title": "Hanuman Jayanti Story of Temple Courtyard 8",
    "shortTitle": "Hanuman Jayanti Story of Temple C",
    "summary": "A child-safe Hanuman Jayanti retelling set around temple courtyard that highlights kindness and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Hanuman Jayanti.",
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
      "Courage",
      "Sharing"
    ],
    "characters": [
      "Hanuman",
      "Rama",
      "Sita"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At temple courtyard, Hanuman helps prepare for Hanuman Jayanti with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Sita explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry gratitude into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Hanuman Jayanti.",
      "valueExplained": "Kindness can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Hanuman Jayanti story showed kindness?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show kindness during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Hanuman Jayanti celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
      "narrationScript": "Hanuman Jayanti Story of Temple Courtyard 8. During Hanuman Jayanti, this child-safe story in temple courtyard shows kindness through prayer, sharing, and family care.",
      "voiceDirection": "Warm, clear, and respectful.",
      "pronunciationNotes": "Krishna (KRISH-na), Radha (RAA-dha), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan), Ayodhya (uh-YO-dhya).",
      "pacingNotes": "Steady pacing with gentle pauses after each scene.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-022",
    "storyId": "festival-stories-exp-v1-022",
    "slug": "festival-stories-exp-v1-022",
    "title": "Maha Shivratri Story of Kailash 9",
    "shortTitle": "Maha Shivratri Story of Kailash 9",
    "summary": "A child-safe Maha Shivratri retelling set around Kailash that highlights courage and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Maha Shivratri.",
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
    "primaryValue": "Courage",
    "secondaryValues": [
      "Sharing",
      "Gratitude"
    ],
    "characters": [
      "Shiva",
      "Parvati",
      "Nandi"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Kailash, Shiva helps prepare for Maha Shivratri with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Nandi explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry devotion into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Maha Shivratri.",
      "valueExplained": "Courage can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Maha Shivratri story showed courage?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show courage during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Maha Shivratri celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
      "narrationScript": "Maha Shivratri Story of Kailash 9. During Maha Shivratri, this child-safe story in Kailash shows courage through prayer, sharing, and family care.",
      "voiceDirection": "Warm, clear, and respectful.",
      "pronunciationNotes": "Krishna (KRISH-na), Radha (RAA-dha), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan), Ayodhya (uh-YO-dhya).",
      "pacingNotes": "Steady pacing with gentle pauses after each scene.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-023",
    "storyId": "festival-stories-exp-v1-023",
    "slug": "festival-stories-exp-v1-023",
    "title": "Diwali Story of Ayodhya 10",
    "shortTitle": "Diwali Story of Ayodhya 10",
    "summary": "A child-safe Diwali retelling set around Ayodhya that highlights sharing and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Diwali.",
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
    "primaryValue": "Sharing",
    "secondaryValues": [
      "Gratitude",
      "Devotion"
    ],
    "characters": [
      "Rama",
      "Sita",
      "Lakshmana"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Ayodhya, Rama helps prepare for Diwali with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Lakshmana explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry patience into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Diwali.",
      "valueExplained": "Sharing can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Diwali story showed sharing?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show sharing during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Diwali celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
      "narrationScript": "Diwali Story of Ayodhya 10. During Diwali, this child-safe story in Ayodhya shows sharing through prayer, sharing, and family care.",
      "voiceDirection": "Warm, clear, and respectful.",
      "pronunciationNotes": "Krishna (KRISH-na), Radha (RAA-dha), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan), Ayodhya (uh-YO-dhya).",
      "pacingNotes": "Steady pacing with gentle pauses after each scene.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-024",
    "storyId": "festival-stories-exp-v1-024",
    "slug": "festival-stories-exp-v1-024",
    "title": "Holi Story of Vrindavan 11",
    "shortTitle": "Holi Story of Vrindavan 11",
    "summary": "A child-safe Holi retelling set around Vrindavan that highlights gratitude and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Holi.",
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
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Devotion",
      "Patience"
    ],
    "characters": [
      "Krishna",
      "Radha",
      "Yashoda"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Vrindavan, Krishna helps prepare for Holi with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Yashoda explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry truthfulness into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Holi.",
      "valueExplained": "Gratitude can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Holi story showed gratitude?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show gratitude during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Holi celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
      "narrationScript": "Holi Story of Vrindavan 11. During Holi, this child-safe story in Vrindavan shows gratitude through prayer, sharing, and family care.",
      "voiceDirection": "Warm, clear, and respectful.",
      "pronunciationNotes": "Krishna (KRISH-na), Radha (RAA-dha), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan), Ayodhya (uh-YO-dhya).",
      "pacingNotes": "Steady pacing with gentle pauses after each scene.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-025",
    "storyId": "festival-stories-exp-v1-025",
    "slug": "festival-stories-exp-v1-025",
    "title": "Janmashtami Story of Mathura 12",
    "shortTitle": "Janmashtami Story of Mathura 12",
    "summary": "A child-safe Janmashtami retelling set around Mathura that highlights devotion and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Janmashtami.",
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
    "primaryValue": "Devotion",
    "secondaryValues": [
      "Patience",
      "Truthfulness"
    ],
    "characters": [
      "Krishna",
      "Devaki",
      "Vasudeva"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Mathura, Krishna helps prepare for Janmashtami with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Vasudeva explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry care into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Janmashtami.",
      "valueExplained": "Devotion can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Janmashtami story showed devotion?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show devotion during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Janmashtami celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
      "narrationScript": "Janmashtami Story of Mathura 12. During Janmashtami, this child-safe story in Mathura shows devotion through prayer, sharing, and family care.",
      "voiceDirection": "Warm, clear, and respectful.",
      "pronunciationNotes": "Krishna (KRISH-na), Radha (RAA-dha), Ganesha (guh-NAY-sha), Hanuman (HUH-noo-maan), Ayodhya (uh-YO-dhya).",
      "pacingNotes": "Steady pacing with gentle pauses after each scene.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "festival-stories-exp-v1-026",
    "storyId": "festival-stories-exp-v1-026",
    "slug": "festival-stories-exp-v1-026",
    "title": "Ganesh Chaturthi Story of Kailash 13",
    "shortTitle": "Ganesh Chaturthi Story of Kailash",
    "summary": "A child-safe Ganesh Chaturthi retelling set around Kailash that highlights patience and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Ganesh Chaturthi.",
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
    "primaryValue": "Patience",
    "secondaryValues": [
      "Truthfulness",
      "Care"
    ],
    "characters": [
      "Ganesha",
      "Parvati",
      "Shiva"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Kailash, Ganesha helps prepare for Ganesh Chaturthi with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Shiva explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry humility into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Ganesh Chaturthi.",
      "valueExplained": "Patience can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Ganesh Chaturthi story showed patience?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show patience during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ganesh Chaturthi celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Navratri Story of Home Altar 14",
    "shortTitle": "Navratri Story of Home Altar 14",
    "summary": "A child-safe Navratri retelling set around home altar that highlights truthfulness and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Navratri.",
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
    "primaryValue": "Truthfulness",
    "secondaryValues": [
      "Care",
      "Humility"
    ],
    "characters": [
      "Durga",
      "Parvati",
      "family elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At home altar, Durga helps prepare for Navratri with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, family elders explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry service into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Navratri.",
      "valueExplained": "Truthfulness can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Navratri story showed truthfulness?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show truthfulness during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Navratri celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Dussehra Story of Ayodhya 15",
    "shortTitle": "Dussehra Story of Ayodhya 15",
    "summary": "A child-safe Dussehra retelling set around Ayodhya that highlights care and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Dussehra.",
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
    "primaryValue": "Care",
    "secondaryValues": [
      "Humility",
      "Service"
    ],
    "characters": [
      "Rama",
      "Sita",
      "Hanuman"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Ayodhya, Rama helps prepare for Dussehra with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Hanuman explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry kindness into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Dussehra.",
      "valueExplained": "Care can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Dussehra story showed care?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show care during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Dussehra celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Raksha Bandhan Story of Family Home 16",
    "shortTitle": "Raksha Bandhan Story of Family Ho",
    "summary": "A child-safe Raksha Bandhan retelling set around family home that highlights humility and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Raksha Bandhan.",
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
    "primaryValue": "Humility",
    "secondaryValues": [
      "Service",
      "Kindness"
    ],
    "characters": [
      "sister",
      "brother",
      "grandmother"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At family home, sister helps prepare for Raksha Bandhan with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, grandmother explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry courage into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Raksha Bandhan.",
      "valueExplained": "Humility can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Raksha Bandhan story showed humility?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show humility during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Raksha Bandhan celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Makar Sankranti Story of Terrace 17",
    "shortTitle": "Makar Sankranti Story of Terrace ",
    "summary": "A child-safe Makar Sankranti retelling set around terrace that highlights service and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Makar Sankranti.",
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
    "primaryValue": "Service",
    "secondaryValues": [
      "Kindness",
      "Courage"
    ],
    "characters": [
      "children",
      "grandfather",
      "neighbors"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At terrace, children helps prepare for Makar Sankranti with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, neighbors explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry sharing into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Makar Sankranti.",
      "valueExplained": "Service can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Makar Sankranti story showed service?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show service during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Makar Sankranti celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Ram Navami Story of Ayodhya Temple 18",
    "shortTitle": "Ram Navami Story of Ayodhya Templ",
    "summary": "A child-safe Ram Navami retelling set around Ayodhya temple that highlights kindness and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Ram Navami.",
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
      "Courage",
      "Sharing"
    ],
    "characters": [
      "Rama",
      "Kausalya",
      "Dasharatha"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Ayodhya temple, Rama helps prepare for Ram Navami with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Dasharatha explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry gratitude into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Ram Navami.",
      "valueExplained": "Kindness can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Ram Navami story showed kindness?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show kindness during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ram Navami celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Hanuman Jayanti Story of Temple Courtyard 19",
    "shortTitle": "Hanuman Jayanti Story of Temple C",
    "summary": "A child-safe Hanuman Jayanti retelling set around temple courtyard that highlights courage and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Hanuman Jayanti.",
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
    "primaryValue": "Courage",
    "secondaryValues": [
      "Sharing",
      "Gratitude"
    ],
    "characters": [
      "Hanuman",
      "Rama",
      "Sita"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At temple courtyard, Hanuman helps prepare for Hanuman Jayanti with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Sita explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry devotion into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Hanuman Jayanti.",
      "valueExplained": "Courage can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Hanuman Jayanti story showed courage?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show courage during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Hanuman Jayanti celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Maha Shivratri Story of Kailash 20",
    "shortTitle": "Maha Shivratri Story of Kailash 2",
    "summary": "A child-safe Maha Shivratri retelling set around Kailash that highlights sharing and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Maha Shivratri.",
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
    "primaryValue": "Sharing",
    "secondaryValues": [
      "Gratitude",
      "Devotion"
    ],
    "characters": [
      "Shiva",
      "Parvati",
      "Nandi"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Kailash, Shiva helps prepare for Maha Shivratri with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Nandi explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry patience into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Maha Shivratri.",
      "valueExplained": "Sharing can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Maha Shivratri story showed sharing?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show sharing during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Maha Shivratri celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Diwali Story of Ayodhya 21",
    "shortTitle": "Diwali Story of Ayodhya 21",
    "summary": "A child-safe Diwali retelling set around Ayodhya that highlights gratitude and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Diwali.",
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
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Devotion",
      "Patience"
    ],
    "characters": [
      "Rama",
      "Sita",
      "Lakshmana"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Ayodhya, Rama helps prepare for Diwali with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Lakshmana explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry truthfulness into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Diwali.",
      "valueExplained": "Gratitude can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Diwali story showed gratitude?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show gratitude during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Diwali celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Holi Story of Vrindavan 22",
    "shortTitle": "Holi Story of Vrindavan 22",
    "summary": "A child-safe Holi retelling set around Vrindavan that highlights devotion and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Holi.",
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
    "primaryValue": "Devotion",
    "secondaryValues": [
      "Patience",
      "Truthfulness"
    ],
    "characters": [
      "Krishna",
      "Radha",
      "Yashoda"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Vrindavan, Krishna helps prepare for Holi with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Yashoda explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry care into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Holi.",
      "valueExplained": "Devotion can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Holi story showed devotion?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show devotion during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Holi celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Janmashtami Story of Mathura 23",
    "shortTitle": "Janmashtami Story of Mathura 23",
    "summary": "A child-safe Janmashtami retelling set around Mathura that highlights patience and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Janmashtami.",
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
    "primaryValue": "Patience",
    "secondaryValues": [
      "Truthfulness",
      "Care"
    ],
    "characters": [
      "Krishna",
      "Devaki",
      "Vasudeva"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Mathura, Krishna helps prepare for Janmashtami with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Vasudeva explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry humility into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Janmashtami.",
      "valueExplained": "Patience can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Janmashtami story showed patience?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show patience during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Janmashtami celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Ganesh Chaturthi Story of Kailash 24",
    "shortTitle": "Ganesh Chaturthi Story of Kailash",
    "summary": "A child-safe Ganesh Chaturthi retelling set around Kailash that highlights truthfulness and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Ganesh Chaturthi.",
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
    "primaryValue": "Truthfulness",
    "secondaryValues": [
      "Care",
      "Humility"
    ],
    "characters": [
      "Ganesha",
      "Parvati",
      "Shiva"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Kailash, Ganesha helps prepare for Ganesh Chaturthi with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Shiva explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry service into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Ganesh Chaturthi.",
      "valueExplained": "Truthfulness can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Ganesh Chaturthi story showed truthfulness?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show truthfulness during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ganesh Chaturthi celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Navratri Story of Home Altar 25",
    "shortTitle": "Navratri Story of Home Altar 25",
    "summary": "A child-safe Navratri retelling set around home altar that highlights care and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Navratri.",
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
    "primaryValue": "Care",
    "secondaryValues": [
      "Humility",
      "Service"
    ],
    "characters": [
      "Durga",
      "Parvati",
      "family elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At home altar, Durga helps prepare for Navratri with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, family elders explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry kindness into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Navratri.",
      "valueExplained": "Care can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Navratri story showed care?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show care during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Navratri celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Dussehra Story of Ayodhya 26",
    "shortTitle": "Dussehra Story of Ayodhya 26",
    "summary": "A child-safe Dussehra retelling set around Ayodhya that highlights humility and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Dussehra.",
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
    "primaryValue": "Humility",
    "secondaryValues": [
      "Service",
      "Kindness"
    ],
    "characters": [
      "Rama",
      "Sita",
      "Hanuman"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Ayodhya, Rama helps prepare for Dussehra with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Hanuman explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry courage into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Dussehra.",
      "valueExplained": "Humility can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Dussehra story showed humility?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show humility during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Dussehra celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Raksha Bandhan Story of Family Home 27",
    "shortTitle": "Raksha Bandhan Story of Family Ho",
    "summary": "A child-safe Raksha Bandhan retelling set around family home that highlights service and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Raksha Bandhan.",
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
    "primaryValue": "Service",
    "secondaryValues": [
      "Kindness",
      "Courage"
    ],
    "characters": [
      "sister",
      "brother",
      "grandmother"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At family home, sister helps prepare for Raksha Bandhan with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, grandmother explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry sharing into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Raksha Bandhan.",
      "valueExplained": "Service can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Raksha Bandhan story showed service?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show service during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Raksha Bandhan celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Makar Sankranti Story of Terrace 28",
    "shortTitle": "Makar Sankranti Story of Terrace ",
    "summary": "A child-safe Makar Sankranti retelling set around terrace that highlights kindness and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Makar Sankranti.",
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
      "Courage",
      "Sharing"
    ],
    "characters": [
      "children",
      "grandfather",
      "neighbors"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At terrace, children helps prepare for Makar Sankranti with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, neighbors explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry gratitude into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Makar Sankranti.",
      "valueExplained": "Kindness can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Makar Sankranti story showed kindness?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show kindness during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Makar Sankranti celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Ram Navami Story of Ayodhya Temple 29",
    "shortTitle": "Ram Navami Story of Ayodhya Templ",
    "summary": "A child-safe Ram Navami retelling set around Ayodhya temple that highlights courage and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Ram Navami.",
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
    "primaryValue": "Courage",
    "secondaryValues": [
      "Sharing",
      "Gratitude"
    ],
    "characters": [
      "Rama",
      "Kausalya",
      "Dasharatha"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Ayodhya temple, Rama helps prepare for Ram Navami with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Dasharatha explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry devotion into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Ram Navami.",
      "valueExplained": "Courage can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Ram Navami story showed courage?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show courage during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ram Navami celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Hanuman Jayanti Story of Temple Courtyard 30",
    "shortTitle": "Hanuman Jayanti Story of Temple C",
    "summary": "A child-safe Hanuman Jayanti retelling set around temple courtyard that highlights sharing and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Hanuman Jayanti.",
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
    "primaryValue": "Sharing",
    "secondaryValues": [
      "Gratitude",
      "Devotion"
    ],
    "characters": [
      "Hanuman",
      "Rama",
      "Sita"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At temple courtyard, Hanuman helps prepare for Hanuman Jayanti with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Sita explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry patience into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Hanuman Jayanti.",
      "valueExplained": "Sharing can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Hanuman Jayanti story showed sharing?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show sharing during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Hanuman Jayanti celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Maha Shivratri Story of Kailash 31",
    "shortTitle": "Maha Shivratri Story of Kailash 3",
    "summary": "A child-safe Maha Shivratri retelling set around Kailash that highlights gratitude and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Maha Shivratri.",
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
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Devotion",
      "Patience"
    ],
    "characters": [
      "Shiva",
      "Parvati",
      "Nandi"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Kailash, Shiva helps prepare for Maha Shivratri with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Nandi explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry truthfulness into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Maha Shivratri.",
      "valueExplained": "Gratitude can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Maha Shivratri story showed gratitude?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show gratitude during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Maha Shivratri celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Diwali Story of Ayodhya 32",
    "shortTitle": "Diwali Story of Ayodhya 32",
    "summary": "A child-safe Diwali retelling set around Ayodhya that highlights devotion and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Diwali.",
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
    "primaryValue": "Devotion",
    "secondaryValues": [
      "Patience",
      "Truthfulness"
    ],
    "characters": [
      "Rama",
      "Sita",
      "Lakshmana"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Ayodhya, Rama helps prepare for Diwali with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Lakshmana explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry care into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Diwali.",
      "valueExplained": "Devotion can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Diwali story showed devotion?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show devotion during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Diwali celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Holi Story of Vrindavan 33",
    "shortTitle": "Holi Story of Vrindavan 33",
    "summary": "A child-safe Holi retelling set around Vrindavan that highlights patience and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Holi.",
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
    "primaryValue": "Patience",
    "secondaryValues": [
      "Truthfulness",
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
        "title": "Arrival",
        "text": "At Vrindavan, Krishna helps prepare for Holi with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Yashoda explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry humility into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Holi.",
      "valueExplained": "Patience can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Holi story showed patience?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show patience during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Holi celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Janmashtami Story of Mathura 34",
    "shortTitle": "Janmashtami Story of Mathura 34",
    "summary": "A child-safe Janmashtami retelling set around Mathura that highlights truthfulness and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Janmashtami.",
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
    "primaryValue": "Truthfulness",
    "secondaryValues": [
      "Care",
      "Humility"
    ],
    "characters": [
      "Krishna",
      "Devaki",
      "Vasudeva"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Mathura, Krishna helps prepare for Janmashtami with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Vasudeva explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry service into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Janmashtami.",
      "valueExplained": "Truthfulness can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Janmashtami story showed truthfulness?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show truthfulness during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Janmashtami celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Ganesh Chaturthi Story of Kailash 35",
    "shortTitle": "Ganesh Chaturthi Story of Kailash",
    "summary": "A child-safe Ganesh Chaturthi retelling set around Kailash that highlights care and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Ganesh Chaturthi.",
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
    "primaryValue": "Care",
    "secondaryValues": [
      "Humility",
      "Service"
    ],
    "characters": [
      "Ganesha",
      "Parvati",
      "Shiva"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Kailash, Ganesha helps prepare for Ganesh Chaturthi with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Shiva explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry kindness into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Ganesh Chaturthi.",
      "valueExplained": "Care can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Ganesh Chaturthi story showed care?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show care during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ganesh Chaturthi celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Navratri Story of Home Altar 36",
    "shortTitle": "Navratri Story of Home Altar 36",
    "summary": "A child-safe Navratri retelling set around home altar that highlights humility and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Navratri.",
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
    "primaryValue": "Humility",
    "secondaryValues": [
      "Service",
      "Kindness"
    ],
    "characters": [
      "Durga",
      "Parvati",
      "family elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At home altar, Durga helps prepare for Navratri with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, family elders explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry courage into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Navratri.",
      "valueExplained": "Humility can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Navratri story showed humility?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show humility during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Navratri celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Dussehra Story of Ayodhya 37",
    "shortTitle": "Dussehra Story of Ayodhya 37",
    "summary": "A child-safe Dussehra retelling set around Ayodhya that highlights service and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Dussehra.",
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
    "primaryValue": "Service",
    "secondaryValues": [
      "Kindness",
      "Courage"
    ],
    "characters": [
      "Rama",
      "Sita",
      "Hanuman"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Ayodhya, Rama helps prepare for Dussehra with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Hanuman explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry sharing into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Dussehra.",
      "valueExplained": "Service can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Dussehra story showed service?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show service during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Dussehra celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Raksha Bandhan Story of Family Home 38",
    "shortTitle": "Raksha Bandhan Story of Family Ho",
    "summary": "A child-safe Raksha Bandhan retelling set around family home that highlights kindness and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Raksha Bandhan.",
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
      "Courage",
      "Sharing"
    ],
    "characters": [
      "sister",
      "brother",
      "grandmother"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At family home, sister helps prepare for Raksha Bandhan with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, grandmother explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry gratitude into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Raksha Bandhan.",
      "valueExplained": "Kindness can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Raksha Bandhan story showed kindness?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show kindness during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Raksha Bandhan celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Makar Sankranti Story of Terrace 39",
    "shortTitle": "Makar Sankranti Story of Terrace ",
    "summary": "A child-safe Makar Sankranti retelling set around terrace that highlights courage and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Makar Sankranti.",
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
    "primaryValue": "Courage",
    "secondaryValues": [
      "Sharing",
      "Gratitude"
    ],
    "characters": [
      "children",
      "grandfather",
      "neighbors"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At terrace, children helps prepare for Makar Sankranti with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, neighbors explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry devotion into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Makar Sankranti.",
      "valueExplained": "Courage can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Makar Sankranti story showed courage?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show courage during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Makar Sankranti celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Ram Navami Story of Ayodhya Temple 40",
    "shortTitle": "Ram Navami Story of Ayodhya Templ",
    "summary": "A child-safe Ram Navami retelling set around Ayodhya temple that highlights sharing and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Ram Navami.",
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
    "primaryValue": "Sharing",
    "secondaryValues": [
      "Gratitude",
      "Devotion"
    ],
    "characters": [
      "Rama",
      "Kausalya",
      "Dasharatha"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Ayodhya temple, Rama helps prepare for Ram Navami with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Dasharatha explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry patience into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Ram Navami.",
      "valueExplained": "Sharing can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Ram Navami story showed sharing?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show sharing during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ram Navami celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Hanuman Jayanti Story of Temple Courtyard 41",
    "shortTitle": "Hanuman Jayanti Story of Temple C",
    "summary": "A child-safe Hanuman Jayanti retelling set around temple courtyard that highlights gratitude and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Hanuman Jayanti.",
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
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Devotion",
      "Patience"
    ],
    "characters": [
      "Hanuman",
      "Rama",
      "Sita"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At temple courtyard, Hanuman helps prepare for Hanuman Jayanti with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Sita explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry truthfulness into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Hanuman Jayanti.",
      "valueExplained": "Gratitude can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Hanuman Jayanti story showed gratitude?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show gratitude during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Hanuman Jayanti celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Maha Shivratri Story of Kailash 42",
    "shortTitle": "Maha Shivratri Story of Kailash 4",
    "summary": "A child-safe Maha Shivratri retelling set around Kailash that highlights devotion and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Maha Shivratri.",
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
    "primaryValue": "Devotion",
    "secondaryValues": [
      "Patience",
      "Truthfulness"
    ],
    "characters": [
      "Shiva",
      "Parvati",
      "Nandi"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Kailash, Shiva helps prepare for Maha Shivratri with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Nandi explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry care into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Maha Shivratri.",
      "valueExplained": "Devotion can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Maha Shivratri story showed devotion?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show devotion during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Maha Shivratri celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Diwali Story of Ayodhya 43",
    "shortTitle": "Diwali Story of Ayodhya 43",
    "summary": "A child-safe Diwali retelling set around Ayodhya that highlights patience and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Diwali.",
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
    "primaryValue": "Patience",
    "secondaryValues": [
      "Truthfulness",
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
        "title": "Arrival",
        "text": "At Ayodhya, Rama helps prepare for Diwali with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Lakshmana explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry humility into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Diwali.",
      "valueExplained": "Patience can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Diwali story showed patience?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show patience during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Diwali celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Holi Story of Vrindavan 44",
    "shortTitle": "Holi Story of Vrindavan 44",
    "summary": "A child-safe Holi retelling set around Vrindavan that highlights truthfulness and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Holi.",
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
    "primaryValue": "Truthfulness",
    "secondaryValues": [
      "Care",
      "Humility"
    ],
    "characters": [
      "Krishna",
      "Radha",
      "Yashoda"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Vrindavan, Krishna helps prepare for Holi with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Yashoda explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry service into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Holi.",
      "valueExplained": "Truthfulness can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Holi story showed truthfulness?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show truthfulness during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Holi celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Janmashtami Story of Mathura 45",
    "shortTitle": "Janmashtami Story of Mathura 45",
    "summary": "A child-safe Janmashtami retelling set around Mathura that highlights care and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Janmashtami.",
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
    "primaryValue": "Care",
    "secondaryValues": [
      "Humility",
      "Service"
    ],
    "characters": [
      "Krishna",
      "Devaki",
      "Vasudeva"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Mathura, Krishna helps prepare for Janmashtami with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Vasudeva explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry kindness into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Janmashtami.",
      "valueExplained": "Care can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Janmashtami story showed care?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show care during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Janmashtami celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Ganesh Chaturthi Story of Kailash 46",
    "shortTitle": "Ganesh Chaturthi Story of Kailash",
    "summary": "A child-safe Ganesh Chaturthi retelling set around Kailash that highlights humility and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Ganesh Chaturthi.",
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
    "primaryValue": "Humility",
    "secondaryValues": [
      "Service",
      "Kindness"
    ],
    "characters": [
      "Ganesha",
      "Parvati",
      "Shiva"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Kailash, Ganesha helps prepare for Ganesh Chaturthi with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Shiva explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry courage into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Ganesh Chaturthi.",
      "valueExplained": "Humility can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Ganesh Chaturthi story showed humility?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show humility during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ganesh Chaturthi celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Navratri Story of Home Altar 47",
    "shortTitle": "Navratri Story of Home Altar 47",
    "summary": "A child-safe Navratri retelling set around home altar that highlights service and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Navratri.",
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
    "primaryValue": "Service",
    "secondaryValues": [
      "Kindness",
      "Courage"
    ],
    "characters": [
      "Durga",
      "Parvati",
      "family elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At home altar, Durga helps prepare for Navratri with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, family elders explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry sharing into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Navratri.",
      "valueExplained": "Service can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Navratri story showed service?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show service during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Navratri celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Dussehra Story of Ayodhya 48",
    "shortTitle": "Dussehra Story of Ayodhya 48",
    "summary": "A child-safe Dussehra retelling set around Ayodhya that highlights kindness and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Dussehra.",
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
      "Courage",
      "Sharing"
    ],
    "characters": [
      "Rama",
      "Sita",
      "Hanuman"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Ayodhya, Rama helps prepare for Dussehra with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Hanuman explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry gratitude into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Dussehra.",
      "valueExplained": "Kindness can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Dussehra story showed kindness?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show kindness during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Dussehra celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Raksha Bandhan Story of Family Home 49",
    "shortTitle": "Raksha Bandhan Story of Family Ho",
    "summary": "A child-safe Raksha Bandhan retelling set around family home that highlights courage and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Raksha Bandhan.",
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
    "primaryValue": "Courage",
    "secondaryValues": [
      "Sharing",
      "Gratitude"
    ],
    "characters": [
      "sister",
      "brother",
      "grandmother"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At family home, sister helps prepare for Raksha Bandhan with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, grandmother explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry devotion into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Raksha Bandhan.",
      "valueExplained": "Courage can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Raksha Bandhan story showed courage?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show courage during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Raksha Bandhan celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Makar Sankranti Story of Terrace 50",
    "shortTitle": "Makar Sankranti Story of Terrace ",
    "summary": "A child-safe Makar Sankranti retelling set around terrace that highlights sharing and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Makar Sankranti.",
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
    "primaryValue": "Sharing",
    "secondaryValues": [
      "Gratitude",
      "Devotion"
    ],
    "characters": [
      "children",
      "grandfather",
      "neighbors"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At terrace, children helps prepare for Makar Sankranti with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, neighbors explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry patience into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Makar Sankranti.",
      "valueExplained": "Sharing can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Makar Sankranti story showed sharing?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show sharing during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Makar Sankranti celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Ram Navami Story of Ayodhya Temple 51",
    "shortTitle": "Ram Navami Story of Ayodhya Templ",
    "summary": "A child-safe Ram Navami retelling set around Ayodhya temple that highlights gratitude and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Ram Navami.",
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
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Devotion",
      "Patience"
    ],
    "characters": [
      "Rama",
      "Kausalya",
      "Dasharatha"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Ayodhya temple, Rama helps prepare for Ram Navami with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Dasharatha explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry truthfulness into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Ram Navami.",
      "valueExplained": "Gratitude can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Ram Navami story showed gratitude?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show gratitude during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ram Navami celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Hanuman Jayanti Story of Temple Courtyard 52",
    "shortTitle": "Hanuman Jayanti Story of Temple C",
    "summary": "A child-safe Hanuman Jayanti retelling set around temple courtyard that highlights devotion and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Hanuman Jayanti.",
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
    "primaryValue": "Devotion",
    "secondaryValues": [
      "Patience",
      "Truthfulness"
    ],
    "characters": [
      "Hanuman",
      "Rama",
      "Sita"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At temple courtyard, Hanuman helps prepare for Hanuman Jayanti with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Sita explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry care into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Hanuman Jayanti.",
      "valueExplained": "Devotion can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Hanuman Jayanti story showed devotion?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show devotion during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Hanuman Jayanti celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Maha Shivratri Story of Kailash 53",
    "shortTitle": "Maha Shivratri Story of Kailash 5",
    "summary": "A child-safe Maha Shivratri retelling set around Kailash that highlights patience and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Maha Shivratri.",
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
    "primaryValue": "Patience",
    "secondaryValues": [
      "Truthfulness",
      "Care"
    ],
    "characters": [
      "Shiva",
      "Parvati",
      "Nandi"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Kailash, Shiva helps prepare for Maha Shivratri with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Nandi explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry humility into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Maha Shivratri.",
      "valueExplained": "Patience can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Maha Shivratri story showed patience?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show patience during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Maha Shivratri celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Diwali Story of Ayodhya 54",
    "shortTitle": "Diwali Story of Ayodhya 54",
    "summary": "A child-safe Diwali retelling set around Ayodhya that highlights truthfulness and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Diwali.",
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
    "primaryValue": "Truthfulness",
    "secondaryValues": [
      "Care",
      "Humility"
    ],
    "characters": [
      "Rama",
      "Sita",
      "Lakshmana"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Ayodhya, Rama helps prepare for Diwali with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Lakshmana explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry service into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Diwali.",
      "valueExplained": "Truthfulness can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Diwali story showed truthfulness?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show truthfulness during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Diwali celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Holi Story of Vrindavan 55",
    "shortTitle": "Holi Story of Vrindavan 55",
    "summary": "A child-safe Holi retelling set around Vrindavan that highlights care and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Holi.",
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
    "primaryValue": "Care",
    "secondaryValues": [
      "Humility",
      "Service"
    ],
    "characters": [
      "Krishna",
      "Radha",
      "Yashoda"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Vrindavan, Krishna helps prepare for Holi with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Yashoda explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry kindness into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Holi.",
      "valueExplained": "Care can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Holi story showed care?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show care during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Holi celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Janmashtami Story of Mathura 56",
    "shortTitle": "Janmashtami Story of Mathura 56",
    "summary": "A child-safe Janmashtami retelling set around Mathura that highlights humility and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Janmashtami.",
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
    "primaryValue": "Humility",
    "secondaryValues": [
      "Service",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Devaki",
      "Vasudeva"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Mathura, Krishna helps prepare for Janmashtami with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Vasudeva explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry courage into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Janmashtami.",
      "valueExplained": "Humility can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Janmashtami story showed humility?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show humility during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Janmashtami celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Ganesh Chaturthi Story of Kailash 57",
    "shortTitle": "Ganesh Chaturthi Story of Kailash",
    "summary": "A child-safe Ganesh Chaturthi retelling set around Kailash that highlights service and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Ganesh Chaturthi.",
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
    "primaryValue": "Service",
    "secondaryValues": [
      "Kindness",
      "Courage"
    ],
    "characters": [
      "Ganesha",
      "Parvati",
      "Shiva"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Kailash, Ganesha helps prepare for Ganesh Chaturthi with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Shiva explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry sharing into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Ganesh Chaturthi.",
      "valueExplained": "Service can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Ganesh Chaturthi story showed service?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show service during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ganesh Chaturthi celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Navratri Story of Home Altar 58",
    "shortTitle": "Navratri Story of Home Altar 58",
    "summary": "A child-safe Navratri retelling set around home altar that highlights kindness and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Navratri.",
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
      "Courage",
      "Sharing"
    ],
    "characters": [
      "Durga",
      "Parvati",
      "family elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At home altar, Durga helps prepare for Navratri with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, family elders explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry gratitude into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Navratri.",
      "valueExplained": "Kindness can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Navratri story showed kindness?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show kindness during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Navratri celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Dussehra Story of Ayodhya 59",
    "shortTitle": "Dussehra Story of Ayodhya 59",
    "summary": "A child-safe Dussehra retelling set around Ayodhya that highlights courage and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Dussehra.",
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
    "primaryValue": "Courage",
    "secondaryValues": [
      "Sharing",
      "Gratitude"
    ],
    "characters": [
      "Rama",
      "Sita",
      "Hanuman"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Ayodhya, Rama helps prepare for Dussehra with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Hanuman explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry devotion into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Dussehra.",
      "valueExplained": "Courage can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Dussehra story showed courage?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show courage during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Dussehra celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Raksha Bandhan Story of Family Home 60",
    "shortTitle": "Raksha Bandhan Story of Family Ho",
    "summary": "A child-safe Raksha Bandhan retelling set around family home that highlights sharing and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Raksha Bandhan.",
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
    "primaryValue": "Sharing",
    "secondaryValues": [
      "Gratitude",
      "Devotion"
    ],
    "characters": [
      "sister",
      "brother",
      "grandmother"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At family home, sister helps prepare for Raksha Bandhan with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, grandmother explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry patience into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Raksha Bandhan.",
      "valueExplained": "Sharing can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Raksha Bandhan story showed sharing?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show sharing during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Raksha Bandhan celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Makar Sankranti Story of Terrace 61",
    "shortTitle": "Makar Sankranti Story of Terrace ",
    "summary": "A child-safe Makar Sankranti retelling set around terrace that highlights gratitude and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Makar Sankranti.",
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
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Devotion",
      "Patience"
    ],
    "characters": [
      "children",
      "grandfather",
      "neighbors"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At terrace, children helps prepare for Makar Sankranti with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, neighbors explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry truthfulness into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Makar Sankranti.",
      "valueExplained": "Gratitude can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Makar Sankranti story showed gratitude?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show gratitude during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Makar Sankranti celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Ram Navami Story of Ayodhya Temple 62",
    "shortTitle": "Ram Navami Story of Ayodhya Templ",
    "summary": "A child-safe Ram Navami retelling set around Ayodhya temple that highlights devotion and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Ram Navami.",
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
    "primaryValue": "Devotion",
    "secondaryValues": [
      "Patience",
      "Truthfulness"
    ],
    "characters": [
      "Rama",
      "Kausalya",
      "Dasharatha"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Ayodhya temple, Rama helps prepare for Ram Navami with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Dasharatha explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry care into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Ram Navami.",
      "valueExplained": "Devotion can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Ram Navami story showed devotion?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show devotion during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ram Navami celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Hanuman Jayanti Story of Temple Courtyard 63",
    "shortTitle": "Hanuman Jayanti Story of Temple C",
    "summary": "A child-safe Hanuman Jayanti retelling set around temple courtyard that highlights patience and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Hanuman Jayanti.",
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
    "primaryValue": "Patience",
    "secondaryValues": [
      "Truthfulness",
      "Care"
    ],
    "characters": [
      "Hanuman",
      "Rama",
      "Sita"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At temple courtyard, Hanuman helps prepare for Hanuman Jayanti with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Sita explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry humility into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Hanuman Jayanti.",
      "valueExplained": "Patience can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Hanuman Jayanti story showed patience?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show patience during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Hanuman Jayanti celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Maha Shivratri Story of Kailash 64",
    "shortTitle": "Maha Shivratri Story of Kailash 6",
    "summary": "A child-safe Maha Shivratri retelling set around Kailash that highlights truthfulness and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Maha Shivratri.",
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
    "primaryValue": "Truthfulness",
    "secondaryValues": [
      "Care",
      "Humility"
    ],
    "characters": [
      "Shiva",
      "Parvati",
      "Nandi"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Kailash, Shiva helps prepare for Maha Shivratri with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Nandi explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry service into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Maha Shivratri.",
      "valueExplained": "Truthfulness can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Maha Shivratri story showed truthfulness?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show truthfulness during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Maha Shivratri celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Diwali Story of Ayodhya 65",
    "shortTitle": "Diwali Story of Ayodhya 65",
    "summary": "A child-safe Diwali retelling set around Ayodhya that highlights care and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Diwali.",
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
    "primaryValue": "Care",
    "secondaryValues": [
      "Humility",
      "Service"
    ],
    "characters": [
      "Rama",
      "Sita",
      "Lakshmana"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Ayodhya, Rama helps prepare for Diwali with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Lakshmana explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry kindness into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Diwali.",
      "valueExplained": "Care can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Diwali story showed care?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show care during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Diwali celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Holi Story of Vrindavan 66",
    "shortTitle": "Holi Story of Vrindavan 66",
    "summary": "A child-safe Holi retelling set around Vrindavan that highlights humility and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Holi.",
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
    "primaryValue": "Humility",
    "secondaryValues": [
      "Service",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Radha",
      "Yashoda"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Vrindavan, Krishna helps prepare for Holi with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Yashoda explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry courage into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Holi.",
      "valueExplained": "Humility can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Holi story showed humility?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show humility during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Holi celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Janmashtami Story of Mathura 67",
    "shortTitle": "Janmashtami Story of Mathura 67",
    "summary": "A child-safe Janmashtami retelling set around Mathura that highlights service and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Janmashtami.",
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
    "primaryValue": "Service",
    "secondaryValues": [
      "Kindness",
      "Courage"
    ],
    "characters": [
      "Krishna",
      "Devaki",
      "Vasudeva"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Mathura, Krishna helps prepare for Janmashtami with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Vasudeva explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry sharing into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Janmashtami.",
      "valueExplained": "Service can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Janmashtami story showed service?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show service during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Janmashtami celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Ganesh Chaturthi Story of Kailash 68",
    "shortTitle": "Ganesh Chaturthi Story of Kailash",
    "summary": "A child-safe Ganesh Chaturthi retelling set around Kailash that highlights kindness and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Ganesh Chaturthi.",
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
      "Courage",
      "Sharing"
    ],
    "characters": [
      "Ganesha",
      "Parvati",
      "Shiva"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Kailash, Ganesha helps prepare for Ganesh Chaturthi with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Shiva explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry gratitude into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Ganesh Chaturthi.",
      "valueExplained": "Kindness can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Ganesh Chaturthi story showed kindness?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show kindness during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ganesh Chaturthi celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Navratri Story of Home Altar 69",
    "shortTitle": "Navratri Story of Home Altar 69",
    "summary": "A child-safe Navratri retelling set around home altar that highlights courage and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Navratri.",
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
    "primaryValue": "Courage",
    "secondaryValues": [
      "Sharing",
      "Gratitude"
    ],
    "characters": [
      "Durga",
      "Parvati",
      "family elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At home altar, Durga helps prepare for Navratri with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, family elders explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry devotion into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Navratri.",
      "valueExplained": "Courage can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Navratri story showed courage?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show courage during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Navratri celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Dussehra Story of Ayodhya 70",
    "shortTitle": "Dussehra Story of Ayodhya 70",
    "summary": "A child-safe Dussehra retelling set around Ayodhya that highlights sharing and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Dussehra.",
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
    "primaryValue": "Sharing",
    "secondaryValues": [
      "Gratitude",
      "Devotion"
    ],
    "characters": [
      "Rama",
      "Sita",
      "Hanuman"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Ayodhya, Rama helps prepare for Dussehra with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Hanuman explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry patience into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Dussehra.",
      "valueExplained": "Sharing can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Dussehra story showed sharing?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show sharing during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Dussehra celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Raksha Bandhan Story of Family Home 71",
    "shortTitle": "Raksha Bandhan Story of Family Ho",
    "summary": "A child-safe Raksha Bandhan retelling set around family home that highlights gratitude and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Raksha Bandhan.",
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
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Devotion",
      "Patience"
    ],
    "characters": [
      "sister",
      "brother",
      "grandmother"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At family home, sister helps prepare for Raksha Bandhan with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, grandmother explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry truthfulness into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Raksha Bandhan.",
      "valueExplained": "Gratitude can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Raksha Bandhan story showed gratitude?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show gratitude during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Raksha Bandhan celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Makar Sankranti Story of Terrace 72",
    "shortTitle": "Makar Sankranti Story of Terrace ",
    "summary": "A child-safe Makar Sankranti retelling set around terrace that highlights devotion and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Makar Sankranti.",
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
    "primaryValue": "Devotion",
    "secondaryValues": [
      "Patience",
      "Truthfulness"
    ],
    "characters": [
      "children",
      "grandfather",
      "neighbors"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At terrace, children helps prepare for Makar Sankranti with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, neighbors explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry care into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Makar Sankranti.",
      "valueExplained": "Devotion can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Makar Sankranti story showed devotion?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show devotion during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Makar Sankranti celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Ram Navami Story of Ayodhya Temple 73",
    "shortTitle": "Ram Navami Story of Ayodhya Templ",
    "summary": "A child-safe Ram Navami retelling set around Ayodhya temple that highlights patience and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Ram Navami.",
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
    "primaryValue": "Patience",
    "secondaryValues": [
      "Truthfulness",
      "Care"
    ],
    "characters": [
      "Rama",
      "Kausalya",
      "Dasharatha"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Ayodhya temple, Rama helps prepare for Ram Navami with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Dasharatha explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry humility into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Ram Navami.",
      "valueExplained": "Patience can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Ram Navami story showed patience?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show patience during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ram Navami celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Hanuman Jayanti Story of Temple Courtyard 74",
    "shortTitle": "Hanuman Jayanti Story of Temple C",
    "summary": "A child-safe Hanuman Jayanti retelling set around temple courtyard that highlights truthfulness and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Hanuman Jayanti.",
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
    "primaryValue": "Truthfulness",
    "secondaryValues": [
      "Care",
      "Humility"
    ],
    "characters": [
      "Hanuman",
      "Rama",
      "Sita"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At temple courtyard, Hanuman helps prepare for Hanuman Jayanti with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Sita explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry service into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Hanuman Jayanti.",
      "valueExplained": "Truthfulness can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Hanuman Jayanti story showed truthfulness?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show truthfulness during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Hanuman Jayanti celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Maha Shivratri Story of Kailash 75",
    "shortTitle": "Maha Shivratri Story of Kailash 7",
    "summary": "A child-safe Maha Shivratri retelling set around Kailash that highlights care and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Maha Shivratri.",
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
    "primaryValue": "Care",
    "secondaryValues": [
      "Humility",
      "Service"
    ],
    "characters": [
      "Shiva",
      "Parvati",
      "Nandi"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Kailash, Shiva helps prepare for Maha Shivratri with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Nandi explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry kindness into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Maha Shivratri.",
      "valueExplained": "Care can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Maha Shivratri story showed care?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show care during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Maha Shivratri celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Diwali Story of Ayodhya 76",
    "shortTitle": "Diwali Story of Ayodhya 76",
    "summary": "A child-safe Diwali retelling set around Ayodhya that highlights humility and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Diwali.",
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
    "primaryValue": "Humility",
    "secondaryValues": [
      "Service",
      "Kindness"
    ],
    "characters": [
      "Rama",
      "Sita",
      "Lakshmana"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Ayodhya, Rama helps prepare for Diwali with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Lakshmana explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry courage into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Diwali.",
      "valueExplained": "Humility can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Diwali story showed humility?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show humility during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Diwali celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Holi Story of Vrindavan 77",
    "shortTitle": "Holi Story of Vrindavan 77",
    "summary": "A child-safe Holi retelling set around Vrindavan that highlights service and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Holi.",
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
    "primaryValue": "Service",
    "secondaryValues": [
      "Kindness",
      "Courage"
    ],
    "characters": [
      "Krishna",
      "Radha",
      "Yashoda"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Vrindavan, Krishna helps prepare for Holi with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Yashoda explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry sharing into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Holi.",
      "valueExplained": "Service can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Holi story showed service?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show service during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Holi celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Janmashtami Story of Mathura 78",
    "shortTitle": "Janmashtami Story of Mathura 78",
    "summary": "A child-safe Janmashtami retelling set around Mathura that highlights kindness and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Janmashtami.",
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
      "Courage",
      "Sharing"
    ],
    "characters": [
      "Krishna",
      "Devaki",
      "Vasudeva"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Mathura, Krishna helps prepare for Janmashtami with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Vasudeva explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry gratitude into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Janmashtami.",
      "valueExplained": "Kindness can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Janmashtami story showed kindness?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show kindness during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Janmashtami celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Ganesh Chaturthi Story of Kailash 79",
    "shortTitle": "Ganesh Chaturthi Story of Kailash",
    "summary": "A child-safe Ganesh Chaturthi retelling set around Kailash that highlights courage and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Ganesh Chaturthi.",
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
    "primaryValue": "Courage",
    "secondaryValues": [
      "Sharing",
      "Gratitude"
    ],
    "characters": [
      "Ganesha",
      "Parvati",
      "Shiva"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Kailash, Ganesha helps prepare for Ganesh Chaturthi with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Shiva explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry devotion into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Ganesh Chaturthi.",
      "valueExplained": "Courage can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Ganesh Chaturthi story showed courage?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show courage during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ganesh Chaturthi celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Navratri Story of Home Altar 80",
    "shortTitle": "Navratri Story of Home Altar 80",
    "summary": "A child-safe Navratri retelling set around home altar that highlights sharing and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Navratri.",
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
    "primaryValue": "Sharing",
    "secondaryValues": [
      "Gratitude",
      "Devotion"
    ],
    "characters": [
      "Durga",
      "Parvati",
      "family elders"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At home altar, Durga helps prepare for Navratri with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, family elders explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry patience into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Navratri.",
      "valueExplained": "Sharing can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Navratri story showed sharing?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show sharing during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Navratri celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Dussehra Story of Ayodhya 81",
    "shortTitle": "Dussehra Story of Ayodhya 81",
    "summary": "A child-safe Dussehra retelling set around Ayodhya that highlights gratitude and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Dussehra.",
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
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Devotion",
      "Patience"
    ],
    "characters": [
      "Rama",
      "Sita",
      "Hanuman"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Ayodhya, Rama helps prepare for Dussehra with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Hanuman explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry truthfulness into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Dussehra.",
      "valueExplained": "Gratitude can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Dussehra story showed gratitude?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show gratitude during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Dussehra celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Raksha Bandhan Story of Family Home 82",
    "shortTitle": "Raksha Bandhan Story of Family Ho",
    "summary": "A child-safe Raksha Bandhan retelling set around family home that highlights devotion and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Raksha Bandhan.",
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
    "primaryValue": "Devotion",
    "secondaryValues": [
      "Patience",
      "Truthfulness"
    ],
    "characters": [
      "sister",
      "brother",
      "grandmother"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At family home, sister helps prepare for Raksha Bandhan with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, grandmother explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry care into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Raksha Bandhan.",
      "valueExplained": "Devotion can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Raksha Bandhan story showed devotion?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show devotion during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Raksha Bandhan celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Makar Sankranti Story of Terrace 83",
    "shortTitle": "Makar Sankranti Story of Terrace ",
    "summary": "A child-safe Makar Sankranti retelling set around terrace that highlights patience and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Makar Sankranti.",
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
    "primaryValue": "Patience",
    "secondaryValues": [
      "Truthfulness",
      "Care"
    ],
    "characters": [
      "children",
      "grandfather",
      "neighbors"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At terrace, children helps prepare for Makar Sankranti with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, neighbors explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry humility into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Makar Sankranti.",
      "valueExplained": "Patience can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Makar Sankranti story showed patience?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show patience during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Makar Sankranti celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Ram Navami Story of Ayodhya Temple 84",
    "shortTitle": "Ram Navami Story of Ayodhya Templ",
    "summary": "A child-safe Ram Navami retelling set around Ayodhya temple that highlights truthfulness and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Ram Navami.",
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
    "primaryValue": "Truthfulness",
    "secondaryValues": [
      "Care",
      "Humility"
    ],
    "characters": [
      "Rama",
      "Kausalya",
      "Dasharatha"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Ayodhya temple, Rama helps prepare for Ram Navami with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Dasharatha explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry service into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Ram Navami.",
      "valueExplained": "Truthfulness can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Ram Navami story showed truthfulness?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show truthfulness during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Ram Navami celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Hanuman Jayanti Story of Temple Courtyard 85",
    "shortTitle": "Hanuman Jayanti Story of Temple C",
    "summary": "A child-safe Hanuman Jayanti retelling set around temple courtyard that highlights care and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Hanuman Jayanti.",
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
    "primaryValue": "Care",
    "secondaryValues": [
      "Humility",
      "Service"
    ],
    "characters": [
      "Hanuman",
      "Rama",
      "Sita"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At temple courtyard, Hanuman helps prepare for Hanuman Jayanti with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Sita explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry kindness into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Hanuman Jayanti.",
      "valueExplained": "Care can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Hanuman Jayanti story showed care?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show care during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Hanuman Jayanti celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Maha Shivratri Story of Kailash 86",
    "shortTitle": "Maha Shivratri Story of Kailash 8",
    "summary": "A child-safe Maha Shivratri retelling set around Kailash that highlights humility and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Maha Shivratri.",
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
    "primaryValue": "Humility",
    "secondaryValues": [
      "Service",
      "Kindness"
    ],
    "characters": [
      "Shiva",
      "Parvati",
      "Nandi"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Kailash, Shiva helps prepare for Maha Shivratri with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Nandi explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry courage into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Maha Shivratri.",
      "valueExplained": "Humility can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Maha Shivratri story showed humility?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show humility during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Maha Shivratri celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
    "title": "Diwali Story of Ayodhya 87",
    "shortTitle": "Diwali Story of Ayodhya 87",
    "summary": "A child-safe Diwali retelling set around Ayodhya that highlights service and family warmth.",
    "sourceTradition": "Festival Stories",
    "sourceTextOrTraditionNote": "Child-safe family retelling for Diwali.",
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
    "primaryValue": "Service",
    "secondaryValues": [
      "Kindness",
      "Courage"
    ],
    "characters": [
      "Rama",
      "Sita",
      "Lakshmana"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Arrival",
        "text": "At Ayodhya, Rama helps prepare for Diwali with steady hands and a calm heart."
      },
      {
        "id": "panel-2",
        "title": "Preparation",
        "text": "As lamps and flowers are arranged, Lakshmana explains why this festival remembers love, duty, and gratitude."
      },
      {
        "id": "panel-3",
        "title": "Choice",
        "text": "A small challenge appears when supplies run low, and the children choose sharing so everyone can join the celebration."
      },
      {
        "id": "panel-4",
        "title": "Blessing",
        "text": "The evening closes with prayer, gentle smiles, and a promise to carry sharing into tomorrow."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe family retelling for Diwali.",
      "valueExplained": "Service can be practiced through festival preparation and care.",
      "discussionPrompt": "Which choice in this Diwali story showed service?",
      "practicePrompt": "Choose one small festival kindness to practice this week.",
      "cautionNote": "Keep discussion gentle and age-appropriate."
    },
    "reflectionPrompt": "How can you show service during your next family celebration?",
    "ritualPrompt": "Take three breaths and offer a quiet thank-you.",
    "completionBlessing": "May your home be filled with light, care, and peace.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Diwali celebration with family warmth and reverence.",
      "styleGuidance": "Warm festive colors with child-safe expressions.",
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
