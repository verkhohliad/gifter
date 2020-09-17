import React, { useState, useMemo } from 'react';

import { Provider } from './UserDataContext';

const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const value = useMemo(() => {
    return {
      userData,
      setUserData,
    };
  }, [userData]);

  return (
    <Provider value={value}>
      {children}
    </Provider>
  );
};

export default UserDataProvider;
