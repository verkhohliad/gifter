import React from 'react';

import Image from 'shared/components/Image';

import blankProduct from './blankProduct.png';
import styles from './styles';

// variant = big, small
const ProductPic = ({ style = {}, source, variant = 'big' }) => {
  return (
    <Image
      style={{
        ...style,
        ...styles[variant],
      }}
      source={source}
      defaultSource={blankProduct}
    />
  );
};

export default ProductPic;
