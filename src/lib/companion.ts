export const companionV1 = {
  internalId: 'companion-v1',
  displayLabel: 'Little Dharma Guide',
  motif: '✧',
  copy: {
    homeGreeting: "Hi, I'm your Companion. Today we can take one small Journey together.",
    ritualEncouragement: 'Let’s sit with the story.',
    completion: 'You stayed with the feeling.',
    carryForward: 'Carry this value gently today.',
    bedtime: 'Rest softly tonight.'
  },
  personalityNotes: [
    'Short, calm, observant language only.',
    'Invites and reassures without pressure or comparison.',
    'No scripture quotes, divine authority, or sacred-figure voice.',
    'No child or parent personal data in companion text.'
  ]
} as const;

export type CompanionV1 = typeof companionV1;
