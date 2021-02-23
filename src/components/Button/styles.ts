import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient)`
  width: 100%;
  height: 60px;
  margin-top: 16px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled(RectButton)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
`;
