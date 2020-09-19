import React from 'react';
import { View, Text } from 'react-native';

import { useWishList } from '../../WishListContext';

import AddWishItem from './AddWishItem';
import styles from './styles';

const WishList = ({ navigation }) => {
  const { wishList } = useWishList();

  return (
    <View style={styles.wishList}>
      <Text style={styles.title}>Wish List</Text>
      <View style={styles.wishItems}>
        <AddWishItem navigation={navigation} />
      </View>
    </View>
  );
};

export default WishList;
