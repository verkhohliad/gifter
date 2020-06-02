import React, { useEffect } from 'react';
import { Linking } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-community/async-storage';
import { useColorScheme } from 'react-native-appearance';

import { PERSISTENCE_KEY } from 'constants';

import { HomeScreen, SettingsScreen } from './DummyScreens';
import { saveNavigationState } from './utils';
import useRestoreNavigationState from './useRestoreNavigationState';

const navigationRef = React.createRef();
// Parent's useEffect is always called after child's useEffect
const isMountedRef = React.createRef();
const Tab = createBottomTabNavigator();

export function navigate(name, params) {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

const RootNavigation = () => {
  const scheme = useColorScheme();
  const { initialState, isReady } = useRestoreNavigationState();

  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      initialState={initialState}
      onStateChange={saveNavigationState}
      theme={scheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
