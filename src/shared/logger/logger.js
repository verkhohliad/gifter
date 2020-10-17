import { Crashlytics } from 'services/firebase';

const logger = {
  log(...args) {
    console.log(...args);
  },
  error(error) {
    console.error(error);

    if (error.message) {
      Crashlytics.recordError(error);
    }

    Crashlytics.log(error?.message ?? error);
  },
  info(...args) {
    console.info(...args);
  },
  warn(...args) {
    console.warn(...args);
  },
};

export default logger;
