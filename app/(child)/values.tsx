import { Link } from 'expo-router';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { visualStyles, visualTokens } from '@/design/visualSystem';

const values = [
  'Kindness', 'Courage', 'Devotion', 'Patience', 'Gratitude', 'Truthfulness'
];

export default function ValuesScreen() {
  return <SafeAreaView style={visualStyles.screen}><ScrollView contentContainerStyle={styles.content}>
    <View style={[visualStyles.heroCard, { backgroundColor: '#FBEFD9' }]}>
      <Text style={styles.title}>Values Garden</Text>
      <Text style={styles.subtitle}>Small values we practice through stories each day.</Text>
    </View>
    <View style={visualStyles.helperBubble}><Text style={styles.helper}>🦚 Luvlu gentle explainer: Values grow slowly in our hearts with stories and reflection.</Text></View>
    {values.map((value) => <View key={value} style={styles.valueCard}><Text style={styles.valueTitle}>🌸 {value}</Text><Text style={styles.valueCopy}>Stories that help us practice {value.toLowerCase()}.</Text></View>)}
    <Link href='/(child)/journeys' style={visualStyles.secondaryCta}>Open Dharma Journeys</Link>
  </ScrollView></SafeAreaView>;
}

const styles = StyleSheet.create({ content: { padding: 16, gap: 10, paddingBottom: 30 }, title: { fontSize: 30, fontWeight: '900', color: visualTokens.color.warmBrown }, subtitle: { fontSize: 15, color: visualTokens.color.mutedBrown }, helper: { fontSize: 13, color: '#1F4A75', fontWeight: '700' }, valueCard: { borderRadius: 20, backgroundColor: '#FFF8EA', borderWidth: 1, borderColor: '#ECD8B5', padding: 14, gap: 4 }, valueTitle: { fontSize: 20, fontWeight: '800', color: '#5A381D' }, valueCopy: { fontSize: 14, color: '#6E4E30' } });
