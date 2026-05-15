import { useMemo, useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { tokens } from '@/design/tokens';
import { BedtimePreference, ChildLanguage, completeOnboarding, FavoriteCharacter, OnboardingProfile, AgeBand } from '@/lib/onboardingState';

type Step = {
  title: string;
  subtitle: string;
  render: () => JSX.Element;
};

const ageBands: AgeBand[] = ['0-2', '3-5', '6-8', '9-12'];
const languages: ChildLanguage[] = ['English', 'Hindi', 'Tamil', 'Bengali'];
const characters: FavoriteCharacter[] = ['Krishna', 'Hanuman', 'Ganesha', 'Sita-Rama'];
const bedtimes: BedtimePreference[] = ['Quick (5 min)', 'Cozy (10 min)', 'Dreamy (15 min)'];

export default function OnboardingScreen() {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const [profile, setProfile] = useState<OnboardingProfile>({
    childName: '',
    nickname: '',
    ageBand: '3-5',
    language: 'English',
    favoriteCharacter: 'Krishna',
    bedtimePreference: 'Cozy (10 min)'
  });

  const steps: Step[] = useMemo(() => [
    {
      title: 'Welcome, Parent',
      subtitle: 'You guide the account. Your child explores safely inside your protected family space.',
      render: () => <Text style={styles.bodyText}>No child public profile, no open chat, no ads, and no public leaderboard.</Text>
    },
    {
      title: 'Parental Consent',
      subtitle: 'Consent flow placeholder',
      render: () => <Text style={styles.bodyText}>Consent verification will be connected in a future sprint.</Text>
    },
    {
      title: 'Create Child Profile',
      subtitle: 'What is your child\'s name?',
      render: () => <TextInput value={profile.childName} onChangeText={(value) => setProfile((p) => ({ ...p, childName: value }))} placeholder='Child name' style={styles.input} />
    },
    {
      title: 'Choose Nickname',
      subtitle: 'How should we greet your child?',
      render: () => <TextInput value={profile.nickname} onChangeText={(value) => setProfile((p) => ({ ...p, nickname: value }))} placeholder='Nickname' style={styles.input} />
    },
    { title: 'Age Band', subtitle: 'Tailor the journey by age.', render: () => <ChoiceList items={ageBands} selected={profile.ageBand} onPick={(ageBand) => setProfile((p) => ({ ...p, ageBand }))} /> },
    { title: 'Preferred Language', subtitle: 'Choose learning language.', render: () => <ChoiceList items={languages} selected={profile.language} onPick={(language) => setProfile((p) => ({ ...p, language }))} /> },
    { title: 'Favourite Character', subtitle: 'Choose a guide friend.', render: () => <ChoiceList items={characters} selected={profile.favoriteCharacter} onPick={(favoriteCharacter) => setProfile((p) => ({ ...p, favoriteCharacter }))} /> },
    { title: 'Bedtime Preference', subtitle: 'Set evening rhythm.', render: () => <ChoiceList items={bedtimes} selected={profile.bedtimePreference} onPick={(bedtimePreference) => setProfile((p) => ({ ...p, bedtimePreference }))} /> }
  ], [profile]);

  const current = steps[stepIndex];
  const isLast = stepIndex === steps.length - 1;

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.stepCount}>Step {stepIndex + 1} of {steps.length}</Text>
        <Text style={styles.title}>{current.title}</Text>
        <Text style={styles.subtitle}>{current.subtitle}</Text>
        <View style={styles.content}>{current.render()}</View>
        <View style={styles.row}>
          <TouchableOpacity disabled={stepIndex === 0} onPress={() => setStepIndex((s) => Math.max(0, s - 1))} style={[styles.button, styles.secondaryButton, stepIndex === 0 && styles.disabled]}>
            <Text style={styles.secondaryText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (isLast) {
                completeOnboarding(profile);
                router.replace('/(child)/today');
                return;
              }
              setStepIndex((s) => s + 1);
            }}
            style={[styles.button, styles.primaryButton]}
          >
            <Text style={styles.primaryText}>{isLast ? 'Enter Child Home' : 'Next'}</Text>
          </TouchableOpacity>
        </View>
        <Link href='/(parent)/dashboard' style={styles.parentLink}>Go to Parent Dashboard</Link>
      </View>
    </SafeAreaView>
  );
}

function ChoiceList<T extends string>({ items, selected, onPick }: { items: T[]; selected: T; onPick: (item: T) => void }) {
  return (
    <View style={{ gap: 10 }}>
      {items.map((item) => (
        <TouchableOpacity key={item} onPress={() => onPick(item)} style={[styles.choice, selected === item && styles.choiceSelected]}>
          <Text style={[styles.choiceText, selected === item && styles.choiceTextSelected]}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#FDF4E8', padding: tokens.spacing.lg, justifyContent: 'center' },
  card: { backgroundColor: '#FFFDF9', borderRadius: 30, padding: tokens.spacing.lg, gap: tokens.spacing.sm },
  stepCount: { color: tokens.colors.peacock, fontWeight: '700' },
  title: { fontSize: 30, fontWeight: '800', color: tokens.colors.textPrimary },
  subtitle: { fontSize: 16, color: '#5C4A3B', lineHeight: 22 },
  bodyText: { fontSize: 16, color: '#5A4838' },
  content: { marginVertical: tokens.spacing.md },
  input: { backgroundColor: '#FFF6EC', borderRadius: tokens.radius.button, paddingHorizontal: 18, paddingVertical: 14, fontSize: 17 },
  row: { flexDirection: 'row', gap: tokens.spacing.sm },
  button: { minHeight: tokens.touchTarget, borderRadius: tokens.radius.button, flex: 1, alignItems: 'center', justifyContent: 'center' },
  secondaryButton: { backgroundColor: '#E9EEF6' },
  primaryButton: { backgroundColor: tokens.colors.saffron },
  secondaryText: { fontWeight: '700', color: tokens.colors.midnight },
  primaryText: { fontWeight: '700', color: '#fff' },
  disabled: { opacity: 0.4 },
  parentLink: { marginTop: 4, textAlign: 'center', color: tokens.colors.peacock, fontWeight: '600' },
  choice: { backgroundColor: '#FFF5E7', borderRadius: 18, minHeight: tokens.touchTarget, justifyContent: 'center', paddingHorizontal: 16 },
  choiceSelected: { backgroundColor: '#FFD9AE' },
  choiceText: { fontSize: 16, color: '#5A4636', fontWeight: '600' },
  choiceTextSelected: { color: '#3C250F' }
});
