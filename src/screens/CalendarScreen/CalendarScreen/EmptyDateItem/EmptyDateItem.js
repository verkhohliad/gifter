import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import Icon from 'shared/components/Icon';

import styles from './styles';

const EmptyDateItem = () => {
  return (
    <TouchableOpacity style={styles.emptyDateItem}>
      <Text>
        <Icon size={40} name="plus" />
      </Text>
    </TouchableOpacity>
  );
};

export default EmptyDateItem;
