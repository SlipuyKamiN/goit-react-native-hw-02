import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const LogOutButton = ({ style = {} }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.logOutButton, style]}
      onPress={() => {
        navigation.navigate("Login");
      }}
    >
      <MaterialIcons name="logout" size={20} color="#BDBDBD" />
    </TouchableOpacity>
  );
};

export default LogOutButton;

const styles = StyleSheet.create({
  logOutButton: {
    marginRight: 16,
  },
});
