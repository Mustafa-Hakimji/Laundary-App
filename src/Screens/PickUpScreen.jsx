import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HorizontalDatepicker from '@awrminkhodaei/react-native-horizontal-datepicker';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const PickUpScreen = () => {
  const cart = useSelector(state => state.cart.cart);
  const total = cart
    .map(item => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);
  const [selecteddate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState([]);
  const [selectedDay, setSelectedDay] = useState([]);
  const navigation = useNavigation();
  const times = [
    {
      id: '1',
      time: '10:00 AM',
    },
    {
      id: '2',
      time: '11:00 AM',
    },
    {
      id: '3',
      time: '12:00 PM',
    },
    {
      id: '4',
      time: '01:00 PM',
    },
    {
      id: '5',
      time: '02:00 PM',
    },
    {
      id: '6',
      time: '03:00 PM',
    },
    {
      id: '7',
      time: '04:00 PM',
    },
    {
      id: '8',
      time: '05:00 PM',
    },
    {
      id: '9',
      time: '06:00 PM',
    },
  ];
  const deliveryDay = [
    {
      id: '1',
      day: '1-2 day',
    },
    {
      id: '2',
      day: '2-4 day',
    },
    {
      id: '3',
      day: '3-5 day',
    },
    {
      id: '4',
      day: '4-6 day',
    },
    {
      id: '5',
      day: '5-7 day',
    },
  ];
  const proceedTocart = () => {
    if (!selecteddate || !selectedTime || !selectedDay) {
      Alert.alert('Empty Field', 'All the fields are necessary', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
    if (selectedDay && selectedTime && selecteddate) {
      navigation.replace('Cart', {
        selectedDay,
        selectedTime,
        selecteddate,
      });
    }
  };
  return (
    <View>
      <Text style={{fontSize: 16, fontWeight: '900', marginHorizontal: 10}}>
        enter Address
      </Text>
      <TextInput
        placeholder="Address here"
        style={{
          padding: 40,
          borderColor: 'grey',
          borderWidth: 0.7,
          margin: 10,
          borderRadius: 9,
        }}
      />
      <Text style={{fontSize: 16, fontWeight: '900', marginHorizontal: 10}}>
        Pickup Date
      </Text>
      <HorizontalDatepicker
        mode="gregorian"
        startDate={new Date('2020-08-20')}
        endDate={new Date('2020-08-31')}
        initialSelectedDate={new Date('2020-08-22')}
        onSelectedDateChange={date => setSelectedDate(date)}
        selectedItemWidth={170}
        unselectedItemWidth={38}
        itemHeight={38}
        itemRadius={10}
        selectedItemTextStyle={styles.selectedItemTextStyle}
        unselectedItemTextStyle={styles.selectedItemTextStyle}
        selectedItemBackgroundColor="#222831"
        unselectedItemBackgroundColor="#ececec"
        flatListContainerStyle={styles.flatListContainerStyle}
      />

      <Text style={{fontSize: 16, fontWeight: '900', marginHorizontal: 10}}>
        Select Time
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {times.map((item, index) => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => setSelectedTime(item.time)}
              style={
                selectedTime.includes(item.time)
                  ? {
                      padding: 15,
                      margin: 10,
                      borderWidth: 0.8,
                      borderRadius: 10,
                      borderColor: 'red',
                    }
                  : {
                      padding: 15,
                      margin: 10,
                      borderWidth: 0.8,
                      borderRadius: 10,
                    }
              }>
              <Text>{item.time}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <Text style={{fontSize: 16, fontWeight: '900', marginHorizontal: 10}}>
        Select Delivery date
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {deliveryDay.map((item, index) => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => setSelectedDay(item.day)}
              style={
                selectedDay.includes(item.day)
                  ? {
                      padding: 15,
                      margin: 10,
                      borderWidth: 0.8,
                      borderRadius: 10,
                      borderColor: 'red',
                    }
                  : {
                      padding: 15,
                      margin: 10,
                      borderWidth: 0.8,
                      borderRadius: 10,
                    }
              }>
              <Text>{item.day}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      {total === 0 ? null : (
        <TouchableOpacity
          style={{
            backgroundColor: 'lightgreen',
            padding: 10,
            marginTop: 250,
            marginBottom: 30,
            margin: 15,
            borderRadius: 7,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text>
              {cart.length} items | $ {total}
            </Text>
            <Text>extra charges may apply </Text>
          </View>
          <TouchableOpacity onPress={() => proceedTocart()}>
            <Text>Proceed to Cart</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PickUpScreen;

const styles = StyleSheet.create({});
