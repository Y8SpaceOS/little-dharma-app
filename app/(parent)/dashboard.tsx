import { useCallback, useEffect, useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { tokens } from '@/design/tokens';
import RouteErrorBoundary from '@/components/RouteErrorBoundary';
import CalmLoadingState from '@/components/CalmLoadingState';
import { getOnboardingState, resetOnboarding, subscribeOnboardingState, type OnboardingProfile } from '@/lib/onboardingState';
import { ChildProfile, clearChildProfile, getChildProfile } from '@/lib/childProfile';
import { getParentDashboardSnapshot } from '@/services/progress';

type ParentDashboardSummary = Awaited<ReturnType<typeof getParentDashboardSnapshot>>;
const initialSummary = { currentWorld:'Vrindavan', storiesCompleted:0, totalStories:0, completionPercent:0, latestCompletedStoryTitle:'—', latestEarnedBadge:'—', latestValueLearned:'—', latestCarryingWord:'—', latestRitualCompleted:'—', latestRitualParentMeaning:'', latestReflectionPrompt:'—', suggestedNextJourney:'—', dailyRitualCopy:'', reflectionBridgeCopy:'', ritualLoopExplanation:'', privacyPromise:'', weeklyProgress:{ completedDays:0, remainingDays:21, completionLabel:'0/21 stories completed', practicedValues:[], parentSummary:'' } } as ParentDashboardSummary;

function DashboardScreenContent() {
  const router = useRouter();
  const [profile, setProfile] = useState<OnboardingProfile | null>(getOnboardingState().profile);
  const [summary, setSummary] = useState<ParentDashboardSummary>(initialSummary);
  const [childProfile, setChildProfile] = useState<ChildProfile | null>(null);
  const [isSummaryLoading, setIsSummaryLoading] = useState(true);
  useEffect(() => subscribeOnboardingState(() => setProfile(getOnboardingState().profile)), []);
  const refreshSummary = useCallback(() => {
    setIsSummaryLoading(true);
    getParentDashboardSnapshot().then(setSummary).catch(() => null).finally(() => setIsSummaryLoading(false));
  }, []);
  useFocusEffect(useCallback(() => { refreshSummary(); getChildProfile().then(setChildProfile).catch(() => setChildProfile(null)); }, [refreshSummary]));

  const onReset = () => Alert.alert('Reset onboarding?', 'This clears the local child profile on this device and returns to the welcome screen.', [
    { text: 'Cancel', style: 'cancel' },
    { text: 'Reset', style: 'destructive', onPress: async () => { await Promise.all([resetOnboarding(), clearChildProfile()]); router.replace('/'); } }
  ]);

  const valuesLine = summary.weeklyProgress.practicedValues.length > 0 ? summary.weeklyProgress.practicedValues.join(' • ') : 'No values recorded yet. Your next story will begin this values journey.';

  return <SafeAreaView style={styles.screen}><ScrollView contentContainerStyle={styles.content}>
    <Text style={styles.heading}>Parent Dashboard</Text>
    <Text style={styles.subheading}>A calm, private view of your child’s journey as a story of growth.</Text>

    {isSummaryLoading && <CalmLoadingState surfaceName='Parent Dashboard summary' audience='parent' variant='card' />}

    <View style={styles.card}><Text style={styles.sectionTitle}>Family snapshot</Text>
      <Text style={styles.childName}>{profile?.childName || 'Not set'} ({profile?.ageBand || 'n/a'})</Text>
      <Text style={styles.detail}>Current world: {summary.currentWorld}</Text>
    </View>

    <View style={styles.card}><Text style={styles.sectionTitle}>Child profile and age setup</Text>
      <Text style={styles.detail}>{childProfile?.childNameOrNickname ? `Nickname: ${childProfile.childNameOrNickname}` : 'Nickname: not set yet (optional).'}</Text>
      <Text style={styles.detail}>{childProfile?.ageBand ? `Broad age band: ${childProfile.ageBand}` : 'Broad age band: not set yet (optional).'}</Text>
      <Text style={styles.detail}>{childProfile?.parentIntent ? `Parent intent: ${childProfile.parentIntent}` : 'Parent intent: not set yet (optional).'}</Text>
      <Text style={styles.detail}>This setup stays local on this device in the current version.</Text>
      <Link href='/onboarding' style={styles.editLink} accessibilityRole='link' accessibilityLabel='Revisit child profile and age setup'>Revisit child setup</Link>
    </View>

    <View style={styles.card}><Text style={styles.sectionTitle}>Your child&apos;s Vrindavan journey so far</Text>
      <Text style={styles.progressMain}>{summary.weeklyProgress.completionLabel}</Text>
      <Text style={styles.progressSub}>{summary.completionPercent}% complete of the 21-story path</Text>
      <Text style={styles.detail}>{summary.weeklyProgress.parentSummary}</Text>
      <Text style={styles.detail}><Text style={styles.label}>Next story:</Text> {summary.suggestedNextJourney}</Text></View>

    <View style={styles.card}><Text style={styles.sectionTitle}>Values practiced</Text>
      <Text style={styles.detail}>{valuesLine}</Text>
      <Text style={styles.detail}><Text style={styles.label}>Current carrying word:</Text> {summary.latestCarryingWord}</Text></View>

    <View style={styles.card}><Text style={styles.sectionTitle}>Latest meaningful memory</Text>
      <Text style={styles.detail}><Text style={styles.label}>Story:</Text> {summary.latestCompletedStoryTitle}</Text>
      <Text style={styles.detail}><Text style={styles.label}>Value:</Text> {summary.latestValueLearned}</Text>
      <Text style={styles.detail}><Text style={styles.label}>Ritual moment:</Text> {summary.latestRitualCompleted}</Text>
      <Text style={styles.detail}><Text style={styles.label}>Badge:</Text> {summary.latestEarnedBadge}</Text></View>

    <View style={styles.card}><Text style={styles.sectionTitle}>Tonight&apos;s parent conversation prompt</Text>
      <Text style={styles.prompt}>{summary.latestReflectionPrompt}</Text>
      <Text style={styles.ritual}>{summary.latestRitualParentMeaning}</Text></View>

    <View style={styles.card}><Text style={styles.sectionTitle}>Continue gently</Text>
      <Text style={styles.ritual}>{summary.dailyRitualCopy}</Text>
      <Text style={styles.ritual}>{summary.reflectionBridgeCopy}</Text>
      <Text style={styles.ritual}>{summary.ritualLoopExplanation}</Text></View>

    <View style={styles.privacyCard}><Text style={styles.privacyTitle}>Privacy note</Text><Text style={styles.privacyText}>{summary.privacyPromise}</Text></View>

    <Link href='/(parent)/controls' style={styles.button} accessibilityRole='link' accessibilityLabel='Open Parent Controls'>Parent Controls — Review child profile, helper prompts, and local privacy settings</Link>
    <Link href='/(parent)/privacy' style={styles.button} accessibilityRole='link' accessibilityLabel='Open Trust and Privacy Center'>Open Trust & Privacy Center</Link>
    <Link href='/(parent)/feedback' style={styles.button} accessibilityRole='link' accessibilityLabel='Open Parent Feedback Capture'>Open Parent Feedback Capture</Link>
    <Link href='/onboarding' style={styles.button} accessibilityRole='link' accessibilityLabel='Edit onboarding settings'>Edit Onboarding</Link>
    <Text onPress={onReset} style={styles.reset} accessibilityRole='button' accessibilityLabel='Reset local onboarding state'>Reset Local Onboarding State</Text>
    <Link href='/(child)/today' style={styles.childLink} accessibilityRole='link' accessibilityLabel='Switch to Child Home'>Switch to Child Home</Link>
  </ScrollView></SafeAreaView>;
}

const styles = StyleSheet.create({ editLink:{color:tokens.colors.peacock,fontWeight:'700',marginTop:4}, screen:{flex:1,backgroundColor:'#EFF4FF'}, content:{padding:tokens.spacing.lg,gap:tokens.spacing.md,paddingBottom:40}, heading:{fontSize:32,fontWeight:'800',color:'#1E2C50'}, subheading:{color:'#4D5F88',fontSize:15,marginTop:-6}, card:{backgroundColor:'#FFFFFF',borderRadius:22,padding:tokens.spacing.lg,gap:8,borderWidth:1,borderColor:'#E5EBFA'}, sectionTitle:{color:'#445378',fontWeight:'800',letterSpacing:0.3,textTransform:'uppercase',fontSize:12}, childName:{color:'#1E2C50',fontSize:20,fontWeight:'800'}, detail:{color:'#2B3550',fontSize:15,lineHeight:22}, label:{fontWeight:'700',color:'#1E2C50'}, progressMain:{color:'#1F2F59',fontSize:22,fontWeight:'800'}, progressSub:{color:'#5A6A92',fontWeight:'600'}, ritual:{color:'#4F5F7C',fontStyle:'italic',lineHeight:22}, prompt:{color:'#24345E',fontSize:16,lineHeight:24,fontWeight:'600'}, privacyCard:{backgroundColor:'#1E2C50',borderRadius:22,padding:tokens.spacing.lg,gap:8}, privacyTitle:{color:'#DCE8FF',fontWeight:'800',textTransform:'uppercase',fontSize:12,letterSpacing:0.3}, privacyText:{color:'#FFFFFF',lineHeight:22,fontSize:15}, button:{backgroundColor:'#DCE8FF',padding:16,borderRadius:tokens.radius.button,textAlign:'center',color:'#1E2C50',fontWeight:'700'}, reset:{textAlign:'center',color:'#8A2F2F',fontWeight:'600'}, childLink:{textAlign:'center',color:tokens.colors.peacock,fontWeight:'700'} });

export default function DashboardScreen() {
  return (
    <RouteErrorBoundary surfaceName='Parent Dashboard' audience='parent' primaryActionHref='/(child)/today' primaryActionLabel='Go to Child Home'>
      <DashboardScreenContent />
    </RouteErrorBoundary>
  );
}
