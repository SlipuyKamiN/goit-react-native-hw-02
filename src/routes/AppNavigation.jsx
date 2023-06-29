import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "../screens/RegistrationScree";
import LoginScreen from "../screens/LoginScree";
import BottomTabNavigation from "./BottomTabNavigation";
import CommentsScreen from "../screens/CommentsScree";
import MapScreen from "../screens/MapScree";

const MainStack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerTitleAlign: "center", headerShown: false }}
      >
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
        />
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{ headerShown: true }}
        />
        <MainStack.Screen
          name="Map"
          component={MapScreen}
          options={{ headerShown: true }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
