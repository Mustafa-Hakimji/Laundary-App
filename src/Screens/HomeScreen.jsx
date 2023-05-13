import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import Corousel from '../Components/Corousel';
import Services from '../Components/Services';
import Products from '../Components/Products';

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <TextInput placeholder="Search for items or Moer" />
          <Image
            source={require('../Images/search.png')}
            style={{height: 30, width: 30}}
          />
        </View>

        {/* Carousel */}
        <Corousel />

        {/* Services */}
        <Services />
        {/* Products  */}
        <Products />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 0.8,
    justifyContent: 'space-between',
    alignItems: 'center',
    maxHeight: 50,
    borderRadius: 7,
    margin: 10,
    borderColor: '#c0c0c0',
  },
});
