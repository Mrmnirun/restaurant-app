import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pending from '../screens/Cheff/pending';
import Orderdetail from '../screens/Cheff/orderDetail';

const Stack = createStackNavigator();

export default function ChefStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false}}>
      <Stack.Screen name="Pending" component={Pending}  />
      <Stack.Screen name="OrderDetails" component={Orderdetail} />
     
    </Stack.Navigator>
  );
}
