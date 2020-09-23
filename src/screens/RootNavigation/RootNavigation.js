import React, { useEffect } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'react-native-appearance';

import { useUserData } from 'shared/contexts/userData';
import { saveNavigationState } from 'shared/utils/navigationState';
import Icon from 'shared/components/Icon';

import LoginScreen from '../LoginScreen';
import CalendarScreen from '../CalendarScreen';
import AccountScreen from '../AccountScreen';
import MapScreen from '../MapScreen';

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

const RootNavigation = ({ navigationState }) => {
  const scheme = useColorScheme();
  const {
    authUserData,
  } = useUserData();
  const isLoggedIn = Boolean(authUserData);

  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      initialState={navigationState}
      onStateChange={saveNavigationState}
      theme={scheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      {!isLoggedIn && (
        <LoginScreen />
      )}
      {isLoggedIn && (
        <>
          <Tab.Navigator
            screenOptions={({ route }) => {
              return {
                tabBarIcon: ({ color }) => {
                  let iconName;

                  if (route.name === 'Calendar') {
                    iconName = 'calendar';
                  } else if (route.name === 'Map') {
                    iconName = 'pointer';
                  } else if (route.name === 'Account') {
                    iconName = 'user';
                  }

                  return <Icon name={iconName} color={color} />;
                },
              };
            }}
            tabBarOptions={{
              activeTintColor: '#366d97',
              inactiveTintColor: 'gray',
              showLabel: false,
            }}
          >
            <Tab.Screen
              name="Calendar"
              component={CalendarScreen}
            />
            <Tab.Screen
              name="Map"
              component={MapScreen}
            />
            <Tab.Screen
              name="Account"
              component={AccountScreen}
            />
          </Tab.Navigator>
        </>
      )}
    </NavigationContainer>
  );
};

export default RootNavigation;
