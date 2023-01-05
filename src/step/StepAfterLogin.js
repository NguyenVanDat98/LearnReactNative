import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import style from '../../style/header';
import HomePage from '../view/HomePage';
import LoginPage from '../view/LoginPage';
import RootPage from '../view/RootPage';
const Tabs = createBottomTabNavigator();

export default function StepAfterLogin() {
  return (
    <Tabs.Navigator
      initialRouteName='HomePage'
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {marginBottom: 10, height: 60, borderRadius: 100},
      }}>
      <Tabs.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarActiveTintColor: 'white',
          tabBarActiveBackgroundColor: '#3e62f2',
          tabBarIcon: ({color}) => (
            <AntDesign
              name="home"
              style={{...styles.text, color: color}}></AntDesign>
          ),
        }}
      />
      <Tabs.Screen
        name="LoginPage"
        component={RootPage}
        options={{
          tabBarLabel: 'Root',
          tabBarActiveTintColor: 'white',
          tabBarHideOnKeyboard: true,

          tabBarActiveBackgroundColor: '#3e62f2',
          tabBarIcon: ({color}) => (
            <AntDesign
              name="qrcode"
              style={{...styles.text, color: color}}></AntDesign>
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
const styles = StyleSheet.create(style);
