import React, { useMemo, useCallback } from 'react';
import {
  View, Image, Text, TouchableOpacity, Alert,
} from 'react-native';

import { Functions } from 'services/firebase';
import { useUserData } from 'shared/contexts/userData';
import Icon from 'shared/components/Icon';

import styles from './styles';

const AssignedUser = ({
  firstName, lastName, photo, domain,
} = {}) => {
  const photoSource = useMemo(() => {
    return {
      uri: photo,
    };
  }, [photo]);
  const { updateUserData } = useUserData();

  const onRelease = useCallback(() => {
    Alert.alert(
      'Are you sure you want to release from this user?',
      '',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: async () => {
            await Functions.unpickVkUser();
            await updateUserData();
          },
        },
      ],
      { cancelable: false },
    );
  }, []);

  return (
    <View style={styles.assignedUser}>
      <Image
        style={styles.image}
        source={photoSource}
      />
      <Text style={styles.name}>
        {firstName}
        {' '}
        {lastName}
        {' ('}
        {domain}
        {')'}
      </Text>
      <TouchableOpacity onPress={onRelease} style={styles.cross}>
        <Icon name="close" />
      </TouchableOpacity>
    </View>
  );
};

export default AssignedUser;
