import { useEffect, useMemo, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { getTodaysJourney } from '@/services/journeys';
import { trackEvent } from '@/lib/analytics';
import { tokens } from '@/design/tokens';
import { getStoryCompletion, markStoryComplete } from '@/lib/storyProgress';

type Stage = 'story' | 'quiz' | 'complete';

export default function StoryScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const journey = getTodaysJourney();
  const [stage, setStage] = useState<Stage>('story');
  const [panelIndex, setPanelIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [previouslyCompleted, setPreviouslyCompleted] = useState(false);

  const story = journey.story;

  useEffect(() => {
    if (slug === story.slug) {
      trackEvent('story_started', { storySlug: slug });
      getStoryCompletion(story.slug).then((record) => setPreviouslyCompleted(Boolean(record))).catch(() => setPreviouslyCompleted(false));
    }
  }, [slug, story.slug]);

  const progressLabel = useMemo(() => `${panelIndex + 1}/${story.panels.length}`, [panelIndex, story.panels.length]);

  if (slug !== story.slug) {
    return <SafeAreaView style={styles.screen}><Text style={styles.title}>Story not found.</Text></SafeAreaView>;
  }

  const panel = story.panels[panelIndex];
  const atLastPanel = panelIndex === story.panels.length - 1;

  const onQuizSubmit = async () => {
    if (!selectedAnswer) return;
    const correct = selectedAnswer === story.quiz.correctAnswer;
    setIsCorrect(correct);
    setSubmitted(true);
    setStage('complete');
    trackEvent('quiz_completed', { storySlug: story.slug, correct });
    trackEvent('badge_earned', { badge: story.badgeName, storySlug: story.slug });
    trackEvent('story_completed', { storySlug: story.slug });
    await markStoryComplete(story.slug, story.badgeName);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.eyebrow}>Today&apos;s Journey</Text>
      <Text style={styles.title}>{story.title}</Text>
      <Text style={styles.meta}>{story.world} • {story.character} • Value: {story.value} • Age {story.ageBand}</Text>

      {stage === 'story' && (
        <View style={styles.card}>
          <Text style={styles.step}>{progressLabel}</Text>
          <Text style={styles.panelTitle}>{panel.title}</Text>
          <Text style={styles.panelText}>{panel.text}</Text>
          <View style={styles.dotsWrap}>
            {story.panels.map((storyPanel) => (
              <View key={storyPanel.id} style={[styles.dot, storyPanel.id === panel.id && styles.dotActive]} />
            ))}
          </View>
          <View style={styles.controls}>
            <Pressable disabled={panelIndex === 0} style={[styles.button, panelIndex === 0 && styles.buttonDisabled]} onPress={() => setPanelIndex((prev) => Math.max(0, prev - 1))}>
              <Text style={styles.buttonText}>Back</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => {
              if (atLastPanel) {
                setStage('quiz');
                trackEvent('journey_started', { world: journey.world.slug });
                return;
              }
              setPanelIndex((prev) => Math.min(story.panels.length - 1, prev + 1));
            }}>
              <Text style={styles.buttonText}>{atLastPanel ? 'Go to Quiz' : 'Next'}</Text>
            </Pressable>
          </View>
        </View>
      )}

      {stage === 'quiz' && (
        <View style={styles.card}>
          <Text style={styles.panelTitle}>Gentle Quiz Time</Text>
          <Text style={styles.panelText}>{story.quiz.question}</Text>
          {story.quiz.options.map((option) => (
            <Pressable key={option} onPress={() => setSelectedAnswer(option)} style={[styles.option, selectedAnswer === option && styles.optionSelected]}>
              <Text style={styles.optionText}>{option}</Text>
            </Pressable>
          ))}
          <Pressable onPress={onQuizSubmit} style={[styles.button, !selectedAnswer && styles.buttonDisabled]} disabled={!selectedAnswer}>
            <Text style={styles.buttonText}>See my badge</Text>
          </Pressable>
        </View>
      )}

      {stage === 'complete' && (
        <View style={styles.card}>
          <Text style={styles.panelTitle}>Badge Earned: {story.badgeName} 🦚</Text>
          <Text style={styles.panelText}>{isCorrect ? 'Wonderful! You chose a kindness answer.' : story.quiz.gentleFeedback}</Text>
          <Text style={styles.parentPrompt}>For Parent: {story.parentReflectionPrompt}</Text>
          <View style={styles.shareCard}>
            <Text style={styles.shareTitle}>Parent-safe shareable moment</Text>
            <Text style={styles.shareCopy}>{story.completionShareCopy}</Text>
            <Text style={styles.shareHint}>Private family sharing only. No public child profile is shown.</Text>
          </View>
          <Text style={styles.revisit}>{previouslyCompleted ? 'You completed this journey before. Kindness grows with practice!' : 'This is your first completion of this journey. Great ritual start!'}</Text>
          <Text style={styles.revisit}>{submitted ? 'Journey complete for today.' : ''}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: tokens.spacing.lg, backgroundColor: '#FFF8EF', gap: 10 },
  eyebrow: { fontSize: 14, fontWeight: '700', color: '#B06122', textTransform: 'uppercase', letterSpacing: 0.8 },
  title: { fontSize: 30, fontWeight: '800', color: '#3E2A1A' },
  meta: { fontSize: 14, color: '#7B5C43' },
  card: { marginTop: 8, backgroundColor: '#FFFFFF', borderRadius: 24, padding: tokens.spacing.lg, gap: 12, borderWidth: 1, borderColor: '#F2DCC2' },
  step: { fontSize: 12, color: '#9B7A5D', fontWeight: '700' },
  panelTitle: { fontSize: 24, fontWeight: '800', color: '#412C1A' },
  panelText: { fontSize: 21, lineHeight: 31, color: '#5C4330' },
  dotsWrap: { flexDirection: 'row', gap: 6, alignItems: 'center', justifyContent: 'center', marginVertical: 2 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#E7CBAE' },
  dotActive: { backgroundColor: '#CC7A2E', width: 22 },
  controls: { marginTop: 4, flexDirection: 'row', justifyContent: 'space-between', gap: 10 },
  button: { flex: 1, backgroundColor: '#E78739', borderRadius: 16, alignItems: 'center', paddingVertical: 14 },
  buttonDisabled: { opacity: 0.45 },
  buttonText: { color: '#FFFFFF', fontWeight: '800', fontSize: 18 },
  option: { borderRadius: 16, borderWidth: 1, borderColor: '#E6C8A8', padding: 14, backgroundColor: '#FFF8EE' },
  optionSelected: { borderColor: '#CE7A2D', backgroundColor: '#FFE6C7' },
  optionText: { fontSize: 18, color: '#4B3524', fontWeight: '600' },
  parentPrompt: { marginTop: 4, fontSize: 16, color: '#5A4A36', fontWeight: '600' },
  shareCard: { borderRadius: 16, backgroundColor: '#F8F2FF', padding: 12, gap: 6, borderWidth: 1, borderColor: '#DACAF6' },
  shareTitle: { fontSize: 16, fontWeight: '800', color: '#4E3B76' },
  shareCopy: { fontSize: 16, color: '#4B3C68' },
  shareHint: { fontSize: 13, color: '#6B5A88' },
  revisit: { fontSize: 13, color: '#7A644C' }
});
