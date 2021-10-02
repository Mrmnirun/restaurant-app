import React, {useState, useEffect} from 'react';
import { StyleSheet, ScrollView, Text, Button } from 'react-native';
import TableItem from './TableItem'
import { useIsFocused } from "@react-navigation/native";

export default function TableView({navigation}) {
    const isFocused = useIsFocused();
    const [token, setToken] = useState('')
    const [orders, setOrders] = useState([]);
    const [tables, setTables] = useState([])

    const fetchData = () => {
        fetch('http://192.168.1.35:8000/api/auth/staff/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'dianaPrince',
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
              console.log(data)
              setOrders(data.orders||[])
          })
          .catch(error=>{
              console.log(error)
              Alert.alert(error.message)
          })
    }
    useEffect(() => {
        if(!isFocused) return
          
          fetchData()
      }, [isFocused,]);

      useEffect(()=>{
          let tables = []
          orders.forEach((item, id)=>{
              const table = tables.find(t=>t.table===item.table_no)
              if(!table){
                  tables = [...tables, {table: item.table_no, orders: [item]}]
              }else {
                table.orders = [...table.orders, item]
              }
          })
          console.log({tables})
          setTables(tables)
      }, [orders])

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
                  setOrders([])
                  fetchData()
              })
      }

  const pressHandler1 = () => {
    //navigation.navigate('Bill');
    navigation.push('TableDetails');
  }
  const pressHandler2 = () => {
    //navigation.navigate('Bill');
    navigation.push('AddOrder');
  }
  return (

        <ScrollView> 
            <Text> table view screen </Text>
            {tables.map((table, id)=> (
                <TableItem key={id} table={table} handleStateChange={handleStateChange}/>
            ))}
             
         </ScrollView>
  );
}

const styles = StyleSheet.create({

  button: {
    width: 200,
    marginTop: 20,
    backgroundColor: "green",
    padding: 15,
    borderRadius: 50,
  },
  btnText: {
    color: "white",
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
  },
});