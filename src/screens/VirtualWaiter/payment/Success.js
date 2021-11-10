import React, {useEffect} from 'react'
import {
    Button,
    KeyboardAvoidingView,
    StyleSheet,
    Platform,
    View,
    Image,
    Text
} from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Tick from './tick.gif'
import Tick2 from './Tick2.gif'

const Success = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    useEffect(()=>{
        if(!isFocused) return
        setTimeout(()=>{
            navigation.navigate('LandingPage')
        }, 4500)
    }, [isFocused])
    return (
        <View style={styles.container}>
            <Text style={styles.success}>Payment Successful</Text>
            <View style={styles.photoCnt}>
                <Image style={styles.photo} source={Tick2} />
            </View>
            <Text style={styles.thank}>Thank You !</Text>
            <Text style={styles.thank}>Come Again !!</Text>
        </View>
    );
}
 
export default Success;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    photoCnt: {
        height: 500,
        overflow: 'hidden'
    },
    photo: {
        height: 400
    },
    btnCnt: {
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 20
    },
    success: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 20,
        backgroundColor: '#02d871',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
        color: '#fff',
    },
    thank: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 0,
        backgroundColor: '#02d871',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
        color: '#fff',
        marginBottom: 5
    },
});