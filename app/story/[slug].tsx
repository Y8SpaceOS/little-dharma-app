import { useState } from 'react';
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
    return <SafeAreaView style={visualStyles.softScreen}><View style={styles.card}><Text style={styles.title}>This story is resting for now.</Text><Text style={styles.body}>Return to Story World or Child Home.</Text><Link href='/(child)/worlds' style={styles.link}>Return to Story World</Link></View></SafeAreaView>;
  }

  const { story } = journey;
  const storyMeta = storyWorldItems.find((item) => item.slug === story.slug);
  const worldLabel = storyMeta ? storyWorldSections.find((section) => section.id === storyMeta.sectionId)?.title : undefined;

  const summary = storyMeta?.summary || 'A warm Little Dharma story with a calm blessing at the end.';
  const durationMinutes = storyMeta?.durationMinutes ?? 10;
  const primaryValue = storyMeta?.primaryValue || story.value;
  const section = story.panels[panelIndex];
  const isLastSection = panelIndex === story.panels.length - 1;

  return (
    <SafeAreaView style={visualStyles.softScreen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={[styles.headerCard, visualStyles.roundedCard, visualStyles.warmCard]}>
          <Text style={styles.title}>{story.title}</Text>
          <Text style={styles.meta}>{worldLabel || story.world}</Text>
        </View>

        {stage === 'detail' && (
          <View style={[styles.card, visualStyles.roundedCard]}>
            <Text style={styles.sectionTitle}>Before you begin</Text>
            <Text style={styles.body}>{summary}</Text>
            <View style={styles.metaCard}>
              <Text style={styles.meta}>About {durationMinutes} minutes</Text>
              <Text style={styles.meta}>Theme: {primaryValue}</Text>
            </View>
            <Text style={styles.helperLine}>Luvlu whisper: Read slowly and breathe between pages.</Text>
            <Text style={styles.parentLine}>Parent note: Gentle and child-friendly sacred storytelling.</Text>
            <Pressable style={styles.button} onPress={() => setStage('reader')}><Text style={styles.buttonText}>Begin Story</Text></Pressable>
          </View>
        )}

        {stage === 'reader' && (
          <View style={[styles.card, visualStyles.roundedCard]}>
            <Text style={styles.meta}>Part {panelIndex + 1} of {story.panels.length}</Text>
            <View style={styles.readerCard}>
              <Text style={styles.readerTitle}>{section.title}</Text>
              <Text style={styles.readerText}>{section.text}</Text>
            </View>
            <View style={styles.controls}>
              <Pressable style={[styles.button, panelIndex === 0 && styles.disabledButton]} onPress={() => setPanelIndex((prev) => Math.max(0, prev - 1))} disabled={panelIndex === 0}><Text style={styles.buttonText}>Back</Text></Pressable>
              <Pressable style={styles.button} onPress={() => isLastSection ? setStage('complete') : setPanelIndex((prev) => Math.min(story.panels.length - 1, prev + 1))}><Text style={styles.buttonText}>{isLastSection ? 'Finish' : 'Next'}</Text></Pressable>
            </View>
          </View>
        )}

        {stage === 'complete' && (
          <View style={[styles.card, visualStyles.roundedCard]}>
            <Text style={styles.sectionTitle}>You finished this story.</Text>
            <Text style={styles.body}>May this blessing stay with your heart.</Text>
            <Text style={styles.body}>You practiced {primaryValue.toLowerCase()} today.</Text>
            <Text style={styles.parentLine}>Parent reflection: What part felt meaningful together?</Text>
            <Link href='/(child)/worlds' style={styles.link}>Back to Story World</Link>
            <Link href='/(child)/today' style={styles.linkSecondary}>Back to Child Home</Link>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default function StoryScreen() {
  return <RouteErrorBoundary surfaceName='story' audience='child'><StoryScreenContent /></RouteErrorBoundary>;
}

const styles = StyleSheet.create({
  scrollContent: { padding: tokens.spacing.lg, gap: tokens.spacing.lg },
  headerCard: { padding: tokens.spacing.lg },
  card: { backgroundColor: tokens.colors.cloud, borderRadius: tokens.radius.card, padding: tokens.spacing.lg, gap: tokens.spacing.md },
  title: { fontSize: 30, fontWeight: '900', color: tokens.colors.textPrimary },
  sectionTitle: { fontSize: 24, fontWeight: '800', color: tokens.colors.textPrimary },
  body: { fontSize: 18, lineHeight: 28, color: tokens.colors.textPrimary },
  meta: { fontSize: 15, color: tokens.colors.midnight },
  metaCard: { backgroundColor: '#fff6de', borderRadius: tokens.radius.card, padding: tokens.spacing.md, gap: 6 },
  button: { backgroundColor: tokens.colors.saffron, borderRadius: 999, paddingVertical: 12, paddingHorizontal: 18, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '800' },
  readerCard: { backgroundColor: '#fffaf1', borderRadius: tokens.radius.card, padding: tokens.spacing.lg, gap: tokens.spacing.md },
  readerTitle: { fontSize: 20, fontWeight: '800', color: tokens.colors.textPrimary },
  readerText: { fontSize: 21, lineHeight: 32, color: tokens.colors.textPrimary },
  helperLine: { fontSize: 14, color: tokens.colors.midnight },
  parentLine: { fontSize: 14, color: '#6a5b45' },
  controls: { flexDirection: 'row', gap: tokens.spacing.sm },
  disabledButton: { opacity: 0.5 },
  link: { fontSize: 16, fontWeight: '700', color: tokens.colors.saffron },
  linkSecondary: { fontSize: 15, color: tokens.colors.midnight }
});
