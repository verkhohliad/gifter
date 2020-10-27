import { Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { Analytics } from 'services/firebase';
import { PERSISTENCE_KEY } from 'constants/storageKeys';

export const restoreNavigationState = async () => {
  const initialUrl = await Linking.getInitialURL();

  if (initialUrl === null) {
    // Only restore state if there's no deep link
    const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
    return savedStateString ? JSON.parse(savedStateString) : null;
  }

  return null;
};

const getCurrentScreenName = (state) => {
  const currentRoute = state?.routes?.[state?.index];

  return currentRoute?.state ? getCurrentScreenName(currentRoute?.state) : currentRoute?.name;
};

export const saveNavigationState = (state) => {
  // todo: save only last screen from state

  if (state) {
    const currentScreenName = getCurrentScreenName(state);

    Analytics.logScreenView({
      screenName: currentScreenName,
    });

    AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state));
  } else {
    AsyncStorage.removeItem(PERSISTENCE_KEY);
  }
};
