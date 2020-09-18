import React, { useCallback, useState } from 'react';
import {
  View, Text, TextInput, Button, TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import logger from 'shared/logger';
import ProductPic from 'shared/components/ProductPic';

import styles from './styles';

const CreateWithItemScreen = () => {
  const [image, setImage] = useState();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

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

        setImage(response.uri);
      }
    });
  }, []);

  const onSave = useCallback(() => {
    console.log({
      image,
      title,
      description,
      link,
    });
  }, [
    image,
    title,
    description,
    link,
  ]);

  return (
    <View style={styles.createWithItemScreen}>
      <View style={styles.imageContainer}>
        <TouchableOpacity
          onPress={onImagePick}
        >
          <ProductPic
            source={image}
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
