import React, {useState} from 'react'
import Card from '../../../shared/card'
import { StyleSheet, View, Text, SafeAreaView, FlatList,Button, Alert, ScrollView, TouchableHighlight, Image, TextInput, CheckBox } from 'react-native';
import {useCart} from '../../../context/CartContext'
import {useOrder} from '../../../context/OrderContext'
import { useNavigation } from '@react-navigation/native';
import api from '../../../config'
import { RecipeCard } from '../AppStyles';
import {useRestaurant} from '../../../context/RestaurantContext'

const ViewCart = () => {
    const {cart, changeSelection, clearCart} = useCart()
    const {addItem} = useOrder()
    const [customer, setCustomer] = useState('')
    const [token, setToken] = useState('')
    const navigation = useNavigation();
    const {restaurant} = useRestaurant()

    const handleChange = (itemId, selected) => {
        changeSelection(itemId, selected)
    }

    const handleCustomerChange = text => {
        setCustomer(text)
    }

    const handleOrder = () => {
        // navigation.navigate('ViewCart')
        const data = {
            "customer": "janedoe",
            "restaurant": 2,
            "table_no": restaurant.table,
            "total_price": cart.reduce((sum, item, index) => {
                if (item.selected) return sum + item.price*item.quantity
                return sum
            }, 0),
            "menu_items": cart.reduce((sum, item) => {
                if (item.selected) return ({...sum, [item.id]: item.quantity})
                return sum
            }, {}),
            "special_offers": {"1":2}
        }
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
                return fetch(`${api}/api/order`,
                {
                    method: 'POST',
                    headers: {
                        'Authorization': `Token ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
            })
            .then(response=> response.json())
            .then(data => {
                console.log({data})
                clearCart()
                addItem(data.order)
                navigation.navigate('OrderStatus')
            })
            .catch(error=>{
                console.log(error)
                Alert.alert(error.message)
            })
    }
    return (
        <ScrollView style={{marginTop: 50}}>
            {cart.map((item, id)=>(
                <Card key={id}>
                    <View style={styles.title}>
                        <CheckBox
                            style={styles.titleCheckbox}
                            value={item.selected}
                            onValueChange={value=>handleChange(item.id, value)}
                        />
                        <View style={styles.photoCont}>
                            <Image style={styles.photo} source={{ uri: item.photo_main }} />
                        </View>
                        
                        <View style={styles.cartDetail}>
                            <View style={{display: 'flex', flexDirection: 'column'}}>
                                <Text
                                    style={styles.titleText}
                                >
                                    Product - {item.title}
                                </Text>
                                <Text
                                    style={styles.titleText}
                                >
                                    Price - {item.price}
                                </Text>
                                <Text
                                    style={styles.titleText}
                                >
                                    Quantity - {item.quantity}
                                </Text>
                                <Text
                                    style={styles.titleText}
                                >
                                    SubPrice - {item.price * item.quantity}
                                </Text>
                            </View>
                        </View>
                    </View>
                </Card>
            ))}
            <View style={styles.orderButtonCont}>
                    <Text>
                        Total Items - {cart.reduce((sum, item, index) => {
                            if (item.selected) return sum + item.quantity
                            return sum
                        }, 0)}
                    </Text>
                    <Text>
                        Total - {cart.reduce((sum, item, index) => {
                            if (item.selected) return sum + item.price*item.quantity
                            return sum
                        }, 0)}
                    </Text>
                    <Text>
                        Table - {restaurant.table}
                    </Text>
            </View>
            <TextInput
                style={styles.customer}
                editable
                value={customer}
                onChangeText={handleCustomerChange}
                placeholder="Enter customer mobile"
            />
            <View style={styles.orderItemCont}>
                <Button
                    height="50"
                    title="Order now"
                    onPress={handleOrder}
                />
            </View>
        </ScrollView>
    );
}
 
export default ViewCart;

const styles = StyleSheet.create({
    title: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'flex-end',
        alignItems: 'center'
    },
    titleCheckbox: {
        textAlignVertical: 'center'
    },
    titleText: {
        marginVertical: 'auto',
        minWidth: '40%'
    },
    cartDetail: {
        backgroundColor: '#fff',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginHorizontal: 5,
        borderRadius: 8
    },
    orderItemCont: {
        marginVertical: 20,
        paddingHorizontal: 10,
    },
    orderButtonCont: {
        backgroundColor: '#fff',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginHorizontal: 5,
        borderRadius: 8,
        marginVertical: 20,
        paddingHorizontal: 20,
        elevation: 10,
    },
    orderButton: {
        display: 'none',
        height: 50
    },
    photo: {
        ...RecipeCard.photo,
        maxHeight: 100,
        width: 100,
    },
    photoCont: {
        maxHeight: 100,
        overflow: 'hidden',
        borderRadius: 8
    },
    customer: {
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 20,
        marginVertical: 5
    }
});