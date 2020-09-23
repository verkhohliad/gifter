import React, { useCallback } from 'react';
import {
  Text, TouchableOpacity,
} from 'react-native';

import UserPic from 'shared/components/UserPic';

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

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={onPressItem}
    >
      <UserPic
        source={photo}
        variant="small"
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
