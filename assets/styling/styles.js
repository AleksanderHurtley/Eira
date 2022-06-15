import { StyleSheet } from "react-native";
import colors from "./colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? paddingTop = StatusBar.currentHeight : 0,
  },
  textHeader: {
    fontFamily: 'Poppins_700Bold',
    position: 'relative',
    fontSize: 70,
    marginTop: '48%',
    marginLeft: '3%',
    opacity: .7
  },
  textDefault:  {
    fontFamily: 'Poppins_700Bold',
    marginLeft: '3%',
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
  },
  tabBar: {
    backgroundColor: colors.navBarBackgrond,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute'
  },
  tabBarIcon: {
    height: 30,
    width: 30
  }
});

export default styles;