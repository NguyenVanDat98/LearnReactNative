import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import LoginPage from '../view/LoginPage';
import RegisterPage from '../view/RegisterPage';
const SignPage = createMaterialTopTabNavigator();

export default function StepLogin({route ,navigation}) {
  const initParam = route.params?{ initialParams : {params:route.params}}:null
  return (
    <SignPage.Navigator>
      <SignPage.Screen name="SignIn" component={LoginPage}
    // {...initParam}
       />
      <SignPage.Screen name="SignUp" component={RegisterPage} />
    </SignPage.Navigator>
  );
}
