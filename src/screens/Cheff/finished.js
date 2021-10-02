import React, {useState, useEffect}  from 'react';
import { StyleSheet, View, Text, ScrollView  } from 'react-native';
import Card from "../../shared/card";
import { useIsFocused } from "@react-navigation/native";
import PendingItem from './singleItems/PendingItem'

export default function Finished({navigation,route}) {
    const isFocused = useIsFocused();
    const [token, setToken] = useState('')
    const [orders, setOrders] = useState([]);
    const [menuCardItems, setMenuItems] = useState([])
    useEffect(() => {
      if(!isFocused) return
      setOrders([])
        fetch('http://192.168.1.35:8000/api/auth/staff/login', {
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
            setToken(token)
            return fetch('http://192.168.1.35:8000/api/order/get_orders',
            {
                headers: {
                    'Authorization': `Token ${token}`,
                },
            })
        })
        .then(response=> response.json())
        .then(data => {
            setOrders(data.orders||[])
        })
        .catch(error=>{
            console.log(error)
            Alert.alert(error.message)
        })
        
    }, [isFocused]);

    useEffect(()=>{
        if (!token) return
        if(!isFocused) return
        fetch('http://192.168.1.35:8000/api/menu_items',
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
  return fetch('http://192.168.1.35:8000/api/order/update',
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
            navigation.push('Finished');
        })
}

  const renderList = () => (
    orders.filter(order=>order.status == "created").map((order,index)=>(
        <PendingItem item={order} key={index} menuCardItems={menuCardItems}/>
  ))
  )
  return (
    <>
    <ScrollView style={styles.scrollView}>
    {renderList()}
    </ScrollView>
   </>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 5,
    },
    scrollView: {
      backgroundColor: 'rgb(34, 34, 34)',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
  });