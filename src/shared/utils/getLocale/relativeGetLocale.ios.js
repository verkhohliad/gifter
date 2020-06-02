import { NativeModules } from 'react-native';

const relativeGetLocale = () => {
  return NativeModules.SettingsManager.settings.AppleLocale
    || NativeModules.SettingsManager.settings.AppleLanguages[0];
};

export default relativeGetLocale;
