/* eslint-disable class-methods-use-this */

import firebaseAuth from '@react-native-firebase/auth';
import { AccessToken, LoginManager } from 'react-native-fbsdk';

class Auth {
  async login() {
    try {
      const response = await LoginManager.logInWithPermissions(['public_profile', 'email']);

      if (response.isCancelled) {
        console.log('Login cancelled');
        return null;
      }

      return response;
    } catch (error) {
      // todo: [logger] error
      console.log(error);

      return error;
    }
  }

  async loadToken() {
    try {
      const response = await AccessToken.getCurrentAccessToken();

      if (response) {
        // todo: clean up and to do best
        console.log('accessToken', response.accessToken);
        // Create a Firebase credential with the AccessToken
        const facebookCredential = firebaseAuth.FacebookAuthProvider.credential(response.accessToken);

        // const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
        // firebase.auth().signInWithCredential(credential);

        console.log('facebookCredential', facebookCredential);
        // Sign-in the user with the credential
        const res = await firebaseAuth().signInWithCredential({
          ...facebookCredential,
          secret: 'gifter-ihors-sercret-key',
        });

        console.log('firebase', { res });
      }

      return response;
    } catch (error) {
      // todo: [logger] error
      console.log(error);

      return error;
    }
  }

  logout() {
    LoginManager.logOut();
  }
}

export default new Auth();
