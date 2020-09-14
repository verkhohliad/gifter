const MONTH_AMOUNT = 12;

const getDaysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

const generateDateKey = (year, month, day) => {
  return `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
};

const generateDefaultItemsMap = (year) => {
  const itemsMap = {};

  for (let month = 1; month <= MONTH_AMOUNT; month += 1) {
    const daysInMonth = getDaysInMonth(month, year);

    for (let day = 1; day <= daysInMonth; day += 1) {
      itemsMap[generateDateKey(year, month, day)] = [];
    }
  }

  return itemsMap;
};

const mapEvents = (events) => {
  const year = new Date().getFullYear();

  const itemsMap = generateDefaultItemsMap(year);

  if (Array.isArray(events) && events.length > 0) {
    events.forEach((event) => {
      // eslint-disable-next-line no-unused-vars
      const [day, month, eventYear] = event.date.split('.');
      const key = generateDateKey(year, month, day);

      itemsMap[key] = [
        ...itemsMap[key] ?? [],
        event,
      ];
    });
  }

  return itemsMap;
};

export default mapEvents;
