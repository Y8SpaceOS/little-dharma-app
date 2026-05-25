import type { DharmaJourney, Story, StoryPack } from '@/types/contentModel';
import type { StoryExperienceCategoryId } from '@/types/storyExperienceIndex';

type ExtendedStory = Story & { storyId: string; primaryCategoryId: StoryExperienceCategoryId; secondaryCategoryIds: StoryExperienceCategoryId[]; readinessStatus: 'metadata_only' | 'qa_ready'; audioStatus: 'script_needed' | 'script_ready'; journeyStatus: 'journey_ordered'; audioScript?: { narrationScript: string; voiceDirection: string; pronunciationNotes: string; pacingNotes: string; audioReadinessIntent: 'ready' }; };

export const bedtimeValuesExpansionPackV1Stories: ExtendedStory[] = [
  {
    "id": "bedtime-values-exp-v1-001",
    "storyId": "bedtime-values-exp-v1-001",
    "slug": "bedtime-values-exp-v1-001",
    "title": "Yashoda’s Soft Lamp",
    "shortTitle": "Yashoda’s Soft Lamp",
    "summary": "In Gokul, Yashoda’s evening lamp helps Krishna settle, and the family practices gentle bedtime care.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Bhagavata family bedtime retelling in Gokul.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 1,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Care",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Yashoda",
      "Krishna",
      "Nanda"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In Nanda’s courtyard in Gokul, Yashoda shields a small sesame-oil lamp from the breeze while Krishna rubs his sleepy eyes."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "She wipes butter from Krishna’s fingers, hums a lullaby, and asks him to place his wooden flute beside the bed mat."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "When milk spills near the lamp, Krishna admits it quickly; Yashoda smiles and they clean together before anyone slips."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "The lamp glows softly as Nanda offers a bedtime blessing, and Krishna sleeps knowing truth and care keep a home peaceful."
      }
    ],
    "parentNote": {
      "sourceContext": "Bhagavata family bedtime retelling in Gokul.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Why did Yashoda praise Krishna for telling the truth about the spilled milk?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What small truth can you share at bedtime so tomorrow begins peacefully?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
      "narrationScript": "Yashoda’s Soft Lamp. In Gokul, Yashoda’s evening lamp helps Krishna settle, and the family practices gentle bedtime care.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow bedtime pacing with gentle pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-002",
    "storyId": "bedtime-values-exp-v1-002",
    "slug": "bedtime-values-exp-v1-002",
    "title": "Ganesha Listens Before Sleep",
    "shortTitle": "Ganesha Listens Before Sleep",
    "summary": "At Kailash, Ganesha pauses to listen to Parvati before resting, showing patience and respect.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Family-framed Kailash retelling centered on listening and patience.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 2,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Listening",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Ganesha",
      "Parvati",
      "Shiva"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In a quiet hall on Mount Kailash, Ganesha curls near Parvati’s shawl as moonlight touches the doorway."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "Before lying down, he notices Shiva speaking softly and waits without interrupting."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Parvati thanks Ganesha for listening first, then asks him to repeat the plan for morning prayers and flowers."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "Ganesha repeats each step carefully, bows, and sleeps with calm confidence because listening made everything clear."
      }
    ],
    "parentNote": {
      "sourceContext": "Family-framed Kailash retelling centered on listening and patience.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "How did listening help Ganesha remember what to do in the morning?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "Who can you listen to fully tonight before you answer?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
      "narrationScript": "Ganesha Listens Before Sleep. At Kailash, Ganesha pauses to listen to Parvati before resting, showing patience and respect.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow bedtime pacing with gentle pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-003",
    "storyId": "bedtime-values-exp-v1-003",
    "slug": "bedtime-values-exp-v1-003",
    "title": "Hanuman’s Quiet Prayer",
    "shortTitle": "Hanuman’s Quiet Prayer",
    "summary": "Hanuman whispers Rama’s name before sleep and chooses service with humility.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Devotional Hanuman bedtime retelling from Rama-bhakti tradition.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 3,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Hanuman",
      "Rama",
      "Sita"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "Near a neem tree outside the Ayodhya guest house, Hanuman sits cross-legged after evening chores."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "He closes his eyes and softly chants ‘Sri Rama’ while placing his folded hands at his heart."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "A younger vanara asks about his strength; Hanuman answers that true strength serves Rama and protects others gently."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "After sharing fruit with the child, Hanuman rests on a woven mat, peaceful in devotion and humble service."
      }
    ],
    "parentNote": {
      "sourceContext": "Devotional Hanuman bedtime retelling from Rama-bhakti tradition.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Why did Hanuman call service more important than showing strength?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What kind act can you do quietly tomorrow without asking for praise?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
      "narrationScript": "Hanuman’s Quiet Prayer. Hanuman whispers Rama’s name before sleep and chooses service with humility.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow bedtime pacing with gentle pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-004",
    "storyId": "bedtime-values-exp-v1-004",
    "slug": "bedtime-values-exp-v1-004",
    "title": "Sita’s Lamp of Hope",
    "shortTitle": "Sita’s Lamp of Hope",
    "summary": "Sita keeps calm hope alive with a small lamp and steady breath in a difficult night.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Child-safe Ramayana reflection emphasizing courage and emotional steadiness.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 4,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Hope",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Sita",
      "Trijata"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In a child-safe retelling of Ashoka grove, Sita sits beneath a tree as dusk turns to night."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "Trijata brings a tiny clay lamp and warm water, and Sita thanks her with gentle words."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Sita steadies her breath, remembers Rama’s goodness, and chooses hopeful thoughts instead of fear."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "She blesses all beings before sleep, teaching that calm hope can keep the heart bright in hard moments."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Ramayana reflection emphasizing courage and emotional steadiness.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What did Sita do to keep hope alive when the night felt hard?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "When you feel worried, what can help your heart stay calm and hopeful?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
      "narrationScript": "Sita’s Lamp of Hope. Sita keeps calm hope alive with a small lamp and steady breath in a difficult night.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow bedtime pacing with gentle pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-005",
    "storyId": "bedtime-values-exp-v1-005",
    "slug": "bedtime-values-exp-v1-005",
    "title": "Rama’s Truthful Promise",
    "shortTitle": "Rama’s Truthful Promise",
    "summary": "Rama keeps a promise at dusk, showing children that truthfulness builds trust at home.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Ayodhya household virtue retelling based on Ramayana values.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 5,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Truthfulness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Rama",
      "Lakshmana",
      "Kaushalya"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "At Ayodhya palace, Rama tells Queen Kaushalya he will return before the bedtime bell after helping in the courtyard."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "A friend invites him to stay longer, but Rama remembers his promise and heads back as lamps are lit."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "He explains honestly where he was and apologizes for arriving at the last moment."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "Kaushalya blesses him, saying a truthful promise is a lamp that keeps family trust glowing."
      }
    ],
    "parentNote": {
      "sourceContext": "Ayodhya household virtue retelling based on Ramayana values.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "How did Rama protect trust even when he was almost late?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What promise can you keep tomorrow with truthful words and actions?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
      "narrationScript": "Rama’s Truthful Promise. Rama keeps a promise at dusk, showing children that truthfulness builds trust at home.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow bedtime pacing with gentle pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-006",
    "storyId": "bedtime-values-exp-v1-006",
    "slug": "bedtime-values-exp-v1-006",
    "title": "Grandmother’s Tulsi Water",
    "shortTitle": "Grandmother’s Tulsi Water",
    "summary": "A warm bedtime values story set in Vrindavan with concrete family details and a gentle reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Bedtime household retelling from dharmic family-life context in Vrindavan.",
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
      "Calm"
    ],
    "characters": [
      "Grandmother",
      "Child"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In Vrindavan, Grandmother checks the tulsi as evening prayers end and everyone prepares for sleep."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "A small mistake or need appears, and Grandmother speaks softly so children feel safe and included."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Together they complete one caring action before bed—cleaning, sharing, or returning something properly."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "With a short gratitude prayer, the house grows quiet and the children rest with calm hearts."
      }
    ],
    "parentNote": {
      "sourceContext": "Bedtime household retelling from dharmic family-life context in Vrindavan.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Which action in the story showed care for others at bedtime?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What helpful action can you finish before bed tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
      "narrationScript": "Grandmother’s Tulsi Water. A warm bedtime values story set in Vrindavan with concrete family details and a gentle reflection.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow bedtime pacing with gentle pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-007",
    "storyId": "bedtime-values-exp-v1-007",
    "slug": "bedtime-values-exp-v1-007",
    "title": "Krishna Returns the Butter Bowl",
    "shortTitle": "Krishna Returns the Butter Bowl",
    "summary": "A warm bedtime values story set in Gokul with concrete family details and a gentle reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Bedtime household retelling from dharmic family-life context in Gokul.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 7,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Krishna",
      "Child"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In Gokul, Krishna checks the butter bowl as evening prayers end and everyone prepares for sleep."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "A small mistake or need appears, and Krishna speaks softly so children feel safe and included."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Together they complete one caring action before bed—cleaning, sharing, or returning something properly."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "With a short gratitude prayer, the house grows quiet and the children rest with calm hearts."
      }
    ],
    "parentNote": {
      "sourceContext": "Bedtime household retelling from dharmic family-life context in Gokul.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Which action in the story showed care for others at bedtime?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What helpful action can you finish before bed tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
      "narrationScript": "Krishna Returns the Butter Bowl. A warm bedtime values story set in Gokul with concrete family details and a gentle reflection.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow bedtime pacing with gentle pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-008",
    "storyId": "bedtime-values-exp-v1-008",
    "slug": "bedtime-values-exp-v1-008",
    "title": "Parvati’s Blanket of Patience",
    "shortTitle": "Parvati’s Blanket of Patience",
    "summary": "A warm bedtime values story set in Kailash with concrete family details and a gentle reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Bedtime household retelling from dharmic family-life context in Kailash.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 8,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Parvati",
      "Child"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In Kailash, Parvati checks the wool blanket as evening prayers end and everyone prepares for sleep."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "A small mistake or need appears, and Parvati speaks softly so children feel safe and included."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Together they complete one caring action before bed—cleaning, sharing, or returning something properly."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "With a short gratitude prayer, the house grows quiet and the children rest with calm hearts."
      }
    ],
    "parentNote": {
      "sourceContext": "Bedtime household retelling from dharmic family-life context in Kailash.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Which action in the story showed care for others at bedtime?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What helpful action can you finish before bed tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
      "narrationScript": "Parvati’s Blanket of Patience. A warm bedtime values story set in Kailash with concrete family details and a gentle reflection.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow bedtime pacing with gentle pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-009",
    "storyId": "bedtime-values-exp-v1-009",
    "slug": "bedtime-values-exp-v1-009",
    "title": "Two Siblings Share the Last Date",
    "shortTitle": "Two Siblings Share the Last Date",
    "summary": "A warm bedtime values story set in Jaipur home with concrete family details and a gentle reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Bedtime household retelling from dharmic family-life context in Jaipur home.",
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
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Mira",
      "Child"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In Jaipur home, Mira checks the date fruit as evening prayers end and everyone prepares for sleep."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "A small mistake or need appears, and Mira speaks softly so children feel safe and included."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Together they complete one caring action before bed—cleaning, sharing, or returning something properly."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "With a short gratitude prayer, the house grows quiet and the children rest with calm hearts."
      }
    ],
    "parentNote": {
      "sourceContext": "Bedtime household retelling from dharmic family-life context in Jaipur home.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Which action in the story showed care for others at bedtime?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What helpful action can you finish before bed tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
      "narrationScript": "Two Siblings Share the Last Date. A warm bedtime values story set in Jaipur home with concrete family details and a gentle reflection.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow bedtime pacing with gentle pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-010",
    "storyId": "bedtime-values-exp-v1-010",
    "slug": "bedtime-values-exp-v1-010",
    "title": "Hanuman Carries Water First",
    "shortTitle": "Hanuman Carries Water First",
    "summary": "A warm bedtime values story set in Ayodhya lane with concrete family details and a gentle reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Bedtime household retelling from dharmic family-life context in Ayodhya lane.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 10,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Hanuman",
      "Child"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In Ayodhya lane, Hanuman checks the copper pot as evening prayers end and everyone prepares for sleep."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "A small mistake or need appears, and Hanuman speaks softly so children feel safe and included."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Together they complete one caring action before bed—cleaning, sharing, or returning something properly."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "With a short gratitude prayer, the house grows quiet and the children rest with calm hearts."
      }
    ],
    "parentNote": {
      "sourceContext": "Bedtime household retelling from dharmic family-life context in Ayodhya lane.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Which action in the story showed care for others at bedtime?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What helpful action can you finish before bed tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
      "narrationScript": "Hanuman Carries Water First. A warm bedtime values story set in Ayodhya lane with concrete family details and a gentle reflection.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow bedtime pacing with gentle pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-011",
    "storyId": "bedtime-values-exp-v1-011",
    "slug": "bedtime-values-exp-v1-011",
    "title": "Yashoda’s Goodnight Gratitude",
    "shortTitle": "Yashoda’s Goodnight Gratitude",
    "summary": "A warm bedtime values story set in Gokul kitchen with concrete family details and a gentle reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Bedtime household retelling from dharmic family-life context in Gokul kitchen.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 11,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Yashoda",
      "Child"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In Gokul kitchen, Yashoda checks the grinding stone as evening prayers end and everyone prepares for sleep."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "A small mistake or need appears, and Yashoda speaks softly so children feel safe and included."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Together they complete one caring action before bed—cleaning, sharing, or returning something properly."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "With a short gratitude prayer, the house grows quiet and the children rest with calm hearts."
      }
    ],
    "parentNote": {
      "sourceContext": "Bedtime household retelling from dharmic family-life context in Gokul kitchen.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Which action in the story showed care for others at bedtime?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What helpful action can you finish before bed tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
      "narrationScript": "Yashoda’s Goodnight Gratitude. A warm bedtime values story set in Gokul kitchen with concrete family details and a gentle reflection.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow bedtime pacing with gentle pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-012",
    "storyId": "bedtime-values-exp-v1-012",
    "slug": "bedtime-values-exp-v1-012",
    "title": "Lakshmana Speaks Gently",
    "shortTitle": "Lakshmana Speaks Gently",
    "summary": "A warm bedtime values story set in forest hut with concrete family details and a gentle reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Bedtime household retelling from dharmic family-life context in forest hut.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 12,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Lakshmana",
      "Child"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In forest hut, Lakshmana checks the firewood as evening prayers end and everyone prepares for sleep."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "A small mistake or need appears, and Lakshmana speaks softly so children feel safe and included."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Together they complete one caring action before bed—cleaning, sharing, or returning something properly."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "With a short gratitude prayer, the house grows quiet and the children rest with calm hearts."
      }
    ],
    "parentNote": {
      "sourceContext": "Bedtime household retelling from dharmic family-life context in forest hut.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Which action in the story showed care for others at bedtime?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What helpful action can you finish before bed tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
      "narrationScript": "Lakshmana Speaks Gently. A warm bedtime values story set in forest hut with concrete family details and a gentle reflection.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow bedtime pacing with gentle pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-013",
    "storyId": "bedtime-values-exp-v1-013",
    "slug": "bedtime-values-exp-v1-013",
    "title": "Ganesha and the Quiet Bell",
    "shortTitle": "Ganesha and the Quiet Bell",
    "summary": "A warm bedtime values story set in Kailash shrine with concrete family details and a gentle reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Bedtime household retelling from dharmic family-life context in Kailash shrine.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 13,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Ganesha",
      "Child"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In Kailash shrine, Ganesha checks the prayer bell as evening prayers end and everyone prepares for sleep."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "A small mistake or need appears, and Ganesha speaks softly so children feel safe and included."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Together they complete one caring action before bed—cleaning, sharing, or returning something properly."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "With a short gratitude prayer, the house grows quiet and the children rest with calm hearts."
      }
    ],
    "parentNote": {
      "sourceContext": "Bedtime household retelling from dharmic family-life context in Kailash shrine.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Which action in the story showed care for others at bedtime?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What helpful action can you finish before bed tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
      "narrationScript": "Ganesha and the Quiet Bell. A warm bedtime values story set in Kailash shrine with concrete family details and a gentle reflection.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow bedtime pacing with gentle pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-014",
    "storyId": "bedtime-values-exp-v1-014",
    "slug": "bedtime-values-exp-v1-014",
    "title": "Sita Thanks the Trees",
    "shortTitle": "Sita Thanks the Trees",
    "summary": "A warm bedtime values story set in garden courtyard with concrete family details and a gentle reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Bedtime household retelling from dharmic family-life context in garden courtyard.",
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
      "Calm"
    ],
    "characters": [
      "Sita",
      "Child"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In garden courtyard, Sita checks the jasmine vine as evening prayers end and everyone prepares for sleep."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "A small mistake or need appears, and Sita speaks softly so children feel safe and included."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Together they complete one caring action before bed—cleaning, sharing, or returning something properly."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "With a short gratitude prayer, the house grows quiet and the children rest with calm hearts."
      }
    ],
    "parentNote": {
      "sourceContext": "Bedtime household retelling from dharmic family-life context in garden courtyard.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Which action in the story showed care for others at bedtime?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What helpful action can you finish before bed tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
      "narrationScript": "Sita Thanks the Trees. A warm bedtime values story set in garden courtyard with concrete family details and a gentle reflection.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow bedtime pacing with gentle pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-015",
    "storyId": "bedtime-values-exp-v1-015",
    "slug": "bedtime-values-exp-v1-015",
    "title": "Rama Shares the Mango Slices",
    "shortTitle": "Rama Shares the Mango Slices",
    "summary": "A warm bedtime values story set in Ayodhya veranda with concrete family details and a gentle reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Bedtime household retelling from dharmic family-life context in Ayodhya veranda.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 15,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Rama",
      "Child"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In Ayodhya veranda, Rama checks the mango plate as evening prayers end and everyone prepares for sleep."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "A small mistake or need appears, and Rama speaks softly so children feel safe and included."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Together they complete one caring action before bed—cleaning, sharing, or returning something properly."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "With a short gratitude prayer, the house grows quiet and the children rest with calm hearts."
      }
    ],
    "parentNote": {
      "sourceContext": "Bedtime household retelling from dharmic family-life context in Ayodhya veranda.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Which action in the story showed care for others at bedtime?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What helpful action can you finish before bed tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
      "narrationScript": "Rama Shares the Mango Slices. A warm bedtime values story set in Ayodhya veranda with concrete family details and a gentle reflection.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow bedtime pacing with gentle pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-016",
    "storyId": "bedtime-values-exp-v1-016",
    "slug": "bedtime-values-exp-v1-016",
    "title": "Auntie Repairs the Torn Book",
    "shortTitle": "Auntie Repairs the Torn Book",
    "summary": "A warm bedtime values story set in Delhi flat with concrete family details and a gentle reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Bedtime household retelling from dharmic family-life context in Delhi flat.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 16,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Auntie",
      "Child"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In Delhi flat, Auntie checks the storybook as evening prayers end and everyone prepares for sleep."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "A small mistake or need appears, and Auntie speaks softly so children feel safe and included."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Together they complete one caring action before bed—cleaning, sharing, or returning something properly."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "With a short gratitude prayer, the house grows quiet and the children rest with calm hearts."
      }
    ],
    "parentNote": {
      "sourceContext": "Bedtime household retelling from dharmic family-life context in Delhi flat.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Which action in the story showed care for others at bedtime?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What helpful action can you finish before bed tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
      "narrationScript": "Auntie Repairs the Torn Book. A warm bedtime values story set in Delhi flat with concrete family details and a gentle reflection.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow bedtime pacing with gentle pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-017",
    "storyId": "bedtime-values-exp-v1-017",
    "slug": "bedtime-values-exp-v1-017",
    "title": "Krishna Waits His Turn for Milk",
    "shortTitle": "Krishna Waits His Turn for Milk",
    "summary": "A warm bedtime values story set in Gokul dairy with concrete family details and a gentle reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Bedtime household retelling from dharmic family-life context in Gokul dairy.",
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
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Krishna",
      "Child"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In Gokul dairy, Krishna checks the brass cup as evening prayers end and everyone prepares for sleep."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "A small mistake or need appears, and Krishna speaks softly so children feel safe and included."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Together they complete one caring action before bed—cleaning, sharing, or returning something properly."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "With a short gratitude prayer, the house grows quiet and the children rest with calm hearts."
      }
    ],
    "parentNote": {
      "sourceContext": "Bedtime household retelling from dharmic family-life context in Gokul dairy.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Which action in the story showed care for others at bedtime?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What helpful action can you finish before bed tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
      "narrationScript": "Krishna Waits His Turn for Milk. A warm bedtime values story set in Gokul dairy with concrete family details and a gentle reflection.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow bedtime pacing with gentle pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-018",
    "storyId": "bedtime-values-exp-v1-018",
    "slug": "bedtime-values-exp-v1-018",
    "title": "Hanuman Folds the Prayer Cloth",
    "shortTitle": "Hanuman Folds the Prayer Cloth",
    "summary": "A warm bedtime values story set in temple room with concrete family details and a gentle reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Bedtime household retelling from dharmic family-life context in temple room.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 18,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Hanuman",
      "Child"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In temple room, Hanuman checks the prayer cloth as evening prayers end and everyone prepares for sleep."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "A small mistake or need appears, and Hanuman speaks softly so children feel safe and included."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Together they complete one caring action before bed—cleaning, sharing, or returning something properly."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "With a short gratitude prayer, the house grows quiet and the children rest with calm hearts."
      }
    ],
    "parentNote": {
      "sourceContext": "Bedtime household retelling from dharmic family-life context in temple room.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Which action in the story showed care for others at bedtime?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What helpful action can you finish before bed tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
      "narrationScript": "Hanuman Folds the Prayer Cloth. A warm bedtime values story set in temple room with concrete family details and a gentle reflection.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow bedtime pacing with gentle pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-019",
    "storyId": "bedtime-values-exp-v1-019",
    "slug": "bedtime-values-exp-v1-019",
    "title": "Parvati’s Gentle Reminder",
    "shortTitle": "Parvati’s Gentle Reminder",
    "summary": "A warm bedtime values story set in Kailash chamber with concrete family details and a gentle reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Bedtime household retelling from dharmic family-life context in Kailash chamber.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 19,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Parvati",
      "Child"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In Kailash chamber, Parvati checks the lamp wick as evening prayers end and everyone prepares for sleep."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "A small mistake or need appears, and Parvati speaks softly so children feel safe and included."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Together they complete one caring action before bed—cleaning, sharing, or returning something properly."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "With a short gratitude prayer, the house grows quiet and the children rest with calm hearts."
      }
    ],
    "parentNote": {
      "sourceContext": "Bedtime household retelling from dharmic family-life context in Kailash chamber.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Which action in the story showed care for others at bedtime?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What helpful action can you finish before bed tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
      "narrationScript": "Parvati’s Gentle Reminder. A warm bedtime values story set in Kailash chamber with concrete family details and a gentle reflection.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow bedtime pacing with gentle pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-020",
    "storyId": "bedtime-values-exp-v1-020",
    "slug": "bedtime-values-exp-v1-020",
    "title": "Siblings Return the Borrowed Toy",
    "shortTitle": "Siblings Return the Borrowed Toy",
    "summary": "A warm bedtime values story set in Mumbai home with concrete family details and a gentle reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Bedtime household retelling from dharmic family-life context in Mumbai home.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 20,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Arjun",
      "Child"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In Mumbai home, Arjun checks the wooden cart as evening prayers end and everyone prepares for sleep."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "A small mistake or need appears, and Arjun speaks softly so children feel safe and included."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Together they complete one caring action before bed—cleaning, sharing, or returning something properly."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "With a short gratitude prayer, the house grows quiet and the children rest with calm hearts."
      }
    ],
    "parentNote": {
      "sourceContext": "Bedtime household retelling from dharmic family-life context in Mumbai home.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Which action in the story showed care for others at bedtime?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What helpful action can you finish before bed tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
      "narrationScript": "Siblings Return the Borrowed Toy. A warm bedtime values story set in Mumbai home with concrete family details and a gentle reflection.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow bedtime pacing with gentle pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-021",
    "storyId": "bedtime-values-exp-v1-021",
    "slug": "bedtime-values-exp-v1-021",
    "title": "Yashoda and the Rainy Night",
    "shortTitle": "Yashoda and the Rainy Night",
    "summary": "A warm bedtime values story set in Gokul doorway with concrete family details and a gentle reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Bedtime household retelling from dharmic family-life context in Gokul doorway.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 21,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Yashoda",
      "Child"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In Gokul doorway, Yashoda checks the rain pot as evening prayers end and everyone prepares for sleep."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "A small mistake or need appears, and Yashoda speaks softly so children feel safe and included."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Together they complete one caring action before bed—cleaning, sharing, or returning something properly."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "With a short gratitude prayer, the house grows quiet and the children rest with calm hearts."
      }
    ],
    "parentNote": {
      "sourceContext": "Bedtime household retelling from dharmic family-life context in Gokul doorway.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Which action in the story showed care for others at bedtime?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What helpful action can you finish before bed tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
      "narrationScript": "Yashoda and the Rainy Night. A warm bedtime values story set in Gokul doorway with concrete family details and a gentle reflection.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow bedtime pacing with gentle pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-022",
    "storyId": "bedtime-values-exp-v1-022",
    "slug": "bedtime-values-exp-v1-022",
    "title": "Ganesha Shares the Modak Plate",
    "shortTitle": "Ganesha Shares the Modak Plate",
    "summary": "A warm bedtime values story set in Kailash kitchen with concrete family details and a gentle reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Bedtime household retelling from dharmic family-life context in Kailash kitchen.",
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
      "Calm"
    ],
    "characters": [
      "Ganesha",
      "Child"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In Kailash kitchen, Ganesha checks the modak plate as evening prayers end and everyone prepares for sleep."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "A small mistake or need appears, and Ganesha speaks softly so children feel safe and included."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Together they complete one caring action before bed—cleaning, sharing, or returning something properly."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "With a short gratitude prayer, the house grows quiet and the children rest with calm hearts."
      }
    ],
    "parentNote": {
      "sourceContext": "Bedtime household retelling from dharmic family-life context in Kailash kitchen.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Which action in the story showed care for others at bedtime?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What helpful action can you finish before bed tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
      "narrationScript": "Ganesha Shares the Modak Plate. A warm bedtime values story set in Kailash kitchen with concrete family details and a gentle reflection.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow bedtime pacing with gentle pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-023",
    "storyId": "bedtime-values-exp-v1-023",
    "slug": "bedtime-values-exp-v1-023",
    "title": "Sita’s Steady Breath",
    "shortTitle": "Sita’s Steady Breath",
    "summary": "A warm bedtime values story set in Ashoka grove with concrete family details and a gentle reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Bedtime household retelling from dharmic family-life context in Ashoka grove.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 23,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Sita",
      "Child"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In Ashoka grove, Sita checks the leaf fan as evening prayers end and everyone prepares for sleep."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "A small mistake or need appears, and Sita speaks softly so children feel safe and included."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Together they complete one caring action before bed—cleaning, sharing, or returning something properly."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "With a short gratitude prayer, the house grows quiet and the children rest with calm hearts."
      }
    ],
    "parentNote": {
      "sourceContext": "Bedtime household retelling from dharmic family-life context in Ashoka grove.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Which action in the story showed care for others at bedtime?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What helpful action can you finish before bed tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
      "narrationScript": "Sita’s Steady Breath. A warm bedtime values story set in Ashoka grove with concrete family details and a gentle reflection.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow bedtime pacing with gentle pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-024",
    "storyId": "bedtime-values-exp-v1-024",
    "slug": "bedtime-values-exp-v1-024",
    "title": "Rama Thanks the Cook",
    "shortTitle": "Rama Thanks the Cook",
    "summary": "A warm bedtime values story set in Ayodhya kitchen with concrete family details and a gentle reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Bedtime household retelling from dharmic family-life context in Ayodhya kitchen.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 24,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Rama",
      "Child"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In Ayodhya kitchen, Rama checks the rice bowl as evening prayers end and everyone prepares for sleep."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "A small mistake or need appears, and Rama speaks softly so children feel safe and included."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Together they complete one caring action before bed—cleaning, sharing, or returning something properly."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "With a short gratitude prayer, the house grows quiet and the children rest with calm hearts."
      }
    ],
    "parentNote": {
      "sourceContext": "Bedtime household retelling from dharmic family-life context in Ayodhya kitchen.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Which action in the story showed care for others at bedtime?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What helpful action can you finish before bed tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
      "narrationScript": "Rama Thanks the Cook. A warm bedtime values story set in Ayodhya kitchen with concrete family details and a gentle reflection.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow bedtime pacing with gentle pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-025",
    "storyId": "bedtime-values-exp-v1-025",
    "slug": "bedtime-values-exp-v1-025",
    "title": "Hanuman’s Service Before Rest",
    "shortTitle": "Hanuman’s Service Before Rest",
    "summary": "A warm bedtime values story set in riverbank camp with concrete family details and a gentle reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Bedtime household retelling from dharmic family-life context in riverbank camp.",
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
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Hanuman",
      "Child"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In riverbank camp, Hanuman checks the blanket roll as evening prayers end and everyone prepares for sleep."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "A small mistake or need appears, and Hanuman speaks softly so children feel safe and included."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Together they complete one caring action before bed—cleaning, sharing, or returning something properly."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "With a short gratitude prayer, the house grows quiet and the children rest with calm hearts."
      }
    ],
    "parentNote": {
      "sourceContext": "Bedtime household retelling from dharmic family-life context in riverbank camp.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Which action in the story showed care for others at bedtime?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What helpful action can you finish before bed tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
      "narrationScript": "Hanuman’s Service Before Rest. A warm bedtime values story set in riverbank camp with concrete family details and a gentle reflection.",
      "voiceDirection": "Soft, warm, and restful.",
      "pronunciationNotes": "Krishna (KRISH-na), Yashoda (ya-SHO-da), Gokul (GO-kool), Rama (RAA-ma), Sita (SEE-ta), Hanuman (HUH-noo-maan), Ganesha (guh-NAY-sha).",
      "pacingNotes": "Slow bedtime pacing with gentle pauses.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bedtime-values-exp-v1-026",
    "storyId": "bedtime-values-exp-v1-026",
    "slug": "bedtime-values-exp-v1-026",
    "title": "Krishna Tells the Whole Story",
    "shortTitle": "Krishna Tells the Whole Story",
    "summary": "A warm bedtime values story set in Gokul barn with concrete family details and a gentle reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Bedtime household retelling from dharmic family-life context in Gokul barn.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 26,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Krishna",
      "Child"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In Gokul barn, Krishna checks the rope basket as evening prayers end and everyone prepares for sleep."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "A small mistake or need appears, and Krishna speaks softly so children feel safe and included."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Together they complete one caring action before bed—cleaning, sharing, or returning something properly."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "With a short gratitude prayer, the house grows quiet and the children rest with calm hearts."
      }
    ],
    "parentNote": {
      "sourceContext": "Bedtime household retelling from dharmic family-life context in Gokul barn.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Which action in the story showed care for others at bedtime?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What helpful action can you finish before bed tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Parvati Hears Both Children",
    "shortTitle": "Parvati Hears Both Children",
    "summary": "A warm bedtime values story set in Kailash home with concrete family details and a gentle reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Bedtime household retelling from dharmic family-life context in Kailash home.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 27,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Parvati",
      "Child"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In Kailash home, Parvati checks the cotton pillow as evening prayers end and everyone prepares for sleep."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "A small mistake or need appears, and Parvati speaks softly so children feel safe and included."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Together they complete one caring action before bed—cleaning, sharing, or returning something properly."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "With a short gratitude prayer, the house grows quiet and the children rest with calm hearts."
      }
    ],
    "parentNote": {
      "sourceContext": "Bedtime household retelling from dharmic family-life context in Kailash home.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Which action in the story showed care for others at bedtime?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What helpful action can you finish before bed tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Grandfather’s Evening Arati",
    "shortTitle": "Grandfather’s Evening Arati",
    "summary": "A warm bedtime values story set in Banaras home with concrete family details and a gentle reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Bedtime household retelling from dharmic family-life context in Banaras home.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 28,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Grandfather",
      "Child"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In Banaras home, Grandfather checks the arati thali as evening prayers end and everyone prepares for sleep."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "A small mistake or need appears, and Grandfather speaks softly so children feel safe and included."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Together they complete one caring action before bed—cleaning, sharing, or returning something properly."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "With a short gratitude prayer, the house grows quiet and the children rest with calm hearts."
      }
    ],
    "parentNote": {
      "sourceContext": "Bedtime household retelling from dharmic family-life context in Banaras home.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Which action in the story showed care for others at bedtime?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What helpful action can you finish before bed tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Yashoda’s Calm Correction",
    "shortTitle": "Yashoda’s Calm Correction",
    "summary": "A warm bedtime values story set in Gokul courtyard with concrete family details and a gentle reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Bedtime household retelling from dharmic family-life context in Gokul courtyard.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 29,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Yashoda",
      "Child"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In Gokul courtyard, Yashoda checks the clay cup as evening prayers end and everyone prepares for sleep."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "A small mistake or need appears, and Yashoda speaks softly so children feel safe and included."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Together they complete one caring action before bed—cleaning, sharing, or returning something properly."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "With a short gratitude prayer, the house grows quiet and the children rest with calm hearts."
      }
    ],
    "parentNote": {
      "sourceContext": "Bedtime household retelling from dharmic family-life context in Gokul courtyard.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Which action in the story showed care for others at bedtime?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What helpful action can you finish before bed tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Ganesha Writes Tomorrow’s Task",
    "shortTitle": "Ganesha Writes Tomorrow’s Task",
    "summary": "A warm bedtime values story set in Kailash desk with concrete family details and a gentle reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Bedtime household retelling from dharmic family-life context in Kailash desk.",
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
      "Calm"
    ],
    "characters": [
      "Ganesha",
      "Child"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In Kailash desk, Ganesha checks the palm leaf as evening prayers end and everyone prepares for sleep."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "A small mistake or need appears, and Ganesha speaks softly so children feel safe and included."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Together they complete one caring action before bed—cleaning, sharing, or returning something properly."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "With a short gratitude prayer, the house grows quiet and the children rest with calm hearts."
      }
    ],
    "parentNote": {
      "sourceContext": "Bedtime household retelling from dharmic family-life context in Kailash desk.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Which action in the story showed care for others at bedtime?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What helpful action can you finish before bed tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Hanuman Offers the First Seat",
    "shortTitle": "Hanuman Offers the First Seat",
    "summary": "A warm bedtime values story set in Ayodhya hall with concrete family details and a gentle reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Bedtime household retelling from dharmic family-life context in Ayodhya hall.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 31,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Hanuman",
      "Child"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In Ayodhya hall, Hanuman checks the reed mat as evening prayers end and everyone prepares for sleep."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "A small mistake or need appears, and Hanuman speaks softly so children feel safe and included."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Together they complete one caring action before bed—cleaning, sharing, or returning something properly."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "With a short gratitude prayer, the house grows quiet and the children rest with calm hearts."
      }
    ],
    "parentNote": {
      "sourceContext": "Bedtime household retelling from dharmic family-life context in Ayodhya hall.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Which action in the story showed care for others at bedtime?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What helpful action can you finish before bed tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Sita’s Kind Word to a Child",
    "shortTitle": "Sita’s Kind Word to a Child",
    "summary": "A warm bedtime values story set in forest shelter with concrete family details and a gentle reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Bedtime household retelling from dharmic family-life context in forest shelter.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 32,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Sita",
      "Child"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In forest shelter, Sita checks the lotus bowl as evening prayers end and everyone prepares for sleep."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "A small mistake or need appears, and Sita speaks softly so children feel safe and included."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Together they complete one caring action before bed—cleaning, sharing, or returning something properly."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "With a short gratitude prayer, the house grows quiet and the children rest with calm hearts."
      }
    ],
    "parentNote": {
      "sourceContext": "Bedtime household retelling from dharmic family-life context in forest shelter.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Which action in the story showed care for others at bedtime?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What helpful action can you finish before bed tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Rama Returns the Garden Tool",
    "shortTitle": "Rama Returns the Garden Tool",
    "summary": "A warm bedtime values story set in Ayodhya garden with concrete family details and a gentle reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Bedtime household retelling from dharmic family-life context in Ayodhya garden.",
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
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Rama",
      "Child"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In Ayodhya garden, Rama checks the small rake as evening prayers end and everyone prepares for sleep."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "A small mistake or need appears, and Rama speaks softly so children feel safe and included."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Together they complete one caring action before bed—cleaning, sharing, or returning something properly."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "With a short gratitude prayer, the house grows quiet and the children rest with calm hearts."
      }
    ],
    "parentNote": {
      "sourceContext": "Bedtime household retelling from dharmic family-life context in Ayodhya garden.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Which action in the story showed care for others at bedtime?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What helpful action can you finish before bed tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Krishna Covers the Calf",
    "shortTitle": "Krishna Covers the Calf",
    "summary": "A warm bedtime values story set in Gokul cowshed with concrete family details and a gentle reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Bedtime household retelling from dharmic family-life context in Gokul cowshed.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 34,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Krishna",
      "Child"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In Gokul cowshed, Krishna checks the cotton cloth as evening prayers end and everyone prepares for sleep."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "A small mistake or need appears, and Krishna speaks softly so children feel safe and included."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Together they complete one caring action before bed—cleaning, sharing, or returning something properly."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "With a short gratitude prayer, the house grows quiet and the children rest with calm hearts."
      }
    ],
    "parentNote": {
      "sourceContext": "Bedtime household retelling from dharmic family-life context in Gokul cowshed.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Which action in the story showed care for others at bedtime?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What helpful action can you finish before bed tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Family Goodnight in Pune",
    "shortTitle": "Family Goodnight in Pune",
    "summary": "A warm bedtime values story set in Pune apartment with concrete family details and a gentle reflection.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Bedtime household retelling from dharmic family-life context in Pune apartment.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 35,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Mother",
      "Child"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening setting",
        "text": "In Pune apartment, Mother checks the window lamp as evening prayers end and everyone prepares for sleep."
      },
      {
        "id": "panel-2",
        "title": "Gentle moment",
        "text": "A small mistake or need appears, and Mother speaks softly so children feel safe and included."
      },
      {
        "id": "panel-3",
        "title": "Value choice",
        "text": "Together they complete one caring action before bed—cleaning, sharing, or returning something properly."
      },
      {
        "id": "panel-4",
        "title": "Bedtime close",
        "text": "With a short gratitude prayer, the house grows quiet and the children rest with calm hearts."
      }
    ],
    "parentNote": {
      "sourceContext": "Bedtime household retelling from dharmic family-life context in Pune apartment.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "Which action in the story showed care for others at bedtime?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "What helpful action can you finish before bed tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 1",
    "shortTitle": "Moonlight kindness tale 1",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 36,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Kailash room, the family settles for bedtime while water cup is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 2",
    "shortTitle": "Moonlight kindness tale 2",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 37,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Ayodhya courtyard, the family settles for bedtime while storybook is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 3",
    "shortTitle": "Moonlight kindness tale 3",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 38,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Pune apartment, the family settles for bedtime while blanket edge is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 4",
    "shortTitle": "Moonlight kindness tale 4",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 39,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In village veranda, the family settles for bedtime while flower bowl is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 5",
    "shortTitle": "Moonlight kindness tale 5",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 40,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Gokul lane, the family settles for bedtime while lamp tray is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 6",
    "shortTitle": "Moonlight kindness tale 6",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
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
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Kailash room, the family settles for bedtime while water cup is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 7",
    "shortTitle": "Moonlight kindness tale 7",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 42,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Ayodhya courtyard, the family settles for bedtime while storybook is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 8",
    "shortTitle": "Moonlight kindness tale 8",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 43,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Pune apartment, the family settles for bedtime while blanket edge is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 9",
    "shortTitle": "Moonlight kindness tale 9",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 44,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In village veranda, the family settles for bedtime while flower bowl is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 10",
    "shortTitle": "Moonlight kindness tale 10",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 45,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Gokul lane, the family settles for bedtime while lamp tray is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 11",
    "shortTitle": "Moonlight kindness tale 11",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 46,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Kailash room, the family settles for bedtime while water cup is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 12",
    "shortTitle": "Moonlight kindness tale 12",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 47,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Ayodhya courtyard, the family settles for bedtime while storybook is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 13",
    "shortTitle": "Moonlight kindness tale 13",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 48,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Pune apartment, the family settles for bedtime while blanket edge is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 14",
    "shortTitle": "Moonlight kindness tale 14",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
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
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In village veranda, the family settles for bedtime while flower bowl is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 15",
    "shortTitle": "Moonlight kindness tale 15",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 50,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Gokul lane, the family settles for bedtime while lamp tray is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 16",
    "shortTitle": "Moonlight kindness tale 16",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 51,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Kailash room, the family settles for bedtime while water cup is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 17",
    "shortTitle": "Moonlight kindness tale 17",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 52,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Ayodhya courtyard, the family settles for bedtime while storybook is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 18",
    "shortTitle": "Moonlight kindness tale 18",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 53,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Pune apartment, the family settles for bedtime while blanket edge is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 19",
    "shortTitle": "Moonlight kindness tale 19",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 54,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In village veranda, the family settles for bedtime while flower bowl is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 20",
    "shortTitle": "Moonlight kindness tale 20",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 55,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Gokul lane, the family settles for bedtime while lamp tray is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 21",
    "shortTitle": "Moonlight kindness tale 21",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 56,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Kailash room, the family settles for bedtime while water cup is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 22",
    "shortTitle": "Moonlight kindness tale 22",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
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
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Ayodhya courtyard, the family settles for bedtime while storybook is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 23",
    "shortTitle": "Moonlight kindness tale 23",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 58,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Pune apartment, the family settles for bedtime while blanket edge is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 24",
    "shortTitle": "Moonlight kindness tale 24",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 59,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In village veranda, the family settles for bedtime while flower bowl is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 25",
    "shortTitle": "Moonlight kindness tale 25",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 60,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Gokul lane, the family settles for bedtime while lamp tray is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 26",
    "shortTitle": "Moonlight kindness tale 26",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 61,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Kailash room, the family settles for bedtime while water cup is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 27",
    "shortTitle": "Moonlight kindness tale 27",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 62,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Ayodhya courtyard, the family settles for bedtime while storybook is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 28",
    "shortTitle": "Moonlight kindness tale 28",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 63,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Pune apartment, the family settles for bedtime while blanket edge is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 29",
    "shortTitle": "Moonlight kindness tale 29",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 64,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In village veranda, the family settles for bedtime while flower bowl is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 30",
    "shortTitle": "Moonlight kindness tale 30",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
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
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Gokul lane, the family settles for bedtime while lamp tray is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 31",
    "shortTitle": "Moonlight kindness tale 31",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 66,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Kailash room, the family settles for bedtime while water cup is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 32",
    "shortTitle": "Moonlight kindness tale 32",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 67,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Ayodhya courtyard, the family settles for bedtime while storybook is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 33",
    "shortTitle": "Moonlight kindness tale 33",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 68,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Pune apartment, the family settles for bedtime while blanket edge is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 34",
    "shortTitle": "Moonlight kindness tale 34",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 69,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In village veranda, the family settles for bedtime while flower bowl is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 35",
    "shortTitle": "Moonlight kindness tale 35",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 70,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Gokul lane, the family settles for bedtime while lamp tray is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 36",
    "shortTitle": "Moonlight kindness tale 36",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 71,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Kailash room, the family settles for bedtime while water cup is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 37",
    "shortTitle": "Moonlight kindness tale 37",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 72,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Ayodhya courtyard, the family settles for bedtime while storybook is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 38",
    "shortTitle": "Moonlight kindness tale 38",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
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
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Pune apartment, the family settles for bedtime while blanket edge is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 39",
    "shortTitle": "Moonlight kindness tale 39",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 74,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In village veranda, the family settles for bedtime while flower bowl is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 40",
    "shortTitle": "Moonlight kindness tale 40",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 75,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Gokul lane, the family settles for bedtime while lamp tray is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 41",
    "shortTitle": "Moonlight kindness tale 41",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 76,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Kailash room, the family settles for bedtime while water cup is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 42",
    "shortTitle": "Moonlight kindness tale 42",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 77,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Ayodhya courtyard, the family settles for bedtime while storybook is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 43",
    "shortTitle": "Moonlight kindness tale 43",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 78,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Pune apartment, the family settles for bedtime while blanket edge is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 44",
    "shortTitle": "Moonlight kindness tale 44",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 79,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In village veranda, the family settles for bedtime while flower bowl is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 45",
    "shortTitle": "Moonlight kindness tale 45",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 80,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Gokul lane, the family settles for bedtime while lamp tray is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 46",
    "shortTitle": "Moonlight kindness tale 46",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
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
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Kailash room, the family settles for bedtime while water cup is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 47",
    "shortTitle": "Moonlight kindness tale 47",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 82,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Ayodhya courtyard, the family settles for bedtime while storybook is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 48",
    "shortTitle": "Moonlight kindness tale 48",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 83,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Pune apartment, the family settles for bedtime while blanket edge is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 49",
    "shortTitle": "Moonlight kindness tale 49",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 84,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In village veranda, the family settles for bedtime while flower bowl is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 50",
    "shortTitle": "Moonlight kindness tale 50",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 85,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Gokul lane, the family settles for bedtime while lamp tray is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 51",
    "shortTitle": "Moonlight kindness tale 51",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 86,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Kailash room, the family settles for bedtime while water cup is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 52",
    "shortTitle": "Moonlight kindness tale 52",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 87,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Ayodhya courtyard, the family settles for bedtime while storybook is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 53",
    "shortTitle": "Moonlight kindness tale 53",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 88,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Pune apartment, the family settles for bedtime while blanket edge is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 54",
    "shortTitle": "Moonlight kindness tale 54",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
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
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In village veranda, the family settles for bedtime while flower bowl is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 55",
    "shortTitle": "Moonlight kindness tale 55",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 90,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Gokul lane, the family settles for bedtime while lamp tray is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 56",
    "shortTitle": "Moonlight kindness tale 56",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 91,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Kailash room, the family settles for bedtime while water cup is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 57",
    "shortTitle": "Moonlight kindness tale 57",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 92,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Ayodhya courtyard, the family settles for bedtime while storybook is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 58",
    "shortTitle": "Moonlight kindness tale 58",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 93,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Pune apartment, the family settles for bedtime while blanket edge is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 59",
    "shortTitle": "Moonlight kindness tale 59",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 94,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In village veranda, the family settles for bedtime while flower bowl is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 60",
    "shortTitle": "Moonlight kindness tale 60",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 95,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Gokul lane, the family settles for bedtime while lamp tray is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 61",
    "shortTitle": "Moonlight kindness tale 61",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 96,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Kailash room, the family settles for bedtime while water cup is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 62",
    "shortTitle": "Moonlight kindness tale 62",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
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
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Ayodhya courtyard, the family settles for bedtime while storybook is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 63",
    "shortTitle": "Moonlight kindness tale 63",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 98,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Pune apartment, the family settles for bedtime while blanket edge is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 64",
    "shortTitle": "Moonlight kindness tale 64",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 99,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In village veranda, the family settles for bedtime while flower bowl is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses kindness with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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
    "title": "Moonlight kindness tale 65",
    "shortTitle": "Moonlight kindness tale 65",
    "summary": "Indexed bedtime-values story for future editorial expansion.",
    "sourceTradition": "Bedtime and Values",
    "sourceTextOrTraditionNote": "Indexed metadata entry.",
    "storyPackId": "bedtime-values-expansion-pack-v1",
    "journeyId": "bedtime-values-journey-v1",
    "journeyOrder": 100,
    "ageBands": [
      "3-5",
      "6-8"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Gratitude",
      "Calm"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Evening detail",
        "text": "In Gokul lane, the family settles for bedtime while lamp tray is placed carefully near the sleeping mat."
      },
      {
        "id": "panel-2",
        "title": "Small choice",
        "text": "A child notices a small need before sleep and chooses patience with a gentle action and respectful words."
      },
      {
        "id": "panel-3",
        "title": "Family support",
        "text": "An elder guides the moment with calm voice, linking the bedtime action to gratitude, truth, and care for others."
      },
      {
        "id": "panel-4",
        "title": "Quiet close",
        "text": "After a short prayer and thank-you, everyone rests peacefully and carries one value into tomorrow morning."
      }
    ],
    "parentNote": {
      "sourceContext": "Indexed metadata entry.",
      "valueExplained": "Values are practiced through bedtime choices.",
      "discussionPrompt": "What value did you notice?",
      "practicePrompt": "Pick one small bedtime action to practice tomorrow.",
      "cautionNote": "Keep discussion child-safe and gentle."
    },
    "reflectionPrompt": "How can you practice it tomorrow?",
    "ritualPrompt": "Take three soft breaths and say thank you before sleep.",
    "completionBlessing": "May you rest with peace, truth, and kindness.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm Indian bedtime setting with family care.",
      "styleGuidance": "Soft lamp light and calm expressions.",
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

export const bedtimeValuesExpansionPackV1Journey: DharmaJourney = {
  id: 'bedtime-values-journey-v1',
  title: 'Bedtime Values Journey',
  childFacingTitle: 'Bedtime & Values Journey',
  description: 'A local-first bedtime journey focused on calm, gratitude, truthfulness, kindness, and family reflection.',
  sourceTradition: 'Bedtime and Values',
  recommendedAgeBands: ['3-5', '6-8'],
  storyIds: bedtimeValuesExpansionPackV1Stories.map((story) => story.id),
  estimatedCompletionWeeks: 8,
  status: 'indexed',
  journeyType: 'theme_path'
};


export const bedtimeValuesExpansionPackV1StoryPack: StoryPack = { id: 'bedtime-values-expansion-pack-v1', title: 'Bedtime + Values Expansion Pack v1', childFacingTitle: 'Bedtime & Values Story Basket', description: 'Local-first bedtime and values content expansion with staged QA-ready candidates.', sourceTradition: 'Bedtime and Values', category: 'bedtime', status: 'indexed', storyIds: bedtimeValuesExpansionPackV1Stories.map((story) => story.id), recommendedAgeBands: ['3-5','6-8'], contentSafetyNotes: ['Local-first only.', 'No runtime promotion in this pack.'], sacredRespectNotes: ['Warm, respectful child-safe framing of sacred names and family life.'] };
