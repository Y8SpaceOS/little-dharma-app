import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { AppState, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import RouteErrorBoundary from '@/components/RouteErrorBoundary';
import { Card, GradientScreen, HeroCard, LuvluBubble, SectionHeader } from '@/components/dharmaKit';
import { getOnboardingState, subscribeOnboardingState } from '@/lib/onboardingState';
import { markThresholdEntered, shouldShowThreshold } from '@/lib/thresholdState';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { palette, radii, space, text, visualStyles } from '@/design/visualSystem';
import { buildChildHomeTrustMicrocopy } from '@/services/childHomeTrustMicrocopyService';

function TodayScreenContent() {
  const [nickname, setNickname] = useState<string | null>(getOnboardingState().profile?.nickname || null);
  const [showThreshold, setShowThreshold] = useState(false);
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const name = nickname?.trim() || 'Little One';

  useEffect(() => subscribeOnboardingState(() => setNickname(getOnboardingState().profile?.nickname || null)), []);
  const refreshThresholdVisibility = useCallback(() => shouldShowThreshold().then(setShowThreshold).catch(() => setShowThreshold(true)), []);
  useFocusEffect(useCallback(() => { refreshThresholdVisibility(); }, [refreshThresholdVisibility]));
  useEffect(() => { const s = AppState.addEventListener('change', (n) => n === 'active' && refreshThresholdVisibility()); return () => s.remove(); }, [refreshThresholdVisibility]);

  const trustCopy = useMemo(() => buildChildHomeTrustMicrocopy(), []);

  const quickStarts = useMemo(() => [
    { title: 'Continue a story', copy: 'Return to where you paused.', href: '/(child)/worlds' },
    { title: 'Pick a calm world', copy: 'Choose one story doorway together.', href: '/(child)/worlds' }
  ], []);

  return <GradientScreen gradient='body'><SafeAreaView style={styles.safe}><ScrollView contentContainerStyle={styles.content}>
    <HeroCard gradient='warm' style={styles.homeHero}>
      <Text style={styles.greeting}>Namaste, {name}</Text>
      <Text style={styles.headline}>Welcome to Little Dharma</Text>
      <Text style={styles.sub}>A warm story moment is ready for you.</Text>
    </HeroCard>

    <LuvluBubble message='Pick one doorway, take one breath, and begin with a peaceful heart.' />

    <Card style={styles.trustCard} accessibilityLabel={trustCopy.accessibilityLabel} accessibilityHint={trustCopy.accessibilityHint}>
      <Text style={styles.trustLine}>{trustCopy.calmWorldCopy}</Text>
      <Text style={styles.trustLine}>{trustCopy.noRaceCopy}</Text>
      <Text style={styles.trustLine}>{trustCopy.choiceCopy}</Text>
      <Text style={styles.trustLine}>{trustCopy.luvluHelperCopy}</Text>
    </Card>

    <HeroCard gradient='sky' style={styles.storyWorldEntry}>
      <Text style={styles.heroTitle}>Explore Story World</Text>
      <Text style={styles.sub}>Choose one world and begin.</Text>
      <Link href='/(child)/worlds' style={visualStyles.primaryCta} accessibilityRole='link' accessibilityLabel='Open Story World'>Open Story World</Link>
    </HeroCard>

    <SectionHeader>Quick starts</SectionHeader>
    <View style={styles.grid}>
      {quickStarts.map((p) => <Pressable key={p.title} onPress={() => router.push(p.href as never)} accessibilityRole='button' accessibilityLabel={p.title} accessibilityHint={p.copy} style={({ pressed }) => [styles.card, !reduceMotion && pressed && styles.cardPressed]}>
        <View style={styles.cardStack}>
          <Text style={styles.cardTitle}>{p.title}</Text>
          <Text style={styles.cardCopy}>{p.copy}</Text>
        </View>
      </Pressable>)}
    </View>

    <View style={styles.parentWrap}><Link href='/(parent)/dashboard' style={visualStyles.secondaryCta} accessibilityRole='link' accessibilityLabel='Open Parent Space'>Open Parent Space</Link></View>
  </ScrollView>

  {showThreshold && <View style={styles.overlay}><Card style={styles.thresholdCard}><Text style={styles.headline}>Enter gently</Text><Text style={styles.sub}>Take one breath before story time.</Text><Text onPress={() => { setShowThreshold(false); markThresholdEntered().catch(() => undefined); }} accessibilityRole='button' accessibilityLabel="Enter today's journey" style={[visualStyles.primaryCta, { marginTop: 12, minHeight: 44, paddingVertical: 12 }]}>Enter Today's Journey</Text></Card></View>}
  </SafeAreaView></GradientScreen>;
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  content: { padding: space.screen, gap: space.md, paddingBottom: 36 },
  homeHero: { paddingVertical: 22 },
  greeting: { ...text.subheading, color: palette.saffronInk },
  headline: { ...text.display, color: palette.ink },
  sub: { ...text.body, color: palette.muted },
  trustCard: { gap: space.xs, paddingVertical: space.lg },
  trustLine: { ...text.bodyStrong, color: palette.muted },
  storyWorldEntry: { paddingVertical: 22 },
  heroTitle: { ...text.title, color: palette.ink },
  grid: { gap: space.sm },
  card: { backgroundColor: palette.paper, borderRadius: radii.lg, borderWidth: 1, borderColor: palette.line, minHeight: 110, paddingVertical: space.lg, paddingHorizontal: space.md },
  cardPressed: { transform: [{ scale: 0.98 }], opacity: 0.94 },
  cardStack: { gap: space.xs + 1 },
  cardTitle: { ...text.heading, color: palette.ink, marginTop: 2 },
  cardCopy: { ...text.body, color: palette.muted },
  parentWrap: { paddingTop: space.xs },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(255,248,236,0.96)', justifyContent: 'center', padding: space.xl },
  thresholdCard: { alignItems: 'center' }
});

export default function TodayScreen() { return <RouteErrorBoundary surfaceName='Child Home' audience='child' primaryActionHref='/onboarding' primaryActionLabel='Go to Onboarding'><TodayScreenContent /></RouteErrorBoundary>; }
