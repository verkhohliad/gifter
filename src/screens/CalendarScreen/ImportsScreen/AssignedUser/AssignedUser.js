import React, { useCallback } from 'react';
import {
  View, Text, TouchableOpacity, Alert,
} from 'react-native';

import UserPic from 'shared/components/UserPic';
import { Functions } from 'services/firebase';
import { useUserData } from 'shared/contexts/userData';
import Icon from 'shared/components/Icon';

import styles from './styles';

const AssignedUser = ({
  firstName, lastName, photo, domain,
} = {}) => {
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
      <UserPic
        source={photo}
        variant="small"
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
