/* eslint class-methods-use-this: 0 */
import '@react-native-firebase/crashlytics';
import firebase from '@react-native-firebase/app';

const crashlytics = firebase.crashlytics();
const defaultHandler = global.ErrorUtils.getGlobalHandler();

class Crashlytics {
  log(message) {
    crashlytics.log(message);
  }

  recordError(error) {
    crashlytics.recordError(error);
  }

  crash() {
    crashlytics.crash();
  }

  toggleCrashlytics() {
    crashlytics.setCrashlyticsCollectionEnabled(crashlytics.isCrashlyticsCollectionEnabled);
  }

  async setUser({ uid, ...otherUserFields }) {
    return Promise.all([
      crashlytics.setUserId(uid),
      crashlytics.setAttributes(otherUserFields),
    ]);
  }

  setupErrorHandler() {
    global.ErrorUtils.setGlobalHandler((...args) => {
      const error = args[0] || 'Unknown';

      crashlytics.setAttribute('stack', `${error?.stack}`);
      crashlytics.setAttribute('message', `${error?.message}`);
      crashlytics.recordError(error);

      crashlytics.log(error?.message ?? error);

      defaultHandler.apply(this, args);
    });
  }
}

export default new Crashlytics();
