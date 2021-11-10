import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";
import ChefDrawerNavigator from "./ChefDrawerNavigator";
import WaiterDrawerNavigator from './WaiterDrawerNavigator';
import VirtualWaiterStackNavigator from './VirtualWaiterStackNavigator';
import {RestaurantProvider} from '../context/RestaurantContext'
import {CartProvider} from '../context/CartContext'
import {OrderProvider} from '../context/OrderContext'

const AppNavContainer = () => {
  const isLoggedIn = true;
  return (
    <RestaurantProvider>
    <CartProvider>
      <OrderProvider>
    <NavigationContainer>
       {/* <ChefDrawerNavigator /> */}
       {/* <WaiterDrawerNavigator /> */}
       < VirtualWaiterStackNavigator />
      {/* {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />} */}
    </NavigationContainer>
    </OrderProvider>
    </CartProvider>
    </RestaurantProvider>
  );
};
DrawerNavigator;

export default AppNavContainer;
