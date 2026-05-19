import { Link, useLocalSearchParams } from 'expo-router';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { visualStyles, visualTokens } from '@/design/visualSystem';

const worldMap: Record<string, { icon: string; title: string; subtitle: string; hero: string; cards: Array<{ t: string; d: string; dur: string; age: string; value: string; status: string }> }> = {
  krishna: { icon: '🪈', title: 'Krishna Stories', subtitle: 'Playful stories about love, courage and protection.', hero: '#F9EDC9', cards: [{ t: 'Krishna and Butter Pot', d: 'A gentle story about sharing.', dur: '5 min', age: '5-8', value: 'Kindness', status: 'Available' }, { t: 'Krishna Lifts Govardhan', d: 'Protection and trust.', dur: '7 min', age: '5-8', value: 'Courage', status: 'Journey' }] },
  ganesha: { icon: '🐘', title: 'Ganesha Stories', subtitle: 'Wisdom, beginnings and gratitude.', hero: '#F6E7F2', cards: [{ t: 'Ganesha and the Moon', d: 'A kind lesson in humility.', dur: '6 min', age: '5-8', value: 'Respect', status: 'Available' }] },
  bedtime: { icon: '🌙', title: 'Bedtime Stories', subtitle: 'Soft listening before sleep.', hero: '#E8EAFF', cards: [{ t: 'Moonlit Calm Story', d: 'Quiet breathing and gratitude.', dur: '6 min', age: '3-8', value: 'Calm', status: 'Available' }] },
  festivals: { icon: '🪔', title: 'Festival Doorway', subtitle: 'Celebrate with meaning.', hero: '#FFEFD8', cards: [{ t: 'Diwali Light Story', d: 'Light over fear with gentle words.', dur: '8 min', age: '5-10', value: 'Hope', status: 'Coming soon' }] },
  journeys: { icon: '🛤️', title: 'Dharma Journeys', subtitle: 'Follow one path, one story at a time.', hero: '#E9F4EB', cards: [{ t: 'Ramayana Starter Path', d: 'Begin with family and promise.', dur: '24 stories', age: '5-8', value: 'Duty', status: 'In progress' }] }
};

export default function WorldScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const world = worldMap[(slug || '').toLowerCase()];

  if (!world) {
    return <SafeAreaView style={visualStyles.screen}><View style={[visualStyles.heroCard, { margin: 16 }]}><Text style={styles.title}>Your world is waiting</Text><Text style={styles.sub}>Choose a doorway from Story World to begin.</Text><Link href='/(child)/worlds' style={visualStyles.primaryCta}>Back to Story World</Link></View></SafeAreaView>;
  }

  return <SafeAreaView style={visualStyles.screen}><ScrollView contentContainerStyle={styles.content}>
    <View style={[visualStyles.heroCard, { backgroundColor: world.hero }]}><Text style={styles.icon}>{world.icon}</Text><Text style={styles.title}>{world.title}</Text><Text style={styles.sub}>{world.subtitle}</Text></View>
    {world.cards.map((c) => <View key={c.t} style={visualStyles.storyCard}><Text style={styles.cardTitle}>{c.t}</Text><Text style={styles.cardDesc}>{c.d}</Text><View style={styles.row}><Text style={visualStyles.chip}>{c.dur}</Text><Text style={visualStyles.chip}>Ages {c.age}</Text><Text style={visualStyles.chip}>{c.value}</Text><Text style={visualStyles.chip}>{c.status}</Text></View><Text style={styles.source}>Source / tradition note appears with each story detail.</Text><Link href='/(child)/worlds' style={visualStyles.secondaryCta}>Open from Story World</Link></View>)}
  </ScrollView></SafeAreaView>;
}

const styles = StyleSheet.create({ content:{padding:16,gap:12,paddingBottom:24}, icon:{fontSize:38}, title:{fontSize:30,fontWeight:'900',color:visualTokens.color.warmBrown}, sub:{fontSize:14,lineHeight:20,color:visualTokens.color.mutedBrown,marginTop:4}, cardTitle:{fontSize:19,fontWeight:'900',color:visualTokens.color.warmBrown}, cardDesc:{fontSize:14,lineHeight:20,color:visualTokens.color.mutedBrown}, row:{flexDirection:'row',flexWrap:'wrap',gap:6}, source:{fontSize:12,color:visualTokens.color.mutedBrown} });
