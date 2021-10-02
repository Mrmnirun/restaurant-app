import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList,Button, Alert, ScrollView } from 'react-native';
import Card from '../../shared/card'
import TableOrderItem from './TableOrderItem'

const TableItem = ({table, handleStateChange}) => {
    
    return (
        <Card>
              <Text>Table number= { table?.table }</Text>
              <Text>Orders</Text>
              {table.orders.map((order, id)=>(
                  <TableOrderItem key={id} order={order} handleStateChange={handleStateChange}/>
              ))}
             </Card>
    );
}
 
export default TableItem;

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