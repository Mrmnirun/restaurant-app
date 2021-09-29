import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


export default function AddOrder({navigation}) {
    const pressHandler = () => {
        navigation.push('Plate');
      }
  return (
    <View> 
    <Text> add order screen </Text>
     <Button title='view plate' onPress={pressHandler} />
  </View>
  );
}