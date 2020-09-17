/* eslint-disable class-methods-use-this */

import { AccessToken, LoginManager } from 'react-native-fbsdk';

// const isLogged = await FBAuth.login();
//
// if (!isLogged) {
//   return null;
// }
//
// const fbAccessToken = await FBAuth.loadToken();
// const facebookCredential = firebaseAuth.FacebookAuthProvider.credential(fbAccessToken.accessToken);
// const response = await firebaseAuth().signInWithCredential(facebookCredential);

class Auth {
  async login() {
    try {
      const response = await LoginManager.logInWithPermissions(['public_profile', 'email', 'user_birthday', 'user_friends']);

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
      return await AccessToken.getCurrentAccessToken();
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
