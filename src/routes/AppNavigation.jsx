import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "../screens/RegistrationScreen";
import LoginScreen from "../screens/LoginScreen";
import BottomTabNavigation from "./BottomTabNavigation";
import CommentsScreen from "../screens/CommentsScreen";
import MapScreen from "../screens/MapScreen";

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
        <MainStack.Screen name="Comments" component={CommentsScreen} />
        <MainStack.Screen name="Map" component={MapScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
