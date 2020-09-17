import { AppRegistry } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import { configure as configurePushNotifications } from './src/services/pushNotifications';
import App from './src/App';
import { name as appName } from './app.json';

if (!DeviceInfo.isEmulator()) {
  configurePushNotifications();
}

AppRegistry.registerComponent(appName, () => { return App; });
