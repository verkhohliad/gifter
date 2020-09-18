import React, { useState, useCallback } from 'react';
import {
  ActivityIndicator, Button, FlatList, Image, Text, TextInput, TouchableOpacity, View,
} from 'react-native';

import { Functions } from 'services/firebase';
import { useUserData } from 'shared/contexts/userData';
import logger from 'shared/logger';

import styles from './styles';

const userListKeyExtractor = (item) => { return item.id; };

const renderItem = ({ item }) => {
  const {
    firstName, lastName, photoSource, onPress,
  } = item;

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={onPress}
    >
      <Image
        style={styles.image}
        source={photoSource}
      />
      <Text style={styles.label}>
        {firstName}
        {' '}
        {lastName}
      </Text>
    </TouchableOpacity>
  );
};

const SearchForm = ({ navigation }) => {
  const [vkUserId, setVkUserId] = useState('');
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { updateUserData } = useUserData();

  const selectUser = useCallback(async (userId) => {
    setIsLoading(true);
    const { data } = await Functions.pickVkUser(userId);
    await updateUserData();
    setIsLoading(false);
    setVkUserId('');
    setUsers([]);
    navigation.goBack();

    logger.log('Select done', data);
  }, []);

  const handleSearchInput = useCallback((text) => {
    setError('');
    setVkUserId(text);
  }, []);

  const search = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await Functions.searchVkUser(vkUserId);

      const { items } = data.response;

      const mappedItems = items.map((item) => {
        const {
          id, first_name: firstName, last_name: lastName, photo_100: photo,
        } = item;

        return {
          id,
          firstName,
          lastName,
          photoSource: {
            uri: photo,
          },
          onPress: selectUser.bind(null, id),
        };
      });

      logger.log('Search done', items);

      setUsers(mappedItems);
    } catch (err) {
      logger.error(err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [vkUserId]);

  return (
    <View>
      <View>
        <TextInput
          style={styles.searchInput}
          onChangeText={handleSearchInput}
          value={vkUserId}
        />
        <Button
          title="Search"
          onPress={search}
        />
      </View>
      {Boolean(error) && (
        <View>
          <Text style={styles.errorMessage}>
            {error}
          </Text>
        </View>
      )}

      <View style={styles.usersList}>
        {isLoading && <ActivityIndicator size="large" />}
        {!isLoading && users.length > 0 && (
          <FlatList
            data={users}
            keyExtractor={userListKeyExtractor}
            renderItem={renderItem}
          />
        )}
      </View>
    </View>
  );
};

export default SearchForm;
