import { AppRegistry } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import 'react-native-get-random-values';

import { configure as configurePushNotifications } from './src/services/pushNotifications';
import { Crashlytics } from './src/services/firebase';
import App from './src/App';
import { name as appName } from './app.json';

if (!DeviceInfo.isEmulator()) {
  configurePushNotifications();
}

Crashlytics.setupErrorHandler();

AppRegistry.registerComponent(appName, () => { return App; });
