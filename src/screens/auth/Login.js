import React, { useState, useEffectm, useContext } from 'react';
import { Text, View, Image, TextInput, Alert } from 'react-native';
// import Icon from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
// import * as Font from 'expo-font'
import { useAuth } from '../../context/AuthContext';
import api from '../../config'

export default function Login({ }) {
    const { updateCurrentUser, saveToken, currentUser, login } = useAuth();
    const navigation = useNavigation();
    const [values, setValues] = useState({ username: '', password: '' })

    const changeHandler = (field, value) => {
        setValues({ ...values, [field]: value })
    }

    const handleSubmit = () => {
        console.log({values})
        fetch(`${api}/api/auth/staff/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        }).then(res => res.json())
            .then(({ non_field_errors, user, token, user_class }) => {
                if (non_field_errors) {
                    return Alert.alert(non_field_errors[0])
                }
                // if (user.username === 'dilax@gmail.com') user.isAdmin = true
                updateCurrentUser(user)
                saveToken(token)
                login({...user, user_class}, token)
                console.log(token)
                navigation.navigate('Posts', { screen: 'Main' })
            })
    }

    return (
        <View style={{ backgroundColor: "#eee", height: "100%" }}>
            <View style={{width: '100%', height: 250}}>
                <Image source={require('../../../assets/loginLogo.png')}
                    style={{
                        width: 400, 
                        height: 400 
                    }}
                />
            </View>
            <Text
                style={{
                    fontSize: 30,
                    fontFamily: "notoserif",
                    fontWeight: 'bold',
                    alignSelf: "center",
                }}
            >Cloud Hotel</Text>

            <Text
                style={{
                    fontFamily: "sans-serif-condensed",
                    marginHorizontal: 55,
                    textAlign: 'center',
                    marginTop: 5,
                    opacity: 0.4
                }}
            >
                Login here
            </Text>

            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 50,
                paddingHorizontal: 10,
                borderColor: "#4caf50",
                borderRadius: 23,
                paddingVertical: 2
            }}>
                {/* <Icon name="mail" color="#4caf50" size={24}/> */}
                <TextInput
                    style={{ paddingHorizontal: 10 }}
                    editable
                    placeholder="User name"
                    value={values.username}
                    onChangeText={(text) => changeHandler('username', text)}
                />



            </View>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 15,
                paddingHorizontal: 10,
                borderColor: "#4caf50",
                borderRadius: 23,
                paddingVertical: 2
            }}>
                {/* <Icon name="mail" color="#4caf50" size={24}/> */}
                <TextInput
                    style={{ paddingHorizontal: 10 }}
                    editable
                    secureTextEntry={true}
                    placeholder="Password"
                    value={values.password}
                    onChangeText={(text) => changeHandler('password', text)}
                />
            </View>

            <View style={{
                marginHorizontal: 55,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 15,
                backgroundColor: "#4caf50",
                paddingVertical: 10,
                borderRadius: 23
            }}>
                <Text
                    style={{
                        color: "white",
                        fontFamily: "sans-serif-condensed"
                    }}
                    onPress={handleSubmit}
                >Login Now</Text>
            </View>
            <Text
                style={{
                    alignSelf: "center",
                    color: "black",
                    fontFamily: "notoserif",
                    paddingTop: 35,
                    display: 'none'
                }}
            >Don't you have an account?</Text>
            {/* <Text
                onPress={() => navigation.navigate('RegisterScreen')}
                style={{
                    alignSelf: "center",
                    color: "green",
                    fontFamily: "sans-serif-condensed",
                    paddingVertical: 5
                }}
            >To Become a New User</Text> */}
        </View>
    )
}