import db from './db';

class WishLists {
  constructor() {
    this.ref = db.collection('wishList');
  }

  async getWishList(userUid) {
    const querySnapshot = await this.ref.where('userUid', '==', userUid).get();
    const wishList = [];

    querySnapshot.forEach((doc) => { wishList.push(doc.data()); });

    return wishList;
  }

  createWishList(userUid, wishItem) {
    return this.ref.add({
      ...wishItem,
      userUid,
    });
  }
}

export default new WishLists();
