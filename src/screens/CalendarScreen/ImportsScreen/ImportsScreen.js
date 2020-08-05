import React, { useState, useCallback } from 'react';
import {
  View, Text, TextInput, Button,
} from 'react-native';
import frFunctions from '@react-native-firebase/functions';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';

import styles from './styles';

// todo: draft file

const functions = firebase.app().functions('europe-west3');
// const firestore = firebase.app().firestore();

const magic = async () => {
  const snapshotTEMP = await firestore().collection('vk-api-users').get();
  snapshotTEMP.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  });

  const vkApiUsersRef = firestore().collection('vk-api-users');

  console.log({ vkApiUsersRef });

  const snapshot = await vkApiUsersRef
    .where('isAvailable', '==', 'true')
    // todo: check this ordering
    .orderBy('amountUsage')
    .limit(1);
    // .get();

  console.log({ vkApiUsersRef, snapshot });

  // also maybe need to falsify when smth went wrong with vk user api
  // vkApiUsersRef.doc(vkUserDoc.id).update({
  //   amountUsage: firebaseAdmin.firestore.FieldValue.increment(1),
  // });

  // user with lowest usage
  return snapshot.docs[0];
};

const CalendarScreen = () => {
  const [vkUserId, setVkUserId] = useState('');

  const search = useCallback(() => {
    functions.httpsCallable('vk-search_user')({ query: vkUserId }).then((response) => {
      console.log({ response: response.data });
    }).catch((error) => {
      // Getting the Error details.
      console.log({ error });
      const { code } = error;
      const { message } = error;
      const { details } = error;
      // ...
    });
  }, [vkUserId]);

  return (
    <View style={styles.container}>
      <Text>ImportsScreen</Text>

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
        <Button
          title="Do magic"
          onPress={magic}
        />
      </View>
    </View>
  );
};

export default CalendarScreen;
