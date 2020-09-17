import React, { useState, useCallback } from 'react';
import {
  View, Button, TextInput, Text,
} from 'react-native';

import logger from 'shared/logger';
import { Auth } from 'services/firebase';

import styles from './styles';

const validatePhoneNumber = (phone) => {
  const regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/;

  return regexp.test(phone);
};

const LoginScreen = () => {
  const [phone, setPhone] = useState('');
  const [confirmResult, setConfirmResult] = useState(null);
  const [verificationCode, setVerificationCode] = useState('');

  const sendPhone = useCallback(async () => {
    if (!validatePhoneNumber(phone)) {
      logger.warn('invalid phone number');
      return;
    }

    try {
      const respConfirmResult = await Auth.login(phone);

      setConfirmResult(respConfirmResult);
    } catch (err) {
      logger.error(err);
    }
  }, [phone]);

  const applyVerificationCode = useCallback(async () => {
    if (verificationCode.length !== 6) {
      logger.warn('invalid verification code');
      return;
    }

    try {
      const user = await confirmResult.confirm(verificationCode);

      logger.log('Verified!', user);
    } catch (err) {
      logger.error(err);
    }
  }, [verificationCode]);

  return (
    <View style={styles.loginScreen}>
      <View style={styles.field}>
        <Text style={styles.label}>Phone</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPhone}
          value={phone}
        />
        <Button
          style={styles.button}
          title="Send"
          onPress={sendPhone}
        />
      </View>

      {Boolean(confirmResult) && (
        <View style={styles.field}>
          <Text style={styles.label}>Verification code</Text>
          <TextInput
            style={styles.input}
            onChangeText={setVerificationCode}
            value={verificationCode}
          />
          <Button
            style={styles.button}
            title="Apply"
            onPress={applyVerificationCode}
          />
        </View>
      )}
    </View>
  );
};

export default LoginScreen;
