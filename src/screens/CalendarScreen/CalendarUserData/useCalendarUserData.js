import { useContext } from 'react';

import { CalendarUserDataContext } from './CalendarUserDataContext';

const useCalendarUserData = () => {
  return useContext(CalendarUserDataContext);
};

export default useCalendarUserData;
