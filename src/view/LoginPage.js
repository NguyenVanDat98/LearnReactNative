import {Button} from '@ant-design/react-native';
import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Header from '../../components/header/Header';
import style from '../../style/header';
import styleLogin from '../../style/login/Index';
import RootPage from './RootPage';

export default function LoginPage({navigation}) {
  const [stepShowPass, setStepPass] = useState(true);
  const [values, setValues] = useState(null);
  const changeShow = () => {
    setStepPass(!stepShowPass);
  };
  return (
    <RootPage>
      <Header navi={navigation}></Header>
      <View style={{...styles.container}}>
        {/* form validate */}
        <View style={{...stylesForm.form}}>
          {/* input value Name */}
          <View style={{...stylesForm.ItemInput}}>
            <Text style={{...stylesForm.label}}>Name</Text>
            <TextInput
              autoCapitalize="none"
              style={{...stylesForm.input}}
              value={values?.name}
              onChange={e => {
                setValues({...values, name: e});
              }}></TextInput>
          </View>
          {/* input values pass */}
          <View style={{...stylesForm.ItemInput}}>
            <Text style={{...stylesForm.label}}>Password</Text>
            <TextInput
              autoCapitalize="none"
              secureTextEntry={stepShowPass}
              style={{...stylesForm.input}}
              value={values?.pass}
              onChange={e => {
                setValues({...values, pass: e});
              }}></TextInput>

            {/* icon show password */}
            <View style={{...stylesForm.icon}}>
              {stepShowPass ? (
                <Button style={{...styles.button}} onPress={() => changeShow()}>
                  <Text style={{...styles.text}}>Show</Text>
                </Button>
              ) : (
                <Button style={{...styles.button}} onPress={() => changeShow()}>
                  <Text style={{...styles.text}}>Hidden</Text>
                </Button>
              )}
            </View>
            {/* Button submit form  */}
          </View>
          <View style={{...stylesForm.buttonGroup}}>
            {/* button type submit */}
            <Button type="primary" style={{marginVertical: 20}}>
              <Text style={{...styles.text}}>Login</Text>
            </Button>
            {/* button go to sing up page */}
            <Button style={{...styles}}>
              <Text style={{...styles.text}}>Sign Up</Text>
            </Button>
          </View>
        </View>
      </View>
    </RootPage>
  );
}
const styles = StyleSheet.create(style);
const stylesForm = StyleSheet.create(styleLogin);
