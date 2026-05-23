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

const arcTitles = [
  'Ayodhya and King Dasharatha','The birth of Rama','Rama and his brothers','Learning from Guru Vashishta','Vishwamitra visits Ayodhya','Rama protects the sages','Rama and Lakshmana travel with Vishwamitra','The bow of Shiva','Sita’s swayamvara','Rama and Sita’s wedding','Life in Ayodhya','Kaikeyi’s boons','Rama accepts exile calmly','Sita chooses to go with Rama','Lakshmana’s devotion','The people of Ayodhya grieve','Bharata’s sorrow','Bharata keeps Rama’s sandals','Life in the forest','Meeting the sages','Shabari waits with devotion','The golden deer','Sita is taken to Lanka','Jatayu’s courage','Rama searches for Sita','Meeting Hanuman','Sugriva and friendship','Hanuman learns of Sita','Hanuman leaps to Lanka','Hanuman finds Sita','Sita’s courage in Ashoka Vatika','Hanuman brings Rama’s ring','Hanuman returns with hope','The bridge to Lanka','The vanaras work together','Vibhishana chooses dharma','Rama shows compassion','Lakshmana’s courage','Hanuman brings the healing herb','Goodness wins over pride','Sita returns with dignity','Return to Ayodhya','Lamps of welcome','Rama Rajya and responsibility','Truthfulness in Rama’s life','Sita’s strength','Lakshmana’s service','Hanuman’s humility','Bharata’s loyalty','Shabari’s patience','Jatayu’s sacrifice','Vibhishana’s courage','The value of keeping promises','The value of listening to elders','The value of serving family','The value of choosing dharma','The value of patience in difficulty','The value of friendship','The value of courage with kindness','The value of humility after success','Forest kindness story','Rama comforts others','Sita’s faith in difficult times','Hanuman speaks gently','Lakshmana protects with care','Sugriva learns responsibility','Angada’s courage','Sampati gives hope','The ocean crossing','Building together','Prayers before action','Rama’s gentle leadership','Hanuman remembers his strength','Sita keeps hope alive','Ravana’s pride as a warning','Mandodari’s wisdom','Vibhishana speaks truth','Rama forgives where possible','The joy of returning home','Diwali and Rama’s return','Why we light diyas','Why families tell Ramayana','Rama as a caring son','Sita as courage and grace','Hanuman as devotion and service','Lakshmana as loyal helper','Bharata as selfless brother','Shabari as patient devotee','Jatayu as brave protector','Vibhishana as truth-speaker','Choosing right over easy','Keeping calm during change','Helping without showing off','Listening before acting','Being brave without being harsh','Respecting promises','Serving with love','Hope during long journeys','Coming home with gratitude','The Ramayana’s gentle lessons'
] as const;

const values = ['Dharma', 'Kindness', 'Patience', 'Service', 'Truthfulness', 'Devotion', 'Humility', 'Courage'];
const sacredNamesGuidance = 'Pronounce clearly: Rama (RAH-muh), Sita (SEE-tah), Lakshmana (LUKSH-muh-nuh), Hanuman (HUH-noo-maan), Ayodhya (uh-YO-dhya), Vishwamitra (VISH-wah-mih-truh), Janaka (JAH-nuh-kuh), Mithila (MIH-thih-lah), Dandaka (DUN-duh-kuh), Kishkindha (KISH-kin-dhaa), Lanka (LUN-kaa), Ravana (RAH-vuh-nuh), Vibhishana (VEE-bhee-shuh-nuh).';

export const ramayanaExpansionRecoveryPackV1Stories: ExtendedStory[] = arcTitles.map((arc, index) => {
  const n = index + 1;
  const runtimeCandidate = n <= 40;
  const audioCandidate = n <= 25;
  const primaryValue = values[index % values.length];
  const secondaryValues = [values[(index + 1) % values.length], values[(index + 2) % values.length]];
  const storyId = `ramayana-expansion-v1-${String(n).padStart(3, '0')}`;

  const base: ExtendedStory = {
    id: storyId,
    storyId,
    slug: `ramayana-expansion-v1-${String(n).padStart(3, '0')}`,
    title: arc,
    shortTitle: arc.split(' ').slice(0, 3).join(' '),
    summary: `${arc} in a child-safe Ramayana retelling focused on dharma, kindness, and family wisdom.`,
    sourceTradition: 'Ramayana',
    sourceTextOrTraditionNote: 'Respectful and simplified Ramayana retelling for family listening and reflection.',
    storyPackId: 'ramayana-expansion-recovery-pack-v1',
    primaryCategoryId: 'ramayana_journey',
    secondaryCategoryIds: ['ramayana_journey'],
    journeyId: 'ramayana-expansion-recovery-pack-v1',
    journeyOrder: n,
    ageBands: n % 3 === 0 ? ['3-5', '6-8'] : ['6-8', '9-12'],
    recommendedAgeBand: '6-8',
    durationMinutes: runtimeCandidate ? 7 : 5,
    primaryValue,
    secondaryValues,
    characters: ['Rama', 'Sita', 'Lakshmana', 'Hanuman'],
    panels: runtimeCandidate
      ? [1, 2, 3, 4].map((panel) => ({ id: `p${panel}`, title: `Part ${panel}`, text: `${arc}: gentle moment ${panel} showing dharma, calm courage, and care for others.` }))
      : [{ id: 'p1', title: 'Indexed Summary', text: `${arc} encourages gentle values and respectful understanding.` }],
    parentNote: runtimeCandidate
      ? {
          sourceContext: `Ramayana arc ${n} presented respectfully with non-violent, family-safe framing.`,
          valueExplained: `${primaryValue} is practiced through thoughtful action and compassion.`,
          discussionPrompt: `What does ${primaryValue.toLowerCase()} look like in our family this week?`,
          practicePrompt: 'Choose one gentle action of service together today.',
          cautionNote: 'Keep sacred references respectful and avoid fear-heavy framing.'
        }
      : {
          sourceContext: 'Indexed content prepared for QA progression.', valueExplained: 'Values-first story planning.', discussionPrompt: 'How can we practice kindness?', practicePrompt: 'Share one kind act.', cautionNote: 'Maintain child-safe sacred framing.'
        },
    reflectionPrompt: runtimeCandidate ? `How can we practice ${primaryValue.toLowerCase()} with kindness today?` : 'How does this story guide gentle choices?',
    ritualPrompt: 'Take a calm breath and offer gratitude for wisdom and family care.',
    completionBlessing: 'May this story bring courage, peace, and dharma-guided kindness.',
    sacredRespectLevel: n % 4 === 0 ? 'deity_focal' : 'sacred_story',
    sacredRespectNotes: 'Sacred names and scenes are presented with devotional respect, calm tone, and no trivialization.',
    illustrationPrompt: { sceneSummary: `${arc} in a warm, child-safe setting.`, styleGuidance: 'Respectful, soft, family-friendly sacred tone.', culturalGuardrails: ['No caricature of sacred characters.', 'Keep devotional dignity and cultural care.'], deityTreatment: 'Reverent and gentle portrayal with calm expressions.', avoidList: ['No graphic violence.', 'No revenge framing.', 'No game-like rewards or scoring.'] },
    audioMetadata: { audioAvailable: false, voiceOptions: ['warm-indian-female', 'warm-indian-male'], narrationScriptStatus: audioCandidate ? 'qa_ready' : 'indexed', preferredVoiceStyle: 'warm-indian', pacing: 'steady', noMicRequired: true },
    status: runtimeCandidate ? 'runtime_ready' : 'indexed'
  };

  if (audioCandidate) {
    base.audioScript = {
      narrationScript: `${arc}. In this gentle Ramayana retelling, children hear how dharma is lived through kindness, courage, humility, and loving service. The tone remains calm and family-friendly, inviting reflection without fear or harshness. Each moment guides children to choose truth, patience, and care for others with gratitude.`,
      voiceDirection: 'Warm, calm, child-safe, and respectful devotional narration. Do not imitate celebrities or deities. No child voice capture or microphone prompts.',
      pronunciationNotes: sacredNamesGuidance,
      pacingNotes: 'Maintain gentle pacing with short pauses after key value lines; avoid race, streak, or speed framing.',
      audioReadinessIntent: 'ready'
    };
  }

  return base;
});

export const ramayanaExpansionRecoveryPackV1StoryPack: StoryPack = {
  id: 'ramayana-expansion-recovery-pack-v1',
  title: 'Ramayana Expansion Recovery Pack v1',
  childFacingTitle: 'Ramayana Journey Expansion',
  description: 'Recovery-aligned Ramayana expansion with indexed, runtime-ready candidate, and audio-script-ready candidate coverage.',
  sourceTradition: 'Ramayana',
  category: 'ramayana',
  status: 'qa_ready',
  storyIds: ramayanaExpansionRecoveryPackV1Stories.map((s) => s.id),
  recommendedAgeBands: ['3-5', '6-8', '9-12'],
  contentSafetyNotes: ['Child-safe and non-graphic framing.', 'No backend, tracking, notifications, sharing, or AI personalization.'],
  sacredRespectNotes: ['Sacred content remains respectful, non-cartoonish, and devotion-aware.']
};

export const ramayanaExpansionRecoveryPackV1Journey: DharmaJourney = {
  id: 'ramayana-expansion-recovery-pack-v1',
  title: 'Ramayana Expansion Recovery Journey v1',
  childFacingTitle: 'Ramayana Journey Expansion',
  description: 'Expanded Ramayana Journey map with 100 indexed experiences and staged readiness.',
  sourceTradition: 'Ramayana',
  recommendedAgeBands: ['3-5', '6-8', '9-12'],
  storyIds: ramayanaExpansionRecoveryPackV1Stories.map((s) => s.id),
  estimatedCompletionWeeks: 8,
  status: 'qa_ready',
  journeyType: 'guided_path'
};
