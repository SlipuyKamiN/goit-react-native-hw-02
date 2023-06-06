import { ImageBackground, StyleSheet, Text, View } from "react-native";
import LoginScreen from "./Screens/LoginScreen";
import BgImagePath from "./images/photo-bg.jpg";
import RegistrationScreen from "./Screens/RegistrationScreen";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={BgImagePath} style={styles.image}>
        {/* <RegistrationScreen /> */}
        <LoginScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});
