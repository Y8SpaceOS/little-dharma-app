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
import {
  buildMyTreasuresTrustCopy,
  getMyTreasuresMemoryCopy,
} from '@/services/myTreasuresTrustCopyService';

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

  const trustCopy = useMemo(() => buildMyTreasuresTrustCopy(), []);

  const groupedByValue = useMemo(() => {
    const sections = new Map<string, { heading: string; icon: string; cards: typeof earnedTreasures }>();

    earnedTreasures.forEach((packet) => {
      const value = packet.story.value.trim();
      const lower = value.toLowerCase();
      let heading = `${value} Blessings`;
      let icon = '🪔';

      if (lower.includes('courage') || lower.includes('brave')) {
        heading = 'Diyas of Courage';
        icon = '🪔';
      } else if (lower.includes('kind')) {
        heading = 'Kindness Flowers';
        icon = '🌼';
      } else if (lower.includes('gratitude') || lower.includes('thank')) {
        heading = 'Gratitude Blessings';
        icon = '🙏';
      } else if (lower.includes('truth')) {
        heading = 'Lotus of Truth';
        icon = '🪷';
      }

      const existing = sections.get(value);
      if (existing) {
        existing.cards.push(packet);
      } else {
        sections.set(value, { heading, icon, cards: [packet] });
      }
    });

    return Array.from(sections.entries()).map(([value, section]) => ({ value, ...section }));
  }, [earnedTreasures]);

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>My Treasures ✨</Text>
        <Text style={styles.subtitle}>{getMyTreasuresMemoryCopy()}</Text>

        <View style={styles.trustCard} accessibilityLabel={trustCopy.accessibilityLabel} accessibilityHint={trustCopy.accessibilityHint}>
          {trustCopy.microcopyBullets.map((line) => (
            <Text key={line} style={styles.trustCopy}>• {line}</Text>
          ))}
        </View>

        <View style={styles.heroCard}>
          {isLoading ? (
            <CalmLoadingState surfaceName='My Treasures summary' audience='child' variant='inline' />
          ) : (
            <>
              <Text style={styles.heroEyebrow}>Your values are growing</Text>
              <Text style={styles.heroTitle}>{completedCount} of {totalCount} story memories saved</Text>
              <Text style={styles.heroCopy}>
                {completedCount === 0
                  ? 'Every completed story can leave a small blessing in your memory chest.'
                  : 'Blessings you found, diyas you lit, and values you practiced are all gently kept on this device.'}
              </Text>
              {latestTreasure ? <Text style={styles.heroHint}>Recent treasure: {latestTreasure.story.title}</Text> : null}
            </>
          )}
        </View>


        <Text style={styles.sectionSubtitle}>Earned Badges become story memories here. Vrindavan memories saved stay Private on this device.</Text>
        <View style={styles.luvluCard}>
          <Text style={styles.luvluTitle}>🦚 Luvlu</Text>
          <Text style={styles.luvluCopy}>Luvlu says: Every kind story helps your garden grow. Choose one value to remember today.</Text>
        </View>

        {completedCount === 0 ? (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyTitle}>Your garden is ready to grow</Text>
            <Text style={styles.emptyCopy}>Complete a story to plant your first value seed.</Text>
            <Text style={styles.emptyLuvlu}>Luvlu says: Let us find your first kindness flower.</Text>
            <View style={styles.emptyActions}>
              <Link href='/(child)/worlds' style={styles.primaryCta} accessibilityRole='link' accessibilityLabel='Go to Story World'>Go to Story World</Link>
              <Link href='/(child)/today' style={styles.secondaryCta} accessibilityRole='link' accessibilityLabel="Start Today's story from Child Home">Start Today’s Story</Link>
            </View>
          </View>
        ) : (
          <>
            <View style={styles.sectionCard}>
              <Text style={styles.sectionTitle}>Values Garden • Values you practiced</Text>
              <Text style={styles.sectionSubtitle}>Flowers that have bloomed from your completed stories. Kindness Flower • Courage Diya • Gratitude Leaf • Truth Lotus.</Text>
              <View style={styles.valueWrap}>
                {valueGarden.map((entry) => (
                  <View key={entry.value} style={styles.valueChip}>
                    <Text style={styles.valueChipTitle}>{entry.value}</Text>
                    <Text style={styles.valueChipMeta}>{entry.storyCount} stor{entry.storyCount === 1 ? 'y' : 'ies'} remembered</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.sectionCard}>
              <Text style={styles.sectionTitle}>Story memories that helped this garden</Text>
              <Text style={styles.sectionSubtitle}>Story memories help your garden grow. Your blessings and values stay together.</Text>
              {groupedByValue.map((section) => (
                <View key={section.value} style={styles.memorySection}>
                  <Text style={styles.memorySectionTitle}>{section.icon} {section.heading}</Text>
                  {section.cards.map((packet) => {
                    const completedAt = completions[packet.story.slug]?.completedAt;
                    const earnedDate = completedAt ? new Date(completedAt).toLocaleDateString() : 'Saved on this device';

                    return (
                      <View key={packet.story.slug} style={styles.treasureCard} accessibilityLabel={`Treasure from ${packet.story.title}`}>
                        <Text style={styles.memoryName}>{packet.story.badgeName}</Text>
                        <Text style={styles.memoryMeta}>Story: {packet.story.title}</Text>
                        <Text style={styles.memoryMeta}>Value practiced: {packet.story.value}</Text>
                        <Text style={styles.memoryMeta}>Blessing saved: {earnedDate}</Text>
                        <Link href={`/story/${packet.story.slug}`} style={styles.revisitLink} accessibilityRole='link' accessibilityLabel={`Revisit ${packet.story.title}`}>Revisit story</Link>
                      </View>
                    );
                  })}
                </View>
              ))}
            </View>
          </>
        )}

        <View style={styles.wordsCard}>
          <Text style={styles.sectionTitle}>One value for today</Text>
          <Text style={styles.sectionSubtitle}>Words I Carry from your story garden.</Text>
          <Text style={styles.sectionSubtitle}>Choose one gentle value to remember before sleep.</Text>
          {wordsICarry.length === 0 ? <Text style={styles.wordsEmpty}>Your carrying word will appear after your first completed story.</Text> : (
            <View style={styles.wordsWrap}>
              {wordsICarry.map((word) => <View key={word} style={styles.wordChip}><Text style={styles.wordChipText}>{word}</Text></View>)}
            </View>
          )}
          {latestCarryingWord ? <Text style={styles.latestWord}>Latest carrying word: {latestCarryingWord}</Text> : null}
        </View>

        <View style={styles.bridgeCard}>
          <Text style={styles.bridgeTitle}>My Treasures bridge</Text>
          <Text style={styles.bridgeCopy}>See the story memories behind these values in My Treasures and Story World.</Text>
          <View style={styles.emptyActions}>
            <Link href='/(child)/treasures' style={styles.secondaryCta} accessibilityRole='link' accessibilityLabel='Open My Treasures'>Open My Treasures</Link>
            <Link href='/(child)/worlds' style={styles.secondaryCta} accessibilityRole='link' accessibilityLabel='Go back to Story World'>Go to Story World</Link>
          </View>
        </View>

        <View style={styles.parentPromptCard}>
          <Text style={styles.parentPromptTitle}>Parent-child prompt</Text>
          <Text style={styles.parentPromptCopy}>Ask your child: Where did we see kindness today?</Text>
        </View>


        <Text style={styles.privacyNote}>Values are based on stories completed on this device. No public child profile. This garden is for reflection, not competition.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#FFF9EE' },
  content: { padding: tokens.spacing.lg, gap: 12, paddingBottom: tokens.spacing.xl },
  title: { fontSize: 34, fontWeight: '800', color: '#50311A' },
  subtitle: { fontSize: 16, lineHeight: 22, color: '#6D4B2C' },
  heroCard: { backgroundColor: '#FFE7C2', borderRadius: tokens.radius.card, borderWidth: 1, borderColor: '#F5CB8D', padding: tokens.spacing.lg, gap: 8 },
  trustCard: { backgroundColor: '#F4FBF6', borderRadius: tokens.radius.card, borderWidth: 1, borderColor: '#CFE7D4', padding: tokens.spacing.md, gap: 6 },
  trustCopy: { fontSize: 14, lineHeight: 20, color: '#355D3D' },
  heroEyebrow: { fontSize: 12, letterSpacing: 1, textTransform: 'uppercase', fontWeight: '700', color: '#7A4A25' },
  heroTitle: { fontSize: 22, fontWeight: '800', color: '#4A2B17' },
  heroCopy: { fontSize: 14, lineHeight: 20, color: '#6D4B2C' },
  heroHint: { fontSize: 13, color: '#7A5434' },
  luvluCard: { backgroundColor: '#E8F4FF', borderRadius: tokens.radius.button, borderWidth: 1, borderColor: '#C8E1F8', padding: tokens.spacing.md, gap: 6 },
  luvluTitle: { fontSize: 18, fontWeight: '800', color: '#1B4E76' },
  luvluCopy: { fontSize: 15, lineHeight: 21, color: '#2D5E85' },
  sectionCard: { backgroundColor: '#FFF4DE', borderRadius: tokens.radius.card, borderWidth: 1, borderColor: '#F0D2A4', padding: tokens.spacing.lg, gap: 8 },
  sectionTitle: { fontSize: 24, fontWeight: '800', color: '#3D2615' },
  sectionSubtitle: { fontSize: 15, lineHeight: 21, color: '#6D4B2C' },
  valueWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  valueChip: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#F3D7AB', borderRadius: 16, paddingHorizontal: 12, paddingVertical: 8 },
  valueChipTitle: { fontSize: 15, fontWeight: '800', color: '#5A361D' },
  valueChipMeta: { fontSize: 12, color: '#7A5434' },
  memorySection: { gap: 8, marginTop: 6 },
  memorySectionTitle: { fontSize: 18, fontWeight: '800', color: '#5A361D' },
  treasureCard: { backgroundColor: '#FFFDF8', borderRadius: 18, borderWidth: 1, borderColor: '#E9D9BB', padding: tokens.spacing.md, gap: 3 },
  memoryName: { fontSize: 18, fontWeight: '800', color: '#3D2615' },
  memoryMeta: { fontSize: 14, color: '#6D4B2C' },
  revisitLink: { marginTop: 4, alignSelf: 'flex-start', color: tokens.colors.peacock, fontSize: 14, fontWeight: '700' },
  emptyCard: { backgroundColor: '#FFF4DE', borderRadius: tokens.radius.card, borderWidth: 1, borderColor: '#F0D2A4', padding: tokens.spacing.lg, gap: 8 },
  emptyTitle: { fontSize: 24, fontWeight: '800', color: '#5A361D' },
  emptyCopy: { fontSize: 16, lineHeight: 22, color: '#6D4B2C' },
  emptyLuvlu: { fontSize: 15, lineHeight: 21, color: '#2D5E85' },
  emptyActions: { gap: 8, marginTop: 6 },
  primaryCta: { alignSelf: 'flex-start', backgroundColor: '#E88A3A', color: '#FFFFFF', borderRadius: 14, fontSize: 15, fontWeight: '800', paddingHorizontal: 16, paddingVertical: 10, overflow: 'hidden' },
  secondaryCta: { alignSelf: 'flex-start', color: tokens.colors.peacock, fontSize: 15, fontWeight: '700' },
  wordsCard: { backgroundColor: '#F6EFFF', borderWidth: 1, borderColor: '#E0D1F9', borderRadius: tokens.radius.card, padding: tokens.spacing.lg, gap: 8 },
  wordsEmpty: { fontSize: 14, lineHeight: 20, color: '#5F4A78' },
  wordsWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  wordChip: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#E5D9F9', borderRadius: 999, paddingHorizontal: 12, paddingVertical: 6 },
  wordChipText: { fontSize: 13, fontWeight: '700', color: '#5A4682' },
  latestWord: { fontSize: 14, color: '#355D3D' },

  bridgeCard: { backgroundColor: '#EDF8EE', borderRadius: tokens.radius.button, borderWidth: 1, borderColor: '#CDE9D2', padding: tokens.spacing.lg, gap: 8 },
  bridgeTitle: { fontSize: 20, fontWeight: '800', color: '#2E5D35' },
  bridgeCopy: { fontSize: 14, lineHeight: 20, color: '#3F6A45' },
  parentPromptCard: { backgroundColor: '#FFF8E8', borderRadius: tokens.radius.button, borderWidth: 1, borderColor: '#F1DEB6', padding: tokens.spacing.lg, gap: 6 },
  parentPromptTitle: { fontSize: 18, fontWeight: '800', color: '#5A361D' },
  parentPromptCopy: { fontSize: 15, lineHeight: 21, color: '#6D4B2C' },
  privacyNote: { marginTop: 6, fontSize: 13, lineHeight: 19, color: '#735A42' }
});

export default function TreasuresScreen() {
  return (
    <RouteErrorBoundary surfaceName='My Treasures' audience='child'>
      <TreasuresScreenContent />
    </RouteErrorBoundary>
  );
}
