import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
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
          />
          <ShowPasswordButton
            onPress={() => {
              setHidePassword(!hidePassword);
            }}
          >
            <Text>Показати</Text>
          </ShowPasswordButton>
        </PasswordInputWrapper>
        <LogInButton>
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
