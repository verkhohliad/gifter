// todo: use logger and crashlitics here

const logger = {
  log(...args) {
    console.log(...args);
  },
  error(...args) {
    console.warn(...args);
  },
  info(...args) {
    console.info(...args);
  },
  warn(...args) {
    console.warn(...args);
  },
};

export default logger;
