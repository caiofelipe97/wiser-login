import styled, {css} from 'styled-components/native';
import {linearGradient} from 'polished';

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: center;
  flex-direction: row;
`;

export const BackgroundContainer = styled.View`
  flex: 1;
  align-self: stretch;
  ${linearGradient({
    colorStops: ['180deg', '#130525 0%', 'rgba(105, 57, 153, 0) 100%'],
    toDirection: 'to top right',
    fallback: '#FFF',
  })};
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
  max-width: 456px;
`;
