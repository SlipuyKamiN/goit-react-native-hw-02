import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BgImagePath from "../images/photo-bg.jpg";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RegistrationScreen = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [hidePassword, setHidePassword] = useState(true);
  const [loginText, setLoginText] = useState(null);
  const [emailText, setEmailText] = useState(null);
  const [passwordText, setPasswordText] = useState(null);
  const navigation = useNavigation();

  const submitData = {
    loginText,
    emailText,
    passwordText,
  };

  const isEmpty = (inputName) => submitData[inputName] === "";

  const handleSubmit = () => {
    if (!loginText) {
      setLoginText("");
      return;
    } else if (!emailText) {
      setEmailText("");
      return;
    } else if (!passwordText) {
      setPasswordText("");
      return;
    }

    console.log(submitData);
    navigation.navigate("Home");
    setLoginText(null);
    setEmailText(null);
    setPasswordText(null);
  };

  return (
    <ImageBackground source={BgImagePath} style={styles.image}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.screenWrapper}
        keyboardVerticalOffset={-500}
      >
        <View style={styles.form}>
          <View style={styles.imageWrapper}>
            <Image style={styles.avatarImage} />
            <TouchableOpacity style={styles.addButton}>
              <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
            </TouchableOpacity>
          </View>
          <Text style={styles.screenTitle}>Реєстрація</Text>
          {isEmpty("loginText") && (
            <Text style={styles.errorMessage}>Login is a required field!</Text>
          )}
          <TextInput
            style={[
              styles.input,
              focusedInput === "Login" && styles.activeInput,
            ]}
            placeholder="Логін"
            onFocus={() => {
              setFocusedInput("Login");
            }}
            onBlur={() => {
              setFocusedInput(null);
            }}
            value={loginText}
            onChangeText={setLoginText}
          />
          {isEmpty("emailText") && (
            <Text style={styles.errorMessage}>Email is a required field!</Text>
          )}
          <TextInput
            style={[
              styles.input,
              focusedInput === "Email" && styles.activeInput,
            ]}
            placeholder="Адреса електронної пошти"
            onFocus={() => {
              setFocusedInput("Email");
            }}
            onBlur={() => {
              setFocusedInput(null);
            }}
            value={emailText}
            onChangeText={setEmailText}
          />
          {isEmpty("passwordText") && (
            <Text style={styles.errorMessage}>
              Password is a required field!
            </Text>
          )}
          <View style={styles.passwordInputWrapper}>
            <TextInput
              secureTextEntry={hidePassword}
              placeholder="Пароль"
              style={[
                styles.input,
                focusedInput === "Password" && styles.activeInput,
              ]}
              onFocus={() => {
                setFocusedInput("Password");
              }}
              onBlur={() => {
                setFocusedInput(null);
              }}
              value={passwordText}
              onChangeText={setPasswordText}
            />
            <TouchableOpacity
              style={styles.showPasswordButton}
              onPress={() => {
                setHidePassword(!hidePassword);
              }}
            >
              <Text style={styles.showPasswordButtonText}>
                {hidePassword ? "Показати" : "Приховати"}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleSubmit}
          >
            <Text style={styles.registerButtonText}>Зареєструватися</Text>
          </TouchableOpacity>
          <Text style={styles.logInLink}>
            Немає акаунту?
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={styles.logInLink}>Увійти</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  screenWrapper: { flex: 1, width: "100%", justifyContent: "flex-end" },
  form: {
    position: "relative",
    backgroundColor: "#fff",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingBottom: 78,
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
    top: "60%",
    transform: [{ translateX: 12.5 }],
    backgroundColor: "transparent",
    borderRadius: 25,
    textAlign: "center",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  screenTitle: {
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    marginBottom: 33,
    fontFamily: "Roboto_400Regular",
  },
  input: {
    width: 343,
    height: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#f6f6f6",
    marginBottom: 16,
    padding: 16,
    fontFamily: "Roboto_400Regular",
  },
  passwordInputWrapper: {
    position: "relative",
    marginBottom: 43,
  },
  showPasswordButton: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  showPasswordButtonText: {
    fontSize: 16,
    color: "#1B4371",
    fontFamily: "Roboto_400Regular",
  },
  registerButton: {
    width: 343,
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  registerButtonText: {
    textAlign: "center",
    lineHeight: 19,
    fontSize: 16,
    color: "#ffffff",
    fontFamily: "Roboto_400Regular",
  },
  logInLink: {
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    fontFamily: "Roboto_400Regular",
  },
  activeInput: {
    borderColor: "#FF6C00",
    backgroundColor: "#ffffff",
  },
  errorMessage: {
    color: "#FF6C00",
    marginBottom: 5,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
  },
});
