import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { bottomTabs } from '../constants/screen-names'
import BottomTabs from './BottomTabs'

const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (
   <Stack.Navigator>
    <Stack.Screen name={bottomTabs.BOTTOM_TABS} component={BottomTabs} options={{
        headerShown:false
    }}/>
   </Stack.Navigator>
  )
}

export default MainStack