import React, { useCallback } from 'react';
import { View, Button } from 'react-native';

import { Auth } from 'services/firebase';
import { useUserData } from 'shared/contexts/userData';

import { settingsStyles } from './styles';

const SettingsScreen = () => {
  const {
    setUserData,
  } = useUserData();

  const logout = useCallback(async () => {
    await Auth.logout();
    setUserData(null);
  }, []);

  return (
    <View style={settingsStyles.container}>
      <Button
        title="Logout"
        onPress={logout}
      />
    </View>
  );
};

export default SettingsScreen;
