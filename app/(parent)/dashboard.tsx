import { Link } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import RouteErrorBoundary from '@/components/RouteErrorBoundary';
import { visualStyles, visualTokens } from '@/design/visualSystem';
import { getParentDashboardSnapshot } from '@/services/progress';
import { getParentWeeklySummary } from '@/services/parentWeeklySummaryService';

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
  return <SafeAreaView style={visualStyles.screen}><ScrollView contentContainerStyle={styles.content}>
    <View style={[visualStyles.heroCard, { backgroundColor: '#F3E8D5' }]}>
      <Text style={styles.heading}>Your child&apos;s journey</Text>
      <Text style={styles.sub}>A calm weekly snapshot designed for trust, warmth, and local-first family use.</Text>
    </View>

    <View style={styles.metricsRow}>
      <View style={[visualStyles.parentCard, styles.metric]}><Text style={styles.metricNum}>{storiesCompleted}</Text><Text style={styles.metricLabel}>Stories completed</Text></View>
      <View style={[visualStyles.parentCard, styles.metric]}><Text style={styles.metricNum}>{timeMetric}</Text><Text style={styles.metricLabel}>Journey time</Text></View>
      <View style={[visualStyles.parentCard, styles.metric]}><Text style={styles.metricNum}>{valuesTouched || '—'}</Text><Text style={styles.metricLabel}>Values touched</Text></View>
    </View>

    <View style={visualStyles.parentCard}><Text style={styles.section}>Journey progress</Text><Text style={styles.copy}>{journeyMetric}</Text><Text style={styles.copy}>{storiesCompleted > 0 ? 'Keep one gentle pace.' : 'Journey time will appear after stories are completed.'}</Text></View>

    <View style={visualStyles.parentCard}>
      <Text style={styles.section}>This week in Little Dharma</Text>
      <Text style={styles.copy}>Stories completed: {weeklySummary?.completedStoryCount ?? 0}</Text>
      <Text style={styles.copy}>Values explored: {weeklySummary?.valuesExplored.join(', ') || 'None yet this week'}</Text>
      <Text style={styles.copy}>Gentle next step: {weeklySummary?.suggestedNextStory?.title ?? 'Continue when ready'}</Text>
      <Text style={styles.copy}>Stored on this device</Text>
    </View>
    <View style={visualStyles.parentCard}><Text style={styles.section}>Values this week</Text><Text style={styles.copy}>{valuesTouched > 0 ? summary?.weeklyProgress.practicedValues.join(', ') : 'Values touched will appear as your child reads.'}</Text></View>

    <Text style={visualStyles.sectionHeader}>Parent trust</Text>
    <View style={visualStyles.parentCard}><Text style={styles.copy}>🔒 Local-first: child progress stays on this device.</Text><Text style={styles.copy}>🎙️ No microphone or recording in v1.</Text><Text style={styles.copy}>🧒 No public child profile.</Text><Text style={styles.copy}>🕊️ No ads, no leaderboards, no pressure loops.</Text></View>

    <Link href='/(parent)/controls' style={visualStyles.primaryCta}>Open Parent Controls</Link>
    <Link href='/(parent)/privacy' style={visualStyles.secondaryCta}>Open Trust & Privacy Center</Link>
    <Link href='/(child)/today' style={visualStyles.secondaryCta}>Switch to Child Home</Link>
  </ScrollView></SafeAreaView>;
}

const styles = StyleSheet.create({ content:{padding:16,gap:12,paddingBottom:30}, heading:{fontSize:32,fontWeight:'900',color:visualTokens.color.warmBrown}, sub:{fontSize:14,lineHeight:20,color:visualTokens.color.mutedBrown}, metricsRow:{flexDirection:'row',justifyContent:'space-between'}, metric:{width:'32%',alignItems:'center'}, metricNum:{fontSize:26,fontWeight:'900',color:visualTokens.color.warmBrown}, metricLabel:{fontSize:12,fontWeight:'700',color:visualTokens.color.mutedBrown}, section:{fontSize:16,fontWeight:'900',color:visualTokens.color.warmBrown}, copy:{fontSize:14,lineHeight:20,color:visualTokens.color.mutedBrown} });

export default function DashboardScreen() { return <RouteErrorBoundary surfaceName='Parent Dashboard' audience='parent' primaryActionHref='/(child)/today' primaryActionLabel='Go to Child Home'><DashboardScreenContent /></RouteErrorBoundary>; }
