import * as React from 'react';
import { Image, Platform, Dimensions, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import {globalStyles} from '../styles/global';
import {HomeSlider} from '../components/HomeSlider';
import { MonoText } from '../components/StyledText';

const images = [
  "../assets/images/slides/slide05_0.png",
  "../assets/images/slides/slide01.png",
  "../assets/images/slides/slide03_0.png",
  "../assets/images/slides/slide04.png"
];

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.sliderContainer}>
          <HomeSlider images={images} style={styles.slider} />
        </View>
        <View style={styles.welcomeContainer}>
          <Text style={[globalStyles.titleText,styles.welcomeTitle]}>We can help you cure:</Text>
        </View>
        <View style={styles.homeTopicsList}>
          <TouchableOpacity onPress={() => navigation.navigate('EDScreen')}>
            <ImageBackground
              style={styles.homeTopicItem}
              //source={{uri: 'https://lh3.googleusercontent.com/9RNYdavEwRu0b0roKgIQLo3Q_X_cSV_VmeQkr_88_9e2LP1YYhwOc0aBkKzP3Zl-GK8TX8KqnG_ryD-iwTfkRjeXegsa02lISH1YpYt7LSRGzSNW3lM15hK00pw5HIr0ZvqO41yP1w=w360-h240-no'}}
              source={require('../assets/images/topics/ed.jpg')}
              imageStyle={{resizeMode: 'cover',borderRadius: 6}}
            >
                <View style={styles.homeTopicItemWrapText}>
                  <Text style={styles.homeTopicItemText}>Erectile dysfunction</Text>
                </View>
            </ImageBackground>
          </TouchableOpacity>
          <ImageBackground
            style={styles.homeTopicItem}
            source={require('../assets/images/topics/pd.jpg')}
            imageStyle={{resizeMode: 'cover',borderRadius: 6}}
          >
            <View style={styles.homeTopicItemWrapText}>
              <Text style={styles.homeTopicItemText}>Penis disorder</Text>
            </View>
          </ImageBackground>
          <ImageBackground
            style={styles.homeTopicItem}
            source={require('../assets/images/topics/preejc.jpg')}
            imageStyle={{resizeMode: 'cover',borderRadius: 6}}
          >
            <View style={styles.homeTopicItemWrapText}>
              <Text style={styles.homeTopicItemText}>Premature ejaculation</Text>
            </View>
          </ImageBackground>
          <ImageBackground
            style={styles.homeTopicItem}
            source={require('../assets/images/topics/shealth.jpg')}
            imageStyle={{resizeMode: 'cover',borderRadius: 6}}
          >
            <View style={styles.homeTopicItemWrapText}>
              <Text style={styles.homeTopicItemText}>Sexual health</Text>
            </View>
          </ImageBackground>
          <ImageBackground
            style={styles.homeTopicItem}
            source={require('../assets/images/topics/test-dis.jpg')}
            imageStyle={{resizeMode: 'cover',borderRadius: 6}}
          >
            <View style={styles.homeTopicItemWrapText}>
              <Text style={styles.homeTopicItemText}>Testicular disorder</Text>
            </View>
          </ImageBackground>
          <ImageBackground
            style={styles.homeTopicItem}
            source={require('../assets/images/topics/mreprodsys.jpg')}
            imageStyle={{resizeMode: 'cover',borderRadius: 6}}
          >
            <View style={styles.homeTopicItemWrapText}>
              <Text style={styles.homeTopicItemText}>Male reproductive system</Text>
            </View>
          </ImageBackground>
          <ImageBackground
            style={styles.homeTopicItem}
            source={require('../assets/images/topics/shockwave2.jpg')}
            imageStyle={{resizeMode: 'cover',borderRadius: 6}}
          >
            <View style={styles.homeTopicItemWrapText}>
              <Text style={styles.homeTopicItemText}>Shockwave therapy</Text>
            </View>
          </ImageBackground>
          <ImageBackground
            style={styles.homeTopicItem}
            source={require('../assets/images/topics/std.jpg')}
            imageStyle={{resizeMode: 'cover',borderRadius: 6}}
          >
            <View style={styles.homeTopicItemWrapText}>
              <Text style={styles.homeTopicItemText}>STD</Text>
            </View>
          </ImageBackground>
          <ImageBackground
            style={styles.homeTopicItem}
            source={require('../assets/images/topics/freprodsys.jpg')}
            imageStyle={{resizeMode: 'cover',borderRadius: 6}}
          >
            <View style={styles.homeTopicItemWrapText}>
              <Text style={styles.homeTopicItemText}>Female reproductive system</Text>
            </View>
          </ImageBackground>
          <ImageBackground
            style={styles.homeTopicItem}
            source={require('../assets/images/topics/stherapy.jpg')}
            imageStyle={{resizeMode: 'cover',borderRadius: 6}}
          >
            <View style={styles.homeTopicItemWrapText}>
              <Text style={styles.homeTopicItemText}>What is sex theraphy?</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.getStartedContainer}>
          <DevelopmentModeNotice />
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F6F1',
  },
  sliderContainer: {
    backgroundColor: '#1b90da',
    width: '100%',
    height: 200
  },
  slider: {
    width: 200,
    height: 200,
    backgroundColor: '#ff0000'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 0,
  },
  welcomeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeTitle: {
    textAlign: 'center',
    paddingTop: 10
  },
  welcomeImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 16,
    
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    fontFamily: 'quicksand-regular',
    
  },
  homeTopicsList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    paddingTop: 0,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  homeTopicItem:{
    width: (Dimensions.get('window').width - 50) / 2,
    height: 134,
    borderRadius: 6,
    marginBottom: 17
  },
  homeTopicItemWrapText: {
    backgroundColor: 'rgba(229, 45, 95,0.5)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    padding: 5
  },
  homeTopicItemText:{
    fontFamily: 'quicksand-bold',
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center'
  },
});
