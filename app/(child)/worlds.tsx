import { Link } from 'expo-router';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { visualStyles, visualTokens } from '@/design/visualSystem';

const doorways = [
  { icon: '🪈', title: 'Krishna Stories', copy: 'Play, love, courage.', href: '/world/krishna', bg: '#F9EDC9' },
  { icon: '🐘', title: 'Ganesha Stories', copy: 'Wisdom and new beginnings.', href: '/world/ganesha', bg: '#F6E7F2' },
  { icon: '🏹', title: 'Ramayana', copy: 'Family, dharma, courage.', href: '/world/ramayana', bg: '#E7F3FF' },
  { icon: '💪', title: 'Hanuman', copy: 'Strength with devotion.', href: '/world/hanuman', bg: '#E8F5EA' },
  { icon: '🌙', title: 'Bedtime', copy: 'Calm stories for night.', href: '/world/bedtime', bg: '#E8EAFF' },
  { icon: '🪔', title: 'Festivals', copy: 'Diya, joy, gratitude.', href: '/world/festivals', bg: '#FFEFD8' },
  { icon: '🌸', title: 'Values Stories', copy: 'Kindness and courage.', href: '/world/values', bg: '#F6EDF9' },
  { icon: '🛤️', title: 'Dharma Journeys', copy: 'Follow one story path.', href: '/world/journeys', bg: '#E9F4EB' }
];

export default function Screen() {
  return <SafeAreaView style={visualStyles.screen}><ScrollView contentContainerStyle={styles.content}>
    <View style={[visualStyles.heroCard, { backgroundColor: '#FFF0D5' }]}>
      <Text style={styles.heading}>Story World</Text>
      <Text style={styles.subHeading}>Choose a doorway</Text>
      <Text style={styles.sub}>Each world carries a gentle value and one calm moment.</Text>
    </View>

    <View style={styles.grid}>{doorways.map((d) => <Link key={d.title} href={d.href as never} style={[visualStyles.doorwayCard, { backgroundColor: d.bg, width: '48%' }]}>
      <Text style={styles.icon}>{d.icon}</Text>
      <Text style={styles.cardTitle}>{d.title}</Text>
      <Text style={styles.cardCopy}>{d.copy}</Text>
      <Text style={[visualStyles.chip, { marginTop: 8 }]}>Enter world</Text>
    </Link>)}</View>

    <View style={visualStyles.parentCard}><Text style={styles.trust}>Parent trust note: age guidance stays local on this device. No public child profile.</Text></View>
  </ScrollView></SafeAreaView>;
}

const styles = StyleSheet.create({ content:{padding:16,gap:12,paddingBottom:28}, heading:{fontSize:32,fontWeight:'900',color:visualTokens.color.warmBrown}, subHeading:{fontSize:24,fontWeight:'800',color:'#6A4522'}, sub:{fontSize:14,color:visualTokens.color.mutedBrown,marginTop:4}, grid:{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',gap:10}, icon:{fontSize:32}, cardTitle:{marginTop:6,fontSize:18,fontWeight:'900',color:visualTokens.color.warmBrown}, cardCopy:{marginTop:4,fontSize:13,lineHeight:18,color:visualTokens.color.mutedBrown}, trust:{fontSize:13,lineHeight:19,color:visualTokens.color.mutedBrown} });
