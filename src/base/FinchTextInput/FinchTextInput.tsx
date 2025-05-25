import { View, Text, TextInput, TextInputProps, StyleSheet } from 'react-native'
import React from 'react'
import { color } from '../../theme/color';
import { useTheme } from '@react-navigation/native';


interface IFinchTextInput extends TextInputProps {
    leftIcon?: React.JSX.Element
    rightIcon?: React.JSX.Element
    textColor?: string
}

const FinchTextInput = (props:IFinchTextInput) => {
    const { colors } = useTheme();
    const {leftIcon, rightIcon, placeholder, textColor} = props
        const placeHolderColorText = textColor ? textColor : colors.text
  return (
    <View style={styles.container}>
        {
          leftIcon ? (
            <>
              {leftIcon}
            </>
          ) : null
        }
        <TextInput {...props} placeholder={placeholder} placeholderTextColor={placeHolderColorText}  style={{paddingVertical: 16, flex: 1, paddingLeft: 8}}/>
        {
          rightIcon ? (
            <>
              {rightIcon}
            </>
          ) : null
        }
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1, 
    flexDirection: 'row', 
    borderColor: color.pale_gray, 
    alignItems: 'center', 
    borderRadius: 8, 
    paddingHorizontal: 6 
  },

})

export default FinchTextInput