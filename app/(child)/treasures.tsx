import { useCallback, useMemo, useState } from 'react';
import { Link } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { tokens } from '@/design/tokens';
import RouteErrorBoundary from '@/components/RouteErrorBoundary';
import CalmLoadingState from '@/components/CalmLoadingState';
import {
  getAllStoryCompletions,
  getCompletedCarryingWords,
  getLatestCarryingWord,
  type StoryCompletionRecord
} from '@/lib/storyProgress';
import { getVrindavanJourneyPath } from '@/services/journeys';

function TreasuresScreenContent() {
  const [completions, setCompletions] = useState<StoryCompletionRecord>({});
  const [wordsICarry, setWordsICarry] = useState<string[]>([]);
  const [latestCarryingWord, setLatestCarryingWord] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const refreshTreasures = useCallback(async () => {
    setIsLoading(true);
    const path = getVrindavanJourneyPath();
    const stored = await getAllStoryCompletions();
    setCompletions(stored);
    const words = await getCompletedCarryingWords(path);
    setWordsICarry(Array.from(new Set(words)));
    setLatestCarryingWord(await getLatestCarryingWord(path));
    setIsLoading(false);
  }, []);

  useFocusEffect(
    useCallback(() => {
      refreshTreasures().catch(() => {
        setCompletions({});
        setWordsICarry([]);
        setLatestCarryingWord(null);
        setIsLoading(false);
      });
    }, [refreshTreasures])
  );

  const vrindavanPath = useMemo(() => getVrindavanJourneyPath(), []);
  const earnedTreasures = useMemo(
    () => vrindavanPath.filter((packet) => Boolean(completions[packet.story.slug])),
    [completions, vrindavanPath]
  );

  const valueGarden = useMemo(() => {
    const counts = new Map<string, number>();
    earnedTreasures.forEach((packet) => {
      const value = packet.story.value.trim();
      counts.set(value, (counts.get(value) ?? 0) + 1);
    });

    return Array.from(counts.entries())
      .map(([value, storyCount]) => ({ value, storyCount }))
      .sort((a, b) => b.storyCount - a.storyCount || a.value.localeCompare(b.value));
  }, [earnedTreasures]);

  const completedCount = earnedTreasures.length;
  const totalCount = vrindavanPath.length;
  const badgesCount = earnedTreasures.length;
  const carryingWordCount = wordsICarry.length;
  const valueCount = valueGarden.length;
  const latestTreasure = useMemo(() => {
    let latestPacket: (typeof earnedTreasures)[number] | null = null;
    let latestMs = Number.NEGATIVE_INFINITY;

    earnedTreasures.forEach((packet) => {
      const completedAt = completions[packet.story.slug]?.completedAt;
      const ms = completedAt ? Date.parse(completedAt) : Number.NaN;

      if (Number.isFinite(ms) && ms > latestMs) {
        latestPacket = packet;
        latestMs = ms;
      }
    });

    if (latestPacket) return latestPacket;
    return earnedTreasures[earnedTreasures.length - 1] ?? null;
  }, [completions, earnedTreasures]);
  const completionLabel = `${completedCount} of ${totalCount} Vrindavan memories saved`;
  const isFullPathComplete = totalCount > 0 && completedCount === totalCount;

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>My Treasures ✨</Text>
        <Text style={styles.subtitle}>Your private memory shelf from stories you completed with care.</Text>

        <View style={styles.summaryCard}>
          {isLoading ? (
            <CalmLoadingState surfaceName='My Treasures summary' audience='child' variant='inline' />
          ) : (
            <>
          <Text style={styles.summaryEyebrow}>Vrindavan journey</Text>
          <Text style={styles.summaryTitle}>{completionLabel}</Text>
          <Text style={styles.summaryCopy}>
            {completedCount === 0
              ? 'When you finish a story, one memory is gently saved here.'
              : isFullPathComplete
                ? 'You completed the full 21-story path. Your values, badges, and words are all safely kept here.'
                : 'Each finished story adds a new memory, a practiced value, and a carrying word.'}
          </Text>
          <View style={styles.summaryStatsRow}>
            <View style={styles.summaryPill}><Text style={styles.summaryPillText}>{valueCount} values practiced</Text></View>
            <View style={styles.summaryPill}><Text style={styles.summaryPillText}>{badgesCount} badges earned</Text></View>
            <View style={styles.summaryPill}><Text style={styles.summaryPillText}>{carryingWordCount} words carried</Text></View>
          </View>
          {latestTreasure ? <Text style={styles.summaryHint}>Latest memory: {latestTreasure.story.title}</Text> : null}
          {isFullPathComplete ? <Text style={styles.fullPathMessage}>Full path complete — take your time revisiting any story you love.</Text> : null}
            </>
          )}
        </View>

        <View style={styles.gardenCard}>
          <Text style={styles.sectionTitle}>Values Garden</Text>
          <Text style={styles.sectionSubtitle}>These are the values you have practiced through completed stories.</Text>
          {valueGarden.length === 0 ? (
            <Text style={styles.sectionEmpty}>Your garden is ready. Complete one story to plant your first value seed.</Text>
          ) : (
            <View style={styles.valueWrap}>
              {valueGarden.map((entry) => (
                <View key={entry.value} style={styles.valueChip}>
                  <Text style={styles.valueChipTitle}>{entry.value}</Text>
                  <Text style={styles.valueChipMeta}>{entry.storyCount} stor{entry.storyCount === 1 ? 'y' : 'ies'} practiced</Text>
                </View>
              ))}
            </View>
          )}
          {latestCarryingWord ? <Text style={styles.latestWord}>Latest carrying word: {latestCarryingWord}</Text> : null}
        </View>

        <View style={styles.badgesCard}>
          <Text style={styles.sectionTitle}>Earned Badges</Text>
          <Text style={styles.sectionSubtitle}>Each badge marks a story memory you completed.</Text>
          {completedCount === 0 ? (
            <View style={styles.emptyCard}>
              <Text style={styles.emptyTitle}>Your badge shelf is waiting 🌼</Text>
              <Text style={styles.emptyCopy}>Complete your first Vrindavan story and your first badge will appear here.</Text>
              <Link href='/(child)/today' style={styles.emptyCta} accessibilityRole='link' accessibilityLabel='Start a story from Child Home'>Start a story</Link>
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
                    <Text style={styles.badgeDate}>{earnedDate ? `Earned: ${earnedDate}` : 'Earned: Saved on this device'}</Text>
                  </View>
                );
              })}
            </View>
          )}
        </View>

        <View style={styles.wordsCard}>
          <Text style={styles.sectionTitle}>Words I Carry</Text>
          <Text style={styles.sectionSubtitle}>Gentle words you can remember and carry into your day.</Text>
          {wordsICarry.length === 0 ? (
            <Text style={styles.wordsEmpty}>Complete a story and your first carrying word will appear here.</Text>
          ) : (
            <View style={styles.wordsWrap}>
              {wordsICarry.map((word) => (
                <View key={word} style={styles.wordChip}>
                  <Text style={styles.wordChipText}>{word}</Text>
                </View>
              ))}
            </View>
          )}
        </View>

        <Text style={styles.privacyNote}>Private on this device for your family. No leaderboard, no ranking, no public sharing.</Text>
        <Link href='/(child)/today' style={styles.backLink} accessibilityRole='link' accessibilityLabel='Back to Child Home'>Back to Child Home</Link>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#FFF9EE' },
  content: { padding: tokens.spacing.lg, gap: 12, paddingBottom: tokens.spacing.xl },
  title: { fontSize: 34, fontWeight: '800', color: '#50311A' },
  subtitle: { fontSize: 16, lineHeight: 22, color: '#6D4B2C' },
  summaryCard: { backgroundColor: '#FFE7C2', borderRadius: 24, borderWidth: 1, borderColor: '#F5CB8D', padding: tokens.spacing.lg, gap: 8 },
  summaryEyebrow: { fontSize: 12, letterSpacing: 1, textTransform: 'uppercase', fontWeight: '700', color: '#7A4A25' },
  summaryTitle: { fontSize: 22, fontWeight: '800', color: '#4A2B17' },
  summaryCopy: { fontSize: 14, lineHeight: 20, color: '#6D4B2C' },
  summaryStatsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  summaryPill: { backgroundColor: '#FFF6E7', borderWidth: 1, borderColor: '#F2D8AF', borderRadius: 999, paddingHorizontal: 10, paddingVertical: 6 },
  summaryPillText: { fontSize: 12, fontWeight: '700', color: '#6D4B2C' },
  summaryHint: { fontSize: 13, color: '#7A5434' },
  fullPathMessage: { fontSize: 13, lineHeight: 19, color: '#6B472B' },
  gardenCard: { backgroundColor: '#EAF7E8', borderRadius: 24, borderWidth: 1, borderColor: '#CBE8C4', padding: tokens.spacing.lg, gap: 8 },
  badgesCard: { backgroundColor: '#FFF4DE', borderRadius: 24, borderWidth: 1, borderColor: '#F0D2A4', padding: tokens.spacing.lg, gap: 8 },
  sectionTitle: { fontSize: 24, fontWeight: '800', color: '#3D2615' },
  sectionSubtitle: { fontSize: 15, lineHeight: 21, color: '#6D4B2C' },
  sectionEmpty: { fontSize: 15, lineHeight: 21, color: '#3F6F47' },
  valueWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  valueChip: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#CFE5CC', borderRadius: 16, paddingHorizontal: 12, paddingVertical: 8, minWidth: 124 },
  valueChipTitle: { fontSize: 14, fontWeight: '800', color: '#2A5631' },
  valueChipMeta: { fontSize: 12, lineHeight: 17, color: '#4B6F52', marginTop: 2 },
  latestWord: { fontSize: 14, color: '#355D3D' },
  emptyCard: { backgroundColor: '#FFFFFF', borderRadius: 20, borderWidth: 1, borderColor: '#F3D7AB', padding: tokens.spacing.md, gap: 8 },
  emptyTitle: { fontSize: 20, fontWeight: '800', color: '#5A361D' },
  emptyCopy: { fontSize: 15, lineHeight: 21, color: '#6D4B2C' },
  emptyCta: { alignSelf: 'flex-start', marginTop: 4, backgroundColor: '#E88A3A', color: '#FFFFFF', borderRadius: 14, fontSize: 15, fontWeight: '800', paddingHorizontal: 16, paddingVertical: 10, overflow: 'hidden' },
  treasureList: { gap: 10 },
  treasureCard: { backgroundColor: '#FFFFFF', borderRadius: 20, borderWidth: 1, borderColor: '#F0DEBE', padding: tokens.spacing.md, gap: 2 },
  badgeName: { fontSize: 19, fontWeight: '800', color: '#3D2615' },
  badgeMeta: { fontSize: 14, color: '#6D4B2C' },
  badgeDate: { fontSize: 13, color: '#8C613A', marginTop: 2 },
  wordsCard: { backgroundColor: '#F6EFFF', borderWidth: 1, borderColor: '#E0D1F9', borderRadius: 24, padding: tokens.spacing.lg, gap: 8 },
  wordsEmpty: { fontSize: 14, lineHeight: 20, color: '#5F4A78' },
  wordsWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  wordChip: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#E5D9F9', borderRadius: 999, paddingHorizontal: 12, paddingVertical: 6 },
  wordChipText: { fontSize: 13, fontWeight: '700', color: '#5A4682' },
  privacyNote: { marginTop: 6, fontSize: 13, lineHeight: 19, color: '#735A42' },
  backLink: { marginTop: 6, textAlign: 'center', color: tokens.colors.peacock, fontSize: 16, fontWeight: '700' }
});


export default function TreasuresScreen() {
  return (
    <RouteErrorBoundary
      surfaceName='My Treasures'
      audience='child'
    >
      <TreasuresScreenContent />
    </RouteErrorBoundary>
  );
}
