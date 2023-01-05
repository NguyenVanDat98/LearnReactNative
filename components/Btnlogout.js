import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import AntDesgin from 'react-native-vector-icons/AntDesign';

export default function Btnlogout({onPress, parentRoute}) {
  const navigation = useNavigation();
  const route = useRoute();
  const handleLogin = () => {
    navigation.navigate('StepLogin', {
      screen: 'SignIn',
      params: {params: route.name, parentRoute},
    });
  };
  return (
    <AntDesgin
      onPress={handleLogin}
      name="logout"
      style={{fontSize: 20, color: 'black'}}
    />
  );
}


