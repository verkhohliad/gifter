import '@react-native-firebase/functions';
import firebase from '@react-native-firebase/app';

class Functions {
  constructor() {
    // todo: server place will load from env
    this.functions = firebase.app().functions('europe-west3');

    // for local emulator
    // this.functions.useFunctionsEmulator('http://localhost:5001');
  }

  // todo: make Events for getting data via firestore and remove this function
  fetchEvents() {
    return this.functions.httpsCallable('events-getAll')();
  }

  pickVkUser(userId) {
    return this.functions.httpsCallable('vk-pickUser')({ userId });
  }

  unpickVkUser() {
    return this.functions.httpsCallable('vk-unpickUser')();
  }

  searchVkUser(userId) {
    return this.functions.httpsCallable('vk-searchUser')({ query: userId });
  }
}

export default new Functions();
