import { useMemo, useState } from 'react';
import { useRouter } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { visualStyles, visualTokens } from '@/design/visualSystem';

const doorways = [
  { icon: '🪈', title: 'Krishna Stories', copy: 'Playful devotion, kindness, and courage.', href: '/world/krishna', tags: ['Values', 'Journeys'], bg: '#F9EDC9', ready: true },
  { icon: '🐘', title: 'Ganesha Stories', copy: 'Wisdom and new beginnings with respect.', href: '/world/ganesha', tags: ['Values'], bg: '#F6E7F2', ready: true },
  { icon: '🏹', title: 'Ramayana Journey', copy: 'Family dharma, purpose, and care.', href: '/world/ramayana', tags: ['Journeys'], bg: '#E7F3FF', ready: true },
  { icon: '💪', title: 'Hanuman Stories', copy: 'Strength with humility and service.', href: '/world/hanuman', tags: ['Values', 'Journeys'], bg: '#E8F5EA', ready: true },
  { icon: '🌙', title: 'Bedtime Stories', copy: 'Soft bedtime calm for little hearts.', href: '/world/bedtime', tags: ['Bedtime'], bg: '#E8EAFF', ready: true },
  { icon: '🌸', title: 'Values Stories', copy: 'Kindness, truth, and gratitude in action.', href: '/world/values', tags: ['Values'], bg: '#F6EDF9', ready: true },
  { icon: '🪔', title: 'Festival Stories', copy: 'Diya-light joy and seasonal traditions.', href: '/world/festivals', tags: ['Festivals'], bg: '#FFEFD8', ready: false }
];

const chips = ['Bedtime', 'Values', 'Journeys', 'Festivals'];

export default function Screen() {
  const router = useRouter();
  const [activeChip, setActiveChip] = useState<string | null>(null);
  const filtered = useMemo(() => activeChip ? doorways.filter((w) => w.tags.includes(activeChip)) : doorways, [activeChip]);

  return <SafeAreaView style={visualStyles.screen}><ScrollView contentContainerStyle={styles.content}>
    <View style={[visualStyles.heroCard, { backgroundColor: '#FFF0D5' }]}>
      <Text style={styles.heading}>Story World</Text>
      <Text style={styles.subHeading}>Choose a doorway</Text>
      <Text style={styles.sub}>Every world is crafted with parent-trusted language and respectful story framing.</Text>
    </View>

    <View style={visualStyles.helperBubble}><Text style={styles.helper}>🦚 Luvlu helper bubble: Tap any world and I will guide you softly.</Text></View>

    <View style={styles.chips}>{chips.map((chip) => <Pressable key={chip} onPress={() => setActiveChip(activeChip === chip ? null : chip)} style={[styles.chip, activeChip === chip && styles.chipActive]}><Text style={[styles.chipText, activeChip === chip && styles.chipTextActive]}>{chip}</Text></Pressable>)}</View>

    <View style={styles.grid}>{filtered.map((d) => <Pressable key={d.title} onPress={() => router.push(d.href as never)} style={({ pressed }) => [visualStyles.doorwayCard, { backgroundColor: d.bg, width: '48%' }, pressed && styles.cardPressed]}>
      <View style={styles.cardStack}>
        <Text style={styles.icon}>{d.icon}</Text>
        <Text style={styles.cardTitle}>{d.title}</Text>
        <Text style={styles.cardCopy}>{d.copy}</Text>
        {!d.ready ? <Text style={styles.empty}>Stories are arriving soon. Your journey will grow gently here.</Text> : <Text style={[visualStyles.chip, { marginTop: 8 }]}>Enter Story World</Text>}
      </View>
    </Pressable>)}</View>

    <View style={visualStyles.parentCard}><Text style={styles.trust}>Sacred and cultural respect note: labels are respectful, and Luvlu remains a guide/helper, not a deity or logo.</Text></View>
  </ScrollView></SafeAreaView>;
}

const styles = StyleSheet.create({ content:{padding:16,gap:12,paddingBottom:28}, heading:{fontSize:32,fontWeight:'900',color:visualTokens.color.warmBrown}, subHeading:{fontSize:24,fontWeight:'800',color:'#6A4522'}, sub:{fontSize:14,color:visualTokens.color.mutedBrown,marginTop:4}, helper:{fontSize:13,color:'#1F4A75',fontWeight:'700'}, chips:{flexDirection:'row',flexWrap:'wrap',gap:8}, chip:{paddingVertical:8,paddingHorizontal:12,borderRadius:999,backgroundColor:'#F0E7DA'}, chipActive:{backgroundColor:'#E38C29'}, chipText:{fontWeight:'700',color:'#6A4522'}, chipTextActive:{color:'#fff'}, grid:{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',gap:10}, cardPressed:{transform:[{scale:0.98}]}, cardStack:{gap:6}, icon:{fontSize:32}, cardTitle:{fontSize:18,fontWeight:'900',color:visualTokens.color.warmBrown}, cardCopy:{fontSize:13,lineHeight:18,color:visualTokens.color.mutedBrown}, empty:{fontSize:12,lineHeight:17,color:'#6A5B4D',marginTop:8,fontStyle:'italic'}, trust:{fontSize:13,lineHeight:19,color:visualTokens.color.mutedBrown} });
