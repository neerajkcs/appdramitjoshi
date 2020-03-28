import React from 'react'
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack'
import Home from '../screens/HomeScreen'
import Header from '../components/Header'

const Stack = createStackNavigator()

export default Navigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen 
            name='Home' 
            component={Home} 
            options={{
                headerTitle: () => <Header/>,
                headerStyle: {backgroundColor: '#eeeeee'}
            }} 
        />
      </Stack.Navigator>
  )
}