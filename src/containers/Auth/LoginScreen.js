import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, StyleSheet } from 'react-native';
import { Text } from 'react-native';
import {Actions} from 'react-native-router-flux';

import SignupTextWrapper from './SignupTextWrapper.js';
import Logo from './Logo.js';
import LoginForm from './LoginForm.js';
//import ButtonSubmit from './buttonSubmit.js';
import bgSrc from './../../images/wallpaper.png';

export default class LoginScreen extends Component{
	render(){
		return(
			<ImageBackground style={styles.picture} source={bgSrc}>
				<Logo />
				<LoginForm />
				<SignupTextWrapper />
			</ImageBackground>
		);
	}
}


const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
  },
});