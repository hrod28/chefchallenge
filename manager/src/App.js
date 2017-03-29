'use strict';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
   apiKey: "AIzaSyCvdZM-wAYCwP4VP7CY0WpDg86SDLC0pR4",
   authDomain: "managechef-39bd5.firebaseapp.com",
   databaseURL: "https://managechef-39bd5.firebaseio.com",
   storageBucket: "managechef-39bd5.appspot.com",
   messagingSenderId: "743306421925"
 };
 firebase.initializeApp(config);
  }

  render(){
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
