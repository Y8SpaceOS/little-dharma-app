import { useCallback, useEffect, useState } from 'react';
import { Link } from 'expo-router';
import { AppState, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { tokens } from '@/design/tokens';
import { trackEvent } from '@/lib/analytics';
import { getOnboardingState, subscribeOnboardingState } from '@/lib/onboardingState';
import { getCompletedBadge, hasCompletedStory } from '@/lib/storyProgress';
import { getTodaysJourney, getVrindavanJourneyPath } from '@/services/journeys';
import { markThresholdEntered, shouldShowThreshold } from '@/lib/thresholdState';

const actions = [
  { label: 'Explore Worlds', href: '/(child)/worlds', colors: ['#D9EDFF', '#C6E4FF'] },
  { label: 'Bedtime Story', href: '/(child)/bedtime', colors: ['#DCD8FF', '#CFC9FF'] },
  { label: 'Chant & Sing', href: '/(child)/chant', colors: ['#FFDDF0', '#FFD0E8'] },
  { label: 'My Treasures', href: '/(child)/treasures', colors: ['#FCE5BF', '#F6D69A'] }
] as const;

export default function TodayScreen() {
  const [nickname, setNickname] = useState(getOnboardingState().profile?.nickname || 'Little One');
  const [status, setStatus] = useState<'ready' | 'completed' | 'path-completed'>('ready');
  const [earnedBadge, setEarnedBadge] = useState<string | null>(null);
  const [storySlug, setStorySlug] = useState<string | null>(null);
  const [storyTitle, setStoryTitle] = useState('Krishna Shares Butter With Friends');
  const [storyValue, setStoryValue] = useState('Kindness');
  const [showThreshold, setShowThreshold] = useState(false);

  const refreshJourneyCard = useCallback(async () => {
    const nextStory = await getTodaysJourney();

    if (!nextStory) {
      const firstStory = getVrindavanJourneyPath()[0];
      setStorySlug(firstStory.story.slug);
      setStoryTitle('Week 1 complete! You finished Vrindavan 🌟');
      setStoryValue('All seven values practiced with love');
      setEarnedBadge(null);
      setStatus('path-completed');
      return;
    }

    setStorySlug(nextStory.story.slug);
    setStoryTitle(nextStory.story.title);
    setStoryValue(nextStory.story.value);
    const completed = await hasCompletedStory(nextStory.story.slug);
    setStatus(completed ? 'completed' : 'ready');
    setEarnedBadge(completed ? await getCompletedBadge(nextStory.story.slug) : null);
  }, []);

  useEffect(() => subscribeOnboardingState(() => setNickname(getOnboardingState().profile?.nickname || 'Little One')), []);

  const refreshThresholdVisibility = useCallback(() => {
    shouldShowThreshold()
      .then((shouldShow) => setShowThreshold(shouldShow))
      .catch(() => setShowThreshold(true));
  }, []);

  useEffect(() => {
    refreshJourneyCard().catch(() => {
      setStatus('ready');
      setEarnedBadge(null);
    });

    refreshThresholdVisibility();
  }, [refreshJourneyCard, refreshThresholdVisibility]);

  useFocusEffect(
    useCallback(() => {
      refreshJourneyCard().catch(() => {
        setStatus('ready');
        setEarnedBadge(null);
      });
      refreshThresholdVisibility();
    }, [refreshJourneyCard, refreshThresholdVisibility])
  );


  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextState) => {
      if (nextState === 'active') {
        refreshThresholdVisibility();
      }
    });

    return () => {
      subscription.remove();
    };
  }, [refreshThresholdVisibility]);

  trackEvent('app_opened');

  const ctaLabel = status === 'path-completed' ? 'Revisit Vrindavan Stories' : status === 'completed' ? 'Continue Vrindavan Path' : "Start Today's Journey";

  const enterChildJourney = useCallback(() => {
    setShowThreshold(false);
    markThresholdEntered().catch(() => undefined);
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.greeting}>Namaste, {nickname} ✨</Text>
      <Text style={styles.subtitle}>Choose your calm adventure for today.</Text>

      <View style={[styles.card, status === 'path-completed' ? styles.journeyCompleteCard : styles.journeyPendingCard]}>
        <Text style={styles.journeyEyebrow}>Today&apos;s Journey</Text>
        <Text style={styles.journeyTitle}>{storyTitle}</Text>
        <Text style={styles.metaLine}>World: Vrindavan • Value: {storyValue}</Text>
        <Text style={styles.journeyStatus}>{status === 'path-completed' ? 'Vrindavan path complete' : status === 'completed' ? 'Completed' : 'Ready to begin'}</Text>
        <Text style={styles.ritualTag}>{status === 'path-completed' ? 'Keep your 10-minute ritual glowing each day' : 'Story + value + shloka'}</Text>
        {status === 'path-completed' && (
          <Text style={styles.completionCopy}>
            You completed all 7 stories! Choose your next cozy step below.
          </Text>
        )}
        {earnedBadge && <Text style={styles.badgeLine}>Earned badge: {earnedBadge}</Text>}
        {status !== 'path-completed' && storySlug && <Link href={`/story/${storySlug}` as never} style={styles.journeyCta}>{ctaLabel}</Link>}
        {status === 'path-completed' && (
          <View style={styles.completeActionsWrap}>
            <Link href='/(child)/worlds' style={styles.journeyCta}>{ctaLabel}</Link>
            <Link href='/(child)/treasures' style={styles.secondaryCta}>View My Treasures</Link>
            <Link href='/(parent)/dashboard' style={styles.secondaryCta}>Open Parent Dashboard</Link>
            <Link href='/(child)/chant' style={styles.secondaryCta}>Continue today’s reflection</Link>
          </View>
        )}
      </View>

      <View style={styles.grid}>
        {actions.map((action) => (
          <Link key={action.label} href={action.href as never} style={[styles.card, { backgroundColor: action.colors[0] }]}>
            {action.label}
          </Link>
        ))}
      </View>
      <Link href='/(parent)/dashboard' style={styles.parentPortal}>Parent Space</Link>

      {showThreshold && (
        <View style={styles.thresholdOverlay}>
          <View style={styles.thresholdCard}>
            <Text style={styles.thresholdIcon}>🪔</Text>
            <Text style={styles.thresholdTitle}>Let’s enter quietly.</Text>
            <Text style={styles.thresholdCopy}>A little story. A little stillness.</Text>
            <Text style={styles.thresholdCopy}>Begin today’s Little Dharma.</Text>
            <Pressable onPress={enterChildJourney} style={styles.thresholdButton} accessibilityRole='button'>
              <Text style={styles.thresholdButtonText}>Enter Today’s Journey</Text>
            </Pressable>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: tokens.spacing.lg, backgroundColor: tokens.colors.cloud, gap: 10 },
  greeting: { fontSize: 30, fontWeight: '800', color: tokens.colors.textPrimary },
  subtitle: { fontSize: 17, color: '#5C4A3B', marginBottom: tokens.spacing.sm },
  metaLine: { fontSize: 14, color: '#6A513D', marginTop: 4 },
  grid: { gap: tokens.spacing.sm },
  card: { fontSize: 20, fontWeight: '700', borderRadius: 24, padding: tokens.spacing.lg, minHeight: 96, overflow: 'hidden', color: '#3F2B1D' },
  journeyPendingCard: { backgroundColor: '#FFE3B8', borderWidth: 1, borderColor: '#F2CC90' },
  journeyCompleteCard: { backgroundColor: '#E2F5E8', borderWidth: 1, borderColor: '#B8E1C4' },
  journeyEyebrow: { fontSize: 13, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.8, color: '#754827' },
  journeyTitle: { fontSize: 22, fontWeight: '800', color: '#3F2B1D', marginTop: 2 },
  journeyStatus: { fontSize: 16, fontWeight: '700', color: '#5C4A3B', marginTop: 6 },
  ritualTag: { fontSize: 13, color: '#7A4C25', marginTop: 2, fontWeight: '700' },
  completionCopy: { marginTop: 8, fontSize: 14, lineHeight: 20, color: '#2F5D3E', fontWeight: '600' },
  badgeLine: { fontSize: 15, color: '#375E42', marginTop: 4, fontWeight: '700' },
  journeyCta: { marginTop: 10, alignSelf: 'flex-start', backgroundColor: '#E78739', color: '#FFFFFF', fontWeight: '800', fontSize: 16, borderRadius: 14, paddingHorizontal: 16, paddingVertical: 10, overflow: 'hidden' },
  completeActionsWrap: { marginTop: 2, gap: 8 },
  secondaryCta: { alignSelf: 'flex-start', backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#9BCDAA', color: '#2F5D3E', fontWeight: '700', fontSize: 15, borderRadius: 14, paddingHorizontal: 14, paddingVertical: 9, overflow: 'hidden' },
  parentPortal: { marginTop: 'auto', textAlign: 'center', color: tokens.colors.peacock, fontWeight: '700', fontSize: 16 },
  thresholdOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(246, 236, 225, 0.95)',
    justifyContent: 'center',
    padding: tokens.spacing.lg
  },
  thresholdCard: {
    backgroundColor: '#FFF9F1',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#E8D7C2',
    paddingVertical: 28,
    paddingHorizontal: 22,
    alignItems: 'center',
    shadowColor: '#A57B49',
    shadowOpacity: 0.14,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4
  },
  thresholdIcon: { fontSize: 32 },
  thresholdTitle: { marginTop: 12, fontSize: 28, fontWeight: '800', color: '#4A3725', textAlign: 'center' },
  thresholdCopy: { marginTop: 8, fontSize: 17, lineHeight: 24, color: '#6A513D', textAlign: 'center' },
  thresholdButton: {
    marginTop: 18,
    backgroundColor: '#E78739',
    borderRadius: 999,
    paddingHorizontal: 22,
    paddingVertical: 12
  },
  thresholdButtonText: { fontSize: 16, fontWeight: '800', color: '#FFFFFF' }
});
