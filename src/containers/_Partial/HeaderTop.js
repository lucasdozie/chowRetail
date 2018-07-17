import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
//import {Actions} from 'react-native-router-flux';


/**
 * Just a centered logout button.
 */
export default class HeaderTop extends Component {
	render(){
		return(
			<View style={styles.container}>
				<View>
					<Text> Back </Text> 
				</View>
				<View>
					<Text> PageTitle </Text> 
				</View>
				<View>
					<Text> Search </Text> 
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
		backgroundColor: 'blue',
		height: 200,
	}
});