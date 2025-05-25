import { StyleSheet, View } from 'react-native'
import React from 'react'
import { color } from '../../theme/color'
import FinchText from '../../base/FinchText/FinchText'

const RewardCard = () => {
  return (
    <View >
    <FinchText text={'1230'} style={{fontWeight: '600', fontSize: 70}} textColorType={color.white}/>
    </View>
  )
}

export default RewardCard

const styles = StyleSheet.create({})