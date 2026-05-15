import { useCallback, useEffect, useState } from 'react';
import { Link } from 'expo-router';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { tokens } from '@/design/tokens';
import { trackEvent } from '@/lib/analytics';
import { getOnboardingState, subscribeOnboardingState } from '@/lib/onboardingState';
import { getCompletedBadge, hasCompletedStory } from '@/lib/storyProgress';
import { getTodaysJourney } from '@/services/journeys';

const actions = [
  { label: 'Explore Worlds', href: '/(child)/worlds', colors: ['#D9EDFF', '#C6E4FF'] },
  { label: 'Bedtime Story', href: '/(child)/bedtime', colors: ['#DCD8FF', '#CFC9FF'] },
  { label: 'Chant & Sing', href: '/(child)/chant', colors: ['#FFDDF0', '#FFD0E8'] },
  { label: 'My Treasures', href: '/(child)/treasures', colors: ['#FCE5BF', '#F6D69A'] }
] as const;

export default function TodayScreen() {
  const [nickname, setNickname] = useState(getOnboardingState().profile?.nickname || 'Little One');
  const [journeyComplete, setJourneyComplete] = useState(false);
  const [earnedBadge, setEarnedBadge] = useState<string | null>(null);
  const todayStory = getTodaysJourney().story;

  const refreshJourneyCard = useCallback(async () => {
    const completed = await hasCompletedStory(todayStory.slug);
    setJourneyComplete(completed);
    setEarnedBadge(completed ? await getCompletedBadge(todayStory.slug) : null);
  }, [todayStory.slug]);

  useEffect(() => subscribeOnboardingState(() => setNickname(getOnboardingState().profile?.nickname || 'Little One')), []);
  useEffect(() => {
    refreshJourneyCard().catch(() => {
      setJourneyComplete(false);
      setEarnedBadge(null);
    });
  }, [refreshJourneyCard]);

  useFocusEffect(
    useCallback(() => {
      refreshJourneyCard().catch(() => {
        setJourneyComplete(false);
        setEarnedBadge(null);
      });
    }, [refreshJourneyCard])
  );

  trackEvent('app_opened');

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.greeting}>Namaste, {nickname} ✨</Text>
      <Text style={styles.subtitle}>Choose your calm adventure for today.</Text>

      <View style={[styles.card, journeyComplete ? styles.journeyCompleteCard : styles.journeyPendingCard]}>
        <Text style={styles.journeyEyebrow}>Today&apos;s Journey</Text>
        <Text style={styles.journeyTitle}>{todayStory.title}</Text>
        <Text style={styles.journeyStatus}>{journeyComplete ? 'Completed for today ✅' : 'Ready to begin 🌼'}</Text>
        {journeyComplete && earnedBadge && <Text style={styles.badgeLine}>Earned badge: {earnedBadge}</Text>}
        <Link href='/story/krishna-shares-butter' style={styles.journeyCta}>
          {journeyComplete ? 'Read Again' : 'Start Today\'s Journey'}
        </Link>
      </View>

      <View style={styles.grid}>
        {actions.map((action) => (
          <Link key={action.label} href={action.href as never} style={[styles.card, { backgroundColor: action.colors[0] }]}>
            {action.label}
          </Link>
        ))}
      </View>
      <Link href='/(parent)/dashboard' style={styles.parentPortal}>Parent Space</Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: tokens.spacing.lg, backgroundColor: tokens.colors.cloud, gap: 10 },
  greeting: { fontSize: 30, fontWeight: '800', color: tokens.colors.textPrimary },
  subtitle: { fontSize: 17, color: '#5C4A3B', marginBottom: tokens.spacing.sm },
  grid: { gap: tokens.spacing.sm },
  card: { fontSize: 20, fontWeight: '700', borderRadius: 24, padding: tokens.spacing.lg, minHeight: 96, overflow: 'hidden', color: '#3F2B1D' },
  journeyPendingCard: { backgroundColor: '#FFE3B8', borderWidth: 1, borderColor: '#F2CC90' },
  journeyCompleteCard: { backgroundColor: '#E2F5E8', borderWidth: 1, borderColor: '#B8E1C4' },
  journeyEyebrow: { fontSize: 13, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.8, color: '#754827' },
  journeyTitle: { fontSize: 22, fontWeight: '800', color: '#3F2B1D', marginTop: 2 },
  journeyStatus: { fontSize: 16, fontWeight: '700', color: '#5C4A3B', marginTop: 6 },
  badgeLine: { fontSize: 15, color: '#375E42', marginTop: 4, fontWeight: '700' },
  journeyCta: { marginTop: 10, alignSelf: 'flex-start', backgroundColor: '#E78739', color: '#FFFFFF', fontWeight: '800', fontSize: 16, borderRadius: 14, paddingHorizontal: 16, paddingVertical: 10, overflow: 'hidden' },
  parentPortal: { marginTop: 'auto', textAlign: 'center', color: tokens.colors.peacock, fontWeight: '700', fontSize: 16 }
});
