import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList,Button, Alert, ScrollView } from 'react-native';

const TableOrderItem = ({order, handleStateChange}) => {
    return (
        <>
            <Text style={styles.orderItem}>
                {order.id} - :
                <Text style={styles.status}>{order.status}</Text>
                {order.status==='created' && <Button title="Deliver" style={styles.button}  onPress={() =>handleStateChange(order?.id)}/>}
                {order.status==='being_delivered' && <Button title="Delivered" style={styles.button} onPress={() =>handleStateChange(order?.id)}/>}
            </Text>
            
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
      backgroundColor: 'rgb(0, 64, 84)',
      color: 'white',
      padding: 5
    },
    status: {
      fontSize: 16,
      color: 'pink',
      padding: 15,
      borderRadius: 5
    },
    button: {
        marginStart: 10
    }
});