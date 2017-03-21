'use strict';

import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    alignItems: 'center',
    backgroundColor: 'yellow',
    justifyContent: 'center',
    height: 80,
    paddingTop: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default Header;
