import { StyleSheet, View } from 'react-native'
import React from 'react'
import FinchTextInput from '../../base/FinchTextInput/FinchTextInput'
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';
import { color } from '../../theme/color';
import FinchText from '../../base/FinchText/FinchText';
import FinchImage from '../../base/FinchImage/FinchImage';
import { images } from '../../../assets';
import Feather from '@expo/vector-icons/Feather';


const Login = () => {

  const onSeenIcon = () => {
    return (
      <Ionicons name="checkmark-circle" size={32} color="green" />
    )
  }

  const leftIcon = () => {
    return (
      <Fontisto name="email" size={20} color={color.pale_gray} />
    )
  }

  const rightIcon = () => {
    return (
      <Feather name="eye-off" size={20} color={color.pale_gray} />
    )
  }
  return (
    <View style={{flex: 1}}>
      <View style={{ marginHorizontal: 24 , marginBottom: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 32}}>
            <FinchImage source={images.logo} style={{width: 20, height: 20, borderRadius: 5}}/>
            <FinchText text={'Finch'} style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }} textColorType={color.white} />
          </View>
        <FinchText text={'Get Started now'} style={{ fontSize: 40, fontWeight: 'bold' }} textColorType={color.white} />
      </View>
      <View style={{backgroundColor: color.white, flex: 1, borderTopRightRadius: 14, borderTopLeftRadius: 14,  paddingHorizontal: 24, top: '20%'  }}>
        <FinchText text={'Email'} style={{ fontSize: 12, fontWeight: 'medium', marginLeft: 10 , marginTop: 24, marginBottom: 10}} textColorType={color.grey} />
        <FinchTextInput leftIcon={leftIcon()} placeholder='Enter Email'/>
        <FinchText text={'Password'} style={{ fontSize: 12, fontWeight: 'medium', marginLeft: 10 , marginTop: 24, marginBottom: 10}} textColorType={color.grey} />
        <FinchTextInput rightIcon={rightIcon()} placeholder='Password'/>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})