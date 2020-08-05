import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'shared/components/Icon';

import CalendarScreen from './CalendarScreen';
import ImportsScreen from './ImportsScreen';

const Stack = createStackNavigator();

const CalendarScreenContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Calendar"
        component={CalendarScreen}
        options={({ navigation }) => {
          return {
            headerLeft: () => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Imports');
                  }}
                >
                  <Icon
                    name="arrow-down"
                  />
                </TouchableOpacity>
              );
            },
          };
        }}
      />
      <Stack.Screen name="Imports" component={ImportsScreen} />
    </Stack.Navigator>
  );
};

export default CalendarScreenContainer;