import "react-native-gesture-handler";
import React from "react";
import AppNavContainer from "./src/navigations/index";
import LandingPage from './src/screens/VirtualWaiter/LandingPage'
import MenuItems from './src/screens/VirtualWaiter/MenuItems'
import {AuthProvider} from './src/context/AuthContext'

const App = () => {
  return ( 
    <AuthProvider>
      <AppNavContainer />
    </AuthProvider>
  );
  // return <MenuItems/>
};

export default App;
