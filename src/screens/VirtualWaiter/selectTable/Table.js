import React, {useState} from 'react'
import {
    StyleSheet,
    Text, TouchableOpacity,
    View
} from 'react-native';
import styles from './styles';
import {useRestaurant} from '../../../context/RestaurantContext'
import { useNavigation } from '@react-navigation/native';

const Table = ({table}) => {
    const {selectTable} = useRestaurant()
    const navigation = useNavigation()

    const clickHandler = (table) => {
        selectTable(table)
        navigation.navigate('LandingPage');
    }

    return (
        <View style={styles.container}>
        <TouchableOpacity
            onPress={()=>clickHandler(table.name)}
            style={{backgroundColor: '#fff', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center',}}
        >
            <Text style={styles.cartText}>{table.name}</Text>
        </TouchableOpacity>
        </View>
    );
}
 
export default Table;