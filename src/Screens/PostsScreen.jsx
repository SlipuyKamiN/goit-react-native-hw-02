import { Image, ScrollView, Text, View } from "react-native";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import { FlatList } from "react-native-gesture-handler";
import Post from "../components/Post";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

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
const PostsScreen = () => {
  return (
    <FlatList
      style={styles.container}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <>
          <View style={styles.userWrapper}>
            <Image style={styles.avatarImage} />
            <View>
              <Text style={styles.userName}>Natali Romanova</Text>
              <Text style={styles.userEmail}>email@example.com</Text>
            </View>
          </View>
        </>
      }
      data={posts}
      renderItem={({ item }) => <Post item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default PostsScreen;

const styles = {
  container: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#ffffff",
  },
  userWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
    gap: 8,
  },
  avatarImage: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "red",
  },
  userName: {
    fontFamily: "Roboto_700Bold",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  userEmail: {
    fontFamily: "Roboto_400Regular",
    fontSize: 11,
    lineHeight: 13,
    color: "#212121CC",
  },
};
