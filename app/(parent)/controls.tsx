import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Link } from 'expo-router';
import { SafeAreaView, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { tokens } from '@/design/tokens';
import { ChildProfile, getChildProfile } from '@/lib/childProfile';
import {
  getParentControls,
  setBedtimeReducedPromptsEnabled,
  setLuvluHelperPromptsEnabled,
  type ParentControls
} from '@/lib/parentControls';

const intentLabels: Record<string, string> = {
  'bedtime-calm': 'Bedtime calm',
  'values-learning': 'Values learning',
  'festival-culture-learning': 'Festival and culture learning',
  'daily-story-habit': 'Daily story habit',
  'just-exploring': 'Just exploring'
};

export default function ControlsScreen() {
  const [childProfile, setChildProfile] = useState<ChildProfile | null>(null);
  const [controls, setControls] = useState<ParentControls>({
    luvluHelperPromptsEnabled: true,
    bedtimeReducedPromptsEnabled: false,
    showParentPromptsEnabled: true,
    updatedAtLocal: new Date(0).toISOString()
  });

  const refresh = useCallback(() => {
    getChildProfile().then(setChildProfile).catch(() => setChildProfile(null));
    getParentControls().then(setControls).catch(() => null);
  }, []);

  useFocusEffect(useCallback(() => { refresh(); }, [refresh]));

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Parent Controls</Text>
        <Text style={styles.subheading}>Review child profile, helper prompts, bedtime calm preferences, and local privacy settings.</Text>

        <View style={styles.card}>
          <Text style={styles.title}>Child profile</Text>
          <Text style={styles.row}>Nickname: {childProfile?.childNameOrNickname || 'Not set yet (optional)'}</Text>
          <Text style={styles.row}>Broad age band: {childProfile?.ageBand || 'Not set yet (optional)'}</Text>
          <Text style={styles.row}>Parent intent: {childProfile?.parentIntent ? intentLabels[childProfile.parentIntent] : 'Not set yet (optional)'}</Text>
          <Text style={styles.helper}>Stories use broad age band on this device. No exact age is required and no public child profile is created.</Text>
          <Link href='/onboarding' style={styles.link} accessibilityRole='link' accessibilityLabel='Revisit child setup'>Revisit child setup</Link>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Story experience controls</Text>
          <Text style={styles.helper}>Recommendations stay local-first and on-device only in this version. No account, no cloud sync, and no backend profile.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Dharma Journey settings</Text>
          <Text style={styles.helper}>Dharma Journeys are gentle story paths. Review Ramayana, Krishna Childhood, and future paths.</Text>
          <Link href='/(parent)/journey-settings' style={styles.link} accessibilityRole='link' accessibilityLabel='Open Journey Settings'>Open Journey Settings</Link>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Luvlu companion guidance</Text>
          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>Luvlu helper prompts</Text>
            <Switch
              value={controls.luvluHelperPromptsEnabled}
              onValueChange={async (next) => setControls(await setLuvluHelperPromptsEnabled(next))}
              accessibilityLabel='Toggle Luvlu helper prompts'
            />
          </View>
          <Text style={styles.helper}>Luvlu voice: Coming later. No audio playback, microphone permission, or recording is active in Parent Controls v1.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Bedtime calm preference</Text>
          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>Reduce helper prompts for bedtime</Text>
            <Switch
              value={controls.bedtimeReducedPromptsEnabled}
              onValueChange={async (next) => setControls(await setBedtimeReducedPromptsEnabled(next))}
              accessibilityLabel='Toggle reduced bedtime prompts'
            />
          </View>
          <Text style={styles.helper}>This preference is local-only. No schedules, notifications, or external reminders are used.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Reset and local data</Text>
          <Text style={styles.helper}>Reset actions remain in Parent Dashboard with confirmation before clearing onboarding and child profile on this device.</Text>
          <Link href='/(parent)/dashboard' style={styles.link}>Open Parent Dashboard reset options</Link>
        </View>

        <View style={styles.privacyCard}>
          <Text style={styles.privacyTitle}>Privacy and trust</Text>
          <Text style={styles.privacyText}>Data stays on this device. No child public profile. No ads or paid beta flow in this sprint. No external sharing unless a parent manually takes screenshots.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#FFF8EE' },
  content: { padding: tokens.spacing.lg, gap: tokens.spacing.md, paddingBottom: 40 },
  heading: { fontSize: 32, fontWeight: '800', color: '#5E3A0E' },
  subheading: { color: '#7B5A2B', fontSize: 15 },
  card: { backgroundColor: '#FFFCF7', borderRadius: 22, borderWidth: 1, borderColor: '#EBDCC8', padding: tokens.spacing.lg, gap: 8 },
  title: { fontSize: 13, fontWeight: '800', letterSpacing: 0.2, textTransform: 'uppercase', color: '#6D4A16' },
  row: { color: '#3A2B1A', fontSize: 15, lineHeight: 22 },
  helper: { color: '#5F4D35', fontSize: 14, lineHeight: 21 },
  link: { color: tokens.colors.peacock, fontWeight: '700', marginTop: 6 },
  switchRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 12 },
  switchLabel: { color: '#3A2B1A', fontSize: 15, fontWeight: '600', flex: 1 },
  privacyCard: { backgroundColor: '#EAF4FF', borderRadius: 22, borderWidth: 1, borderColor: '#D0E5FF', padding: tokens.spacing.lg, gap: 8 },
  privacyTitle: { color: '#1E3A5F', fontSize: 13, fontWeight: '800', textTransform: 'uppercase' },
  privacyText: { color: '#204066', fontSize: 14, lineHeight: 21 }
});
