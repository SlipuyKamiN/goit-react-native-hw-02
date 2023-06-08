import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
} from "react-native";
import BgImagePath from "../../images/photo-bg.jpg";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  AddButton,
  AvatarImage,
  Input,
  ScreenTitle,
  Form,
  ImageWrapper,
  LogInLink,
  PasswordInputWrapper,
  RegisterButton,
  RegisterButtonText,
  ShowPasswordButton,
  ShowPasswordButtonText,
} from "./RegistrationScreen.styled";

const RegistrationScreen = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [hidePassword, setHidePassword] = useState(true);
  const [loginText, setLoginText] = useState(null);
  const [emailText, setEmailText] = useState(null);
  const [passwordText, setPasswordText] = useState(null);

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
    <ImageBackground source={BgImagePath} style={styles.image}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1, width: "100%" }}
        keyboardVerticalOffset={-100}
      >
        <Form>
          <ImageWrapper>
            <AvatarImage />
            <AddButton>
              <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
            </AddButton>
          </ImageWrapper>
          <ScreenTitle>Реєстрація</ScreenTitle>
          {isEmpty("loginText") && (
            <Text style={styles.errorMessage}>Login is a required field!</Text>
          )}
          <Input
            style={focusedInput === "Login" && styles.activeInput}
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
          <Input
            style={focusedInput === "Email" && styles.activeInput}
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
          <PasswordInputWrapper>
            <Input
              secureTextEntry={hidePassword}
              placeholder="Пароль"
              style={focusedInput === "Password" && styles.activeInput}
              onFocus={() => {
                setFocusedInput("Password");
              }}
              onBlur={() => {
                setFocusedInput(null);
              }}
              value={passwordText}
              onChangeText={setPasswordText}
            />
            <ShowPasswordButton
              onPress={() => {
                setHidePassword(!hidePassword);
              }}
            >
              <ShowPasswordButtonText>Показати</ShowPasswordButtonText>
            </ShowPasswordButton>
          </PasswordInputWrapper>

          <RegisterButton onPress={handleSubmit}>
            <RegisterButtonText>Зареєструватися</RegisterButtonText>
          </RegisterButton>
          <LogInLink>Вже є акаунт? Увійти</LogInLink>
        </Form>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
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
    paddingTop: 263,
  },
});
