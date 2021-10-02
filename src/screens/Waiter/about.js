import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text,Button, TextInput} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export default function About() {
    const [user, setUser] = useState([])
    const [edit, setEdit] = useState(false)

    const handleChange = (text, field) => {
        setUser({...user, [field]: text})
    }
  useEffect(() => {
    fetch('http://178.128.121.215:8000/api/auth/staff/login', {
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
            console.log(token)
            return fetch('http://178.128.121.215:8000/api/auth/staff/user',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                }
            })
        })
        .then(response=> response.json())
        .then(data => {
            console.log(data)
            setUser(data)
        })
        .catch(error=>{
            console.log(error)
            Alert.alert(error.message)
        })
  }, [])
  return (
    <View >
      <Text >About Screen</Text>
      <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
          <Rows data={[['First name', edit?<TextInput value={user?.first_name} editable={true} onChangeText={text=>handleChange(text, 'first_name')}/>:user?.first_name]]} textStyle={styles.TableText}/>
          <Rows data={[['Last name', edit?<TextInput value={user?.last_name} editable={true} onChangeText={text=>handleChange(text, 'last_name')}/>:user?.last_name]]} textStyle={styles.TableText}/>
          <Rows data={[['User name', edit?<TextInput value={user?.username} editable={true} onChangeText={text=>handleChange(text, 'username')}/>:user?.username]]} textStyle={styles.TableText}/>
          <Rows data={[['Email', edit?<TextInput value={user?.email} editable={true} onChangeText={text=>handleChange(text, 'email')}/>:user?.email]]} textStyle={styles.TableText}/>
        </Table>
        {edit
        ?<Button title="Save changes" onPress={() =>{ setEdit(false) }}/>
        :<Button title="Edit Profile" onPress={() =>{ setEdit(true) }}/>
        }
    </View>
  );
}

const styles = StyleSheet.create({
    container: { 
      flex: 1,
      padding: 18,
      paddingTop: 35,
      backgroundColor: '#ffffff' 
    },
    HeadStyle: { 
      height: 50,
      alignContent: "center",
      backgroundColor: '#ffe0f0'
    },
    TableText: { 
      margin: 10,
      padding: 10,

    }
  });