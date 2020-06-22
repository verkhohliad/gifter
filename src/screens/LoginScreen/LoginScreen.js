import React, { useState } from 'react';
import { View, Button, ActivityIndicator } from 'react-native';

import { Auth } from 'services/facebook';

import styles from './styles';

const LoginScreen = ({ setUserAccessData }) => {
  const [isLoading, setIsLoading] = useState(false);

  const login = async () => {
    setIsLoading(true);
    const result = await Auth.login();

    if (result) {
      const accessData = await Auth.loadToken();

      setIsLoading(false);
      setUserAccessData(accessData);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title="Login with Facebook"
        onPress={login}
      />
      {isLoading && <ActivityIndicator size="large" />}
    </View>
  );
};

export default LoginScreen;
