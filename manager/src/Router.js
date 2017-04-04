'use strict';
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import LandingMenu from './components/LandingMenu';

const RouterComponent = () => {
  return(
    <Router sceneStyle={{ paddingTop: 95 }}>
      <Scene key="login" component={LoginForm}
             title="Welcome To The Family Center's                             Chef Challenge for Children!                                                  Sign Up or Login below" />
      <Scene key="landingMenu" component={LandingMenu} title="Event Menu" />
    </Router>
  );
};

export default RouterComponent;
