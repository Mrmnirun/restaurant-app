import React, {useState, useEffect} from 'react'
import MenuCard from './MenuCard'
import { useIsFocused } from "@react-navigation/native";
import { StyleSheet, View, Text, SafeAreaView, FlatList,Button, Alert, ScrollView, TouchableHighlight, Image, TextInput } from 'react-native';
import api from '../../config'
import {useCart} from '../../context/CartContext'
import SingleMenuItem from './SingleMenuItem'

const MenuItems = ({navigation}) => {
    // const isFocused = useIsFocused();
    const [token, setToken] = useState('')
    const [menus, setMenus] = useState([]);
    const {addItem} = useCart()

    useEffect(() => {
        //if(!isFocused) return
        setMenus([])
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
            console.log({token})
              setToken(token)
              return fetch(`${api}/api/menu_items`,
              {
                  headers: {
                      'Authorization': `Token ${token}`,
                  },
              })
          })
          .then(response=> response.json())
          .then(data => {
              setMenus(data||[])
          })
          .catch(error=>{
              console.log(error)
              Alert.alert(error.message)
          })
          
      }, []);

    const renderRecipes = ({ item }) => (
        <SingleMenuItem item={item} />
    );
      
    return (
            <SafeAreaView style={{flex: 1}}>
              
                <FlatList
                    vertical
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    data={menus}
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
                            >Menus</Text>
                      </View>
                    }
                    ListFooterComponent={<View style={styles.footer}>
                    <Button
                        title="View Cart"
                        color="#ff9933"
                        onPress={()=>navigation.navigate('ViewCart')}
                    />
                    </View>}
                />
            </SafeAreaView>
    );
}
 
export default MenuItems;

const styles = StyleSheet.create({
  footer: {
    height: 50,
    padding: 20,
    marginBottom: 15
  }
});