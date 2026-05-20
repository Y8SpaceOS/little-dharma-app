import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function PrototypeLandingScreen({ children }: { children: ReactNode }) {
  return <LinearGradient colors={['#F4D7B0', '#F2CDB0', '#F0D2C8', '#E8D6DD', '#E2D4DC']} locations={[0,0.28,0.52,0.75,0.82]} start={{x:0,y:0}} end={{x:0,y:1}} style={styles.screen}>{children}</LinearGradient>;
}
export function PrototypeSky() { return <View pointerEvents='none' style={styles.skyLayer}><View style={styles.leftCloud}/><View style={styles.sunBaseOval}/><View style={styles.sunOuter}/><View style={styles.sunInner}/></View>; }
export function PrototypeBrandIcon() {
  return <LinearGradient colors={['#CDB7EE','#F4C4A3','#F5D36A','#A8D487','#D8B2DE']} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.brandOuter}><View style={styles.brandInner}><View style={styles.iconCircle}><View style={styles.iconDiyaGlow}/><View style={styles.iconStem}/><View style={styles.iconLotus}/></View></View></LinearGradient>;
}
export function PrototypeLandscape() { return <View pointerEvents='none' style={styles.landscapeWrap}><LinearGradient colors={['#9CCB68','#7FB85C']} style={styles.greenHill}/><LinearGradient colors={['#E8C168','#D9A847']} style={styles.yellowGround}/></View>; }
export function PrototypeBottomCTA({ label, onPress }: { label: string; onPress: () => void }) { return <View style={styles.ctaBase}><TouchableOpacity onPress={onPress} style={styles.ctaFace}><Text style={styles.ctaText}>{label}</Text></TouchableOpacity></View>; }

const styles = StyleSheet.create({
screen:{flex:1},
skyLayer:{...StyleSheet.absoluteFillObject},leftCloud:{position:'absolute',left:22,top:90,width:78,height:34,borderRadius:17,backgroundColor:'rgba(255,255,255,0.78)'},sunBaseOval:{position:'absolute',right:18,top:126,width:96,height:38,borderRadius:19,backgroundColor:'rgba(255,255,255,0.76)'},sunOuter:{position:'absolute',right:25,top:78,width:58,height:58,borderRadius:29,backgroundColor:'#E8A838'},sunInner:{position:'absolute',right:29,top:82,width:50,height:50,borderRadius:25,backgroundColor:'#F5C44A'},
brandOuter:{width:140,height:140,borderRadius:32,alignSelf:'center',marginTop:'18%',padding:11},brandInner:{flex:1,borderRadius:28,backgroundColor:'#FDF8F1',alignItems:'center',justifyContent:'center'},iconCircle:{width:90,height:90,borderRadius:45,backgroundColor:'#FEFBF6',alignItems:'center',justifyContent:'center'},iconDiyaGlow:{position:'absolute',top:35,width:38,height:38,borderRadius:19,backgroundColor:'#F39A40'},iconStem:{position:'absolute',top:32,width:18,height:38,borderTopLeftRadius:9,borderTopRightRadius:9,backgroundColor:'#3D2417'},iconLotus:{position:'absolute',top:16,width:16,height:22,borderRadius:10,backgroundColor:'#EA8D75'},
landscapeWrap:{position:'absolute',left:0,right:0,bottom:0,height:'22%'},greenHill:{position:'absolute',left:'-10%',right:'-10%',bottom:-2,height:170,borderTopLeftRadius:180,borderTopRightRadius:260,borderBottomLeftRadius:60,borderBottomRightRadius:30,transform:[{rotate:'-2deg'}]},yellowGround:{position:'absolute',left:'-35%',right:'10%',bottom:-2,height:115,opacity:0.9,borderTopLeftRadius:160,borderTopRightRadius:170,borderBottomLeftRadius:40,borderBottomRightRadius:40,transform:[{rotate:'1deg'}]},
ctaBase:{backgroundColor:'#B66A1F',borderRadius:32,paddingBottom:6,shadowColor:'rgba(180,90,20,0.25)',shadowOpacity:1,shadowRadius:12,shadowOffset:{width:0,height:4}},ctaFace:{backgroundColor:'#E89B3C',borderRadius:32,minHeight:62,justifyContent:'center',paddingHorizontal:20},ctaText:{textAlign:'center',color:'#FFFFFF',fontSize:19,fontWeight:'800'}
});
