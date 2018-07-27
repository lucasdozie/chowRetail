import React, { Component } from 'react';
//import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import HeaderMain from './../_Partial/HeaderMain';
import ProductList from './List';
import FilterButton from './../_Partial/FilterButton';

/**
 * Just a centered logout button.
 */
export default class Index extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.containers}>
          <HeaderMain />
          <FilterButton />
        </View>
        <ProductList style={styles.productList}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  containers: {
    flex: 1,
    width: null,
    height: 40,
  },
  productList:{
    flex: 4,
    top: 0,
    paddingHorizontal: 0,
    height: null,
    backgroundColor: '#ffffff',
  }
})