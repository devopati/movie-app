import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { custoomColors } from '../colors/custom-colors'

const PrimaryButton = ({onPress,text,contstyle,textstyle}) => {
    const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity onPress={onPress}
          style={[styles.button,contstyle]}>
            <Text style={[{ fontWeight: "600" },textstyle]}>{text}</Text>
          </TouchableOpacity>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: custoomColors.p_yellow,
        paddingVertical: 16,
        paddingHorizontal: 18,
        borderRadius: 36,
        justifyContent: "center",
        alignItems: "center",
      },
})