import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pending from '../screens/Cheff/pending';
import Orderdetail from '../screens/Cheff/orderDetail';
import LandingPage from '../screens/VirtualWaiter/LandingPage';
import MenuItems from '../screens/VirtualWaiter/MenuItems';

const Stack = createStackNavigator();

export default function VirtualWaiterStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="LandingPage" component={LandingPage}  />
      <Stack.Screen name="MenuItems" component={MenuItems} />
     
    </Stack.Navigator>
  );
}
