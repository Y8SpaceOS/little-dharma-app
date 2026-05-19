import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView, Text, View } from 'react-native';
import { getWorldBySlug } from '@/lib/content';
import { visualStyles } from '@/design/visualSystem';

export default function WorldScreen() {
  const { slug } = useLocalSearchParams<{slug: string}>();
  const world = getWorldBySlug(slug ?? '');
  return (
    <SafeAreaView style={visualStyles.softScreen}>
      <View style={[{ margin: 18 }, world ? visualStyles.roundedCard : visualStyles.emptyStateCard]}>
        <Text style={{ fontSize: 28, fontWeight: '900', color: '#4F311D' }}>{world?.title ?? 'Story World doorway coming soon'}</Text>
        <Text style={{ marginTop: 8, color: '#6B4A33', fontSize: 15 }}>{world?.description ?? 'This world card is being prepared with warm, child-facing details.'}</Text>
      </View>
    </SafeAreaView>
  );
}
