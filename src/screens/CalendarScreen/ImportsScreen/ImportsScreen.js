import React from 'react';
import {
  View, Text,
} from 'react-native';

import { useUserData } from 'shared/contexts/userData';

import SearchForm from './SearchForm';
import AssignedUser from './AssignedUser';
import styles from './styles';

const ImportsScreen = ({ navigation }) => {
  const { userData } = useUserData();

  return (
    <View style={styles.importsScreen}>
      <Text style={styles.title}>Vk Import</Text>

      {userData?.vk && <AssignedUser {...userData.vk} />}
      {!userData?.vk && <SearchForm navigation={navigation} />}
    </View>
  );
};

export default ImportsScreen;
