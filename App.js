import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';
import About from './components/About'
import Food from './components/Food'
import Home from './components/Home'
import styles from './assets/styling/styles';
import color from './assets/styling/colors'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: styles.tabBar,
      tabBarShowLabel: false,
      tabBarActiveTintColor: color.iconActive,
      tabBarInactiveTintColor: color.iconInactive,
      headerShown: false,
    }}>
      <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Food" component={Food} options={{
        tabBarIcon: ({color, size}) => 
          <MaterialCommunityIcons name="food-drumstick" size={size} color={color}/>
        }}/>
      <Tab.Screen name="About" component={About} options={{
        tabBarIcon: ({color, size}) => 
          <MaterialCommunityIcons name="information" size={size} color={color}/>
        }}/>
    </Tab.Navigator>
  )
}

export default function App() {
  console.log('App running');
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Eira' component={TabNavigator} options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
