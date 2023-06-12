import "react-native-gesture-handler";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { MaterialIcons } from "@expo/vector-icons";
import LoginScreen from "./src/Screens/LoginScreen";
import RegistrationScreen from "./src/Screens/RegistrationScreen";
import Home from "./src/Screens/Home";
import CommentsScreen from "./src/Screens/CommentsScreen";
import MapScreen from "./src/Screens/MapScreen";
import CreatePostsScreen from "./src/Screens/CreatePostsScreen";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import LogOutButton from "./src/components/LogOutButton";

const MainStack = createStackNavigator();

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <NavigationContainer>
        <MainStack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerTitleAlign: "center", headerShown: false }}
        >
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreen}
          />
          <MainStack.Screen name="Login" component={LoginScreen} />
          <MainStack.Screen name="Home" component={Home} options={{}} />
          <MainStack.Screen
            name="CreatePosts"
            component={CreatePostsScreen}
            options={{
              title: "Створити публікацію",
              headerShown: true,
              tabBarIcon: () => (
                <TouchableOpacity style={styles.createPostButton}>
                  <AntDesign name="plus" size={13} color="#ffffff" />
                </TouchableOpacity>
              ),
            }}
          />
          <MainStack.Screen name="Comments" component={CommentsScreen} />
          <MainStack.Screen name="Map" component={MapScreen} />
        </MainStack.Navigator>
      </NavigationContainer>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  header: {
    textAlign: "center",
    alignItems: "center",
  },
  logOutButton: {
    marginRight: 16,
  },
});
