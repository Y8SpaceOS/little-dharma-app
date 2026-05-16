import { useEffect, useState } from 'react';
import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { getStoryJourneyBySlug } from '@/services/journeys';
import { trackEvent } from '@/lib/analytics';
import { tokens } from '@/design/tokens';
import { getStoryCompletion, markStoryComplete } from '@/lib/storyProgress';
import { companionV1 } from '@/lib/companion';

type Stage = 'story' | 'ritual' | 'pause' | 'quiz' | 'complete' | 'bedtime';

const PAUSE_DURATION_MS = 13000;

export default function StoryScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const router = useRouter();
  const journey = slug ? getStoryJourneyBySlug(slug) : null;
  const [stage, setStage] = useState<Stage>('story');
  const [panelIndex, setPanelIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [previouslyCompleted, setPreviouslyCompleted] = useState(false);

  useEffect(() => {
    if (journey) {
      trackEvent('story_started', { storySlug: journey.story.slug });
      getStoryCompletion(journey.story.slug)
        .then((record) => setPreviouslyCompleted(Boolean(record)))
        .catch(() => setPreviouslyCompleted(false));
    }
  }, [journey]);

  if (!journey) {
    return (
      <SafeAreaView style={styles.screen}>
        <View style={styles.fallbackCard}>
          <Text style={styles.title}>Story not found</Text>
          <Text style={styles.meta}>This journey is not available right now. Please return to Child Home.</Text>
          <Link href='/(child)/today' style={styles.homeLink}>Back to Child Home</Link>
        </View>
      </SafeAreaView>
    );
  }

  const { story } = journey;
  const progressLabel = `Panel ${panelIndex + 1} of ${story.panels.length}`;
  const progressPercent = Math.round(((panelIndex + 1) / story.panels.length) * 100);
  const panel = story.panels[panelIndex];
  const atLastPanel = panelIndex === story.panels.length - 1;
  const shareCopyVariants = [
    {
      label: 'Default family copy',
      copy: story.completionShareCopy
    },
    {
      label: 'Grandparent-friendly copy',
      copy: `A gentle Little Dharma moment to share with grandparents: today we completed “${story.title},” practiced ${story.value.toLowerCase()}, and ended with a calm reflection.`
    },
    {
      label: 'Close family group copy',
      copy: `Family update from our 10-minute Little Dharma ritual: ${story.title} is complete, ${story.value.toLowerCase()} was today’s value, and ${story.badgeName} was earned. Sharing this joy with our close family circle.`
    }
  ];

  const bedtimeClosingLine = `Parent: “I saw ${story.value.toLowerCase()} in you tonight.” Child: “Tomorrow I will practice it again with a calm heart.”`;

  useEffect(() => {
    if (stage !== 'pause') return;
    const timer = setTimeout(() => setStage('quiz'), PAUSE_DURATION_MS);
    return () => clearTimeout(timer);
  }, [stage]);

  const onQuizSubmit = async () => {
    if (!selectedAnswer) return;
    const correct = selectedAnswer === story.quiz.correctAnswer;
    setIsCorrect(correct);
    setStage('complete');
    trackEvent('quiz_completed', { storySlug: story.slug, correct });
    trackEvent('badge_earned', { badge: story.badgeName, storySlug: story.slug });
    trackEvent('story_completed', { storySlug: story.slug });
    await markStoryComplete(story.slug, story.badgeName, story.value);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerCard}>
          <Text style={styles.eyebrow}>Today&apos;s Journey</Text>
          <Text style={styles.title}>{story.title}</Text>
          <Text style={styles.meta}>{story.world} • {story.character} • Value: {story.value} • Age {story.ageBand}</Text>
        </View>

        {stage === 'story' && (
          <View style={styles.card}>
            <View style={styles.progressHeader}>
              <Text style={styles.step}>{progressLabel}</Text>
              <Text style={styles.stepPercent}>{progressPercent}% complete</Text>
            </View>
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: `${progressPercent}%` }]} />
            </View>
            <Text style={styles.panelTitle}>{panel.title}</Text>
            <View style={styles.storyBodyCard}>
              <Text style={styles.panelText}>{panel.text}</Text>
            </View>
            <View style={styles.dotsWrap}>
              {story.panels.map((storyPanel) => (
                <View key={storyPanel.id} style={[styles.dot, storyPanel.id === panel.id && styles.dotActive]} />
              ))}
            </View>
            <View style={styles.controls}>
              <Pressable
                disabled={panelIndex === 0}
                style={[styles.button, panelIndex === 0 && styles.buttonDisabled]}
                onPress={() => setPanelIndex((prev) => Math.max(0, prev - 1))}
              >
                <Text style={styles.buttonText}>Back</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => {
                  if (atLastPanel) {
                    setStage('ritual');
                    trackEvent('journey_started', { world: journey.world.slug });
                    return;
                  }
                  setPanelIndex((prev) => Math.min(story.panels.length - 1, prev + 1));
                }}
              >
                <Text style={styles.buttonText}>{atLastPanel ? 'Continue to Ritual' : 'Next Panel'}</Text>
              </Pressable>
            </View>
          </View>
        )}


        {stage === 'ritual' && (
          <View style={styles.card}>
            <Text style={styles.ritualStageEyebrow}>Ritual Moment</Text>
            <Text style={styles.panelTitle}>A calm heart pause</Text>
            <Text style={styles.ritualFraming}>Breathe softly together. This is your family&apos;s tiny sacred minute.</Text>

            <View style={styles.companionInlineCard}>
              <Text style={styles.companionInlineLabel}>{companionV1.motif} {companionV1.displayLabel}</Text>
              <Text style={styles.companionInlineCopy}>{companionV1.copy.ritualEncouragement}</Text>
            </View>
            <View style={styles.ritualCard}>
              <Text style={styles.ritualLabel}>{story.ritual.microShlokaTitle}</Text>
              <View style={styles.ritualScriptCard}>
                <Text style={styles.ritualText}>{story.ritual.microShlokaText}</Text>
                <Text style={styles.ritualTransliteration}>{story.ritual.transliteration}</Text>
              </View>
              <View style={styles.ritualDetailBlock}>
                <Text style={styles.ritualDetailLabel}>Meaning</Text>
                <Text style={styles.ritualMeaning}>{story.ritual.childMeaning}</Text>
              </View>
              <View style={styles.ritualDetailBlock}>
                <Text style={styles.ritualDetailLabel}>Practice together</Text>
                <Text style={styles.ritualPromptText}>{story.ritual.ritualPrompt}</Text>
              </View>
              <View style={styles.ritualDetailBlock}>
                <Text style={styles.ritualDetailLabel}>Gentle reflection</Text>
                <Text style={styles.ritualPromptText}>{story.ritual.reflectionQuestion}</Text>
              </View>
              <Text style={styles.ritualDuration}>Practice time: about {Math.max(1, Math.round(story.ritual.suggestedPracticeDurationSeconds / 60))} minute{story.ritual.suggestedPracticeDurationSeconds >= 120 ? 's' : ''}.</Text>
            </View>
            <Pressable style={styles.button} onPress={() => setStage('pause')}>
              <Text style={styles.buttonText}>Continue to Quiz</Text>
            </Pressable>
          </View>
        )}

        {stage === 'pause' && (
          <View style={styles.pauseCard}>
            <Text style={styles.pauseEyebrow}>Quiet Pause</Text>
            <View style={styles.pauseGlowWrap}>
              <View style={styles.pauseGlowOuter}>
                <View style={styles.pauseGlowInner} />
              </View>
            </View>
            <Text style={styles.pauseTitle}>Let&apos;s sit with the story.</Text>
            <Text style={styles.pauseLine}>Take one quiet breath.</Text>
            <Text style={styles.pauseLine}>What did your heart notice?</Text>
            <View style={styles.companionInlineCard}>
              <Text style={styles.companionInlineLabel}>{companionV1.motif} {companionV1.displayLabel}</Text>
              <Text style={styles.companionInlineCopy}>{companionV1.copy.ritualEncouragement}</Text>
            </View>
          </View>
        )}

        {stage === 'quiz' && (
          <View style={styles.card}>
            <Text style={styles.panelTitle}>Gentle Quiz Time</Text>
            <Text style={styles.panelText}>{story.quiz.question}</Text>
            {story.quiz.options.map((option) => (
              <Pressable
                key={option}
                onPress={() => setSelectedAnswer(option)}
                style={[styles.option, selectedAnswer === option && styles.optionSelected]}
              >
                <Text style={styles.optionText}>{option}</Text>
              </Pressable>
            ))}
            <Text style={styles.quizHint}>Choose the kindest answer you would try in real life.</Text>
            <Pressable onPress={onQuizSubmit} style={[styles.button, !selectedAnswer && styles.buttonDisabled]} disabled={!selectedAnswer}>
              <Text style={styles.buttonText}>See my badge</Text>
            </Pressable>
          </View>
        )}


        {stage === 'bedtime' && (
          <View style={styles.bedtimeCard}>
            <Text style={styles.bedtimeEyebrow}>Bedtime Mode</Text>
            <Text style={styles.bedtimeTitle}>Soft closing ritual for tonight</Text>
            <Text style={styles.bedtimeBody}>Settle in together with a slow breath and one gentle reflection before sleep.</Text>

            <View style={styles.companionInlineCard}>
              <Text style={styles.companionInlineLabel}>{companionV1.motif} {companionV1.displayLabel}</Text>
              <Text style={styles.companionInlineCopy}>{companionV1.copy.bedtime}</Text>
            </View>

            <View style={styles.bedtimeSection}>
              <Text style={styles.bedtimeLabel}>Value practiced</Text>
              <Text style={styles.bedtimeValue}>{story.value}</Text>
            </View>

            <View style={styles.bedtimeSection}>
              <Text style={styles.bedtimeLabel}>Gentle reflection question</Text>
              <Text style={styles.bedtimeBody}>{story.ritual.reflectionQuestion}</Text>
            </View>

            <View style={styles.bedtimeSection}>
              <Text style={styles.bedtimeLabel}>Breathing or gratitude prompt</Text>
              <Text style={styles.bedtimeBody}>Take three slow breaths together, then each share one small thing you are grateful for from today.</Text>
            </View>

            <View style={styles.bedtimeSection}>
              <Text style={styles.bedtimeLabel}>Parent-child closing line</Text>
              <Text style={styles.bedtimeBody}>{bedtimeClosingLine}</Text>
            </View>

            <Pressable style={styles.button} onPress={() => setStage('complete')}>
              <Text style={styles.buttonText}>Back to Completion</Text>
            </Pressable>
          </View>
        )}

        {stage === 'complete' && (
          <View style={styles.card}>
            <Text style={styles.panelTitle}>Badge Earned: {story.badgeName} 🦚</Text>
            <Text style={styles.panelText}>{isCorrect ? 'Wonderful! You chose a kindness answer.' : story.quiz.gentleFeedback}</Text>
            <Text style={styles.parentPrompt}>For Parent: {story.parentReflectionPrompt}</Text>
            <Text style={styles.parentPrompt}>Parent reflection bridge: {story.ritual.parentMeaning}</Text>
            <Text style={styles.ritualLine}>Today&apos;s 10-minute ritual: story + value + shloka + reflection</Text>


            <View style={styles.carryingWordCard}>
              <Text style={styles.carryingWordEyebrow}>Carrying Word</Text>
              <Text style={styles.carryingWordTitle}>Today you carry: {story.value}</Text>
              <Text style={styles.carryingWordCopy}>Carry this word gently today.</Text>
            </View>

            <View style={styles.companionInlineCard}>
              <Text style={styles.companionInlineLabel}>{companionV1.motif} {companionV1.displayLabel}</Text>
              <Text style={styles.companionInlineCopy}>{companionV1.copy.completion} {companionV1.copy.carryForward}</Text>
            </View>
            <Pressable style={styles.bedtimeButton} onPress={() => setStage('bedtime')}>
              <Text style={styles.bedtimeButtonText}>Enter Bedtime Mode</Text>
            </Pressable>

            <View style={styles.shareCard}>
              <Text style={styles.shareBrand}>Little Dharma</Text>
              <Text style={styles.shareTitle}>Parent-safe family share card</Text>
              <Text style={styles.shareSubtitle}>Made for private family screenshots, with child privacy protected.</Text>
              <View style={styles.shareStoryBlock}>
                <Text style={styles.shareStoryLabel}>Completed story</Text>
                <Text style={styles.shareStoryTitle}>{story.title}</Text>
              </View>
              <View style={styles.sharePillsRow}>
                <View style={styles.sharePill}>
                  <Text style={styles.sharePillLabel}>Value practiced</Text>
                  <Text style={styles.sharePillValue}>{story.value}</Text>
                </View>
                <View style={styles.sharePill}>
                  <Text style={styles.sharePillLabel}>Badge earned</Text>
                  <Text style={styles.sharePillValue}>{story.badgeName}</Text>
                </View>
              </View>
              <Text style={styles.shareSummary}>Ritual summary: Story, chant seed, and reflection completed with calm presence in about 10 minutes.</Text>
              <View style={styles.shareVariantsWrap}>
                {shareCopyVariants.map((variant) => (
                  <View key={variant.label} style={styles.shareVariantCard}>
                    <Text style={styles.shareVariantLabel}>{variant.label}</Text>
                    <Text style={styles.shareCopy}>{variant.copy}</Text>
                  </View>
                ))}
              </View>
              <Text style={styles.shareHint}>Private family sharing only. No child name, age, location, account details, or public profile shown.</Text>
              <Text style={styles.shareHintSecondary}>Take a screenshot to share with family.</Text>
            </View>
            <Text style={styles.revisit}>
              {previouslyCompleted
                ? 'You completed this journey before. Kindness grows with practice!'
                : 'This is your first completion of this journey. Great ritual start!'}
            </Text>
            <View style={styles.controls}>
              <Pressable style={styles.button} onPress={() => { setPanelIndex(0); setSelectedAnswer(null); setIsCorrect(false); setStage('story'); }}>
                <Text style={styles.buttonText}>Read Again</Text>
              </Pressable>
              <Pressable style={styles.buttonSecondary} onPress={() => router.push('/(child)/today')}>
                <Text style={styles.buttonSecondaryText}>Done for Today</Text>
              </Pressable>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#FFF8EF' },
  scrollContent: { padding: tokens.spacing.lg, gap: 14, paddingBottom: tokens.spacing.xl },
  headerCard: { backgroundColor: '#FFF3E5', borderRadius: 24, borderWidth: 1, borderColor: '#F4D9BC', padding: tokens.spacing.lg, gap: 8 },
  eyebrow: { fontSize: 14, fontWeight: '700', color: '#B06122', textTransform: 'uppercase', letterSpacing: 0.8 },
  title: { fontSize: 30, fontWeight: '800', color: '#3E2A1A' },
  meta: { fontSize: 14, color: '#7B5C43', lineHeight: 20 },
  card: { marginTop: 4, backgroundColor: '#FFFFFF', borderRadius: 24, padding: tokens.spacing.lg, gap: 14, borderWidth: 1, borderColor: '#F2DCC2' },
  fallbackCard: { margin: tokens.spacing.lg, backgroundColor: '#FFFFFF', borderRadius: 24, padding: tokens.spacing.lg, gap: 12, borderWidth: 1, borderColor: '#F2DCC2' },
  homeLink: { marginTop: 8, alignSelf: 'flex-start', backgroundColor: '#E78739', color: '#FFFFFF', fontWeight: '800', fontSize: 16, borderRadius: 14, paddingHorizontal: 16, paddingVertical: 10, overflow: 'hidden' },
  progressHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  step: { fontSize: 12, color: '#9B7A5D', fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.5 },
  stepPercent: { fontSize: 12, color: '#A06C39', fontWeight: '700' },
  progressTrack: { height: 8, backgroundColor: '#F4DFCB', borderRadius: 999, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: '#D7863A', borderRadius: 999 },
  panelTitle: { fontSize: 26, fontWeight: '800', color: '#412C1A' },
  storyBodyCard: { backgroundColor: '#FFF9F2', borderRadius: 18, borderWidth: 1, borderColor: '#F2DECB', paddingHorizontal: 14, paddingVertical: 16 },
  panelText: { fontSize: 21, lineHeight: 31, color: '#5C4330' },
  dotsWrap: { flexDirection: 'row', gap: 6, alignItems: 'center', justifyContent: 'center', marginVertical: 2 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#E7CBAE' },
  dotActive: { backgroundColor: '#CC7A2E', width: 22 },
  controls: { marginTop: 4, flexDirection: 'row', justifyContent: 'space-between', gap: 10 },
  button: { flex: 1, backgroundColor: '#E78739', borderRadius: 16, alignItems: 'center', paddingVertical: 14 },
  buttonSecondary: { flex: 1, backgroundColor: '#FFF3E5', borderRadius: 16, alignItems: 'center', paddingVertical: 14, borderWidth: 1, borderColor: '#E7B785' },
  buttonDisabled: { opacity: 0.45 },
  buttonText: { color: '#FFFFFF', fontWeight: '800', fontSize: 18 },
  buttonSecondaryText: { color: '#8C4B10', fontWeight: '800', fontSize: 18 },
  option: { borderRadius: 16, borderWidth: 1, borderColor: '#E6C8A8', padding: 14, backgroundColor: '#FFF8EE' },
  optionSelected: { borderColor: '#CE7A2D', backgroundColor: '#FFE6C7' },
  optionText: { fontSize: 18, color: '#4B3524', fontWeight: '600' },
  quizHint: { fontSize: 13, color: '#7D6147', fontWeight: '600' },
  parentPrompt: { marginTop: 4, fontSize: 16, color: '#5A4A36', fontWeight: '600' },

  companionInlineCard: { backgroundColor: '#FFF9F0', borderRadius: 14, borderWidth: 1, borderColor: '#F0DFC8', paddingHorizontal: 12, paddingVertical: 10, gap: 4 },
  companionInlineLabel: { fontSize: 11, color: '#7D5A36', fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.6 },
  companionInlineCopy: { fontSize: 15, color: '#5D4732', lineHeight: 22, fontWeight: '600' },

  shareCard: { borderRadius: 24, backgroundColor: '#F8F2FF', paddingHorizontal: 18, paddingVertical: 18, gap: 14, borderWidth: 1, borderColor: '#D8C6F5', shadowColor: '#583596', shadowOpacity: 0.14, shadowRadius: 16, shadowOffset: { width: 0, height: 7 }, elevation: 5 },
  shareBrand: { fontSize: 11, fontWeight: '800', color: '#7B5FAF', textTransform: 'uppercase', letterSpacing: 1.1 },
  shareTitle: { fontSize: 22, fontWeight: '800', color: '#3F2C63', lineHeight: 28 },
  shareSubtitle: { fontSize: 14, color: '#5D4C83', lineHeight: 21, marginTop: -4 },
  shareStoryBlock: { backgroundColor: '#FFFFFF', borderRadius: 16, borderWidth: 1, borderColor: '#E2D5F7', paddingHorizontal: 12, paddingVertical: 12, gap: 6 },
  shareStoryLabel: { fontSize: 11, color: '#745A9D', fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.7 },
  shareStoryTitle: { fontSize: 19, color: '#3F2C63', fontWeight: '700', lineHeight: 25 },
  sharePillsRow: { gap: 10 },
  sharePill: { backgroundColor: '#EEE4FF', borderRadius: 14, paddingVertical: 10, paddingHorizontal: 12, borderWidth: 1, borderColor: '#D5C2F8', gap: 2 },
  sharePillLabel: { color: '#6B5294', fontSize: 11, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.6 },
  sharePillValue: { color: '#3F2C63', fontSize: 17, fontWeight: '800', lineHeight: 23 },
  shareSummary: { fontSize: 15, lineHeight: 23, color: '#4B3C68', fontWeight: '600' },
  shareVariantsWrap: { gap: 10 },
  shareVariantCard: { backgroundColor: '#FFFFFF', borderRadius: 14, borderWidth: 1, borderColor: '#E2D5F7', paddingHorizontal: 12, paddingVertical: 10, gap: 6 },
  shareVariantLabel: { color: '#6D5598', fontSize: 11, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.6 },
  shareCopy: { fontSize: 15, color: '#4B3C68', lineHeight: 23 },
  shareHint: { fontSize: 13, color: '#5F4A84', fontWeight: '700', lineHeight: 19 },
  shareHintSecondary: { fontSize: 14, color: '#5B4A79', fontWeight: '700', lineHeight: 20 },
  revisit: { fontSize: 13, color: '#7A644C' },
  ritualLabel: { fontSize: 14, fontWeight: '700', color: '#7B5C43', textTransform: 'uppercase', letterSpacing: 0.6 },
  ritualStageEyebrow: { fontSize: 12, color: '#8B6A4C', fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1 },
  ritualFraming: { fontSize: 15, color: '#6E523B', lineHeight: 22, marginTop: -4 },
  ritualCard: { backgroundColor: '#FFFBF5', borderRadius: 18, borderWidth: 1, borderColor: '#F1DEC8', padding: 14, gap: 12 },
  ritualScriptCard: { backgroundColor: '#FFF4E7', borderRadius: 16, borderWidth: 1, borderColor: '#EFCDAA', paddingHorizontal: 14, paddingVertical: 16, gap: 10 },
  ritualText: { fontSize: 30, fontWeight: '800', color: '#3E2A1A', textAlign: 'center', lineHeight: 38 },
  ritualTransliteration: { fontSize: 17, color: '#6A4A30', fontStyle: 'italic', textAlign: 'center', lineHeight: 25 },
  ritualDetailBlock: { gap: 4 },
  ritualDetailLabel: { fontSize: 12, color: '#8B6A4C', fontWeight: '800', letterSpacing: 0.5, textTransform: 'uppercase' },
  ritualMeaning: { fontSize: 17, lineHeight: 26, color: '#5C4330' },
  ritualPromptText: { fontSize: 16, lineHeight: 24, color: '#5C4330' },
  ritualDuration: { fontSize: 13, color: '#7A644C', fontWeight: '700', marginTop: 2 },
  pauseCard: { marginTop: 4, borderRadius: 24, borderWidth: 1, borderColor: '#D8CBB9', backgroundColor: '#F6EFE5', padding: tokens.spacing.lg, gap: 14, alignItems: 'center' },
  pauseEyebrow: { fontSize: 12, color: '#8A6B4D', fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1 },
  pauseGlowWrap: { alignItems: 'center', justifyContent: 'center', marginTop: 2 },
  pauseGlowOuter: { width: 122, height: 122, borderRadius: 61, backgroundColor: '#EEDAC2', alignItems: 'center', justifyContent: 'center' },
  pauseGlowInner: { width: 72, height: 72, borderRadius: 36, backgroundColor: '#FFF5E7' },
  pauseTitle: { fontSize: 28, color: '#3E2A1A', fontWeight: '800', textAlign: 'center', lineHeight: 34 },
  pauseLine: { fontSize: 18, color: '#6A4F37', fontWeight: '600', textAlign: 'center', lineHeight: 25 },
  ritualLine: { marginTop: 4, fontSize: 14, color: '#6B5A88', fontWeight: '700' },
  carryingWordCard: { backgroundColor: '#FFF4DE', borderWidth: 1, borderColor: '#F0D2A4', borderRadius: 18, padding: 14, gap: 4 },
  carryingWordEyebrow: { fontSize: 12, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.8, color: '#8A5A2D' },
  carryingWordTitle: { fontSize: 20, fontWeight: '800', color: '#4A2B17' },
  carryingWordCopy: { fontSize: 15, lineHeight: 21, color: '#6B4B2F' },
  bedtimeButton: { borderRadius: 14, borderWidth: 1, borderColor: '#C8BADF', backgroundColor: '#F4EEFF', paddingVertical: 11, alignItems: 'center' },
  bedtimeButtonText: { fontSize: 15, fontWeight: '700', color: '#4E3A73' },
  bedtimeCard: { marginTop: 4, backgroundColor: '#F7F5FF', borderRadius: 24, padding: tokens.spacing.lg, gap: 14, borderWidth: 1, borderColor: '#D9D1EC' },
  bedtimeEyebrow: { fontSize: 12, color: '#6C5A95', fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1 },
  bedtimeTitle: { fontSize: 26, fontWeight: '800', color: '#3F3556' },
  bedtimeSection: { backgroundColor: '#FFFFFF', borderRadius: 16, borderWidth: 1, borderColor: '#E2DBF2', padding: 12, gap: 5 },
  bedtimeLabel: { fontSize: 11, color: '#6D5F8F', fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.6 },
  bedtimeValue: { fontSize: 20, fontWeight: '700', color: '#443A5D' },
  bedtimeBody: { fontSize: 16, lineHeight: 23, color: '#564D6D' }
});
