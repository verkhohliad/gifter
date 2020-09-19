import React, { useCallback, useState } from 'react';
import {
  View, Text, TextInput, Button, TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import logger from 'shared/logger';
import ProductPic from 'shared/components/ProductPic';
import { Storage, WishLists } from 'services/firebase';
import { useUserData } from 'shared/contexts/userData';

import { useWishList } from '../WishListContext';

import styles from './styles';

const CreateWithItemScreen = ({ navigation }) => {
  const [imageSource, setImageSource] = useState();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const { authUserData: { uid: userUid } } = useUserData();
  const { addWishItem } = useWishList();

  const onImagePick = useCallback(() => {
    const options = {
      title: 'Select image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      logger.log('Response = ', response);

      if (response.didCancel) {
        logger.log('User cancelled image picker');
      } else if (response.error) {
        logger.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        logger.log('User tapped custom button: ', response.customButton);
      } else {
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        setImageSource(response.uri);
      }
    });
  }, []);

  const onSave = useCallback(async () => {
    const imageKey = await Storage.saveWishImage(userUid, imageSource);
    const imageUrl = await Storage.getImageUrl(imageKey);

    const wishItem = {
      imageKey,
      imageUrl,
      title,
      description,
      link,
    };

    WishLists.createWishList(userUid, wishItem);

    addWishItem(wishItem);
    navigation.navigate('Account');
  }, [
    imageSource,
    title,
    description,
    link,
    userUid,
  ]);

  return (
    <View style={styles.createWithItemScreen}>
      <View style={styles.imageContainer}>
        <TouchableOpacity
          onPress={onImagePick}
        >
          <ProductPic
            source={imageSource}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={setTitle}
          value={title}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          onChangeText={setDescription}
          value={description}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Link</Text>
        <TextInput
          style={styles.input}
          onChangeText={setLink}
          value={link}
        />
      </View>

      <Button
        title="Save"
        onPress={onSave}
      />
    </View>
  );
};

export default CreateWithItemScreen;
