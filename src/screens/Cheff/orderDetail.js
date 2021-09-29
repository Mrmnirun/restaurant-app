import React from 'react';
import { StyleSheet, View, Text ,Button} from 'react-native';


export default function Orderdetail({navigation,route}) {
  let {item } = route.params
  const pressHandler = () => {
    //navigation.navigate('Bill');
    navigation.goBack();
  }
  return (
    <View >
      <Text > order details Screen</Text>
      <Button title="take order" />
      <Button title="Go back"  onPress={pressHandler}/>

      <Text >
          { item.title}
        </Text>
        <Text>{item.body }</Text>
        <Text>{ item.rating }</Text>
    </View>
  );
}