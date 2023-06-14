import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

const Post = ({ item }) => {
  return (
    <View style={styles.postWrapper}>
      <Image style={styles.image} />
      <Text style={styles.postTitle}>{item.title}</Text>
      <View style={styles.linksWrapper}>
        <TouchableOpacity style={styles.linkWrapper}>
          <Feather name="message-circle" size={18} color="#BDBDBD" />
          <Text style={styles.commentsCount}>{item.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkWrapper}>
          <Feather
            name="map-pin"
            size={18}
            color="#BDBDBD"
            style={styles.locationIcon}
          />
          <Text style={styles.locationLink}>{item.location}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Post;

const styles = {
  postWrapper: {
    width: "100%",
    marginBottom: 35,
  },
  image: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: "tomato",
  },
  postTitle: {
    marginBottom: 11,
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    lineHeight: 19,
  },
  linksWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  linkWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  commentsCount: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  locationLink: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: "underline",
  },
};
