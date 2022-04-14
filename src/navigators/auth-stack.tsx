import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, StyleSheet} from 'react-native';

import Login from '../screens/auth/Login';
import {connect} from 'react-redux';

const mapStateToProps = (state: any) => {
  return state;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatch,
  };
};

const AuthFlow = createStackNavigator();

function AuthStack(props: any) {
  console.log('auth-stack', props);
  return (
    <AuthFlow.Navigator
      initialRouteName={'Login'}
      screenOptions={{
        headerStyle: {backgroundColor: '#1A1924', borderBottomColor: 'white'},
        headerTitleStyle: {color: 'white'},
      }}>
      <AuthFlow.Screen name="Login" component={Login} />
      {/* App Multiple screens here */}
    </AuthFlow.Navigator>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    color: 'white',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthStack);
