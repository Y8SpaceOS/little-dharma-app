import { useCallback, useMemo, useState } from 'react';
import { Link } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { tokens } from '@/design/tokens';
import { getAllStoryCompletions, type StoryCompletionRecord } from '@/lib/storyProgress';
import { getVrindavanJourneyPath } from '@/services/journeys';

export default function TreasuresScreen() {
  const [completions, setCompletions] = useState<StoryCompletionRecord>({});

  const refreshTreasures = useCallback(async () => {
    const stored = await getAllStoryCompletions();
    setCompletions(stored);
  }, []);

  useFocusEffect(
    useCallback(() => {
      refreshTreasures().catch(() => setCompletions({}));
    }, [refreshTreasures])
  );

  const vrindavanPath = useMemo(() => getVrindavanJourneyPath(), []);
  const earnedTreasures = useMemo(
    () => vrindavanPath.filter((packet) => Boolean(completions[packet.story.slug])),
    [completions, vrindavanPath]
  );

  const completedCount = earnedTreasures.length;
  const totalCount = vrindavanPath.length;

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>My Treasures ✨</Text>
        <Text style={styles.subtitle}>A private badge wallet just for your heart-growing journey.</Text>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryEyebrow}>Journey progress</Text>
          <Text style={styles.summaryTitle}>{completedCount} of {totalCount} treasures collected</Text>
          <Text style={styles.summaryCopy}>Every completed story adds one special reminder of your values.</Text>
        </View>

        {completedCount === 0 ? (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyTitle}>Your treasure shelf is ready 🌼</Text>
            <Text style={styles.emptyCopy}>Complete a story in Vrindavan and your first badge will sparkle here.</Text>
            <Link href='/(child)/today' style={styles.emptyCta}>Start a journey</Link>
          </View>
        ) : (
          <View style={styles.treasureList}>
            {earnedTreasures.map((packet) => {
              const completedAt = completions[packet.story.slug]?.completedAt;
              const earnedDate = completedAt ? new Date(completedAt).toLocaleDateString() : null;

              return (
                <View key={packet.story.slug} style={styles.treasureCard}>
                  <Text style={styles.badgeName}>{packet.story.badgeName}</Text>
                  <Text style={styles.badgeMeta}>Story: {packet.story.title}</Text>
                  <Text style={styles.badgeMeta}>Value: {packet.story.value}</Text>
                  {earnedDate && <Text style={styles.badgeDate}>Earned on {earnedDate}</Text>}
                </View>
              );
            })}
          </View>
        )}

        <Text style={styles.privacyNote}>Only your family can see this. No leaderboard, no public profile, just your own beautiful growth.</Text>
        <Link href='/(child)/today' style={styles.backLink}>Back to Child Home</Link>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#FFF9EE' },
  content: { padding: tokens.spacing.lg, gap: 12, paddingBottom: tokens.spacing.xl },
  title: { fontSize: 34, fontWeight: '800', color: '#50311A' },
  subtitle: { fontSize: 16, lineHeight: 22, color: '#6D4B2C' },
  summaryCard: { backgroundColor: '#FFE7C2', borderRadius: 24, borderWidth: 1, borderColor: '#F5CB8D', padding: tokens.spacing.lg, gap: 4 },
  summaryEyebrow: { fontSize: 12, letterSpacing: 1, textTransform: 'uppercase', fontWeight: '700', color: '#7A4A25' },
  summaryTitle: { fontSize: 22, fontWeight: '800', color: '#4A2B17' },
  summaryCopy: { fontSize: 14, lineHeight: 20, color: '#6D4B2C' },
  emptyCard: { backgroundColor: '#FFF3DD', borderRadius: 24, borderWidth: 1, borderColor: '#F3D7AB', padding: tokens.spacing.lg, gap: 8 },
  emptyTitle: { fontSize: 22, fontWeight: '800', color: '#5A361D' },
  emptyCopy: { fontSize: 15, lineHeight: 21, color: '#6D4B2C' },
  emptyCta: { alignSelf: 'flex-start', marginTop: 4, backgroundColor: '#E88A3A', color: '#FFFFFF', borderRadius: 14, fontSize: 15, fontWeight: '800', paddingHorizontal: 16, paddingVertical: 10, overflow: 'hidden' },
  treasureList: { gap: 10 },
  treasureCard: { backgroundColor: '#FFFFFF', borderRadius: 20, borderWidth: 1, borderColor: '#F0DEBE', padding: tokens.spacing.md, gap: 2 },
  badgeName: { fontSize: 19, fontWeight: '800', color: '#3D2615' },
  badgeMeta: { fontSize: 14, color: '#6D4B2C' },
  badgeDate: { fontSize: 13, color: '#8C613A', marginTop: 2 },
  privacyNote: { marginTop: 6, fontSize: 13, lineHeight: 19, color: '#735A42' },
  backLink: { marginTop: 6, textAlign: 'center', color: tokens.colors.peacock, fontSize: 16, fontWeight: '700' }
});
