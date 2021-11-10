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
import {useAuth} from '../context/AuthContext'
import MainNavigator from './MainNavigator'

const AppNavContainer = () => {
  const isLoggedIn = true;
  const {token} = useAuth()
  return token? <MainNavigator /> : <AuthNavigator/>
};
DrawerNavigator;

export default AppNavContainer;
