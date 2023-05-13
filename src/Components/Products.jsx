import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Products = () => {
  const services = [
    {
      id: '0',
      image: 'https://cdn-icons-png.flaticon.com/128/4643/4643574.png',
      name: 'shirt',
      quantity: 0,
      price: 10,
    },
    {
      id: '11',
      image: 'https://cdn-icons-png.flaticon.com/128/892/892458.png',
      name: 'T-shirt',
      quantity: 0,
      price: 10,
    },
    {
      id: '12',
      image: 'https://cdn-icons-png.flaticon.com/128/9609/9609161.png',
      name: 'dresses',
      quantity: 0,
      price: 10,
    },
    {
      id: '13',
      image: 'https://cdn-icons-png.flaticon.com/128/599/599388.png',
      name: 'jeans',
      quantity: 0,
      price: 10,
    },
    {
      id: '14',
      image: 'https://cdn-icons-png.flaticon.com/128/9431/9431166.png',
      name: 'Sweater',
      quantity: 0,
      price: 10,
    },
    {
      id: '15',
      image: 'https://cdn-icons-png.flaticon.com/128/3345/3345397.png',
      name: 'shorts',
      quantity: 0,
      price: 10,
    },
    {
      id: '16',
      image: 'https://cdn-icons-png.flaticon.com/128/293/293241.png',
      name: 'Sleeveless',
      quantity: 0,
      price: 10,
    },
  ];
  return (
    <View style={{flex: 1}}>
      {services &&
        services.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
                shadowColor: 'black',
                elevation: 2,
                borderWidth: 0.5,
                borderColor: 'white',
                padding: 10,
                alignItems: 'center',
              }}>
              <Image
                source={{uri: item.image}}
                style={{height: 70, width: 70}}
              />
              <View>
                <Text>{item.name}</Text>
                <Text>${item.price}</Text>
              </View>
              <View>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    borderWidth: 2,
                    borderColor: 'lightgreen',
                    padding: 3,
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{fontSize: 16, fontWeight: '900', color: 'green'}}>
                    Add cart
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});
