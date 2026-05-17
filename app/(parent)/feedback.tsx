import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'expo-router';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { tokens } from '@/design/tokens';
import RouteErrorBoundary from '@/components/RouteErrorBoundary';
import { getOnboardingState } from '@/lib/onboardingState';
import { EMPTY_PARENT_FEEDBACK_DRAFT, loadParentFeedbackDraft, saveParentFeedbackDraft, type ParentFeedbackDraft, type ParentFeedbackSentiment } from '@/lib/parentFeedback';

const sentimentOptions: ParentFeedbackSentiment[] = ['Very positive', 'Mostly positive', 'Mixed', 'Concerned'];

function ParentFeedbackContent() {
  const defaultAgeBand = getOnboardingState().profile?.ageBand ?? '';
  const [draft, setDraft] = useState<ParentFeedbackDraft>({ ...EMPTY_PARENT_FEEDBACK_DRAFT, childAgeBand: defaultAgeBand });
  const [saveMessage, setSaveMessage] = useState('');
  const hasUserEditedRef = useRef(false);

  useEffect(() => {
    let isMounted = true;
    loadParentFeedbackDraft().then((loaded) => {
      if (!isMounted || hasUserEditedRef.current) return;
      setDraft({ ...loaded, childAgeBand: loaded.childAgeBand || defaultAgeBand });
    }).catch(() => null);

    return () => {
      isMounted = false;
    };
  }, [defaultAgeBand]);

  const canSave = useMemo(() => {
    return Boolean(draft.childEnjoyed.trim() || draft.confusingMoments.trim() || draft.safetyTrustConcern.trim() || draft.authenticityConcern.trim() || draft.bugLayoutIssue.trim());
  }, [draft]);

  const setField = <K extends keyof ParentFeedbackDraft>(key: K, value: ParentFeedbackDraft[K]) => {
    hasUserEditedRef.current = true;
    setDraft((prev) => ({ ...prev, [key]: value }));
    setSaveMessage('');
  };

  const onSave = async () => {
    const saved = await saveParentFeedbackDraft({
      parentName: draft.parentName,
      childAgeBand: draft.childAgeBand,
      childEnjoyed: draft.childEnjoyed,
      confusingMoments: draft.confusingMoments,
      safetyTrustConcern: draft.safetyTrustConcern,
      authenticityConcern: draft.authenticityConcern,
      bugLayoutIssue: draft.bugLayoutIssue,
      overallSentiment: draft.overallSentiment,
      permissionToContact: draft.permissionToContact,
      contactDetail: draft.contactDetail
    });
    setDraft(saved);
    setSaveMessage(`Saved on this device at ${new Date(saved.updatedAt).toLocaleString()}. Ready to share manually with the founder when helpful.`);
  };

  return <SafeAreaView style={styles.screen}><ScrollView contentContainerStyle={styles.content}>
    <Text style={styles.heading}>Parent Feedback Capture</Text>
    <Text style={styles.subheading}>This is for parent feedback, not child chat. No public profile or community post is created.</Text>

    <View style={styles.noteCard}>
      <Text style={styles.noteLine}>Feedback is kept on this device in this version.</Text>
      <Text style={styles.noteLine}>Only share personal contact details if you are comfortable.</Text>
      <Text style={styles.noteLine}>Please do not include sensitive child information.</Text>
    </View>

    <TextInput style={styles.input} placeholder='Parent name or nickname (optional)' value={draft.parentName} onChangeText={(text) => setField('parentName', text)} accessibilityLabel='Parent name or nickname optional' accessibilityHint='Optional parent identifier for private beta notes'/>
    <TextInput style={styles.input} placeholder='Child age band (optional)' value={draft.childAgeBand} onChangeText={(text) => setField('childAgeBand', text)} accessibilityLabel='Child age band optional' />
    <TextInput style={styles.input} placeholder='What did your child enjoy?' value={draft.childEnjoyed} onChangeText={(text) => setField('childEnjoyed', text)} accessibilityLabel='What child enjoyed field' multiline />
    <TextInput style={styles.input} placeholder='What felt confusing?' value={draft.confusingMoments} onChangeText={(text) => setField('confusingMoments', text)} accessibilityLabel='Confusing moments field' multiline />
    <TextInput style={styles.input} placeholder='Any safety or trust concern?' value={draft.safetyTrustConcern} onChangeText={(text) => setField('safetyTrustConcern', text)} accessibilityLabel='Safety or trust concern field' multiline />
    <TextInput style={styles.input} placeholder='Any story or authenticity concern?' value={draft.authenticityConcern} onChangeText={(text) => setField('authenticityConcern', text)} accessibilityLabel='Story authenticity concern field' multiline />
    <TextInput style={styles.input} placeholder='Any bug or layout issue?' value={draft.bugLayoutIssue} onChangeText={(text) => setField('bugLayoutIssue', text)} accessibilityLabel='Bug or layout issue field' multiline />

    <Text style={styles.sectionTitle}>Overall private-beta sentiment (parent-facing only)</Text>
    <View style={styles.sentimentRow}>
      {sentimentOptions.map((option) => <Text key={option} onPress={() => setField('overallSentiment', option)} style={[styles.chip, draft.overallSentiment === option ? styles.chipActive : null]} accessibilityRole='button' accessibilityLabel={`Set overall sentiment to ${option}`}>{option}</Text>)}
    </View>

    <Text style={styles.sectionTitle}>Permission to contact (optional)</Text>
    <View style={styles.sentimentRow}>
      <Text onPress={() => setField('permissionToContact', 'yes')} style={[styles.chip, draft.permissionToContact === 'yes' ? styles.chipActive : null]} accessibilityRole='button' accessibilityLabel='Allow founder follow-up contact'>Yes</Text>
      <Text onPress={() => setField('permissionToContact', 'no')} style={[styles.chip, draft.permissionToContact === 'no' ? styles.chipActive : null]} accessibilityRole='button' accessibilityLabel='Do not allow founder follow-up contact'>No</Text>
    </View>

    <TextInput style={styles.input} placeholder='Contact detail (optional, local only)' value={draft.contactDetail} onChangeText={(text) => setField('contactDetail', text)} accessibilityLabel='Optional contact detail local only' accessibilityHint='Stored only on this device in this version' />

    <Text onPress={onSave} style={[styles.saveButton, !canSave ? styles.saveDisabled : null]} accessibilityRole='button' accessibilityLabel='Save parent feedback on device'>Save Feedback on This Device</Text>
    {saveMessage ? <Text style={styles.confirmation}>{saveMessage}</Text> : null}

    <Link href='/(parent)/dashboard' style={styles.backLink} accessibilityRole='link' accessibilityLabel='Back to Parent Dashboard'>Back to Parent Dashboard</Link>
  </ScrollView></SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#EFF4FF' },
  content: { padding: tokens.spacing.lg, gap: tokens.spacing.md, paddingBottom: 40 },
  heading: { fontSize: 30, fontWeight: '800', color: '#1E2C50' },
  subheading: { color: '#4D5F88', fontSize: 15, lineHeight: 22 },
  noteCard: { backgroundColor: '#1E2C50', borderRadius: 16, padding: 14, gap: 6 },
  noteLine: { color: '#FFFFFF', fontSize: 14, lineHeight: 20 },
  input: { backgroundColor: '#FFFFFF', borderRadius: 14, borderWidth: 1, borderColor: '#D4DEF4', padding: 12, color: '#1E2C50', minHeight: 48, textAlignVertical: 'top' },
  sectionTitle: { color: '#445378', fontWeight: '800', letterSpacing: 0.3, textTransform: 'uppercase', fontSize: 12 },
  sentimentRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { backgroundColor: '#DCE8FF', color: '#1E2C50', paddingVertical: 10, paddingHorizontal: 12, borderRadius: 999, overflow: 'hidden', fontWeight: '600' },
  chipActive: { backgroundColor: '#1E2C50', color: '#FFFFFF' },
  saveButton: { backgroundColor: '#C9F1DE', color: '#0D5132', textAlign: 'center', fontWeight: '700', borderRadius: tokens.radius.button, padding: 14 },
  saveDisabled: { opacity: 0.6 },
  confirmation: { color: '#1E2C50', fontWeight: '600', lineHeight: 20 },
  backLink: { backgroundColor: '#DCE8FF', padding: 16, borderRadius: tokens.radius.button, textAlign: 'center', color: '#1E2C50', fontWeight: '700' }
});

export default function ParentFeedbackScreen() {
  return <RouteErrorBoundary surfaceName='Parent Feedback Capture' audience='parent' primaryActionHref='/(parent)/dashboard' primaryActionLabel='Go to Parent Dashboard'>
    <ParentFeedbackContent />
  </RouteErrorBoundary>;
}
