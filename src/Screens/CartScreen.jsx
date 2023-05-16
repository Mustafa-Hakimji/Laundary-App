import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {decrementQuantity, incrementQuantity} from '../Providers/ProductSlice';
import {
  decrementQuantityCart,
  incrementQuantityCart,
} from '../Providers/cartSlice';

const CartScreen = () => {
  const router = useRoute();
  const {selectedDay, selectedTime, selecteddate} = router.params;
  const cart = useSelector(state => state.cart.cart);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [indicator, setIndicator] = useState(false);

  const total = cart
    .map(item => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);

  const orderPlaced = () => {
    setIndicator(true);
    setTimeout(() => {
      setIndicator(false);
      navigation.replace('Successfull');
    }, 2000);
  };
  return (
    <ScrollView>
      {total === 0 ? (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>Your cart is empty </Text>
        </View>
      ) : (
        <>
          <TouchableOpacity
            style={{backgroundColor: 'white', borderRadius: 20, margin: 15}}>
            {cart.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    margin: 15,
                    padding: 5,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      maxWidth: 80,
                      justifyContent: 'flex-start',
                    }}>
                    <Text style={{fontWeight: 'bold', fontSize: 15}}>
                      {item.name}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      borderRadius: 10,
                      justifyContent: 'flex-start',
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
                  {/* + or - Buttons */}
                  <Text style={{fontWeight: 'bold', fontSize: 15}}>
                    $ {item.price * item.quantity}
                  </Text>
                </View>
              );
            })}
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: 'white',
              margin: 15,
              padding: 10,
              borderRadius: 15,
            }}>
            <Text>Billing details</Text>

            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
                margin: 15,
              }}>
              <Text style={{fontWeight: '900', fontSize: 14}}>Total items</Text>
              <Text style={{fontWeight: '900', fontSize: 14}}>
                {cart.length}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
                margin: 15,
              }}>
              <Text style={{fontWeight: '900', fontSize: 14}}>Total Price</Text>
              <Text style={{fontWeight: '900', fontSize: 14}}>$ {total}</Text>
            </View>
          </View>
          {indicator ? (
            <ActivityIndicator animating={indicator} size={'large'} />
          ) : (
            <TouchableOpacity
              onPress={() => orderPlaced()}
              style={{
                padding: 15,
                margin: 10,
                backgroundColor: 'orange',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <Text style={{fontWeight: '900', color: 'white', fontSize: 15}}>
                Place Order
              </Text>
            </TouchableOpacity>
          )}
        </>
      )}
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
