'use strict';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Axios from 'axios';

class ChefList extends Component {
  componentWillMount() {
    Axios.get('https://cap-backend.herokuapp.com/api/chefs')
         .then(response => console.log(response));
  }

  render () {
    return (
      <View>
        <Text>Chefs !! </Text>
      </View>
    );
  }
}

export default ChefList;
