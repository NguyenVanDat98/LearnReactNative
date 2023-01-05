import {Button} from '@ant-design/react-native';
import {Link, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import Ingredient from '../../components/burgerOrder/Ingredient';
import styleHomePage from '../../style/homePage';

export default function Burger() {
  const navi = useNavigation();
  const router = useRoute()
  const handleCheckout =()=>{
     navi.navigate("Checkout")
  }
  const handleOrder =()=>{
    navi.navigate("StepLogin",{ 
      screen:"SignIn",
      params: {params: router.name}})
  }
  return (
    <View style={{...styleHomePage.container}}>
      <ImageBackground
        style={{...styleHomePage.image}}
        source={{
          uri: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
        }}
      />
      <View style={{...styleHomePage.option}}>
        <Text
          style={{...styleHomePage.title}}
          onPress={() => {
            navi.navigate('Checkout');
          }}>
          Burger
        </Text>
      </View>
      <View style={{...styleHomePage.option, marginVertical: 0}}>
        <Ingredient title={'Salad'} />
        <Ingredient title={'Chesse'} />
        <Ingredient title={'Bacon'} />
        <Ingredient title={'Meat'} />
      </View>
      <View style={{alignItems: 'center', marginVertical:20}}>
        <Button type='primary' onPress={handleCheckout} style={{width: 100}}> Checkout</Button>
        <Button type='primary' onPress={handleOrder} style={{width: 100}}> Login</Button>
      </View>
    </View>
  );
}
