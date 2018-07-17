import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
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
				<HeaderTop />
				<FilterButton />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'blue',
		height: 200,
	}
});