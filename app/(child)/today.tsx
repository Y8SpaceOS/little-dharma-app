import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { AppState, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import RouteErrorBoundary from '@/components/RouteErrorBoundary';
import { getOnboardingState, subscribeOnboardingState } from '@/lib/onboardingState';
import { markThresholdEntered, shouldShowThreshold } from '@/lib/thresholdState';
import { visualStyles, visualTokens } from '@/design/visualSystem';

function TodayScreenContent() {
  const [nickname, setNickname] = useState<string | null>(getOnboardingState().profile?.nickname || null);
  const [showThreshold, setShowThreshold] = useState(false);
  const router = useRouter();
  const name = nickname?.trim() || 'Little One';

  useEffect(() => subscribeOnboardingState(() => setNickname(getOnboardingState().profile?.nickname || null)), []);
  const refreshThresholdVisibility = useCallback(() => shouldShowThreshold().then(setShowThreshold).catch(() => setShowThreshold(true)), []);
  useFocusEffect(useCallback(() => { refreshThresholdVisibility(); }, [refreshThresholdVisibility]));
  useEffect(() => { const s = AppState.addEventListener('change', (n) => n === 'active' && refreshThresholdVisibility()); return () => s.remove(); }, [refreshThresholdVisibility]);

  const paths = useMemo(() => [
    { icon: '📖', title: 'Explore Story World', copy: 'Step into warm worlds full of wonder and wisdom.', href: '/(child)/worlds', bg: '#FCECC8' },
    { icon: '🪔', title: 'Continue your story', copy: 'Your story path is waiting right where you paused.', href: '/(child)/worlds', bg: '#FDE4CF' },
    { icon: '🛤️', title: 'Journey doorway', copy: 'Take one calm path and walk it with courage.', href: '/(child)/worlds', bg: '#E8F3DE' },
    { icon: '🌸', title: "Today's gentle value", copy: 'Practice one small kindness in your story world today.', href: '/(child)/worlds', bg: '#F7E9FB' }
  ], []);

  return <SafeAreaView style={visualStyles.screen}><ScrollView contentContainerStyle={styles.content}>
    <View style={[visualStyles.heroCard, styles.homeHero]}>
      <Text style={styles.brandMark}>🪔🌸☀️</Text>
      <Text style={styles.greeting}>Namaste, {name}</Text>
      <Text style={styles.headline}>Welcome to your Little Dharma Home</Text>
      <Text style={styles.sub}>A warm Story World is ready for you with calm stories, brave choices, and gentle joy.</Text>
    </View>

    <View style={[visualStyles.helperBubble, styles.luvluCard]}><Text style={styles.helper}>🦚 Luvlu whisper: Pick one doorway, take one breath, and begin with a peaceful heart.</Text></View>

    <View style={[visualStyles.heroCard, styles.storyWorldEntry]}>
      <Text style={styles.heroTitle}>Explore Story World</Text>
      <Text style={styles.sub}>Choose Krishna, Ganesha, Ramayana, Hanuman, Bedtime, Values, and Festival stories.</Text>
      <Link href='/(child)/worlds' style={visualStyles.primaryCta}>Open Story World</Link>
    </View>

    <Text style={visualStyles.sectionHeader}>Choose your path</Text>
    <View style={styles.grid}>
      {paths.map((p) => <Pressable key={p.title} onPress={() => router.push(p.href as never)} style={({ pressed }) => [visualStyles.doorwayCard, styles.card, { backgroundColor: p.bg, width: '48%' }, pressed && styles.cardPressed]}>
        <View style={styles.cardStack}>
          <Text style={styles.cardIcon}>{p.icon}</Text>
          <Text style={styles.cardTitle}>{p.title}</Text>
          <Text style={styles.cardCopy}>{p.copy}</Text>
        </View>
      </Pressable>)}
    </View>

    <View style={styles.parentWrap}><Link href='/(parent)/dashboard' style={visualStyles.secondaryCta}>Open Parent Space</Link></View>
  </ScrollView>

  {showThreshold && <View style={styles.overlay}><View style={[visualStyles.heroCard, { alignItems: 'center' }]}><Text style={styles.headline}>Enter gently</Text><Text style={styles.sub}>Take one breath before story time.</Text><Text onPress={() => { setShowThreshold(false); markThresholdEntered().catch(() => undefined); }} style={[visualStyles.primaryCta, { marginTop: 12 }]}>Enter Today's Journey</Text></View></View>}
  </SafeAreaView>;
}

const styles = StyleSheet.create({ content:{padding:16,gap:14,paddingBottom:36}, homeHero:{backgroundColor:'#FFE4BF',paddingVertical:22}, brandMark:{fontSize:32}, greeting:{fontSize:17,fontWeight:'800',color:visualTokens.color.mutedBrown}, headline:{fontSize:31,lineHeight:36,fontWeight:'900',color:visualTokens.color.warmBrown}, sub:{fontSize:16,lineHeight:23,color:visualTokens.color.mutedBrown}, luvluCard:{backgroundColor:'#DFF1FF'}, helper:{fontSize:14,lineHeight:20,color:'#1F4A75',fontWeight:'700'}, storyWorldEntry:{backgroundColor:'#FBEBC9',paddingVertical:22}, heroTitle:{fontSize:30,fontWeight:'900',color:visualTokens.color.warmBrown}, grid:{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',gap:12}, card:{borderRadius:24,shadowOpacity:0.12,minHeight:170,paddingVertical:18}, cardPressed:{transform:[{scale:0.98}],shadowOpacity:0.18}, cardStack:{gap:7}, cardIcon:{fontSize:32}, cardTitle:{fontSize:19,fontWeight:'900',color:visualTokens.color.warmBrown,marginTop:2}, cardCopy:{fontSize:14,lineHeight:19,color:visualTokens.color.mutedBrown}, parentWrap:{paddingTop:6}, overlay:{...StyleSheet.absoluteFillObject,backgroundColor:'rgba(255,245,233,0.96)',justifyContent:'center',padding:20} });

export default function TodayScreen() { return <RouteErrorBoundary surfaceName='Child Home' audience='child' primaryActionHref='/onboarding' primaryActionLabel='Go to Onboarding'><TodayScreenContent /></RouteErrorBoundary>; }
