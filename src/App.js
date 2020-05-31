import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import RootNavigation from 'screens/RootNavigation';

enableScreens();

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const App = () => {
  return (
    <>
      {global.HermesInternal == null ? null : (
        <View style={styles.engine}>
          <Text style={styles.footer}>Engine: Hermes</Text>
        </View>
      )}
      <View
        style={styles.title}
      >
        <Text>
          Gifter
        </Text>
      </View>
      <RootNavigation />
    </>
  );
};

export default App;
