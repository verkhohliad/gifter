import React, { useState, useMemo } from 'react';

import { Provider } from './UserDataContext';

const UserDataProvider = ({ children }) => {
  const [userAccessData, setUserAccessData] = useState(null);
  const [userData, setUserData] = useState(null);

  const value = useMemo(() => {
    return {
      userAccessData,
      setUserAccessData,
      userData,
      setUserData,
    };
  }, [userAccessData, userData]);

  return (
    <Provider value={value}>
      {children}
    </Provider>
  );
};

export default UserDataProvider;
