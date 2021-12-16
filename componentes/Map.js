/* eslint-disable react/function-component-definition */
import React, {useContext, useEffect, useRef} from 'react';
import {Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_APIKEY} from '@env';
import {NavContext} from '../context/navContext';

const Map = () => {
  const {origin, destination} = useContext(NavContext);
  const mapRef = useRef(null);

  // useEffect(() => {
  //   if (!origin || !destination) return;

  //   console.log('ok');

  //   mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
  //     edgePadding: {top: 50, right: 50, bottom: 50, left: 50},
  //   });
  // }, [origin, destination]);

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}>
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origem"
          description={origin.description}
          identifier="origin"
        />
      )}

      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destino"
          description={destination.description}
          identifier="destination"
        />
      )}

      {origin && destination && (
        <MapViewDirections
          lineDashPattern={[0]}
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="black"
          onReady={result => {
            mapRef.current.fitToCoordinates(result.coordinates, {
              edgePadding: {
                right: 50,
                bottom: 50,
                left: 50,
                top: 50,
              },
            });
          }}
        />
      )}
    </MapView>
  );
};

export default Map;
