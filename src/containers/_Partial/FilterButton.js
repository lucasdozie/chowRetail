import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Buton } from 'react-native';
//import {Actions} from 'react-native-router-flux';


/**
 * Just a centered logout button.
 */
export default class FilterButton extends Component {
    _onPressNew = () => (
        console.log("button goes "+ New)
        );
    _onPressExpired = () => (
        console.log("button goes "+ Expired)
        );
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Button
                        title: 'New'
                        onPress={_onPressNew}
                        style={styles.button}
                        color="#841584"
                    />  
                </View>
                <View>
                    <Button
                        title: 'Expired'
                        onPress={_onPressExpired}
                        style={styles.button}
                        color="#841584"
                    />  
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        height: 42,
        borderWidth: 1,
        borderRadius: 3,
        alignSelf: 'stretch',
        justifyContent: 'center',
        borderColor: 'rgba(0, 0, 0, 0.1)'
      },
    text: {
        textAlign: 'center',
        fontWeight: '400',
        color: 'white'
      }
});