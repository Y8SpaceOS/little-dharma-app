import { useEffect, useState } from 'react';
import { Link, Redirect } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { tokens } from '@/design/tokens';
import { getOnboardingState, loadOnboardingState, subscribeOnboardingState } from '@/lib/onboardingState';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [onboardingComplete, setOnboardingComplete] = useState(getOnboardingState().onboardingComplete);

  useEffect(() => {
    const unsubscribe = subscribeOnboardingState(() => {
      setOnboardingComplete(getOnboardingState().onboardingComplete);
    });

    loadOnboardingState().finally(() => setIsLoading(false));
    return unsubscribe;
  }, []);

  if (isLoading) {
    return (
      <LinearGradient colors={[tokens.colors.cloud, '#FFE7CC']} style={styles.gradient}>
        <SafeAreaView style={styles.loadingContainer}>
          <ActivityIndicator size='large' color={tokens.colors.peacock} />
          <Text style={styles.loadingText}>Warming up your family space...</Text>
        </SafeAreaView>
      </LinearGradient>
    );
  }

  if (onboardingComplete) {
    return <Redirect href='/(child)/today' />;
  }

  return (
    <LinearGradient colors={[tokens.colors.cloud, '#FFE7CC']} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <View style={styles.heroCard}>
          <Text style={styles.badge}>Little Dharma</Text>
          <Text style={styles.title}>A calm, joyful journey for growing hearts.</Text>
          <Text style={styles.subtitle}>Parent-led onboarding. Child-first magical learning experience.</Text>
          <Link href='/onboarding' style={styles.primaryCta}>
            Begin as Parent
          </Link>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  container: { flex: 1, justifyContent: 'center', padding: tokens.spacing.lg },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 14 },
  loadingText: { fontSize: 17, color: tokens.colors.midnight, fontWeight: '600' },
  heroCard: {
    backgroundColor: '#FFF9F3',
    borderRadius: 32,
    padding: tokens.spacing.xl,
    gap: tokens.spacing.md,
    shadowColor: '#D28C4A',
    shadowOpacity: 0.15,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4
  },
  badge: { fontSize: 14, fontWeight: '700', color: tokens.colors.peacock },
  title: { fontSize: 34, lineHeight: 40, fontWeight: '800', color: tokens.colors.textPrimary },
  subtitle: { fontSize: 17, lineHeight: 24, color: '#5D4A3A' },
  primaryCta: {
    marginTop: tokens.spacing.sm,
    backgroundColor: tokens.colors.saffron,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
    borderRadius: tokens.radius.button,
    paddingVertical: 18,
    fontSize: 18,
    overflow: 'hidden'
  }
});
