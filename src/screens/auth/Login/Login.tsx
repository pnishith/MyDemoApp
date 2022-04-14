import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const Login = (props: {
  setLogin: (isLoggedIn: boolean, userName: string) => void;
}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Login"
        onPress={() => {
          props.setLogin(true, 'Nishith');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default Login;
