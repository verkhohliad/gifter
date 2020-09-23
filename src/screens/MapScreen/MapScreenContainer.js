import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MapScreen from './MapScreen';

const Stack = createStackNavigator();

const MapScreenContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MapScreenContainer;
