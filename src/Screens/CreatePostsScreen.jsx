import { Image, Keyboard } from "react-native";
import { TextInput } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";

const CreatePostsScreen = () => {
  const navigation = useNavigation();
  const [postName, setPostName] = useState(null);
  const [locationTitle, setLocationTitle] = useState(null);
  const [postLocation, setLocation] = useState(null);
  const [photoUri, setPhotoUri] = useState("");
  const [hasPermission, setHasPermission] = useState(null);
  const [type] = useState(Camera.Constants.Type.front);
  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
    })();
  }, []);

  const newPostData = {
    postName,
    locationTitle,
    postLocation,
    photoUri,
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>Taking permissions...</Text>;
  }
  if (!hasPermission) {
    return <Text>No access to camera</Text>;
  }

  const handleSubmit = async () => {
    if (!postName) {
      setPostName("");
      return;
    } else if (!locationTitle) {
      setLocationTitle("");
      return;
    } else if (!photoUri) {
      setPhotoUri("");
      return;
    } else if (!postLocation) {
      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
    }

    console.log(newPostData);
    navigation.navigate("Posts");
    handleReset();
  };

  const handleReset = () => {
    setPostName(null);
    setLocationTitle(null);
    setLocation(null);
    setPhotoUri("");
  };

  const isEmpty = (inputName) => newPostData[inputName] === "";
  const isButtonDisabled =
    !isEmpty("postName") && !isEmpty("locationTitle") && !isEmpty("photoUri");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View>
          <Camera style={styles.loadImage} type={type} ref={cameraRef}>
            <Image />
            <TouchableOpacity
              onPress={async () => {
                if (true) {
                  const { uri } = await cameraRef.current.takePictureAsync();
                  await MediaLibrary.createAssetAsync(uri);
                  setPhotoUri(uri);
                }
              }}
              style={styles.cameraIconWrapper}
            >
              <FontAwesome
                name="camera"
                size={20}
                color="#BDBDBD"
                style={styles.cameraIcon}
              />
            </TouchableOpacity>
          </Camera>
          <Text style={styles.actionDescription}>
            {isEmpty("photoUri") ? "Завантажте фото" : "Редагувати фото"}
          </Text>
          {isEmpty("postName") && (
            <Text style={styles.errorMessage}>
              Post name is a required field!
            </Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="Назва..."
            onChangeText={setPostName}
            value={postName}
          />
          <View style={styles.locationInputWrapper}>
            <Feather
              name="map-pin"
              size={18}
              color="#BDBDBD"
              style={styles.locationIcon}
            />
            {isEmpty("locationTitle") && (
              <Text style={styles.errorMessage}>
                Location title is a required field!
              </Text>
            )}
            <TextInput
              style={[styles.input, styles.locationInput]}
              placeholder="Місцевість..."
              onChangeText={setLocationTitle}
              value={locationTitle}
            />
          </View>
          <TouchableOpacity
            style={[
              styles.publishButton,
              isButtonDisabled && styles.enabledButton,
            ]}
            onPress={handleSubmit}
            disabled={!isButtonDisabled}
          >
            <Text
              style={[
                styles.publishButtonText,
                isButtonDisabled && styles.publishButtonTextEnabled,
              ]}
            >
              Опублікувати
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.removeButton} onPress={handleReset}>
          <Feather name="trash-2" size={24} color="#DADADA" />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
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
  errorMessage: {
    color: "#FF6C00",
    marginBottom: 5,
  },
};
