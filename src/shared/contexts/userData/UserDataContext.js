import { createContext } from 'react';

export const UserDataContext = createContext({
  userAccessData: null,
  setUserAccessData: () => {},
  userData: null,
  setUserData: () => {},
});

export const { Consumer, Provider } = UserDataContext;
