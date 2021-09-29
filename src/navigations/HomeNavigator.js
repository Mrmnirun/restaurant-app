import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import {
  HOME,
  HOTEL,
  MEALS,
  RESTAURANT,
  REVIEWS,
  ROOMS,
} from "../constants/routeNames";
import Home from "../screens/Home";

const Rooms = () => {
  return (
    <View>
      <Text>rooms</Text>
    </View>
  );
};
const Restaurant = () => {
  return (
    <View>
      <Text>restaurant</Text>
    </View>
  );
};
const Reviews = () => {
  return (
    <View>
      <Text>ratings and reviews</Text>
    </View>
  );
};

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={HOME} component={Home} />
      <HomeStack.Screen name={HOTEL} component={Restaurant} />
      <HomeStack.Screen name={RESTAURANT} component={Restaurant} />
      <HomeStack.Screen name={ROOMS} component={Rooms} />
      <HomeStack.Screen name={MEALS} component={Rooms} />
      <HomeStack.Screen name={REVIEWS} component={Reviews} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
