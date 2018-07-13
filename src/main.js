import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
//import Container from './container/index.js';


export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingText: true,
      isLoaded: false,
      logo: ''
    };

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  componentDidMount(){

  }
  _onInputChange = (word) => {
    this.setState({
      logo: word,
    });
  }

  render() {
    let logo_url = './images/'+this.setSate.logo+'.jpg';

    return (
      <View style={styles.container}>
        <View>
          <Text>HEADER!</Text>
          <Image source={logo_url} style={{width: 193, height: 110}}/>
        </View>
        <Text>Chowberry retail app Open up 🍕 App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <View style={styles.formarea}>
          <TextInput
          style={{height: 40}}
          placeholder="Enter logo"
//          onChange={this._onInputChange()}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
