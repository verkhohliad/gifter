import React from 'react';
import { Text, View } from 'react-native';

import UserPic from 'shared/components/UserPic';
import { useUserData } from 'shared/contexts/userData';
import WishList from 'shared/components/WishList';

import { useWishList } from '../WishListContext';

import BirthdayPicker from './BirthdayPicker';
import styles from './styles';

const AccountScreen = ({ navigation }) => {
  const { userData, authUserData } = useUserData();
  const { wishList } = useWishList();

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

      <BirthdayPicker
        bdate={userData?.bdate}
        userUid={authUserData.uid}
      />

      <WishList
        editable
        navigation={navigation}
        wishList={wishList}
      />
    </View>
  );
};

export default AccountScreen;
