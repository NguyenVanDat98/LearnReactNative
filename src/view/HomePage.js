import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { useRoute } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import Btnlogout from '../../components/Btnlogout';
import style from '../../style/header';
import Burger from './Burger';
import Checkout from './Checkout';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export default function HomePage({route,navigation}) {
  const router= useRoute()
  return (
    <Stack.Navigator
    initialRouteName='Burger'
      screenOptions={{
        
        headerRight: props => {
          return <Btnlogout {...props} parentRoute={router.name} />;
        },
      }}>
      <Stack.Screen name="Burger" component={Burger} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create(style);
