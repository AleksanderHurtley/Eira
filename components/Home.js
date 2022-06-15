import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Image } from "react-native"
import styles from "../assets/styling/styles"

const Home = () => {
  return (
    <ImageBackground style={{flex: 1}} source={require("../assets/images/backgroundHome.png")} resizeMode="cover"> 
      <SafeAreaView style={styles.container}>
        <Text style={[styles.textHeader, styles.splashTextPosition]}>Eira</Text>
        <Text style= {styles.textDefault}>An app about my cat</Text>
        <Image source={require("../assets/images/splashEira.png")} style={styles.eiraSplash}/>
      </SafeAreaView>
    </ImageBackground>
  )
}


export default Home;