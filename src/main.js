import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import LoginScreen from './containers/LoginScreen.js';
import ProductScreen from './containers/ProductScreen.js';
import OtherScreen from './containers/OtherScreen.js';


export default class Main extends Component {
  render() {
	  return (
	    <Router>
	      <Scene key="root">
	        <Scene key="loginScreen"
	          component={LoginScreen}
	        	animation='fade'
	          hideNavBar={true}
	        />
	        <Scene key="otherScreen"
	          component={OtherScreen}
	          animation='fade'
	          hideNavBar={true}
	        />
          <Scene key="productScreen"
            component={ProductScreen}
            animation='fade'
            hideNavBar={true}
            initial
          />
	      </Scene>
	    </Router>
	  );
	}
}