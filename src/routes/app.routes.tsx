import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../pages/Login';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#FAF5FF'},
    }}>
    <App.Screen name="Login" component={Login} />
  </App.Navigator>
);
  }

export default AppRoutes;
