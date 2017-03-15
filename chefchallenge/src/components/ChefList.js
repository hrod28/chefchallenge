'use strict';
import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import ChefDetail from './ChefDetail';

class ChefList extends Component {
  state = { chefs: [] };

  componentWillMount() {
    axios.get('https://cap-backend.herokuapp.com/api/chefs')
         .then(response => this.setState({ chefs: response.data }));
  }

  renderChefs() {
    return this.state.chefs.map(chef =>
      <ChefDetail key={chef.name} chef={chef} />
    );
  }

  render () {
    console.log(this.state);
    return (
      <View>
        {this.renderChefs()}
      </View>

    );
  }
}

export default ChefList;
