import AsyncStorage from '@react-native-community/async-storage';
import { PERSISTENCE_KEY } from 'constants';

export const saveNavigationState = (state) => {
  // todo: save only last screen from state
  AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state));
};
