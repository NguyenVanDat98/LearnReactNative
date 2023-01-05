import { Button } from '@ant-design/react-native';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import InputForm from '../../components/header/common/InputForm';
import style from '../../style/header';
import styleLogin from '../../style/login/Index';
import RootPage from './RootPage';

export default function RegisterPage() {
  const [formValues, setValue] = useState(null);
  const [stepShowPass, setStepShowPass] = useState(true);
  const changeShow = () => {
    setStepShowPass(!stepShowPass);
  };
  return (
    <RootPage>
      <View style={{...Styles.container}}>
        <View style={{...stylesForm.form}}>
          <InputForm
            title={'Email'}
            values={formValues?.email}
            props={{placeholder:"text@text.com"}}
            onChange={e => {
              setValue({...formValues, email: e.nativeEvent.text});
            }}
          />
          <InputForm
            title={'Address'}
            values={formValues?.address}
            onChange={e => {
              setValue({...formValues, address: e.nativeEvent.text});
            }}
          />
          <InputForm
            title={'Telephone'}
            values={formValues?.phone}
            onChange={e => {
              setValue({...formValues, phone: e.nativeEvent.text});
            }}
          />
          <InputForm
            title={'Password'}
            values={formValues?.pass}
            props={{secureTextEntry: stepShowPass}}
            onChange={e => {
              setValue({...formValues, pass: e.nativeEvent.text});
            }}>
              <View style={{...stylesForm.icon}}>
              {stepShowPass ? (
                <Text onPress={() => changeShow()} style={{...Styles.text ,fontSize:16}}>
                  Show
                </Text>
              ) : (
                <Text onPress={() => changeShow()} style={{...Styles.text ,fontSize:16}}>
                  Hidden
                </Text>
              )}
            </View>
            </InputForm>
          <InputForm
            title={'RePassword'}
            values={formValues?.rePass}
            props={{secureTextEntry: stepShowPass}}
            onChange={e => {
              setValue({...formValues, rePass: e.nativeEvent.text});
            }}>
              <View style={{...stylesForm.icon}}>
              {stepShowPass ? (
                <Text onPress={() => changeShow()} style={{...Styles.text ,fontSize:16}}>
                  Show
                </Text>
              ) : (
                <Text onPress={() => changeShow()} style={{...Styles.text ,fontSize:16}}>
                  Hidden
                </Text>
              )}
            </View>
            </InputForm>
            <View style={{...stylesForm.buttonGroup,marginVertical:0}}>
              <Button type='primary'> Sign Up</Button>
            </View>
          
        </View>
      </View>
    </RootPage>
  );
}
const Styles = StyleSheet.create(style);
const stylesForm = StyleSheet.create(styleLogin);
