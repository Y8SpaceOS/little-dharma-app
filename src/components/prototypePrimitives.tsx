import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function PrototypeLandingScreen({ children }: { children: ReactNode }) {
  return <LinearGradient colors={['#F4D7B0', '#F2CDB0', '#F0D2C8', '#E8D6DD', '#E2D4DC']} locations={[0,0.28,0.52,0.75,0.82]} start={{x:0,y:0}} end={{x:0,y:1}} style={styles.screen}>{children}</LinearGradient>;
}
export function PrototypeStatusBar() { return <View style={styles.statusWrap}><Text style={styles.statusTime}>9:41</Text><Text style={styles.menuDots}>⋯</Text></View>; }
export function PrototypeSky() { return <View pointerEvents='none' style={styles.skyLayer}><View style={styles.leftCloud}/><View style={styles.sunBaseOval}/><View style={styles.sunOuter}/><View style={styles.sunInner}/></View>; }
export function PrototypeBrandIcon() {
  return <LinearGradient colors={['#CDB7EE','#F4C4A3','#F5D36A','#A8D487','#D8B2DE']} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.brandOuter}><View style={styles.brandInner}><View style={styles.iconCircle}><View style={styles.iconDisc}/><View style={styles.iconArch}/><View style={styles.iconFinial}/></View></View></LinearGradient>;
}
export function PrototypeLandscape() { return <View pointerEvents='none' style={styles.landscapeWrap}><LinearGradient colors={['#9CCB68','#7FB85C']} style={styles.greenHill}/><LinearGradient colors={['#E8C168','#D9A847']} style={styles.yellowGround}/></View>; }
export function PrototypeBottomCTA({ label, onPress }: { label: string; onPress: () => void }) { return <View style={styles.ctaBase}><TouchableOpacity onPress={onPress} style={styles.ctaFace}><Text style={styles.ctaText}>{label}</Text></TouchableOpacity></View>; }

const styles = StyleSheet.create({
screen:{flex:1},statusWrap:{marginTop:14,paddingHorizontal:24,flexDirection:'row',justifyContent:'space-between',alignItems:'center'},statusTime:{color:'#3D2417',fontSize:17,fontWeight:'600'},menuDots:{color:'#3D2417',fontSize:22,fontWeight:'700'},
skyLayer:{...StyleSheet.absoluteFillObject},leftCloud:{position:'absolute',left:'8%',top:'19%',width:120,height:35,borderRadius:18,backgroundColor:'rgba(255,244,230,0.85)'},sunBaseOval:{position:'absolute',right:'12%',top:'22%',width:110,height:30,borderRadius:15,backgroundColor:'rgba(255,246,236,0.72)'},sunOuter:{position:'absolute',right:'16%',top:'18%',width:70,height:70,borderRadius:35,backgroundColor:'#E8A838'},sunInner:{position:'absolute',right:'18%',top:'19%',width:56,height:56,borderRadius:28,backgroundColor:'#F5C44A'},
brandOuter:{width:140,height:140,borderRadius:32,alignSelf:'center',marginTop:'18%',padding:11},brandInner:{flex:1,borderRadius:28,backgroundColor:'#FDF8F1',alignItems:'center',justifyContent:'center'},iconCircle:{width:90,height:90,borderRadius:45,backgroundColor:'#FEFBF6',alignItems:'center',justifyContent:'center'},iconDisc:{position:'absolute',top:35,width:38,height:38,borderRadius:19,backgroundColor:'#F39A40'},iconArch:{position:'absolute',top:32,width:18,height:38,borderTopLeftRadius:9,borderTopRightRadius:9,backgroundColor:'#3D2417'},iconFinial:{position:'absolute',top:16,width:16,height:22,borderRadius:10,backgroundColor:'#EA8D75'},
landscapeWrap:{position:'absolute',left:0,right:0,bottom:0,height:'24%'},greenHill:{position:'absolute',left:'-12%',right:'-4%',bottom:'20%',height:'86%',borderTopLeftRadius:180,borderTopRightRadius:260,borderBottomLeftRadius:60,borderBottomRightRadius:30,transform:[{rotate:'-2deg'}]},yellowGround:{position:'absolute',left:'-6%',right:'-8%',bottom:'-8%',height:'63%',borderTopLeftRadius:160,borderTopRightRadius:170,borderBottomLeftRadius:40,borderBottomRightRadius:40,transform:[{rotate:'1deg'}]},
ctaBase:{backgroundColor:'#B66A1F',borderRadius:32,paddingBottom:6,shadowColor:'rgba(180,90,20,0.25)',shadowOpacity:1,shadowRadius:12,shadowOffset:{width:0,height:4}},ctaFace:{backgroundColor:'#E89B3C',borderRadius:32,minHeight:62,justifyContent:'center'},ctaText:{textAlign:'center',color:'#FFFFFF',fontSize:19,fontWeight:'800'}
});
