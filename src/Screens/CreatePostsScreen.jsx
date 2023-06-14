import { Image } from "react-native";
import { Touchable } from "react-native";
import { TextInput } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.loadImage}>
          <Image />
          <View style={styles.cameraIconWrapper}>
            <FontAwesome
              name="camera"
              size={20}
              color="#BDBDBD"
              style={styles.cameraIcon}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.actionDescription}>Завантажте фото</Text>
        <TextInput style={styles.input} placeholder="Назва..." />
        <View style={styles.locationInputWrapper}>
          <Feather
            name="map-pin"
            size={18}
            color="#BDBDBD"
            style={styles.locationIcon}
          />
          <TextInput
            style={[styles.input, styles.locationInput]}
            placeholder="Місцевість..."
          />
        </View>
        <TouchableOpacity style={[styles.publishButton]}>
          <Text style={styles.publishButtonText}>Опублікувати</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.removeButton}>
        <Feather name="trash-2" size={24} color="#DADADA" />
      </TouchableOpacity>
    </View>
  );
};

export default CreatePostsScreen;

const styles = {
  container: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 32,
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
  },
  loadImage: {
    position: "relative",
    width: "100%",
    height: 240,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#f6f6f6",
    marginBottom: 8,
  },
  cameraIconWrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF4D",
    borderRadius: 30,
    transform: [{ translateY: -30 }, { translateX: -30 }],
  },
  cameraIcon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateY: -10 }, { translateX: -12 }],
  },
  actionDescription: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    marginBottom: 48,
  },
  input: {
    height: 50,
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto_500Medium",
    color: "#212121",
    marginBottom: 16,
  },
  locationInputWrapper: {
    position: "relative",
    marginBottom: 32,
  },
  locationInput: {
    paddingLeft: 28,
    marginBottom: 0,
  },
  locationIcon: {
    position: "absolute",
    bottom: 16,
    left: 4,
  },
  publishButton: {
    width: "100%",
    paddingTop: 16,
    paddingBottom: 16,
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#F6F6F6",
  },
  publishButtonText: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  publishButtonTextEnabled: {
    color: "#ffffff",
  },
  enabledButton: {
    backgroundColor: "#FF6C00",
  },
  removeButton: {
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
};
