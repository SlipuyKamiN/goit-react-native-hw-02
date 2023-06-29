import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../screens/PostsScreen";
import LogOutButton from "../components/LogOutButton";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ProfileScreen from "../screens/ProfileScreen";
import CreatePostScreen from "../screens/CreatePostScreen";

const Tabs = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const navigation = useNavigation();

  return (
    <Tabs.Navigator
      initialRouteName="PostsScreen"
      screenOptions={{
        headerTitleAlign: "center",
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 83,
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 10,
          paddingLeft: 60,
          paddingRight: 60,
        },
        tabBarBadgeStyle: { height: 99 },
        tabBarActiveTintColor: "#FFFFFF",
        tabBarItemStyle: { ...styles.tabButtonWrapper },
        tabBarActiveBackgroundColor: "#FF6C00",
      }}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerRight: () => <LogOutButton />,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="grid-view" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="CreatePosts"
        component={CreatePostScreen}
        options={{
          title: "Створити публікацію",
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ color }) => (
            <AntDesign name="plus" size={16} color={color} />
          ),
          headerLeft: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Posts");
                }}
                style={{ marginLeft: 16 }}
              >
                <Feather name="arrow-left" size={24} color="black" />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Профіль",
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabNavigation;

const styles = {
  tabButtonWrapper: {
    borderRadius: 20,
    width: 70,
    height: 40,
    marginRight: 9,
    marginLeft: 9,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
};
