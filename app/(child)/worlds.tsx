import { Link } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useMemo, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { getChildProfile, type ChildAgeBand } from '@/lib/childProfile';
import { getAllStoryCompletions } from '@/lib/storyProgress';
import { storyWorldItems, storyWorldSections, type StoryWorldItem } from '@/data/storyWorld';

const ageBandWeights: Record<ChildAgeBand, number> = {
  '3-5': 0,
  '6-8': 1,
  '9-12': 2,
  'prefer-not-to-say': 3
};

function getAgePriority(ageBand: ChildAgeBand | undefined, item: StoryWorldItem): number {
  if (!ageBand || ageBand === 'prefer-not-to-say') return item.sectionId === 'start-here' ? 0 : 2;
  if (!item.ageBands.includes(ageBand)) return 50;
  if (ageBand === '3-5') return item.durationMinutes <= 8 ? 0 : 1;
  if (ageBand === '6-8') return item.durationMinutes <= 10 ? 0 : 1;
  return item.durationMinutes >= 10 ? 0 : 1;
}

export default function Screen() {
  const [ageBand, setAgeBand] = useState<ChildAgeBand | undefined>();
  const [completedSlugs, setCompletedSlugs] = useState<Record<string, boolean>>({});

  useFocusEffect(
    useCallback(() => {
      getChildProfile().then((profile) => setAgeBand(profile.ageBand)).catch(() => setAgeBand(undefined));
      getAllStoryCompletions()
        .then((entries) => {
          const map: Record<string, boolean> = {};
          Object.keys(entries).forEach((slug) => (map[slug] = true));
          setCompletedSlugs(map);
        })
        .catch(() => setCompletedSlugs({}));
    }, [])
  );

  const orderedItems = useMemo(() => {
    const sorted = [...storyWorldItems].sort((a, b) => {
      const aPriority = getAgePriority(ageBand, a);
      const bPriority = getAgePriority(ageBand, b);
      if (aPriority !== bPriority) return aPriority - bPriority;
      if (a.status !== b.status) return a.status === 'available' ? -1 : 1;
      const aWeight = Math.min(...a.ageBands.map((band) => ageBandWeights[band]));
      const bWeight = Math.min(...b.ageBands.map((band) => ageBandWeights[band]));
      return aWeight - bWeight;
    });
    return sorted;
  }, [ageBand]);

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.heroCard}>
          <Text style={styles.heroEyebrow}>Little Dharma</Text>
          <Text style={styles.heading}>Story World</Text>
          <Text style={styles.subheading}>Choose a warm story corner and begin your next gentle journey.</Text>
        </View>

        <View style={styles.parentTrustCard}>
          <Text style={styles.parentTrustText}>Recommended using the broad age band saved on this device.</Text>
          <Text style={styles.parentTrustText}>You can change this anytime in Parent settings. Stories stay local-first.</Text>
        </View>

        {storyWorldSections.map((section) => {
          const sectionItems = orderedItems.filter((item) => item.sectionId === section.id);
          return (
            <View key={section.id} style={styles.sectionCard}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <Text style={styles.sectionSubtitle}>{section.subtitle}</Text>
              {sectionItems.map((item) => {
                const isAvailable = item.status === 'available' && !!item.slug;
                const isDone = item.slug ? !!completedSlugs[item.slug] : false;
                const cta = !isAvailable ? 'Opening soon' : isDone ? 'Continue' : 'Start Story';
                const card = (
                  <>
                    <Text style={styles.cardTitle}>{item.shortTitle}</Text>
                    <Text style={styles.cardSummary}>{item.summary}</Text>
                    <View style={styles.metaRow}>
                      <Text style={styles.metaChip}>{item.durationMinutes} min</Text>
                      <Text style={styles.metaChip}>Ages {item.ageBands.join(', ')}</Text>
                      <Text style={styles.metaChip}>Value: {item.primaryValue}</Text>
                    </View>
                    <Text style={styles.source}>{item.sourceTradition}</Text>
                    <Text style={styles.cta}>{cta}</Text>
                  </>
                );

                if (!isAvailable) {
                  return <View key={item.id} style={[styles.storyCard, styles.comingSoonCard]}>{card}</View>;
                }

                return (
                  <Link key={item.id} href={`/story/${item.slug}` as never} style={styles.storyCard}>
                    {card}
                  </Link>
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#FDF5E6' },
  scrollContent: { padding: 16, gap: 12, paddingBottom: 28 },
  heroCard: { backgroundColor: '#FFF2D6', borderRadius: 24, borderWidth: 1, borderColor: '#F4C87A', padding: 18 },
  heroEyebrow: { color: '#8A5410', fontSize: 12, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.8 },
  heading: { fontSize: 32, fontWeight: '900', color: '#2D485E', marginTop: 2 },
  subheading: { marginTop: 6, color: '#5A4436', fontSize: 15, lineHeight: 21 },
  parentTrustCard: { backgroundColor: '#FFF9ED', borderColor: '#E6D7BA', borderWidth: 1, borderRadius: 16, padding: 12, gap: 4 },
  parentTrustText: { color: '#5B4637', fontSize: 13, lineHeight: 18 },
  sectionCard: { backgroundColor: '#FFFCF6', borderColor: '#F0DFC0', borderWidth: 1, borderRadius: 20, padding: 14, gap: 8 },
  sectionTitle: { fontSize: 21, fontWeight: '800', color: '#1E4E75' },
  sectionSubtitle: { color: '#6A5B4A', fontSize: 13, marginBottom: 4 },
  storyCard: { backgroundColor: '#FFFFFF', borderColor: '#EADCC3', borderWidth: 1, borderRadius: 18, padding: 12, gap: 6 },
  comingSoonCard: { backgroundColor: '#F7F0E2', borderColor: '#D8CBB1' },
  cardTitle: { fontSize: 17, fontWeight: '800', color: '#2D2A26' },
  cardSummary: { fontSize: 13, color: '#5F5142', lineHeight: 18 },
  metaRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  metaChip: { fontSize: 12, color: '#2A5C7D', backgroundColor: '#E8F5FF', borderRadius: 999, paddingHorizontal: 8, paddingVertical: 4 },
  source: { fontSize: 12, color: '#44602B' },
  cta: { marginTop: 4, fontSize: 14, color: '#A35D00', fontWeight: '800' }
});
