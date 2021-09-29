import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Pending from "../screens/Cheff/pending";
import MyOrders from '../screens/Cheff/myOrders';
import About from '../screens/Cheff/about';
import Finished from '../screens/Cheff/finished';
// import ChefStackNavigation from "./chefStackNavigator";


const Drawer = createDrawerNavigator();

export default function ChefDrawerNavigator(){
    return(
        <Drawer.Navigator >
        <Drawer.Screen name="Pending" component={Pending} />
        <Drawer.Screen name="MyOrders" component={MyOrders} />
        <Drawer.Screen name="Finished" component={Finished} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    )

}

  