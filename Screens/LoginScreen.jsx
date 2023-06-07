import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";

import {
  Form,
  ScreenTitle,
  Input,
  PasswordInputWrapper,
  ShowPasswordButton,
  LogInButton,
  LogInButtonText,
  RegisterLink,
} from "./LoginScreen.styled";

import { useState } from "react";

const RegistrationScreen = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [hidePassword, setHidePassword] = useState(true);
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  const submitData = {
    emailText,
    passwordText,
  };

  const handleSubmit = () => {
    if (emailText === "" || passwordText === "") {
      Alert.alert("Oops", "Please fill the folowing form");
      return;
    }
    console.log(submitData);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Form
        style={{
          marginTop: 147,
        }}
      >
        <ScreenTitle>Увійти</ScreenTitle>
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
            <Text>Показати</Text>
          </ShowPasswordButton>
        </PasswordInputWrapper>
        <LogInButton onPress={handleSubmit}>
          <LogInButtonText>Увійти</LogInButtonText>
        </LogInButton>
        <RegisterLink>Немає акаунту? Зареєструватися</RegisterLink>
      </Form>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  activeInput: {
    borderColor: "#FF6C00",
    backgroundColor: "#ffffff",
  },
});
