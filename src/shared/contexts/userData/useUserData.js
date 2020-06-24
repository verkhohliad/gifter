import { useContext } from 'react';

import { UserDataContext } from './UserDataContext';

const useUserData = () => {
  return useContext(UserDataContext);
};

export default useUserData;
