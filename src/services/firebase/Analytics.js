/* eslint class-methods-use-this: 0 */
import { firebase } from '@react-native-firebase/analytics';

const analytics = firebase.analytics();

class Analytics {
  setUser({ uid, ...otherUserFields }) {
    analytics.setUserid(uid);
    analytics.setUserProperties(otherUserFields);
  }

  logAddToWishlist({ currency, value, items }) {
    analytics.logAddToWishlist({
      currency,
      value,
      items,
    });
  }

  logAppOpen() {
    analytics.logAppOpen();
  }

  logEvent({ name, params }) {
    analytics.logEvent(name, params);
  }

  logLogin(method) {
    analytics.logLogin({ method });
  }

  logScreenView({ screenName, screenClass = screenName }) {
    analytics.logScreenView({
      screen_class: screenClass,
      screen_name: screenName,
    });
  }

  logSignUp(method) {
    analytics.logSignUp({ method });
  }
}

export default new Analytics();
