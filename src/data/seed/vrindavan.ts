export type StoryPanel = {
  id: string;
  title: string;
  text: string;
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
    badgeName: string;
    parentReflectionPrompt: string;
    completionShareCopy: string;
  };
};

export const vrindavanJourney: StoryJourney = {
  world: { slug: 'vrindavan', title: 'Vrindavan', description: 'Sacred groves of love and kindness.' },
  character: { slug: 'krishna', name: 'Krishna' },
  value: { slug: 'kindness', name: 'Kindness' },
  story: {
    slug: 'krishna-shares-butter',
    title: 'Krishna Shares Butter With Friends',
    world: 'Vrindavan',
    character: 'Krishna',
    value: 'Kindness',
    ageBand: '4-6',
    panels: [
      { id: 'p1', title: 'Morning in Vrindavan', text: 'Golden sunlight warmed Vrindavan as Krishna skipped toward the butter room with a twinkle in his eyes.' },
      { id: 'p2', title: 'A Pot Full of Butter', text: 'He found a fresh clay pot full of creamy butter and smiled at its sweet smell.' },
      { id: 'p3', title: 'Footsteps at the Door', text: 'Krishna heard his friends nearby, sounding hungry after playing all morning.' },
      { id: 'p4', title: 'A Kind Choice', text: 'Instead of keeping it for himself, Krishna called everyone in and said, “Come, let us share!”' },
      { id: 'p5', title: 'Happy Hearts', text: 'The children laughed together, passing little scoops and thanking one another with bright faces.' },
      { id: 'p6', title: 'Kindness Glows', text: 'Krishna noticed that sharing made the butter sweeter, because kindness filled every heart.' }
    ],
    quiz: {
      question: 'What made Krishna’s friends feel happy?',
      options: ['He shared the butter with everyone', 'He hid the butter pot', 'He ran away with the butter'],
      correctAnswer: 'He shared the butter with everyone',
      gentleFeedback: 'Beautiful try. Krishna teaches us that sharing with love makes everyone feel included.'
    },
    badgeName: 'Peacock Feather of Kindness',
    parentReflectionPrompt: 'Ask your child: When did Krishna show kindness today?',
    completionShareCopy: 'Today we completed a Little Dharma kindness journey together.'
  }
};
