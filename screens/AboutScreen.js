import * as React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {globalStyles} from '../styles/global';
import { render } from 'react-dom';

export default class AboutScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state =  { 
      isLoading: true
    }
  }
  componentDidMount(){
    return fetch('https://www.dramitjoshi.com/node/16.json')
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
            <Text style={globalStyles.paragraph}>{this.state.dataSource.body.value}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

AboutScreen.navigationOptions = {
  header: null,
};



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
});
