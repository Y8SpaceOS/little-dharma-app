import { useEffect, useState } from 'react';
import { Link } from 'expo-router';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { tokens } from '@/design/tokens';
import { trackEvent } from '@/lib/analytics';
import { getOnboardingState, subscribeOnboardingState } from '@/lib/onboardingState';

const actions = [
  { label: "Today's Journey", href: '/story/krishna-shares-butter', colors: ['#FFE3B8', '#FFD1A3'] },
  { label: 'Explore Worlds', href: '/(child)/worlds', colors: ['#D9EDFF', '#C6E4FF'] },
  { label: 'Bedtime Story', href: '/(child)/bedtime', colors: ['#DCD8FF', '#CFC9FF'] },
  { label: 'Chant & Sing', href: '/(child)/chant', colors: ['#FFDDF0', '#FFD0E8'] },
  { label: 'My Treasures', href: '/(child)/treasures', colors: ['#FCE5BF', '#F6D69A'] }
] as const;

export default function TodayScreen() {
  const [nickname, setNickname] = useState(getOnboardingState().profile?.nickname || 'Little One');

  useEffect(() => subscribeOnboardingState(() => setNickname(getOnboardingState().profile?.nickname || 'Little One')), []);

  trackEvent('app_opened');

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.greeting}>Namaste, {nickname} ✨</Text>
      <Text style={styles.subtitle}>Choose your calm adventure for today.</Text>
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
  subtitle: { fontSize: 17, color: '#5C4A3B', marginBottom: tokens.spacing.md },
  grid: { gap: tokens.spacing.sm },
  card: { fontSize: 20, fontWeight: '700', borderRadius: 24, padding: tokens.spacing.lg, minHeight: 96, overflow: 'hidden', color: '#3F2B1D' },
  parentPortal: { marginTop: 'auto', textAlign: 'center', color: tokens.colors.peacock, fontWeight: '700', fontSize: 16 }
});
