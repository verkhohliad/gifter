import React from 'react';
import { View, Text } from 'react-native';

import ProductPic from 'shared/components/ProductPic';

import styles from './styles';

const WishItem = ({ style, wishItem }) => {
  return (
    <View
      style={{
        ...styles.wishItem,
        ...style,
      }}
    >
      <ProductPic
        source={wishItem.imageUrl}
        variant="small"
      />
      <Text style={styles.title}>
        {wishItem.title}
      </Text>
    </View>
  );
};

export default WishItem;
