import { createContext } from 'react';

export const LocalizationContext = createContext({
  locale: 'en',
  setLocale: () => {},
  t: () => {},
});

export const { Consumer, Provider } = LocalizationContext;
