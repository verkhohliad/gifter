import { createContext } from 'react';

export const CalendarUserDataContext = createContext({
  events: [],
  calendarUserData: {},
  update: () => {},
});

export const { Consumer, Provider } = CalendarUserDataContext;
