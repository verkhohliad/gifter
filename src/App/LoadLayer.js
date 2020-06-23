import React, { useState, useEffect } from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import { restoreNavigationState } from 'shared/utils/navigationState';
import RootNavigation from 'screens/RootNavigation';
import { Auth as FBAuth } from 'services/facebook';
import { Auth } from 'services/firebase';
import { useUserData } from 'shared/contexts/userData';

const LoadLayer = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [navigationState, setNavigationState] = useState(null);
  const {
    setFbAccessToken,
    setUserData,
  } = useUserData();

  useEffect(() => {
    const load = async () => {
      await EvilIcons.loadFont();
      const initialNavigationState = await restoreNavigationState();
      const userAccessToken = await FBAuth.loadToken();

      if (initialNavigationState) {
        setNavigationState(initialNavigationState);
      }

      if (userAccessToken) {
        setFbAccessToken(userAccessToken.accessToken);
      }

      Auth.onAuthStateChanged((userData) => {
        if (userData) {
          setUserData(userData);
        }

        // todo: splash screen turn off instead of isLoaded flag
        setIsLoaded(true);
      });
    };

    try {
      load();
    } catch (error) {
      // todo: [logger] error
      console.log(error);
    }
  }, []);

  return isLoaded && (
    <RootNavigation navigationState={navigationState} />
  );
};

export default LoadLayer;
