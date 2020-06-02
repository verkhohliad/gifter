import React, { useContext } from 'react';
import { Text, View } from 'react-native';

import { LocalizationContext } from 'shared/contexts/localization';

export function HomeScreen() {
  const { t } = useContext(LocalizationContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Text>{t('hello')}</Text>
    </View>
  );
}

export function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
