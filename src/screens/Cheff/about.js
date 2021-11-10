import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text,Button, TextInput, Alert} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import api from '../../config'

export default function About() {
    const [user, setUser] = useState([])
    const [edit, setEdit] = useState(false)

    const handleChange = (text, field) => {
        setUser({...user, [field]: text})
    }
  useEffect(() => {
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
            console.log(token)
            return fetch(`${api}/api/auth/staff/user`,
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
    <View style={styles.container}>
      <Table borderStyle={{borderWidth: 0, borderColor: '#ffa1d2'}}>
          <Rows style={styles.row} data={[['First name', edit?<TextInput style={styles.input} value={user?.first_name} editable={true} onChangeText={text=>handleChange(text, 'first_name')}/>:user?.first_name]]} textStyle={styles.TableText}/>
          <Rows style={styles.row2} data={[['Last name', edit?<TextInput style={styles.input} value={user?.last_name} editable={true} onChangeText={text=>handleChange(text, 'last_name')}/>:user?.last_name]]} textStyle={styles.TableText}/>
          <Rows style={styles.row} data={[['User name', edit?<TextInput style={styles.input} value={user?.username} editable={true} onChangeText={text=>handleChange(text, 'username')}/>:user?.username]]} textStyle={styles.TableText}/>
          <Rows style={styles.row2} data={[['Email', edit?<TextInput style={styles.input} value={user?.email} editable={true} onChangeText={text=>handleChange(text, 'email')}/>:user?.email]]} textStyle={styles.TableText}/>
        </Table>
        <View style={styles.btnCnt}>
        {edit
        ?<Button color="#00b300" title="Save changes" onPress={() =>{ setEdit(false) }}/>
        :<Button color="#00b300" title="Edit Profile" onPress={() =>{ setEdit(true) }}/>
        }
        </View>
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

    },
    row: {
      height: 60, 
      backgroundColor: '#BAEFBE',
    },
    row2: {
      height: 60, 
      backgroundColor: '#F6F7Fb',
    },
    btnCnt: {
      marginTop: 40
    },
    input: {
      borderWidth: 1,
      borderColor: 'black',
      height: 40,
      borderRadius: 5,
      paddingHorizontal: 10
    }
  });