/* eslint-disable no-use-before-define */
/* eslint-disable react/function-component-definition */
import React, {useContext} from 'react';
import {Image, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
// eslint-disable-next-line import/no-unresolved
import {GOOGLE_MAPS_APIKEY} from '@env';
import NavOptions from '../componentes/NavOptions';
import {NavContext} from '../context/navContext';
import NavFavorities from '../componentes/NavFavorities';

const HomeScreen = () => {
  const {setOrigin} = useContext(NavContext);

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{width: 100, height: 100, resizeMode: 'contain'}}
          source={{uri: 'https://links.papareact.com/gzs'}}
        />

        <GooglePlacesAutocomplete
          placeholder="Where from?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            setOrigin({
              location: details.geometry.location,
              description: data.description,
            });
          }}
          fetchDetails
          returnKeyType="seacrh"
          enablePoweredByContainer={false}
          minLength={3}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={1000}
        />

        <NavOptions />
        <NavFavorities />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
