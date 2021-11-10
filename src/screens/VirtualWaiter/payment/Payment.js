import React, {useState, useRef} from 'react'
import Card from '../../../shared/card'
import {
    Button,
    KeyboardAvoidingView,
    StyleSheet,
    Platform,
    View
  } from 'react-native';
import {useCart} from '../../../context/CartContext'
import {useOrder} from '../../../context/OrderContext'
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../../config'
import CreditCard from 'react-native-credit-card-form-ui';

const Payment = () => {
  const {clearOrders} = useOrder()
    const creditCardRef = useRef();
    const navigation = useNavigation();

  const handleSubmit = () => {
    clearOrders()
    navigation.navigate('Success')
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={20}
      style={styles.container}
    >
      <CreditCard ref={creditCardRef} />
      <View style={styles.btnCnt}>
        <Button title="Confirm payment" color="#993366" onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
}
 
export default Payment;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnCnt: {
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 20
    }
  });