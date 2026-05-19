import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'expo-router';
import { AppState, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import RouteErrorBoundary from '@/components/RouteErrorBoundary';
import { getOnboardingState, subscribeOnboardingState } from '@/lib/onboardingState';
import { markThresholdEntered, shouldShowThreshold } from '@/lib/thresholdState';
import { visualStyles, visualTokens } from '@/design/visualSystem';

function TodayScreenContent() {
  const [nickname, setNickname] = useState<string | null>(getOnboardingState().profile?.nickname || null);
  const [showThreshold, setShowThreshold] = useState(false);
  const name = nickname?.trim() || 'Little One';

  useEffect(() => subscribeOnboardingState(() => setNickname(getOnboardingState().profile?.nickname || null)), []);
  const refreshThresholdVisibility = useCallback(() => shouldShowThreshold().then(setShowThreshold).catch(() => setShowThreshold(true)), []);
  useFocusEffect(useCallback(() => { refreshThresholdVisibility(); }, [refreshThresholdVisibility]));
  useEffect(() => { const s = AppState.addEventListener('change', (n) => n === 'active' && refreshThresholdVisibility()); return () => s.remove(); }, [refreshThresholdVisibility]);

  const paths = useMemo(() => [
    { icon: '📖', title: 'Story World', copy: 'Choose a warm doorway.', href: '/(child)/worlds', bg: visualTokens.color.skySoft },
    { icon: '🛤️', title: 'Journeys', copy: 'Follow one gentle path.', href: '/(child)/worlds', bg: '#F9EED8' },
    { icon: '🌙', title: 'Bedtime Stories', copy: 'Soft stories for night.', href: '/(child)/bedtime', bg: '#E8E8FF' },
    { icon: '🪔', title: 'My Treasures', copy: 'Values, diyas, blessings.', href: '/(child)/treasures', bg: visualTokens.color.leafSoft }
  ], []);

  return <SafeAreaView style={visualStyles.screen}><ScrollView contentContainerStyle={styles.content}>
    <View style={[visualStyles.heroCard, { backgroundColor: '#FFEFD1' }]}>
      <Text style={styles.greeting}>Namaste, {name}</Text>
      <Text style={styles.headline}>What shall we discover today?</Text>
      <Text style={styles.sub}>A warm story world is ready with gentle values and calm moments.</Text>
    </View>

    <View style={[visualStyles.heroCard, { backgroundColor: '#DDEEFF' }]}>
      <Text style={styles.heroIcon}>🏔️</Text>
      <Text style={styles.heroTitle}>Continue Journey</Text>
      <Text style={styles.sub}>Start with one 5–8 minute story and light a small diya of courage or kindness.</Text>
      <Link href='/(child)/worlds' style={visualStyles.primaryCta}>Open Story World</Link>
    </View>

    <View style={visualStyles.helperBubble}><Text style={styles.helper}>🦚 Luvlu says: Let us choose one story doorway with a calm heart.</Text></View>

    <Text style={visualStyles.sectionHeader}>Choose your path</Text>
    <View style={styles.grid}>
      {paths.map((p) => <Link key={p.title} href={p.href as never} style={[visualStyles.doorwayCard, { backgroundColor: p.bg, width: '48%' }]}>
        <Text style={styles.cardIcon}>{p.icon}</Text><Text style={styles.cardTitle}>{p.title}</Text><Text style={styles.cardCopy}>{p.copy}</Text>
      </Link>)}
    </View>

    <View style={styles.parentWrap}><Link href='/(parent)/dashboard' style={visualStyles.secondaryCta}>Open Parent Space</Link></View>
  </ScrollView>

  {showThreshold && <View style={styles.overlay}><View style={[visualStyles.heroCard, { alignItems: 'center' }]}><Text style={styles.headline}>Enter gently</Text><Text style={styles.sub}>Take one breath before story time.</Text><Text onPress={() => { setShowThreshold(false); markThresholdEntered().catch(() => undefined); }} style={[visualStyles.primaryCta, { marginTop: 12 }]}>Enter Today&apos;s Journey</Text></View></View>}
  </SafeAreaView>;
}

const styles = StyleSheet.create({ content:{padding:16,gap:12,paddingBottom:32}, greeting:{fontSize:16,fontWeight:'800',color:visualTokens.color.mutedBrown}, headline:{fontSize:34,lineHeight:38,fontWeight:'900',color:visualTokens.color.warmBrown}, sub:{fontSize:15,lineHeight:22,color:visualTokens.color.mutedBrown}, heroIcon:{fontSize:44}, heroTitle:{fontSize:28,fontWeight:'900',color:visualTokens.color.warmBrown}, helper:{fontSize:13,color:visualTokens.color.mutedBrown,fontWeight:'700'}, grid:{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',gap:10}, cardIcon:{fontSize:30}, cardTitle:{fontSize:18,fontWeight:'900',color:visualTokens.color.warmBrown,marginTop:6}, cardCopy:{fontSize:13,lineHeight:18,color:visualTokens.color.mutedBrown,marginTop:4}, parentWrap:{paddingTop:4}, overlay:{...StyleSheet.absoluteFillObject,backgroundColor:'rgba(255,245,233,0.96)',justifyContent:'center',padding:20} });

export default function TodayScreen() { return <RouteErrorBoundary surfaceName='Child Home' audience='child' primaryActionHref='/onboarding' primaryActionLabel='Go to Onboarding'><TodayScreenContent /></RouteErrorBoundary>; }
