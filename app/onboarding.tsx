import { ReactElement, useEffect, useMemo, useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { tokens } from '@/design/tokens';
import RouteErrorBoundary from '@/components/RouteErrorBoundary';
import { AgeBand, BedtimePreference, ChildLanguage, completeOnboarding, FavoriteCharacter, getOnboardingState, loadOnboardingState, OnboardingProfile } from '@/lib/onboardingState';
import { ChildAgeBand, ChildProfile, ParentIntent, getChildProfile, saveChildProfile, skipChildProfileSetup } from '@/lib/childProfile';

type Step = { title: string; subtitle: string; render: () => ReactElement };
const ageBands: AgeBand[] = ['0-2', '3-5', '6-8', '9-12'];
const languages: ChildLanguage[] = ['English', 'Hindi', 'Tamil', 'Bengali'];
const characters: FavoriteCharacter[] = ['Krishna', 'Hanuman', 'Ganesha', 'Sita-Rama'];
const bedtimes: BedtimePreference[] = ['Quick (5 min)', 'Cozy (10 min)', 'Dreamy (15 min)'];
const childAgeBands: ChildAgeBand[] = ['3-5', '6-8', '9-12', 'prefer-not-to-say'];
const parentIntents: ParentIntent[] = ['bedtime-calm', 'values-learning', 'festival-culture-learning', 'daily-story-habit', 'just-exploring'];

const defaultProfile: OnboardingProfile = { childName: '', nickname: '', ageBand: '3-5', language: 'English', favoriteCharacter: 'Krishna', bedtimePreference: 'Cozy (10 min)' };

function OnboardingScreenContent() {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const [profile, setProfile] = useState<OnboardingProfile>(defaultProfile);
  const [childNameOrNickname, setChildNameOrNickname] = useState('');
  const [childAgeBand, setChildAgeBand] = useState<ChildAgeBand | undefined>();
  const [parentIntent, setParentIntent] = useState<ParentIntent | undefined>();
  const [savedChildProfile, setSavedChildProfile] = useState<ChildProfile | null>(null);
  const [isChildProfileHydrated, setIsChildProfileHydrated] = useState(false);

  useEffect(() => {
    loadOnboardingState().then((state) => { if (state.profile) setProfile(state.profile); });
    getChildProfile().then((saved) => {
      setSavedChildProfile(saved);
      if (saved.childNameOrNickname) setChildNameOrNickname(saved.childNameOrNickname);
      if (saved.ageBand) setChildAgeBand(saved.ageBand);
      if (saved.parentIntent) setParentIntent(saved.parentIntent);
    }).catch(() => undefined).finally(() => setIsChildProfileHydrated(true));
  }, []);

  const steps: Step[] = useMemo(() => [
    { title: 'Welcome, Parent', subtitle: 'You guide the account. Your child explores safely inside your protected family space.', render: () => <Text style={styles.bodyText}>No child public profile, no open chat, no ads, and no public score lists.</Text> },
    { title: 'Parental Consent', subtitle: 'Consent flow placeholder', render: () => <Text style={styles.bodyText}>Consent verification will be connected in a future sprint.</Text> },
    { title: 'Create Child Profile', subtitle: 'What is your child\'s name?', render: () => <TextInput accessibilityLabel='Child name' value={profile.childName} onChangeText={(value: string) => setProfile((p) => ({ ...p, childName: value }))} placeholder='Child name' style={styles.input} /> },
    { title: 'Choose Nickname', subtitle: 'How should we greet your child?', render: () => <TextInput accessibilityLabel='Nickname' value={profile.nickname} onChangeText={(value: string) => setProfile((p) => ({ ...p, nickname: value }))} placeholder='Nickname' style={styles.input} /> },
    { title: 'Age Band', subtitle: 'Tailor the journey by age.', render: () => <ChoiceList items={ageBands} selected={profile.ageBand} onPick={(ageBand) => setProfile((p) => ({ ...p, ageBand }))} /> },
    { title: 'Preferred Language', subtitle: 'Choose learning language.', render: () => <ChoiceList items={languages} selected={profile.language} onPick={(language) => setProfile((p) => ({ ...p, language }))} /> },
    { title: 'Favourite Character', subtitle: 'Choose a guide friend.', render: () => <ChoiceList items={characters} selected={profile.favoriteCharacter} onPick={(favoriteCharacter) => setProfile((p) => ({ ...p, favoriteCharacter }))} /> },
    { title: 'Bedtime Preference', subtitle: 'Set evening rhythm.', render: () => <ChoiceList items={bedtimes} selected={profile.bedtimePreference} onPick={(bedtimePreference) => setProfile((p) => ({ ...p, bedtimePreference }))} /> },
    {
      title: 'Help us gently shape the journey',
      subtitle: 'This stays on this device in the current version. You can skip this and start exploring.',
      render: () => <View style={{ gap: 10 }}>
        <Text style={styles.bodyText}>Use a nickname if you prefer. Please avoid sensitive child information.</Text>
        <TextInput accessibilityLabel='Child nickname for local profile (optional)' value={childNameOrNickname} onChangeText={setChildNameOrNickname} placeholder='Nickname (optional)' style={styles.input} />
        <ChoiceList items={childAgeBands} selected={childAgeBand} onPick={setChildAgeBand} emptyLabel='Choose broad age band (optional)' />
        <ChoiceList items={parentIntents} selected={parentIntent} onPick={setParentIntent} emptyLabel='Choose parent intent (optional)' />
      </View>
    }
  ], [profile, childNameOrNickname, childAgeBand, parentIntent]);

  const current = steps[stepIndex]; const isLast = stepIndex === steps.length - 1; const isEditing = !!getOnboardingState().profile;
  const finishFlow = async (skipChildSetup: boolean) => {
    if (!isChildProfileHydrated) return;

    await completeOnboarding(profile);
    if (skipChildSetup) {
      await skipChildProfileSetup();
    } else {
      const mergedName = childNameOrNickname.trim() || savedChildProfile?.childNameOrNickname;
      const mergedAgeBand = childAgeBand ?? savedChildProfile?.ageBand;
      const mergedIntent = parentIntent ?? savedChildProfile?.parentIntent;
      await saveChildProfile({ childNameOrNickname: mergedName, ageBand: mergedAgeBand, parentIntent: mergedIntent });
    }
    router.replace('/(child)/today');
  };

  return <SafeAreaView style={styles.screen}><View style={styles.card}><Text style={styles.stepCount}>Step {stepIndex + 1} of {steps.length}</Text><Text style={styles.title}>{current.title}</Text><Text style={styles.subtitle}>{current.subtitle}</Text><View style={styles.content}>{current.render()}</View><View style={styles.row}><TouchableOpacity accessibilityRole='button' accessibilityLabel='Go to previous onboarding step' disabled={stepIndex === 0} onPress={() => setStepIndex((s) => Math.max(0, s - 1))} style={[styles.button, styles.secondaryButton, stepIndex === 0 && styles.disabled]}><Text style={styles.secondaryText}>Back</Text></TouchableOpacity><TouchableOpacity accessibilityRole='button' accessibilityLabel={isLast ? 'Finish onboarding' : 'Go to next onboarding step'} disabled={isLast && !isChildProfileHydrated} onPress={async () => { if (isLast) { await finishFlow(false); return; } setStepIndex((s) => s + 1); }} style={[styles.button, styles.primaryButton, isLast && !isChildProfileHydrated && styles.disabled]}><Text style={styles.primaryText}>{isLast ? (isEditing ? 'Save & Return to Child Home' : 'Enter Child Home') : 'Next'}</Text></TouchableOpacity></View>{isLast && <TouchableOpacity accessibilityRole='button' accessibilityLabel='Skip optional child setup and continue' disabled={!isChildProfileHydrated} onPress={async () => finishFlow(true)}><Text style={styles.parentLink}>Skip optional setup</Text></TouchableOpacity>}<Link href='/(parent)/dashboard' style={styles.parentLink} accessibilityRole='link' accessibilityLabel='Go to Parent Dashboard'>Go to Parent Dashboard</Link></View></SafeAreaView>;
}

function ChoiceList<T extends string>({ items, selected, onPick, emptyLabel }: { items: T[]; selected?: T; onPick: (item: T) => void; emptyLabel?: string }) {
  return <View style={{ gap: 10 }}>{emptyLabel ? <Text style={styles.helperText}>{emptyLabel}</Text> : null}{items.map((item) => <TouchableOpacity key={item} accessibilityRole='button' accessibilityLabel={`Select ${item}`} onPress={() => onPick(item)} style={[styles.choice, selected === item && styles.choiceSelected]}><Text style={[styles.choiceText, selected === item && styles.choiceTextSelected]}>{item}</Text></TouchableOpacity>)}</View>;
}

const styles = StyleSheet.create({ screen: { flex: 1, backgroundColor: '#FDF4E8', padding: tokens.spacing.lg, justifyContent: 'center' }, card: { backgroundColor: '#FFFDF9', borderRadius: 30, padding: tokens.spacing.lg, gap: tokens.spacing.sm }, stepCount: { color: tokens.colors.peacock, fontWeight: '700' }, title: { fontSize: 30, fontWeight: '800', color: tokens.colors.textPrimary }, subtitle: { fontSize: 16, color: '#5C4A3B', lineHeight: 22 }, bodyText: { fontSize: 16, color: '#5A4838' }, content: { marginVertical: tokens.spacing.md }, input: { backgroundColor: '#FFF6EC', borderRadius: tokens.radius.button, paddingHorizontal: 18, paddingVertical: 14, fontSize: 17 }, row: { flexDirection: 'row', gap: tokens.spacing.sm }, button: { minHeight: tokens.touchTarget, borderRadius: tokens.radius.button, flex: 1, alignItems: 'center', justifyContent: 'center' }, secondaryButton: { backgroundColor: '#E9EEF6' }, primaryButton: { backgroundColor: tokens.colors.saffron }, secondaryText: { fontWeight: '700', color: tokens.colors.midnight }, primaryText: { fontWeight: '700', color: '#fff' }, disabled: { opacity: 0.4 }, parentLink: { marginTop: 4, textAlign: 'center', color: tokens.colors.peacock, fontWeight: '600' }, choice: { backgroundColor: '#FFF5E7', borderRadius: 18, minHeight: tokens.touchTarget, justifyContent: 'center', paddingHorizontal: 16 }, choiceSelected: { backgroundColor: '#FFD9AE' }, choiceText: { fontSize: 16, color: '#5A4636', fontWeight: '600' }, choiceTextSelected: { color: '#3C250F' }, helperText: { color: '#6A513D', fontSize: 13, fontWeight: '600' } });

export default function OnboardingScreen() { return <RouteErrorBoundary surfaceName='Onboarding' audience='parent'><OnboardingScreenContent /></RouteErrorBoundary>; }
