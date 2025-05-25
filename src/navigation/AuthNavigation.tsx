import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ESCREEN_NAME } from '../types/screenName';
import LoginScreen from '../screen/LoginScreen/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ESCREEN_NAME.LOGIN_SCREEN} component={LoginScreen}/>
    </Stack.Navigator>
  )
}

export default AuthNavigation