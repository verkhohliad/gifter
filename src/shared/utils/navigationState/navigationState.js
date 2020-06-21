import { Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { PERSISTENCE_KEY } from 'constants';

export const restoreNavigationState = async () => {
  const initialUrl = await Linking.getInitialURL();

  if (initialUrl === null) {
    // Only restore state if there's no deep link
    const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
    return savedStateString ? JSON.parse(savedStateString) : null;
  }

  return null;
};

export const saveNavigationState = (state) => {
  // todo: save only last screen from state
  if (state) {
    AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state));
  } else {
    AsyncStorage.removeItem(PERSISTENCE_KEY);
  }
};
