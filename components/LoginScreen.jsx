import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { useEffect, useState } from "react";

const RegistrationScreen = () => {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          ...styles.form,
          marginTop: 147,
        }}
      >
        <Text style={styles.screenTitle}>Увійти</Text>
        <TextInput
          style={{
            ...styles.input,
            borderColor: isEmailFocused ? "#FF6C00" : "#E8E8E8",
            backgroundColor: isEmailFocused ? "#ffffff" : "#F6F6F6",
          }}
          placeholder="Адреса електронної пошти"
          onFocus={() => {
            setIsEmailFocused(true);
          }}
          onBlur={() => {
            setIsEmailFocused(false);
          }}
        />
        <View style={styles.passwordInputWrapper}>
          <TextInput
            style={{
              ...styles.input,
              borderColor: isPasswordFocused ? "#FF6C00" : "#E8E8E8",
              backgroundColor: isPasswordFocused ? "#ffffff" : "#F6F6F6",
            }}
            placeholder="Пароль"
            onFocus={() => {
              setIsPasswordFocused(true);
            }}
            onBlur={() => {
              setIsPasswordFocused(false);
            }}
          />
          <TouchableOpacity style={styles.showPasswordButton}>
            <Text>Показати</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Увійти</Text>
        </TouchableOpacity>
        <Text style={styles.logInLink}>Немає акаунту? Зареєструватися</Text>
      </View>
    </TouchableWithoutFeedback>
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
  imageWrapper: {
    position: "absolute",
    transform: [{ translateY: -60 }],
    top: 0,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#f6f6f6",
  },
  button: {
    position: "absolute",
    width: 25,
    height: 25,
    right: 0,
    top: "60%",
    transform: [{ translateX: 12.5 }],
    backgroundColor: "transparent",
    borderWidth: 1,
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
});
