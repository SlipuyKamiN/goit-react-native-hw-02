import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
} from "react-native";
import BgImagePath from "../../images/photo-bg.jpg";
import {
  Form,
  ScreenTitle,
  Input,
  PasswordInputWrapper,
  ShowPasswordButton,
  ShowPasswordButtonText,
  LogInButton,
  LogInButtonText,
  RegisterLink,
} from "./LoginScreen.styled";

import { useState } from "react";

const RegistrationScreen = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [hidePassword, setHidePassword] = useState(true);
  const [emailText, setEmailText] = useState(null);
  const [passwordText, setPasswordText] = useState(null);

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
    <ImageBackground source={BgImagePath} style={styles.image}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={-100}
      >
        <Form>
          <ScreenTitle>Увійти</ScreenTitle>
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
          <LogInButton onPress={handleSubmit}>
            <LogInButtonText>Увійти</LogInButtonText>
          </LogInButton>
          <RegisterLink>Немає акаунту? Зареєструватися</RegisterLink>
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
    paddingTop: 323,
  },
});
