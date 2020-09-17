/* eslint-disable class-methods-use-this */

import firebaseAuth from '@react-native-firebase/auth';

class Auth {
  constructor() {
    this.auth = firebaseAuth();
  }

  async login(phone) {
    const respConfirmResult = await this.auth.signInWithPhoneNumber(phone);

    return respConfirmResult;
  }

  onAuthStateChanged(callback) {
    firebaseAuth().onAuthStateChanged((userData) => {
      // eslint-disable-next-line no-underscore-dangle
      return callback(userData?._user);
    });
  }

  async logout() {
    await firebaseAuth().signOut();
  }
}

export default new Auth();
