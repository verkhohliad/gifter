import React, { useCallback } from 'react';
import { View, Button } from 'react-native';

import { FBLogout } from 'services/facebook/auth';
import { useUserData } from 'shared/contexts/userData';

import { settingsStyles } from './styles';

const SettingsScreen = () => {
  const {
    setUserAccessData,
  } = useUserData();

  const logout = useCallback(() => {
    FBLogout();
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
