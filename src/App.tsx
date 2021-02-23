import 'react-native-gesture-handler';

import React from 'react';
import { Provider } from 'react-redux';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import store from './store';
import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" translucent />
    <Provider store={store}>
      <View style={{flex: 1, backgroundColor: '#FAF5FF'}}>
        <Routes />
      </View>
    </Provider>
  </NavigationContainer>
);

export default App;
