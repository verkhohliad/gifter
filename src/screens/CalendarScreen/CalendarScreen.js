import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

const CalendarScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Calendar Screen</Text>
    </SafeAreaView>
  );
};

export default CalendarScreen;
