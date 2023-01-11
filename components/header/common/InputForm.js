import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import styleLogin from '../../../style/login/Index';
import style from '../../../style/header';

export default function InputForm({props, values, title, onChange,children}) {
  
  const styleIcon = title.toLowerCase() ==="password"||"repassword" ?{paddingRight:70 }:null
  return (
    <View style={{...stylesForm.ItemInput}}>
      <Text style={{...stylesForm.label}}>{title}</Text>
      <TextInput
        autoCapitalize="none"
        style={{...stylesForm.input,...styleIcon}}
        {...props}
        value={values}
        onChangeText={onChange}
      />
      {children}
    </View>
  );
}
const stylesForm = StyleSheet.create(styleLogin);
// const styles = StyleSheet.create(style)
