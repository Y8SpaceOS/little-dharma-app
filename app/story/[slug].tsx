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
  const progress = ((panelIndex + 1) / story.panels.length) * 100;
  const storyIcon = worldLabel?.charAt(0) || story.world.charAt(0) || 'S';

  const completionTitle = useMemo(() => 'Story blessing complete', []);

  return (
    <SafeAreaView style={visualStyles.softScreen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.topbar}>
          <Link href='/(child)/worlds' style={styles.topbarBack}>← Story World</Link>
          <Text style={styles.topbarLabel}>Screen 22 · Story Detail</Text>
        </View>

        {stage === 'detail' && (
          <>
            <Text style={styles.storyCategoryLabel}>{worldLabel || story.world}</Text>
            <View style={[styles.heroCard, visualStyles.roundedCard, visualStyles.warmCard]}>
              <View style={styles.iconRow}>
                <View style={styles.storyIconBadge}>
                  <Text style={styles.storyIconText}>{storyIcon}</Text>
                </View>
                <Text style={styles.eyebrow}>Sacred Story Journey</Text>
              </View>
              <Text style={styles.title}>{story.title}</Text>
              <Text style={styles.subtitle}>{summary}</Text>
              <View style={styles.chipRow}>
                <Text style={styles.metaChip}>Age {ageBand}</Text>
                <Text style={styles.metaChip}>{durationMinutes} min read</Text>
                <Text style={styles.metaChip}>Calm pace</Text>
              </View>
            </View>

            <View style={[styles.card, visualStyles.roundedCard]}>
              <View style={styles.valueSection}>
                <Text style={styles.metaLabel}>Today’s value</Text>
                <Text style={styles.valueTitle}>{primaryValue}</Text>
                <Text style={styles.body}>As you read, notice how this value appears in choices, feelings, and kind actions.</Text>
              </View>

              <View style={styles.parentCard}>
                <Text style={styles.parentTitle}>Parent note</Text>
                <Text style={styles.body}>This story keeps sacred meaning gentle, age-appropriate, and emotionally safe for shared reading.</Text>
              </View>

              <View style={styles.luvluCard}>
                <Text style={styles.luvluTitle}>Luvlu gentle prompt</Text>
                <Text style={styles.body}>Begin with one soft breath, then read slowly so your child can savor each scene.</Text>
              </View>

              <Pressable style={styles.button} onPress={() => setStage('reader')}>
                <Text style={styles.buttonText}>Begin Story</Text>
              </Pressable>
              <Pressable style={styles.secondaryButton} disabled accessibilityState={{ disabled: true }}>
                <Text style={styles.secondaryButtonText}>Listen with Luvlu — Coming soon</Text>
              </Pressable>
            </View>
          </>
        )}

        {stage === 'reader' && (
          <View style={[styles.card, visualStyles.roundedCard]}>
            <Text style={styles.topbarLabel}>Screen 23 · Story Reader</Text>
            <Text style={styles.sectionTitle}>Section {panelIndex + 1} of {story.panels.length}</Text>
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: `${progress}%` }]} />
            </View>

            {panelIndex === 0 && (
              <View style={styles.scenicCard}>
                <View style={styles.cloudRow}>
                  <View style={styles.cloudPuff} />
                  <View style={[styles.cloudPuff, styles.cloudPuffSmall]} />
                </View>
                <View style={styles.hillBase} />
                <View style={styles.overlayPrompt}>
                  <Text style={styles.overlayPromptText}>Screen 24-inspired story moment: Pause, imagine this scene, then continue reading.</Text>
                </View>
              </View>
            )}

            <View style={styles.readerCard}>
              <Text style={styles.readerTitle}>{section.title}</Text>
              <Text style={styles.readerText}>{section.text}</Text>
            </View>

            <View style={styles.reflectCard}>
              <Text style={styles.reflectQuote}>“Luvlu reflection: Which part of this page felt most kind and true?”</Text>
            </View>

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
          <View style={[styles.ceremonyCard, visualStyles.roundedCard]}>
            <Text style={styles.topbarLabel}>Completion Blessing</Text>
            <Text style={styles.sectionTitle}>{completionTitle}</Text>
            <Text style={styles.body}>You carried this story with care. May its blessing stay warm in your heart tonight.</Text>
            <View style={styles.valueSection}>
              <Text style={styles.metaLabel}>Value reflection</Text>
              <Text style={styles.valueTitle}>{primaryValue}</Text>
              <Text style={styles.body}>Where did you notice {primaryValue.toLowerCase()} in the story, and where can you practice it today?</Text>
            </View>
            <View style={styles.luvluCard}>
              <Text style={styles.luvluTitle}>Luvlu calm support</Text>
              <Text style={styles.body}>Close with one peaceful breath and one kind word for someone you love.</Text>
            </View>
            <View style={styles.parentCard}>
              <Text style={styles.parentTitle}>Optional grown-up reflection</Text>
              <Text style={styles.body}>Ask: Which choice in this story felt the bravest or kindest, and why?</Text>
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
  topbar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  topbarBack: { fontSize: 14, fontWeight: '700', color: tokens.colors.midnight },
  topbarLabel: { fontSize: 12, color: '#6a5b45', fontWeight: '700' },
  storyCategoryLabel: { fontSize: 12, letterSpacing: 1, textTransform: 'uppercase', color: '#7a6444', fontWeight: '800' },
  heroCard: { padding: tokens.spacing.lg, gap: tokens.spacing.sm },
  iconRow: { flexDirection: 'row', alignItems: 'center', gap: tokens.spacing.sm },
  storyIconBadge: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#ffe9bf', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#e8cca0' },
  storyIconText: { fontSize: 18, fontWeight: '900', color: '#6e4f2d' },
  card: { backgroundColor: tokens.colors.cloud, borderRadius: tokens.radius.card, padding: tokens.spacing.lg, gap: tokens.spacing.md },
  ceremonyCard: { backgroundColor: '#fff5e8', borderRadius: tokens.radius.card, padding: tokens.spacing.lg, gap: tokens.spacing.md, borderWidth: 1, borderColor: '#efd6ae' },
  eyebrow: { fontSize: 13, color: tokens.colors.midnight, fontWeight: '700' },
  title: { fontSize: 30, fontWeight: '900', color: tokens.colors.textPrimary },
  subtitle: { fontSize: 17, lineHeight: 25, color: tokens.colors.textPrimary },
  sectionTitle: { fontSize: 24, fontWeight: '800', color: tokens.colors.textPrimary },
  body: { fontSize: 17, lineHeight: 24, color: tokens.colors.textPrimary },
  metaLabel: { fontSize: 13, fontWeight: '700', color: '#6a5b45' },
  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: tokens.spacing.xs },
  metaChip: { fontSize: 13, color: '#6a5b45', backgroundColor: '#fff3da', borderRadius: 999, borderWidth: 1, borderColor: '#f0d9ad', paddingVertical: 5, paddingHorizontal: 10 },
  valueSection: { backgroundColor: '#fff7e7', borderRadius: tokens.radius.card, padding: tokens.spacing.md, gap: 6, borderWidth: 1, borderColor: '#eed7ad' },
  valueTitle: { fontSize: 22, fontWeight: '900', color: '#6b4b23' },
  luvluCard: { backgroundColor: '#eef6ff', borderRadius: tokens.radius.card, padding: tokens.spacing.md, gap: 6, borderWidth: 1, borderColor: '#d8e8fa' },
  luvluTitle: { fontWeight: '800', color: tokens.colors.textPrimary },
  parentCard: { backgroundColor: '#f6efe4', borderRadius: tokens.radius.card, padding: tokens.spacing.md, gap: 6, borderWidth: 1, borderColor: '#e7dbc7' },
  parentTitle: { fontWeight: '800', color: tokens.colors.textPrimary },
  button: { backgroundColor: tokens.colors.saffron, borderRadius: 999, paddingVertical: 12, paddingHorizontal: 18, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '800' },
  secondaryButton: { borderWidth: 1, borderColor: '#c9b898', borderRadius: 999, paddingVertical: 12, paddingHorizontal: 18, alignItems: 'center', opacity: 0.6, backgroundColor: '#f8f2e8' },
  secondaryButtonText: { color: '#6a5b45', fontWeight: '700' },
  progressTrack: { width: '100%', height: 8, borderRadius: 999, backgroundColor: '#f0e2c8', overflow: 'hidden' },
  progressFill: { height: 8, borderRadius: 999, backgroundColor: tokens.colors.saffron },
  scenicCard: { backgroundColor: '#eaf5ff', borderRadius: tokens.radius.card, padding: tokens.spacing.md, minHeight: 120, justifyContent: 'flex-end', overflow: 'hidden' },
  cloudRow: { position: 'absolute', top: 16, left: 16, flexDirection: 'row', gap: 8 },
  cloudPuff: { width: 44, height: 22, borderRadius: 22, backgroundColor: '#ffffffcc' },
  cloudPuffSmall: { width: 28, height: 16, marginTop: 6 },
  hillBase: { width: '150%', height: 80, borderTopLeftRadius: 90, borderTopRightRadius: 90, backgroundColor: '#b9ddaa', alignSelf: 'center', marginBottom: -25 },
  overlayPrompt: { backgroundColor: '#fff9efdd', borderRadius: 12, borderWidth: 1, borderColor: '#eedec2', padding: 10 },
  overlayPromptText: { fontSize: 13, lineHeight: 18, color: '#6d5839', fontWeight: '700' },
  readerCard: { backgroundColor: '#fffaf1', borderRadius: tokens.radius.card, padding: tokens.spacing.lg, gap: tokens.spacing.md, borderWidth: 1, borderColor: '#f2e2c5' },
  readerTitle: { fontSize: 22, fontWeight: '800', color: tokens.colors.textPrimary },
  readerText: { fontSize: 21, lineHeight: 33, color: tokens.colors.textPrimary },
  reflectCard: { backgroundColor: '#f6f0ff', borderRadius: tokens.radius.card, padding: tokens.spacing.md, borderLeftWidth: 4, borderLeftColor: '#bea6eb' },
  reflectQuote: { fontSize: 15, lineHeight: 22, color: '#55406f', fontStyle: 'italic' },
  controls: { flexDirection: 'row', gap: tokens.spacing.sm },
  disabledButton: { opacity: 0.5 },
  link: { fontSize: 16, fontWeight: '700', color: tokens.colors.saffron },
  linkSecondary: { fontSize: 15, color: tokens.colors.midnight },
});
