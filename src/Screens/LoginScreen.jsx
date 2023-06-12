import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import BgImagePath from "../images/photo-bg.jpg";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const RegistrationScreen = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [hidePassword, setHidePassword] = useState(true);
  const [emailText, setEmailText] = useState(null);
  const [passwordText, setPasswordText] = useState(null);
  const navigation = useNavigation();

  const submitData = {
    emailText,
    passwordText,
  };

  const isEmpty = (inputName) => submitData[inputName] === "";

  const handleSubmit = () => {
    if (!emailText) {
      setEmailText("");
      return;
    } else if (!passwordText) {
      setPasswordText("");
      return;
    }

    console.log(submitData);
    navigation.navigate("Home");
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
          <Text style={styles.screenTitle}>Увійти</Text>
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
          <TouchableOpacity style={styles.logInButton} onPress={handleSubmit}>
            <Text style={styles.logInButtonText}>Увійти</Text>
          </TouchableOpacity>
          <Text style={styles.registerLink}>
            Немає акаунту?
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Registration");
              }}
            >
              <Text style={styles.registerLink}>Зареєструватися</Text>
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
    paddingTop: 32,
    paddingBottom: 144,
    paddingLeft: 16,
    paddingRight: 16,
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
  logInButton: {
    width: 343,
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  logInButtonText: {
    textAlign: "center",
    lineHeight: 19,
    fontSize: 16,
    color: "#ffffff",
    fontFamily: "Roboto_400Regular",
  },
  registerLink: {
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
