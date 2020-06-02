import { NativeModules } from 'react-native';

const relativeGetLocale = () => {
  return NativeModules.I18nManager.localeIdentifier;
};

export default relativeGetLocale;
