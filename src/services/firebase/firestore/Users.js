import db from './db';

class Users {
  constructor() {
    this.ref = db.collection('users');
  }

  async getCurrentUser(userUid) {
    const userSnap = await this.ref.doc(userUid).get();

    return userSnap.data();
  }

  setCurrentUserBirthday(userUid, bdate) {
    this.ref.doc(userUid).update({
      bdate,
    });
  }
}

export default new Users();
