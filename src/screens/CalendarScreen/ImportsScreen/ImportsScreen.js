import React from 'react';
import {
  View, Text, ActivityIndicator,
} from 'react-native';

import { useCalendarUserData } from '../CalendarUserData';

import SearchForm from './SearchForm';
import AssignedUser from './AssignedUser';
import styles from './styles';

const ImportsScreen = ({ navigation }) => {
  const { calendarUserData, isLoading } = useCalendarUserData();

  return (
    <View style={styles.importsScreen}>
      <Text style={styles.title}>Vk Import</Text>

      {isLoading && (<ActivityIndicator size="large" />)}
      {!isLoading && calendarUserData?.vk && <AssignedUser {...calendarUserData.vk} />}
      {!isLoading && !calendarUserData?.vk && <SearchForm navigation={navigation} />}
    </View>
  );
};

export default ImportsScreen;
