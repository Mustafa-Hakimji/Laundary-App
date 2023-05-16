import {NavigationContainer} from '@react-navigation/native';
import CartScreen from '../Screens/CartScreen';
import HomeScreen from '../Screens/HomeScreen';
import PickUpScreen from '../Screens/PickUpScreen';
import SuccessfullScreen from '../Screens/SuccessfullScreen';

const {createNativeStackNavigator} = require('@react-navigation/native-stack');

const Stack = createNativeStackNavigator();

const StackNavigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Pickup"
          component={PickUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{headerTitle: 'Your bucket'}}
        />
        <Stack.Screen name="Successfull" component={SuccessfullScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigators;
