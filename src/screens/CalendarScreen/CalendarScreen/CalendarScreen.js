import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Agenda } from 'react-native-calendars';

import { useCalendarUserData } from '../CalendarUserData';

import CalendarItem from './CalendarItem';
import EmptyDateItem from './EmptyDateItem';
import Knob from './Knob';
import mapEvents from './mapEvents';
import styles from './styles';

const CURRENT_FULL_YEAR = new Date().getFullYear();
const MIN_DATE = `${CURRENT_FULL_YEAR}-01-01`;
const MAX_DATE = `${CURRENT_FULL_YEAR}-12-31`;

const onRowHasChanged = (r1, r2) => { return r1 !== r2; };

const CalendarScreen = ({ navigation }) => {
  const { events: initialEvents } = useCalendarUserData();
  const [events, setEvents] = useState({});

  useEffect(() => {
    setEvents(mapEvents(initialEvents));
  }, [initialEvents]);

  return (
    <View style={styles.container}>
      <Agenda
        items={events}
        minDate={MIN_DATE}
        maxDate={MAX_DATE}
        renderItem={(item) => {
          return (
            <CalendarItem
              item={item}
              navigation={navigation}
            />
          );
        }}
        renderEmptyDate={(date) => {
          return (
            <EmptyDateItem
              date={date}
              navigation={navigation}
            />
          );
        }}
        renderKnob={Knob}
        rowHasChanged={onRowHasChanged}
      />
    </View>
  );
};

export default CalendarScreen;
