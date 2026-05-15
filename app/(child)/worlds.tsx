import { useFocusEffect } from '@react-navigation/native';
import { Link } from 'expo-router';
import { useCallback, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { getAllStoryCompletions } from '@/lib/storyProgress';
import { getVrindavanJourneyPath } from '@/services/journeys';

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

  return <SafeAreaView style={styles.screen}><Text style={styles.heading}>Vrindavan Path</Text><Text style={styles.subheading}>A calm world of Krishna stories and values.</Text><View style={styles.worldCard}>{stories.map((packet) => <Link key={packet.story.slug} href={`/story/${packet.story.slug}` as never} style={styles.node}><Text style={styles.nodeTitle}>{packet.story.title} — {packet.story.value}</Text><Text style={styles.nodeState}>{completedSlugs[packet.story.slug] ? `Completed • ${packet.story.badgeName}` : 'Pending'}</Text></Link>)}</View><Link href='/(child)/today' style={styles.backLink}>Back to Child Home</Link></SafeAreaView>;
}

const styles = StyleSheet.create({ screen: { flex: 1, padding: 20, gap: 12, backgroundColor: '#F8F5FF' }, heading: { fontSize: 30, fontWeight: '800', color: '#33204F' }, subheading: { color: '#5A4B70', fontSize: 16 }, worldCard: { backgroundColor: '#FFF', borderRadius: 20, borderWidth: 1, borderColor: '#DCCDFA', padding: 14, gap: 10 }, node: { borderRadius: 14, borderWidth: 1, borderColor: '#E6DDFB', backgroundColor: '#FCFAFF', padding: 12 }, nodeTitle: { fontSize: 16, color: '#3A2960', fontWeight: '700' }, nodeState: { marginTop: 4, color: '#6A5A90', fontSize: 14 }, backLink: { marginTop: 'auto', textAlign: 'center', color: '#4E3B76', fontWeight: '700' } });
