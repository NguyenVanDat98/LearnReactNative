/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import style from './style/header';

import {
  StyleSheet
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/view/HomePage';
import LoginPage from './src/view/LoginPage';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginPage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
    // <SafeAreaView style={{...backgroundStyle}}>
    //     <StatusBar
    //       hidden={false}
    //       barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //       backgroundColor={backgroundStyle.backgroundColor}
    //       />

    //   </SafeAreaView>
  );
};

const styles = StyleSheet.create({...style});

export default App;
