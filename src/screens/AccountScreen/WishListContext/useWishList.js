import { useContext } from 'react';

import { WishListContext } from './WishListContext';

const useWishList = () => {
  return useContext(WishListContext);
};

export default useWishList;
