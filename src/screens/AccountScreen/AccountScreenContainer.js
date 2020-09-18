import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'shared/components/Icon';

import AccountScreen from './AccountScreen';
import SettingsScreen from './SettingsScreen';
import CreateWithItemScreen from './CreateWishItemScreen';

const Stack = createStackNavigator();

const AccountScreenContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={({ navigation }) => {
          return {
            headerRight: () => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Settings');
                  }}
                >
                  <Icon
                    name="gear"
                  />
                </TouchableOpacity>
              );
            },
          };
        }}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="CreateWishItem" component={CreateWithItemScreen} />
    </Stack.Navigator>
  );
};

export default AccountScreenContainer;
