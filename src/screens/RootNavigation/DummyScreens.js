import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { LocalizationContext } from 'shared/contexts/localization';

export function HomeScreen() {
  const { t } = useContext(LocalizationContext);
  const { colors } = useTheme();

  return (
    <View style={{
      flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background,
    }}
    >
      <Text style={{ color: colors.text }}>Home!</Text>
      <Text style={{ color: colors.primary }}>{t('hello')}</Text>
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
