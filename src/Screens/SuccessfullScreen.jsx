import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {resetAllCart} from '../Providers/cartSlice';

const SuccessfullScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const resetAll = () => {
    // dispatch(resetAllCart());
    navigation.navigate('Home');
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontWeight: '900', fontSize: 20, marginBottom: 30}}>
        Hurray
      </Text>
      <Text style={{fontWeight: '900', fontSize: 20, marginBottom: 30}}>
        🎊 Payment Successfull 🎊
      </Text>
      <Text>🎊 🎊 🎊</Text>
      <TouchableOpacity
        onPress={() => resetAll()}
        style={{
          width: '90%',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 15,
          margin: 15,
          backgroundColor: 'steelblue',
          borderRadius: 10,
        }}>
        <Text style={{fontWeight: '900', fontSize: 18, color: 'white'}}>
          Home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuccessfullScreen;

const styles = StyleSheet.create({});
