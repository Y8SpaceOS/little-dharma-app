import { Link, useLocalSearchParams } from 'expo-router';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { visualStyles, visualTokens } from '@/design/visualSystem';

const journeyConfig: Record<string, { title: string; nodes: string[] }> = {
  ramayana: { title: 'Ramayana Journey', nodes: ['Welcome Path', 'Forest Friendship', 'Courage and Care', 'Family Dharma'] },
  'krishna-childhood': { title: 'Krishna Childhood Journey', nodes: ['Playful Beginnings', 'Kind Village Moments', 'Music and Devotion', 'Sharing Joy'] },
  'ganesha-wisdom': { title: 'Ganesha Wisdom Journey', nodes: ['Listening Heart', 'New Start Blessing', 'Patience Practice', 'Wisdom Reflection'] },
  'hanuman-courage': { title: 'Hanuman Courage Journey', nodes: ['Service First', 'Brave Action', 'Humility in Strength', 'Devotion Path'] },
  festival: { title: 'Festival Journey', nodes: ['Diya Welcome', 'Gratitude Gathering', 'Festival Story Circle', 'Family Reflection'] },
  values: { title: 'Values Journey', nodes: ['Kindness', 'Courage', 'Devotion', 'Patience', 'Gratitude', 'Truthfulness'] }
};

export default function JourneyDetailScreen() {
  const { journeyId } = useLocalSearchParams<{ journeyId: string }>();
  const detail = journeyConfig[journeyId ?? ''] ?? { title: 'Dharma Journey', nodes: ['Gentle Start', 'Story Path', 'Reflection Node'] };

  return <SafeAreaView style={visualStyles.screen}><ScrollView contentContainerStyle={styles.content}>
    <View style={[visualStyles.heroCard, { backgroundColor: '#FFF2DB' }]}>
      <Text style={styles.title}>{detail.title}</Text>
      <Text style={styles.copy}>A warm path to explore at your own pace. Some nodes open later as your stories grow.</Text>
    </View>
    {detail.nodes.map((node, index) => <View key={node} style={[styles.node, index % 2 === 0 ? styles.nodeOpen : styles.nodeLater]}>
      <Text style={styles.nodeTitle}>{index + 1}. {node}</Text>
      <Text style={styles.nodeCopy}>{index < 2 ? 'Ready for story time.' : 'Future story flower — opening gently later.'}</Text>
    </View>)}
    <Link href='/(child)/journeys' style={visualStyles.secondaryCta}>Back to Dharma Journeys</Link>
    <Link href='/(child)/worlds' style={visualStyles.secondaryCta}>Go to Story World</Link>
  </ScrollView></SafeAreaView>;
}

const styles = StyleSheet.create({
  content: { padding: 16, gap: 12, paddingBottom: 28 },
  title: { fontSize: 30, fontWeight: '900', color: visualTokens.color.warmBrown },
  copy: { fontSize: 14, lineHeight: 20, color: visualTokens.color.mutedBrown },
  node: { borderRadius: 22, padding: 14, borderWidth: 1 },
  nodeOpen: { backgroundColor: '#E9F8E8', borderColor: '#CBE6CA' },
  nodeLater: { backgroundColor: '#F7F0E2', borderColor: '#E6D8C1' },
  nodeTitle: { fontSize: 18, fontWeight: '800', color: '#5C3A1B' },
  nodeCopy: { fontSize: 13, color: '#6F5338' }
});
