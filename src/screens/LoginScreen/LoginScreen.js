import React, { useState } from 'react';
import { View, Button, ActivityIndicator } from 'react-native';

import { FBLogin, FBLoadToken } from 'services/facebook/auth';

import styles from './styles';

const LoginScreen = ({ setUserAccessData }) => {
  const [isLoading, setIsLoading] = useState(false);

  const login = async () => {
    setIsLoading(true);
    const result = await FBLogin();

    if (result) {
      const accessData = await FBLoadToken();

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
