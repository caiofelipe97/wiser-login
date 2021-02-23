import styled, {css} from 'styled-components/native';

interface InputContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const InputContainer = styled.View<InputContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #989fdb;

  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #ff377f;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #9d25b0;
    `}
`;

export const Label = styled.Text`
  font-size: 12px;
  color: #383e71;
  margin: 8px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #383e71;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const ErrorText = styled.Text`
  font-size: 10px;
  color: #ff377f;
  margin-left: 10px;
`;
