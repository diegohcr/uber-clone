/* eslint-disable react/function-component-definition */
import React from 'react';
import {Text, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Map from '../componentes/Map';
import NavigateCard from '../componentes/NavigateCard';
import RideOptionsCard from '../componentes/RideOptionsCard';

const MapScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
