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

  const completionTitle = useMemo(() => 'Story blessing', []);

  return (
    <SafeAreaView style={visualStyles.softScreen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.topbar}>
          <Link href='/(child)/worlds' style={styles.topbarBack}>← Back to Story World</Link>
        </View>

        {stage === 'detail' && (
          <>
            <View style={[styles.heroCard, visualStyles.roundedCard, visualStyles.warmCard]}>
              <Text style={styles.storyCategoryLabel}>{worldLabel || story.world}</Text>
              <View style={styles.iconRow}>
                <View style={styles.storyIconBadge}>
                  <Text style={styles.storyIconText}>{storyIcon}</Text>
                </View>
                <Text style={styles.eyebrow}>Story doorway</Text>
              </View>
              <Text style={styles.title}>{story.title}</Text>
              <Text style={styles.subtitle}>{summary}</Text>
              <View style={styles.chipRow}>
                <Text style={styles.metaChip}>Age {ageBand}</Text>
                <Text style={styles.metaChip}>{durationMinutes} min</Text>
                <Text style={styles.metaChip}>Value: {primaryValue}</Text>
              </View>
            </View>

            <View style={[styles.supportCard, visualStyles.roundedCard]}>
              <Text style={styles.valueLine}>Today’s value: <Text style={styles.valueLineStrong}>{primaryValue}</Text></Text>
              <Text style={styles.parentLine}>Parent note: Gentle, age-appropriate sacred storytelling for shared reading.</Text>
              <Text style={styles.luvluLine}>Luvlu says: Take one soft breath before you begin.</Text>
            </View>

            <Pressable style={styles.button} onPress={() => setStage('reader')}>
              <Text style={styles.buttonText}>Begin Story</Text>
            </Pressable>
            <Pressable style={styles.secondaryButton} disabled accessibilityState={{ disabled: true }}>
              <Text style={styles.secondaryButtonText}>Listen with Luvlu — Coming soon</Text>
            </Pressable>
          </>
        )}

        {stage === 'reader' && (
          <View style={[styles.readerShell, visualStyles.roundedCard]}>
            <Text style={styles.readingLabel}>Reading together</Text>
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
                <Text style={styles.overlayPromptText}>Story moment: Pause, picture this scene, then continue.</Text>
              </View>
            )}

            <View style={styles.readerCard}>
              <Text style={styles.readerTitle}>{section.title}</Text>
              <Text style={styles.readerText}>{section.text}</Text>
            </View>

            <Text style={styles.reflectLine}>Luvlu reflection: Which part of this page felt most kind?</Text>

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
            <Text style={styles.eyebrow}>Story blessing</Text>
            <Text style={styles.sectionTitle}>{completionTitle}</Text>
            <Text style={styles.body}>You carried this story with care. May its blessing stay warm in your heart.</Text>
            <Text style={styles.valueLine}>Value reflection: Where can you practice <Text style={styles.valueLineStrong}>{primaryValue.toLowerCase()}</Text> today?</Text>
            <Text style={styles.reflectLine}>Luvlu says: Close with one peaceful breath and one kind word.</Text>
            <Text style={styles.parentLine}>Optional grown-up reflection: Which choice in this story felt kindest, and why?</Text>
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
  scrollContent: { padding: tokens.spacing.lg, gap: tokens.spacing.md },
  topbar: { paddingBottom: tokens.spacing.xs },
  topbarBack: { fontSize: 14, fontWeight: '700', color: tokens.colors.midnight },
  storyCategoryLabel: { fontSize: 12, textTransform: 'uppercase', color: '#7a6444', fontWeight: '800' },
  iconRow: { flexDirection: 'row', alignItems: 'center', gap: tokens.spacing.sm },
  heroCard: { padding: tokens.spacing.lg, gap: tokens.spacing.sm },
  storyIconBadge: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#ffe9bf', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#e8cca0' },
  storyIconText: { fontSize: 18, fontWeight: '900', color: '#6e4f2d' },
  eyebrow: { fontSize: 13, color: tokens.colors.midnight, fontWeight: '700' },
  title: { fontSize: 30, fontWeight: '900', color: tokens.colors.textPrimary },
  subtitle: { fontSize: 17, lineHeight: 25, color: tokens.colors.textPrimary },
  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: tokens.spacing.xs },
  metaChip: { fontSize: 13, color: '#6a5b45', backgroundColor: '#fff3da', borderRadius: 999, borderWidth: 1, borderColor: '#f0d9ad', paddingVertical: 5, paddingHorizontal: 10 },
  supportCard: { backgroundColor: '#fffdf8', borderWidth: 1, borderColor: '#ebdec7', padding: tokens.spacing.md, gap: tokens.spacing.xs },
  valueLine: { fontSize: 16, lineHeight: 24, color: tokens.colors.textPrimary },
  valueLineStrong: { fontWeight: '900', color: '#6b4b23' },
  parentLine: { fontSize: 14, lineHeight: 21, color: '#6b5f4d' },
  luvluLine: { fontSize: 14, lineHeight: 21, color: '#4d5f78' },
  button: { backgroundColor: tokens.colors.saffron, borderRadius: 999, paddingVertical: 13, paddingHorizontal: 18, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '800' },
  secondaryButton: { borderWidth: 1, borderColor: '#c9b898', borderRadius: 999, paddingVertical: 13, paddingHorizontal: 18, alignItems: 'center', opacity: 0.55, backgroundColor: '#f8f2e8' },
  secondaryButtonText: { color: '#6a5b45', fontWeight: '700' },
  readerShell: { backgroundColor: '#fffdf8', padding: tokens.spacing.lg, gap: tokens.spacing.md, borderWidth: 1, borderColor: '#ebdec7' },
  readingLabel: { fontSize: 13, fontWeight: '700', color: '#6a5b45' },
  sectionTitle: { fontSize: 23, fontWeight: '800', color: tokens.colors.textPrimary },
  progressTrack: { width: '100%', height: 7, borderRadius: 999, backgroundColor: '#f0e2c8', overflow: 'hidden' },
  progressFill: { height: 7, borderRadius: 999, backgroundColor: tokens.colors.saffron },
  scenicCard: { backgroundColor: '#eaf5ff', borderRadius: tokens.radius.card, padding: tokens.spacing.md, minHeight: 108, justifyContent: 'flex-end', overflow: 'hidden' },
  cloudRow: { position: 'absolute', top: 14, left: 14, flexDirection: 'row', gap: 8 },
  cloudPuff: { width: 40, height: 20, borderRadius: 20, backgroundColor: '#ffffffcc' },
  cloudPuffSmall: { width: 26, height: 14, marginTop: 6 },
  hillBase: { width: '150%', height: 72, borderTopLeftRadius: 90, borderTopRightRadius: 90, backgroundColor: '#b9ddaa', alignSelf: 'center', marginBottom: -22 },
  overlayPromptText: { fontSize: 13, lineHeight: 18, color: '#6d5839', fontWeight: '700' },
  readerCard: { backgroundColor: '#fffaf1', borderRadius: tokens.radius.card, padding: tokens.spacing.lg, gap: tokens.spacing.sm, borderWidth: 1, borderColor: '#f2e2c5' },
  readerTitle: { fontSize: 22, fontWeight: '800', color: tokens.colors.textPrimary },
  readerText: { fontSize: 21, lineHeight: 34, color: tokens.colors.textPrimary },
  reflectLine: { fontSize: 14, lineHeight: 21, color: '#55406f', fontStyle: 'italic' },
  controls: { flexDirection: 'row', gap: tokens.spacing.sm },
  disabledButton: { opacity: 0.5 },
  ceremonyCard: { backgroundColor: '#fff5e8', borderRadius: tokens.radius.card, padding: tokens.spacing.lg, gap: tokens.spacing.md, borderWidth: 1, borderColor: '#efd6ae' },
  card: { backgroundColor: tokens.colors.cloud, borderRadius: tokens.radius.card, padding: tokens.spacing.lg, gap: tokens.spacing.md },
  body: { fontSize: 17, lineHeight: 25, color: tokens.colors.textPrimary },
  link: { fontSize: 16, fontWeight: '700', color: tokens.colors.saffron },
  linkSecondary: { fontSize: 15, color: tokens.colors.midnight },
});
