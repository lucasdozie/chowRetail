import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TextInput, AsyncStorage } from 'react-native';
//import HeaderMain from './_Partial/HeaderMain';
/**
 * Just a centered logout button.
 */
export default class EditProductForm extends Component {

  constructor(props) {
    super(props);
    state= {
      product: []
    }

    this._handleProductProps = this._handleProductProps.bind();
  }

  _handleProductProps = () => {
    //get the stored value
        AsyncStorage.multiGet(['product_name', 'description'])
        .then((data) => {
            //let email = data[0][1];
            console.log("Data: "+ data);
            this.setState({
              product: data[0][1],
              //product.push(data[0][1]),
            });
        })
        .catch(
          (err) => {
            console.error("Can't get the product name: "+ err);
          }
        )
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.formWrapper}>
            <Text> Edit you product metas here</Text>
            <Text></Text>
            <TextInput
            ref={(ref) => this.textInputRef = ref}
            autoCapitalize={'none'}
            autoCorrect={false}
            style={[styles.textInput, { color: 'red' }]}
            maxLength={32}
            underlineColorAndroid={'transparent'}
            placeholderTextColor={'rgba(255,255,255,0.4)'}
            selectionColor={'white'}
            onFocus={() => this.setState({ isFocused: true })}
            onBlur={() => this.setState({ isFocused: false })}
            //{...otherProps}
          />
        </View>
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
  formWrapper:{
    flex: 5,
    top: 0,
    paddingHorizontal: 0,
    height: null,
    backgroundColor: '#ffffff',

  }
})