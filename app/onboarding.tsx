import React, { ReactElement, useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RouteErrorBoundary from '@/components/RouteErrorBoundary';
import { completeOnboarding } from '@/lib/onboardingState';

type Step = { id: string; title: string; subtitle: string; render: () => ReactElement };

const ageBands = ['3-5 years', '6-8 years', '9-12 years', 'Prefer not to say'];
const comfortPrefs = ['Extra calm bedtime tone', 'Festival + culture highlights', 'Values-first stories', 'Gentle mixed path'];

const BrandMark = () => <Text style={styles.brandMark}>🪔🌸☀️</Text>;
const LuvluGuide = ({ copy }: { copy: string }) => <View style={styles.luvlu}><Text style={styles.luvluBird}>🦚</Text><Text style={styles.luvluText}>{copy}</Text></View>;
const OnboardingCard = ({ children }: { children: React.ReactNode }) => <View style={styles.card}>{children}</View>;
const SoftPill = ({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) => <TouchableOpacity onPress={onPress} style={[styles.pill, active && styles.pillActive]}><Text style={[styles.pillText, active && styles.pillTextActive]}>{label}</Text></TouchableOpacity>;
const ProgressDots = ({ total, current }: { total: number; current: number }) => <View style={styles.dots}>{Array.from({ length: total }).map((_, i) => <View key={i} style={[styles.dot, i === current && styles.dotActive]} />)}</View>;
const TrustNote = ({ text }: { text: string }) => <View style={styles.trust}><Text style={styles.trustText}>{text}</Text></View>;

function OnboardingScreenContent() {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const [ageBand, setAgeBand] = useState(ageBands[0]);
  const [comfortPref, setComfortPref] = useState(comfortPrefs[0]);

  const steps: Step[] = [
    { id: 'welcome', title: 'Welcome to Little Dharma', subtitle: 'A warm beginning for your family.', render: () => <OnboardingCard><BrandMark /><Text style={styles.brand}>Little Dharma</Text><Text style={styles.body}>Welcome to Little Dharma — calm, warm, and playful spiritual story moments for children and grown-ups.</Text><LuvluGuide copy='Luvlu welcomes your family and helps you begin softly.' /></OnboardingCard> },
    { id: 'promise', title: 'Parent promise / safe spiritual story world', subtitle: 'Calm, trusted, and respectful by design.', render: () => <OnboardingCard><TrustNote text='No account setup. No login wall. No pressure loops.' /><TrustNote text='Warm cultural storytelling with parent-trusted boundaries.' /><TrustNote text='No XP, no coins, no streaks, and no leaderboards.' /></OnboardingCard> },
    { id: 'meet-luvlu', title: 'Meet Luvlu the Peacock', subtitle: 'Guide/helper, not logo.', render: () => <OnboardingCard><LuvluGuide copy='I am Luvlu the Peacock. I guide, narrate gently, and support handoff moments.' /><Text style={styles.body}>Luvlu is a helper presence and not the Little Dharma brand mark.</Text></OnboardingCard> },
    { id: 'age-band', title: 'Choose child age band, not exact DOB', subtitle: 'Broad age ranges only.', render: () => <OnboardingCard><Text style={styles.helper}>Choose one age band, not exact DOB:</Text>{ageBands.map((a) => <SoftPill key={a} label={a} active={ageBand === a} onPress={() => setAgeBand(a)} />)}<TrustNote text='We do not ask for exact date of birth.' /></OnboardingCard> },
    { id: 'comfort-preferences', title: 'Choose comfort/content preferences', subtitle: 'Family comfort first.', render: () => <OnboardingCard><Text style={styles.helper}>Pick your comfort direction:</Text>{comfortPrefs.map((p) => <SoftPill key={p} label={p} active={comfortPref === p} onPress={() => setComfortPref(p)} />)}</OnboardingCard> },
    { id: 'preview', title: 'Preview Story World / Dharma Journeys lightly', subtitle: 'A gentle preview, not full build-out.', render: () => <OnboardingCard><Text style={styles.body}>Preview doorways: Story World, Dharma Journeys, Bedtime Calm, and Values Garden.</Text><LuvluGuide copy='Luvlu can point to a first doorway and then step back.' /></OnboardingCard> },
    { id: 'privacy', title: 'Local-first / privacy-safe trust', subtitle: 'Simple parent language.', render: () => <OnboardingCard><TrustNote text='Local-first: your onboarding choices stay on this device.' /><TrustNote text='Privacy-safe: no backend account, cloud sync, CMS, analytics, or telemetry added.' /><TrustNote text='No microphone, recording, or paid lock added.' /></OnboardingCard> },
    { id: 'handoff', title: 'Parent/grown-up handoff', subtitle: 'Continue to parent profile route.', render: () => <OnboardingCard><LuvluGuide copy='I can support this handoff while parent settings remain in grown-up space.' /><Link href='/(parent)/profiles' style={styles.parentLink}>Open Parent Profiles</Link><Text style={styles.body}>Typed parent route preserved: /(parent)/profiles.</Text></OnboardingCard> }
  ];

  const current = steps[stepIndex];
  const last = stepIndex === steps.length - 1;

  const finish = async () => {
    await completeOnboarding({ childName: '', nickname: '', ageBand: '3-5', language: 'English', favoriteCharacter: 'Krishna', bedtimePreference: 'Cozy (10 min)' });
    router.replace('/(parent)/profiles');
  };

  return <LinearGradient colors={['#FFF4DF', '#FFE8C7', '#F9EAF3']} style={styles.screen}><SafeAreaView style={styles.safe}><ScrollView contentContainerStyle={styles.content}><ProgressDots total={steps.length} current={stepIndex} /><Text style={styles.title}>{current.title}</Text><Text style={styles.subtitle}>{current.subtitle}</Text>{current.render()}<View style={styles.row}><TouchableOpacity disabled={stepIndex === 0} onPress={() => setStepIndex((s) => Math.max(0, s - 1))} style={[styles.nav, styles.back, stepIndex === 0 && styles.disabled]}><Text style={styles.backText}>Back</Text></TouchableOpacity><TouchableOpacity onPress={() => last ? finish() : setStepIndex((s) => s + 1)} style={[styles.nav, styles.next]}><Text style={styles.nextText}>{last ? 'Continue to Parent Handoff' : 'Next'}</Text></TouchableOpacity></View></ScrollView></SafeAreaView></LinearGradient>;
}

export default function OnboardingScreen() { return <RouteErrorBoundary surfaceName='Onboarding' audience='parent'><OnboardingScreenContent /></RouteErrorBoundary>; }

const styles = StyleSheet.create({
  screen: { flex: 1 }, safe: { flex: 1 }, content: { padding: 16, gap: 10, minHeight: '100%', justifyContent: 'center' },
  brandMark: { fontSize: 44, textAlign: 'center' }, brand: { fontSize: 32, fontWeight: '900', textAlign: 'center', color: '#5B3517' },
  title: { fontSize: 28, lineHeight: 33, fontWeight: '900', color: '#5B3517' }, subtitle: { color: '#6E5037', fontSize: 15 },
  card: { backgroundColor: '#FFF9F0', borderRadius: 24, padding: 16, gap: 10 }, body: { color: '#6E5037', fontSize: 14, lineHeight: 20 }, helper: { color: '#6E5037', fontWeight: '800' },
  pill: { backgroundColor: '#FCE9CD', borderRadius: 999, paddingVertical: 10, paddingHorizontal: 12 }, pillActive: { backgroundColor: '#FFD9A4' }, pillText: { color: '#6E5037', fontWeight: '700' }, pillTextActive: { color: '#44270D' },
  dots: { flexDirection: 'row', gap: 6, marginBottom: 2 }, dot: { width: 9, height: 9, borderRadius: 9, backgroundColor: '#E9D8BE' }, dotActive: { backgroundColor: '#E38C29' },
  trust: { backgroundColor: '#EAF3FF', borderRadius: 14, padding: 10 }, trustText: { color: '#1F4E7B', fontWeight: '700' },
  luvlu: { backgroundColor: '#E5F1FF', borderRadius: 16, padding: 10, flexDirection: 'row', gap: 8, alignItems: 'center' }, luvluBird: { fontSize: 22 }, luvluText: { flex: 1, color: '#1E4B7A', fontWeight: '700', fontSize: 13, lineHeight: 18 },
  parentLink: { backgroundColor: '#EAF2FF', color: '#1E4B7A', fontWeight: '800', paddingVertical: 12, borderRadius: 12, textAlign: 'center', overflow: 'hidden' },
  row: { flexDirection: 'row', gap: 10 }, nav: { flex: 1, paddingVertical: 14, borderRadius: 14, alignItems: 'center' }, back: { backgroundColor: '#ECEFF4' }, next: { backgroundColor: '#E38C29' }, backText: { color: '#6E5037', fontWeight: '800' }, nextText: { color: '#fff', fontWeight: '800' }, disabled: { opacity: 0.5 }
});
