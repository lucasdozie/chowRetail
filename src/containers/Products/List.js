import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Image, FlatList, RefreshControl, Alert, axios, AsyncStorage } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import defaultImg from './../../images/chowRetail1.png';
import { Actions } from 'react-native-router-flux';
import Form from './Form.js';
import spinner_wait from './../../images/wait.gif'//product image loader

export default class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      refreshing: false,
      isLoading: true,
      data: [],
      email: 'lucasatwon@gmail.com',
      password: '1793bsdh',
      retailerId: 'DIIGL2G07Y9E16NUO',
      expired: true
    }

    this._handleFetchData();
  }

  componentDidMount(){
    this._handleFetchData = this._handleFetchData.bind();
  }


  _onRefresh = () => {
    //do nothing
    this.setState({refreshing: true});
    this._handleFetchData();
    //console.log("Work with me "+ this._handleFetchData());
    this.setState({refreshing: false});
  };

  _toEditProduct = () => {
    console.log('isLoading is '+this.state.isLoading);
    if(!this.state.isLoading){
        Actions.EditProductScreen();
    }
  };

  
 // method to be use on user auth page
  _handleFetchData = () => {
    const remote_url = "http://www.chowberry.com/api/retailerProducts/";
    const { retailerId, expired } = this.state;
    fetch(remote_url, {
      method: "POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        retailerID: retailerId,
        expired: expired
      })
    })
    .then((response) => response.json())
    .then( (responseJson) => {
      console.log("success: "+responseJson.success);
      console.log("product: "+ JSON.stringify(responseJson.products[3]));
      if(responseJson.success === true){
        this.setState({
          data: responseJson.products,
          isLoading: false
        });

         
         //console.log("Data: "+ this.state.data);
        //Set the value
        /*AsyncStorage.multiSet([
            ["product_name", newData[0].product_name],
            ["description", newData[0].product_description]
        ])*/
         /*
        //delete the value
        let keys = ['email', 'password'];
        
        AsyncStorage.multiRemove(keys, (err) => {
            ('Local storage user info removed!');
        });
        */
        //AsyncStorage.setItem('user', res.user); //can get the value anywhere on the page
        // then navigate to the productListing screeen
       
      }else{
        Alert.alert(
          'Error msg',
          responseJson.message,
          [
            /*{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},*/
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        );//failed 
      }
      
    })
    .catch((err) => {
      console.error("Error msg: "+ err);
    });
  };

  render(){
    const { data } = this.state;
    return (
      <View style={styles.productList}>
        { this.state.isLoading == false ?
          (data) ?
             (
            <FlatList
                  data={data}
                  style={styles.flatList}
                  refreshControl={
                    <RefreshControl
                      refreshing={this.state.refreshing}
                      onRefresh={this._onRefresh}
                    />
                  }
                  renderItem={({item}) => (
                    <View style={styles.productWrapper}>
                      <Image 
                        source={{uri: `${item.imageUrl}`}}
                        loadingIndicatorSource={defaultImg}
                        style={{width: 50, height: 55}}/>
                      <View style={styles.product_name}>
                        <Text onPress={this._toEditProduct} style={styles.item_name, {fontSize: 15}}>{item.product_name}</Text>
                        <Text 
                          numberOfLines={1}
                          style={styles.item_description}
                        >
                          {item.product_description}</Text>
                        <Text style={styles.item_expired}>Expires in {item.expiresIn} days</Text>
                      </View>
                      <View style={styles.product_meta}>
                        <Text style={styles.productMetaText}>
                          <Ionicons name="md-cash" style={styles.Ionicon} />
                          N{item.market_price}
                        </Text>
                        <Text style={styles.productMetaText}>
                          <Ionicons name="md-time" style={styles.Ionicon} />
                          {item.quantity > 1 ?
                            <Text>{item.quantity} qty</Text>
                            :
                            <Text>{item.quantity} qty</Text>
                          }</Text>
                        
                        <Text style={styles.productMetaText}>
                          <Ionicons name="md-trash" style={styles.Ionicon} />
                          Delete
                        </Text>
                      </View>
                    </View>
                    )}
                  keyExtractor={(item, index) => index.toString()}
                />
                    ) 
                  :
                    (
                      <Text>No product found</Text> 
                    )
                
                : (
                  <View style={styles.loaderContainer}>
                    <Image source={spinner_wait} style={styles.imageLoader} />
                  </View>
                ) 
              }
      </View>
      );
  }
}

const styles = StyleSheet.create({
  flatList: {
    backgroundColor: '#f2f4f8'
  },
  default_img: {
    width: 50,
    height: 60
  },
  productList:{
    flex: 5,
    top: 0,
    paddingHorizontal: 0,
    height: null,
    backgroundColor: '#ffffff',

  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null
  },
  imageLoader:{
      width: 70,
      height: 70
  },
  productWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: null,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10
  },
  item_description: {
    fontSize: 11,
  },
  item_expired: {
    fontSize: 10,
  },
  product_name: {
  //  textAlign: 'left',
    borderWidth: 0,
    borderColor: '#ccc',
    flex: 1,
    paddingHorizontal: 8,
  },
  item_name: {
    textAlign: 'left',
  },
  item: {
    padding: 10,
    fontSize: 16,
    height: 44,
   color: 'black'
  },
  productMetaText: {
    fontSize: 11,
    marginBottom: 5

  },
  Ionicon: {
    fontSize: 14,
    color: '#555',
    marginRight: 5
  }
});