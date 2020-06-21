import { AccessToken, LoginManager } from 'react-native-fbsdk';

export const FBLogin = () => {
  return LoginManager.logInWithPermissions(['public_profile'])
    .then((response) => {
      if (response.isCancelled) {
        console.log('Login cancelled');
        return null;
      }

      return response;
    })
    .catch((error) => {
      // todo: [logger] error
      console.log(error);
    });
};

export const FBLoadToken = () => {
  return AccessToken.getCurrentAccessToken()
    .then((response) => {
      return response;
    })
    .catch((error) => {
      // todo: [logger] error
      console.log(error);
    });
};

export const FBLogout = () => {
  LoginManager.logOut();
};
