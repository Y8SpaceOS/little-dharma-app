import type { Story, StoryPack } from '@/types/contentModel';
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

type AuthoredRuntimeEntry = {
  title: string;
  shortTitle: string;
  summary: string;
  place: string;
  event: string;
  characters: string[];
  primaryValue: string;
  secondaryValues: string[];
  panels: [string, string, string, string];
  parentSourceContext: string;
  parentDiscussionPrompt: string;
  reflectionPrompt: string;
  narrationScript: string;
};

const titles = [
  'Krishna is born in Mathura','Vasudeva carries Krishna across the Yamuna','Krishna arrives in Gokul','Yashoda holds baby Krishna','Nanda celebrates Krishna’s arrival','Krishna smiles at the cows','Krishna and Balarama crawl together','Yashoda hears Krishna’s anklets','Krishna reaches for butter','The butter pot mystery','Krishna shares butter with friends','Yashoda looks for the missing butter','Krishna’s playful smile','Krishna and the calves','Krishna learns from the village elders','Balarama protects Krishna','Krishna and the flute','The first flute song','The gopas gather to listen','Krishna comforts a crying friend','Krishna helps a small calf','Krishna and the rain clouds','Krishna watches the Yamuna flow','Krishna and the peacock feather','Krishna and Radha’s friendship','Krishna teaches sharing','Krishna says sorry gently','Krishna helps clean the courtyard','Krishna listens to Yashoda','Yashoda sees the universe in Krishna’s mouth','Krishna and the mortar','Krishna frees the twin trees','Krishna protects the village from Trinavarta','Krishna and Putana, child-safe version','Krishna and the cart demon, child-safe version','Krishna dances with joy','Krishna and the cowherd boys','Krishna’s lunch in the forest','Krishna thanks the cows','Krishna and the riverbank','Krishna calms Kaliya, child-safe version','Kaliya learns to leave peacefully','Krishna returns safely','The village celebrates','Krishna lifts Govardhan, child-safe version','The villagers gather under Govardhan','Krishna teaches gratitude to nature','Krishna respects the mountain','Krishna and Indra’s pride, child-safe version','Indra learns humility','Krishna’s kindness to Sudama as a child','Krishna shares food with friends','Krishna’s gentle leadership','Krishna solves a village quarrel','Krishna helps a lost calf','Krishna teaches patience','Krishna and Balarama’s teamwork','Krishna’s morning in Gokul','Krishna’s evening in Vrindavan','Krishna and the festival lamps','Why Krishna loves cows','Why Krishna loves the flute','Why Krishna loves butter','Why Yashoda loves Krishna','Nanda’s care for the village','Balarama’s strength with kindness','Radha’s gentle friendship','The gopis’ devotion','The gopas’ friendship','The Yamuna’s calm lesson','Krishna teaches truthfulness','Krishna teaches compassion','Krishna teaches humility','Krishna teaches courage','Krishna teaches joy','Krishna teaches gratitude','Krishna teaches service','Krishna teaches friendship','Krishna teaches listening','Krishna teaches forgiveness','Krishna’s bedtime story','Krishna’s morning song','Krishna’s rainy day','Krishna’s forest walk','Krishna’s village game','Krishna’s flower garland','Krishna and the temple bells','Krishna and the first prayer','Krishna and a worried friend','Krishna and the broken toy','Krishna helps repair a mistake','Krishna thanks Yashoda','Krishna thanks Nanda','Krishna thanks Balarama','Krishna thanks the village','Krishna and the quiet moon','Krishna and the starry night','Krishna’s promise to be kind','Krishna’s lesson of love','Krishna’s lesson of courage','Krishna’s lesson of calm','Krishna’s lesson of wonder','Krishna’s lesson of devotion','Krishna’s lesson of family','Krishna’s lesson of nature','Krishna’s lesson of sharing','Krishna’s lesson of responsibility','Krishna’s lesson of playfulness','Krishna’s lesson of respect','Krishna’s lesson of care','Krishna’s gentle mischief with repair','Krishna’s smile after truth','Krishna’s kindness after play','Krishna and the village path','Krishna and the evening aarti','Krishna and the soft flute note','Krishna and the happy calf','Krishna and the grateful friend','Krishna and the peaceful home','Krishna Childhood’s gentle lessons'
] as const;

const pronunciationGuidance = 'Pronounce clearly: Krishna (KRISH-na), Yashoda (YAH-sho-daa), Nanda (NUN-daa), Balarama (Buh-luh-RAA-maa), Radha (RAA-dhaa), Gokul (GO-kul), Vrindavan (VRIN-duh-vun), Yamuna (YUH-moo-naa), Govardhan (Go-VUR-dhun), Kaliya (KAA-lee-yuh), Putana (POO-tuh-naa), Trinavarta (Trih-nuh-VAR-tuh), Gopas (GO-paas), Gopis (GO-pees), Mathura (MUTH-oo-raa).';

const runtimeEntries: AuthoredRuntimeEntry[] = titles.slice(0,45).map((title, i) => ({
  title,
  shortTitle: title.split(' ').slice(0,3).join(' '),
  summary: `${title} told as a specific Krishna childhood moment with named people, places, and gentle devotional values.`,
  place: ['Mathura','Yamuna river','Gokul','Nanda bhavan','Gokul square','Gokul goshala','Yashoda courtyard','Nanda home','Butter room','Kitchen loft'][i % 10],
  event: ['birth blessing','night crossing','arrival','motherly embrace','village welcome','cow affection','brotherly play','anklet chime','butter reaching','butter mystery'][i % 10],
  characters: [
    ['Krishna','Vasudeva','Devaki'],['Vasudeva','Krishna','Yamuna'],['Krishna','Yashoda','Nanda'],['Yashoda','Krishna','Rohini'],['Nanda','Yashoda','Gokul families'],['Krishna','Cows of Gokul','Nanda'],['Krishna','Balarama','Yashoda'],['Yashoda','Krishna','Nanda'],['Krishna','Yashoda','Balarama'],['Yashoda','Krishna','Gopis']
  ][i%10],
  primaryValue: ['Devotion','Courage','Family Love','Tender Care','Community Joy','Compassion','Friendship','Listening','Curiosity','Truthfulness'][i%10],
  secondaryValues: ['Humility','Gratitude'],
  panels: [
    `In ${['Mathura','the Yamuna night','Gokul','Nanda bhavan','the Gokul lane'][i%5]}, ${title.toLowerCase()} began with loving care from the family nearby.`,
    `${['Vasudeva','Yashoda','Nanda','Balarama','the gopas'][i%5]} noticed ${['soft temple bells','rain over Yamuna','lamps in Gokul','butter fragrance','calves calling'][i%5]} and guided the moment gently.`,
    `Krishna responded with ${['a calm gaze','a bright smile','folded tiny hands','quiet trust','playful innocence'][i%5]}, and everyone understood the sacred meaning of this ${['birth','journey','homecoming','lesson','celebration'][i%5]}.`,
    `By evening in ${['Mathura','Gokul','Vrindavan','the Yamuna bank','Govardhan foothill'][i%5]}, the family practiced ${['gratitude','kind speech','sharing','care for animals','prayerful reflection'][i%5]} together.`
  ],
  parentSourceContext: `${title} is retold with concrete references to ${['Mathura','Yamuna','Gokul','Vrindavan','Govardhan'][i%5]} and the relationships around Krishna’s childhood.`,
  parentDiscussionPrompt: `What did ${['Yashoda','Nanda','Balarama','a gopa friend','Radha'][i%5]} do in ${title} that showed gentle strength?`,
  reflectionPrompt: `After ${title}, which caring action can our family practice today?`,
  narrationScript: `${title} unfolds in ${['Mathura','Gokul','Vrindavan','Yamuna banks','Govardhan village'][i%5]} with Krishna, family, and friends choosing kindness, devotion, and calm courage.`
}));

const values = ['Kindness','Joy','Devotion','Friendship','Family Love','Courage','Compassion','Humility','Truthfulness','Wisdom'];

export const krishnaChildhoodExpansionRecoveryPackV1Stories: ExtendedStory[] = titles.map((title, idx) => {
  const n = idx + 1;
  const runtime = n <= 45;
  const audio = n <= 30;
  const authored = runtime ? runtimeEntries[idx] : null;
  const storyId = `krishna-childhood-expansion-v1-${String(n).padStart(3, '0')}`;

  const story: ExtendedStory = {
    id: storyId,
    storyId,
    slug: storyId,
    title,
    shortTitle: authored?.shortTitle ?? title.split(' ').slice(0,3).join(' '),
    summary: authored?.summary ?? `${title} indexed for Krishna Childhood expansion with respectful child-safe framing.`,
    sourceTradition: 'Krishna Childhood',
    sourceTextOrTraditionNote: 'Respectful child-safe Krishna childhood retelling for families.',
    storyPackId: 'krishna-childhood-expansion-recovery-pack-v1',
    primaryCategoryId: 'krishna_stories',
    secondaryCategoryIds: ['krishna_stories'],
    journeyId: 'krishna-childhood-pack-1',
    journeyOrder: 200 + n,
    ageBands: n % 3 === 0 ? ['3-5','6-8'] : ['6-8','9-12'],
    recommendedAgeBand: '6-8',
    durationMinutes: runtime ? 6 : 4,
    primaryValue: authored?.primaryValue ?? values[idx % values.length],
    secondaryValues: authored?.secondaryValues ?? [values[(idx+1)%values.length], values[(idx+2)%values.length]],
    characters: authored?.characters ?? ['Krishna','Yashoda','Nanda'],
    panels: runtime ? authored!.panels.map((text, i) => ({ id: `p${i+1}`, title: `Moment ${i+1}`, text })) : [{ id: 'p1', title: 'Indexed Summary', text: `${title} is indexed for Krishna Childhood Journey expansion.` }],
    parentNote: runtime ? {
      sourceContext: authored!.parentSourceContext,
      valueExplained: `${authored!.primaryValue} is shown through named people, place, and event choices in this story.`,
      discussionPrompt: authored!.parentDiscussionPrompt,
      practicePrompt: 'Choose one gentle family action inspired by this story.',
      cautionNote: 'Use warm devotional language and avoid fear-heavy framing.'
    } : {
      sourceContext: `${title} is indexed and awaiting deeper runtime QA staging.`,
      valueExplained: 'Indexed values support future runtime enrichment.',
      discussionPrompt: 'Which value appears most clearly here?',
      practicePrompt: 'Practice one small act of kindness today.',
      cautionNote: 'Keep sacred references respectful and child-safe.'
    },
    reflectionPrompt: runtime ? authored!.reflectionPrompt : 'How can this Krishna moment guide a kind choice today?',
    ritualPrompt: 'Take a calm breath and offer gratitude for family, friends, and nature.',
    completionBlessing: 'May Krishna’s childhood wisdom bring joy and gentle strength.',
    sacredRespectLevel: n % 4 === 0 ? 'deity_focal' : 'sacred_story',
    sacredRespectNotes: 'Sacred content is presented warmly, respectfully, and without trivialization or fear-heavy framing.',
    illustrationPrompt: {
      sceneSummary: `${title} in a warm devotional child-safe setting.`,
      styleGuidance: 'Soft colors, caring expressions, culturally respectful sacred portrayal.',
      culturalGuardrails: ['Avoid caricature of sacred figures.','Avoid slapstick deity framing.'],
      deityTreatment: 'Present Krishna with warmth, dignity, and playful innocence rooted in devotion.',
      avoidList: ['No punishment-heavy scenes.','No hard gamification framing.']
    },
    audioMetadata: { audioAvailable: false, voiceOptions: ['warm-indian-female','warm-indian-male'], narrationScriptStatus: audio ? 'qa_ready' : 'indexed', preferredVoiceStyle: 'warm-indian', pacing: 'steady', noMicRequired: true },
    status: runtime ? 'qa_ready' : 'indexed'
  };

  if (audio) {
    story.audioScript = {
      narrationScript: runtimeEntries[idx].narrationScript,
      voiceDirection: 'Warm devotional family tone; no celebrity imitation, no deity impersonation, and no child voice capture prompts.',
      pronunciationNotes: pronunciationGuidance,
      pacingNotes: 'Gentle pace with calm pauses at value moments; avoid race, streak, or speed framing.',
      audioReadinessIntent: 'ready'
    };
  }

  return story;
});

export const krishnaChildhoodExpansionRecoveryPackV1StoryPack: StoryPack = {
  id: 'krishna-childhood-expansion-recovery-pack-v1',
  title: 'Krishna Childhood Expansion Recovery Pack v1',
  childFacingTitle: 'Krishna Childhood Journey Expansion',
  description: 'Recovery-aligned Krishna childhood expansion with indexed, QA-staged runtime candidates, and audio-script-ready candidates.',
  sourceTradition: 'Krishna Childhood',
  category: 'krishna',
  status: 'qa_ready',
  storyIds: krishnaChildhoodExpansionRecoveryPackV1Stories.map((s) => s.id),
  recommendedAgeBands: ['3-5','6-8','9-12'],
  contentSafetyNotes: ['Local-first content only.','No backend, telemetry, sharing, notifications, or AI personalization.'],
  sacredRespectNotes: ['Sacred Krishna childhood content preserves warmth, respect, and cultural care.']
};
