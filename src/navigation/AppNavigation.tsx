import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ESCREEN_NAME } from '../types/screenName';
import StackNavigation from './StackNavigation';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ESCREEN_NAME.STACK_NAVIGATION} component={StackNavigation}/>
    </Stack.Navigator>
  )
}

export default AppNavigation