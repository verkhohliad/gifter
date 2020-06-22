import { GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

class User {
  constructor() {
    this.requestManager = new GraphRequestManager();
  }

  async fetchCurrentProfile() {
    return new Promise((resolve, reject) => {
      const request = new GraphRequest(
        '/me',
        null,
        (error, result) => {
          if (result) {
            const profile = result;
            profile.avatar = `https://graph.facebook.com/${result.id}/picture`;
            resolve(profile);
          } else {
            reject(error);
          }
        },
      );

      this.requestManager.addRequest(request).start();
    });
  }
}

export default new User();
