import React, { useCallback } from 'react';
import { View, Button } from 'react-native';

import { Auth } from 'services/firebase';
import { useUserData } from 'shared/contexts/userData';

import styles from './styles';

const SettingsScreen = () => {
  const {
    setAuthUserData,
  } = useUserData();

  const logout = useCallback(async () => {
    await Auth.logout();
    setAuthUserData(null);
  }, []);

  return (
    <View style={styles.settingsScreen}>
      <Button
        title="Logout"
        onPress={logout}
      />
    </View>
  );
};

export default SettingsScreen;
