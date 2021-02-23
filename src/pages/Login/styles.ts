import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.ScrollView``;

export const BackgroundContainer = styled(LinearGradient)`
  flex: 1;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  align-self: stretch;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 450px;
  padding: 0 80px;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: #383e71;
  font-weight: 400;
  line-height: 48px;
`;
export const SubTitle = styled.Text`
  line-height: 20px;
  font-size: 16px;
  color: #989fdb;
  margin-top: 16px;
  margin-bottom: 30px;
  font-weight: 600;
`;

export const ForgotPasswordText = styled.Text`
  font-size: 14px;
  color: #989fdb;
  text-align: center;
  margin-top: 32px;
`;
export const ForgotPasswordClickableText = styled.Text`
  color: #9d25b0;
  text-decoration: underline;
`;
