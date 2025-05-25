import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ESCREEN_NAME } from '../types/screenName';
import DashboardScreen from '../screen/DashboardScreen/DashboardScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ESCREEN_NAME.DASHBOARD_SCREEN} component={DashboardScreen}/>
    </Stack.Navigator>
  )
}

export default StackNavigation