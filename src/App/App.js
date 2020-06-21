import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigation from 'screens/RootNavigation';
import { LocalizationProvider } from 'shared/contexts/localization';
import { UserDataProvider } from '../shared/contexts/userData';

enableScreens();

const App = () => {
  return (
    <SafeAreaProvider>
      <AppearanceProvider>
        <LocalizationProvider>
          <UserDataProvider>
            <RootNavigation />
          </UserDataProvider>
        </LocalizationProvider>
      </AppearanceProvider>
    </SafeAreaProvider>
  );
};

export default App;
