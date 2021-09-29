import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


export default function TableDetails({navigation}) {
    const pressHandler = () => {
        //navigation.navigate('Bill');
        navigation.push('Bill');
      }
  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Table details screen</Text>
    //   <Button
    //     title="Get Bill"
    //     onPress={() => navigation.navigate('Bill')}
    //   />
    //   <Button title="Generate Bill" onPress={() => navigation.goBack()} />
      
    // </View>
    <View> 
            <Text> table details screen </Text>
             <Button title='generate bill' onPress={pressHandler} />
     </View>
    
  );
}