import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList,Button, Alert, ScrollView } from 'react-native';
import Card from "../../../shared/card";

const PendingItem = ({item, menuCardItems, handleStateChange, style={}, buttonText="Take Order"}) => {
    const orderedMenuItems = menuCardItems.filter(menuCardItem=>Object.keys(item.menu_items).map(item=>Number(item)).includes(menuCardItem.id))
    return (
        <Card>
              <Text style={style}>Order number= { item.id }</Text>
              <Text >Table number= { item.table_no}</Text>
             
              {orderedMenuItems.map((orderedMenuItem, id)=>(
                  <Text key={id} style={styles.orderItem}>Meal-{id+1} = { orderedMenuItem.title} - {item.menu_items[orderedMenuItem.id]}</Text>
              ))}
              <Text >Total Price= {item.total_price}</Text>
              {handleStateChange&&<Button title={buttonText} onPress={() =>handleStateChange(item.id)}/>}
             </Card>
    );
}
 
export default PendingItem;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 5,
    },
    orderItem: {
      backgroundColor: 'rgb(0, 64, 84)',
      color: 'white',
      padding: 5
    },
    text: {
      fontSize: 42,
    },
  });