import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'expo-router';
import { AppState, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { tokens } from '@/design/tokens';
import RouteErrorBoundary from '@/components/RouteErrorBoundary';
import CalmLoadingState from '@/components/CalmLoadingState';
import { trackEvent } from '@/lib/analytics';
import { getOnboardingState, subscribeOnboardingState } from '@/lib/onboardingState';
import { type ChildAgeBand, getChildProfile } from '@/lib/childProfile';
import { getCompletedBadge, getLatestCarryingWord, hasCompletedStory } from '@/lib/storyProgress';
import { getTodaysJourney, getVrindavanJourneyPath } from '@/services/journeys';
import { markThresholdEntered, shouldShowThreshold } from '@/lib/thresholdState';
import { companionV1 } from '@/lib/companion';
import { storyWorldItems } from '@/data/storyWorld';

type HomeCard = { label: string; href: '/(child)/worlds' | '/(child)/bedtime' | '/(child)/treasures' | '/(child)/chant' | '/(parent)/dashboard'; description: string; colors: [string, string] };

const fallbackName = 'Little One';

const quickEntriesByAgeBand: Record<ChildAgeBand | 'default', HomeCard[]> = {
  '3-5': [
    { label: 'Bedtime Stories', href: '/(child)/bedtime', description: 'Quiet stories for a calm evening.', colors: ['#E9E2FF', '#DCCEFF'] },
    { label: 'Krishna Stories', href: '/(child)/worlds', description: 'Playful stories with gentle values.', colors: ['#D9EDFF', '#C6E4FF'] },
    { label: 'Values Garden', href: '/(child)/worlds', description: 'Small stories about kindness and care.', colors: ['#DDF7E8', '#CDEFD9'] },
    { label: 'Story World', href: '/(child)/worlds', description: 'Explore all story corners.', colors: ['#FFE8C7', '#FFD8A8'] },
    { label: 'Chant & Sing', href: '/(child)/chant', description: 'Repeat one calm ritual with joy.', colors: ['#FFDDF0', '#FFD0E8'] }
  ],
  '6-8': [
    { label: 'Story World', href: '/(child)/worlds', description: 'Choose your next story corner.', colors: ['#FFE8C7', '#FFD8A8'] },
    { label: 'Krishna Stories', href: '/(child)/worlds', description: 'Adventures and values from Vrindavan.', colors: ['#D9EDFF', '#C6E4FF'] },
    { label: 'Values Garden', href: '/(child)/worlds', description: 'Practice one value in every story.', colors: ['#DDF7E8', '#CDEFD9'] },
    { label: 'My Treasures', href: '/(child)/treasures', description: 'See your earned badges and values.', colors: ['#FCE5BF', '#F6D69A'] },
    { label: 'Chant & Sing', href: '/(child)/chant', description: 'A gentle practice for today.', colors: ['#FFDDF0', '#FFD0E8'] }
  ],
  '9-12': [
    { label: 'Dharma Journeys', href: '/(child)/worlds', description: 'Discover longer story paths.', colors: ['#FFE1EA', '#FFD0DF'] },
    { label: 'Story World', href: '/(child)/worlds', description: 'Browse all available story corners.', colors: ['#FFE8C7', '#FFD8A8'] },
    { label: 'Krishna Stories', href: '/(child)/worlds', description: 'Deeper stories and meaningful choices.', colors: ['#D9EDFF', '#C6E4FF'] },
    { label: 'My Treasures', href: '/(child)/treasures', description: 'Review values you practiced.', colors: ['#FCE5BF', '#F6D69A'] },
    { label: 'Chant & Sing', href: '/(child)/chant', description: 'A calm ritual break for your day.', colors: ['#FFDDF0', '#FFD0E8'] }
  ],
  'prefer-not-to-say': [
    { label: 'Start with Story World', href: '/(child)/worlds', description: 'A gentle place to begin today.', colors: ['#FFE8C7', '#FFD8A8'] },
    { label: 'Bedtime Stories', href: '/(child)/bedtime', description: 'Calm stories for peaceful moments.', colors: ['#E9E2FF', '#DCCEFF'] },
    { label: 'Krishna Stories', href: '/(child)/worlds', description: 'Warm stories of joy and kindness.', colors: ['#D9EDFF', '#C6E4FF'] },
    { label: 'My Treasures', href: '/(child)/treasures', description: 'A safe place for your badges.', colors: ['#FCE5BF', '#F6D69A'] },
    { label: 'Chant & Sing', href: '/(child)/chant', description: 'Gentle chanting moments.', colors: ['#FFDDF0', '#FFD0E8'] }
  ],
  default: []
};
quickEntriesByAgeBand.default = quickEntriesByAgeBand['prefer-not-to-say'];

function TodayScreenContent() {
  const [nickname, setNickname] = useState<string | null>(getOnboardingState().profile?.nickname || null);
  const [ageBand, setAgeBand] = useState<ChildAgeBand | undefined>();
  const [status, setStatus] = useState<'ready' | 'completed' | 'path-completed'>('ready');
  const [earnedBadge, setEarnedBadge] = useState<string | null>(null);
  const [storySlug, setStorySlug] = useState<string | null>(null);
  const [storyTitle, setStoryTitle] = useState('Krishna Shares Butter With Friends');
  const [storyValue, setStoryValue] = useState('Kindness');
  const [showThreshold, setShowThreshold] = useState(false);
  const [latestCarryingWord, setLatestCarryingWord] = useState<string | null>(null);
  const [isJourneyLoading, setIsJourneyLoading] = useState(true);

  const todaysStory = useMemo(() => {
    const band = ageBand ?? 'prefer-not-to-say';
    return storyWorldItems.find((item) => item.status === 'available' && item.ageBands.includes(band));
  }, [ageBand]);

  const quickEntries = useMemo(() => quickEntriesByAgeBand[ageBand ?? 'default'], [ageBand]);

  const refreshJourneyCard = useCallback(async () => {
    setIsJourneyLoading(true);
    const nextStory = await getTodaysJourney();
    if (!nextStory) {
      const firstStory = getVrindavanJourneyPath()[0];
      setStorySlug(firstStory.story.slug);
      setStoryTitle('Vrindavan path complete! You finished all 21 stories 🌟');
      setStoryValue('21 Little Dharma values practiced with love');
      setEarnedBadge(null);
      setStatus('path-completed');
      setLatestCarryingWord(await getLatestCarryingWord(getVrindavanJourneyPath()));
      setIsJourneyLoading(false);
      return;
    }
    setStorySlug(nextStory.story.slug);
    setStoryTitle(nextStory.story.title);
    setStoryValue(nextStory.story.value);
    const completed = await hasCompletedStory(nextStory.story.slug);
    setStatus(completed ? 'completed' : 'ready');
    setEarnedBadge(completed ? await getCompletedBadge(nextStory.story.slug) : null);
    setLatestCarryingWord(await getLatestCarryingWord(getVrindavanJourneyPath()));
    setIsJourneyLoading(false);
  }, []);

  useEffect(() => subscribeOnboardingState(() => setNickname(getOnboardingState().profile?.nickname || null)), []);
  useEffect(() => {
    getChildProfile().then((childProfile) => {
      setAgeBand(childProfile.ageBand);
      if (childProfile.childNameOrNickname) setNickname(childProfile.childNameOrNickname);
    }).catch(() => undefined);
  }, []);

  const refreshThresholdVisibility = useCallback(() => {
    shouldShowThreshold().then(setShowThreshold).catch(() => setShowThreshold(true));
  }, []);

  useEffect(() => { refreshJourneyCard().catch(() => setIsJourneyLoading(false)); refreshThresholdVisibility(); }, [refreshJourneyCard, refreshThresholdVisibility]);
  useFocusEffect(useCallback(() => { refreshJourneyCard().catch(() => setIsJourneyLoading(false)); refreshThresholdVisibility(); }, [refreshJourneyCard, refreshThresholdVisibility]));
  useEffect(() => { const s = AppState.addEventListener('change', (n) => n === 'active' && refreshThresholdVisibility()); return () => s.remove(); }, [refreshThresholdVisibility]);

  trackEvent('app_opened');

  const name = nickname?.trim() ? nickname.trim() : fallbackName;

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.heroWrap}>
          <Text style={styles.greeting}>Namaste, {name} ✨</Text>
          <Text style={styles.subtitle}>What shall we explore today?</Text>
          <Text style={styles.prompt}>Choose a gentle story path for today.</Text>
          <Text style={styles.prompt}>Your Companion is here for one calm step.</Text>
        </View>

        <View style={styles.companionCard}><Text style={styles.companionEyebrow}>{companionV1.motif} {companionV1.displayLabel}</Text><Text style={styles.companionCopy}>{companionV1.copy.homeGreeting}</Text></View>

        <View style={styles.todayStoryCard}>
          <Text style={styles.sectionEyebrow}>Today's Story</Text>
          {todaysStory ? (
            <>
              <Text style={styles.todayTitle}>{todaysStory.title}</Text>
              <Text style={styles.metaLine}>{todaysStory.durationMinutes} min • Value: {todaysStory.primaryValue}</Text>
              <Text style={styles.metaLine}>Story World • Ages: {todaysStory.ageBands.join(', ')}</Text>
              {todaysStory.slug ? <Link href={`/story/${todaysStory.slug}` as never} style={styles.journeyCta}>Begin Today's Story</Link> : <Link href='/(child)/worlds' style={styles.journeyCta}>Open Story World</Link>}
            </>
          ) : (
            <>
              <Text style={styles.todayTitle}>Start Here</Text>
              <Text style={styles.metaLine}>A gentle story is waiting in Story World.</Text>
              <Link href='/(child)/worlds' style={styles.journeyCta}>Start Story</Link>
            </>
          )}
        </View>

        <View style={[styles.card, status === 'path-completed' ? styles.journeyCompleteCard : styles.journeyPendingCard]}>
          {isJourneyLoading ? <CalmLoadingState surfaceName='Child Home journey summary' audience='child' variant='inline' /> : <><Text style={styles.sectionEyebrow}>Journey Map Preview</Text><Text style={styles.journeyTitle}>{storyTitle}</Text><Text style={styles.metaLine}>Dharma Journeys • Value: {storyValue}</Text>{latestCarryingWord && <Text style={styles.metaLine}>Carrying Word: {latestCarryingWord}</Text>}{earnedBadge && <Text style={styles.metaLine}>Earned badge: {earnedBadge}</Text>}{status !== 'path-completed' && storySlug ? <Link href={`/story/${storySlug}` as never} style={styles.secondaryCta}>Continue</Link> : <Link href='/(child)/worlds' style={styles.secondaryCta}>Visit Story World</Link>}</>}
        </View>

        <Text style={styles.sectionHeader}>Quick Paths</Text>
        <View style={styles.grid}>{quickEntries.map((action) => <Link key={action.label} href={action.href as never} style={[styles.quickCard, { backgroundColor: action.colors[0] }]}><Text style={styles.quickTitle}>{action.label}</Text><Text style={styles.quickDesc}>{action.description}</Text></Link>)}</View>

        <Text style={styles.sectionHeader}>Choose a Story Corner</Text>
        <View style={styles.grid}>
          {['Krishna Stories', 'Ganesha Stories', 'Bedtime Stories', 'Values Stories', 'Festival Stories', 'Dharma Journeys'].map((corner) => (
            <Link key={corner} href='/(child)/worlds' style={styles.cornerCard}><Text style={styles.quickTitle}>{corner}</Text><Text style={styles.quickDesc}>{corner === 'Krishna Stories' ? 'Explore now' : 'Opening soon'}</Text></Link>
          ))}
        </View>

        <Text style={styles.sectionHeader}>Dharma Journeys</Text>
        <View style={styles.grid}>
          {['Ramayana Journey', 'Krishna Childhood Journey', 'Ganesha Wisdom Journey'].map((item) => (
            <View key={item} style={styles.journeyPreviewCard}><Text style={styles.quickTitle}>{item}</Text><Text style={styles.quickDesc}>This story corner is being prepared.</Text></View>
          ))}
        </View>

        <Text style={styles.trustCopy}>Recommended using the broad age band saved on this device. You can change this anytime in Parent settings. Stories and progress stay local-first.</Text>
        <Link href='/(parent)/dashboard' style={styles.parentPortal} accessibilityRole='link' accessibilityLabel='Open Parent Space'>Parent Space</Link>
      </ScrollView>

      {showThreshold && <View style={styles.thresholdOverlay}><View style={styles.thresholdCard}><Text style={styles.thresholdTitle}>Let’s enter quietly.</Text><Pressable onPress={() => { setShowThreshold(false); markThresholdEntered().catch(() => undefined); }} style={styles.thresholdButton} accessibilityRole='button' accessibilityLabel='Enter today journey'><Text style={styles.thresholdButtonText}>Enter Today’s Journey</Text></Pressable></View></View>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#FFF6E8' }, scrollContent: { padding: tokens.spacing.lg, gap: 12 }, heroWrap: { backgroundColor: '#FFE5BE', borderRadius: 24, padding: 16, borderWidth: 1, borderColor: '#F3C98F' }, greeting: { fontSize: 30, fontWeight: '800', color: '#3F2B1D' }, subtitle: { fontSize: 20, fontWeight: '700', color: '#5A3A20' }, prompt: { fontSize: 15, color: '#6A513D' },
  companionCard: { backgroundColor: '#FFFDF8', borderRadius: 18, padding: 12, borderWidth: 1, borderColor: '#F1DDC2' }, companionEyebrow: { fontSize: 12, fontWeight: '700', color: '#8A6138' }, companionCopy: { fontSize: 14, color: '#5E4631' },
  todayStoryCard: { backgroundColor: '#DDF2FF', borderRadius: 22, borderWidth: 1, borderColor: '#B4D9F3', padding: 14 },
  sectionEyebrow: { fontSize: 12, fontWeight: '700', textTransform: 'uppercase', color: '#754827' }, todayTitle: { fontSize: 22, fontWeight: '800', color: '#3F2B1D', marginTop: 4 },
  sectionHeader: { fontSize: 20, fontWeight: '800', color: '#3F2B1D', marginTop: 6 }, metaLine: { fontSize: 14, color: '#6A513D', marginTop: 4 },
  card: { borderRadius: 22, padding: 14 }, journeyPendingCard: { backgroundColor: '#FFE9CB', borderWidth: 1, borderColor: '#F2CC90' }, journeyCompleteCard: { backgroundColor: '#E2F5E8', borderWidth: 1, borderColor: '#B8E1C4' }, journeyTitle: { fontSize: 18, fontWeight: '800', color: '#3F2B1D', marginTop: 4 },
  journeyCta: { marginTop: 10, alignSelf: 'flex-start', backgroundColor: '#E78739', color: '#fff', fontWeight: '800', borderRadius: 14, paddingHorizontal: 14, paddingVertical: 9, overflow: 'hidden' }, secondaryCta: { marginTop: 10, alignSelf: 'flex-start', backgroundColor: '#1F6FA8', color: '#fff', fontWeight: '700', borderRadius: 14, paddingHorizontal: 14, paddingVertical: 9, overflow: 'hidden' },
  grid: { gap: 8 }, quickCard: { borderRadius: 18, padding: 14 }, quickTitle: { fontSize: 17, fontWeight: '800', color: '#3F2B1D' }, quickDesc: { marginTop: 3, fontSize: 14, color: '#5C4A3B' },
  cornerCard: { borderRadius: 18, padding: 14, borderWidth: 1, borderColor: '#E8D7C2', backgroundColor: '#FFF9F1' },
  journeyPreviewCard: { borderRadius: 18, padding: 14, borderWidth: 1, borderColor: '#ECD8BC', backgroundColor: '#FFF7EA' },
  trustCopy: { marginTop: 10, fontSize: 12, color: '#6A513D' }, parentPortal: { textAlign: 'center', color: tokens.colors.peacock, fontWeight: '700', fontSize: 16, marginVertical: 12 },
  thresholdOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(246, 236, 225, 0.95)', justifyContent: 'center', padding: tokens.spacing.lg }, thresholdCard: { backgroundColor: '#FFF9F1', borderRadius: 30, borderWidth: 1, borderColor: '#E8D7C2', padding: 24, alignItems: 'center' }, thresholdTitle: { fontSize: 24, fontWeight: '800', color: '#4A3725' }, thresholdButton: { marginTop: 18, backgroundColor: '#E78739', borderRadius: 999, paddingHorizontal: 22, paddingVertical: 12 }, thresholdButtonText: { fontSize: 16, fontWeight: '800', color: '#FFFFFF' }
});

export default function TodayScreen() {
  return <RouteErrorBoundary surfaceName='Child Home' audience='child' primaryActionHref='/onboarding' primaryActionLabel='Go to Onboarding'><TodayScreenContent /></RouteErrorBoundary>;
}
