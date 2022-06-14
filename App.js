import { StatusBar } from 'expo-status-bar';
import { Text, Image, SafeAreaView, View, StyleSheet, ImageBackground } from 'react-native';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';
import colors from './assets/styling/colors'
import About from './components/About'
import Food from './components/Food'
import Home from './components/Home'
import Splash from './components/Splash'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Tab.Screen name="About" component={About} options={{headerShown: false}}/>
      <Tab.Screen name="Food" component={Food} options={{headerShown: false}}/>
    </Tab.Navigator>
  )
}

export default function App() {

 
  console.log('App Loaded ...');
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Eira' component={TabNavigator} options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    // <ImageBackground style={{flex: 1}} source={require("./assets/images/splashBackground.png")} resizeMode="cover"> 
    //   <SafeAreaView style={styles.container}>
    //     <Text style={[styles.textHeader, styles.splashTextPosition]}>App</Text>
    //   </SafeAreaView>
    // </ImageBackground>
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
