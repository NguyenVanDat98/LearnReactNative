import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import style from '../style/homePage/index';

export default function Burger() {
  return (
    <View>
      <StatusBar animated={true} hidden={false}></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create(style);
