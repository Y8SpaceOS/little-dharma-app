import { useCallback, useEffect, useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { tokens } from '@/design/tokens';
import { getOnboardingState, resetOnboarding, subscribeOnboardingState, type OnboardingProfile } from '@/lib/onboardingState';
import { getParentDashboardSnapshot } from '@/services/progress';

type ParentDashboardSummary = Awaited<ReturnType<typeof getParentDashboardSnapshot>>;

const initialSummary: ParentDashboardSummary = {
  currentWorld: 'Vrindavan',
  storiesCompleted: 0,
  totalStories: 0,
  completionPercent: 0,
  latestCompletedStoryTitle: 'Loading...',
  latestEarnedBadge: 'Loading...',
  latestValueLearned: 'Loading...',
  latestCarryingWord: 'Loading...',
  latestRitualCompleted: 'Loading...',
  latestRitualParentMeaning: '',
  latestReflectionPrompt: 'Loading...',
  suggestedNextJourney: 'Loading...',
  dailyRitualCopy: '',
  reflectionBridgeCopy: '',
  ritualLoopExplanation: '',
  privacyPromise: '',
  weeklyProgress: {
    completedDays: 0,
    remainingDays: 21,
    completionLabel: '0/21 stories completed',
    practicedValues: [] as string[],
    parentSummary: ''
  }
};

export default function DashboardScreen() {
  const router = useRouter();
  const [profile, setProfile] = useState<OnboardingProfile | null>(getOnboardingState().profile);
  const [summary, setSummary] = useState<ParentDashboardSummary>(initialSummary);

  useEffect(() => subscribeOnboardingState(() => setProfile(getOnboardingState().profile)), []);
  const refreshSummary = useCallback(() => {
    getParentDashboardSnapshot().then(setSummary).catch(() => null);
  }, []);

  useFocusEffect(
    useCallback(() => {
      refreshSummary();
    }, [refreshSummary])
  );

  const onReset = () => {
    Alert.alert('Reset onboarding?', 'This clears the local child profile on this device and returns to the welcome screen.', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Reset', style: 'destructive', onPress: async () => { await resetOnboarding(); router.replace('/'); } }
    ]);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Parent Dashboard</Text>
        <Text style={styles.subheading}>A private view of your child’s values journey.</Text>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Child profile</Text>
          <Text style={styles.childName}>{profile?.childName || 'Not set'} ({profile?.ageBand || 'n/a'})</Text>
          <Text style={styles.detail}>Current world: {summary.currentWorld}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Journey progress</Text>
          <Text style={styles.progressMain}>{summary.storiesCompleted}/{summary.totalStories} stories completed</Text>
          <Text style={styles.progressSub}>{summary.completionPercent}% of current path complete</Text>
          <Text style={styles.detail}>Next suggested journey: {summary.suggestedNextJourney}</Text>
        </View>



        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Today&apos;s Mirror</Text>
          <Text style={styles.mirrorTitle}>What your child practiced today</Text>
          <Text style={styles.detail}><Text style={styles.label}>Latest story:</Text> {summary.latestCompletedStoryTitle}</Text>
          <Text style={styles.detail}><Text style={styles.label}>Value practiced:</Text> {summary.latestValueLearned}</Text>
          <Text style={styles.detail}><Text style={styles.label}>Carrying Word:</Text> {summary.latestCarryingWord}</Text>
          <Text style={styles.detail}><Text style={styles.label}>Badge earned:</Text> {summary.latestEarnedBadge}</Text>
          <Text style={styles.detail}><Text style={styles.label}>Parent-child prompt:</Text> {summary.latestReflectionPrompt}</Text>
          <Text style={styles.mirrorWhy}>{summary.latestRitualParentMeaning}</Text>
          <Text style={styles.mirrorWhy}>Why this matters: short nightly reflection helps children carry values from story time into everyday choices with warmth and confidence.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Weekly Vrindavan progress</Text>
          <Text style={styles.progressMain}>{summary.weeklyProgress.completionLabel}</Text>
          <Text style={styles.progressSub}>{summary.weeklyProgress.remainingDays} stories remaining in the full path</Text>
          <Text style={styles.detail}><Text style={styles.label}>Values practiced:</Text> {summary.weeklyProgress.practicedValues.length > 0 ? summary.weeklyProgress.practicedValues.join(', ') : 'Not yet practiced this week'}</Text>
          <Text style={styles.ritual}>{summary.weeklyProgress.parentSummary}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Latest completed moment</Text>
          <Text style={styles.detail}><Text style={styles.label}>Story:</Text> {summary.latestCompletedStoryTitle}</Text>
          <Text style={styles.detail}><Text style={styles.label}>Value:</Text> {summary.latestValueLearned}</Text>
          <Text style={styles.detail}><Text style={styles.label}>Ritual/Shloka moment:</Text> {summary.latestRitualCompleted}</Text>
          <Text style={styles.detail}><Text style={styles.label}>Badge earned:</Text> {summary.latestEarnedBadge}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Daily 10-minute ritual loop</Text>
          <Text style={styles.ritual}>{summary.ritualLoopExplanation}</Text>
          <Text style={styles.ritual}>{summary.dailyRitualCopy}</Text>
          <Text style={styles.ritual}>{summary.reflectionBridgeCopy}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Tonight’s parent conversation starter</Text>
          <Text style={styles.prompt}>{summary.latestReflectionPrompt}</Text>
        </View>

        <View style={styles.privacyCard}>
          <Text style={styles.privacyTitle}>Privacy reassurance</Text>
          <Text style={styles.privacyText}>{summary.privacyPromise}</Text>
        </View>

        <Link href='/onboarding' style={styles.button}>Edit Onboarding</Link>
        <Text onPress={onReset} style={styles.reset}>Reset Local Onboarding State</Text>
        <Link href='/(child)/today' style={styles.childLink}>Switch to Child Home</Link>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#EFF4FF' },
  content: { padding: tokens.spacing.lg, gap: tokens.spacing.md, paddingBottom: 40 },
  heading: { fontSize: 32, fontWeight: '800', color: '#1E2C50' },
  subheading: { color: '#4D5F88', fontSize: 15, marginTop: -6 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 22, padding: tokens.spacing.lg, gap: 8, borderWidth: 1, borderColor: '#E5EBFA' },
  sectionTitle: { color: '#445378', fontWeight: '800', letterSpacing: 0.3, textTransform: 'uppercase', fontSize: 12 },
  childName: { color: '#1E2C50', fontSize: 20, fontWeight: '800' },
  detail: { color: '#2B3550', fontSize: 15, lineHeight: 22 },
  label: { fontWeight: '700', color: '#1E2C50' },
  progressMain: { color: '#1F2F59', fontSize: 22, fontWeight: '800' },
  progressSub: { color: '#5A6A92', fontWeight: '600' },
  ritual: { color: '#4F5F7C', fontStyle: 'italic', lineHeight: 22 },
  prompt: { color: '#24345E', fontSize: 16, lineHeight: 24, fontWeight: '600' },
  mirrorTitle: { color: '#1F2F59', fontSize: 20, fontWeight: '800' },
  mirrorWhy: { color: '#4F5F7C', lineHeight: 22, fontStyle: 'italic' },
  privacyCard: { backgroundColor: '#1E2C50', borderRadius: 22, padding: tokens.spacing.lg, gap: 8 },
  privacyTitle: { color: '#DCE8FF', fontWeight: '800', textTransform: 'uppercase', fontSize: 12, letterSpacing: 0.3 },
  privacyText: { color: '#FFFFFF', lineHeight: 22, fontSize: 15 },
  button: { backgroundColor: '#DCE8FF', padding: 16, borderRadius: tokens.radius.button, textAlign: 'center', color: '#1E2C50', fontWeight: '700' },
  reset: { textAlign: 'center', color: '#8A2F2F', fontWeight: '600' },
  childLink: { textAlign: 'center', color: tokens.colors.peacock, fontWeight: '700' }
});
