import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'shared/components/Icon';

import CalendarScreen from './CalendarScreen';
import ImportsScreen from './ImportsScreen';
import EventScreen from './EventScreen';
import CreateEventScreen from './CreateEventScreen';

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
            headerRight: () => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('CreateEvent');
                  }}
                >
                  <Icon name="plus" />
                </TouchableOpacity>
              );
            },
          };
        }}
      />
      <Stack.Screen name="Imports" component={ImportsScreen} />
      <Stack.Screen name="Event" component={EventScreen} />
      <Stack.Screen name="CreateEvent" component={CreateEventScreen} />
    </Stack.Navigator>
  );
};

export default CalendarScreenContainer;
