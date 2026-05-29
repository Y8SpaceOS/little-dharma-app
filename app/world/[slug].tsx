import { Link, useLocalSearchParams } from 'expo-router';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card, Chip, GradientScreen, HeroCard } from '@/components/dharmaKit';
import { palette, radii, space, text, visualStyles } from '@/design/visualSystem';

type StoryCard = {
  title: string;
  description: string;
  duration: string;
  age: string;
  value: string;
  status: 'available' | 'coming_soon';
  storySlug?: string;
};
type World = { icon: string; title: string; subtitle: string; hero: string; cards: StoryCard[] };

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

const isJourneyLike = (slug: string, world: World) => /journey|ramayana/.test(slug) || /path|chapter/i.test(world.title);

export default function WorldScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const normalizedSlug = (slug || '').toLowerCase();
  const world = worldMap[normalizedSlug];

  if (!world) {
    return <GradientScreen gradient='body'><SafeAreaView style={styles.safe}><View style={styles.emptyWrap}><Card style={styles.emptyCard}><Text style={styles.title}>Your world is waiting</Text><Text style={styles.sub}>Choose a doorway from Story World to begin.</Text><Link href='/(child)/worlds' style={visualStyles.primaryCta}>Back to Story World</Link></Card></View></SafeAreaView></GradientScreen>;
  }

  const journeyLike = isJourneyLike(normalizedSlug, world);

  return <GradientScreen gradient='body'><SafeAreaView style={styles.safe}><ScrollView contentContainerStyle={styles.content}>
    <HeroCard style={[styles.hero, { backgroundColor: world.hero }]}>
      <Text style={styles.icon}>{world.icon}</Text>
      <Text style={styles.title}>{world.title}</Text>
      <Text style={styles.sub}>{journeyLike ? 'Take one calm step at a time.' : world.subtitle}</Text>
      {journeyLike ? <View style={styles.pathStrip}><Text style={styles.pathLabel}>Journey path</Text><View style={styles.pathRow}><View style={[styles.pathDot, styles.pathDone]} /><View style={styles.pathLine} /><View style={styles.pathDot} /><View style={styles.pathLine} /><View style={styles.pathDot} /></View></View> : null}
    </HeroCard>

    {world.cards.map((c, idx) => <Card key={c.title} style={journeyLike ? styles.journeyCard : styles.worldCard}>
      {journeyLike ? <Text style={styles.stepLabel}>Step {idx + 1}</Text> : null}
      <Text style={styles.cardTitle}>{c.title}</Text>
      <Text style={styles.cardDesc}>{c.description}</Text>
      <View style={styles.row}>
        <Chip label={c.duration} />
        <Chip label={`Ages ${c.age}`} />
        <Chip label={c.value} />
      </View>
      <Text style={styles.source}>Tradition note appears in story detail.</Text>
      {c.status === 'available' && c.storySlug ? <Link href={`/story/${c.storySlug}` as never} style={visualStyles.secondaryCta}>Read story</Link> : <View style={styles.comingSoon}><Text style={styles.comingSoonText}>{journeyLike ? 'This step opens soon' : 'Coming soon'}</Text></View>}
    </Card>)}
  </ScrollView></SafeAreaView></GradientScreen>;
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  content: { padding: space.screen, gap: space.sm, paddingBottom: 24 },
  emptyWrap: { flex: 1, justifyContent: 'center', padding: space.screen },
  emptyCard: { gap: space.sm },
  hero: { gap: space.sm },
  icon: { fontSize: 38 },
  title: { ...text.display, color: palette.ink },
  sub: { ...text.body, color: palette.muted, marginTop: 4 },
  worldCard: {},
  journeyCard: { backgroundColor: '#F9FFF7', borderColor: '#D4E8D0' },
  stepLabel: { ...text.caption, color: '#4A7C59', marginBottom: 4 },
  cardTitle: { ...text.heading, color: palette.ink },
  cardDesc: { ...text.body, color: palette.muted },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: space.xs },
  source: { ...text.mini, fontSize: 12, color: palette.muted },
  pathStrip: { marginTop: 4, padding: space.sm, borderRadius: radii.bubble, backgroundColor: '#FFFFFFB8', borderWidth: 1, borderColor: '#D7E7D5', gap: space.xs },
  pathLabel: { ...text.caption, color: '#4A7C59' },
  pathRow: { flexDirection: 'row', alignItems: 'center' },
  pathDot: { width: 12, height: 12, borderRadius: radii.pill, backgroundColor: '#CFE0CC' },
  pathDone: { backgroundColor: '#7DBA84' },
  pathLine: { height: 3, width: 28, backgroundColor: '#CFE0CC' },
  comingSoon: { marginTop: space.xs, paddingVertical: space.sm, paddingHorizontal: space.md, borderRadius: radii.nav, backgroundColor: '#FFF7E9', borderWidth: 1, borderColor: palette.line, alignSelf: 'flex-start' },
  comingSoonText: { ...text.caption, color: palette.muted }
});
