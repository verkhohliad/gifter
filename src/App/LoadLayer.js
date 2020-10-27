import React, { useState, useEffect } from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import { restoreNavigationState } from 'shared/utils/navigationState';
import RootNavigation from 'screens/RootNavigation';
import { Auth, Crashlytics } from 'services/firebase';
import { useUserData } from 'shared/contexts/userData';

const LoadLayer = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [navigationState, setNavigationState] = useState(null);
  const {
    setAuthUserData,
    isUserDataLoading,
  } = useUserData();

  useEffect(() => {
    const load = async () => {
      await EvilIcons.loadFont();
      const initialNavigationState = await restoreNavigationState();

      if (initialNavigationState) {
        setNavigationState(initialNavigationState);
      }

      Auth.onAuthStateChanged((authUserData) => {
        if (authUserData) {
          setAuthUserData(authUserData);

          Crashlytics.setUser({
            uid: authUserData.uid,
            phone: authUserData.phoneNumber,
          });
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

  // todo: use this condition for turning off splash screen
  return (isLoaded && !isUserDataLoading) && (
    <RootNavigation navigationState={navigationState} />
  );
};

export default LoadLayer;
