import React from 'react';
import { StyleSheet, View, Text,Button } from 'react-native';
import TableView from './tableView';


export default function Bill({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Bill screen</Text>
    <Button title="Finish Order " onPress={() => navigation.goBack(TableView)} />
  </View>
  );
}