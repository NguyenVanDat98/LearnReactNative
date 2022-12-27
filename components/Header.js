import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Header() {
    const navi = useNavigation()
    console.log(navi)
  return (
    <View>
      <Button title='Burger' ></Button>
      <Button title='Order' ></Button>
      <Button title='Login' ></Button>
      <Button title='logOut' ></Button>
    </View>
  )
}