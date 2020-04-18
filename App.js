import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { createStackNavigator } from '@react-navigation/stack';
import Navigator from './routes/drawer';

const Stack = createStackNavigator();
const getFonts = () => {
  return Font.loadAsync({
    'quicksand-regular' : require('./assets/fonts/Quicksand-Regular.ttf'),
    'quicksand-light' : require('./assets/fonts/Quicksand-Light.ttf'),
    'quicksand-bold' : require('./assets/fonts/Quicksand-SemiBold.ttf'),
    'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
  })
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);
    
  if(fontsLoaded){
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <Navigator />
      </View>
    );
  } else {
    return (
    <AppLoading
      startAsync={getFonts}
      onFinish={()=> setFontsLoaded(true) }
    />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b90da',
  },
});
