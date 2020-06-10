import React, { useState, useMemo } from 'react';

import getLocale from 'shared/utils/getLocale';

import i18n from './i18n';
import { Provider } from './LocalizationContext';

const LocalizationProvider = ({ children }) => {
  const [locale, setLocale] = useState(getLocale());

  const value = useMemo(() => {
    return {
      t: (scope, options) => {
        return i18n.t(scope, { locale, ...options });
      },
      locale,
      setLocale,
    };
  }, [locale]);

  return (
    <Provider value={value}>
      {children}
    </Provider>
  );
};

export default LocalizationProvider;
