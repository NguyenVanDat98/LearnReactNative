import {Button} from '@ant-design/react-native';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {ScrollView, Text, TextInput, View} from 'react-native';
import { useSelector } from 'react-redux';
import style from '../../style/header';
import {styleCheckout} from '../../style/header/checkOutPage.js';
import {Validate} from '../validData';

const nameInput = ['Name', 'Address', 'Email', 'Telephone'];

const FormInput = ({placeholder, title, value, onBlur, onChange, errors}) => {
  return (
    <View>
      <Text style={{...styleCheckout.label}}>{title}</Text>
      <TextInput
        onBlur={onBlur}
        keyboardType={title === 'Telephone' ? 'number-pad' : 'default'}
        value={value}
        style={{...styleCheckout.input}}
        placeholderTextColor={'rgb(99, 99, 99 )'}
        placeholder={placeholder}
        onChangeText={onChange}
        autoCapitalize="none"
      />
      {errors[title.toLocaleLowerCase()] && (
        <Text style={{color: 'red'}}>
          {errors?.[title.toLowerCase()].message}.
        </Text>
      )}
    </View>
  );
};

export default function Checkout() {
  const dataProduct = useSelector(_=>_.products)
  const keys= Object.keys(dataProduct)
  const valuee =(Object.values(dataProduct)).reduce((a,b)=>a+parseInt(b),0)
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {},
  });
  const onSubmit = data => console.log(dataProduct, 'data');
  const validate = new Validate();
  return (
    <ScrollView style={{...style.container}}>
      <View style={{...styleCheckout.preView}}>
        <View style={{...styleCheckout.productPreView}}>
          {keys.map((item, i) => (
            <ViewProduct key={i} title={item} value={dataProduct?.[item]} />
          ))}
          <ViewProduct title={"Total"} value={valuee}/>
        </View>
        <View style={{...styleCheckout.information}}>
          <Text style={{...styleCheckout.content}}>Infomation</Text>

          {nameInput.map((e, i) => {
            return (
              <Controller
                key={i}
                control={control}
                rules={validate[e.toLocaleLowerCase()]}
                render={({field: {onChange, onBlur, value}}) => (
                  <FormInput
                    errors={errors}
                    onBlur={onBlur}
                    value={value}
                    placeholder={e}
                    onChange={onChange}
                    title={e}
                  />
                )}
                name={e.toLocaleLowerCase()}
              />
            );
          })}
          <Button type="primary" onPress={handleSubmit(onSubmit)}>
            Submit
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
function ViewProduct({value, title}) {
  return (
    <View style={{...styleCheckout.product,backgroundColor: title==="Total"? 'rgb(206, 206, 206)':'rgba(206, 206, 206, 0.664)'}}>
      <Text style={{...styleCheckout.content,fontWeight: title ==="Total"?"700" :"400" , }}>{title}</Text>
      <Text style={{...styleCheckout.content}}>{value}</Text>
    </View>
  );
}
