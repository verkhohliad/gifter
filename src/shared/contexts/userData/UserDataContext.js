import { createContext } from 'react';

export const UserDataContext = createContext({
  userData: null,
  setUserData: () => {},
  fbAccessToken: null,
  setFbAccessToken: () => {},
});

export const { Consumer, Provider } = UserDataContext;
