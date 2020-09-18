import React from 'react';

import Image from 'shared/components/Image';

import blankUser from './blankUser.png';
import styles from './styles';

// variant: small, big
const UserPic = ({ style = {}, source, variant }) => {
  return (
    <Image
      style={{
        ...style,
        ...styles[variant],
      }}
      source={source}
      defaultSource={blankUser}
    />
  );
};

export default UserPic;
