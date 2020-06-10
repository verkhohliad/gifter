import { useState, useEffect } from 'react';
import { Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { PERSISTENCE_KEY } from '../../constants';

const useRestoreNavigationState = () => {
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState();

  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (initialUrl === null) {
          // Only restore state if there's no deep link
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString ? JSON.parse(savedStateString) : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } catch (err) {
        // logger error
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, []);

  return {
    initialState,
    isReady,
  };
};

export default useRestoreNavigationState;
