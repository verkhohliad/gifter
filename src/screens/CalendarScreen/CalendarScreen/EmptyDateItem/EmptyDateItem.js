import React, { useCallback } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import Icon from 'shared/components/Icon';

import styles from './styles';

const EmptyDateItem = ({ date, navigation }) => {
  const onPressItem = useCallback(() => {
    navigation.navigate('CreateEvent', date.getTime());
  }, [date]);

  return (
    <TouchableOpacity
      style={styles.emptyDateItem}
      onPress={onPressItem}
    >
      <Text>
        <Icon name="plus" />
      </Text>
    </TouchableOpacity>
  );
};

export default EmptyDateItem;
