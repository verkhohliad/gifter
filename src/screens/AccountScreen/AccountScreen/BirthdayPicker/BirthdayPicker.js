import React, {
  useState, useCallback, useMemo,
} from 'react';
import {
  View, Button, Text, TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';

import { Users } from 'services/firebase/firestore';
import Icon from 'shared/components/Icon';

import styles from './styles';

const NOW_DATE = new Date();

const formatBdate = (bdate) => {
  if (!bdate) {
    return undefined;
  }

  const [day, month, year = NOW_DATE.getFullYear()] = bdate.split('.');

  return new Date(year, month - 1, day);
};

const BirthdayPicker = ({ bdate, userUid }) => {
  const [date, setDate] = useState(formatBdate(bdate));
  const [isVisible, setIsVisible] = useState(false);

  const onChange = useCallback((event, selectedDate) => {
    setDate(selectedDate || date || NOW_DATE);
  }, [date]);

  const onSelectDate = useCallback(() => {
    const resultDate = date || NOW_DATE;

    setDate(resultDate);
    setIsVisible(false);

    Users.setCurrentUserBirthday(userUid, `${resultDate.getDate()}.${resultDate.getMonth() + 1}.${resultDate.getFullYear()}`);
  }, [date]);

  const showPicker = useCallback(() => {
    setIsVisible(true);
  }, []);

  const dateLabel = useMemo(() => {
    return date ? `Your Birthday: ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}` : 'Select Your Birthday';
  }, [date]);

  return (
    <View>
      <View style={styles.birthdayPick}>
        <Text style={styles.birthdayLabel}>
          {dateLabel}
        </Text>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={showPicker}
        >
          <Icon
            name="pencil"
          />
        </TouchableOpacity>
      </View>

      <Modal
        isVisible={isVisible}
        backdropColor="white"
        backdropOpacity={1}
      >
        <DateTimePicker
          value={date || NOW_DATE}
          onChange={onChange}
          maximumDate={NOW_DATE}
        />
        <Button
          title="Done"
          onPress={onSelectDate}
        />
      </Modal>
    </View>
  );
};

export default BirthdayPicker;
