import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, StyleSheet} from 'react-native';

import Home from '../screens/app/Home';
import {connect} from 'react-redux';

const mapStateToProps = (state: any) => {
  return state;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatch,
  };
};

const AppFlow = createStackNavigator();

function AppStack(props: any) {
  console.log('home-stack', props);
  return (
    <AppFlow.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerRight: () => (
          <Text style={styles.headerRight}>{props.auth.userName}</Text>
        ),
        headerStyle: {backgroundColor: '#1A1924', borderBottomColor: 'white'},
        headerTitleStyle: {color: 'white'},
      }}>
      <AppFlow.Screen name="Home" component={Home} />
      {/* App Multiple screens here */}
    </AppFlow.Navigator>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    color: 'white',
    paddingRight: 15,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppStack);
