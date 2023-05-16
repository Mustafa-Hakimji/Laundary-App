import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import Corousel from '../Components/Corousel';
import Services from '../Components/Services';
import Products from '../Components/Products';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const cart = useSelector(state => state?.cart?.cart);
  const total = cart
    ?.map(item => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);

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
      {total === 0 ? null : (
        <TouchableOpacity
          style={{
            backgroundColor: 'lightgreen',
            padding: 10,
            marginBottom: 30,
            margin: 15,
            borderRadius: 7,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text>
              {cart?.length} items | $ {total}
            </Text>
            <Text>extra charges may apply </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Pickup')}>
            <Text>Proceed to pickup</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      )}
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
