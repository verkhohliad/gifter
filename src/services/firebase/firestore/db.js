import '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';

const db = firebase.firestore();

// for local emulator
// this.db.settings({T
//   host: 'localhost:8080',
//   ssl: false,
// });

export default db;
