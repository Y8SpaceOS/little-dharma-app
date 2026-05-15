import { useEffect, useMemo, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { getTodaysJourney } from '@/services/journeys';
import { trackEvent } from '@/lib/analytics';

type Step = 'intro' | 'quiz' | 'complete';

export default function StoryScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const journey = getTodaysJourney();
  const [step, setStep] = useState<Step>('intro');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [badgeEarned, setBadgeEarned] = useState(false);

  useEffect(() => {
    if (slug === journey.story.slug) {
      trackEvent('story_started', { storySlug: slug });
    }
  }, [slug, journey.story.slug]);

  const isComplete = useMemo(() => Object.keys(answers).length === journey.quiz.length, [answers, journey.quiz.length]);

  if (slug !== journey.story.slug) return <SafeAreaView><Text>Story not found.</Text></SafeAreaView>;

  const chooseAnswer = (questionId: string, answer: string) => {
    setAnswers((prev: Record<string, string>) => ({ ...prev, [questionId]: answer }));
    const next = { ...answers, [questionId]: answer };
    if (Object.keys(next).length === journey.quiz.length) {
      setBadgeEarned(true);
      setStep('complete');
      trackEvent('quiz_completed', { storySlug: slug });
      trackEvent('badge_earned', { badge: journey.badge.slug });
      trackEvent('story_completed', { storySlug: slug });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 20, gap: 10 }}>
      <Text style={{ fontSize: 24, fontWeight: '700' }}>{journey.story.title}</Text>
      {step === 'intro' && (
        <View style={{ gap: 8 }}>
          <Text>Intro: Krishna learns kindness through sharing.</Text>
          <Text>Audio URL: {journey.story.audioUrl}</Text>
          <Text onPress={() => { setStep('quiz'); trackEvent('journey_started', { world: journey.world.slug }); }}>Start Quiz</Text>
        </View>
      )}

      {step === 'quiz' && (
        <View style={{ gap: 10 }}>
          <Text>Quiz Time</Text>
          {journey.quiz.map((q) => (
            <View key={q.id} style={{ gap: 6 }}>
              <Text>• {q.question}</Text>
              {q.options.map((opt) => (
                <Text key={opt} onPress={() => chooseAnswer(q.id, opt)}>
                  {answers[q.id] === opt ? '✅ ' : ''}{opt}
                </Text>
              ))}
            </View>
          ))}
          <Text>Progress: {Object.keys(answers).length}/{journey.quiz.length}</Text>
        </View>
      )}

      {step === 'complete' && (
        <View style={{ gap: 8 }}>
          <Text>Completion: Journey finished.</Text>
          <Text>Reward: {badgeEarned ? journey.badge.name : 'Pending'}</Text>
          <Text>Parent prompt: {journey.parentPrompt}</Text>
          <Text>{isComplete ? 'All answers submitted.' : 'Incomplete quiz.'}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
