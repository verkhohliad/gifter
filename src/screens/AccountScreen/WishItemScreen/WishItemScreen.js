import React from 'react';
import { View, Text } from 'react-native';

import ProductPic from 'shared/components/ProductPic';

import styles from './styles';

const WishItemScreen = ({
  route: {
    params: {
      imageUrl, description, link, title,
    } = {},
  },
}) => {
  return (
    <View style={styles.wishItemScreen}>
      <View style={styles.imageContainer}>
        <ProductPic
          style={styles.image}
          source={imageUrl}
        />
      </View>

      <View style={styles.details}>
        {Boolean(title) && (
          <Text style={styles.detail}>
            Title:
            {' '}
            {title}
          </Text>
        )}
        {Boolean(description) && (
          <Text style={styles.detail}>
            Description:
            {' '}
            {description}
          </Text>
        )}
        {Boolean(link) && (
          <Text style={styles.detail}>
            Link:
            {' '}
            {link}
          </Text>
        )}
      </View>
    </View>
  );
};

export default WishItemScreen;
