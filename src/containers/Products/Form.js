import React, { Component } from 'react';
//import os from 'os';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, ScrollView, TextInput, Dimensions, Picker, Platform, Image, TouchableOpacity, ImageBackground, KeyboardAvoidingView } from 'react-native';

import EditForm from './../_Partial/EditProductForm';
import { Actions } from 'react-native-router-flux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import bgSrc from './../../images/wallpaper.png';
import UserInput from './../_Partial/UserInput.js'


export default class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      language: '',
      selectedValue: '',
      product: []
    }

    console.log(typeof this.product);
  }
  _goToLogin = () => {
      console.log("Go back home");
      //const os = require('os');
//      console.log("User: "+os.userInfo());
      Actions.pop();
    }

  handleChangeOption(val) {
    if (val !== 0) {
      this.setState({selectedValue: val});
    }
  }

  _renderLeft() {
    if (Actions.currentScene === 'EditProductScreen1') {
      return (
        <TouchableOpacity
          onPress={() => {
              console.log('Hamburger button pressed')
              Actions.refresh({data: "Cowbell Milk", title: "Choco Pop"})
            }
          }
          style={[styles.navBarItem, { paddingLeft: 10}]}>
          <Ionicons name="md-arrow-back" size={35}  style={styles.Ionicon} />
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity
          onPress={Actions.pop}
          style={[styles.navBarItem, { paddingLeft: 10}]}>
          <Ionicons name="md-arrow-back" size={35}  style={styles.Ionicon} />
        </TouchableOpacity>
      )
    }
  }

  _renderMiddle() {
    return (
      <View style={styles.navBarItem}>
        <Text style={styles.pageTitle}>{ this.props.title || 'Add Product'}</Text>
      </View>
    )
  }

  _renderRight() {
    return (
      <View style={[styles.navBarItem, { flexDirection: 'row', justifyContent: 'flex-end' }]}>
        <TouchableOpacity
          onPress={() => console.log('Share')}
          style={{ paddingRight: 10}}>
          <Ionicons name="md-search" style={styles.Ionicon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('Search')}
          style={{ paddingRight: 10 }}>          
          <Ionicons name="md-more" style={StyleSheet.flatten([styles.Ionicon, styles.more])} />
        </TouchableOpacity>
      </View>
    )
  }

  render () {
    let dinamicStyle = {}
    if (Actions.currentScene === 'customNavBar1') {
      dinamicStyle = { backgroundColor: '#000'}
    } else {
      dinamicStyle = { backgroundColor: '#590982'}
    }

    return (
      <ImageBackground style={styles.picture} source={bgSrc}>
        <View style={[styles.container, dinamicStyle]}>
          { this._renderLeft() }
          { this._renderMiddle() }
          { this._renderRight() }
        </View>
        <View style={styles.productNewWrapper}>
         <KeyboardAvoidingView behavior="padding" style={styles.picture}>
          <ScrollView>
            <View style={styles.inputWrapper, {height: null}}>
              <TextInput
                multiline={true}
                numberOfLines={4}
                placeholder="Product name"
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}/>
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                multiline={true}
                numberOfLines={6}
                placeholder="Catchy phrase about your product"
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}/>
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                multiline={true}
                numberOfLines={4}
                placeholder="Quantity on stock II"
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}/>
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                multiline={true}
                numberOfLines={4}
                placeholder="Quantity on stock II"
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}/>
            </View>
            <View style={styles.inputWrapper, styles.col_2}>
              <TextInput
                placeholder="Quantity in stock"
                style={[styles.input, styles.formControl]}
                underlineColorAndroid="transparent"
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}/>

              <TextInput
                placeholder="Market Price *"
                style={[styles.input, styles.formControl]}
                underlineColorAndroid="transparent"
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}/>
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                multiline={true}
                numberOfLines={4}
                placeholder="Quantity on stock II"
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(text) => this.setState({text})}
                />
            </View>
            <View style={styles.inputWrapper, styles.col_2}>
              <Picker
                  selectedValue={this.state.language}
                  style={{ height: 50}, styles.input, styles.formControl}
                  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                  <Picker.Item label="-- Special Chowberry Price --" value="java" />
                  <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <Picker
                  selectedValue={this.state.language}
                  style={{ height: 50, backgroundColor: '#fff' }, styles.input, styles.formControl}
                  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                  <Picker.Item label="-- Percentage Discount ---" value="java" />
                  <Picker.Item label='option 1' value='1' />
                  <Picker.Item label='option 2' value='2' />
                </Picker>
            </View>
            <View styele={styles.inputWrapper}>

            </View>
          </ScrollView>

         </KeyboardAvoidingView>
        </View>
      </ImageBackground>
      
    )
  }
}


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;



const styles = StyleSheet.create({
  container: {
    height: (Platform.OS === 'ios') ? 64 : 70,
    flexDirection: 'row',
    paddingTop: 20,
  },
  navBarItem: {
    flex: 1,
    justifyContent: 'center'
  },
  picture: {
    flex: 1,
    width: null,
    height: null,
  },
  headerContainer: {
    flex: 1,
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
  },
  productNewWrapper:{
    flex: 5,
    top: 0,
    paddingVertical: 20,
    height: null,
    backgroundColor: '#333'
  },
  pageTitle: {
    fontSize: 16,
    color: '#fff'
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: DEVICE_WIDTH - 40,
    height: 40,
    marginHorizontal: 20,
    marginBottom: 5,
    paddingLeft: 15,
    borderRadius: 10,
    color: '#fff',
  },
  inputWrapper: {
    flex: 1,
    marginVertical: 10
  },
  col_2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  formControl:{
    width: 60,
    flex: 1,
  }

})