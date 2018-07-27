import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity, Alert } from 'react-native';
//import {Actions} from 'react-native-router-flux';
import spinner from './../../images/loading.gif';

/**
 * Just a centered logout button.
 */
export default class FilterButton extends Component {
    constructor(props){
        super(props)

        this.state = {
            isLoading: false,
        }
    }

    componentDidMount(){
        /*setTimeout(() => {
          this.setState({isLoading: true});
        }, 2000);*/

    }

    _onPressNew = () =>{
        /*AlertIOS.prompt(
          'Enter a value',
          null,
          text => console.log("You entered "+text)
        );*/
        Alert.alert(
          'Alert Title',
          'LATEST Products',
          [
            {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        )
        
        console.log("button goes New")
    };
    _onPressExpired = () =>{
        Alert.alert(
          'EXPIRED',
          'EXPIRED Products',
          [
            {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        )
        console.log("button goes Expired")
        }
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this._onPressNew}
                    activeOpacity={1}>
                    {this.state.isLoading ? (
                      <Image source={spinner} style={styles.image} />
                    ) : (
                      <Text style={styles.text}>LATEST</Text>
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={this._onPressExpired}
                    activeOpacity={1}>
                    {this.state.isLoading ? (
                      <Image source={spinner} style={styles.image} />
                    ) : (
                      <Text style={styles.text}>EXPIRED</Text>
                    )}
                  </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60
        //justifyContent: 'flex-start',
    },
    button: {
        height: null,
        width: 60,
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#1976D2',
       // margin: 20,
        borderBottomWidth: 3,
        borderColor: '#fff'
      },
    text: {
        textAlign: 'center',
        fontWeight: '400',
        color: 'white',
        fontSize: 15
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold'
      },
      image: {
        width: 24,
        height: 24,
      }
});