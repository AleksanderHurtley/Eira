import { StyleSheet } from "react-native";
import colors from "./colors";
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: Platform.OS === "android" ? paddingTop = StatusBar.currentHeight : 0,
  },
  textHeader: {
    fontSize: 60,
  },
  eiraSplash: {
    position: 'absolute',
    bottom: 0,
    left: -10,
    height: 330,
    width: 332,
  }
});

export default styles;