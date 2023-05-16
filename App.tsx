import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from './src/Screens/HomeScreen';
import {Provider} from 'react-redux';
import store from './src/Providers/Store';
import StackNavigators from './src/Navigators/Stacknavigator';

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigators />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
