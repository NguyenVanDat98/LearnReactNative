import {Button} from '@ant-design/react-native';
import React, {useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import style from '../../style/header';
import styleLogin from '../../style/login/Index';
import RootPage from './RootPage';
class validateForm {
  required = {
    message: 'This is required!',
    value: true,
  };
  email = {
    required: this.required,
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      message: 'the Value is not a Email!',
    },
  };
  password = {
    required: this.required,
    minLength: {
      message: 'Min lenght at least 8',
      value: 8,
    },
  };
}

export default function LoginPage({route, navigation}) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {},
  });
  const valid = new validateForm();

  const [stepShowPass, setStepPass] = useState(true);
  const params = route.params ? route.params : null;
  const changeShow = () => {
    setStepPass(!stepShowPass);
  };

  const onError = value => {
    const arrKey = Object.keys(value);
    const message = arrKey.reduce(
      (a, b, i) => a + `\n${b} : ${value[b].message}`,
      '',
    );
    Alert.alert('Warning!', message);
  };
  const handleLogin = value => {
    console.log(value);
    // if (params) {
    //   navigation.popToTop('StepAfterLogin', {
    //     screen: params?.parentRoute || ' ',
    //     params: {screen: params.params},
    //   });
    //   return;
    // } else {
    //   navigation.replace('StepAfterLogin');
    // }
  };
  return (
    <RootPage>
      <View style={{...styles.container}}>
        {/* form validate */}
        <View style={{...stylesForm.form}}>
          {/* input value Name */}
          <Controller
            control={control}
            rules={valid.email}
            render={({field: {onChange, value}}) => (
              <FormInputLogin
                value={value}
                title={'Email'}
                onChange={onChange}
              />
            )}
            name="email"
          />
          {/* input values pass */}
          <Controller
            control={control}
            rules={{...valid.password}}
            render={({field: {value, onChange}}) => (
              <FormInputLogin
                onChange={onChange}
                value={value}
                stepShowPass={stepShowPass}
                changeShow={changeShow}
                secureTextEntry={stepShowPass}
                title={'Password'}
              />
            )}
            name="password"
          />
          <View style={{...stylesForm.buttonGroup}}>
            {/* button type submit */}
            <Button
              type="primary"
              onPress={handleSubmit(handleLogin, onError)}
              style={{marginVertical: 20}}>
              <Text style={{...styles.text}}>Login</Text>
            </Button>
            {/* button go to sing up page */}
            <Button
              onPress={() => navigation.navigate('SignUp')}
              style={{...styles}}>
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

const FormInputLogin = ({
  value,
  onChange,
  title,
  stepShowPass = false,
  changeShow,
}) => {
  return (
    <View style={{...stylesForm.ItemInput}}>
      <Text style={{...stylesForm.label}}>{title}</Text>
      <TextInput
        autoCapitalize="none"
        secureTextEntry={stepShowPass}
        style={{
          ...stylesForm.input,
          paddingRight: title?.toLowerCase() === 'password' ? 70 : 10,
        }}
        value={value}
        onChangeText={onChange}
      />
      {title?.toLowerCase() === 'password' && (
        <View style={{...stylesForm.icon}}>
          {stepShowPass ? (
            <Text
              onPress={() => changeShow()}
              style={{...styles.text, fontSize: 16}}>
              Show
            </Text>
          ) : (
            <Text
              onPress={() => changeShow()}
              style={{...styles.text, fontSize: 16}}>
              Hidden
            </Text>
          )}
        </View>
      )}
    </View>
  );
};
