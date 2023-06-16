import { AntDesign } from "@expo/vector-icons";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import LogOutButton from "../components/LogOutButton";
import BgImagePath from "../images/photo-bg.jpg";
import ProfilePost from "../components/ProfilePost";
import { Pressable } from "react-native";

const posts = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    comments: 9,
    likes: 39,
    location: "Ukraine",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    comments: 12,
    likes: 412,
    location: "Ukraine",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    comments: 6,
    likes: 156,
    location: "Ukraine",
  },
];

const ProfileScreen = () => {
  return (
    <ImageBackground source={BgImagePath} style={styles.image}>
      <View style={styles.form}>
        <View style={styles.imageWrapper}>
          <Image style={styles.avatarImage} />
          <TouchableOpacity style={styles.addButton}>
            <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
          </TouchableOpacity>
        </View>
        <LogOutButton style={styles.logOutButton} />
        <Text style={styles.screenTitle}>Natali Romanova</Text>
        <FlatList
          style={styles.postsList}
          data={posts}
          renderItem={({ item }) => <ProfilePost item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ImageBackground>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  image: { flex: 1, width: "100%", justifyContent: "flex-end" },
  form: {
    flex: 0.75,
    position: "relative",
    backgroundColor: "#fff",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
  },
  imageWrapper: {
    position: "absolute",
    transform: [{ translateY: -60 }],
    top: 0,
  },
  avatarImage: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#f6f6f6",
  },
  addButton: {
    position: "absolute",
    width: 25,
    height: 25,
    right: 0,
    top: -40,
    transform: [{ translateX: 12.5 }],
    backgroundColor: "transparent",
    borderRadius: 25,
    textAlign: "center",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logOutButton: {
    position: "absolute",
    backgroundColor: "tomato",
  },
  screenTitle: {
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    marginBottom: 33,
    fontFamily: "Roboto_400Regular",
  },
  postsList: {
    width: "100%",
  },
});
