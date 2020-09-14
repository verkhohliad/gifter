import React, {
  useState, useMemo, useCallback, useEffect,
} from 'react';

import { Functions, Users } from 'services/firebase';
import { useUserData } from 'shared/contexts/userData';

import { Provider } from './CalendarUserDataContext';

const CalendarUserDataProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState(null);
  const [calendarUserData, setCalendarUserData] = useState(null);
  const { userData: { uid: currentUserUid } } = useUserData();

  const update = useCallback(async () => {
    setIsLoading(true);
    const { data: userEvents } = await Functions.fetchEvents();
    const currentUser = await Users.getCurrentUser(currentUserUid);

    setEvents(userEvents);
    setCalendarUserData(currentUser);
    setIsLoading(false);
  }, [currentUserUid]);

  useEffect(() => {
    update();
  }, []);

  const value = useMemo(() => {
    return {
      events,
      calendarUserData,
      update,
      isLoading,
    };
  }, [
    events,
    calendarUserData,
    update,
    isLoading,
  ]);

  return (
    <Provider value={value}>
      {children}
    </Provider>
  );
};

export default CalendarUserDataProvider;
