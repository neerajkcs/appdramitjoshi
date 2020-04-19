import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack'
import EDScreen from '../screens/topics/ErectileDysfunction'
import Header from '../components/Header'

const Stack = createStackNavigator()

export default Navigator = ({navigation}) => {
  return (
      <Stack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#1b90da',
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
            name='EDScreen' 
            component={EDScreen} 
            options={{
                title: 'Erectile Dysfunction',
                headerLeft: () => (
                    <Header navigation={navigation} />
                )
            }}
        />
      </Stack.Navigator>
  )
}