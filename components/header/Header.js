import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import style from '../../style/header';
import {Button} from '@ant-design/react-native';
import {useRoute} from '@react-navigation/native';

const ButtonLink = ({title, onPress}) => {
  return (
    <Button onPress={onPress} size="large" style={styles.button}>
      <Text style={{...styles.text}}>{title}</Text>
    </Button>
  );
};

export default function Header({navi}) {
  const router = useRoute();
  const onPress = e => {
    switch (e.title) {
      case 'login':
        navi.navigate('LoginPage', {id: 'home'});
        break;
      case 'burger':
        navi.navigate('HomePage');
        break;
      default:
        console.log(e.title);
        break;
    }
  };

  return (
    <View style={styles.header}>
      <ButtonLink onPress={() => onPress({title: 'burger'})} title="Burger" />
      {router.name!=="LoginPage"&&<ButtonLink onPress={() => onPress({title: 'login'})} title="Login" />}
      <ButtonLink onPress={() => onPress({title: 'order'})} title="Order" />
      <ButtonLink onPress={() => onPress({title: 'logout'})} title="Logout" />
    </View>
  );
}

const styles = StyleSheet.create({...style});
