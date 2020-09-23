import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'shared/components/Icon';

import AccountScreen from './AccountScreen';
import SettingsScreen from './SettingsScreen';
import CreateWithItemScreen from './CreateWishItemScreen';
import WishItemScreen from './WishItemScreen';
import { WishListProvider } from './WishListContext';

const Stack = createStackNavigator();

const AccountScreenContainer = () => {
  return (
    <WishListProvider>
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
        <Stack.Screen name="WishItem" component={WishItemScreen} />
      </Stack.Navigator>
    </WishListProvider>
  );
};

export default AccountScreenContainer;
