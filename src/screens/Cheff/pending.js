

import React, { useState} from 'react';
import {useEffect} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList,Button, Alert, ScrollView } from 'react-native';
import { useIsFocused } from "@react-navigation/native";
import Card from "../../shared/card";
import PendingItem from './singleItems/PendingItem'
import api from '../../config'

export default function Pending({ navigation, ...props }) {
    const isFocused = useIsFocused();
  const [token, setToken] = useState('')
  const [loading, setLoading] = useState(true)
    const [orders, setOrders] = useState([]);
    const [menuCardItems, setMenuItems] = useState([])
    useEffect(() => {
      if(!isFocused) return
      setOrders([])
        fetch(`${api}/api/auth/staff/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'bruceWayne',
        password: 'sep18g21',
      })
    })
        .then(response=> response.json())
        .then(({token})=>{
          console.log(token)
            setToken(token)
            return fetch(`${api}/api/order/get_orders`,
            {
                headers: {
                    'Authorization': `Token ${token}`,
                },
            })
        })
        .then(response=> response.json())
        .then(data => {
            setOrders(data.orders||[])
            setLoading(false)
        })
        .catch(error=>{
            console.log(error)
            Alert.alert(error.message)
        })
        
    }, [isFocused,]);

    useEffect(()=>{
      if(!isFocused) return
        if (!token) return
        fetch(`${api}/api/menu_items`,
            {
              method: 'GET',
                headers: {
                    'Authorization': `Token ${token}`,
                    'Content-Type': 'application/json',
                },
            })
            .then(response=> response.json())
        .then(data => {
            setMenuItems(data)
        })
    }, [isFocused, token])

const handleStateChange = (orderId) => {
  return fetch(`${api}/api/order/update`,
            {
              method: 'POST',
                headers: {
                    'Authorization': `Token ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                        order_id: orderId,
                      })
            })
            .then(response=> response.json())
        .then(data => {
            console.log(data)
            navigation.navigate('MyOrders');
        })
}

  const pressHandler = () => {
    //navigation.navigate('Bill');
    navigation.navigate('MyOrders');
  }
  
  // const flatListReviews = reviews
  const renderList = () => (
    !orders.filter(order=>order.status == 'initialized').length ? <Text>No Items</Text> :
     orders.filter(order=>order.status == 'initialized').map((order,index)=>(
         <PendingItem item={order} key={index} menuCardItems={menuCardItems} handleStateChange={handleStateChange} style={styles.pendingItemStyle}/>
   ))
  )

  if (loading) return <Text>Loading</Text>
 

  return (
    <ScrollView style={styles.scrollView}>
      {renderList()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 5,
    },
    scrollView: {
      backgroundColor: '#ccc',
      marginHorizontal: 0,
    },
    pendingItemStyle: {
      color: 'red',
      fontSize: 30
    },
  });