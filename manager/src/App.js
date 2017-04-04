'use strict';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;
