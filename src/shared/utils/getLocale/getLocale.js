import relativeGetLocale from './relativeGetLocale';

const getLocale = () => {
  const locale = relativeGetLocale();

  return locale.split('_')[0];
};

export default getLocale;
