import React, {useState, useEffect} from 'react'
import MenuCard from './MenuCard'
import { useIsFocused } from "@react-navigation/native";
import { StyleSheet, View, Text, TouchableOpacity, FlatList,Button, Alert, ScrollView, TouchableHighlight, Image } from 'react-native';
import styles from './styles';

const getCategoryName = (name) => 'cat'

const MenuItems = (navigation) => {
    // const isFocused = useIsFocused();
    const [token, setToken] = useState('')
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        //if(!isFocused) return
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
              return fetch('http://192.168.1.35:8000/api/menu_items',
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
          
      }, []);

    const renderRecipes = ({ item }) => (
        <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressRecipe(item)}>
          <View style={styles.container}>
            <Image style={styles.photo} source={{ uri: item.photo_url }} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
          </View>
        </TouchableHighlight>
    );
      
    return (
        <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={[{title: 'frdcs', categoryId: 'fews', photo_url: 'fvejj', recipeId: 'fddgfg'}]}
          renderItem={renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
}
 
export default MenuItems;