import styled from "styled-components/native";

export const Form = styled.View`
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

export const ImageWrapper = styled.View`
  position: absolute;
  transform: translateY(-60px);
  top: 0;
`;

export const AddButton = styled.TouchableOpacity`
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

export const ScreenTitle = styled.Text`
  font-size: 30px;
  font-weight: 500;
  line-height: 35px;
  margin-bottom: 33px;
  font-family: "Roboto_500Medium";
`;

export const AvatarImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 16px;
  background-color: #f6f6f6;
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

export const RegisterButton = styled.TouchableOpacity`
  width: 343px;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-radius: 25px;
  background-color: #ff6c00;
`;

export const RegisterButtonText = styled.Text`
  text-align: center;
  line-height: 19px;
  font-size: 16px;
  color: #ffffff;
  font-family: "Roboto_400Regular";
`;

export const LogInLink = styled.Text`
  font-size: 16px;
  line-height: 19px;
  color: #1b4371;
  font-family: "Roboto_400Regular";
`;
