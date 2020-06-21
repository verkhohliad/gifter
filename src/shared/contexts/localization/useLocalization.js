import { useContext } from 'react';

import { LocalizationContext } from './LocalizationContext';

const useLocalization = () => {
  return useContext(LocalizationContext);
};

export default useLocalization;
