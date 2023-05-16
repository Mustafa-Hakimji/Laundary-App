import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  decrementQuantity,
  getProducts,
  incrementQuantity,
} from '../Providers/ProductSlice';
import {
  addToCart,
  decrementQuantityCart,
  incrementQuantityCart,
} from '../Providers/cartSlice';

const Products = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);
  const product = useSelector(state => state.product.product);
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

  useEffect(() => {
    if (product.length > 0) return;

    const fetchProduct = () => {
      services.map(service => dispatch(getProducts(service)));
    };
    fetchProduct();
  }, []);

  const addItemTocart = item => {
    dispatch(addToCart(item)); // Item added to cart.
    dispatch(incrementQuantity(item)); //Increment porduct quantity
  };
  return (
    <View style={{flex: 1}}>
      {product &&
        product.map((item, index) => {
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
              <View
                style={{
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 17}}>
                  {item.name}
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 17}}>
                  ${item.price}
                </Text>
              </View>
              <View>
                {cart?.some(c => c.id === item.id) ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'white',
                        borderWidth: 2,
                        borderColor: 'lightgreen',
                        padding: 3,
                        borderRadius: 15,
                        marginRight: 5,
                        height: 30,
                        width: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onPress={() => {
                        dispatch(incrementQuantity(item));
                        dispatch(incrementQuantityCart(item));
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '900',
                          color: 'green',
                        }}>
                        +
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{
                        backgroundColor: 'white',
                        borderWidth: 2,
                        borderColor: 'lightgreen',
                        padding: 3,
                        borderRadius: 17,
                        height: 34,
                        width: 34,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '900',
                          color: 'green',
                        }}>
                        {item.quantity}
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{
                        backgroundColor: 'white',
                        borderWidth: 2,
                        borderColor: 'lightgreen',
                        padding: 3,
                        borderRadius: 15,
                        marginLeft: 5,
                        height: 30,
                        width: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onPress={() => {
                        dispatch(decrementQuantity(item));
                        dispatch(decrementQuantityCart(item));
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '900',
                          color: 'green',
                          fontWeight: '900',
                        }}>
                        -
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'white',
                      borderWidth: 2,
                      borderColor: 'lightgreen',
                      padding: 3,
                      borderRadius: 10,
                    }}
                    onPress={() => addItemTocart(item)}>
                    <Text
                      style={{fontSize: 16, fontWeight: '900', color: 'green'}}>
                      Add cart
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          );
        })}
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});
