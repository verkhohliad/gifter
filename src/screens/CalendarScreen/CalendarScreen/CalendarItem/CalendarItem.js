import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

// eslint-disable-next-line no-unused-vars
const CalendarItem = (item, firstItemInDay) => {
  // console.log({ item, firstItemInDay });
  return (
    <TouchableOpacity style={styles.item}>
      <Text>
        {item?.assignedUser.firstName}
        {' '}
        {item?.assignedUser.lastName}
      </Text>
    </TouchableOpacity>
  );
};

export default CalendarItem;
