import { Link } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import RouteErrorBoundary from '@/components/RouteErrorBoundary';
import { Card, GradientScreen, HeroCard, SectionHeader } from '@/components/dharmaKit';
import { palette, space, text, visualStyles } from '@/design/visualSystem';
import { getParentDashboardSnapshot } from '@/services/progress';
import { getParentWeeklySummary } from '@/services/parentWeeklySummaryService';
import {
  getParentWeeklySummaryGentleNextStepCopy,
  getParentWeeklySummaryGentleTitleCopy,
  getParentWeeklySummaryLocalFirstCopy,
  getParentWeeklySummaryNoPressureCopy,
  getParentWeeklySummaryReturnLaterCopy,
  getParentWeeklySummaryStoriesRememberedCopy,
  getParentWeeklySummaryTrustIntroCopy,
  getParentWeeklySummaryValuesConversationCopy,
  getParentWeeklySummarySacredCareCopy,
} from '@/services/parentWeeklySummaryCopyPolishService';

function DashboardScreenContent() {
  const [summary, setSummary] = useState<Awaited<ReturnType<typeof getParentDashboardSnapshot>> | null>(null);
  const [weeklySummary, setWeeklySummary] = useState<Awaited<ReturnType<typeof getParentWeeklySummary>> | null>(null);
  useEffect(() => {
    getParentDashboardSnapshot().then(setSummary).catch(() => setSummary(null));
    getParentWeeklySummary().then(setWeeklySummary).catch(() => setWeeklySummary(null));
  }, []);
  const storiesCompleted = summary?.storiesCompleted ?? 0;
  const valuesTouched = useMemo(() => summary?.weeklyProgress.practicedValues?.length ?? 0, [summary]);
  const journeyMetric = storiesCompleted > 0 ? summary?.weeklyProgress.completionLabel || `${storiesCompleted} stories` : 'No stories completed yet';
  const timeMetric = '—';
  return <GradientScreen gradient='body'><SafeAreaView style={styles.safe}><ScrollView contentContainerStyle={styles.content}>
    <HeroCard gradient='warm'>
      <Text style={styles.heading}>Your child&apos;s journey</Text>
      <Text style={styles.sub}>A calm weekly snapshot designed for trust, warmth, and local-first family use.</Text>
    </HeroCard>

    <View style={styles.metricsRow}>
      <Card style={styles.metric}><Text style={styles.metricNum}>{storiesCompleted}</Text><Text style={styles.metricLabel}>Stories completed</Text></Card>
      <Card style={styles.metric}><Text style={styles.metricNum}>{timeMetric}</Text><Text style={styles.metricLabel}>Journey time</Text></Card>
      <Card style={styles.metric}><Text style={styles.metricNum}>{valuesTouched || '—'}</Text><Text style={styles.metricLabel}>Values touched</Text></Card>
    </View>

    <Card><Text style={styles.section}>Journey progress</Text><Text style={styles.copy}>{journeyMetric}</Text><Text style={styles.copy}>{storiesCompleted > 0 ? 'Keep one gentle pace.' : 'Journey time will appear after stories are completed.'}</Text></Card>

    <Card>
      <Text style={styles.section}>{getParentWeeklySummaryGentleTitleCopy()}</Text>
      <Text style={styles.copy}>{getParentWeeklySummaryTrustIntroCopy()}</Text>
      <Text style={styles.copy}>{getParentWeeklySummaryLocalFirstCopy()}</Text>
      <Text style={styles.copy}>{getParentWeeklySummaryNoPressureCopy()}</Text>
      <Text style={styles.copy}>{getParentWeeklySummaryStoriesRememberedCopy()}: {weeklySummary?.completedStoryCount ?? 0}</Text>
      <Text style={styles.copy}>{getParentWeeklySummaryValuesConversationCopy()}: {weeklySummary?.valuesExplored.join(', ') || 'None yet this week'}</Text>
      <Text style={styles.copy}>{getParentWeeklySummaryGentleNextStepCopy()}: {weeklySummary?.suggestedNextStory?.title ?? getParentWeeklySummaryReturnLaterCopy()}</Text>
      <Text style={styles.copy}>{getParentWeeklySummaryReturnLaterCopy()}</Text>
      <Text style={styles.copy}>{getParentWeeklySummarySacredCareCopy()}</Text>
    </Card>
    <Card><Text style={styles.section}>Values this week</Text><Text style={styles.copy}>{valuesTouched > 0 ? summary?.weeklyProgress.practicedValues.join(', ') : 'Values touched will appear as your child reads.'}</Text></Card>

    <SectionHeader>Parent trust</SectionHeader>
    <Card><Text style={styles.copy}>🔒 Local-first: child progress stays on this device.</Text><Text style={styles.copy}>🎙️ No microphone or recording in v1.</Text><Text style={styles.copy}>🧒 No public child profile.</Text><Text style={styles.copy}>🕊️ No ads, no leaderboards, no pressure loops.</Text></Card>

    <Link href='/(parent)/controls' style={visualStyles.primaryCta}>Open Parent Controls</Link>
    <Link href='/(parent)/privacy' style={visualStyles.secondaryCta}>Open Trust & Privacy Center</Link>
    <Link href='/(child)/today' style={visualStyles.secondaryCta}>Switch to Child Home</Link>
  </ScrollView></SafeAreaView></GradientScreen>;
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  content: { padding: space.screen, gap: space.sm, paddingBottom: 30 },
  heading: { ...text.display, fontSize: 32, lineHeight: 38, color: palette.ink },
  sub: { ...text.body, color: palette.muted },
  metricsRow: { flexDirection: 'row', justifyContent: 'space-between' },
  metric: { width: '32%', alignItems: 'center' },
  metricNum: { ...text.title, fontSize: 26, color: palette.ink },
  metricLabel: { ...text.mini, fontSize: 12, color: palette.muted, textAlign: 'center' },
  section: { ...text.subheading, fontSize: 16, color: palette.ink },
  copy: { ...text.body, color: palette.muted }
});

export default function DashboardScreen() { return <RouteErrorBoundary surfaceName='Parent Dashboard' audience='parent' primaryActionHref='/(child)/today' primaryActionLabel='Go to Child Home'><DashboardScreenContent /></RouteErrorBoundary>; }
