import {
  Image,
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
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
} from "./RegistrationScreen.styled";

const RegistrationScreen = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [hidePassword, setHidePassword] = useState(true);
  const [loginText, setLoginText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Form
        style={{
          marginTop: 147,
        }}
      >
        <ImageWrapper>
          <AvatarImage />
          <AddButton>
            <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
          </AddButton>
        </ImageWrapper>
        <ScreenTitle>Реєстрація</ScreenTitle>
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
        <RegisterButton>
          <RegisterButtonText>Зареєструватися</RegisterButtonText>
        </RegisterButton>
        <LogInLink>Вже є акаунт? Увійти</LogInLink>
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
