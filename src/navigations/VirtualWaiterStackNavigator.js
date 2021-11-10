import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pending from '../screens/Cheff/pending';
import Orderdetail from '../screens/Cheff/orderDetail';
import LandingPage from '../screens/VirtualWaiter/LandingPage';
import MenuItems from '../screens/VirtualWaiter/MenuItems';
import SelectTable from '../screens/VirtualWaiter/selectTable/SelectTable'
import ViewCart from '../screens/VirtualWaiter/viewCart/ViewCart'
import OrderStatus from '../screens/VirtualWaiter/orderStatus/OrderStatus'
import Payment from '../screens/VirtualWaiter/payment/Payment'
import Success from '../screens/VirtualWaiter/payment/Success'

const Stack = createStackNavigator();

export default function VirtualWaiterStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="SelectTable" component={SelectTable}  />
      <Stack.Screen name="LandingPage" component={LandingPage}  />
      <Stack.Screen name="MenuItems" component={MenuItems} />
      <Stack.Screen name="ViewCart" component={ViewCart} />
      <Stack.Screen name="OrderStatus" component={OrderStatus} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Success" component={Success} />
    </Stack.Navigator>
  );
}
