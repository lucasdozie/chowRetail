import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import LoginScreen from './containers/Auth/LoginScreen.js';
import ProductScreen from './containers/Products/Index.js';
import ProductSingleScreen from './containers/Products/Form.js';
import EditProductScreen from './containers/Products/Form.js';
import imageUploadScreen from './containers/_Partial/ImageUploader.js'
import OtherScreen from './containers/OtherScreen.js';


export default class Main extends Component {
  render() {
	  return (
	    <Router>
	      <Scene key="root">
	        <Scene key="LoginScreen"
	          component={LoginScreen}
	          animation='fade'
	          hideNavBar={true}
	          
	        />
	        <Scene key="OtherScreen"
	          component={OtherScreen}
	          animation='fade'
	          hideNavBar={true}
	        />

          <Scene key="ProductScreen"
            component={ProductScreen}
            animation='fade'
            hideNavBar={true}
          />
          <Scene key="EditProductScreen"
	          component={EditProductScreen}
	          animation='fade'
	          hideNavBar={true}

	        />
          <Scene key="ProductSingleScreen"
            component={ProductSingleScreen}
            animation='fade'
            hideNavBar={true}
          />
          <Scene key="imageUploadScreen"
            component={imageUploadScreen}
            animation='fade'
            hideNavBar={true}
            initial
          />
	      </Scene>
	    </Router>
	  );
	}
}