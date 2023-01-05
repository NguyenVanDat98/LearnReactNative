import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import React from 'react';
import styleHomePage from '../../style/homePage';
import {Button} from '@ant-design/react-native';
import style from '../../style/header';
import {useSelector} from 'react-redux';
import {decremented, incremented} from '../../src/redux/orderReducer';

export default function Ingredient({title}) {
  let tit = title.toLowerCase();
  const dispatch = useDispatch();
  const {[tit]: value} = useSelector(_ => _.products);
  const handleChangeCount = () => {
    dispatch(incremented(tit));
  };
  const handleChangeCountdec = () => {
    dispatch(decremented(tit));
  };
  return (
    <View style={{...styleHomePage.Ingredient}}>
      <Text style={{...styleHomePage.label}}>{title}</Text>
      <View style={{...styleHomePage.groupBtn}}>
        <Button disabled={value===0} onPress={handleChangeCountdec}>
          <Text style={{...style.text,fontSize:30}}>-</Text>
        </Button>
        <Text
          style={{
            paddingVertical: 5,
            marginHorizontal: 10,
            fontSize: 30,
            fontWeight: '600',
            color: 'black',
          }}>
          {value}
        </Text>
        <Button disabled={value===3} onPress={handleChangeCount}>
          <Text style={{...style.text,fontSize:24}}>+</Text>
        </Button>
      </View>
    </View>
  );
}
