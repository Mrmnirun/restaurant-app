import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";

import About from '../screens/Waiter/about';
import TableView from '../screens/Waiter/tableView'
// import ChefStackNavigation from "./chefStackNavigator";


const Drawer = createDrawerNavigator();

export default function WaiterDrawerNavigator(){
    return(
        <Drawer.Navigator >
        <Drawer.Screen name="Table View" component={TableView} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    )

}