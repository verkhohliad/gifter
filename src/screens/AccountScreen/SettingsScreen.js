import React, { useCallback } from 'react';
import { View, Button } from 'react-native';

import { Auth } from 'services/facebook';
import { useUserData } from 'shared/contexts/userData';

import { settingsStyles } from './styles';

const SettingsScreen = () => {
  const {
    setUserAccessData,
  } = useUserData();

  const logout = useCallback(() => {
    Auth.logout();
    setUserAccessData(null);
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
