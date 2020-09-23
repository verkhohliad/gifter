import storage from '@react-native-firebase/storage';
import { v4 as uuid } from 'uuid';

class Storage {
  constructor() {
    this.storage = storage();
  }

  getImageUrl(imageKey) {
    return this.storage.ref(imageKey).getDownloadURL();
  }

  async saveWishImage(userUid, pathToFile) {
    return new Promise((resolve) => {
      const imageUid = uuid();
      const imageKey = `${userUid}/wishImages/${imageUid}`;
      const imageRef = this.storage.ref(imageKey);

      const task = imageRef.putFile(pathToFile);

      task.on('state_changed', (taskSnapshot) => {
        console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
      });

      task.then(() => {
        resolve(imageKey);
        console.log('Image uploaded to the bucket!');
      });
    });
  }
}

export default new Storage();
