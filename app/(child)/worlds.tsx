import { useFocusEffect } from '@react-navigation/native';
import { Link } from 'expo-router';
import { useCallback, useMemo, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { getAllStoryCompletions } from '@/lib/storyProgress';
import { getVrindavanJourneyPath } from '@/services/journeys';

type NodeState = 'completed' | 'available' | 'locked';

export default function Screen() {
  const stories = getVrindavanJourneyPath();
  const [completedSlugs, setCompletedSlugs] = useState<Record<string, boolean>>({});

  useFocusEffect(
    useCallback(() => {
      getAllStoryCompletions()
        .then((entries) => {
          const map: Record<string, boolean> = {};
          Object.keys(entries).forEach((slug) => {
            map[slug] = true;
          });
          setCompletedSlugs(map);
        })
        .catch(() => setCompletedSlugs({}));
    }, [])
  );

  const firstIncompleteIndex = useMemo(
    () => stories.findIndex((packet) => !completedSlugs[packet.story.slug]),
    [completedSlugs, stories]
  );

  const pathCompleted = firstIncompleteIndex === -1;
  const completedCount = stories.filter((packet) => completedSlugs[packet.story.slug]).length;

  const getNodeState = (index: number, slug: string): NodeState => {
    if (completedSlugs[slug]) {
      return 'completed';
    }

    if (pathCompleted) {
      return 'completed';
    }

    return index === firstIncompleteIndex ? 'available' : 'locked';
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.heroCard}>
        <Text style={styles.heroEyebrow}>Explore Worlds</Text>
        <Text style={styles.heading}>Vrindavan Path</Text>
        <Text style={styles.subheading}>
          Walk a gentle story trail with Krishna. Finish one glowing stop each day and watch your kindness grow.
        </Text>
        <View style={styles.progressPill}>
          <Text style={styles.progressText}>
            {completedCount}/{stories.length} story stops completed
          </Text>
        </View>
      </View>

      <View style={styles.worldCard}>
        <Text style={styles.pathTitle}>Your journey map</Text>
        <Text style={styles.pathCopy}>Start at your next glowing step. Completed stories keep their sparkly badge forever.</Text>

        {stories.map((packet, index) => {
          const nodeState = getNodeState(index, packet.story.slug);
          const isLocked = nodeState === 'locked';
          const isCompleted = nodeState === 'completed';

          return (
            <View key={packet.story.slug} style={styles.stepWrap}>
              {index > 0 && <View style={[styles.connector, isLocked ? styles.connectorLocked : styles.connectorOpen]} />}
              <Link
                href={`/story/${packet.story.slug}` as never}
                style={[
                  styles.node,
                  isCompleted && styles.nodeCompleted,
                  nodeState === 'available' && styles.nodeAvailable,
                  isLocked && styles.nodeLocked
                ]}
              >
                <View style={styles.nodeHeaderRow}>
                  <Text style={[styles.stepBadge, isLocked ? styles.stepBadgeLocked : styles.stepBadgeOpen]}>Stop {index + 1}</Text>
                  <Text style={[styles.nodeState, isCompleted ? styles.stateCompleted : nodeState === 'available' ? styles.stateAvailable : styles.stateLocked]}>
                    {isCompleted ? 'Completed' : nodeState === 'available' ? 'Ready now' : 'Coming next'}
                  </Text>
                </View>
                <Text style={[styles.nodeTitle, isLocked && styles.nodeTitleLocked]}>{packet.story.title}</Text>
                <Text style={[styles.nodeValue, isLocked && styles.nodeValueLocked]}>Value: {packet.story.value}</Text>
                <Text style={[styles.nodeHint, isLocked && styles.nodeHintLocked]}>
                  {isCompleted
                    ? `Badge earned: ${packet.story.badgeName}`
                    : nodeState === 'available'
                      ? 'Tap to begin your next 10-minute story ritual.'
                      : 'Complete the glowing step before this one to unlock.'}
                </Text>
              </Link>
            </View>
          );
        })}
      </View>

      <Link href='/(child)/today' style={styles.backLink}>Back to Child Home</Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 20, gap: 12, backgroundColor: '#F7F1FF' },
  heroCard: {
    borderRadius: 22,
    padding: 18,
    backgroundColor: '#EDE3FF',
    borderWidth: 1,
    borderColor: '#D9C8FF'
  },
  heroEyebrow: { fontSize: 12, fontWeight: '800', letterSpacing: 0.8, textTransform: 'uppercase', color: '#6A4AA0' },
  heading: { marginTop: 4, fontSize: 30, fontWeight: '800', color: '#33204F' },
  subheading: { marginTop: 8, color: '#5A4B70', fontSize: 15, lineHeight: 21 },
  progressPill: {
    marginTop: 12,
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: '#DDCDFB'
  },
  progressText: { fontSize: 13, fontWeight: '700', color: '#4F3C73' },
  worldCard: { backgroundColor: '#FFF', borderRadius: 24, borderWidth: 1, borderColor: '#DCCDFA', padding: 14, gap: 8 },
  pathTitle: { fontSize: 19, fontWeight: '800', color: '#3A2960' },
  pathCopy: { color: '#6A5A90', fontSize: 14, lineHeight: 19, marginBottom: 6 },
  stepWrap: { gap: 8 },
  connector: { width: 2, height: 12, marginLeft: 18 },
  connectorOpen: { backgroundColor: '#CDB2FB' },
  connectorLocked: { backgroundColor: '#E5DCF3' },
  node: { borderRadius: 16, borderWidth: 1, borderColor: '#E6DDFB', backgroundColor: '#FCFAFF', padding: 12 },
  nodeCompleted: { borderColor: '#BCE8C8', backgroundColor: '#EEFFF2' },
  nodeAvailable: { borderColor: '#DDB66B', backgroundColor: '#FFF4DF' },
  nodeLocked: { borderColor: '#E4DDF0', backgroundColor: '#F5F2FA' },
  nodeHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  stepBadge: { fontSize: 12, fontWeight: '800', textTransform: 'uppercase' },
  stepBadgeOpen: { color: '#6A4AA0' },
  stepBadgeLocked: { color: '#8D84A3' },
  nodeTitle: { marginTop: 6, fontSize: 17, color: '#3A2960', fontWeight: '800' },
  nodeTitleLocked: { color: '#6F6685' },
  nodeValue: { marginTop: 2, fontSize: 14, color: '#5D4D82', fontWeight: '600' },
  nodeValueLocked: { color: '#817A94' },
  nodeState: { fontSize: 12, fontWeight: '800' },
  stateCompleted: { color: '#2D7D4B' },
  stateAvailable: { color: '#9B6200' },
  stateLocked: { color: '#80789A' },
  nodeHint: { marginTop: 8, color: '#5E507A', fontSize: 13, lineHeight: 18 },
  nodeHintLocked: { color: '#7F7891' },
  backLink: { marginTop: 'auto', textAlign: 'center', color: '#4E3B76', fontWeight: '700' }
});
