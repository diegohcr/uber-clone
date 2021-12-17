/* eslint-disable react/function-component-definition */
import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {Icon} from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import {NavContext} from '../context/navContext';

const data = [
  {
    id: 'Uber-X',
    title: 'Uber X',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id: 'Uber-XL',
    title: 'Uber XL',
    multiplier: 1.2,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id: 'Uber-LUX',
    title: 'Uber LUX',
    multiplier: 1.75,
    image: 'https://links.papareact.com/7pf',
  },
];

const SURGE_CAHRGE_RATE = 1.5;

const RideOptionsCars = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const {travelTimeInformation} = useContext(NavContext);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View style={tw`flex-row`}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('NavigateCard');
          }}
          style={tw`top-3 left-5 p-3 rounded-full h-12 w-12 mr-10`}>
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
          Select a Ride - {travelTimeInformation?.distance.text}
        </Text>
      </View>

      <FlatList
        style={{marginTop: -10}}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-10 ${
              item.id === selected?.id && 'bg-gray-200'
            }`}>
            <Image
              style={{width: 80, height: 90, resizeMode: 'contain'}}
              source={{uri: item.image}}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-lg font-bold`}>{item.title}</Text>
              <Text>{travelTimeInformation?.duration.text}</Text>
            </View>
            <Text style={tw`text-lg font-bold`}>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(
                (travelTimeInformation?.duration.value *
                  SURGE_CAHRGE_RATE *
                  item.multiplier) /
                  100,
              )}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View style={{marginBottom: 20}}>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}>
          <Text style={tw`text-center text-white text-lg`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default RideOptionsCars;

const styles = StyleSheet.create({});
