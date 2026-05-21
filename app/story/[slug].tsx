import { useMemo, useState } from 'react';
import { Link, useLocalSearchParams } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import RouteErrorBoundary from '@/components/RouteErrorBoundary';
import { storyWorldItems, storyWorldSections } from '@/data/storyWorld';
import { getStoryJourneyBySlug } from '@/services/journeys';
import { visualStyles } from '@/design/visualSystem';
import { tokens } from '@/design/tokens';

type Stage = 'detail' | 'reader' | 'complete';

function StoryScreenContent() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const journey = slug ? getStoryJourneyBySlug(slug) : null;
  const [stage, setStage] = useState<Stage>('detail');
  const [panelIndex, setPanelIndex] = useState(0);

  if (!journey) {
    return (
      <SafeAreaView style={visualStyles.softScreen}>
        <View style={styles.card}>
          <Text style={styles.title}>This story is resting for now.</Text>
          <Text style={styles.body}>Return to Story World or go back to Child Home.</Text>
          <Link href='/(child)/worlds' style={styles.link}>Return to Story World</Link>
          <Link href='/(child)/today' style={styles.linkSecondary}>Go back to Child Home</Link>
        </View>
      </SafeAreaView>
    );
  }

  const { story } = journey;
  const storyMeta = storyWorldItems.find((item) => item.slug === story.slug);
  const worldLabel = storyMeta
    ? storyWorldSections.find((section) => section.id === storyMeta.sectionId)?.title
    : undefined;

  const summary = storyMeta?.summary || 'A warm Little Dharma story with a calm blessing at the end.';
  const durationMinutes = storyMeta?.durationMinutes ?? 10;
  const primaryValue = storyMeta?.primaryValue || story.value;
  const ageBand = storyMeta?.ageBands?.join(', ') || story.ageBand;
  const section = story.panels[panelIndex];
  const isLastSection = panelIndex === story.panels.length - 1;

  const completionTitle = useMemo(() => 'You completed a beautiful story.', []);

  return (
    <SafeAreaView style={visualStyles.softScreen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={[styles.headerCard, visualStyles.roundedCard, visualStyles.warmCard]}>
          <Text style={styles.eyebrow}>Story World</Text>
          <Text style={styles.title}>{story.title}</Text>
          <Text style={styles.subtitle}>{summary}</Text>
          <View style={styles.heroMetaRow}>
            <Text style={styles.metaBadge}>{worldLabel || story.world}</Text>
            <Text style={styles.metaBadge}>Value: {primaryValue}</Text>
            <Text style={styles.metaBadge}>{durationMinutes} min</Text>
          </View>
        </View>

        {stage === 'detail' && (
          <View style={[styles.card, visualStyles.roundedCard]}>
            <Text style={styles.sectionTitle}>Before you begin</Text>
            <Text style={styles.body}>Find a cozy spot, soften your breath, and read one page at a time together.</Text>

            <View style={styles.metaCard}>
              <Text style={styles.metaLabel}>Story details</Text>
              <Text style={styles.meta}>Age band: {ageBand}</Text>
              <Text style={styles.meta}>Reading time: about {durationMinutes} minutes</Text>
              <Text style={styles.meta}>Primary value: {primaryValue}</Text>
              <Text style={styles.meta}>Story category: {worldLabel || story.world}</Text>
            </View>

            <View style={styles.luvluCard}>
              <Text style={styles.luvluTitle}>Luvlu gentle helper</Text>
              <Text style={styles.body}>Welcome. Read slowly and let each moment feel calm and kind.</Text>
            </View>

            <View style={styles.parentCard}>
              <Text style={styles.parentTitle}>Parent note</Text>
              <Text style={styles.body}>Sacred themes are presented with gentle language designed for child understanding and trust.</Text>
            </View>

            <Pressable style={styles.button} onPress={() => setStage('reader')}>
              <Text style={styles.buttonText}>Begin Story</Text>
            </Pressable>
            <Pressable style={styles.secondaryButton} disabled accessibilityState={{ disabled: true }}>
              <Text style={styles.secondaryButtonText}>Listen with Luvlu — Coming soon</Text>
            </Pressable>
          </View>
        )}

        {stage === 'reader' && (
          <View style={[styles.card, visualStyles.roundedCard]}>
            <Text style={styles.sectionTitle}>Reader</Text>
            <Text style={styles.meta}>Section {panelIndex + 1} of {story.panels.length}</Text>
            <View style={styles.readerCard}>
              <Text style={styles.readerTitle}>{section.title}</Text>
              <Text style={styles.readerText}>{section.text}</Text>
            </View>
            <Text style={styles.helperLine}>Luvlu (quiet helper): Take one soft breath and continue.</Text>
            <Text style={styles.helperLine}>Optional: Read with a grown-up.</Text>

            <View style={styles.controls}>
              <Pressable
                style={[styles.button, panelIndex === 0 && styles.disabledButton]}
                onPress={() => setPanelIndex((prev) => Math.max(0, prev - 1))}
                disabled={panelIndex === 0}
              >
                <Text style={styles.buttonText}>Back</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => {
                  if (isLastSection) {
                    setStage('complete');
                    return;
                  }
                  setPanelIndex((prev) => Math.min(story.panels.length - 1, prev + 1));
                }}
              >
                <Text style={styles.buttonText}>{isLastSection ? 'Complete Story' : 'Next'}</Text>
              </Pressable>
            </View>
          </View>
        )}

        {stage === 'complete' && (
          <View style={[styles.card, visualStyles.roundedCard]}>
            <Text style={styles.sectionTitle}>{completionTitle}</Text>
            <Text style={styles.body}>🌸 A gentle blessing for your heart. 🪔</Text>
            <Text style={styles.body}>You practiced {primaryValue.toLowerCase()} through this story.</Text>
            <View style={styles.luvluCard}>
              <Text style={styles.luvluTitle}>Luvlu blessing support</Text>
              <Text style={styles.body}>Beautiful reading. Keep this blessing with kindness and calm.</Text>
            </View>
            <View style={styles.parentCard}>
              <Text style={styles.parentTitle}>Optional reflection with grown-up</Text>
              <Text style={styles.body}>Ask your grown-up: What did this story teach us?</Text>
            </View>
            <Link href='/(child)/worlds' style={styles.link}>Back to Story World</Link>
            <Link href='/(child)/today' style={styles.linkSecondary}>Back to Child Home</Link>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default function StoryScreen() {
  return (
    <RouteErrorBoundary surfaceName='story' audience='child'>
      <StoryScreenContent />
    </RouteErrorBoundary>
  );
}

const styles = StyleSheet.create({
  scrollContent: { padding: tokens.spacing.lg, gap: tokens.spacing.lg },
  headerCard: { padding: tokens.spacing.lg, gap: tokens.spacing.sm },
  card: {
    backgroundColor: tokens.colors.cloud,
    borderRadius: tokens.radius.card,
    padding: tokens.spacing.lg,
    gap: tokens.spacing.md,
    shadowColor: '#00000020',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  eyebrow: { fontSize: 14, color: tokens.colors.midnight, fontWeight: '700' },
  title: { fontSize: 30, fontWeight: '900', color: tokens.colors.textPrimary },
  subtitle: { fontSize: 17, lineHeight: 25, color: tokens.colors.textPrimary },
  sectionTitle: { fontSize: 24, fontWeight: '800', color: tokens.colors.textPrimary },
  body: { fontSize: 17, lineHeight: 24, color: tokens.colors.textPrimary },
  meta: { fontSize: 14, color: tokens.colors.midnight },
  metaLabel: { fontSize: 13, fontWeight: '700', color: '#6a5b45' },
  heroMetaRow: { flexDirection: 'row', flexWrap: 'wrap', gap: tokens.spacing.xs },
  metaBadge: {
    fontSize: 13,
    color: '#6a5b45',
    backgroundColor: '#fff3da',
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#f0d9ad',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  metaCard: { backgroundColor: '#fff6de', borderRadius: tokens.radius.card, padding: tokens.spacing.md, gap: 6 },
  luvluCard: {
    backgroundColor: '#eef6ff',
    borderRadius: tokens.radius.card,
    padding: tokens.spacing.md,
    gap: 6,
    borderWidth: 1,
    borderColor: '#d8e8fa',
  },
  luvluTitle: { fontWeight: '800', color: tokens.colors.textPrimary },
  parentCard: {
    backgroundColor: '#f6efe4',
    borderRadius: tokens.radius.card,
    padding: tokens.spacing.md,
    gap: 6,
    borderWidth: 1,
    borderColor: '#e7dbc7',
  },
  parentTitle: { fontWeight: '800', color: tokens.colors.textPrimary },
  button: { backgroundColor: tokens.colors.saffron, borderRadius: 999, paddingVertical: 12, paddingHorizontal: 18, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '800' },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#c9b898',
    borderRadius: 999,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignItems: 'center',
    opacity: 0.6,
    backgroundColor: '#f8f2e8',
  },
  secondaryButtonText: { color: '#6a5b45', fontWeight: '700' },
  readerCard: { backgroundColor: '#fffaf1', borderRadius: tokens.radius.card, padding: tokens.spacing.lg, gap: tokens.spacing.md },
  readerTitle: { fontSize: 20, fontWeight: '800', color: tokens.colors.textPrimary },
  readerText: { fontSize: 20, lineHeight: 30, color: tokens.colors.textPrimary },
  helperLine: { fontSize: 14, color: tokens.colors.midnight },
  controls: { flexDirection: 'row', gap: tokens.spacing.sm },
  disabledButton: { opacity: 0.5 },
  link: { fontSize: 16, fontWeight: '700', color: tokens.colors.saffron },
  linkSecondary: { fontSize: 15, color: tokens.colors.midnight },
});
