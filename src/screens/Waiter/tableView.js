import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


export default function TableView({navigation}) {

  const pressHandler1 = () => {
    //navigation.navigate('Bill');
    navigation.push('TableDetails');
  }
  const pressHandler2 = () => {
    //navigation.navigate('Bill');
    navigation.push('AddOrder');
  }
  return (

        <View> 
            <Text> table view screen </Text>
             <Button title='table detail screen' style={styles.button} onPress={pressHandler1} />
             <Button title='Add order' onPress={pressHandler2} />
         </View>
  );
}

const styles = StyleSheet.create({

  button: {
    width: 200,
    marginTop: 20,
    backgroundColor: "green",
    padding: 15,
    borderRadius: 50,
  },
  btnText: {
    color: "white",
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
  },
});