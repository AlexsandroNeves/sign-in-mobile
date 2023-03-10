import React from 'react';
import { StatusBar } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import { Routes } from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      {/* adicionar cor no status bar/ fica no topo notificações do celular */}
      <StatusBar backgroundColor="#38a69d"  barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
  );
}

