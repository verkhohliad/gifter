import React, { useEffect } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'react-native-appearance';
import { AccessToken } from 'react-native-fbsdk';

import { useUserData } from 'shared/contexts/userData';

import LoginScreen from '../LoginScreen';
import CalendarScreen from '../CalendarScreen';
import AccountScreen from '../AccountScreen';
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
  const {
    userAccessData,
    setUserAccessData,
  } = useUserData();

  useEffect(() => {
    isMountedRef.current = true;

    AccessToken.getCurrentAccessToken()
      .then((data) => {
        if (data) {
          setUserAccessData(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  if (!isReady) {
    return null;
  }

  // const logout = () => {
  //   LoginManager.logOut();
  //   // setIsLogged(false);
  // };

  return (
    <NavigationContainer
      ref={navigationRef}
      initialState={initialState}
      onStateChange={saveNavigationState}
      theme={scheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      {!userAccessData && <LoginScreen />}
      {userAccessData && (
        <>
          <Tab.Navigator>
            <Tab.Screen
              name="Calendar"
              component={CalendarScreen}
              options={{ title: 'Calendar' }}
            />
            <Tab.Screen
              name="Account"
              component={AccountScreen}
              options={{ title: 'Account' }}
            />
          </Tab.Navigator>
        </>
      )}
    </NavigationContainer>
  );
};

export default RootNavigation;
