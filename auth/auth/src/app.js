'use strict';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA_eXpUzy-hNMGom-o_qDGTxgNIO9LW8QA',
      authDomain: 'auth-3cd69.firebaseapp.com',
      databaseURL: 'https://auth-3cd69.firebaseio.com',
      storageBucket: 'auth-3cd69.appspot.com',
      messagingSenderId: '449720555812'
    });

    firebase.auth().onAuthStateChanged((user)=>{
      if (user) {
        this.setState({ loggedIn: true });
      }
      else {
        this.setState({ loggedIn: false });
      }
    })
  }

  renderContent() {
      switch (this.state.loggedIn) {
        case true:
          return (
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
          );
        case false:
          return <LoginForm />;
        default:
          return <Spinner size="large" />;
      }
    }


  render() {
    return(
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
