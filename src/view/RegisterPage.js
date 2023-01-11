import {Button} from '@ant-design/react-native';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Alert, StyleSheet, Text, View} from 'react-native';
import InputForm from '../../components/header/common/InputForm';
import style from '../../style/header';
import styleLogin from '../../style/login/Index';
import { Validate } from '../validData';
import RootPage from './RootPage';

export default function RegisterPage({navigation}) {
  const {
    handleSubmit,
    getValues,
    control,
  } = useForm({defaultValues: {}});
  const [stepShowPass, setStepShowPass] = useState(true);
  const valid = new Validate
  const changeShow = () => {
    setStepShowPass(!stepShowPass);
  };
  const onSubmit =(data)=>{
     navigation.goBack()     
    }
    const onError =(errors)=>{
      const arrKey = Object.keys(errors);
      const message = arrKey.reduce(
        (a, b) => a + `\n${b} : ${errors[b].message}`,
        '',
      );
      Alert.alert('Warning!', message);
  }

  return (
    <RootPage>
      <View style={{...Styles.container}}>
        <View style={{...stylesForm.form}}>
          <Controller
            control={control}
            rules={valid.email}
            render={({field: {value, onChange}}) => (
              <InputForm
                title={'Email'}
                values={value}
                props={{placeholder: 'text@text.com'}}
                onChange={onChange}
              />
            )}
            name="email"
          />
          <Controller
            control={control}
            rules={valid.address}
            render={({field: {value, onChange}}) => (
              <InputForm title={'Address'} values={value} onChange={onChange} />
            )}
            name="address"
          />
          <Controller
            control={control}
            rules={valid.telephone}
            render={({field: {value, onChange}}) => (
              <InputForm
                title={'Telephone'}
                values={value}
                onChange={onChange}
              />
            )}
            name="telephone"
          />
          <Controller
            control={control}
            rules={valid.password}
            render={({field: {value, onChange}}) => (
              <InputForm
                title={'Password'}
                values={value}
                props={{secureTextEntry: stepShowPass}}
                onChange={onChange}>
                <IsShowPass
                  changeShow={changeShow}
                  stepShowPass={stepShowPass}
                />
              </InputForm>
            )}
            name="password"
          />
          <Controller
            control={control}
            rules={{...valid.password,pattern:{
              message:"Password does not match!",value:new RegExp(getValues("password"),"gm")
            }}}
            render={({field: {value, onChange}}) => (
              <InputForm
                title={'Re-Password'}
                values={value}
                props={{secureTextEntry: stepShowPass}}
                onChange={onChange}>
                <IsShowPass
                  changeShow={changeShow}
                  stepShowPass={stepShowPass}
                />
              </InputForm>
            )}
            name="re-password"
          />
          <View style={{...stylesForm.buttonGroup, marginVertical: 0}}>
            <Button type="primary" onPress={handleSubmit(onSubmit,onError)}> Sign Up</Button>
          </View>
        </View>
      </View>
    </RootPage>
  );
}
const Styles = StyleSheet.create(style);
const stylesForm = StyleSheet.create(styleLogin);

function IsShowPass({stepShowPass, changeShow}) {
  return (
    <View style={{...stylesForm.icon}}>
      {stepShowPass ? (
        <Text
          onPress={() => changeShow()}
          style={{...Styles.text, fontSize: 16}}>
          Show
        </Text>
      ) : (
        <Text
          onPress={() => changeShow()}
          style={{...Styles.text, fontSize: 16}}>
          Hidden
        </Text>
      )}
    </View>
  );
}