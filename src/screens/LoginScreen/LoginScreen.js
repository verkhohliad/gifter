import React, { useState } from 'react';
import { View, Button, ActivityIndicator } from 'react-native';

import { Auth } from 'services/firebase';

import styles from './styles';

const LoginScreen = ({ setUserData, setFbAccessToken }) => {
  const [isLoading, setIsLoading] = useState(false);

  const login = async () => {
    setIsLoading(true);
    const result = await Auth.login();
    setIsLoading(false);

    if (result) {
      const { fbAccessToken, userData } = result;

      setUserData(userData);
      setFbAccessToken(fbAccessToken);
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
