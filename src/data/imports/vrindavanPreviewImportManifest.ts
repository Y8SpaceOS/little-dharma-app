import type { ContentImportManifest } from '@/types/contentImport';

export const vrindavanPreviewImportManifest: ContentImportManifest = {
  id: 'vrindavan-preview-import-v1',
  title: 'Vrindavan Story World Preview Import Scaffold',
  description: 'Local preview scaffold manifest for Story Import Pipeline v1 using small Vrindavan-derived draft entries.',
  version: '1.0.0-preview',
  sourceTradition: 'Vrindavan Story World',
  category: 'values',
  status: 'indexed',
  importMode: 'seed_preview',
  storyPack: {
    id: 'vrindavan-story-world-preview-pack-v1',
    title: 'Vrindavan Preview Pack',
    childFacingTitle: 'Vrindavan Story World Preview',
    description: 'Small local preview pack for import pipeline validation only.',
    sourceTradition: 'Vrindavan',
    category: 'values',
    status: 'indexed',
    storyIds: ['vrindavan-preview-kindness-lamp', 'vrindavan-preview-sharing-fruit', 'vrindavan-preview-listening-heart'],
    recommendedAgeBands: ['3-5', '6-8'],
    contentSafetyNotes: ['Preview scaffold only; not full editorial QA coverage yet.'],
    sacredRespectNotes: ['Keep devotional framing warm, accurate, and non-performative.']
  },
  stories: [
    {
      id: 'vrindavan-preview-kindness-lamp', slug: 'kindness-lamp-preview', title: 'The Kindness Lamp', shortTitle: 'Kindness Lamp', summary: 'A gentle Story World preview where a child shares light with a friend.', sourceTradition: 'Vrindavan values tale', sourceTextOrTraditionNote: 'Local draft inspired by existing Vrindavan tone.', storyPackId: 'vrindavan-story-world-preview-pack-v1', journeyId: 'vrindavan-preview-gentle-values-journey-v1', journeyOrder: 1, ageBands: ['3-5', '6-8'], recommendedAgeBand: '3-5', durationMinutes: 6, primaryValue: 'Kindness', secondaryValues: ['Sharing'], characters: ['Aarav', 'Mira'],
      panels: [{ id: 'p1', title: 'A small diya glows', text: 'Aarav lights a small diya and smiles softly.' }, { id: 'p2', title: 'Light is shared', text: 'He brings the diya to Mira so they can read together.', interactionPrompt: 'Who can you share something gentle with today?' }],
      parentNote: { sourceContext: 'Family evening diya practice context.', valueExplained: 'Children feel safer when kindness is practiced in small actions.', discussionPrompt: 'When did sharing light help someone feel included?', practicePrompt: 'Invite your child to share one helpful action before bedtime.', cautionNote: 'Avoid framing this as a performance challenge.' },
      reflectionPrompt: 'How did sharing the light change the feeling in the room?', ritualPrompt: 'Take one calm breath and offer a quiet thanks together.', completionBlessing: 'May your kindness brighten every heart nearby.', sacredRespectLevel: 'general',
      illustrationPrompt: { sceneSummary: 'Two children share warm diya light while reading.', styleGuidance: 'Soft evening tones, child-safe expressions, warm textures.', culturalGuardrails: ['Respect sacred symbols.', 'Avoid caricature.'], deityTreatment: 'No deity focal scene in this preview.', avoidList: ['No device-frame overlays.', 'No game reward visuals.'] },
      audioMetadata: { audioAvailable: false, voiceOptions: ['gentle-preview-voice'], narrationScriptStatus: 'draft', preferredVoiceStyle: 'calm-storyteller', pacing: 'slow', noMicRequired: true },
      status: 'indexed'
    },
    {
      id: 'vrindavan-preview-sharing-fruit', slug: 'sharing-fruit-preview', title: 'The Shared Fruit Basket', shortTitle: 'Shared Fruit', summary: 'A Story World preview of children sharing fruit after prayer time.', sourceTradition: 'Vrindavan community value', sourceTextOrTraditionNote: 'Local draft for import structure preview.', storyPackId: 'vrindavan-story-world-preview-pack-v1', ageBands: ['3-5', '6-8'], recommendedAgeBand: '6-8', durationMinutes: 7, primaryValue: 'Generosity', secondaryValues: ['Friendship'], characters: ['Leela', 'Nikhil'],
      panels: [{ id: 'p1', title: 'Fruit basket arrives', text: 'Leela sees a basket of fruit set near the family altar.' }, { id: 'p2', title: 'Everyone gets a share', text: 'She helps distribute fruit so no one is left out.' }],
      parentNote: { sourceContext: 'Shared prasadam-inspired family moment.', valueExplained: 'Generosity grows when children notice others first.', discussionPrompt: 'How can we make sure everyone feels included?', practicePrompt: 'Let your child hand out fruit or snacks at home.', cautionNote: 'Keep language gentle and never shame slower children.' },
      reflectionPrompt: 'How did sharing change everyone’s mood?', ritualPrompt: 'Offer gratitude before eating together.', completionBlessing: 'May generosity flow through your hands with joy.', sacredRespectLevel: 'ritual_context',
      illustrationPrompt: { sceneSummary: 'Children sharing a fruit basket near a peaceful home shrine.', styleGuidance: 'Warm colors, natural posture, respectful altar distance.', culturalGuardrails: ['Honor sacred spaces respectfully.'], deityTreatment: 'Background devotional context only.', avoidList: ['No reward icons.', 'No comparison overlays.'] },
      audioMetadata: { audioAvailable: false, voiceOptions: ['gentle-preview-voice'], narrationScriptStatus: 'draft', preferredVoiceStyle: 'calm-storyteller', pacing: 'steady', noMicRequired: true },
      status: 'qa_ready'
    },
    {
      id: 'vrindavan-preview-listening-heart', slug: 'listening-heart-preview', title: 'The Listening Heart', shortTitle: 'Listening Heart', summary: 'A Story World preview about listening patiently to a younger sibling.', sourceTradition: 'Vrindavan family dharma value', sourceTextOrTraditionNote: 'Local draft for scaffold validation.', storyPackId: 'vrindavan-story-world-preview-pack-v1', journeyId: 'vrindavan-preview-gentle-values-journey-v1', journeyOrder: 2, ageBands: ['6-8', '9-12'], recommendedAgeBand: '6-8', durationMinutes: 8, primaryValue: 'Patience', secondaryValues: ['Compassion'], characters: ['Riya', 'Kabir'],
      panels: [{ id: 'p1', title: 'A pause before reply', text: 'Riya pauses and listens when Kabir speaks slowly.' }, { id: 'p2', title: 'A calmer ending', text: 'Because she listened, the siblings solve the problem kindly.' }],
      parentNote: { sourceContext: 'Family listening practice rooted in ahimsa.', valueExplained: 'Listening first helps reduce conflict and keeps speech gentle.', discussionPrompt: 'What changed when Riya listened before answering?', practicePrompt: 'Try a one-minute listening circle tonight.', cautionNote: 'Guide without forcing perfect behavior.' },
      reflectionPrompt: 'What does a listening heart feel like?', ritualPrompt: 'Place a hand on your heart and take three quiet breaths.', completionBlessing: 'May your words and listening bring peace.', sacredRespectLevel: 'general',
      illustrationPrompt: { sceneSummary: 'Two siblings speaking calmly in a warm family room.', styleGuidance: 'Soft lines, expressive eyes, calm posture.', culturalGuardrails: ['Keep cultural details accurate and simple.'], deityTreatment: 'None required for this family scene.', avoidList: ['No pressure counters.', 'No level-up motifs.'] },
      audioMetadata: { audioAvailable: false, voiceOptions: ['gentle-preview-voice'], narrationScriptStatus: 'draft', preferredVoiceStyle: 'warm-guide', pacing: 'medium', noMicRequired: true },
      status: 'indexed'
    }
  ],
  journeys: [{
    id: 'vrindavan-preview-gentle-values-journey-v1',
    title: 'Gentle Values Path Preview',
    childFacingTitle: 'Story World Gentle Values Path',
    description: 'Small journey draft for local import scaffold testing.',
    sourceTradition: 'Vrindavan',
    recommendedAgeBands: ['3-5', '6-8'],
    storyIds: ['vrindavan-preview-kindness-lamp', 'vrindavan-preview-listening-heart'],
    estimatedCompletionWeeks: 1,
    status: 'indexed',
    journeyType: 'guided_path'
  }],
  createdAtLocal: '2026-05-22T00:00:00.000Z',
  updatedAtLocal: '2026-05-22T00:00:00.000Z',
  notes: 'Local preview/import scaffold only. Not a runtime resolver replacement.'
};
