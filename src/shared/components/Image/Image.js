import React, { useMemo, memo } from 'react';
import { Image as RNImage } from 'react-native';

const Image = ({ source, style, defaultSource }) => {
  const imageSource = useMemo(() => {
    return {
      uri: source,
    };
  }, [source]);

  return (
    <RNImage
      style={style}
      source={imageSource}
      defaultSource={defaultSource}
    />
  );
};

export default memo(Image);
