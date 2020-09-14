import db from './db';

class Events {
  constructor() {
    this.vkEventsRef = db.collection('vk-events');
  }

  async getEvents(currentUser) {
    if (!currentUser.vk) {
      return [];
    }

    const events = [];

    const requests = currentUser.vk.friends.map((friendId) => {
      return this.vkEventsRef.doc(String(friendId)).get({
        source: 'cache',
      });
    });

    const results = await Promise.all(requests);

    results.forEach((result) => {
      events.push(result.data());
    });

    return events;
  }
}

export default new Events();
