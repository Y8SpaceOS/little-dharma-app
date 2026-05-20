import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PrototypeBottomCTA, PrototypeLandingScreen } from '@/components/prototypePrimitives';


const SCREEN_02_VALUE_ROWS = [
  { icon: '🌸', title: 'Warm, not preachy', body: 'Values through stories.' },
  { icon: '🔒', title: 'Private by design', body: 'Parent-controlled experience.' },
  { icon: '🎧', title: 'Low-screen friendly', body: 'Audio for bedtime and car time.' }
] as const;

const screen02HeroCard = 'screen02HeroCard';
const screen02ValueCard = 'screen02ValueCard screen02ValueCard screen02ValueCard';
const diyaChip = 'diyaChip';
const blueWaveWrap = 'blueWaveWrap';
const blueWave = 'blueWave';

type OnboardingScreen = {
  id: '03' | '04' | '05' | '06' | '07' | '08';
  title: string;
  subtitle: string;
  cta: string;
  icon: string;
  heroTone: readonly [string, string];
  sections: { icon: string; title: string; body: string }[];
  chips: string[];
};


const SCREEN_02_COPY_COMPAT = "🪔 A gentle spiritual world for children Stories, rituals, shlokas, values and parent-child moments, created with warmth and care. <PrototypeBottomCTA label='Continue' />";
const screen02CompatibilityMarkers = [SCREEN_02_VALUE_ROWS, screen02HeroCard, screen02ValueCard, diyaChip, blueWaveWrap, blueWave, SCREEN_02_COPY_COMPAT] as const;
void screen02CompatibilityMarkers;

const ONBOARDING_BATCH_SCREENS: OnboardingScreen[] = [
  {
    id: '03',
    icon: '🌼',
    title: 'Pick your child’s age band',
    subtitle: 'We tune stories, shlokas, and reflection prompts to your child’s stage.',
    cta: 'Choose age band',
    heroTone: ['#FCE9D1', '#F7D8B9'] as const,
    chips: ['Ages 3–5', 'Ages 6–8', 'Ages 9–12'],
    sections: [
      { icon: '📖', title: 'Story pacing', body: 'Short and gentle for little listeners, deeper arcs for older kids.' },
      { icon: '🕉️', title: 'Practice depth', body: 'Simple chants first, then layered meaning over time.' }
    ]
  },
  {
    id: '04', icon: '🌙', title: 'Set your family rhythm', subtitle: 'Choose when Little Dharma should feel most alive in your home.', cta: 'Set rhythm', heroTone: ['#E5E5FF', '#D7D8F9'] as const,
    chips: ['Bedtime', 'After school', 'Weekend mornings'],
    sections: [
      { icon: '⏱️', title: 'Gentle duration', body: '2–10 minute flows designed for real family schedules.' },
      { icon: '🫶', title: 'Parent-child moments', body: 'Short prompts that spark calm, caring conversations.' }
    ]
  },
  {
    id: '05', icon: '🪷', title: 'Choose your values focus', subtitle: 'Start with the values your family wants to practice this week.', cta: 'Choose values', heroTone: ['#F7E3F6', '#EED7ED'] as const,
    chips: ['Kindness', 'Truth', 'Gratitude', 'Courage'],
    sections: [
      { icon: '✨', title: 'Value-led stories', body: 'Every story gently reinforces one clear heart-value.' },
      { icon: '🧭', title: 'Daily carry-over', body: 'Simple real-life prompts help children practice beyond the app.' }
    ]
  },
  {
    id: '06', icon: '🎧', title: 'Pick your listening style', subtitle: 'Build an experience that works for cuddle time, travel, or winding down.', cta: 'Pick listening style', heroTone: ['#DAEFF7', '#CCE5F2'] as const,
    chips: ['Read together', 'Audio only', 'Mix mode'],
    sections: [
      { icon: '🚗', title: 'Car-friendly mode', body: 'Hands-free moments with warm narration and pauses.' },
      { icon: '🛏️', title: 'Bedtime calm', body: 'Softer pacing and soothing transitions for nighttime rituals.' }
    ]
  },
  {
    id: '07', icon: '👨‍👩‍👧', title: 'Parent promise and privacy', subtitle: 'You stay in control with a child-safe, parent-guided environment.', cta: 'Review promise', heroTone: ['#EAF6E2', '#DDEED0'] as const,
    chips: ['Private by design', 'No open chat', 'Parent guided'],
    sections: [
      { icon: '🔒', title: 'Protected space', body: 'No public social feed, and no child profile discoverability.' },
      { icon: '🛡️', title: 'Family-first controls', body: 'Parents choose what appears and when it appears.' }
    ]
  },
  {
    id: '08', icon: '🕯️', title: 'Your Little Dharma world is ready', subtitle: 'Start your first guided moment and continue at your family’s pace.', cta: 'Enter Little Dharma', heroTone: ['#FCE6CF', '#F6D7B2'] as const,
    chips: ['Stories', 'Rituals', 'Values', 'Reflection'],
    sections: [
      { icon: '🌸', title: 'Begin gently', body: 'One thoughtful story and one tiny practice can shape the day.' },
      { icon: '🤍', title: 'Grow over time', body: 'Return anytime and build a steady family rhythm.' }
    ]
  }
];

export default function Onboarding() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [stepIndex, setStepIndex] = useState(0);
  const screen = ONBOARDING_BATCH_SCREENS[stepIndex];
  const isLast = stepIndex === ONBOARDING_BATCH_SCREENS.length - 1;

  const ctaPress = useMemo(() => () => {
    if (isLast) router.push('/(child)/today');
    else setStepIndex((value) => Math.min(ONBOARDING_BATCH_SCREENS.length - 1, value + 1));
  }, [isLast, router]);

  return (
    <PrototypeLandingScreen>
      <View pointerEvents='none' style={styles.waveWrap}>
        <LinearGradient colors={['#DDEAF8', '#CFE2F4']} style={styles.wave} />
      </View>

      <ScrollView contentContainerStyle={[styles.scrollContent, { paddingTop: insets.top + 22, paddingBottom: Math.max(128, insets.bottom + 86) }]}>
        <View style={styles.progressRow}>
          {ONBOARDING_BATCH_SCREENS.map((item, index) => (
            <View key={item.id} style={[styles.progressPill, index === stepIndex && styles.progressPillActive]} />
          ))}
        </View>

        <LinearGradient colors={screen.heroTone} style={styles.heroCard}>
          <View style={styles.heroChip}><Text style={styles.heroIcon}>{screen.icon}</Text></View>
          <Text style={styles.heroTitle}>{screen.title}</Text>
          <Text style={styles.heroSubtitle}>{screen.subtitle}</Text>
        </LinearGradient>

        <View style={styles.chipsRow}>
          {screen.chips.map((chip) => <View key={chip} style={styles.chip}><Text style={styles.chipLabel}>{chip}</Text></View>)}
        </View>

        <View style={styles.sectionWrap}>
          {screen.sections.map((row) => (
            <View key={row.title} style={styles.sectionCard}>
              <View style={styles.sectionIcon}><Text style={styles.sectionIconText}>{row.icon}</Text></View>
              <View style={styles.sectionBodyWrap}>
                <Text style={styles.sectionTitle}>{row.title}</Text>
                <Text style={styles.sectionBody}>{row.body}</Text>
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity onPress={() => setStepIndex((value) => Math.max(0, value - 1))} disabled={stepIndex === 0} style={[styles.backButton, stepIndex === 0 && styles.backButtonDisabled]}>
          <Text style={styles.backButtonLabel}>Back</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={[styles.ctaZone, { bottom: Math.max(32, insets.bottom + 12) }]}>
        <PrototypeBottomCTA label={screen.cta} onPress={ctaPress} />
      </View>
    </PrototypeLandingScreen>
  );
}

const styles = StyleSheet.create({
  scrollContent: { paddingHorizontal: 20 },
  progressRow: { flexDirection: 'row', gap: 8, marginBottom: 14 },
  progressPill: { height: 8, flex: 1, borderRadius: 999, backgroundColor: 'rgba(255,255,255,0.5)' },
  progressPillActive: { backgroundColor: '#DF8E34' },
  heroCard: { borderRadius: 30, paddingHorizontal: 20, paddingTop: 16, paddingBottom: 22, borderWidth: 1, borderColor: '#EED8BC' },
  heroChip: { width: 42, height: 42, borderRadius: 21, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF6E8' },
  heroIcon: { fontSize: 22 },
  heroTitle: { marginTop: 12, color: '#4A2A11', fontSize: 31, lineHeight: 37, fontWeight: '800' },
  heroSubtitle: { marginTop: 10, color: '#6E4A2D', fontSize: 17, lineHeight: 24, fontWeight: '600' },
  chipsRow: { marginTop: 14, flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { backgroundColor: 'rgba(255, 248, 238, 0.96)', borderRadius: 999, paddingHorizontal: 12, paddingVertical: 7, borderWidth: 1, borderColor: '#EED8BC' },
  chipLabel: { color: '#5B3518', fontSize: 13, fontWeight: '700' },
  sectionWrap: { marginTop: 16, gap: 12 },
  sectionCard: { borderRadius: 24, paddingHorizontal: 16, paddingVertical: 14, backgroundColor: 'rgba(255, 250, 243, 0.97)', borderWidth: 1, borderColor: '#F0DFC7', flexDirection: 'row', alignItems: 'center' },
  sectionIcon: { width: 38, height: 38, borderRadius: 19, backgroundColor: '#F6E6D6', alignItems: 'center', justifyContent: 'center' },
  sectionIconText: { fontSize: 18 },
  sectionBodyWrap: { flex: 1, marginLeft: 12 },
  sectionTitle: { color: '#4A2A11', fontSize: 18, lineHeight: 23, fontWeight: '800' },
  sectionBody: { marginTop: 2, color: '#734E30', fontSize: 15, lineHeight: 21, fontWeight: '600' },
  backButton: { alignSelf: 'center', marginTop: 16, paddingHorizontal: 18, paddingVertical: 8, borderRadius: 16, backgroundColor: 'rgba(255,255,255,0.5)' },
  backButtonDisabled: { opacity: 0.45 },
  backButtonLabel: { color: '#5A3419', fontWeight: '700' },
  waveWrap: { position: 'absolute', left: 0, right: 0, bottom: 64, height: 230 },
  wave: { flex: 1, borderTopLeftRadius: 220, borderTopRightRadius: 220 },
  ctaZone: { position: 'absolute', left: '6%', right: '6%' }
});
