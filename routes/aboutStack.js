import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack'
import About from '../screens/AboutScreen'
import Header from '../components/Header'

const Stack = createStackNavigator()

export default Navigator = ({navigation}) => {
  return (
      <Stack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#2ECC71',
            shadowOpacity: 0,
            borderBottomWidth: 0,
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
            fontFamily: 'quicksand-bold',
            fontSize: 20,
            color: '#fff',
            letterSpacing: 0.5
        }
      }}>
        <Stack.Screen 
            name='About' 
            component={About} 
            options={{
                title: 'About',
                headerLeft: () => (
                    <Header navigation={navigation} />
                )
            }}
        />
      </Stack.Navigator>
  )
}