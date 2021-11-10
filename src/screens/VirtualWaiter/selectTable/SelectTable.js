import React, {useState, useEffect} from 'react'
import { useIsFocused } from "@react-navigation/native";
import { StyleSheet, View, Text, SafeAreaView, FlatList,Button, Alert, ScrollView, TouchableHighlight, Image, TextInput } from 'react-native';
// import api from '../../config'
// import {useCart} from '../../context/CartContext'
// import SingleMenuItem from './SingleMenuItem'
import {useAuth} from '../../../context/AuthContext'
import Table from './Table'

const ViewCart = () => {
    const {logout} = useAuth()
    // const {cart, changeSelection, clearCart} = useCart()
    // const {addItem} = useOrder()
    const [customer, setCustomer] = useState('')
    const [token, setToken] = useState('')
    // const navigation = useNavigation();

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
            "table_no": 3,
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

    const renderRecipes = ({ item }) => (
        <Table table={item} />
    );

    return (
        <SafeAreaView style={{flex: 1}}>
              
                <FlatList
                    vertical
                    showsVerticalScrollIndicator={false}
                    numColumns={3}
                    data={[{id: 1, name: 1},{id: 2, name: 2},{id: 3, name: 3},{id: 4, name: 4},{id: 5, name: 5},{id: 6, name: 6},{id: 7, name: 7},{id: 8, name: 8},{id: 9, name: 9},]}
                    renderItem={renderRecipes}
                    keyExtractor={item => `${item.id}`}
                    ListHeaderComponent={
                      <View>
                            <View style={{ backgroundColor: "white", flex: 0.3, height: 50 }} />
                            <Text
                                style={{
                                    fontSize: 20,
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    marginTop: 20,
                                }}
                            >Tables</Text>
                      </View>
                    }
                    ListFooterComponent={
                        <View style={{marginTop: 20}}>
                        <Button title="Logout" onPress={logout}/>
                        </View>
                    }
                />
            </SafeAreaView>
    );
}
 
export default ViewCart;

const styles = StyleSheet.create({
    headingContainer: {
        backgroundColor: '#fff',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginHorizontal: 5,
        borderRadius: 8,
        marginVertical: 20,
        paddingHorizontal: 20,
        elevation: 10,
    },
    container: {
        flex: 1
    }
    
});