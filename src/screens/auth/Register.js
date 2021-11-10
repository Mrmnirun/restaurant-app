import React, {useState} from 'react';
import {Text,View,Image, TextInput, Alert } from 'react-native';
// import Icon from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
        return (false)
}

export default Register = () => {
    const navigation = useNavigation();
    const [values, setValues] = useState({name: '', email: '', password: '', confirmPassword: ''})
    const changeHandler = (field, value) => {
        setValues({...values, [field]: value})
    }

    const handleSubmit = () => {
        if (values.password!==values.confirmPassword)return Alert.alert('Password missmatch')
        if (!values.email)return Alert.alert('Email required')
        if (!validateEmail(values.email))return Alert.alert('Enter a valid email address')
        if (values.name.length<4)return Alert.alert('Name too short')
        if (values.password.length<9)return Alert.alert('Password too short')
        console.log('kjbbkjb')
        fetch('http://192.168.1.6:8000/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if (data.status==='fail') {
                Alert.alert(data.error)
            } else {
                navigation.navigate('LoginScreen')
            }
        }).catch(e=>Alert.alert(e.message))
    }

    return(
        <View style={{backgroundColor:"#FFF",height:"100%", marginTop: 40}}>
            {/* <Image source ={require('../../../assets/planting.jpg')}
                style={{width:"100%",height:"25%",paddingBottom:30}}
            /> */}
            <Text
                style={{
                    fontSize:30,
                    fontWeight: 'bold',
                    paddingTop:30,
                    fontFamily:"notoserif",
                    alignSelf:"center",
                }}
            >Register account</Text>

            <Text
            style={{
                fontFamily:"sans-serif-condensed",
                marginHorizontal:35,
                fontSize:22,
                textAlign:'center',
                marginTop:5,
                opacity:0.7
            }}
            >
                Forest is the home of your ancestors!
            </Text>

            <View style={{
                flexDirection:"row",
                alignItems:"center",
                marginHorizontal:50,
                borderWidth:2,
                marginTop:50,
                paddingHorizontal:10,
                borderColor:"#4caf50",
                borderRadius:23,
                paddingVertical:2
            }}>
                
                <TextInput 
                    placeholder="Full Name"
                    placeholderTextColor="#4caf50"
                    style={{paddingHorizontal:10}}
                    value={values.name}
                    onChangeText={text=>changeHandler('name', text)}
                />
            </View>

            <View style={{
                flexDirection:"row",
                alignItems:"center",
                marginHorizontal:50,
                borderWidth:2,
                marginTop:15,
                paddingHorizontal:10,
                borderColor:"#4caf50",
                borderRadius:23,
                paddingVertical:2
            }}>
                
                <TextInput 
                    placeholder="Email"
                    placeholderTextColor="#4caf50"
                    style={{paddingHorizontal:10}}
                    value={values.email}
                    onChangeText={text=>changeHandler('email', text)}
                />
            </View>

            <View style={{
                flexDirection:"row",
                alignItems:"center",
                marginHorizontal:55,
                borderWidth:2,
                marginTop:15,
                paddingHorizontal:10,
                borderColor:"#4caf50",
                borderRadius:23,
                paddingVertical:2
            }}>
                
                <TextInput 
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor="#4caf50"
                    style={{paddingHorizontal:10}}
                    value={values.password}
                    onChangeText={text=>changeHandler('password', text)}
                />

            </View>
            <View style={{
                flexDirection:"row",
                alignItems:"center",
                marginHorizontal:55,
                borderWidth:2,
                marginTop:15,
                paddingHorizontal:10,
                borderColor:"#4caf50",
                borderRadius:23,
                paddingVertical:2
            }}>
                
                <TextInput 
                    secureTextEntry
                    placeholder="Confirm Password"
                    placeholderTextColor="#4caf50"
                    style={{paddingHorizontal:10}}
                    value={values.confirmPassword}
                    onChangeText={text=>changeHandler('confirmPassword', text)}
                />
                
            </View>

            <View style={{
                marginHorizontal:55,
                alignItems:"center",
                justifyContent:"center",
                marginTop:15,
                backgroundColor:"#4caf50",
                paddingVertical:10,
                borderRadius:23
            }}>
                <Text
                    style={{
                        color:"white",
                        fontFamily:"notoserif"
                    }}
                    onPress={handleSubmit}
                >Register</Text>
            </View>
            <Text 
                onPress={()=>navigation.navigate('LoginScreen')}
                style={{
                    alignSelf:"center",
                    color:"green",
                    fontFamily:"sans-serif-condensed",
                    paddingTop:15
                }}
            >Go back to Login</Text>
        </View>
    )
}