import React from 'react';
import { Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

import styles from './styles';

// todo: VK login rewrite
// eslint-disable-next-line max-len
const VK_LOGIN_URL = 'https://oauth.vk.com/authorize?client_id=7520956&display=page&redirect_uri=https://gifter-38720.firebaseapp.com/__/auth/handler&scope=friends&response_type=code&v=5.110';

const CalendarScreen = () => {
  const [isWebViewOpen, setIsWebViewOpen] = React.useState(false);
  const vkLogin = React.useCallback(() => {
    setIsWebViewOpen(true);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Calendar Screen</Text>

      <Button
        title="Login with VK"
        onPress={vkLogin}
      />

      {isWebViewOpen && (
        <WebView
          source={{ uri: VK_LOGIN_URL }}
        />
      )}
    </SafeAreaView>
  );
};

export default CalendarScreen;
