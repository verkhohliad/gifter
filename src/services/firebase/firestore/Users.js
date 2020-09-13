import db from './db';

class Users {
  constructor() {
    this.ref = db.collection('users');
  }

  async getCurrentUser(userUid) {
    const userSnap = await this.ref.doc(userUid).get();

    return userSnap.data();
  }
}

export default new Users();
