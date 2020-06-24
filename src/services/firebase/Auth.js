/* eslint-disable class-methods-use-this */

import firebaseAuth from '@react-native-firebase/auth';

import { Auth as FBAuth } from 'services/facebook';

class Auth {
  async login() {
    try {
      const isLogged = await FBAuth.login();

      if (!isLogged) {
        return null;
      }

      const fbAccessToken = await FBAuth.loadToken();
      const facebookCredential = firebaseAuth.FacebookAuthProvider.credential(fbAccessToken.accessToken);
      const response = await firebaseAuth().signInWithCredential(facebookCredential);

      return {
        fbAccessToken: fbAccessToken.accessToken,
        // eslint-disable-next-line no-underscore-dangle
        userData: response.user._user,
      };
    } catch (error) {
      // todo: [logger] error
      console.error('Login failed', error);

      return null;
    }
  }

  onAuthStateChanged(callback) {
    firebaseAuth().onAuthStateChanged((userData) => {
      // eslint-disable-next-line no-underscore-dangle
      return callback(userData?._user);
    });
  }

  async logout() {
    FBAuth.logout();
    await firebaseAuth().signOut();
  }
}

export default new Auth();
