import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
//import {Actions} from 'react-native-router-flux';

import HeaderTop from './HeaderTop';
import FilterButton from './FilterButton';


/**
 * Just a centered logout button.
 */
export default class HeaderMain extends Component {
	render(){
		return(
			<View style={styles.container}>
				<HeaderTop pageTitle="Product List" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1976D2',
		paddingHorizontal: 20,
		paddingTop: 45,
		width: null,
    	borderRadius: 0,
		shadowColor: '#000',
	    shadowOffset: { width: 0, height: 2 },
	    shadowOpacity: 0.8,
	    shadowRadius: 2,
	    elevation: 1,
	}
});