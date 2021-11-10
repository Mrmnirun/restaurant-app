import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList,Button, Alert, ScrollView } from 'react-native';
import Card from "../../../shared/card";

const PendingItem = ({item, menuCardItems, handleStateChange, style={}, buttonText="Take Order"}) => {
    const orderedMenuItems = menuCardItems.filter(menuCardItem=>Object.keys(item.menu_items).map(item=>Number(item)).includes(menuCardItem.id))
    return (
      <View style={styles.container}>
        <Card >
              <Text style={styles.text}>Order number: { item.id }</Text>
              <Text style={styles.ordernum} >Table number: { item.table_no}</Text>
             
              {orderedMenuItems.map((orderedMenuItem, id)=>(
                  <Text key={id} style={styles.orderItem}>{id+1} -  { orderedMenuItem.title} - {item.menu_items[orderedMenuItem.id]}</Text>
              ))}
              <Text style={styles.ordernum}>Total Price: {item.total_price}</Text>
              {handleStateChange&&<Button title={buttonText} onPress={() =>handleStateChange(item.id)}/>}
             </Card>
          </View>
    );
}
 
export default PendingItem;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 5,
    },
    orderItem: {
      backgroundColor: '#BAEFBE',
      color: '#444',
      fontWeight: Platform.OS === 'android' ? 'normal' : '900',
      paddingLeft: 10,
      marginLeft:0,
      fontSize: 19
    },
    ordernum: {
      color: '#888',
      fontWeight: Platform.OS === 'android' ? 'normal' : '900',
      padding: 5,
      marginVertical:0,
      fontSize: 18
    },
    text: {
      fontSize: 15,
    },
  });