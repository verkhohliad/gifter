import React, { useCallback, useMemo } from 'react';
import {
  Text, TouchableOpacity, Image,
} from 'react-native';

import styles from './styles';

// todo: move it to the Events when it'll be created
const BIRTHDAY_TYPE = 'bdate';

const CalendarItem = ({
  item = {},
  navigation,
} = {}) => {
  const {
    source,
    type,
    assignedUser: { firstName, lastName, photo } = {},
  } = item;

  const onPressItem = useCallback(() => {
    navigation.navigate('Event', item);
  }, [item]);

  const photoSource = useMemo(() => {
    return {
      uri: photo,
    };
  }, [photo]);

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={onPressItem}
    >
      <Image
        style={styles.image}
        source={photoSource}
      />
      <Text style={styles.title}>
        {firstName}
        {' '}
        {lastName}
      </Text>
      <Text style={styles.details}>
        {`${source}: `}
        {type === BIRTHDAY_TYPE && 'Birthday'}
      </Text>
    </TouchableOpacity>
  );
};

export default CalendarItem;
