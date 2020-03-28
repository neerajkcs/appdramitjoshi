import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack'
import About from '../screens/AboutScreen'

const Stack = createStackNavigator()

export default Navigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen 
            name='About' 
            component={About} 
            options={{
                title: 'About us',
                headerStyle: {backgroundColor: '#eeeeee'}
            }} 
        />
      </Stack.Navigator>
  )
}