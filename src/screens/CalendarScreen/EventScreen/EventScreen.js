import React, { useMemo } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const EventScreen = ({
  route: {
    params: {
      source, type, date, assignedUser: { firstName, lastName, photo } = {},
    } = {},
  },
}) => {
  const photoSource = useMemo(() => {
    return {
      uri: photo,
    };
  }, []);

  return (
    <View style={styles.eventScreen}>
      <View style={styles.personal}>
        <Image
          style={styles.image}
          source={photoSource}
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
