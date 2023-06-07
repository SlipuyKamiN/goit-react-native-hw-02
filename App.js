import {
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
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
    <ImageBackground source={BgImagePath} style={styles.image}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1, paddingTop: 263 }}
      >
        <View style={styles.container}>
          <RegistrationScreen />
          {/* <LoginScreen /> */}
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
  },
});
