import React, { useCallback } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import ProductPic from 'shared/components/ProductPic';

import styles from './styles';

const WishItem = ({ style, wishItem, navigation }) => {
  const onPressItem = useCallback(() => {
    navigation.navigate('WishItem', wishItem);
  }, [wishItem]);

  return (
    <TouchableOpacity
      style={{
        ...styles.wishItem,
        ...style,
      }}
      onPress={onPressItem}
    >
      <ProductPic
        source={wishItem.imageUrl}
        variant="small"
      />
      <Text style={styles.title}>
        {wishItem.title}
      </Text>
    </TouchableOpacity>
  );
};

export default WishItem;
