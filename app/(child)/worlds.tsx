import { Link } from 'expo-router';
import { SafeAreaView, Text } from 'react-native';
export default function Screen(){ return <SafeAreaView style={{flex:1,padding:20,gap:12}}><Text style={{fontSize:28,fontWeight:'700'}}>Explore Worlds</Text><Text>Pick from playful dharma worlds (placeholder).</Text><Link href='/(child)/today'>Back to Child Home</Link></SafeAreaView>; }
