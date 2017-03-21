/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import Header from './src/components/Header';
import ChefList from './src/components/ChefList';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


const App = () => (
  <View style={{ flex: 1}}>
    <Header headerText={'Chef Challenge For Children'} />
    <ChefList />
  </View>
);



const styles = StyleSheet.create({
  textStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    fontSize: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('chefchallenge', () => App);
