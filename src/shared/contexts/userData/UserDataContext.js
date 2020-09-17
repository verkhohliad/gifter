import { createContext } from 'react';

export const UserDataContext = createContext({
  userData: null,
  setUserData: () => {},
});

export const { Consumer, Provider } = UserDataContext;
