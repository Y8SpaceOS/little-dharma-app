import { useMemo } from 'react';
import { Link } from 'expo-router';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { GradientScreen } from '@/components/dharmaKit';
import { elevation, radii, space, text } from '@/design/visualSystem';
import { getAllDharmaJourneys, getParentFacingJourneySummary } from '@/lib/dharmaJourneys';

function getJourneyStatusLabel(status: 'available' | 'planned' | 'coming_later') {
  if (status === 'available') return 'Available';
  if (status === 'planned') return 'Planned';
  return 'Coming soon';
}

export default function ParentJourneySettingsScreen() {
  const journeys = useMemo(() => getAllDharmaJourneys(), []);
  const summary = getParentFacingJourneySummary();

  return <GradientScreen gradient='sky'><SafeAreaView style={styles.safe}><ScrollView contentContainerStyle={styles.content}>
    <Text style={styles.heading}>Journey Settings</Text>
    <Text style={styles.subheading}>{summary.heading}</Text>

    <View style={styles.card}>
      <Text style={styles.title}>How Dharma Journeys work</Text>
      <Text style={styles.copy}>Choose which Dharma Journeys to prepare first for your family.</Text>
      <Text style={styles.copy}>{summary.sequencingNote}</Text>
      <Text style={styles.copy}>Progress stays on this device. No public child profile and no cloud account are required.</Text>
      <Text style={styles.copy}>You can revisit journey settings anytime.</Text>
    </View>

    <View style={styles.card}>
      <Text style={styles.title}>Recommended starting story paths</Text>
      <Text style={styles.copy}>Ramayana Journey and Krishna Childhood Journey are recommended first for many children.</Text>
      <Text style={styles.copy}>Mahabharata Journey and Bhagavad Gita for Children are planned for later with older-child editorial care.</Text>
    </View>

    {journeys.map((journey) => (
      <View key={journey.id} style={styles.card}>
        <Text style={styles.journeyTitle}>{journey.childFacingTitle}</Text>
        <Text style={styles.copy}>{journey.description}</Text>
        <Text style={styles.meta}>Source tradition: {journey.sourceTradition}</Text>
        <Text style={styles.meta}>Broad age bands: {journey.recommendedAgeBands.join(', ')}</Text>
        <Text style={styles.meta}>Status: {getJourneyStatusLabel(journey.status)}</Text>
      </View>
    ))}

    <Link href='/(parent)/controls' style={styles.link}>Back to Parent Controls</Link>
  </ScrollView></SafeAreaView></GradientScreen>;
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  content: { padding: space.screen, gap: space.sm, paddingBottom: 32 },
  heading: { ...text.display, color: '#1F2F59' },
  subheading: { color: '#4F618B', fontSize: 16 },
  card: { backgroundColor: '#fff', borderRadius: radii.tile, borderWidth: 1, borderColor: '#E0E8FA', padding: 14, gap: 6, ...elevation.soft },
  title: { fontSize: 16, fontWeight: '800', color: '#2C3E68' },
  journeyTitle: { fontSize: 18, fontWeight: '800', color: '#20345D' },
  copy: { fontSize: 14, color: '#3D4E73', lineHeight: 21 },
  meta: { fontSize: 13, color: '#5A6A92' },
  link: { marginTop: 8, textAlign: 'center', backgroundColor: '#DCE8FF', color: '#1E2C50', padding: 14, borderRadius: radii.nav, fontWeight: '700' }
});
