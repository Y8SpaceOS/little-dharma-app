import { useMemo } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { GradientScreen } from '@/components/dharmaKit';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { palette, text } from '@/design/visualSystem';
import { getDharmaJourneyMapByJourneyId } from '@/services/dharmaJourneyMapService';
import type { DharmaJourneyMapModel, DharmaJourneyMapStep } from '@/types/dharmaJourneyMap';

const markerEmoji: Record<DharmaJourneyMapStep['pathMarker'], string> = {
  diya: '🪔',
  flower: '🌸',
  lotus_dot: '🪷'
};

function normalizeParam(value: string | string[] | undefined): string | null {
  if (!value) return null;
  return Array.isArray(value) ? value[0] ?? null : value;
}

function getStepStateCopy(step: DharmaJourneyMapStep): { title: string; hint: string; disabled: boolean } {
  if (step.state === 'completed') return { title: 'Completed gently', hint: 'Open this story again.', disabled: !step.isTappable };
  if (step.state === 'available') return { title: 'Ready now', hint: 'Open this story step.', disabled: !step.isTappable };
  return { title: 'Being prepared with care', hint: 'This step is not ready yet.', disabled: true };
}

function EmptyJourneyState({ title, copy }: { title: string; copy: string }) {
  return <GradientScreen gradient="body"><SafeAreaView style={styles.safe}>
    <View style={styles.center} accessibilityRole="summary" accessibilityLabel={`${title}. ${copy}`}>
      <Text style={styles.emptyMarker}>🪷</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{copy}</Text>
      <Text style={styles.trust}>Being prepared with care.</Text>
    </View>
  </SafeAreaView></GradientScreen>;
}

function JourneyHero({ map }: { map: DharmaJourneyMapModel }) {
  return <View
    style={styles.hero}
    accessibilityRole="header"
    accessibilityLabel={`${map.childFacingTitle || map.journeyTitle}. ${map.childFacingDescription}. A gentle story path for your family.`}
  >
    <Text style={styles.kicker}>Dharma Journey</Text>
    <Text style={styles.title}>{map.childFacingTitle || map.journeyTitle || 'Dharma Journey'}</Text>
    <Text style={styles.subtitle}>{map.childFacingDescription || 'A gentle story path is being prepared with care.'}</Text>
    <Text style={styles.contextLine}>Follow one warm step at a time, with space to pause and wonder.</Text>
    <Text style={styles.trust}>{map.trustCopy}</Text>
  </View>;
}

function StepCard({ step, isLast, onOpen }: { step: DharmaJourneyMapStep; isLast: boolean; onOpen: (step: DharmaJourneyMapStep) => void }) {
  const reduceMotion = useReducedMotion();
  const state = getStepStateCopy(step);
  const marker = markerEmoji[step.pathMarker] ?? markerEmoji.lotus_dot;
  const ageBand = step.ageBands.length ? step.ageBands.join(', ') : 'All ages';
  const duration = step.durationMinutes ? `${step.durationMinutes} min` : 'Duration soon';
  const disabledCopy = state.disabled ? 'Being prepared with care.' : step.trustLabel;

  return <View style={styles.pathStep}>
    <View style={styles.pathRail} pointerEvents="none">
      <View style={[styles.pathDot, state.disabled && styles.pathDotDisabled]}><Text style={styles.pathDotText}>{marker}</Text></View>
      {!isLast ? <View style={[styles.connector, state.disabled && styles.connectorDisabled]} /> : null}
    </View>

    <Pressable
      onPress={() => {
        if (!state.disabled) onOpen(step);
      }}
      disabled={state.disabled}
      style={({ pressed }) => [styles.stepCard, state.disabled && styles.stepCardDisabled, !reduceMotion && pressed && !state.disabled && styles.stepCardPressed]}
      accessibilityRole="button"
      accessibilityState={{ disabled: state.disabled }}
      accessibilityLabel={`Step ${step.order}. ${step.title}. ${state.title}. Value: ${step.primaryValue}. Age: ${ageBand}. Duration: ${duration}.`}
      accessibilityHint={state.disabled ? 'Being prepared with care. This step is not ready yet.' : state.hint}
    >
      <View style={styles.stepHeader}>
        <Text style={styles.order}>Step {step.order}</Text>
        <Text style={[styles.state, state.disabled && styles.stateDisabled]}>{state.title}</Text>
      </View>

      <Text style={styles.stepTitle}>{step.title}</Text>
      <Text style={styles.stepSummary}>{step.summary}</Text>

      <View style={styles.metaRow}>
        <Text style={styles.metaPill}>Value: {step.primaryValue}</Text>
        <Text style={styles.metaPill}>Age: {ageBand}</Text>
        <Text style={styles.metaPill}>Time: {duration}</Text>
      </View>

      <Text style={[styles.trustLine, state.disabled && styles.trustLineDisabled]}>{disabledCopy}</Text>
    </Pressable>
  </View>;
}

export default function DharmaJourneyMapScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ journeyId?: string | string[] }>();
  const journeyId = normalizeParam(params.journeyId);

  const map = useMemo(() => {
    if (!journeyId) return null;
    return getDharmaJourneyMapByJourneyId(journeyId);
  }, [journeyId]);

  if (!journeyId) {
    return <EmptyJourneyState title="Dharma Journey Map" copy="We could not find this journey yet, but the path will stay safe and gentle." />;
  }

  if (!map) {
    return <EmptyJourneyState title="Dharma Journey Map" copy="This journey is not available here yet. Please choose another gentle path from Story World." />;
  }

  if (!map.supportedJourney) {
    return <EmptyJourneyState title={map.childFacingTitle || map.journeyTitle || 'Dharma Journey'} copy="This Dharma Journey is being prepared with care before it opens for families." />;
  }

  return <GradientScreen gradient="body"><SafeAreaView style={styles.safe}><ScrollView contentContainerStyle={styles.content}>
    <JourneyHero map={map} />

    {map.fallbackMessage ? <View style={styles.fallback} accessibilityRole="summary" accessibilityLabel={`Warm update. ${map.fallbackMessage}`}>
      <Text style={styles.fallbackTitle}>Warm update</Text>
      <Text style={styles.fallbackCopy}>{map.fallbackMessage}</Text>
    </View> : null}

    {map.steps.length ? <View style={styles.path} accessibilityLabel="Journey steps">
      {map.steps.map((step, index) => <StepCard
        key={step.id}
        step={step}
        isLast={index === map.steps.length - 1}
        onOpen={(nextStep) => router.push(nextStep.href as never)}
      />)}
    </View> : <View style={styles.fallback} accessibilityRole="summary" accessibilityLabel="This Dharma Journey is being prepared with care.">
      <Text style={styles.fallbackTitle}>Gentle path coming soon</Text>
      <Text style={styles.fallbackCopy}>This Dharma Journey is being prepared with care.</Text>
    </View>}
  </ScrollView></SafeAreaView></GradientScreen>;
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  content: { padding: 16, gap: 16, paddingBottom: 36 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, gap: 10 },
  emptyMarker: { fontSize: 34, marginBottom: 2 },
  hero: { borderRadius: 28, padding: 18, backgroundColor: '#FFF2DD', borderWidth: 1, borderColor: '#F4D9AD', gap: 7, shadowColor: '#7B4D1D', shadowOpacity: 0.08, shadowRadius: 12, shadowOffset: { width: 0, height: 6 }, elevation: 1 },
  kicker: { fontSize: 13, fontWeight: '800', color: '#7B4D1D', letterSpacing: 0.3 },
  title: { ...text.display, color: palette.ink },
  subtitle: { ...text.body, color: palette.muted },
  contextLine: { fontSize: 14, lineHeight: 20, color: '#7B4D1D', fontWeight: '800' },
  trust: { fontSize: 12, lineHeight: 18, color: '#6A4522', fontWeight: '700', opacity: 0.86 },
  fallback: { borderRadius: 20, borderWidth: 1, borderColor: '#E9D8BD', backgroundColor: '#FFF8EE', padding: 14, gap: 6 },
  fallbackTitle: { fontSize: 14, fontWeight: '800', color: '#6A4522' },
  fallbackCopy: { fontSize: 14, lineHeight: 20, color: '#7B6248' },
  path: { gap: 0 },
  pathStep: { flexDirection: 'row', alignItems: 'stretch' },
  pathRail: { width: 42, alignItems: 'center' },
  pathDot: { width: 34, height: 34, borderRadius: 17, backgroundColor: '#FFF2DD', borderWidth: 1, borderColor: '#E9C98F', alignItems: 'center', justifyContent: 'center', zIndex: 1 },
  pathDotDisabled: { backgroundColor: '#F8EFE2', borderColor: '#E6D9C7' },
  pathDotText: { fontSize: 17 },
  connector: { flex: 1, width: 3, minHeight: 22, backgroundColor: '#EACD9D', borderRadius: 999, marginVertical: 4 },
  connectorDisabled: { backgroundColor: '#E7DCCB' },
  stepCard: { flex: 1, minHeight: 150, borderRadius: 24, borderWidth: 1, borderColor: '#E9D8BD', backgroundColor: '#FFFCF7', padding: 16, gap: 8, marginBottom: 14 },
  stepCardDisabled: { backgroundColor: '#F9F3EA', borderColor: '#E1D4C1' },
  stepCardPressed: { transform: [{ scale: 0.99 }], backgroundColor: '#FFF7EA' },
  stepHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, flexWrap: 'wrap' },
  order: { fontSize: 13, fontWeight: '900', color: '#73471F' },
  state: { fontSize: 12, fontWeight: '800', color: '#365A36', backgroundColor: '#EEF8EA', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 999, overflow: 'hidden' },
  stateDisabled: { color: '#6A4522', backgroundColor: '#FFF8EE' },
  stepTitle: { fontSize: 20, fontWeight: '900', color: '#4A2D10' },
  stepSummary: { fontSize: 14, lineHeight: 20, color: '#6A4522' },
  metaRow: { flexDirection: 'row', gap: 6, flexWrap: 'wrap' },
  metaPill: { backgroundColor: '#FFFFFFCC', borderRadius: 999, paddingHorizontal: 10, paddingVertical: 6, fontSize: 12, color: '#6A4522', fontWeight: '700', overflow: 'hidden' },
  trustLine: { fontSize: 12, lineHeight: 17, color: '#365A36', fontWeight: '800' },
  trustLineDisabled: { color: '#7B6248' }
});
