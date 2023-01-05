import {Button} from '@ant-design/react-native';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import style from '../../../style/header';
import AntDesign from "react-native-vector-icons/AntDesign"

export default function ControlNavi({navi}) {
  const onPress = () => {
    navi.goBack();
  };
  return (
    // <Button  onPress={onPress} style={{...styles.button}}>
    //   {/* <Image style={{width:30,height:30}} source={require('../../../icon/backicon.png')}></Image> */}
    //   {/* <ArrowLeftOutlined /> */}
    //   <AntDesign  name="doubleleft" style={{color:"black", fontSize:18}}></AntDesign>
    // </Button>
      <AntDesign onPress={onPress} name="doubleleft" style={{color:"black",  fontSize:18}}></AntDesign>
      // <Text onPress={onPress} style={{...styles.text}} > Back</Text>
  );
}
const styles = StyleSheet.create(style);
