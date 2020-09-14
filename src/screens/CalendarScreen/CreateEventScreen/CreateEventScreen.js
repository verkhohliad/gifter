import React, { useState } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const CreateEventScreen = ({ route: { params: timestamp } }) => {
  // eslint-disable-next-line no-unused-vars
  const [date, setDate] = useState(timestamp ? new Date(timestamp) : null);

  return (
    <View style={styles.createEventScreen}>
      <Text style={styles.title}>
        Screen for creating event
      </Text>

      {Boolean(date) && (
        <Text>
          Prefilled date:
          {date?.toGMTString()}
        </Text>
      )}
    </View>
  );
};

export default CreateEventScreen;
