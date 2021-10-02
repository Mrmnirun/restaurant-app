import "react-native-gesture-handler";
import React from "react";
import AppNavContainer from "./src/navigations/index";
import LandingPage from './src/screens/VirtualWaiter/LandingPage'
import MenuItems from './src/screens/VirtualWaiter/MenuItems'

const App = () => {
  return <AppNavContainer />;
  // return <MenuItems/>
};

export default App;
