import { createContext } from 'react';

export const UserDataContext = createContext({
  authUserData: null,
  setAuthUserData: () => {},
  events: [],
  userData: {},
  updateUserData: () => {},
  isUserDataLoading: false,
});

export const { Consumer, Provider } = UserDataContext;
