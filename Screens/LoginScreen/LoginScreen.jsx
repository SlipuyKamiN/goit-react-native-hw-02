import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BgImagePath from "../../images/photo-bg.jpg";
import { useKeyboard } from "@react-native-community/hooks";
import { useState } from "react";

const RegistrationScreen = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [hidePassword, setHidePassword] = useState(true);
  const [emailText, setEmailText] = useState(null);
  const [passwordText, setPasswordText] = useState(null);
  const keyboard = useKeyboard();

  const {
    form,
    screenTitle,
    input,
    passwordInputWrapper,
    showPasswordButton,
    showPasswordButtonText,
    logInButton,
    logInButtonText,
    registerLink,
    activeInput,
    errorMessage,
    image,
  } = styles;

  const submitData = {
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
    if (!emailText) {
      setEmailText("");
      return;
    } else if (!passwordText) {
      setPasswordText("");
      return;
    }

    console.log(submitData);
    setEmailText(null);
    setPasswordText(null);
  };

  return (
    <ImageBackground source={BgImagePath} style={image}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={-500}
      >
        <View
          style={{
            ...form,
            marginTop: keyboard.keyboardShown ? 147 : 263,
          }}
        >
          <Text style={screenTitle}>Увійти</Text>
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
          <TouchableOpacity style={logInButton} onPress={handleSubmit}>
            <Text style={logInButtonText}>Увійти</Text>
          </TouchableOpacity>
          <Text style={registerLink}>Немає акаунту? Зареєструватися</Text>
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
    paddingTop: 32,
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
