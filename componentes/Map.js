/* eslint-disable react/function-component-definition */
import React, { useContext } from "react";
import { Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { NavContext } from "../context/navContext";

const Map = () => {
  const { origin } = useContext(NavContext);

  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat || 37.78825,
        longitude: origin.location.lng || -122.4324,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Local de partida"
          description={origin.description}
          identifier="origin"
        />
      )}
    </MapView>
  );
};

export default Map;
