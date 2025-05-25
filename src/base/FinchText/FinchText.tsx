import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from 'react-native'
import React from 'react'
import {useTheme} from '@react-navigation/native';


interface IFinchText extends TextProps {
    text: string | number
    style?: StyleProp<TextStyle>
    textColorType?: string
}
const FinchText = (props: IFinchText) => {
    const { colors } = useTheme();
    const {style,text, textColorType, ...rest} = props
    const textColor = textColorType ? textColorType : colors.text 
  return (
      <Text {...rest} style={[styles.textStyle, style, {color: textColor}]}>{text}</Text>
  )
}

export default FinchText

const styles = StyleSheet.create({
    textStyle: {

    }
})