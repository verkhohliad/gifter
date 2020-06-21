import React from 'react';
import { View, Text, Button } from 'react-native';
import { LoginManager } from 'react-native-fbsdk';

import styles from './styles';

const LoginScreen = () => {
  const login = () => {
    LoginManager.logInWithPermissions(['public_profile']).then(
      (result) => {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log(result);
          console.log(
            `Login success with permissions: ${
              result.grantedPermissions.toString()}`,
          );
        }
      },
      (error) => {
        console.log(`Login fail with error: ${error}`);
      },
    );
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button
        title="Login via Facebook"
        onPress={login}
      />
    </View>
  );
};

export default LoginScreen;
