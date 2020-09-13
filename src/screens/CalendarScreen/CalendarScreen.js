/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';
// eslint-disable-next-line no-unused-vars
import frFunctions from '@react-native-firebase/functions';
import firebase from '@react-native-firebase/app';

import { useCalendarUserData } from './CalendarUserData';

import styles from './styles';

const functions = firebase.app().functions('europe-west3');

const MONTH_AMOUNT = 12;

const getDaysInYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
  const oneDay = 1000 * 60 * 60 * 24;

  return Math.floor(diff / oneDay);
};

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

  // console.log('!!!', JSON.parse(JSON.stringify(itemsMap)));

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

const CalendarScreen = () => {
  const { events: initialEvents } = useCalendarUserData();
  const [events, setEvents] = useState({});

  useEffect(() => {
    setEvents(mapEvents(initialEvents));
  }, [initialEvents]);

  console.log({ events });

  return (
    <View style={styles.container}>
      <Agenda
        // The list of items that have to be displayed in agenda. If you want to render item as empty date
        // the value of date key has to be an empty array []. If there exists no value for date key it is
        // considered that the date in question is not yet loaded
        items={events}
        // Callback that gets called when items for a certain month should be loaded (month became visible)
        // loadItemsForMonth={(month) => { console.log('trigger items loading'); }}
        // Callback that fires when the calendar is opened or closed
        onCalendarToggled={(calendarOpened) => { console.log(calendarOpened); }}
        // Callback that gets called on day press
        onDayPress={(day, ...args) => { console.log('day pressed', day, args); }}
        // Callback that gets called when day changes while scrolling agenda list
        onDayChange={(day) => { console.log('day changed'); }}
        // Initially selected day
        // selected="2020-01-01"
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate="2020-01-01"
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        // maxDate="2020-12-31"
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={150}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={150}
        // Specify how each item should be rendered in agenda
        renderItem={(item, firstItemInDay) => {
          // console.log({ item, firstItemInDay });
          return (
            <TouchableOpacity style={styles.item}>
              <Text>
                {item?.assignedUser.firstName}
                {' '}
                {item?.assignedUser.lastName}
              </Text>
            </TouchableOpacity>
          );
        }}
        // Specify how each date should be rendered. day can be undefined if the item is not first in that day.
        // renderDay={(day, item) => {
        //   console.log({ day, item });
          // return (
            // <View style={{ flex: 1, height: 80 }}>
            //   <Text style={{ fontSize: 20 }}>
            //     {day?.day}
            //     {' '}
            //     {day?.month}
            //   </Text>
            // </View>
          // );
        // }}
        // Specify how empty date content with no items should be rendered
        renderEmptyDate={() => {
          return (
            <View />
          );
        }}
        // renderEmptyData={() => {
        //   return (
        //     <View style={styles.emptyDate}>
        //       <Text>This is empty date!</Text>
        //     </View>
        //   );
        // }}
        // Specify how agenda knob should look like
        renderKnob={() => {
          return (
            <View>
              <Text>хуй</Text>
            </View>
          );
        }}
        // Specify your item comparison function for increased performance
        rowHasChanged={(r1, r2) => { return r1 !== r2; }}
        // Hide knob button. Default = false
        // hideKnob
        // By default, agenda dates are marked if they have at least one item, but you can override this if needed
        // markedDates={{
          // '2012-05-16': { selected: true, marked: true },
          // '2012-05-17': { marked: true },
          // '2012-05-18': { disabled: true },
        // }}
        // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
        // disabledByDefault
        // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
        // onRefresh={(...args) => { return console.log('refreshing...', args); }}
        // Set this true while waiting for new data from a refresh
        // refreshing={false}
        // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView.
        // refreshControl={null}
        // Agenda theme
        theme={{
          // ...calendarTheme,
          agendaDayTextColor: 'gray',
          agendaDayNumColor: 'gray',
          agendaTodayColor: 'black',
          agendaKnobColor: 'gray',
        }}
        // Agenda container style
        style={{}}
      />
    </View>
  );
};

export default CalendarScreen;
