import React from 'react';
import { StyleSheet, Text, View, TextInput, Animated, Image, ImageBackground, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Dimensions from 'Dimensions';

import UserInput from './UserInput.js';

import usernameImg from './../images/username.png';
import passwordImg from './../images/password.png';
import eyeImg from './../images/eye_black.png';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: 'chowberry-logo',
      pressBtn: false,
      showPass: true 
    };

    this._onInputChange = this._onInputChange.bind(this);
    this._showPass = this._showPass.bind(this);

    this._onPress = this._onPress.bind(this);

    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated = new Animated.Value(0);
    
    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

/*  componentDidMount(){

  }
*/  
  _onInputChange = (word) => {
    this.setState({
      logo: word,
    });
  };

  _showPass = () => {
    this.state.press === false
      ? this.setState({showPass: false, press: true})
      : this.setState({showPass: true, press: false});
  };

  _onPress = () => {
    if (this.state.isLoading) return;

    this.setState({isLoading: true});
    Animated.timing(this.buttonAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start();

    setTimeout(() => {
      this._onGrow();
    }, 2000);

    setTimeout(() => {
      Actions.secondScreen();
      this.setState({isLoading: false});
      this.buttonAnimated.setValue(0);
      this.growAnimated.setValue(0);
    }, 2300);
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <UserInput 
              source={usernameImg}
              placeholder="Username"
              autoCapitalize={'none'}
              returnKeyType={'done'}
              autoCorrect={false}
            />
            <UserInput 
              source={passwordImg}
              placeholder="password"
              secureTextEntry={this.state.showPass}
              autoCapitalize={'none'}
              returnKeyType={'done'}
              autoCorrect={false}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.btnEye}
              onPress={this.showPass}>
              <Image source={eyeImg} style={styles.iconEye} />
            </TouchableOpacity>
          </KeyboardAvoidingView>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  btnEye: {
    position: 'absolute',
    top: 55,
    right: 28,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: DEVICE_WIDTH - 40,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
    color: '#ffffff',
  },
  inputWrapper: {
    flex: 1,
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 9,
  },
});
