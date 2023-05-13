import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';

const Corousel = () => {
  const images = [
    'https://img.freepik.com/free-vector/scene-with-two-women-laundry-room_1308-63943.jpg?size=626&ext=jpg',
    'https://img.freepik.com/free-vector/landry-man-cartoon-composition_1284-64892.jpg?size=626&ext=jpg',
    'https://img.freepik.com/free-vector/many-clothes-hanging-line-with-nature-elements_1308-51923.jpg?size=626&ext=jpg',
    'https://img.freepik.com/free-vector/laundry-room-equipment-wash-dry-clothes-cartoon-set-washing-machine-basket-detergent-bottles-powder-rope-with-hanging-underwear-shirts-isolated-white-wall_107791-5924.jpg?size=626&ext=jpg',
    'https://img.freepik.com/free-vector/apartment-building-site-laundry-room-cartoon-composition-with-tenants-using-washing-machine-detergent-bottles-illustration_1284-64894.jpg?size=626&ext=jpg',
  ];
  return (
    <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor={'#13274f'}
        inactiveDotColor={'#90a4ae'}
        ImageComponentStyle={{borderRadius: 6, width: '97%'}}
      />
    </View>
  );
};

export default Corousel;

const styles = StyleSheet.create({});
