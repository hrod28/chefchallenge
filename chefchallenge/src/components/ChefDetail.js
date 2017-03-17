'use strict';
import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const ChefDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <View></View>
        <View style={styles.headerContentStyle}>
        <Text>{props.chef.name}</Text>
        <Text>{props.chef.restaurant}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
};

export default ChefDetail;
