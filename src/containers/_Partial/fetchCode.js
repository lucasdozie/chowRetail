import react, { component } from 'react';
export default _handleFetchData = () => {
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
      console.log("product: "+responseJson.products[0]);
      if(responseJson.success === true){
        //console.log('Json Projects: '+JSON.stringify(responseJson.products[0]));
        this.setState({
          newData: responseJson.products
        });     
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