
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ControlNavi from '../../components/header/common/ControlNavi';
import Header from '../../components/header/Header';
import style from '../../style/header';
import RootPage from './RootPage';

export default function HomePage({navigation}) {

  return (
    <RootPage>
      <Header navi={navigation} />
      <View style={{...styles.container}}>
        <View style={{flexDirection: 'row', justifyContent:"flex-start", backgroundColor: 'white'}}>
          <ControlNavi navi ={navigation}/>
          <Text style={{...styles.text}}>home</Text>
        </View>
      </View>
    </RootPage>
  );
}

const styles = StyleSheet.create(style);
