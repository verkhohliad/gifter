import React from 'react';
import { useTheme } from '@react-navigation/native';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

const Icon = ({ size = 40, name, color }) => {
  const { colors: { text } } = useTheme();

  return (
    <EvilIcon
      size={size}
      name={name}
      color={color || text}
    />
  );
};

export default Icon;
