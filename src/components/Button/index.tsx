import React from 'react';
import {RectButtonProperties} from 'react-native-gesture-handler';

import {Container, Button as RectButton, ButtonText} from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const Button: React.FC<ButtonProps> = ({children, ...rest}) => (
  <Container
    colors={['rgba(56,62,113,1)', 'rgba(157,37,176,1)']}
    start={{x: 1, y: 0}}
    end={{x: 0, y: 0}}>
    <RectButton {...rest}>
      <ButtonText>{children}</ButtonText>
    </RectButton>
  </Container>
);

export default Button;
