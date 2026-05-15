import { useEffect, useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { tokens } from '@/design/tokens';
import { getOnboardingState, resetOnboarding, subscribeOnboardingState, type OnboardingProfile } from '@/lib/onboardingState';
import { getParentDashboardSnapshot } from '@/services/progress';

export default function DashboardScreen() {
  const d = getParentDashboardSnapshot();
  const router = useRouter();
  const [profile, setProfile] = useState<OnboardingProfile | null>(getOnboardingState().profile);

  useEffect(() => subscribeOnboardingState(() => setProfile(getOnboardingState().profile)), []);

  const onReset = () => {
    Alert.alert('Reset onboarding?', 'This clears the local child profile on this device and returns to the welcome screen.', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Reset',
        style: 'destructive',
        onPress: async () => {
          await resetOnboarding();
          router.replace('/');
        }
      }
    ]);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.heading}>Parent Dashboard</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Child profile</Text>
        <Text style={styles.value}>{profile?.childName || 'Not set'} ({profile?.ageBand || 'n/a'})</Text>
        <Text style={styles.stat}>Nickname: {profile?.nickname || 'Not set'}</Text>
        <Text style={styles.stat}>Language: {profile?.language || 'Not set'}</Text>
        <Text style={styles.stat}>Favourite character: {profile?.favoriteCharacter || 'Not set'}</Text>
        <Text style={styles.stat}>Bedtime preference: {profile?.bedtimePreference || 'Not set'}</Text>
        <Text style={styles.stat}>Stories completed: {d.storiesCompleted}</Text>
        <Text style={styles.stat}>Values learned: {d.valuesLearned}</Text>
      </View>
      <Link href='/onboarding' style={styles.button}>Edit Onboarding</Link>
      <Text onPress={onReset} style={styles.reset}>Reset Local Onboarding State</Text>
      <Link href='/(child)/today' style={styles.childLink}>Switch to Child Home</Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F4F7FC', padding: tokens.spacing.lg, gap: tokens.spacing.md },
  heading: { fontSize: 30, fontWeight: '800', color: tokens.colors.midnight },
  card: { backgroundColor: '#FFFFFF', borderRadius: 24, padding: tokens.spacing.lg, gap: 8 },
  label: { color: '#50607A', fontWeight: '700' },
  value: { color: tokens.colors.midnight, fontSize: 18, fontWeight: '700' },
  stat: { color: '#2B3550' },
  button: { backgroundColor: '#DCE8FF', padding: 16, borderRadius: tokens.radius.button, textAlign: 'center', color: tokens.colors.midnight, fontWeight: '700' },
  reset: { textAlign: 'center', color: '#8A2F2F', fontWeight: '600' },
  childLink: { textAlign: 'center', color: tokens.colors.peacock, fontWeight: '700' }
});
