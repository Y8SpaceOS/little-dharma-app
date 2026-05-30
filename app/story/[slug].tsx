import { useState } from 'react';
import { Link, useLocalSearchParams } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import RouteErrorBoundary from '@/components/RouteErrorBoundary';
import { Card, Chip, EmptyState, GradientScreen, HeroCard, PrimaryButton } from '@/components/dharmaKit';
import { storyWorldItems, storyWorldSections } from '@/data/storyWorld';
import { markJourneyStoryCompleted } from '@/lib/journeyProgress';
import { markStoryComplete } from '@/lib/storyProgress';
import { getRuntimeStoryBySlug } from '@/services/journeys';
import { visualStyles, palette } from '@/design/visualSystem';
import { tokens } from '@/design/tokens';
import { buildStoryCompletionMoment } from '@/services/storyCompletionMomentService';
import { buildStoryAudioPlayerState, shouldShowAudioEntryPoint } from '@/services/storyAudioFoundationService';
import { buildStoryDetailTrustMicrocopy } from '@/services/storyDetailTrustMicrocopyService';
import { buildCompletionTrustMicrocopy } from '@/services/completionTrustMicrocopyService';
import { buildAudioEntryTrustMicrocopy } from '@/services/audioEntryTrustMicrocopyService';
import { buildParentReflectionPromptCopy } from '@/services/parentReflectionPromptCopyService';
import { buildStoryReaderGentlePaceCopy } from '@/services/storyReaderGentlePaceCopyService';

type Stage = 'detail' | 'reader' | 'complete';

function StoryScreenContent() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const resolved = slug ? getRuntimeStoryBySlug(slug) : null;
  const storyWorldPreview = slug
    ? storyWorldItems.find((item) => item.slug === slug || item.id === slug)
    : undefined;
  const previewWorldLabel = storyWorldPreview
    ? storyWorldSections.find((section) => section.id === storyWorldPreview.sectionId)?.title
    : undefined;
  const [stage, setStage] = useState<Stage>('detail');
  const [panelIndex, setPanelIndex] = useState(0);
  const [completionWarning, setCompletionWarning] = useState<string | null>(null);

  if (!resolved) {
    return (
      <GradientScreen gradient='body'><SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.topbar}>
            <Link href='/(child)/worlds' style={styles.topbarBack}>← Back to Story World</Link>
          </View>
          <HeroCard gradient='warm' style={styles.previewHero}>
            <Text style={styles.storyCategoryLabel}>{previewWorldLabel || 'Story World'}</Text>
            <Text style={styles.eyebrow}>Being prepared with care</Text>
            <Text style={styles.title}>{storyWorldPreview?.title || 'This story is resting for now.'}</Text>
            <Text style={styles.subtitle}>
              {storyWorldPreview?.summary || 'This story preview is being prepared before it opens for family reading.'}
            </Text>
            {storyWorldPreview ? (
              <View style={styles.chipRow}>
                <Chip label={`Age ${storyWorldPreview.ageBands.join(', ')}`} />
                <Chip label={`${storyWorldPreview.durationMinutes} min`} />
                <Chip label={`Value: ${storyWorldPreview.primaryValue}`} />
              </View>
            ) : null}
          </HeroCard>

          <Card style={styles.supportCard}>
            <Text style={styles.valueLineStrong}>Not ready to read yet</Text>
            <Text style={styles.parentLine}>We only open the reader when the story is ready and safe to read.</Text>
            <Text style={styles.parentLine}>Local-first, family-safe, and reviewed with care before reading.</Text>
            <Link href='/(child)/worlds' style={styles.link}>Return to Story World</Link>
            <Link href='/(child)/today' style={styles.linkSecondary}>Go back to Child Home</Link>
          </Card>
        </ScrollView>
      </SafeAreaView></GradientScreen>
    );
  }

  const { story } = resolved;
  const safePanels = Array.isArray(story.panels) ? story.panels.filter((panel) => Boolean(panel?.title && panel?.text)) : [];

  if (safePanels.length === 0) {
    return (
      <GradientScreen gradient='body'><SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <EmptyState
            title='Being prepared with care'
            message={`${story.title} is not ready for reading yet, so the reader will stay closed for now.`}
            trustNote='Local-first, family-safe, and never opened until the story can read safely.'
          />
          <Card style={styles.supportCard}>
            <Text style={styles.parentLine}>Return to Story World and choose another gentle story.</Text>
            <Link href='/(child)/worlds' style={styles.link}>Return to Story World</Link>
            <Link href='/(child)/today' style={styles.linkSecondary}>Go back to Child Home</Link>
          </Card>
        </ScrollView>
      </SafeAreaView></GradientScreen>
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
  const journeyTag = storyMeta?.journeyOrder
    ? `${worldLabel || story.world} · Step ${storyMeta.journeyOrder}`
    : worldLabel || story.world;
  const parentNote = story.ritual?.parentMeaning || 'Gentle, age-appropriate sacred storytelling for shared family reading.';

  const completionMoment = buildStoryCompletionMoment(story);
  const audioState = buildStoryAudioPlayerState(story);
  const showAudioPanel = shouldShowAudioEntryPoint(story) || audioState.availability === 'unavailable';
  const audioStatusCopy = audioState.canPlayNow
    ? 'Audio: parent-approved listening is available.'
    : 'Audio: reading only for now.';
  const trustMicrocopy = buildStoryDetailTrustMicrocopy();
  const completionTrustMicrocopy = buildCompletionTrustMicrocopy();
  const audioTrustMicrocopy = buildAudioEntryTrustMicrocopy();
  const parentReflectionPromptCopy = buildParentReflectionPromptCopy();
  const gentlePaceCopy = buildStoryReaderGentlePaceCopy();

  return (
    <GradientScreen gradient='body'><SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.topbar}>
          <Link href='/(child)/worlds' style={styles.topbarBack}>← Back to Story World</Link>
        </View>

        {stage === 'detail' && (
          <>
            <HeroCard gradient='warm' style={styles.previewHero}>
              <Text style={styles.storyCategoryLabel}>{journeyTag}</Text>
              <View style={styles.iconRow}>
                <View style={styles.storyIconBadge}>
                  <Text style={styles.storyIconText}>{storyIcon}</Text>
                </View>
                <Text style={styles.eyebrow}>Story preview</Text>
              </View>
              <Text style={styles.title}>{story.title}</Text>
              <Text style={styles.subtitle}>{summary}</Text>
              <View style={styles.chipRow}>
                <Chip label={`Age ${ageBand}`} />
                <Chip label={`${durationMinutes} min`} />
                <Chip label={`Value: ${primaryValue}`} />
                {journeyTag ? <Chip label={journeyTag} /> : null}
              </View>
            </HeroCard>

            <Card style={styles.parentPreviewCard}>
              <Text style={styles.valueLine}>What families can expect</Text>
              <Text style={styles.parentLine}>Parent note: {parentNote}</Text>
              <Text style={styles.parentLine}>Trust note: local-first and family-safe, with a calm reader and no pressure to finish.</Text>
              <Text style={styles.parentLine}>Sacred stories are handled with care, simple language, and respectful pacing.</Text>
            </Card>

            <Card style={styles.supportCard} accessibilityLabel={trustMicrocopy.accessibilityLabel} accessibilityHint={trustMicrocopy.accessibilityHint}>
              <Text style={styles.valueLineStrong}>{trustMicrocopy.startReadinessCopy}</Text>
              <Text style={styles.parentLine}>{trustMicrocopy.noRaceCopy}</Text>
              <Text style={styles.parentLine}>{trustMicrocopy.slowReadingCopy}</Text>
              <Text style={styles.parentLine}>{trustMicrocopy.familyReadingCopy}</Text>
              <Text style={styles.parentLine}>{trustMicrocopy.sacredCareCopy}</Text>
            </Card>

            {showAudioPanel ? (
              <Card
                style={styles.audioStatusCard}
                accessibilityLabel={audioTrustMicrocopy.accessibilityLabel || audioState.accessibilityLabel}
                accessibilityHint={audioTrustMicrocopy.accessibilityHint}
              >
                <Text style={styles.parentLine}>{audioStatusCopy}</Text>
              </Card>
            ) : null}

            <PrimaryButton label='Read story' onPress={() => setStage('reader')} />
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

            <View
              style={[styles.supportCard, styles.gentlePaceCard]}
              accessibilityLabel={gentlePaceCopy.accessibilityLabel}
              accessibilityHint={gentlePaceCopy.accessibilityHint}
            >
              <Text style={styles.parentLine}>{gentlePaceCopy.readSlowlyCopy}</Text>
              <Text style={styles.parentLine}>{gentlePaceCopy.oneCalmPageCopy}</Text>
              <Text style={styles.parentLine}>{gentlePaceCopy.storiesCanWaitCopy}</Text>
              <Text style={styles.parentLine}>{gentlePaceCopy.noRaceCopy}</Text>
              <Text style={styles.parentLine}>{gentlePaceCopy.pauseReturnCopy}</Text>
              <Text style={styles.parentLine}>{gentlePaceCopy.sacredCareCopy}</Text>
            </View>

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
            <View style={[styles.supportCard, styles.completionTrustCard]} accessibilityLabel={completionTrustMicrocopy.accessibilityLabel} accessibilityHint={completionTrustMicrocopy.accessibilityHint}>
              <Text style={styles.parentLine}>{completionTrustMicrocopy.calmFinishCopy}</Text>
              <Text style={styles.parentLine}>{completionTrustMicrocopy.noScoreCopy}</Text>
              <Text style={styles.parentLine}>{completionTrustMicrocopy.restReadinessCopy}</Text>
              <Text style={styles.parentLine}>{completionTrustMicrocopy.familyReflectionCopy}</Text>
              <Text style={styles.parentLine}>{completionTrustMicrocopy.sacredCareCopy}</Text>
            </View>
            <View style={[styles.supportCard, styles.completionTrustCard]} accessibilityLabel={parentReflectionPromptCopy.accessibilityLabel} accessibilityHint={parentReflectionPromptCopy.accessibilityHint}>
              <Text style={styles.valueLineStrong}>{parentReflectionPromptCopy.gentleIntroCopy}</Text>
              <Text style={styles.parentLine}>{parentReflectionPromptCopy.optionalCopy}</Text>
              <Text style={styles.parentLine}>{parentReflectionPromptCopy.noQuizCopy}</Text>
              <Text style={styles.parentLine}>{parentReflectionPromptCopy.valueQuestionCopy}</Text>
              <Text style={styles.parentLine}>{parentReflectionPromptCopy.peaceQuestionCopy}</Text>
              <Text style={styles.parentLine}>{parentReflectionPromptCopy.returnLaterCopy}</Text>
            </View>
            {completionMoment.luvluAllowed ? <Text style={styles.luvluLine}>Luvlu says: Carry this blessing gently into your day.</Text> : null}
            {completionMoment.luvluAllowed ? (
              <Text style={styles.parentLine}>{completionTrustMicrocopy.luvluGentleCelebrationCopy}</Text>
            ) : null}
            <Text style={styles.parentLine}>{completionTrustMicrocopy.progressGentleCopy}</Text>
            <Text style={styles.parentLine}>Next gentle action: {completionMoment.nextActions[0]}</Text>
            <Text style={styles.parentLine}>{completionMoment.nextActions[1]}</Text>
            <Link href='/(child)/worlds' style={styles.link}>Back to Story World</Link>
            <Link href='/(child)/today' style={styles.linkSecondary}>Back to Child Home</Link>
          </View>
        )}
      </ScrollView>
    </SafeAreaView></GradientScreen>
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
  safe: { flex: 1 },
  scrollContent: { padding: tokens.spacing.lg, gap: tokens.spacing.md },
  topbar: { paddingBottom: tokens.spacing.xs },
  topbarBack: { fontSize: 14, fontWeight: '700', color: tokens.colors.midnight },
  storyCategoryLabel: { fontSize: 12, textTransform: 'uppercase', color: '#7a6444', fontWeight: '800' },
  iconRow: { flexDirection: 'row', alignItems: 'center', gap: tokens.spacing.sm },
  heroCard: { padding: tokens.spacing.lg, gap: tokens.spacing.sm },
  previewHero: { gap: tokens.spacing.sm },
  storyIconBadge: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#ffe9bf', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#e8cca0' },
  storyIconText: { fontSize: 18, fontWeight: '900', color: '#6e4f2d' },
  eyebrow: { fontSize: 13, color: tokens.colors.midnight, fontWeight: '700' },
  title: { fontSize: 30, fontWeight: '900', color: tokens.colors.textPrimary },
  subtitle: { fontSize: 17, lineHeight: 25, color: tokens.colors.textPrimary },
  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: tokens.spacing.xs },
  metaChip: { fontSize: 13, color: '#6a5b45', backgroundColor: '#fff3da', borderRadius: 999, borderWidth: 1, borderColor: '#f0d9ad', paddingVertical: 5, paddingHorizontal: 10 },
  supportCard: { backgroundColor: '#fffdf8', borderWidth: 1, borderColor: '#ebdec7', padding: tokens.spacing.md, gap: tokens.spacing.xs },
  parentPreviewCard: { backgroundColor: '#fffdf8', borderWidth: 1, borderColor: '#ebdec7', padding: tokens.spacing.md, gap: tokens.spacing.xs },
  audioStatusCard: { backgroundColor: '#fff7e8', borderWidth: 1, borderColor: '#efd6ae', padding: tokens.spacing.md, gap: tokens.spacing.xs },
  completionTrustCard: { marginTop: tokens.spacing.xs },
  gentlePaceCard: { marginTop: tokens.spacing.xs },
  valueLine: { fontSize: 16, lineHeight: 24, color: tokens.colors.textPrimary },
  valueLineStrong: { fontWeight: '900', color: '#6b4b23' },
  parentLine: { fontSize: 14, lineHeight: 21, color: '#6b5f4d' },
  luvluLine: { fontSize: 14, lineHeight: 21, color: '#4d5f78' },
  button: { backgroundColor: palette.saffron, borderRadius: 999, paddingVertical: 13, paddingHorizontal: 18, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '800' },
  readerShell: { backgroundColor: '#fffdf8', padding: tokens.spacing.lg, gap: tokens.spacing.md, borderWidth: 1, borderColor: '#ebdec7' },
  readingLabel: { fontSize: 13, fontWeight: '700', color: '#6a5b45' },
  sectionTitle: { fontSize: 23, fontWeight: '800', color: tokens.colors.textPrimary },
  progressTrack: { width: '100%', height: 7, borderRadius: 999, backgroundColor: '#f0e2c8', overflow: 'hidden' },
  progressFill: { height: 7, borderRadius: 999, backgroundColor: palette.saffron },
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
