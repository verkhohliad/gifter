import React from 'react';

import Image from 'shared/components/Image';

import blankProduct from './blankProduct.png';
import styles from './styles';

const ProductPic = ({ style = {}, source }) => {
  return (
    <Image
      style={{
        ...style,
        ...styles.productPic,
      }}
      source={source}
      defaultSource={blankProduct}
    />
  );
};

export default ProductPic;
