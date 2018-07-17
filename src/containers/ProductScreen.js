import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Button, Alert, FlatList } from 'react-native';
import {Actions} from 'react-native-router-flux';
import data from './../../config/api/productsApi';


/**
 * Just a centered logout button.
 */
export default class ProductScreen extends Component {
  static propTypes = {
    logout: PropTypes.func
  }

  _submitData = () => (
      //console.log("After submit "+JSON.stringify(data[0]))
      data.forEach(
          (product) => {
            console.log("Product name: "+JSON.stringify(product['product_name']));

          }
        )
    );

  render () {
    //fetch from json file
    //const data = require('./../../config/api/productsApi');
    if (data) {
      console.log("True!!! products count "+data.length);
    }else{
      console.log("False XXX");
    }

    return (
      <View style={styles.container2}>
        <View style={styles.productList}>
          <FlatList
            data={data}
            renderItem={({item}) => <Text style={styles.item}>{item.product_name}</Text>}
            keyExtractor={(item, index) => index.toString()}
          />    
        </View>
        <View style={styles.buttonArea}>
          <Button
            title='Apple Inc'
            onPress={ this._submitData }
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#1976D2',
    margin: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  productList:{
    flex: 1,
    top: 40,
    height: null,
    backgroundColor: '#1976D2',

  },
  buttonArea: {
    flex: 1,
    top: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
   color: 'white'
  },
})