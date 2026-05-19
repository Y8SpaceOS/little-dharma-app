import { Link, useLocalSearchParams } from 'expo-router';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { visualStyles, visualTokens } from '@/design/visualSystem';

type Card = { title: string; description: string; duration: string; age: string; value: string; status: 'available' | 'coming_soon'; storySlug?: string };
type World = { icon: string; title: string; subtitle: string; hero: string; cards: Card[] };

const worldMap: Record<string, World> = {
  krishna: { icon: '🪈', title: 'Krishna Stories', subtitle: 'Playful stories about love, courage and protection.', hero: '#F9EDC9', cards: [
    { title: 'Krishna Shares Butter', description: 'A gentle story about sharing.', duration: '5 min', age: '5-8', value: 'Kindness', status: 'available', storySlug: 'krishna-shares-butter' },
    { title: 'Krishna Helps a Lost Calf', description: 'Compassion and care in one calm moment.', duration: '6 min', age: '5-8', value: 'Compassion', status: 'available', storySlug: 'krishna-helps-a-lost-calf' }
  ] },
  ganesha: { icon: '🐘', title: 'Ganesha Stories', subtitle: 'Wisdom, beginnings and gratitude.', hero: '#F6E7F2', cards: [
    { title: 'Ganesha and the Moon', description: 'A kind lesson in humility.', duration: '6 min', age: '5-8', value: 'Respect', status: 'coming_soon' }
  ] },
  bedtime: { icon: '🌙', title: 'Bedtime Stories', subtitle: 'Soft listening before sleep.', hero: '#E8EAFF', cards: [
    { title: 'Moonlit Calm Story', description: 'Quiet breathing and gratitude.', duration: '6 min', age: '3-8', value: 'Calm', status: 'coming_soon' }
  ] },
  festivals: { icon: '🪔', title: 'Festival Doorway', subtitle: 'Celebrate with meaning.', hero: '#FFEFD8', cards: [
    { title: 'Diwali Light Story', description: 'Light over fear with gentle words.', duration: '8 min', age: '5-10', value: 'Hope', status: 'coming_soon' }
  ] },
  journeys: { icon: '🛤️', title: 'Dharma Journeys', subtitle: 'Follow one path, one story at a time.', hero: '#E9F4EB', cards: [
    { title: 'Ramayana Starter Path', description: 'Begin with family and promise.', duration: '24 stories', age: '5-8', value: 'Duty', status: 'coming_soon' }
  ] },
  ramayana: { icon: '🏹', title: 'Ramayana', subtitle: 'Family, dharma and courage.', hero: '#E7F3FF', cards: [
    { title: 'Forest Chapter', description: 'A gentle age-banded chapter flow.', duration: '7 min', age: '5-8', value: 'Duty', status: 'coming_soon' }
  ] },
  hanuman: { icon: '💪', title: 'Hanuman', subtitle: 'Strength with devotion.', hero: '#E8F5EA', cards: [
    { title: 'Hanuman Appears', description: 'Courage and service for little hearts.', duration: '7 min', age: '5-8', value: 'Courage', status: 'coming_soon' }
  ] },
  values: { icon: '🌸', title: 'Values Stories', subtitle: 'Small moments that grow kind hearts.', hero: '#F6EDF9', cards: [
    { title: 'Kindness Flower Story', description: 'One value at a time.', duration: '6 min', age: '3-8', value: 'Kindness', status: 'coming_soon' }
  ] }
};

export default function WorldScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const world = worldMap[(slug || '').toLowerCase()];

  if (!world) {
    return <SafeAreaView style={visualStyles.screen}><View style={[visualStyles.emptyStateCard, { margin: 16, gap: 8 }]}><Text style={styles.title}>Your world is waiting</Text><Text style={styles.sub}>Choose a doorway from Story World to begin.</Text><Link href='/(child)/worlds' style={visualStyles.primaryCta}>Back to Story World</Link></View></SafeAreaView>;
  }

  return <SafeAreaView style={visualStyles.screen}><ScrollView contentContainerStyle={styles.content}>
    <View style={[visualStyles.heroCard, { backgroundColor: world.hero, gap: 6 }]}>
      <Text style={styles.icon}>{world.icon}</Text>
      <Text style={styles.title}>{world.title}</Text>
      <Text style={styles.sub}>{world.subtitle}</Text>
    </View>

    {world.cards.map((c) => <View key={c.title} style={visualStyles.storyCard}>
      <Text style={styles.cardTitle}>{c.title}</Text>
      <Text style={styles.cardDesc}>{c.description}</Text>
      <View style={styles.row}>
        <Text style={visualStyles.chip}>{c.duration}</Text>
        <Text style={visualStyles.chip}>Ages {c.age}</Text>
        <Text style={visualStyles.chip}>{c.value}</Text>
        <Text style={visualStyles.chip}>{c.status === 'available' ? 'Ready' : 'Coming soon'}</Text>
      </View>
      <Text style={styles.source}>Source / tradition note appears with each story detail.</Text>
      {c.status === 'available' && c.storySlug ? <Link href={`/story/${c.storySlug}` as never} style={visualStyles.secondaryCta}>Read story</Link> : <View style={styles.comingSoon}><Text style={styles.comingSoonText}>Coming soon</Text></View>}
    </View>)}
  </ScrollView></SafeAreaView>;
}

const styles = StyleSheet.create({ content:{padding:16,gap:12,paddingBottom:24}, icon:{fontSize:38}, title:{fontSize:30,fontWeight:'900',color:visualTokens.color.warmBrown}, sub:{fontSize:14,lineHeight:20,color:visualTokens.color.mutedBrown,marginTop:4}, cardTitle:{fontSize:19,fontWeight:'900',color:visualTokens.color.warmBrown}, cardDesc:{fontSize:14,lineHeight:20,color:visualTokens.color.mutedBrown}, row:{flexDirection:'row',flexWrap:'wrap',gap:6}, source:{fontSize:12,color:visualTokens.color.mutedBrown}, comingSoon:{marginTop:6,paddingVertical:10,paddingHorizontal:12,borderRadius:12,backgroundColor:'#FFF7E9',borderWidth:1,borderColor:'#E8D4B6',alignSelf:'flex-start'}, comingSoonText:{fontSize:12,fontWeight:'800',color:visualTokens.color.mutedBrown} });
