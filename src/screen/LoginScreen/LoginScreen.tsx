import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '../../component/Login/Login'
import { images } from '../../../assets'
import {
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const LoginScreen = () => {
    const inset = useSafeAreaInsets()
  return (
    <ImageBackground  style={[styles.backgroundImg, {paddingTop: inset.top}]} source={images.loginBackground}>
     <ScrollView contentContainerStyle={{flex: 1}}>
       <Login />
     </ScrollView>
    </ImageBackground>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    backgroundImg: {

        flex: 1
    }
})