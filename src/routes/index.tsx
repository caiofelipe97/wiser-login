import React, { useEffect } from 'react';
import { View, ActivityIndicator, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import AppRoutes from './app.routes';

import { ApplicationState } from '../store';
import { AuthState } from '../store/ducks/auth/types';


const Routes: React.FC = () => {
  const { user, loading, error } = useSelector<ApplicationState, AuthState>((state) => state.auth);

  useEffect(()=>{
    if(error){
      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao fazer login, cheque as credenciais.',
      );
    } else if(user && !error) {
      Alert.alert('Sucesso na autenticação', 'Seu usuário foi autenticado com sucesso!')
    }
  },[user, error])

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#9d25b0" />
      </View>
    );
  } else {
    return <AppRoutes />
  }
  }

export default Routes;
