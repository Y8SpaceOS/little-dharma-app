export type AgeBand = '0-3' | '4-6' | '7-9' | '10-12';

export type Story = { slug: string; title: string; audioUrl: string; value: string };

export type QuizQuestion = { id: string; question: string; options: string[]; answer: string };

export type StoryPanel = {
  id: string;
  title: string;
  text: string;
};

export type StoryRitual = {
  microShlokaTitle: string;
  microShlokaText: string;
  transliteration: string;
  childMeaning: string;
  parentMeaning: string;
  ritualPrompt: string;
  reflectionQuestion: string;
  suggestedPracticeDurationSeconds: number;
};

export type StoryJourney = {
  world: { slug: string; title: string; description: string };
  character: { slug: string; name: string };
  value: { slug: string; name: string };
  story: {
    slug: string;
    title: string;
    world: string;
    character: string;
    value: string;
    ageBand: '4-6' | '7-9';
    panels: StoryPanel[];
    quiz: {
      question: string;
      options: string[];
      correctAnswer: string;
      gentleFeedback: string;
    };
    ritual: StoryRitual;
    badgeName: string;
    parentReflectionPrompt: string;
    completionShareCopy: string;
  };
};
