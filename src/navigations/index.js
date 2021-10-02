import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";
import ChefDrawerNavigator from "./ChefDrawerNavigator";
import WaiterDrawerNavigator from './WaiterDrawerNavigator';
import VirtualWaiterStackNavigator from './VirtualWaiterStackNavigator';
const AppNavContainer = () => {
  const isLoggedIn = true;
  return (
    <NavigationContainer>
       {/* <ChefDrawerNavigator /> */}
       {/* <WaiterDrawerNavigator /> */}
       < VirtualWaiterStackNavigator />
      {/* {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />} */}
    </NavigationContainer>
  );
};
DrawerNavigator;

export default AppNavContainer;
