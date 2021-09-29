import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import { LOGIN, SIGNUP } from "../constants/routeNames";
import Login from "../screens/Login";

const SignUp = () => {
  return (
    <View>
      <Text>signup</Text>
    </View>
  );
};

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator initialRouteName={LOGIN}>
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={SIGNUP} component={SignUp} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
