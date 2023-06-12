import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import LogOutButton from "../components/LogOutButton";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Tabs = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();

  return (
    <Tabs.Navigator
      initialRouteName="PostsScreen"
      screenOptions={{
        headerTitleAlign: "center",
        tabBarShowLabel: false,
        tabBarStyle: { height: 83, alignItems: "center" },
        tabBarBadgeStyle: { height: 24 },
        tabBarActiveTintColor: "tomato",
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
        component={PostsScreen}
        options={{
          title: "Публікації",
          tabBarIcon: () => (
            <TouchableOpacity
              style={styles.createPostButton}
              onPress={() => {
                navigation.navigate("CreatePosts");
              }}
            >
              <AntDesign name="plus" size={13} color="#ffffff" />
            </TouchableOpacity>
          ),
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
        }}
      />
    </Tabs.Navigator>
  );
};

export default Home;

const styles = {
  createPostButton: {
    backgroundColor: "#FF6C00",
    borderRadius: 20,
    width: 70,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
};
