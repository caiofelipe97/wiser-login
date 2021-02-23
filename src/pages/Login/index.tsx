import React, {useCallback, useRef} from 'react';
import {Alert, KeyboardAvoidingView, TextInput} from 'react-native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import * as Yup from 'yup';

import loginImage from '../../assets/background.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrros';

import {
  Container,
  BackgroundContainer,
  Background,
  Content,
  Title,
  SubTitle,
  ForgotPasswordText,
  ForgotPasswordClickableText,
} from './styles';

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const handleSignIn = useCallback(async (data: LoginFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      Alert.alert('Sucesso', 'Você foi autenticado com sucesso!');
      /*
      history.push('/dashboard');
      */
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
        return;
      }
      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao fazer login, cheque as credenciais.',
      );
    }
  }, []);

  const handleForgotPassword = useCallback(() => {
    console.log('ESQUECEU A SENHA');
  }, []);

  return (
    <Container
      contentContainerStyle={{
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: 'row',
      }}>
      <Background source={loginImage}>
        <BackgroundContainer
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
          colors={['rgba(19,5,37,1)', 'rgba(105,57,153,0)']}
        />
      </Background>

      <Content>
        <Title style={{color: '#000000'}}>Olá, seja bem-vindo!</Title>
        <SubTitle>Para acessar a plataforma, faça seu login.</SubTitle>
        <Form ref={formRef} onSubmit={handleSignIn}>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            name="email"
            label="E-MAIL"
            placeholder="user.name@mail.com"
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordInputRef.current?.focus();
            }}
            containerStyle={{marginBottom: 4, marginTop: 10}}
          />
          <Input
            ref={passwordInputRef}
            name="password"
            label="SENHA"
            placeholder="*******"
            secureTextEntry
            returnKeyType="send"
            onSubmitEditing={() => {
              formRef.current?.submitForm();
            }}
          />
        </Form>
        <Button
          onPress={() => {
            formRef.current?.submitForm();
          }}>
          ENTRAR
        </Button>

        <ForgotPasswordText>
          Esqueceu seu login ou senha?{'\n'}Clique{' '}
          <ForgotPasswordClickableText onPress={() => handleForgotPassword()}>
            aqui
          </ForgotPasswordClickableText>
        </ForgotPasswordText>
      </Content>
    </Container>
  );
};

export default Login;
