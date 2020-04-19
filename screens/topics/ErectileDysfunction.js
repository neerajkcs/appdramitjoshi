import * as React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {globalStyles} from '../../styles/global';
import HTMLView from 'react-native-htmlview';
import { render } from 'react-dom';

export default class ErectileDysfunctionScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state =  { 
      isLoading: true
    }
  }
  componentDidMount(){
    return fetch('https://www.dramitjoshi.com/node/7.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
          <Text style={globalStyles.titleText}>{this.state.dataSource.title}</Text>
          <HTMLView
            value={this.state.dataSource.body.value}
            stylesheet={htmlstyles}
            style={styles.bodyContainer}
          />
          </View>
        </ScrollView>
      </View>
    );
  }
}

ErectileDysfunctionScreen.navigationOptions = {
  header: null,
};

const htmlstyles = StyleSheet.create({
  p: {
    marginVertical: -25,
    lineHeight: 20,
    fontSize: 16,
    color: '#333333',
    fontFamily: 'quicksand-regular',
  },
  b: {
    fontFamily: 'quicksand-bold',
  },
  strong: {
    fontFamily: 'quicksand-bold',
  },
  h2: {
    fontFamily: 'quicksand-bold',
    fontSize: 20,
    marginVertical: -25,
  },
  li: {
    fontFamily: 'quicksand-regular',
    lineHeight: 20,
    fontSize: 16,
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f6f1',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 16,
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  bodyContainer: {
      marginTop: 45
  }
});
