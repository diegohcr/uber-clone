/* eslint-disable react/function-component-definition */
import React from "react";
import { Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import MapView from "react-native-maps";
import Map from "../componentes/Map";

const MapScreen = () => (
  <View>
    <View style={tw`h-1/2`}>
      <Map />
    </View>
    <View style={tw`h-1/2`} />
  </View>
);

export default MapScreen;
