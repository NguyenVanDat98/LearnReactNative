import React, {useEffect, useState} from 'react';
import style from './style/header';

import {StyleSheet} from 'react-native';
import {firebase} from './src/config/firebaseCfg';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StepLogin from './src/step/StepLogin';
import StepAfterLogin from './src/step/StepAfterLogin';
import {Provider} from 'react-redux';
import store from './src/redux/store';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Stack = createNativeStackNavigator();

const App = () => {
  const [initalizing, setInittalizing] = useState(true);
  const [user, setUser] = useState();
  function onStackChange(user) {
    console.log(user?.email);
    setUser(user);
    if (initalizing) {
      setInittalizing(false);
    }
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onStackChange);
    return subscriber;
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* Step Login */}
        <Stack.Navigator
          initialRouteName="StepLogin"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="StepLogin" component={StepLogin} />
          <Stack.Screen name="StepAfterLogin" component={StepAfterLogin} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({...style});

export default App;
