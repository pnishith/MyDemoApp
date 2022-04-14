import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AppStack from '../navigators/app-stack';
import AuthStack from '../navigators/auth-stack';

import {connect} from 'react-redux';

const mapStateToProps = (state: any) => {
  return state;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatch,
  };
};

function App(props: any) {
  console.log(props);
  return (
    <NavigationContainer>
      {props.auth.isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
