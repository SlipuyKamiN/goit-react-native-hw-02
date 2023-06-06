import {
  Image,
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const Form = styled.View`
  flex: 1;
  position: relative;
  align-items: center;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 16px;
  padding-top: 92px;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
`;

const ImageWrapper = styled.View`
  position: absolute;
  transform: translateY(-60px);
  top: 0;
`;

const AddButton = styled.TouchableOpacity`
  position: absolute;
  width: 25px;
  height: 25px;
  right: 0;
  top: 60%;
  transform: translateX(12.5px);
  background-color: transparent;
  border-radius: 25px;
  flex: 1;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
`;

const ScreenTitle = styled.Text`
  font-size: 30px;
  font-weight: 500;
  line-height: 35px;
  margin-bottom: 33px;
  font-family: "Roboto_500Medium";
`;

const AvatarImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 16px;
  background-color: #f6f6f6;
`;

const Input = styled.TextInput`
  width: 343px;
  height: 50px;
  border-width: 1px;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 16px;
  font-family: "Roboto_400Regular";
  border-color: #e8e8e8;
  background-color: #f6f6f6;
`;

const PasswordInputWrapper = styled.View`
  position: relative;
  margin-bottom: 43px;
`;

const ShowPasswordButton = styled.TouchableOpacity`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 16px;
  color: #1b4371;
  font-family: "Roboto_400Regular";
`;

const RegisterButton = styled.TouchableOpacity`
  width: 343px;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-radius: 25px;
  background-color: #ff6c00;
`;

const RegisterButtonText = styled.Text`
  text-align: center;
  line-height: 19px;
  font-size: 16px;
  color: #ffffff;
  font-family: "Roboto_400Regular";
`;

const LogInLink = styled.Text`
  font-size: 16px;
  line-height: 19px;
  color: #1b4371;
  font-family: "Roboto_400Regular";
`;

const RegistrationScreen = () => {
  const [focusedInput, setFocusedInput] = useState(null);

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
        />
        <PasswordInputWrapper>
          <Input
            secureTextEntry={true}
            placeholder="Пароль"
            style={focusedInput === "Password" && styles.activeInput}
            onFocus={() => {
              setFocusedInput("Password");
            }}
            onBlur={() => {
              setFocusedInput(null);
            }}
          />
          <ShowPasswordButton>
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
  // addButton: {
  //   position: "absolute",
  //   width: 25,
  //   height: 25,
  //   right: 0,
  //   top: "60%",
  //   transform: [{ translateX: 12.5 }],
  //   backgroundColor: "transparent",
  //   borderRadius: 25,
  //   flex: 1,
  //   textAlign: "center",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   padding: 0,
  //   border: "none",
  // },
  // screenTitle: {
  //   fontSize: 30,
  //   fontWeight: 500,
  //   lineHeight: 35,
  //   marginBottom: 33,
  //   fontFamily: "Roboto_500Medium",
  // },
  // input: {
  //   width: 343,
  //   height: 50,
  //   borderWidth: 1,
  //   borderRadius: 8,
  //   marginBottom: 16,
  //   padding: 16,
  //   fontFamily: "Roboto_400Regular",
  //   borderColor: "#E8E8E8",
  //   backgroundColor: "#F6F6F6",
  // },
  // passwordInputWrapper: {
  //   position: "relative",
  //   marginBottom: 43,
  // },
  // showPasswordButton: {
  //   position: "absolute",
  //   top: 16,
  //   right: 16,
  //   fontSize: 16,
  //   color: "#1B4371",
  //   fontFamily: "Roboto_400Regular",
  // },
  // registerButton: {
  //   width: 343,
  //   paddingTop: 16,
  //   paddingBottom: 16,
  //   marginBottom: 16,
  //   borderRadius: 100,
  //   backgroundColor: "#FF6C00",
  // },
  // registerButtonText: {
  //   textAlign: "center",
  //   lineHeight: 19,
  //   fontSize: 16,
  //   color: "#ffffff",
  //   fontFamily: "Roboto_400Regular",
  // },
  // logInLink: {
  //   fontSize: 16,
  //   lineHeight: 19,
  //   color: "#1B4371",
  //   fontFamily: "Roboto_400Regular",
  // },
});
