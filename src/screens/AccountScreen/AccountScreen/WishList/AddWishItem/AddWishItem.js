import React, { useCallback } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import Icon from 'shared/components/Icon';

import styles from './styles';

const AddWishItem = ({ navigation, style }) => {
  const onPressItem = useCallback(() => {
    navigation.navigate('CreateWishItem');
  }, []);

  return (
    <TouchableOpacity
      style={{
        ...styles.addWishItem,
        ...style,
      }}
      onPress={onPressItem}
    >
      <Text>
        <Icon size={40} name="plus" />
      </Text>
    </TouchableOpacity>
  );
};

export default AddWishItem;
