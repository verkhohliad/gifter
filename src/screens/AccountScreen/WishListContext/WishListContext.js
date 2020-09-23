import { createContext } from 'react';

export const WishListContext = createContext({
  wishList: [],
  addWishItem: () => {},
});

export const { Consumer, Provider } = WishListContext;
