import React from 'react'
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack'
import Home from '../screens/HomeScreen'
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
            name='Home' 
            component={Home} 
            options={{
                title: 'Welcome to Dr. Amit Joshi',
                headerLeft: () => (
                    <Header navigation={navigation} />
                )
            }}
            /*options={({navigation}) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title='Welcome to Dr. Amit Joshi' />,
                    headerStyle: {
                        backgroundColor: '#1b90da',
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    }
                }
            }}*/ 
        />
      </Stack.Navigator>
  )
}