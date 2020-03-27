import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/HomeScreen';
import useLinking from './navigation/useLinking';

const Stack = createStackNavigator();
const getFonts = () => {
  return Font.loadAsync({
    'quicksand-regular' : require('./assets/fonts/Quicksand-Regular.ttf'),
    'quicksand-light' : require('./assets/fonts/Quicksand-Light.ttf'),
    'quicksand-bold' : require('./assets/fonts/Quicksand-SemiBold.ttf'),
    'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
  })
}

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  
    
  
    
  if(fontsLoaded){
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <Home />
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
    backgroundColor: '#fafafa',
  },
});
