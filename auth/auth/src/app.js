'use strict';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA_eXpUzy-hNMGom-o_qDGTxgNIO9LW8QA',
      authDomain: 'auth-3cd69.firebaseapp.com',
      databaseURL: 'https://auth-3cd69.firebaseio.com',
      storageBucket: 'auth-3cd69.appspot.com',
      messagingSenderId: '449720555812'
    });
  }

  render() {
    return(
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
