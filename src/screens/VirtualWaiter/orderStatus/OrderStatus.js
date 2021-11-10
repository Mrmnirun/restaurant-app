import React, {useState, useEffect} from 'react'
import Card from '../../../shared/card'
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    FlatList,
    Button,
    Alert,
    ScrollView,
    TouchableHighlight,
    Image,
    TextInput,
    CheckBox
} from 'react-native';
import {useOrder} from '../../../context/OrderContext'
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../../config'
import Preparing from './Preparing.gif'
import OrderItem from './OrderItem'

const OrderStatus = () => {
    const [token, setToken] = useState('')
    const orders = useOrder().orders || []
    // const orders =  [
    //     {
    //                 "customer": 4,
    //                 "customer_review": "",
    //                 "date_created": "2021-11-06T15:05:30.269130+05:30",
    //                 "id": 107,
    //                 "menu_items": "{\"1\": 15, \"4\": 1}",
    //                 "restaurant": 2,
    //                 "special_offers": "{\"1\": 2}",
    //                 "status": "initialized",
    //                 "table_no": 3,
    //                 "total_price": "250.00",
    //               }
    // ]
    console.log({orderInOrderStatus: orders})
    const navigation = useNavigation();
    // if (!order) {
    //     order = {
    //         "customer": 4,
    //         "customer_review": "",
    //         "date_created": "2021-11-06T15:05:30.269130+05:30",
    //         "id": 61,
    //         "menu_items": "{\"1\": 15, \"4\": 1}",
    //         "restaurant": 2,
    //         "special_offers": "{\"1\": 2}",
    //         "status": "initialized",
    //         "table_no": 3,
    //         "total_price": "250.00",
    //       }
    // }

    const handleChange = (itemId, selected) => {
        changeSelection(itemId, selected)
    }

    const handleCustomerChange = text => {
        setCustomer(text)
    }

    const handleOrder = () => {
        navigation.navigate('MenuItems')
    }

    useEffect(()=>{
        fetch(`${api}/api/auth/staff/login`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: 'virtualWaiter001',
              password: 'sep18g21',
            })
        })
            .then(response=> response.json())
            .then(({token})=>{
                setToken(token)
            })
            .catch(error=>{
                console.log(error)
                Alert.alert(error.message)
            })
    }, [])

    if (!token) return null

    return (
        <ScrollView style={{marginTop: 50}}>
            <View style={styles.photoCnt}>
                <Image style={styles.photo} source={Preparing} />
            </View>
            {orders.map((order, id)=>(
                <OrderItem order={order} token={token} key={id}/>
            ))}
            
            <View style={styles.orderButtonCont}>
                <Button
                    title="Add new order"
                    onPress={handleOrder}
                    color='#ff9933'
                />
            </View>
                <View style={styles.orderButtonCont}>
                <Button
                    title="Pay now"
                    color='#ff9933'
                    onPress={()=>navigation.navigate('Payment')}
                />
            </View>
        </ScrollView>
    );
}
 
export default OrderStatus;

const styles = StyleSheet.create({
    title: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'flex-end',
        
    },
    titleCheckbox: {

    },
    titleText: {
        marginVertical: 'auto',
        minWidth: '40%'
    },
    cartDetail: {
        backgroundColor: '#ccc',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginHorizontal: 5,
        borderRadius: 8
    },
    orderButtonCont: {
        paddingTop: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    orderButton: {
        display: 'flex',
        height: 50
    },
    photo: {
        height: 300,
        width: "100%",
    },
    photoCnt: {
        height: 250,
        overflow: 'hidden'
    },
    status: {
        backgroundColor: '#00cc66',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginHorizontal: 5,
        marginTop: 5,
        borderRadius: 8
    },
    statusText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff'
    }
});