import { useMemo } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { visualStyles, visualTokens } from '@/design/visualSystem';
import { getDharmaJourneyMapByJourneyId } from '@/services/dharmaJourneyMapService';
import type { DharmaJourneyMapStep } from '@/types/dharmaJourneyMap';

const markerEmoji: Record<DharmaJourneyMapStep['pathMarker'], string> = {
  diya: '🪔',
  flower: '🌸',
  lotus_dot: '🪷'
};

function getStepStateCopy(step: DharmaJourneyMapStep): { title: string; hint: string; disabled: boolean } {
  if (step.state === 'completed') return { title: 'Completed gently', hint: 'Revisit this story anytime.', disabled: false };
  if (step.state === 'available') return { title: 'Ready now', hint: 'Open this story step.', disabled: false };
  if (step.state === 'coming_soon') return { title: 'Coming soon', hint: 'Being prepared with care.', disabled: true };
  if (step.state === 'missing') return { title: 'Preparing this step', hint: 'Story details are being prepared with care.', disabled: true };
  return { title: 'Being prepared with care', hint: 'This step will open after readiness checks.', disabled: true };
}

export default function DharmaJourneyMapScreen() {
  const router = useRouter();
  const { journeyId } = useLocalSearchParams<{ journeyId?: string }>();

  const map = useMemo(() => {
    if (!journeyId) return null;
    return getDharmaJourneyMapByJourneyId(journeyId);
  }, [journeyId]);

  if (!map) {
    return <SafeAreaView style={visualStyles.screen}><View style={styles.center}><Text style={styles.title}>Dharma Journey Map</Text><Text style={styles.subtitle}>This journey is being prepared with care.</Text></View></SafeAreaView>;
  }

  return <SafeAreaView style={visualStyles.screen}><ScrollView contentContainerStyle={styles.content}>
    <View style={styles.hero}>
      <Text style={styles.kicker}>Dharma Journey</Text>
      <Text style={styles.title}>{map.childFacingTitle || map.journeyTitle}</Text>
      <Text style={styles.subtitle}>{map.childFacingDescription}</Text>
      <Text style={styles.trust}>{map.trustCopy}</Text>
    </View>

    {map.fallbackMessage ? <View style={styles.fallback}><Text style={styles.fallbackTitle}>Warm update</Text><Text style={styles.fallbackCopy}>{map.fallbackMessage}</Text></View> : null}

    <View style={styles.path}>
      {map.steps.map((step) => {
        const state = getStepStateCopy(step);
        return <Pressable
          key={step.id}
          onPress={() => {
            if (!state.disabled) router.push(step.href as never);
          }}
          disabled={state.disabled}
          style={({ pressed }) => [styles.stepCard, state.disabled && styles.stepCardDisabled, pressed && !state.disabled && styles.stepCardPressed]}
          accessibilityRole="button"
          accessibilityLabel={`${step.title}. ${state.title}`}
          accessibilityHint={state.hint}
        >
          <View style={styles.stepHeader}>
            <Text style={styles.marker}>{markerEmoji[step.pathMarker]}</Text>
            <Text style={styles.order}>Step {step.order}</Text>
            <Text style={styles.state}>{state.title}</Text>
          </View>

          <Text style={styles.stepTitle}>{step.title}</Text>
          <Text style={styles.stepSummary}>{step.summary}</Text>

          <View style={styles.metaRow}>
            <Text style={styles.metaPill}>{step.primaryValue}</Text>
            <Text style={styles.metaPill}>{step.ageBands[0] ?? 'All ages'}</Text>
            <Text style={styles.metaPill}>{step.durationMinutes ? `${step.durationMinutes} min` : 'Duration soon'}</Text>
          </View>

          <Text style={styles.trustLine}>{step.trustLabel}</Text>
        </Pressable>;
      })}
    </View>
  </ScrollView></SafeAreaView>;
}

const styles = StyleSheet.create({
  content: { padding: 16, gap: 14, paddingBottom: 32 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, gap: 8 },
  hero: { borderRadius: 24, padding: 16, backgroundColor: '#FFF2DD', borderWidth: 1, borderColor: '#F4D9AD', gap: 6 },
  kicker: { fontSize: 13, fontWeight: '800', color: '#7B4D1D' },
  title: { fontSize: 30, fontWeight: '900', color: visualTokens.color.warmBrown },
  subtitle: { fontSize: 15, lineHeight: 21, color: visualTokens.color.mutedBrown },
  trust: { fontSize: 13, lineHeight: 18, color: '#6A4522', fontWeight: '700' },
  fallback: { borderRadius: 18, borderWidth: 1, borderColor: '#E9D8BD', backgroundColor: '#FFF8EE', padding: 14, gap: 6 },
  fallbackTitle: { fontSize: 14, fontWeight: '800', color: '#6A4522' },
  fallbackCopy: { fontSize: 14, lineHeight: 20, color: '#7B6248' },
  path: { gap: 12 },
  stepCard: { minHeight: 150, borderRadius: 22, borderWidth: 1, borderColor: '#E9D8BD', backgroundColor: '#FFFCF7', padding: 16, gap: 8 },
  stepCardDisabled: { backgroundColor: '#F9F3EA' },
  stepCardPressed: { transform: [{ scale: 0.99 }] },
  stepHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, flexWrap: 'wrap' },
  marker: { fontSize: 18 },
  order: { fontSize: 13, fontWeight: '800', color: '#73471F' },
  state: { fontSize: 12, fontWeight: '800', color: '#6A4522', backgroundColor: '#FFF', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 999 },
  stepTitle: { fontSize: 20, fontWeight: '900', color: '#4A2D10' },
  stepSummary: { fontSize: 14, lineHeight: 20, color: '#6A4522' },
  metaRow: { flexDirection: 'row', gap: 6, flexWrap: 'wrap' },
  metaPill: { backgroundColor: '#FFFFFFCC', borderRadius: 999, paddingHorizontal: 10, paddingVertical: 5, fontSize: 12, color: '#6A4522', fontWeight: '700' },
  trustLine: { fontSize: 12, color: '#365A36', fontWeight: '700' }
});
