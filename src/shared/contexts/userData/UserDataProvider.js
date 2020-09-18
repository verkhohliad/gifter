import React, {
  useState, useMemo, useCallback, useEffect,
} from 'react';

import { Users, Events } from 'services/firebase';

import { Provider } from './UserDataContext';

const UserDataProvider = ({ children }) => {
  const [authUserData, setAuthUserData] = useState(null);
  const [isUserDataLoading, setIsUserDataLoading] = useState(false);
  const [events, setEvents] = useState(null);
  const [userData, setUserData] = useState(null);
  const currentUserUid = authUserData?.uid;

  const updateUserData = useCallback(async (userUid) => {
    if (!userUid) {
      return;
    }

    setIsUserDataLoading(true);
    const currentUser = await Users.getCurrentUser(userUid);
    const userEvents = await Events.getEvents(currentUser);

    setEvents(userEvents);
    setUserData(currentUser);
    setIsUserDataLoading(false);
  }, []);

  useEffect(() => {
    updateUserData(currentUserUid);
  }, [currentUserUid]);

  const value = useMemo(() => {
    return {
      authUserData,
      setAuthUserData,
      events,
      userData,
      updateUserData,
      isUserDataLoading,
    };
  }, [
    authUserData,
    events,
    userData,
    updateUserData,
    isUserDataLoading,
  ]);

  return (
    <Provider value={value}>
      {children}
    </Provider>
  );
};

export default UserDataProvider;
