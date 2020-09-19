import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import WishItem from './WishItem';
import AddWishItem from './AddWishItem';
import styles from './styles';

const WishList = ({ navigation, wishList = [], editable = false }) => {
  return (
    <View style={styles.wishList}>
      <Text style={styles.title}>Wish List</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.wishItems}>
          {
            wishList.map((wishItem) => {
              return (
                <WishItem
                  key={wishItem.imageKey}
                  style={styles.wishItem}
                  wishItem={wishItem}
                  navigation={navigation}
                />
              );
            })
          }
          {Boolean(editable) && (
            <AddWishItem
              style={styles.wishItem}
              navigation={navigation}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default WishList;
