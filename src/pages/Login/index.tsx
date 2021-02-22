import React from 'react';
import {Text} from 'react-native';
import loginImage from '../../assets/background.png';

import {Container, BackgroundContainer, Background, Content} from './styles';

const App: React.FC = () => (
  <Container>
    <Background source={loginImage} />
    <Content>
      <Text style={{color: '#000000'}}> Login </Text>
    </Content>
  </Container>
);

export default App;
