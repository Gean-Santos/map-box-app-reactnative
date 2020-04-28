import React from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import Home from './Home';

export default function App() {
  return (
    <View style={{flex: 1, height: '100%'}}>
      <Header />
      <Home />
    </View>
  );
}