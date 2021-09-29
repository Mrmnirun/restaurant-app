import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";
import ChefDrawerNavigator from "./ChefDrawerNavigator";
const AppNavContainer = () => {
  const isLoggedIn = true;
  return (
    <NavigationContainer>
       <ChefDrawerNavigator />
      {/* {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />} */}
    </NavigationContainer>
  );
};
DrawerNavigator;

export default AppNavContainer;
