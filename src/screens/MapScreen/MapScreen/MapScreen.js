import React from 'react';
import { View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import styles from './styles';
import mapStyle from './mapStyle.json';

const defaultCoords = {
  latitude: 50.448920594944326,
  latitudeDelta: 0.3165549070915432,
  longitude: 30.498482063412666,
  longitudeDelta: 0.2842712402343679,
};

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={defaultCoords}
        customMapStyle={mapStyle}
      >
        <Marker
          coordinate={defaultCoords}
        />
      </MapView>
    </View>
  );
};

export default MapScreen;
