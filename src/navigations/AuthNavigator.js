import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import Login from "../screens/auth/Login";

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName='Login'>
        <AuthStack.Screen name='Login' component={Login} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
