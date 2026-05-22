import { useState } from 'react';
import { Link, useLocalSearchParams } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import RouteErrorBoundary from '@/components/RouteErrorBoundary';
import { storyWorldItems, storyWorldSections } from '@/data/storyWorld';
import { markJourneyStoryCompleted } from '@/lib/journeyProgress';
import { markStoryComplete } from '@/lib/storyProgress';
import { getRuntimeStoryBySlug } from '@/services/journeys';
import { visualStyles } from '@/design/visualSystem';
import { tokens } from '@/design/tokens';
import { buildStoryCompletionMoment } from '@/services/storyCompletionMomentService';

type Stage = 'detail' | 'reader' | 'complete';

function StoryScreenContent() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const resolved = slug ? getRuntimeStoryBySlug(slug) : null;
  const [stage, setStage] = useState<Stage>('detail');
  const [panelIndex, setPanelIndex] = useState(0);
  const [completionWarning, setCompletionWarning] = useState<string | null>(null);

  if (!resolved) {
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

  const { story } = resolved;
  const safePanels = Array.isArray(story.panels) ? story.panels.filter((panel) => Boolean(panel?.title && panel?.text)) : [];

  if (safePanels.length === 0) {
    return (
      <SafeAreaView style={visualStyles.softScreen}>
        <View style={styles.card}>
          <Text style={styles.title}>This story is resting for now.</Text>
          <Text style={styles.body}>This story page is being prepared. You can return safely anytime.</Text>
          <Link href='/(child)/worlds' style={styles.link}>Return to Story World</Link>
          <Link href='/(child)/today' style={styles.linkSecondary}>Go back to Child Home</Link>
        </View>
      </SafeAreaView>
    );
  }

  const clampedPanelIndex = Math.min(Math.max(panelIndex, 0), safePanels.length - 1);
  const storyMeta = storyWorldItems.find((item) => item.slug === story.slug);
  const worldLabel = storyMeta
    ? storyWorldSections.find((section) => section.id === storyMeta.sectionId)?.title
    : undefined;

  const summary = storyMeta?.summary || 'A warm Little Dharma story with a calm blessing at the end.';
  const durationMinutes = storyMeta?.durationMinutes ?? 10;
  const primaryValue = storyMeta?.primaryValue || story.value;
  const ageBand = storyMeta?.ageBands?.join(', ') || story.ageBand;
  const section = safePanels[clampedPanelIndex];
  const isLastSection = clampedPanelIndex >= safePanels.length - 1;
  const progress = ((clampedPanelIndex + 1) / safePanels.length) * 100;
  const storyIcon = worldLabel?.charAt(0) || story.world.charAt(0) || 'S';

  const completionMoment = buildStoryCompletionMoment(story);

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
          </>
        )}

        {stage === 'reader' && (
          <View style={[styles.readerShell, visualStyles.roundedCard]}>
            <Text style={styles.readingLabel}>Reading together</Text>
            <Text style={styles.sectionTitle}>Section {clampedPanelIndex + 1} of {safePanels.length}</Text>
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: `${progress}%` }]} />
            </View>

            <View style={styles.readerCard}>
              <Text style={styles.readerTitle}>{section.title}</Text>
              <Text style={styles.readerText}>{section.text}</Text>
            </View>

            <Text style={styles.reflectLine}>Luvlu reflection: Which part of this page felt most kind?</Text>

            <View style={styles.controls}>
              <Pressable
                style={[styles.button, clampedPanelIndex === 0 && styles.disabledButton]}
                onPress={() => setPanelIndex((prev) => Math.max(0, prev - 1))}
                disabled={clampedPanelIndex === 0}
              >
                <Text style={styles.buttonText}>Back</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={async () => {
                  if (isLastSection) {
                    try {
                      await markStoryComplete(story.slug, story.badgeName, story.value);
                      if (resolved.storyMeta?.journeyId) {
                        await markJourneyStoryCompleted(resolved.storyMeta.journeyId, story.slug);
                      }
                    } catch {
                      setCompletionWarning('Your story blessing is safe to continue. Progress could not be saved just now.');
                    }
                    setStage('complete');
                    return;
                  }
                  setPanelIndex((prev) => Math.min(safePanels.length - 1, prev + 1));
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
            <Text style={styles.sectionTitle}>{completionMoment.completionTitle}</Text>
            <Text style={styles.body}>{completionMoment.blessingText}</Text>
            {completionWarning ? <Text style={styles.parentLine}>{completionWarning}</Text> : null}
            <Text style={styles.valueLine}>Value reflection: <Text style={styles.valueLineStrong}>{completionMoment.valueLabel}</Text></Text>
            <Text style={styles.parentLine}>{completionMoment.reflectionPrompt}</Text>
            {completionMoment.parentPrompt ? <Text style={styles.parentLine}>Parent-child prompt: {completionMoment.parentPrompt}</Text> : null}
            <Text style={styles.parentLine}>Gentle motif: {completionMoment.treasureMotif}</Text>
            <Text style={styles.parentLine}>{completionMoment.sacredRespectNote}</Text>
            {completionMoment.luvluAllowed ? <Text style={styles.luvluLine}>Luvlu says: Carry this blessing gently into your day.</Text> : null}
            <Text style={styles.parentLine}>Next gentle action: {completionMoment.nextActions[0]}</Text>
            <Text style={styles.parentLine}>{completionMoment.nextActions[1]}</Text>
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
  readerShell: { backgroundColor: '#fffdf8', padding: tokens.spacing.lg, gap: tokens.spacing.md, borderWidth: 1, borderColor: '#ebdec7' },
  readingLabel: { fontSize: 13, fontWeight: '700', color: '#6a5b45' },
  sectionTitle: { fontSize: 23, fontWeight: '800', color: tokens.colors.textPrimary },
  progressTrack: { width: '100%', height: 7, borderRadius: 999, backgroundColor: '#f0e2c8', overflow: 'hidden' },
  progressFill: { height: 7, borderRadius: 999, backgroundColor: tokens.colors.saffron },
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
