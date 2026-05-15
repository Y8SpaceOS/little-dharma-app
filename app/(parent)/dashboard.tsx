import { SafeAreaView, Text } from 'react-native';
import { getParentDashboardSnapshot } from '@/services/progress';

export default function DashboardScreen() {
  const d = getParentDashboardSnapshot();
  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <Text>Parent Dashboard</Text>
      <Text>Stories completed: {d.storiesCompleted}</Text>
      <Text>Values learned: {d.valuesLearned}</Text>
      <Text>Suggested next: {d.suggestedNextJourney}</Text>
      <Text>Screen time placeholder: {d.screenTimeMinutes} mins</Text>
    </SafeAreaView>
  );
}
