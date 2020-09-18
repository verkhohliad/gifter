import React from 'react';
import { View, Text } from 'react-native';

import UserPic from 'shared/components/UserPic';

import styles from './styles';

const EventScreen = ({
  route: {
    params: {
      source, type, date, assignedUser: { firstName, lastName, photo } = {},
    } = {},
  },
}) => {
  return (
    <View style={styles.eventScreen}>
      <View style={styles.personal}>
        <UserPic
          style={styles.image}
          source={photo}
          variant="big"
        />
        <Text style={styles.name}>
          {firstName}
          {' '}
          {lastName}
        </Text>
      </View>

      <View style={styles.details}>
        <Text style={styles.detail}>
          Date:
          {' '}
          {date}
        </Text>
        <Text style={styles.detail}>
          Type:
          {' '}
          {type}
        </Text>
        <Text style={styles.detail}>
          Source:
          {' '}
          {source}
        </Text>
      </View>
    </View>
  );
};

export default EventScreen;
