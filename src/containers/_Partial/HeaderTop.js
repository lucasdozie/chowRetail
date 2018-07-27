import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';
import LoginScreen from './../Auth/LoginScreen.js';

/**
 * Just a centered logout button.
 */
export default class HeaderTop extends Component {
	constructor(props) {
	    super(props);

	    state = {
	      isLoading: false,    
	  	};
	    //this._onPress = this._onPress.bind(this);
	    
	  }

  	_goToLogin = () => {
  		console.log("Go back home");
  		Actions.pop();
  	}
  	
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.backButton}>
					<TouchableOpacity onPress={this._goToLogin}>
				      <Ionicons name="md-arrow-back" size={35}  style={styles.Ionicon} />
				    </TouchableOpacity>					
				</View>
				<View style={styles.TitleWrapper}>
					<Text style={styles.pageTitle}> {this.props.pageTitle} </Text> 
				</View>
				<View style={styles.search_more}>
					<Ionicons name="md-search" style={styles.Ionicon} />
					<Ionicons name="md-more" style={StyleSheet.flatten([styles.Ionicon, styles.more])} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	pageTitle: {
		color: '#fff',
		fontSize: 20
	},
	TitleWrapper: {
		borderWidth: 0,
	},
	backButton:{
		borderWidth: 0,
	},
	Ionicon: {
		fontSize: 25,
		color: '#fff'
	},
	search_more: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	more: {
		paddingLeft: 20
	}
});