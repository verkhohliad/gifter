import React, {
  useState, useMemo, useCallback, useEffect,
} from 'react';

import { useUserData } from 'shared/contexts/userData';
import { WishLists } from 'services/firebase';

import { Provider } from './WishListContext';

const WishListProvider = ({ children }) => {
  const { authUserData: { uid: userUid } } = useUserData();
  const [wishList, setWishList] = useState([]);

  const addWishItem = useCallback((wishItem) => {
    setWishList([
      ...wishList,
      wishItem,
    ]);
  }, [wishList]);

  useEffect(() => {
    WishLists.getWishList(userUid).then(setWishList);
  }, [userUid]);

  const value = useMemo(() => {
    return {
      wishList,
      addWishItem,
    };
  }, [
    wishList,
    addWishItem,
  ]);

  return (
    <Provider value={value}>
      {children}
    </Provider>
  );
};

export default WishListProvider;
