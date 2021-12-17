/* eslint-disable no-use-before-define */
/* eslint-disable react/function-component-definition */
import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env';
import tw from 'tailwind-react-native-classnames';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'react-native-elements';
import {NavContext} from '../context/navContext';
import NavFavorities from './NavFavorities';

const NavigateCard = () => {
  const {destination, setDestination} = useContext(NavContext);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Olá, Viajante</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Para onde?"
            styles={toInputBoxStyles}
            enablePoweredByContainer={false}
            returnKeyType="search"
            fetchDetails
            minLength={4}
            onPress={(data, details = null) => {
              setDestination({
                location: details.geometry.location,
                description: data.description,
              });

              navigation.navigate('RideOptionsCard');
            }}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en',
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={1000}
          />
        </View>

        <NavFavorities />
      </View>

      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
        <TouchableOpacity
          disabled={!destination}
          onPress={() => navigation.navigate('RideOptionsCard')}
          style={tw`flex flex-row bg-black w-24 px-4 py-3 rounded-full justify-between`}>
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex flex-row justify-between w-24 px-4 py-3`}>
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
          />
          <Text style={tw`text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    flex: 0,
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
