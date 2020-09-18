import React from 'react';
import { Text, View } from 'react-native';

import UserPic from 'shared/components/UserPic';
import { useUserData } from 'shared/contexts/userData';

import WishList from './WishList';
import styles from './styles';

const AccountScreen = ({ navigation }) => {
  const { userData } = useUserData();

  const firstName = userData?.vk?.firstName ?? '';
  const lastName = userData?.vk?.lastName ?? '';

  return (
    <View style={styles.accountScreen}>
      <View style={styles.userInfo}>
        <UserPic
          style={styles.image}
          source={userData?.vk?.photo}
          variant="big"
        />
        <Text style={styles.name}>
          {firstName}
          {' '}
          {lastName}
        </Text>
      </View>

      <WishList
        navigation={navigation}
      />
    </View>
  );
};

export default AccountScreen;
