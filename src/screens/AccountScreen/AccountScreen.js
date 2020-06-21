import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';

import styles from './styles';

const AccountScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Account screen</Text>
    </SafeAreaView>
  );
};

export default AccountScreen;
