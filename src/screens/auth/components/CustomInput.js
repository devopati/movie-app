import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { custoomColors } from '../../../colors/custom-colors'

const CustomInput = () => {
  return (
    <View>
      <TextInput style={styles.input} inputMode="numeric"/>
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    container:{
        alignSelf:"center"
    },
    input:{
       borderColor:custoomColors.p_yellow,
       color:custoomColors.p_white,
       borderWidth:1,
       borderRadius:5,
       backgroundColor:"#261D08",
       fontWeight:"600",
       justifyContent:"center",
       alignItems:"center",
       padding:8,
       textAlign:"center" 
    }
})