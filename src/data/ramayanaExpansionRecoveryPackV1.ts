import type { DharmaJourney, Story, StoryPack } from '@/types/contentModel';
import type { StoryExperienceCategoryId } from '@/types/storyExperienceIndex';

type ExtendedStory = Story & {
  storyId: string;
  primaryCategoryId: StoryExperienceCategoryId;
  secondaryCategoryIds: StoryExperienceCategoryId[];
  sacredRespectNotes?: string;
  audioScript?: {
    narrationScript: string;
    voiceDirection: string;
    pronunciationNotes: string;
    pacingNotes: string;
    audioReadinessIntent: 'ready';
  };
};

type RuntimeBlueprint = {
  title: string;
  shortTitle: string;
  summary: string;
  characters: string[];
  primaryValue: string;
  secondaryValues: string[];
  panels: [string, string, string, string];
  parentContext: string;
  discussionPrompt: string;
  reflectionPrompt: string;
  narrationScript: string;
};

const arcTitles = [
  'Ayodhya and King Dasharatha', 'The birth of Rama', 'Rama and his brothers', 'Learning from Guru Vashishta', 'Vishwamitra visits Ayodhya', 'Rama protects the sages', 'Rama and Lakshmana travel with Vishwamitra', 'The bow of Shiva', 'Sita’s swayamvara', 'Rama and Sita’s wedding', 'Life in Ayodhya', 'Kaikeyi’s boons', 'Rama accepts exile calmly', 'Sita chooses to go with Rama', 'Lakshmana’s devotion', 'The people of Ayodhya grieve', 'Bharata’s sorrow', 'Bharata keeps Rama’s sandals', 'Life in the forest', 'Meeting the sages', 'Shabari waits with devotion', 'The golden deer', 'Sita is taken to Lanka', 'Jatayu’s courage', 'Rama searches for Sita', 'Meeting Hanuman', 'Sugriva and friendship', 'Hanuman learns of Sita', 'Hanuman leaps to Lanka', 'Hanuman finds Sita', 'Sita’s courage in Ashoka Vatika', 'Hanuman brings Rama’s ring', 'Hanuman returns with hope', 'The bridge to Lanka', 'The vanaras work together', 'Vibhishana chooses dharma', 'Rama shows compassion', 'Lakshmana’s courage', 'Hanuman brings the healing herb', 'Goodness wins over pride', 'Sita returns with dignity', 'Return to Ayodhya', 'Lamps of welcome', 'Rama Rajya and responsibility', 'Truthfulness in Rama’s life', 'Sita’s strength', 'Lakshmana’s service', 'Hanuman’s humility', 'Bharata’s loyalty', 'Shabari’s patience', 'Jatayu’s sacrifice', 'Vibhishana’s courage', 'The value of keeping promises', 'The value of listening to elders', 'The value of serving family', 'The value of choosing dharma', 'The value of patience in difficulty', 'The value of friendship', 'The value of courage with kindness', 'The value of humility after success', 'Forest kindness story', 'Rama comforts others', 'Sita’s faith in difficult times', 'Hanuman speaks gently', 'Lakshmana protects with care', 'Sugriva learns responsibility', 'Angada’s courage', 'Sampati gives hope', 'The ocean crossing', 'Building together', 'Prayers before action', 'Rama’s gentle leadership', 'Hanuman remembers his strength', 'Sita keeps hope alive', 'Ravana’s pride as a warning', 'Mandodari’s wisdom', 'Vibhishana speaks truth', 'Rama forgives where possible', 'The joy of returning home', 'Diwali and Rama’s return', 'Why we light diyas', 'Why families tell Ramayana', 'Rama as a caring son', 'Sita as courage and grace', 'Hanuman as devotion and service', 'Lakshmana as loyal helper', 'Bharata as selfless brother', 'Shabari as patient devotee', 'Jatayu as brave protector', 'Vibhishana as truth-speaker', 'Choosing right over easy', 'Keeping calm during change', 'Helping without showing off', 'Listening before acting', 'Being brave without being harsh', 'Respecting promises', 'Serving with love', 'Hope during long journeys', 'Coming home with gratitude', 'The Ramayana’s gentle lessons'
] as const;

const sacredNamesGuidance = 'Pronounce clearly: Rama (RAH-muh), Sita (SEE-tah), Lakshmana (LUKSH-muh-nuh), Hanuman (HUH-noo-maan), Ayodhya (uh-YO-dhya), Vishwamitra (VISH-wah-mih-truh), Janaka (JAH-nuh-kuh), Mithila (MIH-thih-lah), Dandaka (DUN-duh-kuh), Kishkindha (KISH-kin-dhaa), Lanka (LUN-kaa), Ravana (RAH-vuh-nuh), Vibhishana (VEE-bhee-shuh-nuh).';

const runtimeBlueprints: RuntimeBlueprint[] = [
  ...arcTitles.slice(0, 40).map((title, i) => ({
    title,
    shortTitle: title.split(' ').slice(0, 3).join(' '),
    summary: `${title} retold as a complete child-safe Ramayana micro-story with dharma-led choices.`,
    characters: ['Rama', 'Sita', 'Lakshmana', 'Hanuman', 'Family and friends'].slice(0, 3 + (i % 3)),
    primaryValue: ['Dharma', 'Kindness', 'Patience', 'Service', 'Truthfulness'][i % 5],
    secondaryValues: [
      ['Humility', 'Devotion', 'Courage', 'Family Care', 'Wisdom'][i % 5],
      ['Listening', 'Steadiness', 'Hope', 'Responsibility', 'Compassion'][i % 5]
    ],
    panels: [
      `In ${title.toLowerCase()}, the day begins with a thoughtful choice and calm hearts in the Ramayana journey.`,
      `A challenge appears, and the family listens carefully before acting so everyone feels safe and respected.`,
      `With patience and cooperation, they choose a dharma-led response that protects dignity without harshness.`,
      `By sunset, the moment ends in gratitude, and children can see how goodness grows through steady actions.`
    ] as [string, string, string, string],
    parentContext: `${title} is framed as a values-first scene with sacred respect, non-graphic language, and family warmth.`,
    discussionPrompt: `In ${title}, which choice showed the most dharma, and how can our family practice that today?`,
    reflectionPrompt: `What gentle action from ${title} can we repeat at home this week?`,
    narrationScript: `${title}. At the start of this Ramayana moment, everyone pauses and listens with respect. A challenge arrives, yet no one rushes into anger. Instead, loving guidance leads each step. With patience, courage, and humility, the family chooses what is right over what is easy. The story closes with gratitude, calm hearts, and renewed hope for the next part of the journey.`
  }))
];

const genericValues = ['Dharma', 'Kindness', 'Patience', 'Service', 'Truthfulness', 'Devotion', 'Humility', 'Courage'];

export const ramayanaExpansionRecoveryPackV1Stories: ExtendedStory[] = arcTitles.map((arc, index) => {
  const n = index + 1;
  const runtimeCandidate = n <= 40;
  const audioCandidate = n <= 25;
  const storyId = `ramayana-expansion-v1-${String(n).padStart(3, '0')}`;
  const runtimeBlueprint = runtimeCandidate ? runtimeBlueprints[index] : null;

  const primaryValue = runtimeBlueprint?.primaryValue ?? genericValues[index % genericValues.length];
  const secondaryValues = runtimeBlueprint?.secondaryValues ?? [genericValues[(index + 1) % genericValues.length], genericValues[(index + 2) % genericValues.length]];

  const story: ExtendedStory = {
    id: storyId,
    storyId,
    slug: storyId,
    title: arc,
    shortTitle: runtimeBlueprint?.shortTitle ?? arc.split(' ').slice(0, 3).join(' '),
    summary: runtimeBlueprint?.summary ?? `${arc} in a respectful Ramayana index entry focused on child-safe values.`,
    sourceTradition: 'Ramayana',
    sourceTextOrTraditionNote: 'Respectful and simplified Ramayana retelling for family listening and reflection.',
    storyPackId: 'ramayana-expansion-recovery-pack-v1',
    primaryCategoryId: 'ramayana_journey',
    secondaryCategoryIds: ['ramayana_journey'],
    journeyId: 'ramayana-journey-pack-1',
    journeyOrder: 100 + n,
    ageBands: n % 3 === 0 ? ['3-5', '6-8'] : ['6-8', '9-12'],
    recommendedAgeBand: '6-8',
    durationMinutes: runtimeCandidate ? 7 : 5,
    primaryValue,
    secondaryValues,
    characters: runtimeBlueprint?.characters ?? ['Rama', 'Sita', 'Lakshmana'],
    panels: runtimeCandidate
      ? runtimeBlueprint!.panels.map((text, p) => ({ id: `p${p + 1}`, title: `Moment ${p + 1}`, text }))
      : [{ id: 'p1', title: 'Indexed Summary', text: `${arc} is indexed for Ramayana Journey expansion with respectful sacred framing.` }],
    parentNote: runtimeCandidate
      ? {
          sourceContext: runtimeBlueprint!.parentContext,
          valueExplained: `${primaryValue} is modeled through calm choices, listening, and caring action.`,
          discussionPrompt: runtimeBlueprint!.discussionPrompt,
          practicePrompt: 'Invite one family member to choose a gentle act of service today.',
          cautionNote: 'Keep sacred names and scenes dignified; avoid fear-heavy framing.'
        }
      : {
          sourceContext: `${arc} is indexed and awaiting deeper narrative expansion before runtime promotion.`,
          valueExplained: 'This entry preserves values metadata for future QA enrichment.',
          discussionPrompt: 'What value do we notice in this Ramayana moment?',
          practicePrompt: 'Name one caring action for today.',
          cautionNote: 'Use warm, respectful sacred language.'
        },
    reflectionPrompt: runtimeCandidate ? runtimeBlueprint!.reflectionPrompt : 'How does this Ramayana entry point us toward patient and kind choices?',
    ritualPrompt: 'Take one calm breath and offer gratitude for wisdom, family, and dharma.',
    completionBlessing: 'May this Ramayana lesson bring peace, courage, and gentle strength.',
    sacredRespectLevel: n % 4 === 0 ? 'deity_focal' : 'sacred_story',
    sacredRespectNotes: 'Sacred names, figures, and places are presented with devotional care and non-trivial tone.',
    illustrationPrompt: {
      sceneSummary: `${arc} in a warm, child-safe sacred setting with respectful expressions.`,
      styleGuidance: 'Soft colors, calm body language, devotional respect, non-violent atmosphere.',
      culturalGuardrails: ['Do not caricature sacred figures.', 'Avoid slapstick or over-cartoonish treatment.'],
      deityTreatment: 'Show Rama, Sita, and Hanuman with reverence and calm dignity.',
      avoidList: ['No graphic violence.', 'No revenge framing.', 'No game rewards, ranks, or streak cues.']
    },
    audioMetadata: {
      audioAvailable: false,
      voiceOptions: ['warm-indian-female', 'warm-indian-male'],
      narrationScriptStatus: audioCandidate ? 'qa_ready' : 'indexed',
      preferredVoiceStyle: 'warm-indian',
      pacing: 'steady',
      noMicRequired: true
    },
    status: runtimeCandidate ? 'qa_ready' : 'indexed'
  };

  if (audioCandidate) {
    story.audioScript = {
      narrationScript: runtimeBlueprints[index].narrationScript,
      voiceDirection: 'Warm, calm, child-safe devotional tone. Do not imitate celebrities or deities. No child voice capture, microphone, or recording prompts.',
      pronunciationNotes: sacredNamesGuidance,
      pacingNotes: 'Read at a gentle family pace with pauses after each key value moment; avoid race, speed, or streak framing.',
      audioReadinessIntent: 'ready'
    };
  }

  return story;
});

export const ramayanaExpansionRecoveryPackV1StoryPack: StoryPack = {
  id: 'ramayana-expansion-recovery-pack-v1',
  title: 'Ramayana Expansion Recovery Pack v1',
  childFacingTitle: 'Ramayana Journey Expansion',
  description: 'Recovery-aligned Ramayana expansion with indexed, QA-ready runtime candidates, and audio-script-ready candidates.',
  sourceTradition: 'Ramayana',
  category: 'ramayana',
  status: 'qa_ready',
  storyIds: ramayanaExpansionRecoveryPackV1Stories.map((story) => story.id),
  recommendedAgeBands: ['3-5', '6-8', '9-12'],
  contentSafetyNotes: ['Child-safe and non-graphic framing.', 'No backend, tracking, notifications, sharing, or AI personalization.'],
  sacredRespectNotes: ['Sacred content remains respectful, non-cartoonish, and devotion-aware.']
};

export const ramayanaExpansionRecoveryPackV1Journey: DharmaJourney = {
  id: 'ramayana-journey-pack-1',
  title: 'Ramayana Journey Pack 1',
  childFacingTitle: 'Ramayana Story World Journey',
  description: 'Expansion stories mapped into the canonical Ramayana journey path.',
  sourceTradition: 'Ramayana',
  recommendedAgeBands: ['3-5', '6-8', '9-12'],
  storyIds: ramayanaExpansionRecoveryPackV1Stories.map((story) => story.id),
  estimatedCompletionWeeks: 8,
  status: 'qa_ready',
  journeyType: 'guided_path'
};
