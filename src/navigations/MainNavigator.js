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

const MainNavigator = () => {
    const {currentUser: {user_class}} = useAuth()
    console.log({user_class})
    return (
        <RestaurantProvider>
            <CartProvider>
                <OrderProvider>
                    <NavigationContainer>
                        {user_class===1
                        ? < ChefDrawerNavigator />
                        : user_class===3
                        ? <WaiterDrawerNavigator />
                        : < VirtualWaiterStackNavigator />
                    }
                        {/* <ChefDrawerNavigator /> */}
                        {/* <WaiterDrawerNavigator /> */}
                        {/* < VirtualWaiterStackNavigator /> */}
                        {/* {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />} */}
                    </NavigationContainer>
                </OrderProvider>
            </CartProvider>
        </RestaurantProvider>
    );
};

export default MainNavigator;
