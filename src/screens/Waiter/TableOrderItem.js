import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList,Button, Alert, ScrollView } from 'react-native';

const TableOrderItem = ({order, handleStateChange}) => {
    return (
        <>
          <View style={styles.orderItem}>
            <Text style={{...styles.orderItem, width: 120}}>Order no {order.id} :  
                
                
            </Text>
            <Text style={{...styles.status}}>  {order.status}</Text>
            <View style={{alignItems: 'flex-end', marginLeft: 5}}>
            {order.status==='created' && <Button title="Deliver" style={styles.button}  onPress={() =>handleStateChange(order?.id)}/>}
                {order.status==='being_delivered' && <Button title="Delivered" style={styles.button} onPress={() =>handleStateChange(order?.id)}/>}
            </View>
          </View>  
        </>
    );
}
 
export default TableOrderItem;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 5,
    },
    orderItem: {
      backgroundColor: '#BAEFBE',
      color: 'black',
      marginLeft:0,
      padding: 10,
      display: 'flex',
      flexDirection: 'row'
    },
    status: {
      fontSize: 16,
      color: 'black',
      padding: 15,
      borderRadius: 5,
      backgroundColor: '#009900',
      paddingVertical: 5,
      paddingHorizontal: 10,
      width: 110,
      textAlign: 'center'
    },
    button: {
        marginStart: 10
    }
});