import React, { useState, useMemo } from 'react';

import { Provider } from './UserDataContext';

const UserDataProvider = ({ children }) => {
  const [fbAccessToken, setFbAccessToken] = useState(null);
  const [userData, setUserData] = useState(null);

  const value = useMemo(() => {
    return {
      fbAccessToken,
      setFbAccessToken,
      userData,
      setUserData,
    };
  }, [fbAccessToken, userData]);

  return (
    <Provider value={value}>
      {children}
    </Provider>
  );
};

export default UserDataProvider;
