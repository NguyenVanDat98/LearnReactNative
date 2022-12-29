import {Button} from '@ant-design/react-native';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import style from '../../../style/header';

export default function ControlNavi({navi}) {
  const onPress = () => {
    navi.goBack();
  };
  return (
    <Button  onPress={onPress} style={{...styles.button}}>
      <Image style={{width:30,height:30}} source={require('../../../icon/backicon.png')}></Image>
    </Button>
  );
}
const styles = StyleSheet.create(style);
