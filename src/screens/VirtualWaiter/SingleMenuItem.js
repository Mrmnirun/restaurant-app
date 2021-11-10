import React, {useState} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList,Button, Alert, ScrollView, TouchableHighlight, Image, TextInput } from 'react-native';
import styles from './styles';
import {useCart} from '../../context/CartContext'

const SingleMenuItem = ({item}) => {
    const [quantity, setQuantity] = useState('1')
    const {addItem} = useCart()

    const handleChange = (text) => {
        console.log(text)
        setQuantity(text)
    }

    const clickHandler = () => {
        if (!Number(quantity)) return Alert.alert('Please enter valid number')
        addItem(item, Number(quantity))
    }

    return (
        <TouchableHighlight underlayColor='rgba(73,182,77,0.9)'>
          <View style={styles.container}>
            <Image style={styles.photo} source={{ uri: item.photo_main }} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.category}>{item.price} Rs</Text>
            <TextInput style={styles.qty}
                editable
                value={quantity}
                onChangeText={handleChange}
                keyboardType='numeric'
            />
            <TouchableOpacity
                onPress={clickHandler}
                style={styles.addToCart}
            >
                <Text style={styles.cartText}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </TouchableHighlight>
    );
}
 
export default SingleMenuItem;