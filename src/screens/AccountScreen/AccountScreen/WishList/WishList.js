import React from 'react';
import { View, Text } from 'react-native';

import AddWishItem from './AddWishItem';
import styles from './styles';

const WishList = ({ navigation }) => {
  return (
    <View style={styles.wishList}>
      <Text style={styles.title}>Wish List</Text>
      <AddWishItem navigation={navigation} />
    </View>
  );
};

export default WishList;
