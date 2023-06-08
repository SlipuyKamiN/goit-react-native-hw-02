import styled from "styled-components/native";

export const Form = styled.View`
  flex: 1;
  position: relative;
  align-items: center;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 16px;
  padding-top: 32px;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
`;

export const ScreenTitle = styled.Text`
  font-size: 30px;
  font-weight: 500;
  line-height: 35px;
  margin-bottom: 33px;
  font-family: "Roboto_500Medium";
`;

export const Input = styled.TextInput`
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

export const PasswordInputWrapper = styled.View`
  position: relative;
  margin-bottom: 43px;
`;

export const ShowPasswordButton = styled.TouchableOpacity`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 16px;
  color: #1b4371;
  font-family: "Roboto_400Regular";
`;

export const ShowPasswordButtonText = styled.Text`
  font-size: 16px;
  color: #1b4371;
  font-family: "Roboto_400Regular";
`;

export const LogInButton = styled.TouchableOpacity`
  width: 343px;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-radius: 25px;
  background-color: #ff6c00;
`;

export const LogInButtonText = styled.Text`
  text-align: center;
  line-height: 19px;
  font-size: 16px;
  color: #ffffff;
  font-family: "Roboto_400Regular";
`;

export const RegisterLink = styled.Text`
  font-size: 16px;
  line-height: 19px;
  color: #1b4371;
  font-family: "Roboto_400Regular";
`;

// form: {
//   position: "relative",
//   flex: 1,
//   backgroundColor: "#fff",
//   alignItems: "center",
//   borderTopLeftRadius: 25,
//   borderTopRightRadius: 25,
//   paddingTop: 32,
// },
// imageWrapper: {
//   position: "absolute",
//   transform: [{ translateY: -60 }],
//   top: 0,
// },
// image: {
//   width: 120,
//   height: 120,
//   borderRadius: 16,
//   backgroundColor: "#f6f6f6",
// },
// button: {
//   position: "absolute",
//   width: 25,
//   height: 25,
//   right: 0,
//   top: "60%",
//   transform: [{ translateX: 12.5 }],
//   backgroundColor: "transparent",
//   borderWidth: 1,
//   borderRadius: 25,
//   textAlign: "center",
//   flex: 1,
//   alignItems: "center",
//   justifyContent: "center",
// },
// screenTitle: {
//   fontSize: 30,
//   fontWeight: 500,
//   lineHeight: 35,
//   marginBottom: 33,
//   fontFamily: "Roboto_400Regular",
// },
// input: {
//   width: 343,
//   height: 50,
//   borderWidth: 1,
//   borderColor: "#E8E8E8",
//   borderRadius: 8,
//   backgroundColor: "#f6f6f6",
//   marginBottom: 16,
//   padding: 16,
//   fontFamily: "Roboto_400Regular",
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
// LogInButton: {
//   width: 343,
//   paddingTop: 16,
//   paddingBottom: 16,
//   marginBottom: 16,
//   borderRadius: 100,
//   backgroundColor: "#FF6C00",
// },
// LogInButtonText: {
//   textAlign: "center",
//   lineHeight: 19,
//   fontSize: 16,
//   color: "#ffffff",
//   fontFamily: "Roboto_400Regular",
// },
// RegisterLink: {
//   fontSize: 16,
//   lineHeight: 19,
//   color: "#1B4371",
//   fontFamily: "Roboto_400Regular",
// },
