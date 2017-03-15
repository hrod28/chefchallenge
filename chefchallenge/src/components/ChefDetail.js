'use strict';
import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

const ChefDetail = (props) => {
  return (
    <Card>
      <Text>{props.chef.name}</Text>
    </Card>
  );
};

export default ChefDetail;
