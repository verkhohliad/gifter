import React, { useState, useCallback } from 'react';
import {
  View, Text, TextInput, Button, ActivityIndicator, FlatList, Image, TouchableOpacity,
} from 'react-native';
// import frFunctions from '@react-native-firebase/functions';
// import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';

import styles from './styles';

// todo: draft file

const functions = firebase.app().functions('europe-west3');
// for local emulator
// functions.useFunctionsEmulator('http://localhost:5001');

// for local emulator
// const db = firebase.firestore();
// db.settings({
//   host: 'localhost:8080',
//   ssl: false,
// });

const magic = () => {
  // firestore().collection('users').doc('newDoc').collection('events')
  //   .add({
  //     event: 'Birthday',
  //   });

  // db.collection('users').add({
  //   name: 'Ihor',
  // });

  // db.collection('users').doc('5wL5doY6TVc75JUemT26').update({
  //   bdate: '06.11',
  // });
};

const renderListItem = ({ item }) => {
  const {
    firstName, lastName, photo, onPress,
  } = item;

  console.log({ item });

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={onPress}
    >
      <Image
        style={{ width: 50, height: 50 }}
        source={{
          uri: photo,
        }}
      />
      <Text style={{ fontSize: 16, width: 100, height: 40 }}>
        {firstName}
        {' '}
        {lastName}
      </Text>
    </TouchableOpacity>
  );
};

const ImportsScreen = () => {
  const [vkUserId, setVkUserId] = useState('');
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getEvents = useCallback(async () => {
    const { data } = await functions.httpsCallable('events-getAll')();

    console.log('Get events', data);
  }, []);

  const selectUser = useCallback(async (userId) => {
    const { data } = await functions.httpsCallable('vk-pickUser')({ userId });

    console.log('Select done', data);
  }, []);

  const search = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await functions.httpsCallable('vk-searchUser')({ query: vkUserId });

      console.log({ data });

      const { items } = data.response;

      const mappedItems = items.map((item) => {
        const {
          id, first_name: firstName, last_name: lastName, photo_100: photo,
        } = item;

        return {
          id,
          firstName,
          lastName,
          photo,
          onPress: selectUser.bind(null, id),
        };
      });

      console.log('Search done', items);

      setUsers(mappedItems);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  }, [vkUserId]);

  return (
    <View style={styles.container}>
      <Text>ImportsScreen</Text>
      <Button
        title="Get events"
        onPress={getEvents}
      />

      <Button
        title="Magic"
        onPress={magic}
      />

      <View style={styles.searchUserForm}>
        <TextInput
          style={{ height: 40, borderWidth: 1 }}
          onChangeText={setVkUserId}
          value={vkUserId}
        />
        <Button
          title="Search"
          onPress={search}
        />
      </View>

      <View style={styles.usersList}>
        {isLoading && <ActivityIndicator size="large" />}
        {!isLoading && users.length > 0 && (
          <FlatList
            data={users}
            renderItem={renderListItem}
          />
        )}
      </View>
    </View>
  );
};

export default ImportsScreen;
