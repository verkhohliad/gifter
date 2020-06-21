import React from 'react';
import { Text, View } from 'react-native';

import { accountStyles } from './styles';

const AccountScreen = () => {
  return (
    <View style={accountStyles.container}>
      <Text>Account screen</Text>
    </View>
  );
};

export default AccountScreen;
