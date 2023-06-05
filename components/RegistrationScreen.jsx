import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const RegistrationScreen = () => {
  const [isLoginFocused, setIsLoginFocused] = useState(false);
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
        <View style={styles.imageWrapper}>
          <Image style={styles.image} />
          <TouchableOpacity style={styles.addButton}>
            <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
          </TouchableOpacity>
        </View>
        <Text style={styles.screenTitle}>Реєстрація</Text>
        <TextInput
          style={{
            ...styles.input,
            borderColor: isLoginFocused ? "#FF6C00" : "#E8E8E8",
            backgroundColor: isLoginFocused ? "#ffffff" : "#F6F6F6",
          }}
          placeholder="Логін"
          onFocus={() => {
            setIsLoginFocused(true);
          }}
          onBlur={() => {
            setIsLoginFocused(false);
          }}
        />
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
          <Text style={styles.registerButtonText}>Зареєструватися</Text>
        </TouchableOpacity>
        <Text style={styles.logInLink}>Вже є акаунт? Увійти</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    position: "relative",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 16,
    paddingTop: 92,
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
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
  addButton: {
    position: "absolute",
    width: 25,
    height: 25,
    right: 0,
    top: "60%",
    transform: [{ translateX: 12.5 }],
    backgroundColor: "transparent",
    borderRadius: 25,
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    border: "none",
  },
  screenTitle: {
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    marginBottom: 33,
    fontFamily: "Roboto_500Medium",
  },
  input: {
    width: 343,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
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
