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
import BgImagePath from "../../images/photo-bg.jpg";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useKeyboard } from "@react-native-community/hooks";

const RegistrationScreen = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [hidePassword, setHidePassword] = useState(true);
  const [loginText, setLoginText] = useState(null);
  const [emailText, setEmailText] = useState(null);
  const [passwordText, setPasswordText] = useState(null);
  const keyboard = useKeyboard();

  const {
    form,
    imageWrapper,
    avatarImage,
    addButton,
    screenTitle,
    input,
    passwordInputWrapper,
    showPasswordButton,
    showPasswordButtonText,
    registerButton,
    registerButtonText,
    logInLink,
    activeInput,
    errorMessage,
    image,
  } = styles;

  const submitData = {
    loginText,
    emailText,
    passwordText,
  };

  const isEmpty = (inputName) => {
    if (submitData[inputName] === "") {
      return true;
    }
    return false;
  };

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
    setLoginText(null);
    setEmailText(null);
    setPasswordText(null);
  };

  return (
    <ImageBackground source={BgImagePath} style={image}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1, width: "100%" }}
        keyboardVerticalOffset={-500}
      >
        <View
          style={{
            ...form,
            marginTop: keyboard.keyboardShown ? 147 : 263,
          }}
        >
          <View style={imageWrapper}>
            <Image style={avatarImage} />
            <TouchableOpacity style={addButton}>
              <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
            </TouchableOpacity>
          </View>
          <Text style={screenTitle}>Реєстрація</Text>
          {isEmpty("loginText") && (
            <Text style={errorMessage}>Login is a required field!</Text>
          )}
          <TextInput
            style={{
              ...input,
              borderColor:
                focusedInput === "Login"
                  ? activeInput.borderColor
                  : input.borderColor,
              backgroundColor:
                focusedInput === "Login"
                  ? activeInput.backgroundColor
                  : input.backgroundColor,
            }}
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
            <Text style={errorMessage}>Email is a required field!</Text>
          )}
          <TextInput
            style={{
              ...input,
              borderColor:
                focusedInput === "Email"
                  ? activeInput.borderColor
                  : input.borderColor,
              backgroundColor:
                focusedInput === "Email"
                  ? activeInput.backgroundColor
                  : input.backgroundColor,
            }}
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
            <Text style={errorMessage}>Password is a required field!</Text>
          )}
          <View style={passwordInputWrapper}>
            <TextInput
              secureTextEntry={hidePassword}
              placeholder="Пароль"
              style={{
                ...input,
                borderColor:
                  focusedInput === "Password"
                    ? activeInput.borderColor
                    : input.borderColor,
                backgroundColor:
                  focusedInput === "Password"
                    ? activeInput.backgroundColor
                    : input.backgroundColor,
              }}
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
              style={showPasswordButton}
              onPress={() => {
                setHidePassword(!hidePassword);
              }}
            >
              <Text style={showPasswordButtonText}>Показати</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={registerButton} onPress={handleSubmit}>
            <Text style={registerButtonText}>Зареєструватися</Text>
          </TouchableOpacity>
          <Text style={logInLink}>Вже є акаунт? Увійти</Text>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  form: {
    position: "relative",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
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
