import { StatusBar } from 'expo-status-bar';
import { Text, Image, SafeAreaView, View, StyleSheet, ImageBackground } from 'react-native';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function Splash() {
  console.log('App Loaded ...');
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });

  return (
    <ImageBackground style={{flex: 1}} source={require("../assets/images/splashBackground.png")} resizeMode="cover"> 
      <SafeAreaView style={styles.container}>
        <Text style={[styles.textHeader, styles.splashTextPosition, {fontFamily: 'Poppins_700Bold'}]}>Eira</Text>
        <Text style= {[styles.textDefault, {fontFamily: 'Poppins_700Bold'}]}>An app about my cat</Text>
        <Image source={require("../assets/images/splashEira.png")} style={styles.eiraSplash}/>
        <StatusBar style="auto" />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? paddingTop = StatusBar.currentHeight : 0,
  },
  textHeader: {
    position: 'relative',
    fontSize: 70,
    marginTop: '55%',
    marginLeft: '2%',
    opacity: .7
  },
  textDefault:  {
    marginLeft: '2%',
    fontSize: 30,
    opacity: .7
  },
  eiraSplash: {
    position: 'absolute',
    bottom: 0,
    left: -10,
    height: 330,
    width: 332,
  },
  splashTextPosition:{
    paddingTop: 10
  }
});
