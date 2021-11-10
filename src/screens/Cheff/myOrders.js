import React, {useState,useEffect} from 'react';
import { StyleSheet, View, Text ,Button, ScrollView} from 'react-native';
import Card from "../../shared/card";
import { useIsFocused } from "@react-navigation/native";
import PendingItem from './singleItems/PendingItem'
import api from '../../config'

export default function MyOrders({navigation,...props}) {
    const isFocused = useIsFocused();
    const [token, setToken] = useState('')
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
        })
        .catch(error=>{
            console.log(error)
            Alert.alert(error.message)
        })
        
    }, [isFocused]);

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
            .then(response=> {
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
            })
            .then(res=>res.json())
        .then(data => {
            console.log(data)
            navigation.navigate('Finished');
        })
    }

    const renderList = () => (
        orders.filter(order=>order.status == "confirmed").map((order,index)=>(
            <PendingItem item={order} key={index} menuCardItems={menuCardItems} handleStateChange={handleStateChange} buttonText="Finished"/>
        ))
    )



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
      marginHorizontal:0,
    },
    text: {
      fontSize: 42,
    },
  });