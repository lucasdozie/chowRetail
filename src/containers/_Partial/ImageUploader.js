import React, {Component} from 'react'
import { StyleSheet, View, Text, Image, Alert, TouchableOpacity } from 'react-native'
import ImagePicker from 'react-native-image-picker'
//import RNFetchBlob from 'rn-fetch-blob'

export default class ImageUploader extends Component {
	constructor(props){
	    super(props);
	    this.state = {
	      refreshing: false,
	      newData: [],
	      email: 'lucasatwon@gmail.com',
	      password: '1793bsdh',
	      retailerId: 'DIIGL2G07Y9E16NUO',//'DQ6ZK9C8JP1M5H2XC',
	      expired: false
	    }

	  }

	selectPhoto(){
		ImagePicker.showImagePicker(options, (response) => {
		  console.log('Response = ', response);

		  if (response.didCancel) {
		    console.log('User cancelled image picker');
		  }
		  else if (response.error) {
		    console.log('ImagePicker Error: ', response.error);
		  }
		  else if (response.customButton) {
		    console.log('User tapped custom button: ', response.customButton);
		  }
		  else {
		    let source = { uri: response.uri };
		    this.setState({
		      imageSource: source
		    });
		  }
		});
	}
	submitUpload(){
		RNFetchBlob.fetch('POST', 'http://www.example.com/upload-form', {
		    Authorization : "Bearer access-token",
		    otherHeader : "foo",
		    'Content-Type' : 'multipart/form-data',
		  }, [
		    
		    { name : 'image', filename : 'image.png', type:'image/png', data: this.state.data},

		    // elements without property `filename` will be sent as plain text
		    { name : 'info', data : JSON.stringify({
		      mail : 'example@example.com',
		      tel : '12345678'
		    })},
		  ]).then((resp) => {
		    // ...
		  }).catch((err) => {
		    // ...
		  });
	}

	render(){
		return(
			<View style={styles.container}>
				<Image 
				style={styles.image} 
				source={this.state.imagesource != null ? this.state.imageSource : require('./../../images/not_available.jpg')}
				/>
				<TouchableOpacity 
					style={styles.button}
					onPress={this.selectPhoto.bind(this)}
					>
					<Text style={styles.text}>Select</Text>
				</TouchableOpacity>

				<TouchableOpacity 
					style={styles.button}
					onPress={this.submitUpload.bind(this)}
					>
					<Text style={styles.text}>Submit Upload</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const options = {
  title: 'Select Photo',
  takePhotoButtonTitle: 'Take a photo',
  chooseFromLibraryButtonTitle: 'Choose from gallery',
  quality: 1
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	button: {
		width: 250,
		height: 50,
		backgroundColor: '#330066',
	},
	text: {
		color: 'red',
		fontSize: 30,
		textAlign: 'center'
	},
	image: {
		width: 200,
		height: 200,
		marginTop: 30
	}
});