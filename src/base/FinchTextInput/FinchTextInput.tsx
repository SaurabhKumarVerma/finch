import { View, Text, TextInput, TextInputProps, StyleSheet } from 'react-native'
import React from 'react'
import { color } from '../../theme/color';


interface IFinchTextInput extends TextInputProps {
    leftIcon?: React.JSX.Element
    rightIcon?: React.JSX.Element
}

const FinchTextInput = (props:IFinchTextInput) => {
    const {leftIcon, rightIcon, placeholder} = props
  return (
    <View style={styles.container}>
        {
          leftIcon ? (
            <>
              {leftIcon}
            </>
          ) : null
        }
        <TextInput {...props} placeholder={placeholder} style={{paddingVertical: 16, flex: 1, paddingLeft: 8}}/>
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